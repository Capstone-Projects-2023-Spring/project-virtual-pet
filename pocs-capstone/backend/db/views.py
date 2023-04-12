from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
import requests
import json
# Create your views here.

from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from db.studybuddyemail import send_email
import db.canvasrequests as canvas
import pprint
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def send_notification(request):
    print(request)
    print(request.method)
    if request.method != 'POST':
        return HttpResponseBadRequest('Invalid request method bro')

    # Parse the request data
    data = json.loads(request.body)

    # Send the push notification using Firebase Cloud Messaging
    url = 'https://fcm.googleapis.com/fcm/send'
    headers = {
        'Authorization': 'key=AAAAnCuTNW8:APA91bEyKOupWrTTxgOlG-M11r9rgg-JzTHETqmoQCwD1kv7JLEEXKFoLpOfvbgp12OuNEvyk52m1v6Cs9CpRDw8FUD90OSXDiLwHDNqaHf6XU05J9yqtp2ViHkxvxQyh62HTshnCujd',
        'Content-Type': 'application/json',
    }
    payload = {
        'to': data['token'],
        'notification': {
            'title': data['title'],
            'body': data['body'],
            #'sound': data['sound'],
            #'icon': data['icon']
        },
    }
    response = requests.post(url, headers=headers, json=payload)

    if response.status_code != 200:
        return HttpResponseBadRequest('Failed to send notification')

    return HttpResponse('Notification sent')

def lololol(userId):

    _user = NewUser.objects.filter(id=userId)
    canvas_token = _user[0].get_canvas_token()

    assignments, status = canvas.get_all_assignments(canvas_token)
    # _userid = self.request.user

    # print(_user[0].get_canvas_token())
    # print(_user)
    return assignments, status


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        registration_serializer = RegisterUserSerializer(data=request.data)
        if registration_serializer.is_valid():
            newuser = registration_serializer.save()
            if newuser:
                try:
                    send_email(request.data['email'])
                except:
                    print("Oops! Registration email failed to send")
                return Response(status=status.HTTP_201_CREATED)

        print(registration_serializer.errors)
        errors = registration_serializer.errors
        if ('email' in errors.keys()):
            return Response("Email is taken", status=status.HTTP_409_CONFLICT)
        if ('username' in errors.keys()):
            return Response("Username is taken", status=status.HTTP_409_CONFLICT)
        return Response(registration_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status.HTTP_202_ACCEPTED)
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)


class CanvasView(APIView):
    permission_classes = [IsAuthenticated,]
    
    def __enter_inventory_item(self, _user, old_date, new_task):
        pp = pprint.PrettyPrinter(indent=4)
        print(type(old_date))
        print(type(new_task.completed_date))
        #print((old_task.completed_date!=None) and (new_task.completed_date != None))
        
        if ((old_date!=None) and (new_task.completed_date != None)):
            new_task.completed = True
            new_task.save()
            print("Guarded Completed Update:")
            #pp.pprint(old_task)
            #pp.pprint(new_task)
            #print("{} {}".format(old_task, new_task))
            return
        
        if old_date == None:
            # print(
            #     "COMPLETED - {} {}".format(old_task.completed_date, new_task.completed_date))
            if new_task.completed_date != None:  # first time completed
                
                new_task.completed = True # The task has officially been completed!
                new_task.save()
                #print("Old &")
                #pp.pprint(new_task)
                try:
                    obj = Inventory.objects.get(
                        user=_user, candy_base_type=new_task.task_type, candy_level=new_task.task_level)
                    updated_quantity = obj.quantity + 1
                    obj.quantity = updated_quantity
                    obj.save()  # inventory is updated
                    print("Update Inventory:")
                    pp.pprint(obj)
                except Inventory.DoesNotExist:
                    obj = Inventory(
                        user=_user, candy_base_type=new_task.task_type, candy_level=new_task.task_level, quantity=1)
                    obj.save()  # new inventory item now created
                    print("Create Inventory:")
                    pp.pprint(obj)

        # print(
        #     "DUE DATES - {} {}".format(old_task['due_date'], new_task.due_date))
        pass

    def get(self, request):
        pp = pprint.PrettyPrinter(indent=4)
        test_task = Task.objects.filter(unique_canvas_tag="knownbadtag")
        pp.pprint(test_task)
        # $print("1 HEREERERERE")
        __user = self.request.user
        _user = self.request.user.id
        course_data, _status = lololol(_user)
        if _status != 200:
            return Response(None, _status)

        # if not course_data:
        #    return Response(None,status=status.HTTP_401_UNAUTHORIZED)
        # print("USER_ID:"+str(_user))
      
        try:

            for x in course_data:
                try:
                    tag = str(_user)+str(x['course_id']) + \
                        str(x['assignment_id'])
                    x['unique_canvas_tag'] = tag
                    x['user_id'] = _user

                    old_task = Task.objects.filter(unique_canvas_tag=tag)
                    old_date = None
                    if(old_task.count()):
                        old_date = old_task[0].completed_date
                        pp.pprint("COMPLETED DATE: "+str(old_task[0]))
                        pp.pprint("COMPLETED DATE: "+str(old_task[0].completed_date))
                    else:
                        print("YUP")
                    # print("TAG" + x['unique_canvas_tag'])
                    serializer = CanvasSerializer(x)
                    # print(serializer.data)
                    temp = serializer.data # task data BEFORE update
                    #print("-------------TEMP-----------")
                    #pp.pprint(temp)
                    obj, created = Task.objects.update_or_create(
                        unique_canvas_tag=tag, defaults=serializer.data)  # TODO validate the dat
                    
                    # print(dir(obj))

                    if created:
                        print("Created: ")
                        pp.pprint("{}".format(obj))
                        if obj.completed_date != None:
                            obj.completed = True
                            obj.save()
                    else:  # operate on object here
                        old_task=old_task[0]
                        pp.pprint("what is is here?: "+str(old_task.completed_date))
                        self.__enter_inventory_item(__user, old_date, obj)
                        # print("updated")
                except Exception as e:
                    print(e)

        except Exception as e:
            print(e)
            _status = 500

        return Response(course_data, _status)


class NewUserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    serializer_class = UserDataSerializer

    # query tasks by user.
    def get_queryset(self):
        # _user = JWTAuthentication(self.request)
        _user = self.request.user.id
        return NewUser.objects.filter(id=_user)


class TaskViewSet(viewsets.ModelViewSet):

    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        # return super().perform_create(self,serializer)
    # query tasks by user.

    def get_queryset(self):
        _user = self.request.user
        return Task.objects.filter(user=_user)


class AvatarViewSet(viewsets.ModelViewSet):

    serializer_class = AvatarSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        # return super().perform_create(self,serializer)
    # query tasks by user.

    def get_queryset(self):
        _user = self.request.user
        return Avatar.objects.filter(user=_user)


class InventoryViewSet(viewsets.ModelViewSet):

    serializer_class = InventorySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        # return super().perform_create(self,serializer)
    # query tasks by user.

    def get_queryset(self):
        _user = self.request.user
        return Inventory.objects.filter(user=_user)

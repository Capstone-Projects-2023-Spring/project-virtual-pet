from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import *
from .models import *
from .models import NewUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from db.studybuddyemail import send_email
import db.canvasrequests as canvas
import pprint

pp = pprint.PrettyPrinter(indent=2)


def lololol(userId):

    u = NewUser.objects.get(id=userId)
    # u.demo_canvas=False
    # u.save()

    canvas_token = u.get_canvas_token()

    if canvas_token == "canvastoken":  # Here we check for canvas token
        return mock_canvas_data(u)

    return canvas.get_all_assignments(canvas_token)
    # assignments, status = canvas.get_all_assignments(canvas_token)

    # return assignments, status


def mock_canvas_data(user):

    _tasks = []

    for i in range(1, 3):
        _tasks.append({'title': "Homework",
                      'due_date': "2023-06-01",

                       'task_type': 'S',
                       'task_level': 3,  # TODO - this should be set here!
                       # 'recurring': 'false',
                       # 'recurring_time_delta': 0,
                       'course_title': 'Capstone',
                       'completed_date': None,
                       'description': 'Very instructive assignment.',
                       'course_id': '000'+str(i),
                       'assignment_id': str(i)+'000'

                       })

    for i in range(3, 5):
        _tasks.append({'title': "Quiz",
                      'due_date': "2023-06-01",

                       'task_type': 'M',
                       'task_level': 3,  # TODO - this should be set here!
                       # 'recurring': 'false',
                       # 'recurring_time_delta': 0,
                       'course_title': 'Capstone',
                       'completed_date': None,
                       'description': 'Very instructive assignment.',
                       'course_id': '000'+str(i),
                       'assignment_id': str(i)+'000'

                       })

    _tasks.append({'title': "Project",
                   'due_date': "2023-06-01",

                   'task_type': 'C',
                   'task_level': 3,  # TODO - this should be set here!
                   # 'recurring': 'false',
                   # 'recurring_time_delta': 0,
                   'course_title': 'Capstone',
                   'completed_date': None,
                   'description': 'Very instructive assignment.',
                   'course_id': '0005',
                   'assignment_id': '5000'

                   })

    if user.demo_canvas == True:
        _tasks[0]['completed_date'] = "2023-06-01"
        user.demo_canvas = True
        user.save()
        print(user.demo_canvas)
        pp.pprint(_tasks)
        return _tasks, 200
    user.demo_canvas = True
    user.save()
    return _tasks, 200


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

        if ((old_date != None) and (new_task.completed_date != None)):
            new_task.completed = True
            new_task.save()
            return

        if old_date == None:
            if new_task.completed_date != None:  # first time completed

                new_task.completed = True  # The task has officially been completed!
                new_task.save()

                try:
                    obj = Inventory.objects.get(
                        user=_user, candy_base_type=new_task.task_type, candy_level=new_task.task_level)
                    updated_quantity = obj.quantity + 1
                    obj.quantity = updated_quantity
                    obj.save()  # inventory is updated

                except Inventory.DoesNotExist:
                    obj = Inventory(
                        user=_user, candy_base_type=new_task.task_type, candy_level=new_task.task_level, quantity=1)
                    obj.save()  # new inventory item now created
        pass

    def get(self, request):

        pp = pprint.PrettyPrinter(indent=4)
        test_task = Task.objects.filter(unique_canvas_tag="knownbadtag")

        __user = self.request.user
        _user = self.request.user.id
        course_data, _status = lololol(_user)

        if _status != 200:
            return Response(None, _status)
        if course_data == None:  # this fixes a rare bug
            return Response(None, _status)

        try:

            for x in course_data:
                try:
                    tag = str(_user)+str(x['course_id']) + \
                        str(x['assignment_id'])
                    x['unique_canvas_tag'] = tag
                    x['user_id'] = _user

                    old_task = Task.objects.filter(unique_canvas_tag=tag)
                    old_date = None

                    if (old_task.count()):
                        old_date = old_task[0].completed_date
                    else:
                        pass

                    serializer = CanvasSerializer(x)
                    temp = serializer.data  # task data BEFORE update

                    obj, created = Task.objects.update_or_create(
                        unique_canvas_tag=tag, defaults=serializer.data)  # TODO validate the dat

                    if created:
                        if obj.completed_date != None:
                            obj.completed = True
                            obj.save()
                            print("CREATED")
                    else:  # operate on object here
                        old_task = old_task[0]
                        self.__enter_inventory_item(__user, old_date, obj)

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
        _user = self.request.user.id
        return NewUser.objects.filter(id=_user)


class TaskViewSet(viewsets.ModelViewSet):

    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    # query tasks by user.

    def get_queryset(self):
        _user = self.request.user
        return Task.objects.filter(user=_user)


class AvatarViewSet(viewsets.ModelViewSet):

    serializer_class = AvatarSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    # query tasks by user.

    def get_queryset(self):
        _user = self.request.user
        return Avatar.objects.filter(user=_user)


class InventoryViewSet(viewsets.ModelViewSet):

    serializer_class = InventorySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    # query tasks by user.

    def get_queryset(self):
        _user = self.request.user
        return Inventory.objects.filter(user=_user)

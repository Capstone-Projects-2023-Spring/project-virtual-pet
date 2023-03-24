from django.shortcuts import render
from django.http import HttpResponse
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
from rest_framework.decorators import api_view
from db.studybuddyemail import send_email
import db.canvasrequests as canvas


def lololol(userId):

    _user = NewUser.objects.filter(id=userId)
    canvas_token = _user[0].get_canvas_token() 
    
    assignments, status = canvas.get_all_assignments(canvas_token)
    #_userid = self.request.user
    
    print(_user[0].get_canvas_token())
    print(_user)
    return assignments, status


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
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
        if('email' in errors.keys()):
            return Response("Email is taken",status=status.HTTP_409_CONFLICT)
        if('username' in errors.keys()):
            return Response("Username is taken",status=status.HTTP_409_CONFLICT)
        return Response(registration_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenView(APIView):
    permission_classes=[AllowAny]

    def post(self,request):
        try: 
            refresh_token = request.data["refresh_token"]
            token=RefreshToken(refresh_token)
            token.blacklist()
            return Response(status.HTTP_202_ACCEPTED)
        except Exception as e:
            return Response(e,status=status.HTTP_400_BAD_REQUEST)


class CanvasView(APIView):
    permission_classes = [IsAuthenticated,]
    

    def get(self,request):
        #$print("1 HEREERERERE")
        _user=self.request.user.id
        course_data, _status = lololol(_user)
        print("USER_ID:"+str(_user))
        try:
            print("HEREERERERE")
            for x in course_data:
                try:
                    tag = str(_user)+str(x['course_id'])+str(x['assignment_id'])
                    x['unique_canvas_tag']=tag
                    x['user_id']=_user
                    print("TAG" + x['unique_canvas_tag'])
                    serializer = CanvasSerializer(x)
                    print(serializer.data)
                    
                    obj,created = Task.objects.update_or_create(unique_canvas_tag=tag,defaults=serializer.data)#TODO validate the dat
                    if created:
                        print("created")
                    else:
                        print("updated")
                except Exception as e:
                    print(e)
                
                
                

        except Exception as e:
            print(e)
            _status=500
    
        return Response(course_data,_status)


class NewUserViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated,]
    serializer_class = UserDataSerializer
    
    # query tasks by user. 
    def get_queryset(self):
        #_user = JWTAuthentication(self.request)
        _user = self.request.user.id
        return NewUser.objects.filter(id=_user)


class TaskViewSet(viewsets.ModelViewSet):
    
    serializer_class = TaskSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        #return super().perform_create(self,serializer)
    # query tasks by user. 
    def get_queryset(self):
        _user = self.request.user
        return Task.objects.filter(user=_user)


class AvatarViewSet(viewsets.ModelViewSet):
    
    serializer_class = AvatarSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        #return super().perform_create(self,serializer)
    # query tasks by user. 
    def get_queryset(self):
        _user = self.request.user
        return Avatar.objects.filter(user=_user)


class InventoryViewSet(viewsets.ModelViewSet):
    
    serializer_class = InventorySerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        #return super().perform_create(self,serializer)
    # query tasks by user. 
    def get_queryset(self):
        _user = self.request.user
        return Inventory.objects.filter(user=_user)






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
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view
from db.studybuddyemail import send_email

"""
from .serializers import NoteSerializer
from .models import Note

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all().order_by('note_id')
    serializer_class = NoteSerializer

"""


import requests as r
def lololol(userId):

    _user = NewUser.objects.filter(id=userId)
    canvas_token=_user[0].get_canvas_token() 
    
    token = {"Authorization":"Bearer "+canvas_token}

    response = r.get("https://templeu.instructure.com/api/v1/courses/?enrollment_state=active&per_page=100",headers=token)
    courses = response.json()
    course_names = []
    for course in courses:
        course_names.append(course['name'])
    print(course_names)
    #_userid = self.request.user
    
    print(_user[0].get_canvas_token())
    print(_user)
    return course_names











"""NO WAYYYY"""




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
    
class CanvasTaskViewSet(viewsets.ModelViewSet):
    serializer = TaskSerializer
    
    def post(self):
        _userid = self.request.user
        courses = lololol(_userid)
        if not courses:
            return Response("Invalid Canvas API Token",status=status.HTTP_401_UNAUTHORIZED)
        for c in courses:
            s = TaskSerializer(data={
                "title":c,
                "due_date":timezone.now,
                "task_type":'C',
                "description":c
            })
        return Response("Congrats",status=status.HTTP_201_CREATED)
    def get(self):
        return Response("Invalid Endpoint",status=status.HTTP_401_UNAUTHORIZED)

class CanvasView(APIView):
    permission_classes = (IsAuthenticated, )
  

    def get(self,request):
        
        _user=self.request.user.id
       
        return Response({"courses": lololol(_user)})
        

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






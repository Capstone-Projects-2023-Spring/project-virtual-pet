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

from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken

from db.studybuddyemail import send_email

"""
class CookieTokenRefreshSerializer(TokenRefreshSerializer):
    permission_classes = [AllowAny]
    refresh = None
    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise InvalidToken('No valid token found in cookie \'refresh_token\'')

class CookieTokenObtainPairView(TokenObtainPairView):
  permission_classes = [AllowAny]
  def finalize_response(self, request, response, *args, **kwargs):
    print("Obtain pair")
    print(response.headers)
    if response.data.get('refresh'):
        cookie_max_age = 3600 * 24 * 14 # 14 days
        response.set_cookie('refresh_token', response.data['refresh'], max_age=cookie_max_age, httponly=True )
        #del response.data['refresh']
        response.headers['Access-Control-Allow-Credentials']='true'
        response.headers['Access-Control-Allow-Origin']='*'
        print(response.headers)
    return super().finalize_response(request, response, *args, **kwargs)

class CookieTokenRefreshView(TokenRefreshView):
    permission_classes = [AllowAny]
    def finalize_response(self, request, response, *args, **kwargs):
        print("refresh")
        print(response.headers)
        
        if response.data.get('refresh'):
            cookie_max_age = 3600 * 24 * 14 # 14 days
            response.set_cookie('refresh_token', response.data['refresh'], max_age=cookie_max_age, httponly=True )
            #del response.data['refresh']
            response.headers['Access-Control-Allow-Credentials']=True
            response.headers['Access-Control-Allow-Origin']='*'
            print(response.headers)
        return super().finalize_response(request, response, *args, **kwargs)
    serializer_class = CookieTokenRefreshSerializer

"""
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






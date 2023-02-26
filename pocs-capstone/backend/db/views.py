from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import RegisterUserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView



"""
from .serializers import NoteSerializer
from .models import Note

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all().order_by('note_id')
    serializer_class = NoteSerializer

"""

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
        registration_serializer = RegisterUserSerializer(data=request.data)
        if registration_serializer.is_valid():
            newuser = registration_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(registration_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
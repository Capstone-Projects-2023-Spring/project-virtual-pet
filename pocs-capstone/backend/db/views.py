from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from rest_framework import viewsets

from .serializers import NoteSerializer
from .models import Note

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all().order_by('note_id')
    serializer_class = NoteSerializer
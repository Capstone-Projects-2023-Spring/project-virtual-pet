from django.contrib import admin

# Register your models here.

from .models import Question
from .models import Note

admin.site.register(Question)
admin.site.register(Note)

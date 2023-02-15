from django.db import models
from django.utils import timezone
import datetime

# Create your models here.

class Question(models.Model):
    def __str__(self):
        return self.question_text
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

class Choice(models.Model):
    def __str__(self):
        return self.choice_text
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)



class Note(models.Model):
    def __str__(self):
        return self.note_text
    note_text = models.CharField(max_length=200)
    note_id = models.IntegerField(default=0)

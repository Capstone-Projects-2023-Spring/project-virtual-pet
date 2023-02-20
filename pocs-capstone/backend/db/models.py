from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
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

# Many to One relationship between user and petprofile
# If user is deleted so is their pet profile

class Avatar(models.Model):
    #inner class to specify enumerations
    class AvatarType(models.TextChoices):
        CAT = 'CT' 
        DOG = "DG"
        CRAB = 'CR'
        ROCK = "RK"
    
    owner = models.ManyToOneRel(User, on_delete=models.CASCADE) 
    avatar_type = models.CharField(
        max_length=2,
        choices=AvatarType.choices,
        default=AvatarType.CAT
        )
    total_xp = models.PositiveIntegerField
    last_interaction = models.DateField
    last_feed = models.DateField
    pet_name = models.CharField(max_length=20, default='')
    flavour_text = models.TextField(max_length = 256) #should we increase?
    
    def __str__(self):
        return f'{self.pet_name, self.pet_type}'

#Inventory for candies earned, currently no accessories 

class Iventory(models.Model):
    
    class BaseType(models.TextChoices):
        SMALL = 'S'
        MEDIUM = 'M'
        LARGE = 'L'
        CAKE = 'C'
    
    class CandyLevel(models.IntegerChoices): #TODO RETURN AND UPDATE WITH DERIVED VALUES
        BEGINNER = 1
        NOVICE = 1
        INTERMEDIATE = 1
        ADVANCED = 1
        EXPERT = 1


    owner = models.ManyToOneRel(User,on_delete=models.CASCADE)
    candy_base_type = models.CharField(max_length=1,choices=BaseType)
    candy_level = models.PositiveIntegerField(choices=CandyLevel)
    quantity = models.PositiveIntegerField

    def __str__(self):
        return f'{self.candy_base_type}, {self.candy_level}'

class Task(models.Model):
    username = models.ManyToOneRel(User, on_delete=models.CASCADE)
    due_date = models.DateTimeField
    created_date = models.DateField
    completed_date = models.DateField
    completed = models.BooleanField
    recurring = models.BooleanField
    recurring_time_delta = models.PositiveIntegerField
    description = models.TextField

class UserMeta(models.Model):
    user = models.ManyToOneRel(User,on_delete=models.CASCADE)
    birthday = models.DateField
    description = models.TextField
    on_vacation = models.BooleanField
    vacation_end_date = models.DateField


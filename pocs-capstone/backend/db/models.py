from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.conf import settings

#from django.contrib.auth.models import User
import datetime

class CustomAccountManager(BaseUserManager):
    def create_superuser(self,email,user_name,first_name,password,**other_fields):

        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                "Superuser must be staff! 'is_staff' must be True"
            )
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                "Superuser must be superuser! 'is_superuser' must be True"
            )
        return self.create_user(email,user_name,first_name,password,**other_fields)
    
    def create_user(self,email,user_name,first_name,password,**other_fields):
        if not email:
            raise ValueError(_(
                'You must provide an Email Address to register!'
            ))
        
        email = self.normalize_email(email)
        user = self.model(email=email,user_name=user_name,first_name=first_name,**other_fields)
        user.set_password(password)
        user.save()
        return user

class NewUser(AbstractBaseUser,PermissionsMixin): #TODO rename to something less weird!
    email=models.EmailField(_('email address'),unique=True)
    user_name = models.CharField(max_length=128,unique=True)
    first_name=models.CharField(max_length=128,unique=False)
    join_date=models.DateTimeField(default=timezone.now)
    birthday = models.DateField(null=True, default=None)
    bio = models.TextField(_('about'),max_length=512,blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True) # TODO if we want email verification to activate user we change this to false

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email' # to log in and authenticate !
    REQUIRED_FIELDS = ['user_name','first_name'] 

    def __str__(self):
        return self.user_name

# Many to One relationship between user and petprofile
# If user is deleted so is their pet profile

class Avatar(models.Model):
    #inner class to specify enumerations
    class AvatarType(models.TextChoices):
        CAT = 'CT' 
        DOG = "DG"
        CRAB = 'CR'
        ROCK = "RK"
    
    avatar_owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) 
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

class Inventory(models.Model):
    
    class BaseType(models.TextChoices):
        SMALL = 'S',"SMALL"
        MEDIUM = 'M',"MEDIUM"
        LARGE = 'L',"LARGE"
        CAKE = 'C',"CAKE"
    
    class CandyLevel(models.IntegerChoices): #TODO RETURN AND UPDATE WITH DERIVED VALUES
        BEGINNER = 1, "Beginner"
        NOVICE = 2, "Novice"
        INTERMEDIATE = 3, "Intermediate"
        ADVANCED = 4, "Advanced"
        EXPERT = 5, "Expert"


    inventory_owner = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    candy_base_type = models.CharField(max_length=1,choices=BaseType.choices)
    candy_level = models.PositiveIntegerField(choices=CandyLevel.choices)
    quantity = models.PositiveIntegerField


    def __str__(self):
        return f'{self.candy_base_type}, {self.candy_level}'

class Task(models.Model):
    class BaseType(models.TextChoices):
        SMALL = 'S',"SMALL"
        MEDIUM = 'M',"MEDIUM"
        LARGE = 'L',"LARGE"
        CAKE = 'C',"CAKE"
    username = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    due_date = models.DateTimeField
    created_date = models.DateField
    completed_date = models.DateField
    completed = models.BooleanField
    active = models.BooleanField(default=True)
    type = models.CharField(max_length=1,choices=BaseType.choices)
    recurring = models.BooleanField
    recurring_time_delta = models.PositiveIntegerField
    description = models.TextField
    course_id = models.PositiveBigIntegerField(default=0)
    assignment_id = models.PositiveIntegerField(default=0)


"""
class UserMeta(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    birthday = models.DateField
    description = models.TextField
    on_vacation = models.BooleanField
    vacation_end_date = models.DateField
"""




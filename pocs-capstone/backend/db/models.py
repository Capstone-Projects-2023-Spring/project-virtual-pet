from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.conf import settings


# from django.contrib.auth.models import User
import datetime
from django.utils import timezone
today = timezone.now


# add related name = user on my end
class CustomAccountManager(BaseUserManager):
    """Class responsible for the creation of superusers and standard users.
    Overrides built-in user class and constructor.
    Extends BaseUserManager.
    """

    def create_superuser(self, email, user_name, first_name, password, **other_fields):
        """Returns a superuser User object upon successful creation.

        :param email: user's email, unique
        :type email: str
        :param username: user's username, unique
        :type username: str
        :param first_name: user's first name
        :type first_name: str
        :param password: user's password, hashed then stored
        :type password: str
        :param other_fields: additional keyword arguments: is_staff, is_superuser, is_active
        :type other_fields: dict
        """
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                "Superuser must be staff! 'is_staff' must be True"
            )
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                "Superuser must be superuser! 'is_superuser' must be True"
            )
        return self.create_user(email, user_name, first_name, password, **other_fields)

    def create_user(self, email, user_name, first_name, password, **other_fields):
        """Returns a standard User object upon successful creation.

        :param email: user's email, unique
        :type email: str
        :param username: user's username, unique
        :type username: str
        :param first_name: user's first name
        :type first_name: str
        :param password: user's password, hashed then stored
        :type password: str
        :param other_fields: additional keyword arguments: is_staff, is_superuser, is_active
        :type other_fields: dict
        """
        if not email:
            raise ValueError(_(
                'You must provide an Email Address to register!'
            ))

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):  # TODO rename to something less weird!
    """Class responsible for creating and storing account information for a user
    Extends AbstractBaseUser and PermissionsMixin.
    """
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=128, unique=True)
    first_name = models.CharField(
        max_length=128, unique=False, blank=True, null=True, default="")
    join_date = models.DateTimeField(default=timezone.now)
    birthday = models.DateField(null=True, blank=True, default=None)
    bio = models.TextField(_('about'), max_length=512, blank=True)
    is_staff = models.BooleanField(default=False)
    # TODO if we want email verification to activate user we change this to false
    is_active = models.BooleanField(default=True)
    canvas_token = models.CharField(max_length=512, default="")
    tutorial = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'  # to log in and authenticate !
    REQUIRED_FIELDS = ['user_name', 'first_name']

    def __str__(self):
        """NewUser toString method
        """
        return self.username

    def get_canvas_token(self):
        return self.canvas_token

# Many to One relationship between user and petprofile
# If user is deleted so is their pet profile


class Avatar(models.Model):

    # inner class to specify enumerations
    class AvatarType(models.TextChoices):

        CAT = 'CT'
        DOG = "DG"
        CRAB = 'CR'
        ROCK = "RK"
    avatar_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    avatar_type = models.CharField(
        max_length=2,
        choices=AvatarType.choices,
        default=AvatarType.CAT
    )
    total_xp = models.PositiveIntegerField(default=1)
    last_interaction = models.DateField(default=None)
    last_feed = models.DateField(default=None)
    pet_name = models.CharField(max_length=32, default='')
    flavour_text = models.TextField(
        max_length=256, default='Welcome to Study Buddy!', blank=True, null=True) 
    palette = models.IntegerField(default=0)

    def __str__(self):
        """Avatar toString method
        """
        return f'{self.pet_name}, {self.avatar_type}'

# Inventory for candies earned, currently no accessories


class Inventory(models.Model):
    """Class defining the model for the Inventory
    Extends models.Model.
    """

    class BaseType(models.TextChoices):
        """Class defining the model for candy size
        Extends models.TextChoices.
        """
        SMALL = 'S', "SMALL"
        MEDIUM = 'M', "MEDIUM"
        LARGE = 'L', "LARGE"
        CAKE = 'C', "CAKE"

    # TODO RETURN AND UPDATE WITH DERIVED VALUES
    class CandyLevel(models.IntegerChoices):
        """Class defining the model for candy levels
        Extends models.IntegerChoices.
        """
        BEGINNER = 1, "Beginner"
        NOVICE = 2, "Novice"
        INTERMEDIATE = 3, "Intermediate"
        ADVANCED = 4, "Advanced"
        EXPERT = 5, "Expert"

    inventory_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    candy_base_type = models.CharField(max_length=1, choices=BaseType.choices)
    candy_level = models.PositiveIntegerField(choices=CandyLevel.choices)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        """Candy toString method
        """
        return f'{self.candy_base_type}, {self.candy_level}'


class Task(models.Model):
    """Class definiing the model for a Task
    Extends models.Model.
    """
    class BaseType(models.TextChoices):
        SMALL = 'S', "SMALL"
        MEDIUM = 'M', "MEDIUM"
        LARGE = 'L', "LARGE"
        CAKE = 'C', "CAKE"

    class TaskLevel(models.IntegerChoices):
        """Class defining the model for candy levels
        Extends models.IntegerChoices.
        """
        BEGINNER = 1, "Beginner"
        NOVICE = 2, "Novice"
        INTERMEDIATE = 3, "Intermediate"
        ADVANCED = 4, "Advanced"
        EXPERT = 5, "Expert"
    task_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=300, default="A new task!")
    due_date = models.DateField(null=True, blank=True)
    created_date = models.DateTimeField(default=timezone.now)
    completed_date = models.DateField(default=None, null=True, blank=True)
    completed = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    task_type = models.CharField(
        max_length=1, choices=BaseType.choices, default='S')
    task_level = models.PositiveSmallIntegerField(
        choices=TaskLevel.choices, default=1)
    recurring = models.BooleanField(default=False)
    recurring_time_delta = models.PositiveIntegerField(default=0)
    description = models.TextField(
        default="A new task!", blank=True, null=True)
    course_id = models.PositiveBigIntegerField(default=0)
    assignment_id = models.PositiveIntegerField(default=0)
    received = models.BooleanField(default=False)
    unique_canvas_tag = models.CharField(
        max_length=256, default=None, null=True, blank=True)

    def __str__(self):
        """Task toString method
        """
        return f'{self.title}, {self.task_type}, {self.task_level}, {self.description}'

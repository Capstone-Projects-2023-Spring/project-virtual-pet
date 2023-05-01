# python3 manage.py test  "This will run the all test files in the tests directory"
# This file tests the database models

from django.test import TestCase
from django.utils import timezone
from db.models import NewUser, Task, Inventory, Avatar

class NewUserModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up object to be used by all test methods
        NewUser.objects.create(
            email = "user@gmail.com",
            username = "JayN",
            first_name = "Jay",
            join_date = timezone.now(),
            birthday = "2023-05-30",
            bio = "I like turtles",
            is_staff = False,
            is_active = True,
            canvas_token = "12345",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
 

        )

    def test_email_address_label(self):
        user = NewUser.objects.get(id=1)
        field_label = user._meta.get_field('email').verbose_name
        self.assertEqual(field_label, 'email address')

    def test_username_max_length(self):
        user = NewUser.objects.get(id=1)
        max_length = user._meta.get_field('username').max_length
        self.assertEqual(max_length, 128)
    
    def test_first_name_max_length(self):
        user = NewUser.objects.get(id=1)
        max_length = user._meta.get_field('first_name').max_length
        self.assertEqual(max_length, 128)
    
    def test_bio_max_length(self):
        user  = NewUser.objects.get(id=1)
        max_length = user._meta.get_field('bio').max_length
        self.assertEqual(max_length, 512)

    def test_bio_label(self):
        user = NewUser.objects.get(id=1)
        field_label = user._meta.get_field('bio').verbose_name
        self.assertEqual(field_label, 'about')

    def test_canvas_token_max_length(self):
        user = NewUser.objects.get(id=1)
        max_length = user._meta.get_field('canvas_token').max_length
        self.assertEqual(max_length, 512)

    def test_object_name_is_actual_name(self):
        user = NewUser.objects.get(id=1)
        expected_object_name = user.username
        self.assertEqual(expected_object_name, str(user))

    def test_canvas_token_is_returned(self):
        user = NewUser.objects.get(id=1)
        expected_token_value = user.canvas_token
        self.assertEqual(expected_token_value, user.get_canvas_token())

class AvatarModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up object to be used by all test methods
        user = NewUser.objects.create(
            email = "user@gmail.com",
            username = "JayN",
            first_name = "Jay",
            join_date = timezone.now(),
            birthday = "2023-05-30",
            bio = "I like turtles",
            is_staff = False,
            is_active = True,
            canvas_token = "12345",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
        )

        Avatar.objects.create(
            avatar_id = 1,
            user = user,
            avatar_type = "CT",
            total_xp = 300,
            last_interaction = "2023-05-08",
            last_feed = "2023-05-30",
            pet_name = "Ricky Bobby",
            flavour_text = "Vanilla Chocolate Twist"
        )

    def test_avatar_type_max_length(self):
        avatar = Avatar.objects.get(avatar_id=1)
        max_length = avatar._meta.get_field('avatar_type').max_length
        self.assertEqual(max_length, 2)

    def test_pet_name_max_length(self):
        avatar = Avatar.objects.get(avatar_id=1)
        max_length = avatar._meta.get_field('pet_name').max_length
        self.assertEqual(max_length, 32)

    def test_flavour_text_max_length(self):
        avatar = Avatar.objects.get(avatar_id=1)
        max_length = avatar._meta.get_field('flavour_text').max_length
        self.assertEqual(max_length, 256)

    def test_object_name_is_actual_name(self):
        avatar = Avatar.objects.get(avatar_id=1)
        expected_object_name = f'{avatar.pet_name}, {avatar.avatar_type}'
        self.assertEqual(expected_object_name, str(avatar))

class InventoryModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up object to be used by all test methods
        user = NewUser.objects.create(
            email = "user@gmail.com",
            username = "JayN",
            first_name = "Jay",
            join_date = timezone.now(),
            birthday = "2023-05-30",
            bio = "I like turtles",
            is_staff = False,
            is_active = True,
            canvas_token = "12345",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
        )

        Inventory.objects.create(
            inventory_id = 1,
            user  = user,
            candy_base_type = 'S',
            candy_level = 1,
            quantity = 4
        )

    def test_candy_base_type_max_length(self):
        inventory = Inventory.objects.get(inventory_id=1)
        max_length = inventory._meta.get_field('candy_base_type').max_length
        self.assertEqual(max_length, 1)

    def test_object_name_is_actual_name(self):
        inventory = Inventory.objects.get(inventory_id=1)
        expected_object_name = f'{inventory.candy_base_type}, {inventory.candy_level}'
        self.assertEqual(expected_object_name, str(inventory))

class TaskModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up object to be used by all test methods
        user = NewUser.objects.create(
            email = "user@gmail.com",
            username = "JayN",
            first_name = "Jay",
            join_date = timezone.now(),
            birthday = "2023-05-30",
            bio = "I like turtles",
            is_staff = False,
            is_active = True,
            canvas_token = "12345",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
        )

        Task.objects.create(
            task_id = 1,
            user = user,
            title = "New Task",
            due_date = timezone.now(),
            created_date = timezone.now(),
            completed_date = "2023-05-30",
            completed = False,
            active = True,
            task_type = "S",
            task_level = 1,
            recurring = False,
            recurring_time_delta = 2, 
            description = "Quiz 1",
            course_id = 4321,
            assignment_id = 21,
            received = False,
            unique_canvas_tag = "ceramics",
            course_title = "Da Best Course"
        )

    def test_title_max_length(self):
        task = Task.objects.get(task_id=1)
        max_length = task._meta.get_field('title').max_length
        self.assertEqual(max_length, 128)

    def test_task_type_max_length(self):
        task = Task.objects.get(task_id=1)
        max_length = task._meta.get_field('task_type').max_length
        self.assertEqual(max_length, 1)

    def test_unique_canvas_tag_max_length(self):
        task = Task.objects.get(task_id=1)
        max_length = task._meta.get_field('unique_canvas_tag').max_length
        self.assertEqual(max_length, 256)
    
    def test_course_title_max_length(self):
        task = Task.objects.get(task_id=1)
        max_length = task._meta.get_field('course_title').max_length
        self.assertEqual(max_length, 256)

    def test_object_name_is_actual_name_(self):
        task = Task.objects.get(task_id=1)
        expected_object_name = f'{task.title}, {task.task_type}, {task.task_level}, {task.description}'
        self.assertEqual(expected_object_name, str(task))
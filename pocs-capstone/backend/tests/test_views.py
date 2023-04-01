from django.test import TestCase, RequestFactory
from django.urls import reverse, resolve
import json
from db.models import NewUser, Task, Inventory, Avatar
from django.utils import timezone


registerData = {
    "username": "JayN",
   "email": "user@gmail.com",
    "first_name": "Jay",
    "password": "1234"
}

loginData = {
    "email": "user@gmail.com",
    "password": "1234"
}

class CustomUserCreateViewTest(TestCase):
    registerData = {
        "username": "JayN",
        "email": "user@gmail.com",
        "first_name": "Jay",
        "password": "1234"
    }
    
    def test_view_url_exists_at_desired_location(self):    
        response = self.client.post( '/register/', self.registerData)
        self.assertEqual(response.status_code, 201)
    
    def test_view_url_accessible_by_name(self):
        path = reverse('db:create_user')
        assert resolve(path).view_name == 'db:create_user'



class APITokenViewTest(TestCase):
    registerData = {
        "username": "JayN",
        "email": "user@gmail.com",
        "first_name": "Jay",
        "password": "1234"
    }
    
    loginData = {
        "email": "user@gmail.com",
        "password": "1234"
    }

    invalidLoginData = {
        "email": "user@gmail.com",
        "password": "12345"
    }
    
    def test_login_with_valid_credentials(self):
        response = self.client.post( '/register/', self.registerData)
        # Register successful?
        if response.status_code == 201:
            # Try to login with valid credentials
            response = self.client.post('/api/token/', self.loginData)
            self.assertEqual(response.status_code, 200)

    def test_login_with_invalid_credentials(self):
        response = self.client.post( '/register/', self.registerData)
        # Register successful?
        if response.status_code == 201:
            # Try to login with invalid credentials
            response = self.client.post('/api/token/', self.invalidLoginData)
            self.assertEqual(response.status_code, 401)

    def test_view_url_accessible_by_name(self):
        path = reverse('token_obtain_pair')
        assert resolve(path).view_name == 'token_obtain_pair'

class APITokenRefreshViewTest(TestCase):
    registerData = {
        "username": "JayN",
        "email": "user@gmail.com",
        "first_name": "Jay",
        "password": "1234"
    }
    
    loginData = {
        "email": "user@gmail.com",
        "password": "1234"
    }

    def test_refreshing_token(self):
        response = self.client.post( '/register/', self.registerData)
        # Register successful?
        if response.status_code == 201:
        # Try to login with valid credentials
            response = self.client.post('/api/token/', self.loginData)
            # Get tokens and save refresh token
            tokens = json.loads(response.content)
            # Get new refresh token
            response = self.client.post('/api/token/refresh/', tokens)
            
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        path = reverse('token_refresh')
        assert resolve(path).view_name == 'token_refresh'

class APITokenVerifyViewTest(TestCase):
    

    # def test_verifying_token(self):
    #     response = self.client.post( '/register/', self.registerData)
    #     # Register successful?
    #     if response.status_code == 201:
    #     # Try to login with valid credentials
    #         response = self.client.post('/api/token/', self.loginData)
    #         # Get tokens and save refresh token
    #         tokens = json.loads(response.content)
    #         print(tokens)
            
    #         response = self.client.post('/api/token/verify/', tokens)
    #     self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        path = reverse('token_verify')
        assert resolve(path).view_name == 'token_verify'

class BlacklistTokenViewTest(TestCase):
    # registerData = {
    #     "username": "JayN",
    #     "email": "user@gmail.com",
    #     "first_name": "Jay",
    #     "password": "1234"
    # }

    # loginData = {
    #     "email": "user@gmail.com",
    #     "password": "1234"
    # }
    # def test_token_is_blacklisted(self):
    #     response = self.client.post( '/register/', self.registerData)
    #     # Register successful?
    #     if response.status_code == 201:
    #     # Try to login with valid credentials
    #         response = self.client.post('/api/token/', self.loginData)
    #         # Get tokens and save refresh token
    #         # tokens = json.loads(response.content)
    #         # refresh_token = tokens["refresh"]
    #         # print(tokens)
    #         tokens = response.content
            
    #         response = self.client.post('/logout/blacklist/', tokens)
    #     self.assertEqual(response.status_code, 202)

    def test_view_url_accessible_by_name(self):
        path = reverse('db:blacklist')
        assert resolve(path).view_name == 'db:blacklist'

class CanvasViewTest(TestCase):
    def test_view_url_accessible_by_name(self):
        path = reverse('db:pose-canvas-tasks')
        assert resolve(path).view_name == 'db:pose-canvas-tasks'

# class TaskViewSetTest(TestCase):

#     def test_getting_tasks(self):
#         response = self.client.post( '/register/', registerData)
#         # Register successful?
#         if response.status_code == 201:
#         # Try to login with valid credentials
#             response = self.client.post('/api/token/', loginData)
#             # Get tokens and save refresh token
#             tokens = json.loads(response.content)
#         user = NewUser.objects.create(
#             email = "user@gmail.com",
#             username = "JayN",
#             first_name = "Jay",
#             join_date = timezone.now(),
#             birthday = "2023-05-30",
#             bio = "I like turtles",
#             is_staff = False,
#             is_active = True,
#             canvas_token = "12345",
#             tutorial = True

#         )
#         Task.objects.create(
#             task_id = 1,
#             user = user,
#             title = "New Task",
#             due_date = timezone.now(),
#             created_date = timezone.now(),
#             completed_date = "2023-05-30",
#             completed = False,
#             active = True,
#             task_type = "S",
#             task_level = 1,
#             recurring = False,
#             recurring_time_delta = 2, 
#             description = "Quiz 1",
#             course_id = 4321,
#             assignment_id = 21
#         )
#         response = self.client.get( '/tasks/', user) 
#         self.assertEqual(response.status_code, 200)

    # def test_view_url_accessible_by_name(self):
    #     path = reverse('db: /tasks')
    #     assert resolve(path).view_name == 'tasks'

# class InventoryViewSetTest(TestCase):
#     def test_view_url_accessible_by_name(self):
#         path = reverse('db:inventory')
#         assert resolve(path).view_name == 'db:inventory'

# class AvatarViewSet(TestCase):
#     def test_view_url_accessible_by_name(self):
#         path = reverse('token_verify')
#         assert resolve(path).view_name == 'token_verify'

# class NewUserViewSet(TestCase):
#     def test_view_url_accessible_by_name(self):
#         path = reverse('token_verify')
#         assert resolve(path).view_name == 'token_verify'


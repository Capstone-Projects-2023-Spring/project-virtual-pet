from django.test import TestCase, RequestFactory
from django.urls import reverse, resolve
import json

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
    def test_view_url_accessible_by_name(self):
        path = reverse('token_refresh')
        assert resolve(path).view_name == 'token_refresh'

class APITokenVerifyViewTest(TestCase):
    def test_view_url_accessible_by_name(self):
        path = reverse('token_verify')
        assert resolve(path).view_name == 'token_verify'

class BlacklistTokenViewTest(TestCase):
    def test_view_url_accessible_by_name(self):
        path = reverse('db:blacklist')
        assert resolve(path).view_name == 'db:blacklist'

class CanvasViewTest(TestCase):
    def test_view_url_accessible_by_name(self):
        path = reverse('db:pose-canvas-tasks')
        assert resolve(path).view_name == 'db:pose-canvas-tasks'

# class TaskViewSetTest(TestCase):
#     def test_view_url_accessible_by_name(self):
#         path = reverse('tasks')
#         assert resolve(path).view_name == 'tasks'

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


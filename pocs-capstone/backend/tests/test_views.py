from django.test import TestCase
from django.urls import reverse
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
    
    # This may be working because 405 means not authorized but also no clue b/ anyone should be able to register
    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('db:create_user'))
        self.assertEqual(response.status_code, 405)



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
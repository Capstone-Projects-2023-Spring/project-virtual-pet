from django.test import TestCase
from django.urls import reverse


class CustomUserCreateViewTest(TestCase):

    def test_view_url_exists_at_desired_location(self):
        registerData = {
            "username": "JayN",
            "email": "user@gmail.com",
            "first_name": "Jay",
            "password": "1234"
        }
        
        response = self.client.post( '/register/', registerData)
        self.assertEqual(response.status_code, 201)
    
    # This may be working because 405 means not authorized but also no clue b/ can't anyone register
    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('db:create_user'))
        self.assertEqual(response.status_code, 405)

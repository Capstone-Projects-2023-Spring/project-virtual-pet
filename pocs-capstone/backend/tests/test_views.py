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
    
    # Not to sure about this test. Trying to reverse lookup view by name but in db/urls.py name=create_user
    # def test_view_url_accessible_by_name(self):
    #     response = self.client.get(reverse('openapi-schema'))
    #     self.assertEqual(response.status_code, 200)

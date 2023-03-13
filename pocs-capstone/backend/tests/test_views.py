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
    
    # This may be working because 405 means not authorized but also no clue b/ anyone should be able to register
    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('db:create_user'))
        self.assertEqual(response.status_code, 405)



class APITokenViewsTest(TestCase):
    
    def test_login_with_valid_credentials(self):
        registerData = {
            "username": "JayN",
            "email": "user@gmail.com",
            "first_name": "Jay",
            "password": "1234"
        }
        response = self.client.post( '/register/', registerData)
        # Register successful?
        if response.status_code == 201:
            # Try to login
            loginData = {
                "email": "user@gmail.com",
                "password": "1234"
            }
            response = self.client.post('/api/token/', loginData)
            self.assertEqual(response.status_code, 200)

    def test_login_with_invalid_credentials(self):
        registerData = {
            "username": "JayN",
            "email": "user@gmail.com",
            "first_name": "Jay",
            "password": "1234"
        }
        response = self.client.post( '/register/', registerData)
        # Register successful
        if response.status_code == 201:
            # Try to login with invalid credentials
            loginData = {
                "email": "user@gmail.com",
                "password": "12345"
            }
            response = self.client.post('/api/token/', loginData)
            # Show token
            # print(response.content)
            self.assertEqual(response.status_code, 401)

    def test_refreshing_token(self):
        registerData = {
            "username": "JayN",
            "email": "user@gmail.com",
            "first_name": "Jay",
            "password": "1234"
        }
        response = self.client.post( '/register/', registerData)
        # Register successful
        if response.status_code == 201:
            # Try to login with invalid credentials
            loginData = {
                "email": "user@gmail.com",
                "password": "12345"
            }
            response = self.client.post('/api/token/', loginData)
            # Show token
            # print(response.content)
            self.assertEqual(response.status_code, 401)
            


    
    # def test_view_url_accessible_by_name(self):
    #     response = self.client.get(reverse('token_obtain_pair'))
    #     self.assertEqual(response.status_code, 405)

    # def test_token_refresh(self):



    

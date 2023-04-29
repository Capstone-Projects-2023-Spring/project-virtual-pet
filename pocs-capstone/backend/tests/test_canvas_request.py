from django.test import TestCase
from db.canvasrequests import get_courses, get_course_info, get_all_assignments, get_assignments

# Not sure about some of these test cause it requires a valid canvas token and known course id :/

class TestCanvasRequests(TestCase):

    def test_get_courses_with_bad_token(self):
        result, status = get_courses("BADTOK")
        self.assertEqual(401, status)
    # Sus don't steal my token or do because I graduated!!! :D
    def test_get_courses_with_valid_token(self):
        result, status = get_courses("9957~AX4vCw8UnOh6zfMgzLbjPNUxwuMqfEpdpzBlpWsS8EsZXPGfSk1QcytbSQuWFh2f")
        self.assertEqual(status,200)
    # Sus don't steal my token or do because I graduated!!! :D
    def test_get_course_info(self):
        courses = get_courses("9957~AX4vCw8UnOh6zfMgzLbjPNUxwuMqfEpdpzBlpWsS8EsZXPGfSk1QcytbSQuWFh2f")
        for course in courses:
            course = course
            break
        course = course[0][0]
        course_info, status = get_course_info("9957~AX4vCw8UnOh6zfMgzLbjPNUxwuMqfEpdpzBlpWsS8EsZXPGfSk1QcytbSQuWFh2f", course)
        self.assertEqual(status, 200)
    
    def test_get_all_assignments(self):
        assignments, status = get_all_assignments("9957~AX4vCw8UnOh6zfMgzLbjPNUxwuMqfEpdpzBlpWsS8EsZXPGfSk1QcytbSQuWFh2f")
        self.assertEqual(status,200)
from django.test import TestCase, override_settings
from db.models import NewUser
from django.utils import timezone
from db.studybuddyemail import send_email
from db.views import lololol

_tasks_for_canvastoken = []
_tasks_for_mock1 = []

class TestCanvasMockData(TestCase):

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
            canvas_token = "canvastoken1",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
        )

        NewUser.objects.create(
            email = "user2@gmail.com",
            username = "JayN2",
            first_name = "Jay2",
            join_date = timezone.now(),
            birthday = "2023-05-30",
            bio = "I like turtles2",
            is_staff = False,
            is_active = True,
            canvas_token = "canvastoken",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
        )
        NewUser.objects.create(
            email = "user3@gmail.com",
            username = "JayN3",
            first_name = "Jay3",
            join_date = timezone.now(),
            birthday = "2023-05-30",
            bio = "I like turtles3",
            is_staff = False,
            is_active = True,
            canvas_token = "mock1",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
        )
        NewUser.objects.create(
            email = "user4@gmail.com",
            username = "JayN4",
            first_name = "Jay4",
            join_date = timezone.now(),
            birthday = "2023-05-30",
            bio = "I like turtles4",
            is_staff = False,
            is_active = True,
            canvas_token = "mock2",
            tutorial = True,
            demo_canvas = False,
            tags = None,
            canvas_tags = None
        )

        

        for i in range(1, 3):
            _tasks_for_canvastoken.append({'title': "Homework",
                        'due_date': "2023-06-01",

                        'task_type': 'S',
                        'task_level': 3,  # TODO - this should be set here!
                        # 'recurring': 'false',
                        # 'recurring_time_delta': 0,
                        'course_title': 'Capstone',
                        'completed_date': None,
                        'description': 'Very instructive assignment.',
                        'course_id': '000'+str(i),
                        'assignment_id': str(i)+'000'

                        })

        for i in range(3, 5):
            _tasks_for_canvastoken.append({'title': "Quiz",
                        'due_date': "2023-06-01",

                        'task_type': 'M',
                        'task_level': 3,  # TODO - this should be set here!
                        # 'recurring': 'false',
                        # 'recurring_time_delta': 0,
                        'course_title': 'Capstone',
                        'completed_date': None,
                        'description': 'Very instructive assignment.',
                        'course_id': '000'+str(i),
                        'assignment_id': str(i)+'000'

                        })

        _tasks_for_canvastoken.append({'title': "Project",
                    'due_date': "2023-06-01",

                    'task_type': 'C',
                    'task_level': 3,  # TODO - this should be set here!
                    # 'recurring': 'false',
                    # 'recurring_time_delta': 0,
                    'course_title': 'Capstone',
                    'completed_date': None,
                    'description': 'Very instructive assignment.',
                    'course_id': '0005',
                    'assignment_id': '5000'

                    })
        
        for i in range(1, 50):
           
            if i%6 == 0:
                continue
            print("HERE:"+str(i%6 ))
            
            _tasks_for_mock1.append({'title': "A legitimate task",
                        'due_date': "2023-06-01",

                        'task_type': 'S',
                        'task_level': i%6,  # TODO - this should be set here!
                        # 'recurring': 'false',
                        # 'recurring_time_delta': 0,
                        'course_title': 'Capstone',
                        'completed_date': None,
                        'description': 'Very instructive assignment.',
                        'course_id': '010'+str(i),
                        'assignment_id': '010'+str(i)

                        })
            _tasks_for_mock1.append({'title': "A legitimate task",
                        'due_date': "2023-06-01",

                        'task_type': 'M',
                        'task_level': i%6,  # TODO - this should be set here!
                        # 'recurring': 'false',
                        # 'recurring_time_delta': 0,
                        'course_title': 'Capstone',
                        'completed_date': None,
                        'description': 'Very instructive assignment.',
                        'course_id': '020'+str(i),
                        'assignment_id': '020'+str(i)


                        })
            _tasks_for_mock1.append({'title': "A legitimate task",
                        'due_date': "2023-06-01",

                        'task_type': 'L',
                        'task_level': i%6,  # TODO - this should be set here!
                        # 'recurring': 'false',
                        # 'recurring_time_delta': 0,
                        'course_title': 'Capstone',
                        'completed_date': None,
                        'description': 'Very instructive assignment.',

                        'course_id': '030'+str(i),
                        'assignment_id': '030'+str(i)
                        })
            _tasks_for_mock1.append({'title': "A legitimate task",
                        'due_date': "2023-06-01",

                        'task_type': 'C',
                        'task_level': i%6,  # TODO - this should be set here!
                        # 'recurring': 'false',
                        # 'recurring_time_delta': 0,
                        'course_title': 'Capstone',
                        'completed_date': None,
                        'description': 'Very instructive assignment.',
                        'course_id': '040'+str(i),
                        'assignment_id': '040'+str(i)

                        })
            
    def test_lololol_with_bad_token(self):
        user = NewUser.objects.get(id=1)
        result = lololol(user.id)
        self.assertEqual((None,401),result)

    def test_lololol_with_valid_token_canvastoken(self):
        user = NewUser.objects.get(id=2)
        result = lololol(user.id)
        self.assertEqual((_tasks_for_canvastoken,200), result)

    def test_lololol_with_valid_token_mock1(self):
        user = NewUser.objects.get(id=3)
        result = lololol(user.id)
        self.assertEqual((_tasks_for_mock1,200), result)
    
    def test_lololol_with_valid_token_mock2(self):
        user = NewUser.objects.get(id=4)
        result = lololol(user.id)
        for task in _tasks_for_mock1:
            task["completed_date"] = "2023-06-01"
        self.assertEqual((_tasks_for_mock1,200), result)

    

    
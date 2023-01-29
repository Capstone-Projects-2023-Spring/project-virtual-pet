from canvasapi import Canvas
from datetime import datetime


API_URL = "https://canvas.instructure.com/"

API_KEY = TOKEN

canvas = Canvas(API_URL, API_KEY)

course = canvas.get_course(6122815)

print(course.name)

assignments = course.get_assignments()

for assignment in assignments:
    print(assignment)
 

# Created complex Assignment 3

# new_assignment = course.create_assignment({
#     'name': 'Assignment 3',
#     'submission_types': ['online_upload'],
#     'allowed_extensions': ['docx', 'doc', 'pdf'],
#     'notify_of_update': True,
#     'points_possible': 100,
#     'due_at': datetime(2023, 12, 31, 11, 59),
#     'description': 'Please upload your homework so you get points',
#     'published': True
#         })  

# Update Assignment 3 name

# assignment = course.get_assignment(35270345)
# updated_assignment = assignment.edit(assignment={'name': 'Study Buddy Assignment 1'})

# print(updated_assignment)

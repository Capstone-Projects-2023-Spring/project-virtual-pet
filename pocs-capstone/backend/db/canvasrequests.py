
import requests
import bs4 as bs
import pprint
from datetime import datetime, timezone
# import re
# from dateutil import parser
pp = pprint.PrettyPrinter(indent=2)

# Static settings
BASE_URL = 'https://templeu.instructure.com/api/v1'


'''Returns the response from a GET request to the Canvas API'''


def canvas_request(url, headers, params):
    try:
        response = requests.get(url=url, headers=headers, params=params)
        status = response.status_code
    except Exception as e:
        return e, 500  # this is an internal service error due to failed request to external resource
    return response.json(), status  # convert to json


'''Return a list of all Canvas courses' IDs'''


def get_courses(canvas_token):  # later we'll add userId as a parameter
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    courses_params = {
        "per_page": 100,
        "enrollment_state": "active",
        "workflow_state": "available",
        "enrollment_type": "student"
    }

    courses_data, status = canvas_request(
        BASE_URL + '/courses', auth_header,  courses_params)

    if status == 200:
        course_id_list = []  # a list of all the user's courses (their ids)
        current_date = datetime.now().date()
        closest_end_date = None
        closest_start_date = None
        
        for course_entry in courses_data:
            course_end_date = None
            if course_entry['end_at'] is not None:
                course_end_date = datetime.fromisoformat(course_entry['end_at'][:-1]).date()
                if course_end_date >= current_date:
                    if closest_end_date is None or course_end_date < closest_end_date:
                        closest_end_date = course_end_date
        
        if closest_end_date is not None:
            for course_entry in courses_data:
                course_start_date = None
                if course_entry['start_at'] is not None:
                    course_start_date = datetime.fromisoformat(course_entry['start_at'][:-1]).date()
                    if course_start_date <= closest_end_date:
                        if closest_start_date is None or course_start_date > closest_start_date:
                            closest_start_date = course_start_date
                
        if closest_start_date is None:
            closest_start_date = current_date
            
        for course_entry in courses_data:
            created_date = datetime.fromisoformat(course_entry['created_at'][:-1]).date()
            difference = abs((created_date - closest_start_date).days)
            difference_to_today = abs((created_date - current_date).days)
            if difference < 35 and difference_to_today < 200:
                course = (course_entry['id'], course_entry['name'])
                course_id_list.append(course)
        print(course_id_list)
        if len(course_id_list) > 0:
            return course_id_list, status
        return None, status
    return None, status


'''Given a course ID, return a list of all assignments' IDs'''


def get_assignments(canvas_token, course_id):
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    assignment_params = {
        "per_page": 5000,
        "include": "submission"
    }

    assignments_data, status = canvas_request(
        BASE_URL + '/courses/' + str(course_id) + '/assignments', auth_header,  assignment_params)

    assignment_id_list = []  # a list of all the user's courses (their ids)
    for assignment_entry in assignments_data:
        try:
            assignment_id_list.append(assignment_entry['id'])
        except Exception as e:
            print(e)

    return assignment_id_list, assignments_data


'''Given a course ID, return a json object of course information for that particular course'''


def get_course_info(canvas_token, course_id):
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    course_url = BASE_URL + '/courses/' + str(course_id)
    return canvas_request(url=course_url, headers=auth_header, params={})


'''Given a course ID and assignment ID, return a dict of assignment information for that particular assignment'''


def get_assignment_info(canvas_token, course_id, assignment_id):
    auth_header = {'Authorization': 'Bearer ' + canvas_token}

    # TODO - This needs to move further back in the procedure
    user_url = BASE_URL + '/users/self'
    user_id = None

    try:
        b, bstatus = canvas_request(
            url=user_url, headers=auth_header, params={})
        if bstatus == 200:
            user_id = b['id']
    except Exception as e:
        print(e)
        return None

    assignment_url = BASE_URL + '/courses/' + \
        str(course_id) + '/assignments/' + str(assignment_id)
    a, status = canvas_request(url=assignment_url, headers=auth_header, params={
                               "include[]": ['submission']})
    submission_details = {}

    if status == 200:
        due = a['due_at']
        submission_details = a['submission']
        submitted = submission_details['submitted_at']
    else:
        due = None

    if due != None:
        due = due[0:10]  # hack into a string UwU
    if submitted != None:
        submitted = submitted[0:10]  # hack into a string UwU

    try:
        description = bs.BeautifulSoup(a['description'], 'lxml').get_text()
    except Exception as e:
        description = ""

    return {'title': a['name'] or "No title.",
            'due_date': due,

            'task_type': 'S',
            # 'task_level': 1, # TODO - this should be set here!
            # 'recurring': 'false',
            # 'recurring_time_delta': 0,
            'completed_date': submitted,
            'description': description,
            'course_id': a['course_id'],
            'assignment_id': a['id']
            }


'''Given a course ID, return a list of all assignments' IDs'''


def get_assignments(canvas_token, course_info):
    course_id = course_info[0]
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    assignment_params = {
        "per_page": 5000,
        "include": "submission"
    }

    assignments_data, status = canvas_request(
        BASE_URL + '/courses/' + str(course_id) + '/assignments', auth_header,  assignment_params)

    assignment_id_list = []  # a list of all the user's courses (their ids)
    for assignment_entry in assignments_data:
        try:
            assignment_id_list.append(assignment_entry['id'])
        except Exception as e:
            print(e)

    return assignment_id_list, assignments_data


'''Given a course ID, return a json object of course information for that particular course'''


def get_course_info(canvas_token, course_id):
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    course_url = BASE_URL + '/courses/' + str(course_id)
    return canvas_request(url=course_url, headers=auth_header, params={})

'''Given an assignment, Detects the type based on Canvas data. Returns a single char code'''

def detect_task_type(assignment):

    name = (assignment.get('name') or "").lower()
    description = (assignment.get('description') or "").lower()
    submission_types = assignment.get('submission_types', [])

    # 1. Canvas Quizzes
    if assignment.get('quiz_id') is not None or "online_quiz" in submission_types:
        return 'Q'  # Quiz

    # 2. Keyword matching in title
    if any(word in name for word in ['final exam', 'midterm', 'final test', 'exam', 'test', 'mid-term', 'final']):
        return 'C'
    if 'quiz' in name or 'vsq' in name:
        return 'L'
    if any(word in name for word in ['homework', 'hw ', 'assignment', 'problem set', 'pset', 'discussion', 'forum']):
        return 'M'

    # 3. Check description
    if description:
        if any(word in description for word in ['final exam', 'midterm', 'final test', 'exam', 'test', 'mid-term', 'final']):
            return 'C'
        if 'quiz' in description or 'vsq' in description:
            return 'L'

    # 4. Default
    return 'S'  # Most things are homework/assignments


'''Given a course ID and assignment ID, return a dict of assignment information for that particular assignment'''


def parse_assignments(assignments, course_title):
    tasks = []
    format_string = "%Y-%m-%dT%H:%M:%SZ"
    current_UTC = datetime.now(timezone.utc)

    for a in assignments:
        submission_details = {}

        due = a['due_at']
        submission_details = a['submission']
        graded = None

        if submission_details.get('grade','Done') is not None:
            if submission_details.get('grade','Done') != 'Done':
                graded = True
            else:
                if a['submission_types'] == ['none'] and due == None:
                    graded = True
                else:
                    graded = False
        else:
            if a['submission_types'] == ['none'] and due == None:
                graded = True
            else:
                graded = False

        submitted = submission_details['submitted_at']

        if due != None:
            due = due[0:10]  # hack into a string UwU

        if submitted != None:
            submitted = submitted[0:10]  # hack into a string UwU
        elif submitted == None and graded == True:
            if submission_details.get('graded_at', None) is not None:
                submitted = submission_details['graded_at'][0:10]
            else: 
                submitted = current_UTC.strftime(format_string)[0:10]
        

        try:
            description = bs.BeautifulSoup(a['description'], 'lxml').get_text()
        except Exception as e:
            description = ""

        task_type = detect_task_type(a)

        tasks.append({'title': a['name'] or "No title.",
                      'due_date': due,
                      'task_type': task_type,
                      # 'task_level': 1, # TODO - this should be set here!
                      # 'recurring': 'false',
                      # 'recurring_time_delta': 0,
                      'course_title': course_title,
                      'completed_date': submitted,
                      'description': description,
                      'course_id': a['course_id'],
                      'assignment_id': a['id'],
                      })
    return tasks


'''Given a list of assignment IDs, return a list where each entry is a dict of assignment information corresponding to those IDs'''


def get_all_assignments(canvas_token):
    all_assignments = []  # list of all assignment IDs for all courses

    course_info, status = get_courses(canvas_token)  # all course IDs
    if status != 200:
        return None, status
    for course in course_info:
        # all assignment IDs for one specific course
        assignment_ids, assignments = get_assignments(canvas_token, course)

        # for assignment_id in assignment_ids:
        #    assignment_info = get_assignment_info(canvas_token, course_id, assignment_id)
        #    all_assignments.append(assignment_info) # add each assignment dict from this course to list
        _assignments = parse_assignments(assignments, course[1])
        all_assignments = all_assignments+_assignments
    return all_assignments, status

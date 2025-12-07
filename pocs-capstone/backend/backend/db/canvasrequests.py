
import requests
import bs4 as bs
import pprint
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

        for course_entry in courses_data:
            course = (course_entry['id'], course_entry['name'])
            course_id_list.append(course)

        return course_id_list, status
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


'''Given a course ID and assignment ID, return a dict of assignment information for that particular assignment'''


def parse_assignments(assignments, course_title):

    tasks = []

    for a in assignments:
        submission_details = {}

        due = a['due_at']
        submission_details = a['submission']

        submitted = submission_details['submitted_at']

        if due != None:
            due = due[0:10]  # hack into a string UwU
        if submitted != None:
            submitted = submitted[0:10]  # hack into a string UwU

        try:
            description = bs.BeautifulSoup(a['description'], 'lxml').get_text()
        except Exception as e:
            description = ""

        tasks.append({'title': a['name'] or "No title.",
                      'due_date': due,

                      'task_type': 'S',
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

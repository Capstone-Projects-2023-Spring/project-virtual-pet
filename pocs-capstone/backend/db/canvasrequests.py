import json
import requests
import bs4 as bs
#import re
#from dateutil import parser


# Static settings
BASE_URL = 'https://templeu.instructure.com/api/v1'


'''Returns the response from a GET request to the Canvas API'''
def canvas_request(url, headers, params):
    response = requests.get(url=url, headers=headers, params=params) 
    response.raise_for_status() # raise error if 4xx or 5xx
    return response.json() #convert to json
    
'''Return a list of all Canvas courses' IDs'''
def get_courses(canvas_token): #later we'll add userId as a parameter
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    courses_params = {
    "per_page": 100,
    "enrollment_state": "active",
    "workflow_state": "available",
    "enrollment_type": "student"
    }

    courses_data = canvas_request(BASE_URL + '/courses', auth_header,  courses_params)
    course_id_list = [] # a list of all the user's courses (their ids)
    for course_entry in courses_data:
        course_id_list.append(course_entry['id']) # + ' ' + str(course_entry['name'])) # uncomment to print the name of the course too

    return course_id_list


'''Given a course ID, return a list of all assignments' IDs'''  
def get_assignments(canvas_token, course_id): 
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    assignment_params = {
        "per_page": 100,
        "include": "submission"
    }

    assignments_data = canvas_request(BASE_URL + '/courses/' + str(course_id) + '/assignments', auth_header,  assignment_params)
    assignment_id_list = [] # a list of all the user's courses (their ids)
    for assignment_entry in assignments_data:
        assignment_id_list.append(assignment_entry['id']) # + ' ' + str(assignment_entry['name'])) # uncomment to print the name of the course too

    return assignment_id_list

'''Given a course ID, return a json object of course information for that particular course'''  
def get_course_info(canvas_token, course_id):
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    course_url = BASE_URL + '/courses/' + str(course_id)
    return canvas_request(url=course_url, headers=auth_header, params={})

'''Given a course ID and assignment ID, return a dict of assignment information for that particular assignment'''  
def get_assignment_info(canvas_token, course_id, assignment_id):
    auth_header = {'Authorization': 'Bearer ' + canvas_token}
    assignment_url = BASE_URL + '/courses/' + str(course_id) + '/assignments/' + str(assignment_id)
    a = canvas_request(url=assignment_url, headers=auth_header, params={"include[]":['submission']})
    due = a['due_at']
    if due != None:
        due = due[0:10]
    return {'title': a['name'] or "No title.",
        'due_date': due,
        #'created_date': a['created_at'],
        #'completed_date': a['submission']['graded_at'],
        #'completed': a['graded_submissions_exist'],
        #'active': 'true',
        'task_type': 'S',
        #'task_level': 1,
        #'recurring': 'false',
        #'recurring_time_delta': 0,
        'description': bs.BeautifulSoup(a['description'],'lxml').get_text() if a['description'] != None else "No description",
        'course_id': a['course_id'],
        'assignment_id': a['id']
    }
    
'''Given a list of assignment IDs, return a list where each entry is a dict of assignment information corresponding to those IDs'''  
def get_all_assignments(canvas_token):
    all_assignments = [] # list of all assignment IDs for all courses
    
    course_ids = get_courses(canvas_token) # all course IDs
    for course_id in course_ids:
        assignment_ids = get_assignments(canvas_token, course_id) # all assignment IDs for one specific course
        
        for assignment_id in assignment_ids:
            assignment_info = get_assignment_info(canvas_token, course_id, assignment_id)
            all_assignments.append(assignment_info) # add each assignment dict from this course to list

    return all_assignments
    
#get all course ids
#for each course id,
#   get all assignment ids

# now, with list of ALL assignments ids,
# for each assignment,
#   create a dictionary with title='name', due_date=
#   created_date=new Date().toISOString()
#   task_type='M' (for now, we gotta parse course_code soon)
#   description='description', course_id='course_id', assignment_id='assignment_id'   
# then add the dict to a running list of dicts. each entry of the list is a dict representing an assignment
    
    
    
# Tests:
'''
canvas_token = *insert your own token here... see I deleted it this time! wooo*

print((get_all_assignments(canvas_token)))

print("COURSES:")
print(get_courses(canvas_token))

print("COURSE NAME FOR EACH COURSE:\n")
courses = get_courses(canvas_token)
for course in courses:
    print(get_course_info(canvas_token, course)['name'])

print("ASSIGNMENTS FOR 1 COURSE:")
print(get_assignments(canvas_token, 124235))
print("num assignments:" + str(len(get_assignments(canvas_token, 124235))))

print("ASSIGNMENT INFO FOR 1 ASSIGNMENT:")
print(get_assignment_info(canvas_token, 124235, 1998456))

'''
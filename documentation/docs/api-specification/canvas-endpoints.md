---
sidebar_position: 5
description: Canvas endpoints necessary to retrieve the information we need from a user's Canvas account.
---

Canvas API Specs
=============================

## Notes:
* Base URL: `https://templeu.instructure.com`
* [Pagination](https://canvas.instructure.com/doc/api/file.pagination.html): Requests that return multiple items will be paginated to 10 items by default. You can set a custom per-page amount with the ?per_page parameter. There is an unspecified limit to how big you can set per_page to.

## How to read the next section
### Action
* `request`: Description
* Parameters: 
  * type parameter1 --> description of parameter
* Example: `The request Katrina tried with her own Canvas account & Postman and it worked`
* Returns:
  * the relevent fields we'll want to collect and store from this call

## Endpoints for Task Generation
### [List your courses](https://canvas.instructure.com/doc/api/courses.html#method.courses.index)
* `GET /api/v1/courses`: Retrieve a paginated list of courses in this account.
* Parameters:
  * string `enrollment_state` --> return courses where the user has an enrollment with the given state (`active`)
* Example: `GET https://templeu.instructure.com/api/v1/courses/?enrollment_state=active&per_page=100`

### [List assignments](https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index)
* `GET /api/v1/courses/:course_id/assignments`: Returns the paginated list of assignments for the current course or assignment group.
* Parameters:
  * string `include` submission --> the user's current submission for each assignment (which holds score)
* Example: `GET https://templeu.instructure.com/api/v1/courses/124235/assignments?per_page=100&include=submission`
* Returns:
  * integer "id" --> assignment id
  * string "description" --> description of assignment
  * string "due_at" --> date/time in ISO 8601 format for due date of assignment
  * integer "points_possible"
  * string "name" --> assignment name
  * boolean "is_quiz_assignment" --> tells you whether it's an Assignment or a Quiz
  * integer "course_id" --> the associated course that this is from (which we needed to get here anyway)
  * "submission": 
    * integer "score"
    * boolean "late"
    * string "workflow_state" --> such as "graded", "submitted", "unsubmitted", "published"
 
### [List the TODO items](https://canvas.instructure.com/doc/api/users.html#method.users.todo_items)
* `GET /api/v1/users/self/todo`: A paginated list of the current user's list of todo items. There is a limit to the number of items returned. Note: the reason we probably want to use the List courses endpoint then retrieve the list of assignments by each course is because we can better filter through the assignments & include undated assignments. And I am not sure how far out the TODOs go. 
* Example: `GET https://templeu.instructure.com/api/v1/users/self/todo`
* Returns:
  * string "context_name" --> name of associated course
  * integer "course_id" --> course id for the TODO item
  * "assignment":
    * integer "id" --> assignment id
    * string "description" --> description of assignment
    * string "due_at" --> date/time in ISO 8601 format for due date of assignment
    * string "name" --> name of assignment
    * integer "points_possible"
  * string "workflow_state" --> such as "graded", "submitted", "unsubmitted", "published"
  * boolean "is_quiz_assignment" --> tells you whether it's an Assignment or a Quiz


## [OAuth2](https://canvas.instructure.com/doc/api/file.oauth.html)
Read [this](https://canvas.instructure.com/doc/api/file.oauth.html#accessing-canvas-api) for a walkthrough, which I have summarized below.
  * [Manual Token Generation](https://canvas.instructure.com/doc/api/file.oauth.html#manual-token-generation): These are steps for obtaining an Access Token for testing the above Canvas endpoints as an individual user. However, "asking any other user to manually generate a token and enter it into your application is a violation of Canvas' terms of service. Applications in use by multiple users MUST use OAuth to obtain tokens".
      1. Go to your personal Canvas page
      2. Navigate to Account > Settings > Approved Integrations
      3. Click the button to generate a new access token.
  * [OAuth2 Flow](https://canvas.instructure.com/doc/api/file.oauth.html#oauth2-flow): Our application can rely on Canvas for a user's identity. During step 1 of the web application flow below, specify the optional scope parameter as `scope=/auth/userinfo`. When the user is asked to grant our application access in step 2 of the web application flow, they will also be given an option to remember their authorization. If they grant access and remember the authorization, Canvas will skip step 2 of the request flow for future requests.
      
      1. Step 1: Redirect users to request Canvas access
          * `GET https://<canvas-install-url>/login/oauth2/auth?client_id=XXX&response_type=code&state=YYY&redirect_uri=https://example.com/oauth2response` is a sample request --> see [here](https://canvas.instructure.com/doc/api/file.oauth_endpoints.html#get-login-oauth2-auth) for more details
      
      2. Step 2: Redirect back to the request_uri, or out-of-band redirect
          * `http://www.example.com/oauth2response?code=XXX&state=YYY` OAuth2 response contained in query string if the user accepts our request, when Canvas redirects back to our request_uri --> see [here](https://canvas.instructure.com/doc/api/file.oauth.html#oauth2-flow-2) for error handling
          * The app can then extract the code, and use it along with the client_id and client_secret to obtain the final access_key
      
      3. Step 3: Exchange the code for the final access token
          * <img width="1104" alt="Screen Shot 2023-02-26 at 11 21 46 PM" src="https://user-images.githubusercontent.com/73796086/221473642-377b74f4-b62f-4a7f-b02c-9f4f13ec7159.png">
          
  * [Using an Access Token to authenticate requests](https://canvas.instructure.com/doc/api/file.oauth.html#using-access-tokens)
    * <img width="1103" alt="Screen Shot 2023-02-26 at 11 21 30 PM" src="https://user-images.githubusercontent.com/73796086/221473614-9f855814-3a11-43f1-b024-1d2081351fe4.png">
  * [Using a Refresh Token to get a new Access Token](https://canvas.instructure.com/doc/api/file.oauth.html#using-refresh-tokens)
    * <img width="1089" alt="Screen Shot 2023-02-26 at 11 20 30 PM" src="https://user-images.githubusercontent.com/73796086/221473505-2f36f50e-8bf5-4baf-a992-26a44ac53636.png">
  * [Logging Out](https://canvas.instructure.com/doc/api/file.oauth_endpoints.html#delete-login-oauth2-token)
    * Send a DELETE request to login/oauth2/token 



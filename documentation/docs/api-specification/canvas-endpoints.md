---
sidebar_position: 5
description: Canvas endpoints necessary to retrieve the information we need from a user's Canvas account.
---

Canvas API Specs
=============================

## Notes:
* Base URL: `https://templeu.instructure.com`
* [Pagination](https://canvas.instructure.com/doc/api/file.pagination.html): Requests that return multiple items will be paginated to 10 items by default. You can set a custom per-page amount with the ?per_page parameter. There is an unspecified limit to how big you can set per_page to.

## Example
### Action
* `request`: Description
* Parameters: 
  * type parameter1 --> description of parameter
* Example: `The request Katrina tried with her own Canvas account & Postman and it worked`
* Returns:
  * the relevent fields we'll want to collect and store from this call

## Endpoints 
### [List your courses](https://canvas.instructure.com/doc/api/courses.html#method.courses.index)
* `GET /api/v1/courses`: Retrieve a paginated list of courses in this account.
* Parameters:
  * string `enrollment_state` --> return courses where the user has an enrollment with the given state (`active`)
* Example: `GET https://templeu.instructure.com/api/v1/courses/?enrollment_state=active&per_page=100`

### [List assignments](https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index)
* `GET /api/v1/courses/:course_id/assignments`: Returns the paginated list of assignments for the current course or assignment group.
* Parameters:
  * string `include` submission --> the user's current submission for each assignment (which holds score)
* Example: `https://templeu.instructure.com/api/v1/courses/124235/assignments?per_page=100&include=submission`
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
    * string "workflow_state" --> such as "graded", "submitted", "unsubmitted"

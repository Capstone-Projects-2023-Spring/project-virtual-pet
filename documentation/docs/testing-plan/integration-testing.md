---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.


# Basic Workflow

## Overview

We will leverage Selenium to complete our integration testing in a semi-automated fashion. This integration tests will occur in clean version of our production build, with a clean version of our production database. We will reserve a set of user ids in real prod for the purpose of repeating these tests before our final release. We are currently constructing our endpoints using Django Rest Framework, which provides a serializer class that we can leverage to load the production database with mock data. Django provides a shell environment we can use to import our serializers and load data into the database programatically. Therefore, we can pre-prepare a set of scripts and pipe them into the shell using a bash script. For example:

## Sample Python script for loading data

```python

from db.serializers import *

#data is a valid dictionary representing required fields of a task object
task = TaskSerializer(**data) 
task.is_valid()
task.save()

```
## Sample Selenium Script
```python

WebDriver driver = new ChromeDriver();
driver.get("http://127.0.0.1:3000)
title = 'Study Buddies'
assertIs(title, driver.title, "Compare expected title with true title.")

```

## Sample Bash script
Here we are leveraging our prepared python script to perform CRUD operations in Django's shell, then launching our shell backend and front end before finally launching our prepared selenium script. 
```bash
#!bin/bash
cat load_data.py | python manage.py shell
python manage.py runserver
cd ../
nmp start
python3 selenium_script_use_case_1.py
python3 selenium_script_use_case_2.py
# and so on
```

# Use Case 1 - Account Creation

<details open="True">
<summary>As a user, it is important that I can create an account so that I can maintain my pet’s growth and my task progress</summary>

- 1. Upon accessing the web application for the first time at studybuddy.life, the user is directed to a landing page. There are buttons for creating an account and logging in.
- 2. The user selects the 'Register' button to access the account registration form.
- 3. The user inputs their username, email address, password, and other optional fields, and clicks the 'Sign Up' button to submit the form. If the information is valid, the user is notified that their account creation was successful.
- 4. The user selects the 'Sign In' link to access the sign-in page, and enters in their email and password.
- 5. Since the user is logging in for the first time, they are redirected to a pet selection page where they can click through a carousel of different cats and a rock.
- 6. The user chooses the rock and names it.
- 7. The site redirects the user to the home page of the site where they can see their pet at level.


</details>

<br></br>

## Assertions
1. Upon choosing a pet the user is routed to the home page. 
2. Upon completing account creation the user's information is correctly integrated into the final landing page in the process.

# Use Case 2 - Signing In

<details open="True">
<summary>As a user, I want to be able to log into an account to view my my progress and tasks.</summary>

- 1. The user accesses the site by going to 'studybuddy.life'. 
- 2. The user selects the 'Login' button to access the sign-in page.
- 3. The user enters their email address and password.
- 4. If the credentials are valid, The user is redirected to the home page where they can see their pet and their tasks. If not, the user will be notified that the credentials are invalid. 

</details>

<br></br>

## Assertions 
1. The correct user credentials are displayed on the pet selection page. 
2. The updated list of pets is shown, and each picture is aligned with the correct information.



# Use Case 3 - Feeding the Pet

<details open="True">
<summary>As a user, I want to keep my pet happy and help it grow by completing tasks and receiving candies.</summary>

- 1. The user navigates to the inventory page.
- 2. The user can see their collection of candies. Candy types are based on completion of tasks of different sizes and levels.
- 3. The user clicks and holds a candy to feed their pet. As a result, the pet becomes visibly happy and it gains EXP.

</details>

<br></br>

## Assertions
1. Experience shows the expected quantity.
2. Inventory is updated to the expected quantity.

# Use Case 4 - Canvas Integration

<details open="True">
<summary>As a user, I want to import my Canvas assignments.</summary>

- 1. The user navigates to the 'Canvas Integration' page.
- 2. The user reads a set of instructions guiding them on how to import Canvas assignments using a token.
- 3. The user copies and pastes their token into an input box and submits.
- 4. Once the token is successfully saved, a button with the canvas logo will appear in the header for desktop and footer for mobile.
- 5. The user can click the button to import their assignments for the first time, or update existing Canvas assignments.
- 6. Once the assignments are imported, the user sees them listed on the task page.
</details>

<br></br>

## Assertions 
1. Each page contains the correct title, verifying that we are routing through the pages correctly.
2. The expected courses are listed under tasks. 



# Use Case 5 - Task Creation

<details open="True">
<summary>As a user, I want to create my own tasks.</summary>

- 1. The user logs into their profile.
- 2. The user selects the “Create Task” button on the task page.
- 3. The user fills out the 'Create Task' form with information like a title, description, estimated time to complete a task, a due date, and tags for sorting.
- 4. The user selects the 'Create' button. They can now see this task on the task page.

</details>

<br></br>


## Assertions 
1. The task component is viewable, and contains the correct values.
2. The calendar component is updated on the correct date.


# Use Case 6 - Task Filtering 

<details open="True">
<summary> As a user, I want my study app to help me organize and keep track of my tasks by allowing me to update and sort them. </summary>


- 1. The user logs into their profile. They want to view their Canvas courses and user-made tasks separately. 
- 2. From the task page, the user selects the filter button next to the 'Create Task' button and sorts tasks by the 'Canvas Assignments' tag. The user can now see all their Canvas assignments.
- 3. The user un-checks the 'Canvas Assignment' tag and checks the 'My Tasks' tag. They can now only see the tasks they've made.
</details>

<br></br>

## Assertions 
1. The correct task types are displayed


# Use Case 7 - Improve Pet Mood

<details open="True">
<summary> As a user, I want to help improve my pet's mood if I forget to complete a task</summary>


- 1. The user has an overdue task. As a result, the pet is visibly upset.
- 2. The user checks off the assignment as finished and receives a candy.
- 3. The user feeds their pet as described in Use Case 3.
- 4. The pet's mood improves and becomes visibly happy.

</details>

<br></br>

## Assertions
1. Multiplier reads the correct value when decreased
2. Multiplier reads the correct value when increased
3. Pet mood is accurate at steps 3 and 6



Use Case 5 
## Assertions 
1. The task is correctly updated based on level of completion (each stage will be asserted). 
2. The inventory is updated with the correct candy.

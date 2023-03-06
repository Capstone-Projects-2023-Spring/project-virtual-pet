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

# Use Case 1

<details open="True">
<summary>As a user, I want to use the resources I've collected in the application to progress my avatar. </summary>


- #### 1.) The user navigates to the InventoryPage in the PageDisplay portion of the screen on the right. The inventory data is fetched through an API call.
- #### 2.) The user views a set of acquired rewards on the InventoryPage in the form of ‘candies’ which are contained as Items in an ItemGrid in the Inventory.
- ### 3.) The user drags a 'candy' to the avatar, and the Inventory is updated to reflect the removal of a candy. An API call updates the inventory list.
- ### 4.) The user drops the 'candy' onto their avatar on the lefthand side of the screen, and it shows an eating animation and a satisfied animation.
- ### 5.) The avatarInfo is updated which contains the EXP data, which causes the progress bar to update, increasing when the ‘candy’ is consumed.

</details>

<br></br>

# Assertions
1.) Experience shows the expected quantity.
2.) Inventory is updated to the expected quantity.


# Use Case 2

<details open="True">
<summary>As a user, I want to link Canvas to my Virtual Pet. </summary>


- #### 1.) The user creates an account and profile as described in Use Case 8.
- #### 2.) The user navigates to the Canvas Integration section of the site.
- ### 3.) The user signs on through SSO.
- ### 4.) Courses as assignment data are imported into the user's info.

</details>

<br></br>

# Assertions 
1.) Each page contains the correct title, verifying that we are routing through the pages correctly.
2.) The expected courses are listed under tasks. 

# Use Case 3

<details open="True">
<summary>As a user, I want to quickly monitor my progress by assessing the mood of my avatar.</summary>


- #### 1.) User has set up Canvas integration and has neglected an assignment.
- #### 2.) As the assignment gets closer, the avatar becomes visibly hungry in a comically over-the-top-fashion.
- ### 3.) When the due date for the assignment passes, the avatar becomes visibly upset.
- ### 4.) Experience and rewards gained in the application now have a multiplier that is less than one.
- ### 5.) The user can now retroactively complete the assignment and the multiplier will be returned to the previous state.
- ### 6.) This will be reflected in the avatar's apparent mood. 

</details>

<br></br>

# Assertions
1.) Multiplier reads the correct value when decreased
2.) Multiplier reads the correct value when increased
3.) Pet mood is accurate at steps 3 and 6

# Use Case 4

<details open="True">
<summary> As a user, I want to create a schedule and be encouraged by my Virtual Pet to adhere to the schedule.</summary>


- #### 1.) The user logs into their profile.
- #### 2.) User navigates to the “Create Task” tab.
- ### 3.) User fills out a form with types of milestones and calendar information regarding due dates. These can be explicit calendar entries based on a particular date, or recur on a regular time interval.
- ### 4.) The backend for the site builds a set of events for the avatar based on these milestones.

</details>

<br></br>

# Assertions 
1.) The task component is viewable, and contains the correct values.
2.) The calendar component is updated on the correct date.

# Use Case 5

<details open="True">
<summary> As a user, I want to have my study app stay up to date on my progress towards my study goals.</summary>


- #### 1.) The user logs into their profile.
- #### 2.) From the homepage, the user can select a specific task to see more information.
- ### 3.) After selecting a task, the user may update their progress by indicating they are halfway through, a quarter of the way through, etc.
- ### 4.) After progressing further towards completing a task, the user’s pet will receive EXP in the form of candy towards its next level.

</details>

<br></br>

# Assertions 
1.) The task is correctly updated based on level of completion (each stage will be asserted). 
2.) The inventory is updated with the correct candy.

# Use Case 6

<details open="True">
<summary>  As a user, I want to be able to track my pet’s growth and my progress towards reaching my study goals.</summary>


- #### 1.) The user logs into their profile.
- #### 2.) The user can always see their pet's progress towards the next level in the form of a progress bar on the left side of the page.
- ### 3.) The user navigates to the ‘Pet Profile’ page.
- ### 4.) From this page, the user can see a list of their current tasks and can select a specific task to see more information.
- ### 5.) After selecting their task, the user will see statistics about their progress towards completing that task, including the time remaining before the deadline.

</details>

<br></br>

# Assertions 
1.) The correct task information is displayed. 
2.) The task shows the correct date corresponding to its respective deadlines


# Use Case 7

<details open="True">
<summary>  As a user, I want to be able to log into an account so that my progress and tasks will be saved.</summary>


- #### 1.) The system requests the user to log in or create an account.
- #### 2.) The user enters their email address and password.
- ### 3.) The system validates the user’s credentials and grants access to the application.


</details>

<br></br>

# Assertions 
1.) The correct user credentials are displayed on the pet selection page. 
2.) The updated list of pets is shown, and each picture is aligned with the correct information.

# Use Case 8

<details open="True">
<summary>As a user, it is important that I can create an account so that I can maintain my pet’s growth and my task progress.</summary>


- #### 1.) Upon accessing the web application for the first time, the user is given the option to create an account.
- #### 2.) The user inputs their email address and creates a password to create their account.
- ### 3.) After creating the account, the user sees a page allowing them to choose a pet out of a selection of avatars.
- ### 4.) The user selects a pet.
- ### 5.) The site automatically navigates to the Canvas Integration tab.
- ### 6.) The user chooses whether to integrate with their Canvas account.
- ### 7.) The user now has access to creating tasks and growing their pet.

</details>

<br></br>

# Assertions 
1.) Upon choosing NOT to integrate canvas, the user is routed to the correct landing page.
2.) Upon choosing to integrate canvas, the user is routed to the integration page. 
3.) Upon completing canvas integration, the user's information is correctly integrated into the final landing page in the process. 




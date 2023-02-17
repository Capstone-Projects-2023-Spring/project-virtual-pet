---
sidebar_position: 1
---

# Activities

## Requirements Gathering 
Research on React, Django, and Docker will be required to create containers that will run the frontend and backend of the site. In order to learn how these tools work together, proof of concepts will be created. Additional information gathering about progression systems is necessary in order to incentivize continued use of the app. This can be done by finding written resources on the topic and surveying the ways in which competing apps implement their progression systems. For hosting the site, different solutions like Google Cloud Platform, Heroku, and DigitalOcean will be explored. Additionally, research on the integration of animated frames into the application must be conducted. 

## Top-Level Design

1. Create a navigation bar for different pages related to managing the user’s tasks and pets.
2. Create a pet display to help the user keep track of them.
3. Create a progression system to appropriately reward users for the completion of tasks.
4. Add a pop up for reminders to finish tasks.
5. Allow users to access pages for settings unrelated to their pet and tasks like integrating canvas, updating/accessing account information, logging out, etc.
6. Allow returning users to log in.
7. Allow first-time users to create an account.
8. Create the backend communication.
9. Setup SQLite database.
10. Implement Canvas' authorization and authentication of Virtual Pet Study Buddy through the OAuth2 process.
11. Host the site using a cloud service provider.
12. Containerize the site.


## Detailed Design


1. Create a navigation bar for different pages related to managing the user’s tasks and pets
    * Task page:
        * Users can create new tasks by filling out a form specifying details like descriptions, dates and deadlines, if it’s recurring, etc.
        * There will be a column of tasks and a column of Canvas assignments (if integrated). Users can check off a task as finished by selecting the checkbox next to  it. Canvas assignments will be marked as finished when they are completed in Canvas. 
    * Calendar page:
        * Users can interact with a calendar and select days to view what tasks/assignments are due. 
    * Inventory page:
        * Users can keep track of what items they have and give them to their pet.
    * Pet profile page:
        * Users can see more details about their pet, like a progress bar showing how many points it has, its age, etc. 
        * Users can see more details about their progress, like how many tasks they’ve completed over time, daily login streaks, etc. 

2. Create a pet display to help the user keep track
    * Users can always see how their progress impacts their pet with a fixed display. The pet’s mood will visibly shift based on performance; poor performance will worsen the pet’s mood, and the opposite for good performance. 

3. Create a progression system to appropriately reward users for the completion of tasks
    * Upon the completion of tasks, pets will receive one or several candies, which upon feeding to their pet will increase their EXP and further their progress to the next level.
    * By successfully logging into their account each day, a multiplier will increase the amount of EXP (in the form of candy) the user receives from completing tasks. The size of this multiplier will increase based on the number of days in a row the user has logged in.
    * There will be different tiers for experienced gained, ranging from beginner to expert. 

4. Add a pop up for reminders to finish tasks
    * Pop up reminders will appear for tasks the user wants to be reminded of (part of editing/creating a task).

5. Allow users access to settings unrelated to their pet and tasks like integrating canvas, updating/accessing account information, logging out, etc.
    * There will be a separate navigation to access these settings. 

6. Allow returning users to log in.
    * The login page will provide fields for username/email and password.

7. Allow first-time users to create an account.
    * The login account page will have a 'Create an account' button for first time users.
    * Users will be redirected to a form to fill out the necessary fields to create an account.
    * Users will be shown a list of pets to choose from and name. 
    * Users will be given the option to integrate Canvas.

8. Create the backend communication
    * Set up an API for the site to fetch user information from the SQLite database and Canvas API.
    
9. Setup SQLite database
    * 

10. Implement Canvas' authorization and authentication of Virtual Pet Study Buddy through the OAuth2 process.
    * Users who want to integrate Canvas will be prompted to allow the site access to their Canvas information. 
    * Users’ completion of assignments and their grades from Canvas will be shown on the site and have an impact on their pets.

11. Host the site using a cloud service provider
    * The site will run on a Linux server.

12. Containerize the site
    * Use containers to run the site’s backend and frontend. 


## Tests

1. Unit Testing
    * Unit tests for the Django backend will be created with the standard library module ‘unittest’.
    * Unit tests for the React frontend will be created with Jest and the React testing library. 

2. Mock Data
    * A Canvas course circuit will be created to use for testing. This will include 1000-4000 level courses, each with a collection of homeworks, quizzes, projects, and tests. 
    * We will populate our SQLite database with mock user profiles containing mock avatars, to use with our integration testing platform. 
        * There will be an accompanying routine to load and unload the mock data on a schedule so that integration tests can be repeated.

3. Integration Testing
    * Selenium, along with ChromeDriver and GeckoDriver (Firefox), will be used for integration testing. Each integration test will be scripted to conform to the functionality outlined in our use cases. 

4. System Testing
    * Our docker container will be loaded onto a standalone platform for the purpose of System Testing. The platform will be determined at a later date, with current candidates being a standalone server or a VM instance in the cloud.

5. Acceptance Testing
    * User Acceptance Testing will be performed at the end of the development life cycle to ensure that our product meets all of the requirements as outlined. In addition, we will collect feedback from users to assist with future improvements for the application. 

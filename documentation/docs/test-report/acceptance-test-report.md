---
sidebar_position: 3
---
# Acceptance Tests Report

## Description
The acceptance tests demonstrate functional and non-functional requirements using a combination of automated tests derived from the use-cases (user stories) and manual tests with recorded observation of the results. As the application developed over time, the acceptance test document from the testing plan, in the form of a Google spreadsheet, was kept up-to-date. This same spreadsheet was used as a basis for creating automated versions of the same tests with Selenium. 

## Manual tests

### Spreadsheets
See <a href="https://docs.google.com/spreadsheets/d/1cuUb6Kp730-dWrmaLGF4BwymjM5wOjrheQmZXhBRBhs/edit?usp=sharing">this Google Sheet</a> for a blank copy of the manual acceptance tests. 

See <a href="https://docs.google.com/spreadsheets/d/1v4dPHoCdsGfFrSIzFaNgPxO5WODzLWRHibZIn-iCB3s/edit?usp=sharing">this Google Sheet</a> for a completed version of the manual acceptance tests. 

### Tests
The tests are also outlined below for reference:
| Test ID | Action/Steps | Expected Result |
| --- | --- | --- |
| 1 | View launch screen.  Navigate to Study Buddy site, at https://studybuddy.life | You should see the launch screen page with options to Login or Register |
| 2 | Registration - create new account.  Click the Register button on the launch screen.  Enter a username, valid email, and password. Enter your name, birthday, and a bio.  Click the Sign Up button. | You should see a "Sucess!" popup if your account registration was successful. You should receive a welcome email confirming your account registration. |
| 3 | Login - correct credentials.  At the login page, enter your correct credentials (email and password) then click the Sign In button | Upon your first sign-in only, you should be redirected to the Pet Selection page. Upon any other sign-in, on login, you should be redirected to the homepage and see your pet and its name on the left of the screen. |
| 4 | Login - incorrect credentials.  At the login page, enter incorrect credentials, such as an incorrect password. Click the Sign In button. | You should see a popup error message stating "Unauthorized". |
| 5 | Pet selection - choosing a pet  At the Pet Selection page, navigate with the arrows to choose from a selection of pets. | You should be prompted to enter a name. |
| 6 | Pet selection - no name entered  At the Pet Selection page, after selecting a pet, click "Submit" without entering a name. | You should see a warning message saying "You must enter a name". |
| 7 | Pet selection - name entered  At the Pet Selection page, after selecting a pet, enter a name and click "Continue". | You should be redirected to the homepage and see your pet and its name on the left of the screen. |
| 8 | Logout  From the homepage, click the Logout button in the top right corner. | On logout, you should be redirected to the landing page. |
| 9 | Change pet information - empty input  From the homepage, click the Profile tab. Change your pet's name and/or bio to an empty input. Click Submit. | Your pet's name and/or bio should remain unchanged. No errors should pop up. |
| 10 | Change pet information - valid input  From the homepage, click the Profile tab. Change your pet's name and/or bio to new input(s). | Your pet's name and/or bio should appear as changed on the left of the screen. |
| 11 | Change user account information - empty input  From the homepage, click user icon in the top right, beside your username. Click "Account" to navigate to the Account page. Enter an empty input for your name and/or bio. Click Submit. | You should see an error(s) prompting you to enter a name and/or bio before submitting. Your information should remain unchanged. |
| 12 | Change user account information - valid input  From the homepage, click user icon in the top right, beside your username. Click "Account" to navigate to the Account page. Enter a valid input for your name and/or bio. Click Submit. | After pressing Submit, once you navigate away from the page and navigate back, your profile inputs/changes will be saved. |
| 13 | "Create a Task. On the homepage, click the Tasks tab. Click ""Create Task"". Enter details about Task (name, description, due date). Click ""Create Task""." | You should see the new Task in the Task list, under the Active tab. |
| 14 | "Delete a Task. On the homepage, click the Tasks tab. From either the Active or Completed tabs, choose a Task you would like to delete. Click the ""x"" to the right of the task to delete." | You should no longer see the deleted Task in the Task list. |
| 15 | "Complete a Task. On the Task page, click the checkbox next to a Task." | "In the Inventory tab of the homepage, a new candy is shown. Task moved from Active to Completed section of Tasks." |
| 16 | "Feed pet a candy. On the homepage, navigate to the Inventory tab to open the Inventory. Click and hold down on a (colored, not gray) candy to feed your pet." | "You should see a confetti animation on the candy. Your pet should react by displaying a happy animation. The progress bar below the pet should fill from left to right. The candy should no longer be present in the Inventory." |
| 17 | "Canvas Integration - valid token. Click user icon in the top right, beside your username. Click ""Canvas Integration"" to navigate to the Canvas Integration page. From the Canvas Integration page, follow the instructions for securely entering your API key. Enter a valid token, then click Submit." | "You should see a loading screen and be redirected to the homepage. You should see the Canvas icon spinning to indicate the tasks are importing, which may take some time. After a bit of time, you should see your Canvas assignments in the Tasks list. You are unable to check off your Canvas tasks manually." |
| 18 | "Canvas Integration - invalid token. Click user icon in the top right, beside your username. Click ""Canvas Integration"" to navigate to the Canvas Integration page. Enter a non-valid token, such as ""hello"". Then click Submit." | "You should receive a warning that you must enter a valid token." |
| 19 | "Canvas Integration - updating. Click Canvas icon in the top left from the Main page." | "The icon should begin spinning. When done, any updates to assignments through Canvas should reflect in corresponding Task's details. No imported assignments should be repeated. Any submitted tasks should be reflected by being removed from the To-Do list and a candy should be present in the Inventory." |
| 20 | "Click on pet. Click on pet from the main page." | "The pet should animate with a speech bubble saying ""Hi!""" |
| 21 | "Level up. Turn your volume up. Feed pet candies until pet levels up." | "There should be a sound associated with leveling up. At level 20, the pet gains a propeller hat." |
| 22 | "Notifications. Once logged in (make sure it's a non-private browser), click the notification bell in the bottom right corner." | "A native prompt the subscribe to notifications should pop up. Clicking ""Allow"" should trigger a ""Welcome to Study Buddy!"" notification." |

### Description of failed tests
* In test number 21, not all pets obtain the propeller hat upon reaching level 20. Only the gray cat does. 
* In test number 22, this passes in some cases but not all. If an iOS device is not updated, it will not display the notification bell and receive notifications. Additionally, 2 welcome notifications are sometimes sent the first time a user subscribes.

## Automated tests
Click <a href="https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/tree/main/pocs-capstone/tests/acceptance">here</a> to be directed to the Python script of automated acceptance tests on our GitHub repository.

The output from the automated acceptance tests can also be found below.

### Output
AUTOMATED ACCEPTANCE TESTS USING SELENIUM

launch_test | Acceptance test 1: PASSED
register_test | Acceptance test 2: PASSED
login_test_correct | Acceptance test 3: PASSED
login_test_incorrect | Acceptance test 4: PASSED
pet_select_noname_test | Acceptance test 5: PASSED
pet_select_test | Acceptance test 6: PASSED
logout_test | Acceptance test 7: PASSED
petprofile_empty_test | Acceptance test 8: PASSED
petprofile_test | Acceptance test 9: PASSED
account_info_empty_test | Acceptance test 10: PASSED
account_info_changed_test | Acceptance test 11: PASSED
create_task_test | Acceptance test 12: PASSED
complete_task_test | Acceptance test 13: PASSED
delete_task_test | Acceptance test 14: PASSED
feed_test | Acceptance test 15: PASSED

### Notes on the automated tests
* The tests cover all manual acceptance tests except 
    * Canvas integration (which requires a real user's token)
    * Clicking on the pet (which requires observation of an animation)
    * Notifications (which require user's permission and cannot be fully automated)
* The above output comes from tests that were run on the desktop version of Study Buddy on Mac in Chrome drivers using Selenium
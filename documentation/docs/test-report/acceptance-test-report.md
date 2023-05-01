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
| ------- | ------------ | ----------------|
| 1       | View launch screen. Navigate to Study Buddy site, at https://studybuddy.life | You should see the launch screen page with options to Login or Register |
| 2       | Registration - create new account. Click the Register button on the launch screen. Enter a username, valid email, and password. Enter your name, birthday, and a bio. Click the Sign Up button. | You should see a "Sucess!" popup if your account registration was successful. You should receive a welcome email confirming your account registration. |
| 3       | Login - correct credentials. At the login page, enter your correct credentials (email and password) then click the Sign In button | Upon your first sign-in only, you should be redirected to the Pet Selection page. Upon any other sign-in, on login, you should be redirected to the homepage and see your pet and its name on the left of the screen. |

### Description of failed tests
* In test number 21, not all pets obtain the propeller hat upon reaching level 20. Only the gray cat does. 
* In test number 22, this passes in some cases but not all. If an iOS device is not updated, it will not display the notification bell and receive notifications. Additionally, 2 welcome notifications are sometimes sent the first time a user subscribes.

## Automated tests
Click <a href="https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/tree/main/pocs-capstone/tests/acceptance">here</a> to be directed to the Python script of automated acceptance tests on our GitHub repository.

The output from the automated acceptance tests can also be found below.

### Output
AUTOMATED ACCEPTANCE TESTS USING SELENIUM
```
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
```

### Notes on the automated tests
* The tests cover all manual acceptance tests except 
    * Canvas integration (which requires a real user's token)
    * Clicking on the pet (which requires observation of an animation)
    * Notifications (which require user's permission and cannot be fully automated)
* The above output comes from tests that were run on the desktop version of Study Buddy on Mac in Chrome drivers using Selenium

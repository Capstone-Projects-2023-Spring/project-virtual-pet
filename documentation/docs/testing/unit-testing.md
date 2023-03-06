---
sidebar_position: 1
---
# Frontend Unit Tests

## For All React Component Tests 
- Not every React component from the class diagram will have their tests described in this document to avoid repetition.
- Each React component will have its own test file with at a least one test case. 
- Every test file will check that the React component has rendered.
- Every React component that updates state variables will have tests to verify that they are being updated correctly.
- For example: 
    - Test component was correctly rendered.
        - #### Input / User action
            - User action results in component appearing on screen. 
        - #### Expected Result
            - Component is rendered and mounted on the DOM.

    - Test states being updated.
        - #### Input / User action
            - Function used to update state is called.
        - #### Expected Result
            - The component is re-rendered with updated state value.

<br/>

## Mock Objects / Calls 
- Mock versions of the user's personal information, inventory, tasks, and pet details will be used for the tests.
- Mock calls will be used to simulate interactions with the backend. 

<br/>

## React Component Unit Tests

### App
<details open="True">

- Test fetching of user data from backend.
     - #### Input / User action
        - Logged in user opens application.
    - #### Expected Result
        - Call to fetchData(), which calls setUserInfo().
        - On success, values stored in userInfo is updated.

</details>



<br/>

### DropDownMenu

<details open="True">

- Test user clicking on DropDownMenu component.
    - #### Input / User action
        - User clicks on component.
    - #### Expected Result
        - handleClick() is called, DropDownItems are rendered.

</details>

<br/>

### DropDownItem

<details open="True">

- Test user clicking on DropDownItem component - Account Settings option.
    - #### Input / User action
        - User clicks on option to view account settings page.
    - #### Expected Result
        - handleClick() is called, AccountSettingsPage component is rendered.

- Test user clicking on DropDownItem component - Canvas Integration option.
    - #### Input / User action
        - User clicks on option to view Canvas integration page.
    - #### Expected Result
        - handleClick() is called, CanvasIntegrationPage is rendered.

 - Test user clicking on DropDownItem component - Log Out option.
    - #### Input / User action
        - User clicks on option to log out.
    - #### Expected Result
        - handleClick() is called, user is logged out.

</details>

<br/>

### CanvasIntegrationPage

<details open="True">

- Test user inputting Canvas access token.
    - #### Input / User action
        - User enters key into input field and clicks the submit button.
    - #### Expected Result
        - On success, user is notified that token was validated, setUserInfo() is called and userInfo value is updated.
        - On failure, user is notified that token was invalid.

</details>

<br/>

### AccountSettingsPage

<details open="True">

- Test user updating email information.
    - #### Input / User action
        - User enters new email into input field and clicks the submit button.
    - #### Expected Result
        - On success, calls changeEmail() which calls setUserInfo(). Value of userInfo is updated to include updated email. 
        - On failure, user is notified that the email is invalid.

- Test user updating username.
    - #### Input / User action
        - User enters new username into input field and clicks the submit button.
    - #### Expected Result
        - On success, calls changeUsername() which calls setUserInfo(). Value of userInfo is updated to include updated username. 
        - On failure, user is notified that username is already taken.

- Test user updating password
    - #### Input / User action
        - User enters current and new password into input fields and clicks submit.
    - #### Expected Result
        - On success, calls changePassword() which interacts with the backend to update password securely.
        - On failure, user can be notified that:
            - Current password was entered incorrectly.
            - New passwords don't match.
            - New password does not meet length/character requirements.

- Test user deleting their account
    - #### Input / User action
        - User selects delete account button and verifies the operation via typing their pet's name.
    - #### Expected Result
        - On success, user is notified that their account has been deleted and is securely logged out.
        - On failure, user can be notified that the pet's name was entered incorrectly.

</details>

<br/>

### Main

<details open="True">

- Test fetching of user's inventory and pet information.
    - #### Input / User action
        - User logs into application.
    - #### Expected Result
        - Call to fetchData(), which calls setInventory() and setAvatarInfo().
        - On success, values stored in inventory and avatarInfo are updated.

</details>

<br/>

### PetSprite

<details open="True">

- Test user feeding pet
    - #### Input / User action
        - User drags a candy from their inventory and drops it on their pet.
    - #### Expected Result
        - Call to handleItemRelease(), which calls setAvatarInfo(), setInventory(), and setSprite().
        - On success, pet XP, sprite image, and inventory are updated accordingly.

- Test user clicking on pet.
    - #### Input / User action
        - User clicks on their pet.
    - #### Expected Result
        - Call to handleClick(), which calls setSprite(), triggering a positive animation.

</details>

 <br/>

### PageDisplay

<details open="True">

- Test fetching of user's taskList information.
    - #### Input / User action
        - User logs into application.
    - #### Expected Result
        - Call to fetchData(), which calls setTaskList().
        - On success, values stored in taskList are updated.  

</details>

<br/>




### NavButton
<details open="True">

- Test user clicking on NavButton component - Task Page button.
    - #### Input / User action
        - User clicks on button to view task page.
    - #### Expected Result
        - TaskPage component is rendered.

- Test user clicking on NavButton component - Inventory Page button.
    - #### Input / User action
        - User clicks on button to view inventory page.
    - #### Expected Result
        - InventoryPage component is rendered.

 - Test user clicking on NavButton component - Calendar Page button.
    - #### Input / User action
        - User clicks on button to view calendar page.
    - #### Expected Result
        - CalendarPage component is rendered.

 - Test user clicking on NavButton component - Progress Page button.
    - #### Input / User action
       - User clicks on button to view progress page.
    - #### Expected Result
        - ProgressPage component is rendered.

</details>
       
<br/>

### TaskItem
<details open="True">

- Test user updating task completion status.
    - #### Input / User action
        - User indicates how much of the task they have completed.
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList. If task is completed, then setInventory() is also called and the value of inventory is updated.

- Test user deleting task.
    - #### Input / User action
        - User clicks button to delete task.
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

 - Test user selecting TaskItem component.
    - #### Input / User action
        - User clicks on TaskItem component.
    - #### Expected Result
        - TaskDetails component is rendered.

</details>

<br/>

### TaskDetails
<details open="True">

- Test user editing task details.
    - #### Input / User action
        - User clicks on edit button and updates task attributes (name, details, size, date, recurring status).
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

- Test user deleting task
    - #### Input / User action
        - User clicks button to delete task.
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

</details>

<br/>

### CreateTaskForm
<details open="True">

- Test user creating a new task.
    - #### Input / User action
        - User fills out form describing task.
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

</details>

<br/>

### Item
<details open="True">

- Test user picking up and dragging a candy.
    - #### Input / User action
        - User selects an item.
    - #### Expected Result
        - Item follows user's finger/mouse around the screen.

</details>

<br/>

### Calendar
<details open="True">

- Test user selecting a calendar date.
    - #### Input / User action
        - User clicks on a date in the Calendar component.
    - #### Expected Result
        - Call to handleClick(), which calls displayTasks() and shows users a list of tasks due on that date.

</details>

<br/>

### PPTaskItem
<details open="True">

- Test user clicking on PPTaskItem.
    - #### Input / User action
        - User clicks on PPTaskItem component.
    - #### Expected Result
        - Renders PPTaskDetails component.

</details>

# Backend Unit Tests

## Views

### CustomUserInfoViewTests

Procedure: This class will provide the user's data to the frontend <br>
Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow the user data to sent <br>
Inputs: url path - String, url name - String <br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve user data object <br>

### UserLoginViewTests

Procedure: This class will recieve a user's login credentials and verify with the database if the credentials are valid<br>
Tests: Check status codes, url exists at desire location, url reverse lookup, if credentials are correct or incorrect<br>
Inputs: user_name - String, password - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if credential provided are valid, true if credential provided are not valid<br>


### CustomUserCreateViewTests

Procedure: This class will recieve register data and attempt to register a new user<br>
Tests:  Check status codes, url exists at desire location, url reverse lookup, if register data already exists<br>
Inputs: user_name - String, email - String, first_name - String, password - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if register data provided is valid, true if register data provided is not valid<br>

### PetDataViewTests

Procedure: This class will provide the user's pet data<br>
Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow pet data to be sent<br>
Inputs: url path - String, url name - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve pet data object<br>

### UserTaskViewTests

Procedure: This class will provide the user's task data<br>
Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow task data to be sent<br>
Inputs: url path - String, url name - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve task data object<br>

### UserInventoryTests

Procedure: This class will provide the user's inventory data<br>
Tests: Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow inventory data to be sent<br>
Inputs: url path - String, url name - String<br>
Expected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve inventory data object<br>



### Register View

#### *def test_view_url_exists_at_desired_location(self)*
```
 Test: Checks if the url exists for register view
 Returns: True if the response status code is 201, other wise false
```


## Database Models

### NewUser Model

#### *def test_first_name_label(self)*
```
Test: Checks the text for the first_name label
Returns: True if the first_name text label matches the expected label output, otherwise false
```

#### *def test_user_name_max_length(self)*
```
Test: Checks the size of the field allocated for the user_name text
Returns: True if the user_name max length matches the expected max length, otherwise false
```

#### *def test_first_name_max_length(self)*
```
Test: Checks the size of the field allocated for the first_name text
Returns: True if the first_name max length matches the expected max length, otherwise false
```
  
#### *def test_bio_max_length(self)*
```
Test: Checks the size of the field allocated for the first_name text
Returns: True if the first_name max length matches the expected max length, otherwise false
```
  
#### *def test_object_name_is_user_name(self)*
```
Test: Checks that the database object's name is the user_name attribute
Returns: True if the object's name matches the expected user_name output, otherwise false
```
       
#### *def test_email_address_label(self)*
```
Test: Checks the text for the email_address label
Returns: True if the email_address text label matches the expected label output, otherwise false
```

#### *test_bio_label(self)*
```
Test: Checks the text for the bio label
Returns: True if the bio label text label matches the expected label output, otherwise false
```
## CustomAccountManager Model (pending)
## Avatar Model (pending)
## Inventory Model (pending)
## Task Model (pending)



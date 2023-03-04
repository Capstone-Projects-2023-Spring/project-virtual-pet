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
- Test fetching of user data from backend
     - #### Input / User action
        - Logged in user opens application
    - #### Expected Result
        - Call to fetchData(), which calls setUserInfo()
        - On success, values stored in userInfo is updated

<br/>

### DropDownMenu
- Test user clicking on DropDownMenu component
    - #### Input / User action
        - User clicks on component
    - #### Expected Result
        - handleClick() is called, DropDownItems are rendered

<br/>

### DropDownItem

- Test user clicking on DropDownItem component - Account Settings option
    - #### Input / User action
        - User clicks on option to view account settings page
    - #### Expected Result
        - handleClick() is called, AccountSettingsPage component is rendered

- Test user clicking on DropDownItem component - Canvas Integration option
    - #### Input / User action
        - User clicks on option to view Canvas integration page
    - #### Expected Result
        - handleClick() is called, CanvasIntegrationPage is rendered

 - Test user clicking on DropDownItem component - Log Out option
    - #### Input / User action
        - User clicks on option to log out
    - #### Expected Result
        - handleClick() is called, user is logged out
       
<br/>

### CanvasIntegrationPage
- Test user inputting Canvas access token
    - #### Input / User action
        - User enters key into input field and clicks the submit button
    - #### Expected Result
        - On success, user is notified that token was validated, setUserInfo() is called and userInfo value is updated
        - On failure, user is notified that token was invalid

<br/>

### AccountSettingsPage
- Test user updating email information
    - #### Input / User action
        - User enters new email into input field and clicks the submit button
    - #### Expected Result
        - On success, calls changeEmail() which calls setUserInfo(). Value of userInfo is updated to include updated email. 
        - On failure, user is notified that the email is invalid 

- Test user updating username
    - #### Input / User action
        - User enters new username into input field and clicks the submit button
    - #### Expected Result
        - On success, calls changeUsername() which calls setUserInfo(). Value of userInfo is updated to include updated username. 
        - On failure, user is notified that username is already taken

- Test user updating password
    - #### Input / User action
        - User enters current and new password into input fields and clicks submit
    - #### Expected Result
        - On success, calls changePassword() which interacts with the backend to update password securely.
        - On failure, user can be notified that:
            - Current password was entered incorrectly
            - New passwords don't match
            - New password does not meet length/character requirements

- Test user deleting their account
    - #### Input / User action
        - User selects delete account button and verifies the operation via typing their pet's name
    - #### Expected Result
        - On success, user is notified that their account has been deleted and is securely logged out
        - On failure, user can be notified that the pet's name was entered incorrectly

<br/>

### Main
- Test fetching of user's inventory and pet information
    - #### Input / User action
        - User logs into application
    - #### Expected Result
        - Call to fetchData(), which calls setInventory() and setAvatarInfo()
        - On success, values stored in inventory and avatarInfo are updated

<br/>

### PetSprite
- Test user feeding pet
    - #### Input / User action
        - User drags a candy from their inventory and drops it on their pet
    - #### Expected Result
        - Call to handleItemRelease(), which calls setAvatarInfo(), setInventory(), and setSprite()
        - On success, pet XP, sprite image, and inventory are updated accordingly   

- Test user clicking on pet
    - #### Input / User action
        - User clicks on their pet
    - #### Expected Result
        - Call to handleClick(), which calls setSprite(), triggering a positive animation

 <br/>

### PageDisplay
- Test fetching of user's taskList information
    - #### Input / User action
        - User logs into application
    - #### Expected Result
        - Call to fetchData(), which calls setTaskList()
        - On success, values stored in taskList are updated     

<br/>

### NavButton
- Test user clicking on NavButton component - Task Page button
    - #### Input / User action
        - User clicks on button to view task page
    - #### Expected Result
        - TaskPage component is rendered

- Test user clicking on NavButton component - Inventory Page button
    - #### Input / User action
        - User clicks on button to view inventory page
    - #### Expected Result
        - InventoryPage component is rendered

 - Test user clicking on NavButton component - Calendar Page button
    - #### Input / User action
        - User clicks on button to view calendar page
    - #### Expected Result
        - CalendarPage component is rendered

 - Test user clicking on NavButton component - Progress Page button
    - #### Input / User action
       - User clicks on button to view progress page
    - #### Expected Result
        - ProgressPage component is rendered
       
<br/>

### TaskItem
- Test user updating task completion status
    - #### Input / User action
        - User indicates how much of the task they have completed
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList. If task is completed, then setInventory() is also called and the value of inventory is updated.

- Test user deleting task
    - #### Input / User action
        - User clicks button to delete task
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

 - Test user selecting TaskItem component
    - #### Input / User action
        - User clicks on TaskItem component
    - #### Expected Result
        - TaskDetails component is rendered

<br/>

### TaskDetails
- Test user editing task details
    - #### Input / User action
        - User clicks on edit button and updates task attributes (name, details, size, date, recurring status)
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

- Test user deleting task
    - #### Input / User action
        - User clicks button to delete task
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

<br/>

### CreateTaskForm
- Test user creating a new task
    - #### Input / User action
        - User fills out form describing task
    - #### Expected Result
        - Call to updateTask(), which calls setTaskList() and updates the value of taskList.

<br/>

### Item
- Test user picking up and dragging a candy
    - #### Input / User action
        - User selects an item
    - #### Expected Result
        - Item follows user's finger/mouse around the screen

<br/>

### Calendar
- Test user selecting a calendar date
    - #### Input / User action
        - User clicks on a date in the Calendar component
    - #### Expected Result
        - Call to handleClick(), which calls displayTasks() and shows users a list of tasks due on that date

<br/>

### PPTaskItem
- Test user clicking on PPTaskItem
    - #### Input / User action
        - User clicks on PPTaskItem component
    - #### Expected Result
        - Renders PPTaskDetails component

# Backend Unit Tests
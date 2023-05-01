---
sidebar_position: 4
---

# Sequence Diagrams

## Use Case 1

**As a user, it is important that I can create an account so that I can maintain my pet’s growth and my task progress.**

```mermaid
sequenceDiagram
title Account Creation
    actor u as User
    participant a as App
    participant pf as ProfileCreationView
    participant ps as PetSelectionView
    participant pc as PetSelectionCard
    participant mp as Main
    participant api as APIMiddleware

    u ->>+a: navigate to the site - https://studybuddy.life
    a ->>+pf: render(): route to profile creation page
    pf ->> api: PUT (HTTP) Content-Type: JSON userObject
    api --> pf: HTTP 200
    pf -->-a: return profile created
    a ->>+ps: render(): route to pet selection page
    ps ->>+pc: render(): generate pet selection cards and present to user
    u ->> pc: select pet rock
    pc ->> api: PUT (HTTP) Content-Type: JSON {userid:petObject{}}
    api --> pc: HTTP 200
    pc -->-ps: return confirmed creation
    ps -->-a: return confirmed creation
    a ->>+ mp: render()
    mp ->> api: GET (HTTP) initialization routine for main page
    api --> mp: HTTP 200 Content-Type: JSON[] user total contents 

    deactivate mp
    deactivate a

```
    1. Upon accessing the web application for the first time at studybuddy.life, the user is directed to a landing page. There are buttons for creating an account and logging in.
    2. The user selects the 'Register' button to access the account registration form.
    3. The user inputs their username, email address, password, and other optional fields, and clicks the 'Sign Up' button to submit the form. If the information is valid, the user is notified that their account creation was successful.
    4. The user selects the 'Sign In' link to access the sign-in page, and enters in their email and password.
    5. Since the user is logging in for the first time, they are redirected to a pet selection page where they can click through a carousel of different cats and a rock.
    6. The user chooses the rock and names it.
    7. The site redirects the user to the home page of the site where they can see their pet at level.

    
## Use Case 2 
**As a user, I want to be able to log into an account to view my my progress and tasks.**
```mermaid
sequenceDiagram
title Signing In
    actor User
    participant HomePage
    participant LoginPage
    participant APIMiddleware

    User->>+LoginPage: User navigates to the login page and submits their credentials
    LoginPage->>APIMiddleware: POST (HTTP) username, password
    APIMiddleware-->>LoginPage: HTTP 200 Content-Type: JSON[] refresh token, access token
    LoginPage->>LoginPage: Set Auth. Tokens in Local Storage
    LoginPage->>LoginPage: Set User State in application
    LoginPage->>-User: User is logged in
    User->>HomePage: User is redirected to the home page and has access to the applications
```

    1. The user accesses the site by going to 'studybuddy.life'. 
    2. The user selects the 'Login' button to access the sign-in page.
    3. The user enters their email address and password.
    4. If the credentials are valid, The user is redirected to the home page where they can see their pet and their tasks. If not, the user will be notified that the credentials are invalid. 

## Use Case 3
**As a user, I want to keep my pet happy and help it grow by completing tasks and receiving candies.**
```mermaid
sequenceDiagram
title Feeding the Pet
    actor User
    participant Main
    participant PageDisplay
    participant PetProfPage
    participant InventoryPage
    participant Inventory
    participant PetDisplay
    participant PetSprite
    participant ProgressBar
    participant APIMiddleware

    %%set up pet display 
    activate Main
    Main ->>+ PetDisplay: fetchData
    activate PetDisplay
    PetDisplay ->> APIMiddleware: GET (HTTP) avatarInfo
    activate APIMiddleware
    APIMiddleware -->> PetDisplay: HTTP 200 Content-Type: JSON avatarInfo
    deactivate APIMiddleware
    Main ->> PetDisplay: render
    
    
    %% set up inventory page display
    User ->>InventoryPage: User navigates to the "Inventory Page"
    activate User
    Main ->> InventoryPage: fetchData
    activate InventoryPage
    InventoryPage ->> APIMiddleware: GET (HTTP) inventory
    activate APIMiddleware
    APIMiddleware -->> InventoryPage: HTTP 200 Content-Type: JSON[] inventory
    deactivate APIMiddleware
    Main ->> InventoryPage: render
    InventoryPage ->> Inventory: display candies in inventory
    activate Inventory

    %% click/hold
    User ->> Inventory: User clicks and holds a candy item to feed the avatar
    Inventory ->> Main: Update inventory and avatar information
    deactivate Inventory
    Main ->> APIMiddleware: PUT (HTTP) avatarInfo, inventory
    activate APIMiddleware
    APIMiddleware -->> Main: HTTP 200 success
    deactivate APIMiddleware
    
    Main ->> PetDisplay: render
    Main ->> InventoryPage: render
    PetDisplay ->> PetSprite: trigger eating animation
    activate PetSprite
    PetDisplay ->> ProgressBar: EXP in avatarInfo increases
    activate ProgressBar
    
    deactivate PetDisplay
    deactivate Main
    deactivate User
    deactivate PetSprite
    deactivate ProgressBar
    deactivate InventoryPage
```
    
    This sequence diagram displays the way in which the user can feed candies collected from completing tasks to their avatar by clicking and holding on candies
    from the Inventory Page.

    1. The user navigates to the inventory page.
    2. The user can see their collection of candies. Candy types are based on completion of tasks of different sizes and levels.
    3. The user clicks and holds a candy to feed their pet. As a result, the pet becomes visibly happy and it gains EXP.




## Use Case 4
**As a user, I want to import my Canvas assignments.**

```mermaid
sequenceDiagram
title Canvas Integration
    actor User
    participant App
    participant Main
    participant Header
    participant TaskPage
    participant DropDownMenu
    participant DropDownItem
    participant CanvasIntegrationPage
    participant APIMiddleware
    participant CanvasAPI
    
    %% User goes to Canvas Integration page + Submits token
    activate User
    activate App
    User ->> DropDownMenu: User clicks to open drop down options
    activate DropDownMenu 
    DropDownMenu ->> DropDownItem: handleClick to open page
    deactivate DropDownMenu 
    activate DropDownItem
    DropDownItem ->> CanvasIntegrationPage: routes to Canvas Integration
    deactivate DropDownItem
    activate CanvasIntegrationPage
    User ->> CanvasIntegrationPage: User reads the instructions, generates a token, and submits it
    CanvasIntegrationPage ->> APIMiddleware: PUT (HTTP) userInfo
    activate APIMiddleware
    APIMiddleware -->>CanvasIntegrationPage:  HTTP 200 Content-Type: JSON{} userInfo
    deactivate APIMiddleware
    CanvasIntegrationPage ->> Main: Redirect to Main
    activate Main
    deactivate CanvasIntegrationPage

    %% User clicks canvas button
    User ->> Header : Clicks Canvas fetch/update assignments button
    activate Header
    Header ->> APIMiddleware: GET (HTTP) /canvas/
    activate APIMiddleware
    APIMiddleware ->> CanvasAPI: Fetch courses and assignments from user's Canvas account
    activate CanvasAPI
    CanvasAPI -->> APIMiddleware: HTTP 200 - [] Canvas Assignments
    deactivate CanvasAPI
    APIMiddleware -->> Header : HTTP 200
    deactivate APIMiddleware 
    Header ->> App: Reload
    App ->> Main: render
    Main ->> TaskPage: render - new tasks loaded from Canvas
    activate CanvasAPI

    deactivate User
    deactivate CanvasAPI
    deactivate App
    deactivate Main
    deactivate Header
```

    This sequence diagrams shows how a user can link Canvas to their Virtual Pet Study Buddy. The user will navigate to the 
    CanvasIntegrationPage (after creating an account and profile). They will be provided instructions on how to retrieve and submit a Canvas token.
    After a successful token submission, the user's canvas assignments can be imported and updated. 
    
    1. The user navigates to the 'Canvas Integration' page.
    2. The user reads a set of instructions guiding them on how to import Canvas assignments using a token.
    3. The user copies and pastes their token into an input box and submits.
    4. Once the token is successfully saved, a button with the canvas logo will appear in the header for desktop and footer for mobile.
    5. The user can click the button to import their assignments for the first time, or update existing Canvas assignments.
    6. Once the assignments are imported, the user sees them listed on the task page.


## Use Case 5 - Task Creation
**As a user, I want to create my own tasks.**


```mermaid
sequenceDiagram
title Task Creation
    actor u as User
    participant PageDisplay
    participant TaskPage
    participant TaskList
    participant CreateTaskForm
    
    participant APIMiddleware
    PageDisplay ->> PageDisplay: fetchData
    PageDisplay ->> APIMiddleware: GET (HTTP) taskList
    APIMiddleware -->> PageDisplay: HTTP 200 Content-Type: JSON[] taskList
    PageDisplay ->> TaskPage: render
    TaskPage ->> TaskList: render
    u ->>+ CreateTaskForm: User selects the "Create Task" button and fills out form
    CreateTaskForm -->> CreateTaskForm: addTask()
    deactivate CreateTaskForm
    PageDisplay ->> APIMiddleware: CREATE (HTTP) task
    APIMiddleware -->> PageDisplay: HTTP 200 Content-Type: JSON[] taskList
    PageDisplay -->> PageDisplay: rerender components
    PageDisplay ->> TaskPage: render
    TaskPage ->> TaskList: render
```

    1. The user logs into their profile.
    2. The user selects the “Create Task” button on the task page.
    3. The user fills out the 'Create Task' form with information like a title, description, estimated time to complete a task, a due date, and tags for sorting.
    4. The user selects the 'Create' button. They can now see this task on the task page.

## Use Case 6
**As a user, I want my study app to help me organize and keep track of my tasks by allowing me to update and sort them.**

```mermaid
sequenceDiagram
    title Task Filtering 
    actor User as User
    participant PageDisplay
    participant TaskPage
    participant TaskList
    participant TaskItem
    participant APIMiddleware
    
    activate PageDisplay
    PageDisplay ->> PageDisplay: fetchData
    PageDisplay ->> APIMiddleware: GET (HTTP) taskList
    activate APIMiddleware
    APIMiddleware -->> PageDisplay: HTTP 200 Content-Type: JSON[] taskList
    deactivate APIMiddleware
    PageDisplay ->> TaskPage: render
    activate TaskPage
    TaskPage ->> TaskList: render
    activate TaskList
    TaskList ->> TaskItem: renders multiple
    activate TaskItem
    

    User->>TaskPage: User selects the filter button
    User->>TaskPage: User checks off the 'Canvas Assignments' box
    deactivate TaskItem
    TaskPage->>TaskList: renders Canvas assignments only
    TaskList ->> TaskItem: renders multiple Canvas assignments
    activate TaskItem

    User->>TaskPage: User selects the filter button
    User->>TaskPage: User unchecks the 'Canvas Assignments' box
    User->>TaskPage: User checks the 'My Tasks' box
    deactivate TaskItem
    TaskPage->>TaskList: renders user-made tasks only
    TaskList ->> TaskItem: renders multiple user-made tasks
    activate TaskItem

    deactivate PageDisplay
    deactivate TaskPage
    deactivate TaskList
    deactivate TaskItem
    
```

    1. The user logs into their profile. They want to view their Canvas courses and user-made tasks separately. 
    2. From the task page, the user selects the filter button next to the 'Create Task' button and sorts tasks by the 'Canvas Assignments' tag. The user can now see all their Canvas assignments.
    3. The user un-checks the 'Canvas Assignment' tag and checks the 'My Tasks' tag. They can now only see the tasks they've made.




## Use Case 7
**As a user, I want to help improve my pet's mood if I forget to complete a task.**
```mermaid
sequenceDiagram
title Improve Pet Mood
    actor u as User
    participant Main
    participant PetDisplay
    participant PetSprite
    participant PageDisplay
    participant TaskPage
    participant TaskList
    participant TaskItem
    participant TaskDetails
    participant APIMiddleware
    Main ->> Main: fetchData()
    Main ->> APIMiddleware: GET (HTTP) avatarInfo
    APIMiddleware -->> Main: HTTP 200 Content-Type: JSON avatarInfo
    Main ->> PetDisplay: render
    PetDisplay ->> PetSprite: render
    Main ->> PageDisplay: render

    
    PageDisplay ->> APIMiddleware: GET (HTTP) taskList
    APIMiddleware -->> PageDisplay: HTTP 200 Content-Type: JSON[] taskList

    u ->> Main: User has an assignment that is now past due
    Main ->> PetDisplay: setAvatarInfo()
    PetDisplay ->> PetSprite: render
    PetSprite ->> PetSprite: setSprite(upset)
    PetSprite ->> PetSprite: render
    Main ->> PageDisplay: render
    PageDisplay ->> TaskPage: render
    TaskPage ->> TaskList: render
    TaskList ->> TaskItem: render
    u ->>+ TaskItem: User selects a past due task 
    TaskItem ->>+ TaskDetails: renders
    deactivate TaskItem
    u ->>+ TaskDetails: User marks the late task as complete
    TaskDetails ->> TaskDetails: updateTask()  
    deactivate TaskDetails



    PageDisplay->>APIMiddleware: PUT (HTTP) task, inventory
    APIMiddleware-->>PageDisplay: HTTP 200 Content-Type: JSON[] taskList, JSON[] inventory
    PageDisplay -->> PageDisplay: rerender components
    Main ->> PetDisplay: render
    PetDisplay ->> PetSprite: render

    Main ->> PageDisplay: render
    
```
    1. The user has an overdue task. As a result, the pet is visibly upset.
    2. The user checks off the assignment as finished and receives a candy.
    3. The user feeds their pet as described in Use Case 3.
    4. The pet's mood improves and becomes visibly happy.


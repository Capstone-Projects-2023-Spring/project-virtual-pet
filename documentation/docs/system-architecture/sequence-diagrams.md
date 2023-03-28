---
sidebar_position: 4
---

# Sequence Diagrams

## Use Case 1

**As a user, it is important that I can create an account so that I can maintain my pet’s growth and my task progress.**

```mermaid
sequenceDiagram
title Tracking Task Progress
### As a user, it is important that I can create an account so that I can maintain my pet’s growth and my task progress.

    actor u as User
    participant a as App
    participant pf as ProfileCreationView
    participant ps as PetSelectionView
    participant pc as PetSelectionCard
    participant mp as Main
    participant cv as CanvasIntegrationTab
    participant api as APIMiddleware

    u ->>+a: navigate to url ://
    a ->>+pf: render(): route to profile creation page
    pf ->> api: PUT (HTTP) Content-Type: JSON userObject
    api --> pf: HTTP 200
    pf -->-a: return profile created
    a ->>+ps: render(): route to pet selection page
    ps ->>+pc: render(): generate pet selection cards and present to user
    u ->> pc: select pet
    pc ->> api: PUT (HTTP) Content-Type: JSON {userid:petObject{}}
    api --> pc: HTTP 200
    pc -->-ps: return confirmed creation
    ps -->-a: return confirmed creation
    a ->>+ mp: render()
    mp ->> api: GET (HTTP) initialization routine for main page
    api --> mp: HTTP 200 Content-Type: JSON[] user total contents 
    mp ->>+cv: render(): canvas integration tab "on no tasks, canvas integration tab is the default"

    deactivate mp
    deactivate cv
    deactivate a

```

    1. Upon accessing the web application for the first time, the user is given the option to create an account.
    2. The user inputs their email address and creates a password to create their account.
    3. After creating the account, the user sees a page allowing them to choose a pet out of a selection of avatars.
    4. The user selects a pet.
    5. The site automatically navigates to the Canvas Integration tab.
    6. The user chooses whether to integrate with their Canvas account.
    7. The user now has access to creating tasks and growing their pet.
    
## Use Case 2 
**As a user, I want to be able to log into an account so that my progress and tasks will be saved.**
```mermaid
sequenceDiagram
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

    1. The system requests the user to log in or create an account.
    2. The user enters their email address and password.
    3. The system validates the user’s credentials and grants access to the application.


## Use Case 3
**As a user, I want to link Canvas to my Virtual Pet.**

```mermaid
sequenceDiagram
    actor User
    participant App
    participant Main
    participant Header
    participant DropDownMenu
    participant DropDownItem
    participant CanvasIntegrationPage
    participant CanvasAPI

    activate User
    User ->> DropDownMenu: User clicks to open drop down options
    activate DropDownMenu 
    DropDownMenu ->> DropDownItem: handleClick to open page
    activate DropDownItem
    DropDownItem ->> CanvasIntegrationPage: routes to Canvas Integration
    activate CanvasIntegrationPage
    CanvasIntegrationPage ->> User: Prompt user to sign on through SSO 
    User ->> CanvasIntegrationPage: User signs in externally and it is accepted
    CanvasIntegrationPage ->> CanvasAPI: fetch courses and assignments from user's Canvas account
    activate CanvasAPI
    CanvasIntegrationPage ->> App: update userInfo
    activate App


    deactivate User
    deactivate DropDownMenu 
    deactivate DropDownItem
    deactivate CanvasIntegrationPage
    deactivate CanvasAPI
    deactivate App
```

    This sequence diagrams shows how a user can link Canvas to their Virtual Pet Study Buddy. The user will navigate to the 
    CanvasIntegrationPage (after creating an account and profile). They will be prompted to sign in with SSO authentication. 
    After a successful sign-in, the user's data will be updated such that their assignments and courses will be imported into their account.

    1. The user creates an account and profile as described in Use Case 1.
    2. The user navigates to the Canvas Integration section of the site.
    3. The user signs on through SSO.
    4. Courses as assignment data are imported into the user's info.

## Use Case 4
**As a user, I want to quickly monitor my progress by assessing the mood of my avatar.**
```mermaid
sequenceDiagram
title Check Progress Via Pet Mood
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
   
    u ->> Main: User has an assignment due in in 24 hours
    Main ->> PetDisplay: setAvatarInfo()
    PetDisplay ->> PetSprite: render
    PetSprite ->> PetSprite: setSprite(hungry)
    PetSprite ->> PetSprite: render
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

    1. User has set up Canvas integration and has neglected an assignment.
    2. As the assignment gets closer, the avatar becomes visibly hungry in a comically over-the-top-fashion.
    3. When the due date for the assignment passes, the avatar becomes visibly upset.
    4. Experience and rewards gained in the application now have a multiplier that is less than one.
    5. The user can now retroactively complete the assignment and the multiplier will be returned to the previous state.
    6. This will be reflected in the avatar's apparent mood.
    
## Use Case 5
**As a user, I want to be able to track my pet’s growth and my progress towards reaching my study goals.**

```mermaid
sequenceDiagram
title Tracking Task Progress
    actor u as User
    participant Main
    participant PageDisplay
    participant PetProfPage
    participant PPTaskList
    participant PPTaskItem
    participant PPTaskDetails
    participant APIMiddleware
    Main ->> Main: fetchData()
    Main ->> APIMiddleware: GET (HTTP) avatarInfo
    APIMiddleware -->> Main: HTTP 200 Content-Type: JSON avatarInfo
    Main ->> PageDisplay: render
    PageDisplay ->> PageDisplay: fetchData
    PageDisplay ->> APIMiddleware: GET (HTTP) taskList
    APIMiddleware -->> PageDisplay: HTTP 200 Content-Type: JSON[] taskList
    u ->>+PetProfPage: User selects 'Pet Profile' page
    PetProfPage ->>PPTaskList: render
    PPTaskList ->>PPTaskItem: render
    u ->>+ PPTaskItem: User selects a specific task under pet profile
    PPTaskItem ->> PPTaskDetails: render
    deactivate PetProfPage
    deactivate PPTaskItem
```
    This sequence diagram displays the way in which the user can use the Pet Profile page to see more information about their progress, as shown in Use Case 7. By
    selecting a task under the pet profile page, they can see their current progress towards completing it, as well as the time remaining before the deadline 
    (whether it   be a self-set deadline, or one imposed by Canvas).
    1. The avatar information is retrieved through an API call.
    2. The page display component is rendered.
    3. The list of tasks is retrieved through an API call.
    4. The user selects 'Pet Profile' page, and selects a specific task to see more information.
    5. The pet profile page renders the task list, task item, and task details components.
    
   

## Use Case 6
**As a user, I want to use the resources I've collected in the application to progress my avatar.**
```mermaid
sequenceDiagram
title Feeding Candies to Progress
    actor User
    participant Main
    participant PageDisplay
    participant PetProfPage
    participant InventoryPage
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
    Main ->> PetDisplay: render

    activate User
    User ->>InventoryPage: User navigates to the "Inventory Page"

    %% set up inventory page display
    Main ->> InventoryPage: fetchData
    activate InventoryPage
    InventoryPage ->> APIMiddleware: GET (HTTP) inventory
    APIMiddleware -->> InventoryPage: HTTP 200 Content-Type: JSON[] inventory
    Main ->> Inventory: render
    InventoryPage ->> Inventory: display candies in inventory
    
    %% pick up candies
    User ->> InventoryPage: User picks up candy from inventory
    InventoryPage ->> APIMiddleware: PUT (HTTP) inventory 
    APIMiddleware -->> InventoryPage: HTTP 200 success
    Inventory ->> Inventory: Update inventory to remove candy
    Main ->> InventoryPage: render

    %% drag/drop
    User ->> PetSprite: User drags and drops candy on avatar
    activate PetSprite
    Main ->> PetDisplay: render
    PetSprite ->> PetDisplay: trigger eating animation
    PetDisplay ->> ProgressBar: EXP in avatarInfo increases
    PetDisplay ->> APIMiddleware: PUT (HTTP) avatarInfo
    APIMiddleware -->> PetDisplay: HTTP 200 success
    deactivate PetDisplay
    Main ->> ProgressBar: render/update

    deactivate Main
    deactivate User
    deactivate APIMiddleware
    deactivate InventoryPage
    deactivate PetSprite
```
    
    This sequence diagram displays the way in which the user can feed candies collected from completing tasks to their avatar by dragging and dropping candies
    from the Inventory Page to their avatar which is shown in the Pet Display. 
    1. The user navigates to the InventoryPage in the PageDisplay portion of the screen on the right. The inventory data is fetched through an API call.
    2. The user views a set of acquired rewards on the InventoryPage in the form of ‘candies’ which are contained as Items in an ItemGrid in the Inventory.
    3. The user drags a 'candy' to the avatar, and the Inventory is updated to reflect the removal of a candy. An API call updates the inventory list.
    4. The user drops the 'candy' onto their avatar on the lefthand side of the screen, and it shows an eating animation and a satisfied animation.
    5. The avatarInfo is updated which contains the EXP data, which causes the progress bar to update, increasing when the ‘candy’ is consumed.

## Use Case 7
**As a user, I want to have my study app stay up to date on my progress towards my study goals.**

```mermaid
sequenceDiagram
    title Updating Task Progress
    actor User as User
    participant PageDisplay
    participant TaskPage
    participant TaskList
    participant TaskItem
    participant TaskDetails
    participant APIMiddleware
    
    PageDisplay ->> PageDisplay: fetchData
    PageDisplay ->> APIMiddleware: GET (HTTP) taskList
    APIMiddleware -->> PageDisplay: HTTP 200 Content-Type: JSON[] taskList
    PageDisplay ->> TaskPage: render
    TaskPage ->> TaskList: render

    User->>TaskItem: User selects a task to view details
    TaskItem->>TaskDetails: render

    User ->>+ TaskDetails: User marks task as completed
    TaskDetails ->> TaskDetails: updateTask()
    deactivate TaskDetails

    PageDisplay ->> APIMiddleware: UPDATE (HTTP) task, inventory
    APIMiddleware-->>+PageDisplay: HTTP 200 Content-Type: JSON[] taskList, JSON[] inventory
    PageDisplay-->>PageDisplay: rerender
    
    PageDisplay->>TaskPage: render
    TaskPage->>TaskList: render
    TaskList->>TaskItem: render
    
```

    1. The user logs into their profile.
    2. The task list is retrieved with a GET call to the API.
    3. From the homepage, the user can select a specific task to see more information, including due date and a description.
    4. After completing a task, the user’s pet will receive EXP in the form of candy towards its next level.
    

## Use Case 8
**As a user, I want to create a schedule and be encouraged by my Virtual Pet to adhere to the schedule.**


```mermaid
sequenceDiagram
title Creating a Goal
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
    2. User navigates to the “Create Task” tab.
    3. User fills out a form with types of milestones and calendar information regarding due dates. These can be explicit calendar 
       entries based on a particular date, or recur on a regular time interval.
    4. The backend for the site builds a set of events for the avatar based on these milestones.

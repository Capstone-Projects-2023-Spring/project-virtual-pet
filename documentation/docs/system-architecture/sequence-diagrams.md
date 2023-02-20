---
sidebar_position: 4
---

# Sequence Diagrams

## Use Case 1
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
    InventoryPage ->> APIMiddleware: POST (HTTP) inventory 
    APIMiddleware -->> InventoryPage: HTTP 200 success
    Inventory ->> Inventory: Update inventory to remove candy
    Main ->> InventoryPage: render

    %% drag/drop
    User ->> PetSprite: User drags and drops candy on avatar
    activate PetSprite
    Main ->> PetDisplay: render
    PetSprite ->> PetDisplay: trigger eating animation
    PetDisplay ->> ProgressBar: EXP in avatarInfo increases
    PetDisplay ->> APIMiddleware: POST (HTTP) avatarInfo
    APIMiddleware -->> PetDisplay: HTTP 200 success
    deactivate PetDisplay
    Main ->> ProgressBar: render/update

    deactivate Main
    deactivate User
    deactivate APIMiddleware
    deactivate InventoryPage
    deactivate PetSprite
```
    
This sequence diagram displays the way in which the user can feed candies collected from completing tasks to their avatar by dragging and dropping candies from the Inventory Page to their avatar which is shown in the Pet Display. 
1. The user navigates to the InventoryPage in the PageDisplay portion of the screen on the right. The inventory data is fetched through an API call.
2. The user views a set of acquired rewards on the InventoryPage in the form of ‘candies’ which are contained as Items in an ItemGrid in the Inventory.
3. The user drags a 'candy' to the avatar, and the Inventory is updated to reflect the removal of a candy. An API call updates the inventory list.
3. The user drops the 'candy' onto their avatar on the lefthand side of the screen, and it shows an eating animation and a satisfied animation.
4. The avatarInfo is updated which contains the EXP data, which causes the progress bar to update, increasing when the ‘candy’ is consumed.

## Use Case 2

## Use Case 3

## Use Case 4

## Use Case 5
### As a user, I want to have my study app stay up to date on my progress towards my study goals.
<details>
  <summary>Use Case 1 Description</summary>
  <div>
    <div>

1. The user logs into their profile. ([See Use Case 7](#use-case-7))
2. The task list is retrieved with a GET call to the API.
2. From the homepage, the user can select a specific task to see more information.
3. After selecting a task, the user may update their progress by indicating they are halfway through, a quarter of the way through, etc.
4. The task list is updated with a PUT call to the API.
4. After progressing further towards completing a task, the user’s pet will receive EXP in the form of candy towards its next level.

    </div>
  </div>
</details>

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
    
    User->>+TaskItem: User selects a task to view details
    TaskItem->>TaskDetails: render
    User->>TaskDetails: User updates progress by indicating they're half-way through
    TaskDetails->>TaskDetails: updateTask()
    %% Note over TaskDetails 
    PageDisplay->>APIMiddleware: PUT (HTTP) task, inventory
    APIMiddleware-->>PageDisplay: HTTP 200 Content-Type: JSON[] taskList, JSON[] inventory
    PageDisplay-->>PageDisplay: rerender
    PageDisplay->>TaskPage: render
    TaskPage->>TaskList: render
    TaskList->>TaskItem: render
    deactivate TaskItem
```

## Use Case 6
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
This sequence diagram displays the way in which the user can use the Pet Profile page to see more information about their progress, as shown in Use Case 6. By selecting a task under the pet profile page, they can see their current progress towards completing it, as well as the time remaining before the deadline (whether it be a self-set deadline, or one imposed by Canvas).
1. The avatar information is retrieved through an API call.
2. The page display component is rendered.
3. The list of tasks is retrieved through an API call.
4. The user selects 'Pet Profile' page, and selects a specific task to see more information.
5. The pet profile page renders the task list, task item, and task details components.

## Use Case 7: As a user, I want to be able to log into an account so that my progress and tasks will be saved.
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

## Use Case 8

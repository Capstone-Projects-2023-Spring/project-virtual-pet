---
sidebar_position: 4
---

# Sequence Diagrams

## Use Case 1

## Use Case 2

## Use Case 3

## Use Case 4

## Use Case 5
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
    PageDisplay->>APIMiddleware: UPDATE (HTTP) task, inventory
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

## Use Case 7

## Use Case 8

```mermaid

sequenceDiagram

title Tracking Task Progress

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
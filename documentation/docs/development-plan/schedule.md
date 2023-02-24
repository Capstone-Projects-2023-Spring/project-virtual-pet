---
sidebar_position: 3
---

# Schedule

## Gantt Chart

```mermaid
gantt
    title StudyBuddy Schedule Gantt Chart
    todayMarker stroke-width:10px,stroke:#0f0,opacity:0.4
    dateFormat  YYYY-MM-DD
        section Sprint 0
        Software Dev.: , 2023-02-08, 6d
        section Sprint 0
        Sprint 0 Planning Meeting: active, 2023-02-10, 1d
        section Sprint 0
        Brainstorm Progression System: , 2023-02-10, 1d
        section Sprint 0
        Complete Software Development Plan: , 2023-02-11, 1d
        section Sprint 0
        Revise Requirements Document: , 2023-02-11, 1d
        section Sprint 0
        Submit Software Development Plan Assignment: milestone, 2023-02-12, 1d

        section Sprint 1
        Design Doc & Research: , 2023-02-15, 2w
        section Sprint 1
        Sprint 1 Planning Meeting: active, 2023-02-15, 1d
        section Sprint 1
        Research/learn React, Django:  , 2023-02-16, 1d
        section Sprint 1
        Set up development testing environment on local host:  , 2023-02-16, 1d
        section Sprint 1
        Create user account management system:  , 2023-02-16, 1d
        section Sprint 1
        Decide on pet art style:  , 2023-02-16, 1d
        section Sprint 1
        Create pet art:  , 2023-02-16, 1d
        section Sprint 1
        Complete Design Document Part 1:  , 2023-02-18, 1d
        section Sprint 1
        Submit Design Document Part 1 (Architecture) Assignment: milestone, , 2023-02-19, 1d
        section Sprint 1
        Complete Design Document Part 2:  , 2023-02-23, 1d
        section Sprint 1
        Submit Design Document Part 2 (API) Assignment: milestone, , 2023-02-26, 1d

        
        section Sprint 2
        Testing Doc & First Demo: , 2023-03-01, 2w
        section Sprint 2
        Sprint Planning Meeting: active, 2023-03-01, 1d
        section Sprint 2
        Create API : , 2023-03-02, 1d
        section Sprint 2
        Deliver first pet design: , 2023-03-02, 1d
        section Sprint 2
        Create settings dropdown: , 2023-03-02, 1d
        section Sprint 2
        Create pet display : , 2023-03-02, 1d
        section Sprint 2
        Create account information page : , 2023-03-02, 1d
        section Sprint 2
        Complete Test Procedures Document: , 2023-03-04, 1d
        section Sprint 2
        Submit Test Procedures Document Assignment: milestone, , 2023-03-05, 1d
        section Sprint 2
        Milestone Demo 1 :crit, milestone,  , 2023-03-14, 1d

        section Sprint 3
        Goals/Tasks/Reminders: , 2023-03-15, 2w
        section Sprint 3
        Sprint Planning Meeting: active , 2023-03-15, 1d
        section Sprint 3
        Stand Up Meeting Lecture: active , 2023-03-22, 1d
        section Sprint 3
        Create the task page: , 2023-03-22, 1d
        section Sprint 3
        Create the calendar page: , 2023-03-22, 1d
        section Sprint 3
        Set up Canvas integration: , 2023-03-22, 1d
        section Sprint 3
         Milestone Demo 2 :crit, milestone,  , 2023-03-28, 1d

        
        section Sprint 4
        Graphics/Interactivity: , 2023-03-29, 2w
        section Sprint 4
        Sprint Planning Meeting: active , 2023-03-29, 1d
        section Sprint 4
        Stand Up Meeting Lecture: active , 2023-04-05, 1d
        section Sprint 4
        Make the pet reactive + Multiple frames for each tier: , 2023-04-07, 1d
        section Sprint 4
        Create inventory page: , 2023-04-07, 1d
        section Sprint 4
        Implement progression system graphically: , 2023-04-07, 1d
        section Sprint 4
        Milestone Demo 3 :crit, milestone,  , 2023-04-11, 1d

        section Sprint 5
        Final Demo: , 2023-04-12, 16d
        section Sprint 5
        Sprint Planning Meeting: active , 2023-04-12, 1d
        section Sprint 5
        Stand Up Meeting Lecture: active , 2023-04-19, 1d
        section Sprint 5
        Host site on public host: , 2023-04-22, 1d
        section Sprint 5
        Add more states to pet(s): , 2023-04-22, 1d
        section Sprint 5
        Add pet profile page: , 2023-04-22, 1d
        section Sprint 5
        Create task/assignment reminders:, 2023-04-22, 1d
        section Sprint 5
        Final Presentation & Demo :crit, milestone,  , 2023-04-27, 1d
        section Sprint 5
        Submit Test Report Document Assignment: milestone, , 2023-05-06, 1d
        section Sprint 5
        Submit Final Software Release Assignment: milestone, , 2023-05-07, 1d
```
## Milestone Demo Features

### Milestone Demo 1 [Account Creation & Pet Selection]
F: User can create/log in to account

R: User can enter credentials

R: Credentials are authenticated via JWT token

R: First-time user will be sent a verification email

F: User can choose between two pets

R: Select between two different cats (color palette)

R: Name their pet

F: User can view main page with static image of pet

R: Users can see a still image of their pet at all times.

F: User can link with Canvas

R: Users will be redirected to a sign on page to connect to their Canvas account.

R: Users can see a list of their courses.

F: User can view tasks

R: View list of tasks.

R: Sort tasks by date.	


### Milestone Demo 2 [Progression Logic & Calendar Display]
F: User can create Canvas-independent tasks

R: Fill out a task form

R: Save the task form

F: User can import tasks from Canvas

R: Tasks/assignments from the user's courses will be imported as tasks.

F: User can navigate to progress page [formerly pet profile page]

R: View their profile.

R: Profile page allows users to view their progress on specific tasks

F: User can complete and organize tasks

R: Completion of tasks influences pet progress

F: Canvas assignments are imported as tasks

R: Tasks will have a name, course with which it is associated, and a description!

R: Users can import tasks multiple times.

F: User can use calendar feature

R: A calendar to show which days a task is due.

F: User can choose between more pets

R: More than one breed of cat.

### Milestone Demo 3 [Pet Interaction & Visually Representing Progression]
F: Make the pet reactive; its mood will visually change

R: User’s progress and task completion will result in mood changes!

R: Pets will be animated.

F: Create the inventory page

R: User can view the inventory earned from completing tasks!

R: User can remove candy and place it on their pet (feed it), influencing their 

pet’s progress

R: Inventory includes different sizes of candies and a rare candy

F: User can interact with their pet (feed candies)

R: More expansive animations

R: User can give candy to their pet, affecting its mood and level

F: Implement progression system visually

R: See your pet progress toward the next level with a progress bar

R: See your progress towards completion of specific tasks in the Progress page

### Final Demo
F: Add more detailed animations for pet states.

R: Pet is asleep after a certain time.

R: Pet has more options for pets/pet colors.

F: Add more customization to pet

R: Create more items for users to give to their pets

F: Create task reminders/notifications

R: Users receive pop-up notifications when a task’s deadline is near

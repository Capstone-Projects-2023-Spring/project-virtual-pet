---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements

* Users must make an account to use the Virtual Pet Study Buddy application.
    * A verification email will be sent when Users register for the first time.
* Users will be authenticated when logging in to the system.
* Users can link their Canvas account to the application and import assignments.
* Users can simultaneously manage imported tasks from Canvas and goals and tasks created natively.
    * “Managing” includes the ability to add and delete tasks as well as update the status of progression or mark as complete.
    * Some tasks imported from Canvas will be updated automatically after the user submits an assignment or it is graded. The user can always override this manually.
* Users can keep track of how their pet is doing by monitoring its mood, hunger and growth.
* Users' completion status of tasks will impact their pet's mood and appearance accordingly.
* Users can opt in for reminders to finish tasks and deadlines.

## Nonfunctional Requirements

* Users can choose between different types of pets
    * When the User logs in for the first time they will have to choose a Virtual Pet to care for from a variety of avatar options
* Virtual Pet Study Buddy will securely access Users’ Canvas information
    * The Canvas API relies on OAuth2 to authenticate and authorize third-party applications
* Application must be able to support at least twenty concurrent Users
    * The use of a cloud service provider will allow Virtual Pet Study Buddy to scale on demand 
* The application will be accessible from a variety of platforms and screen sizes
* Virtual Pet Study Buddy will provide an aesthetically pleasing and intuitive User experience
* The progression system will reward users for completing tasks more than punishing them for missing tasks to keep them engaged and emphasize personal development


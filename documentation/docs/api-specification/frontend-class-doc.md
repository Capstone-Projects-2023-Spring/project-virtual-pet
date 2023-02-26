---
sidebar_position: 1
description: What should be in this section.
---

Design Document - Part II API (NOT COMPLETE)
=============================



## Component Hierarchy / Directory 

- [App](#app)
	- [Header](#header)
	- [Main](#main)
		- [PetDisplay](#petdisplay)
			- [PetSprite](#petsprite)
			- [PetDescription](#petdescription)
			- [ProgressBar](#progressbar)
		- [PageDisplay](#pagedisplay)
			- [NavBar](#navbar)
				- [NavButton](#navbutton)
			- [TaskPage](#taskpage)
				- [TaskList](#tasklist)
					- [TaskItem](#taskitem)
						- [TaskDetails](#taskdetails)
				- [CreateTaskForm](#createtaskform)
			- [InventoryPage](#inventorypage)
				- [ItemGrid](#itemgrid)
					- [Item](#item)
			- [CalendarPage](#calendarpage)
				- [Calendar](#calendar)
			- [PetProfPage](#petprofpage)
				- [PPTaskList](#pptasklist)
					- [PPTaskItem](#pptaskitem)
						- [PPTaskDetails](#pptaskdetails)




## App
- The root component encompassing all other components.
### Data fields
- #### Object userInfo
    - An object with fields describing the user's information like their username, first name, last name email, last login, etc.

### Methods
- #### setUserInfo(userObject)
    - Changes the userInfo object and rerenders components to reflect changes.
    - Arguments:
        - userObject: the object that will be the new state of userInfo.
    - Return none
- #### fetchData()
    - Makes requests to the backend to fetch the user's information and change the state of userInfo with setUserInfo().
    - Return none



## Header
- (add description here)
### Data fields
- #### str title
    - (add description here)
- #### Object userInfo
    - [click here](#object-userinfo)
    
- ### Methods
- No Methods


## DropDownMenu
    - This component allows users to access the various pages attached to the drop down menu, including integrating with Canvas and account settings.
### Data fields
- #### Array pages
    - An array that encompasses all of the pages that exist in the drop down menu.
- #### Object userInfo
    - [click here](#object-userinfo)

### Methods
- #### handleClick()
    - Method that manages the click action to allow users to access the correct component.
    - Return none

## DropDownItem

### Data fields
- #### str title
    - String that includes the name of a specific drop down item.
- #### Object userInfo
    - [click here](#object-userinfo)
    
### Methods
- #### handleClick()
    - [click here](#handleClick())
- #### logOut()
    - Carries out the functionality of logging out of the system, making a call to the backend to save and store the user's data in the database for future use.




## CanvasIntegrationPage
- Component that, upon selection, allows users to integrate their Canvas account.

### Data fields
- #### Object userInfo
    - [click here](#object-userinfo)

### Methods
- #### redirectTo()
    - Handles the functionality to redirect the user to the Canvas site.
    - Return none?





## AccountSettingsPage
- Component that grants access to the user's account settings

### Data fields
- #### Object userInfo
    - [click here](#object-userinfo)

### Methods
- #### changeEmail()
    - Allows user to change the email address associated with their account, making a call to the backend to update.
    - Return string (verification)
- #### changeUsername()
    - Allows user to change the username associated with their account, making a call to the backend to update.
    - Return string (verification)
- #### changePassword()
    - Allows user to change their password, making a call to the backend to update.
    - Return none
- #### deleteAccount()
    - Allows user to delete their account and erase all their data, making a call to the backend to update.
    - Return string (verification message)



## Main
- The component displaying everything below the header. It's made up of the PetDisplay and PageDisplay component. 
### Data fields
- #### Object avatarInfo
    - An object with fields describing the user's pet like it's name, type, totalXP, last time the user interacted with/fed it. 
- #### Array inventory
    - An array of the items the user owns. Primarily consumables for the pet to level up.

### Methods
- #### setAvatarInfo(avatarObject)
    - Changes the avatarInfo object and rerenders components to reflect changes.
    - Arguments:
        - avatarObject: the object that will be the new state of avatarInfo.
    - Return none
- #### setInventory(inventoryList)
    -  Changes the inventory array and rerenders components to reflect changes.
    - Arguments:
        - inventoryList: the object that will be the new state of inventory.
    - Return none
- #### fetchData()
    - Makes requests to the backend to fetch inventory and avatarInfo information and change the state of avatarInfo and inventory with setAvatarInfo() and setInventory().
    - Return none




## PetDisplay
- The PetDisplay component is fixed to the left side of the screen and it displays the user's pet sprite, EXP level, name, etc.
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
- #### Array inventory
    - [click here](#array-inventory)

### Methods
- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)



## PetSprite
- The PetSprite component is primarily responsible for the avatar animations. It shows the user's pet as a pixel sprite and it can be 'fed' when the user drags items to it. 
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
- #### Array inventory
    - [click here](#array-inventory)
- #### Object sprite
    - An object with fields specifying which frames of the sprite sheet are being used to animate the pet/avatar. It will be used to visually depict the pet.

### Methods
- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)
- #### setSprite(spriteObject)
    - Changes the sprite object and rerenders components to reflect changes.
    - Arguments:
        - spriteObject: the object that will be the new state of the sprite object.
    - Return none   

- #### handleItemRelease(inventoryID)
    - Handles the event of the user dragging and dropping an item (candy) to their pet. The inventory updates (less item(s)), The pet's EXP increases, and the sprite animation changes.


## PetDescription
- The PetDescription displays information about the pet, including their current mood, age, and weight.
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
### Methods
- No Methods




## ProgressBar
- The ProgressBar displays the pet’s progress (experience points/EXP) to the next level.
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
### Methods
- No Methods







## PageDisplay
- Component that includes all of the various pages/tabs that the user can access in order to track their tasks and progress.
### Data fields
- #### Array taskList
    - An array of the user's tasks and tasks imported from Canvas (if integrated).
- #### int pageView
    - A number representing the page/componenet the user has selected.
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
- #### Array inventory
    - [click here](#array-inventory)

### Methods
- #### setTaskList(taskListObj)
    - Changes the taskList state and rerenders the page to display the user's updated/changed list of tasks. 
    - Arguments:
        - taskListObj: the new state of taskList.
    - Return none   

- #### setPageView(pageNum)
    - Changes the pageView state and rerenders the current page to be the TaskPage, InventoryPage, CalendarPage, or PetProfPage depending on the argument.
    - Arguments:
        - pageNum: the new state of pageView. Range: [0-3].
    - Return none  

- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)

- #### fetchData()
    - Makes requests to the backend to fetch the user's task information and sets the state of taskList using setTaskList().
    - Return none  

## NavBar
- Component that manages the navigation bar to allow the user to switch between components
### Data fields
- #### int pageView
    - [click here](#int-pageview)
### Methods
- setPageView()
    - [click here](#setpageviewpagenum)




## NavButton
- Component that handles each individual selection option in the navigation bar
### Data fields
- #### int pageView
    - [click here](#int-pageview)
### Methods
- setPageView()
    - [click here](#setpageviewpagenum)

- #### handleClick()
    - Handles user's clicks on NavButton component and calls setPageView() to change the page/component rendered. 





## TaskPage
- Component that displays all of the user's to-do tasks in a list format.
### Data fields
- #### Array taskList
    - [click here](#array-tasklist)
### Methods

- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)
- #### setTaskList(taskListObj)
    - [click here](#settasklisttasklistobj)





## TaskList
- The TaskList component displays the user's tasks.

### Data fields
- #### Array taskList
    - [click here](#array-tasklist)
### Methods
- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)
- #### setTaskList(taskListObj)
    - [click here](#settasklisttasklistobj)
- #### removeTask(taskID)
    - Removes a task using setTaskList() and makes a request to the backend to update the user's tasks. 
- #### updateTask(taskID)
    - Updates the task information using setTaskList() and makes a request to the backend to update the user's tasks. 





## TaskItem
- Component that displays the information about a specific task.
### Data fields
- #### Object taskItem
    - An object with fields describing a task like the due date, description, recurring info, how much is completed, etc.
### Methods
- #### handleClick()
    - Displays TaskDetails component with more details about the task.
- #### removeTask(taskID)
    - [click here](#removetasktaskid) 
- #### updateTask(taskID)
    - [click here](#updatetasktaskid) 





## TaskDetails
- Handles the information about a specific task, like deadline, description, etc.
### Data fields
- #### Object taskItem
    - [click here](#object-taskitem) 

### Methods
- #### removeTask(taskID)
    - [click here](#removetasktaskid) 
- #### updateTask(taskID)
    - [click here](#updatetasktaskid) 











## CreateTaskForm
- Component that allows the user to create a new task and add details to the task.
### Data fields
- No Data Fields
### Methods
- #### setTaskList(taskListObj)
    - [click here](#settasklisttasklistobj)
- #### addTask()
    - Creates a new task, updates the task list using setTaskList, and makes a request to the backend to update the user's tasks. 




## InventoryPage
- Handles displaying the contents of the user's inventory.
### Data fields
- #### Array inventory
    - [click here](#array-inventory)

### Methods
- No Methods






## ItemGrid
- Displays all of the items in the user's inventory in a grid format.
### Data fields
- #### Array inventory
    - [click here](#array-inventory)

### Methods
- No Methods











## Item
- Displays each item with a pixel image to depict it.
### Data fields
- #### Object inventoryItem
    - An object with fields describing an inventory item like its base type, level, and quantity. 
### Methods
- #### handleClick()
    - Handles clicks on item components and allows user to drag the item around.  



## CalendarPage
- The CalendarPage component allows the user to view their tasks in a calendar format.
### Data fields
- #### Array taskList
    - [click here](#array-tasklist)
### Methods
- No Data Fields





## Calendar
- Component which handles the functionality of the calendar and all of the tasks that fall on certain dates.
### Data fields
- #### Date currentDate
    - Date object representing the current date. 
- #### Array taskList
    - [click here](#array-tasklist)
### Methods
- #### displayTasks(dateSelect)
    - Displays the tasks due given a Date object.
    - Arguments:
        - dateSelect: A Date object representing the day the user selects on the calendar.
    - Returns:
        - A filtered list of tasks due on the specified date.


## ProgressPage
- Handles the display of the user's progress towards completion of tasks.
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
- #### Array taskList
    - [click here](#array-tasklist)
### Methods
- No Methods











## PPTaskList
### Data fields
- #### Array taskList
    - [click here](#array-tasklist)
### Methods
- No Methods




## PPTaskItem
### Data fields
- #### Object ppTaskItem
    - An object with fields describing a task and how much of it is completed.
### Methods
- #### handleClick()
    - Handles user's clicks on the component and renders a PPTaskDetails component to show more details.



## PPTaskDetails
### Data fields
- #### Object pptaskItem
    - [click here](#object-pptaskitem)

### Methods










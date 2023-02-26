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
### Data fields
- Object userInfo

### Methods
- No Methods



## Header
### Data fields
- str title
- Object userInfo
### Methods
- No Methods


## DropDownMenu
### Data fields
- Array pages
- Object userInfo

### Methods
- handleClick()


## DropDownItem

### Data fields
- str title
- Object userInfo
### Methods
- handleClick()
- logOut()


## CanvasIntegrationPage
### Data fields
- Object userInfo
### Methods
- redirectTo()



## AccountSettingsPage
### Data fields
+ Object userInfo
### Methods
- changeEmail()
- changeUsername()
- changePassword()
- deleteAccount()



## Main
### Data fields
- #### Object avatarInfo
    - An object with fields describing the user's pet like it's name, type, totalXP, last time the user interacted with/fed it. 
- #### Array inventory
    - An array of the items the user owns 

### Methods
- #### setAvatarInfo(avatarObject)
    - Changes the avatarInfo object and rerenders components to reflect changes.
    - Arguments:
        - avatarObject: the object that will be the new state of avatarInfo
    - Return none
- #### setInventory(inventoryList)
    -  Changes the inventory array and rerenders components to reflect changes
    - Arguments:
        - inventoryList: the object that will be the new state of inventory
    - Return none
- #### fetchData()
    - Makes requests to the backend to fetch inventory and avatarInfo information and change the state of avatarInfo and inventory with setAvatarInfo() and setInventory()
    - Return none




## PetDisplay
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
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
- #### Array inventory
    - [click here](#array-inventory)
- #### Object sprite
    - An object with fields specifying which frames of the sprite sheet are being used to animate the pet/avatar. 

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
    - Handles the events triggered when the user feeds their pet. The inventory updates (less item(s)), The pet's EXP increases, and the sprite animation changes. 


## PetDescription
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
### Methods
- No Methods




## ProgressBar
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
### Methods
- No Methods







## PageDisplay
### Data fields
- #### Array taskList
    - An array of the user's tasks and tasks imported from Canvas (if integrated)
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
        - taskListObj: the new state of taskList
    - Return none   

- #### setPageView(pageNum)
    - Changes the pageView state and rerenders the current page to be the TaskPage, InventoryPage, CalendarPage, or PetProfPage depending on the argument.
    - Arguments:
        - pageNum: the new state of pageView. Range: [0-3]
    - Return none   

- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)

- #### fetchData()
    - Makes requests to the backend to fetch the user's task information and sets the state of taskList using setTaskList()
    - Return none  

## NavBar
### Data fields
- #### int pageView
    - [click here](#int-pageview)
### Methods
- setPageView()
    - [click here](#setpageviewpagenum)




## NavButton
### Data fields
- #### int pageView
    - [click here](#int-pageview)
### Methods
- setPageView()
    - [click here](#setpageviewpagenum)

- #### handleClick()
    - Handles user's clicks on NavButton component and calls setPageView() to change the page/component rendered. 
    <!-- - Arguments:
        - e: The event object that contains information about the NavButton componenet click  -->







## TaskPage
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
- The TaskList component displays the user's tasks

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
### Data fields
- #### Object taskItem
    - An object with fields describing the task like the due date, description, recurring info, etc
### Methods
- #### handleClick()
    - Displays TaskDetails component with more details about the task 
- #### removeTask(taskID)
    - [click here](#removetasktaskid) 
- #### updateTask(taskID)
    - [click here](#updatetasktaskid) 





## TaskDetails
### Data fields
- #### Object taskItem
    - [click here](#object-taskitem) 

### Methods
- #### removeTask(taskID)
    - [click here](#removetasktaskid) 
- #### updateTask(taskID)
    - [click here](#updatetasktaskid) 











## CreateTaskForm
### Data fields
- No Data Fields
### Methods
- #### setTaskList(taskListObj)
    - [click here](#settasklisttasklistobj)

- #### addTask()
    - Creates a new task, updates the task list using setTaskList, and makes a request to the backend to update the user's tasks. 




## InventoryPage
### Data fields
- #### Array inventory
    - [click here](#array-inventory)

### Methods
- No Methods






## ItemGrid
### Data fields
- #### Array inventory
    - [click here](#array-inventory)

### Methods
- No Methods











## Item
### Data fields
- #### Object inventoryItem
    - An object with fields describing an inventory item like its base type, level, and quantity. 
### Methods
- #### handleClick()
    - Handles clicks on item components and allows user to drag the item around.  



## CalendarPage
### Data fields
- #### Array taskList
    - [click here](#array-tasklist)
### Methods
- No Data Fields





## Calendar
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


## PetProfPage
### Data fields
- #### Object avatarInfo
    - [click here](#object-avatarinfo)
- Array taskList
### Methods
- No Methods











## PPTaskList
### Data fields
- Array taskList
### Methods
- No Methods










## PPTaskItem
### Data fields
- Object taskItem
### Methods
- handleClick()











## PPTaskDetails
### Data fields
- Object taskItem
### Methods










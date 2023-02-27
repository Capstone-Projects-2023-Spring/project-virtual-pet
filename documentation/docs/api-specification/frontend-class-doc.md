---
sidebar_position: 1
description: What should be in this section.
---

Design Document - Part II API (NOT COMPLETE)
=============================



## Component Hierarchy / Directory 

- [App](#app)
	- [Header](#header)
    - [DropDownMenu](#dropdownmenu)
        - [DropDownItem](#dropdownitem)
        - [CanvasIntegrationPage](#canvasintegrationpage)
        - [AccountSettingsPage](#accountsettingspage)
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
<details>
  <summary>The root component encompassing all other components.</summary>
  <div>
  
### Data fields
- #### Object userInfo
    - An object with fields describing the user's information like their username, first name, last name email, last login, etc.

### Methods
- #### setUserInfo(userObject)
    - Changes the userInfo state to userObject's values and rerenders components to reflect changes. 
    - Calls when the App component renders.
    - Updates the state of userInfo.
    - Arguments:
        - userObject: the object that will be the new state of userInfo.
    - Return none

- #### fetchData()
    - Makes requests to the backend to fetch the user's information.
    - Calls setUserInfo() to set the value of userInfo.
    - Return none


  </div>
</details>

## App
- The root component encompassing all other components.
### Data fields
- #### Object userInfo
    - An object with fields describing the user's information like their username, first name, last name email, last login, etc.

### Methods
- #### setUserInfo(userObject)
    - Changes the userInfo state to userObject's values and rerenders components to reflect changes. 
    - Calls when the App component renders.
    - Updates the state of userInfo.
    - Arguments:
        - userObject: the object that will be the new state of userInfo.
    - Return none

- #### fetchData()
    - Makes requests to the backend to fetch the user's information.
    - Calls setUserInfo() to set the value of userInfo.
    - Return none



## Header
- This component is the site's header and it shows the name of the site (My Study Buddy) and a DropDownMenu component. 
### Data fields
- #### str title
    - The name of the site (My Study Buddy).
- #### Object userInfo
    - [click here](#object-userinfo)
- ### Methods
    - #### setUserInfo(userObject)
        - [click here](#setuserinfouserobject)  

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
- #### setUserInfo(userObject)
    - [click here](#setuserinfouserobject)  

## DropDownItem
- Component that handles each individual selection option in the drop down menu.
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
- #### setUserInfo(userObject)
    - [click here](#setuserinfouserobject)  


## CanvasIntegrationPage
- Component that, upon selection, allows users to integrate their Canvas account.
### Data fields
- #### Object userInfo
    - [click here](#object-userinfo)

### Methods
- #### redirectTo()
    - Handles the functionality to redirect the user to the Canvas site.
    - Calls setUserInfo()
    - Return none
- #### setUserInfo(userObject)
    - [click here](#setuserinfouserobject)  
    - Calls when the user wants to integrate their Canvas account.


## AccountSettingsPage
- Component that grants access to the user's account settings

### Data fields
- #### Object userInfo
    - [click here](#object-userinfo)

### Methods
- #### changeEmail()
    - Allows user to change the email address associated with their account, making a call to the backend to update.
    - Return string (verification)
    - Calls setUserInfo()
    - Return string (verification message)
- #### changeUsername()
    - Allows user to change the username associated with their account, making a call to the backend to update.
    - Return string (verification)
    - Calls setUserInfo()
    - Return string (verification message)
- #### changePassword()
    - Allows user to change their password, making a call to the backend to update.
    - Calls setUserInfo()
    - Return string (verification message)
- #### deleteAccount()
    - Allows user to delete their account and erase all their data, making a call to the backend to update.
    - Calls setUserInfo()
    - Return string (verification message)
- #### setUserInfo(userObject)
    - [click here](#setuserinfouserobject)  
    - Calls when the user wants to change their account information. 



## Main
- The component displaying everything below the header. It's made up of the PetDisplay and PageDisplay component. 
### Data fields
- #### Object avatarInfo
    - An object with fields describing the user's pet like it's name, type, totalXP, last time the user interacted with/fed it. 
- #### Array inventory
    - An array of the items the user owns. Primarily consumables for the pet to level up.

### Methods
- #### setAvatarInfo(avatarObject)
    - Changes the avatarInfo state to the value of avatarObject and rerenders components to reflect changes.
    - Calls when the Main component renders. 
    - Updates the state of avatarInfo.
    - Arguments:
        - avatarObject: the object that will be the new state of avatarInfo.
    - Return none
- #### setInventory(inventoryList)
    - Changes the inventory array and rerenders components to reflect changes.
    - Calls when the Main component renders.
    - Updates the state of inventory.
    - Arguments:
        - inventoryList: the object that will be the new state of inventory.
    - Return none
- #### fetchData()
    - Makes requests to the backend to fetch inventory and avatarInfo information.
    - Calls setAvatarInfo() and setInventory() to set the values of inventory and avatarInfo().
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
    - Calls when a user feeds their pet. The user's item (candy) quantity goes down. 
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)
    - Calls when a user feeds their pet. The pet should gain EXP and change mood.
- #### setSprite(spriteObject)
    - Changes the sprite state to the value of spriteObject and rerenders components to reflect changes.
    - Calls when the PetSprite component renders.
    - Calls when a user feeds their pet. The pet's sprite should be animated differently to reflect the correct mood. 
    - Updates the state of sprite.
    - Arguments:
        - spriteObject: the object that will be the new state of the sprite object.
    - Return none   

- #### handleItemRelease(inventoryID)
    - Handles the event of the user dragging and dropping an item (candy) to their pet. 
    - Calls the setInventory() and setAvatarInfo() to update the values of avatarInfo and inventory. 
    - Return none


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
    - Changes the taskList state to the value of taskListObj and rerenders the page to display the user's updated/changed list of tasks. 
    - Updates the state of taskList. 
    - Calls when the PageDisplay component renders.
    - Arguments:
        - taskListObj: the new state of taskList.
    - Return none   

- #### setPageView(pageNum)
    - Changes the pageView state to the value of pageNum and rerenders the current page. 
    - Arguments:
        - pageNum: the new state of pageView. Range: [0-3].
    - Return none  

- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)

- #### fetchData()
    - Makes requests to the backend to fetch the user's task information.
    - Calls setTaskList() to set the value of taskList. 
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
- Component that handles each individual selection option in the navigation bar.
### Data fields
- #### int pageView
    - [click here](#int-pageview)
### Methods
- setPageView(pageNum)
    - [click here](#setpageviewpagenum)
    - Calls when the user selects another tab.
    - Depending on the value of pageView/pageNum, the component rendered could be TaskPage, InventoryPage, CalendarPage, or PetProfPage. 
    - Return none
- #### handleClick()
    - Handles user's clicks on NavButton component.
    - Calls setPageView() to update the value of pageView. 
    - Return none



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
    - Each task item in the taskList array will be displayed with the TaskList componenet. 
### Methods
- #### setInventory(inventoryList)
    - [click here](#setinventoryinventorylist)
- #### setAvatarInfo(avatarObject)
    - [click here](#setavatarinfoavatarobject)
- #### setTaskList(taskListObj)
    - [click here](#settasklisttasklistobj)
- #### removeTask(taskID)
    - Removes a task and makes a request to the backend to update the user's tasks.
    - Updates value of taskList using setTaskList().
- #### updateTask(taskID)
    - Updates the task information and makes a request to the backend to update the user's tasks. 
    - Updates value of taskList using setTaskList().
    - Calls setTaskList() to update the value of taskList.
    - Calls setInventory() to update the value of inventoryList.


## TaskItem
- Component for each item in taskList that displays certain information like name, due date, etc. 
### Data fields
- #### Object taskItem
    - An object with fields describing a task like the due date, description, recurring info, how much is completed, etc.
### Methods
- #### handleClick()
    - Renders the TaskDetails component which has more details about the task.
    - Return none
- #### removeTask(taskID)
    - [click here](#removetasktaskid) 
- #### updateTask(taskID)
    - [click here](#updatetasktaskid) 
    - Calls when the user updates their progress toward completion. 
    - Calls setInventory() if user's task completion or progress results in a reward (item/candy)/ 


## TaskDetails
- Handles the information about a specific task, like deadline, description, etc. 
- Can be edited. 
### Data fields
- #### Object taskItem
    - [click here](#object-taskitem) 

### Methods
- #### removeTask(taskID)
    - [click here](#removetasktaskid) 
    - Calls setTaskList() to remove the task from taskList. 
- #### updateTask(taskID)
    - [click here](#updatetasktaskid) 
    - Calls when the user changes the task's details.
    - Calls setTaskList() to update the value of taskList. 




## CreateTaskForm
- Component that allows the user to create a new task and add details to the task.
### Data fields
- No Data Fields
### Methods
- #### setTaskList(taskListObj)
    - [click here](#settasklisttasklistobj)
    - Calls when the user adds a new task to include it in taskList. 

- #### addTask()
    - Creates a new task and makes a request to the backend to update the user's tasks. 
    - Calls setTaskList() to update the taskList.
    - Return none 


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
    - Each item in inventory will be displayed to the user in a grid. 
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
    - Return none



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
    - Items in taskList that have a due date will be listed when the user selects that date on the calendar. 
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
    - Used to display extra information about the pet like the last time it was fed, birthday, etc.
- #### Array taskList
    - [click here](#array-tasklist)
### Methods
- No Methods


## PPTaskList
- Component that shows the users all their tasks and the progress they've made. 
### Data fields
- #### Array taskList
    - [click here](#array-tasklist)
    - Each task item in the taskList array will be displayed with the PPTaskList componenet.
### Methods
- No Methods


## PPTaskItem
- Component for each task item in taskList. 
### Data fields
- #### Object ppTaskItem
    - An object with fields describing a task and how much of it is completed.
### Methods
- #### handleClick()
    - Handles user's clicks on the component and renders a PPTaskDetails component to show more details.
    - Return none

## PPTaskDetails
- This component can not be edited and displays less information than the [TaskItem component](#taskitem). It shows the user how much progress they've made on their tasks.
### Data fields
- #### Object pptaskItem
    - [click here](#object-pptaskitem)
### Methods
- No Methods










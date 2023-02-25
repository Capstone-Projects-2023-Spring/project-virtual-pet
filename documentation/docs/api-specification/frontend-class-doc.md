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
+ Object avatarInfo
	+ Avatar info will be a object with fields describing the user's pet like it's name, type, totalXP, last time the user interacted with/fed it. 
+ Array inventory
	+ An array of the items the user owns 

### Methods
- setAvatarInfo(avatarObject)
	- Change the avatarInfo object and rerender components to reflect changes.
	- Arguments:
		- avatarObject: the object that will be the new state of avatarInfo
	- Return none
- setInventory(inventoryList)
	-  Change the inventory array and rerender components to reflect changes
	- Arguments:
		- inventoryList: the object that will be the new state of inventory
	- Return none
- fetchData()
	- Make requests to the backend to fetch inventory and avatarInfo information and change the state of avatarInfo and inventory with setAvatarInfo() and setInventory()
	- Return none




## PetDisplay
### Data fields
- Object avatarInfo
- Array inventory

### Methods
- setInventory()
- setAvatarInfo()










## PetSprite
### Data fields
- Object avatarInfo
- Array inventory
- Object sprite

### Methods
- setAvatarInfo()
- setInventory()
- setSprite()
- handleItemRelease()












## PetDescription
### Data fields
- Object avatarInfo
### Methods
- No Methods










## ProgressBar
### Data fields
- Object avatarInfo
### Methods
- No Methods







## PageDisplay
### Data fields
+ Array taskList
+ Array inventory
+ int pageView
+ Object avatarInfo

### Methods
- setTaskList()
- setPageView()
- setInventory()
- setAvatarInfo()
- fetchData()


## NavBar
### Data fields
- int pageView
### Methods
- setPageView()











## NavButton
### Data fields
- int pageView
### Methods
- setPageView()
- handleClick()










## TaskPage
### Data fields
- Array taskList
### Methods
+ setAvatarInfo()
+ setTaskList()
+ setInventory()











## TaskList
### Data fields
- Array taskList
### Methods
+ setAvatarInfo()
+ setTaskList()
+ setInventory()
+ removeTask()
+ updateTask()










## TaskItem
### Data fields
- Object taskItem
### Methods
+ handleClick()
+ removeTask()
+ updateTask()










## TaskDetails
### Data fields
- Object taskItem
### Methods
+ removeTask()
+ updateTask()










## CreateTaskForm
### Data fields
- No Data Fields
### Methods

+ setTaskList()
+ addTask()









## InventoryPage
### Data fields
- Array inventory
### Methods
- No Methods










## ItemGrid
### Data fields
- Array inventory
### Methods
- No Methods











## Item
### Data fields
- Object inventoryItem

### Methods
- handleClick()










## CalendarPage

### Data fields
- Array taskList
### Methods
- No Data Fields










## Calendar
### Data fields
- Date currentDate
### Methods
- displayTasks()
- handleClick










## PetProfPage
### Data fields
- Object avatarInfo
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










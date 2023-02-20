---
sidebar_position: 2
---

# Component Descriptions
A description the different components and their interfaces. See the [System Block Diagram]([url](https://capstone-projects-2023-spring.github.io/project-virtual-pet/docs/requirements/system-block-diagram)) for a visualization of how these components interact.


## React.js
	
	A component based web development framework for designing single-page 
	progressive web applications. We will use React to construct our front-end.
	
## Django

	A high-level Python web development framework that abstracts many typical 
	features such as session authentication and database management. We will use
	Django to construct our back-end and act as an ORM for our database. 

## SQLite

	A light-weight and server-less SQL database engine. We will use SQLite to
	store user profile information and related data such as avatar stats and
	inventory items.

## Django Rest Framework (API)

	A Django API framework that provides tools for creating RESTful APIs. We
	will use Django Rest Framework to server a robust and intuitive REST API to
	our front-end via URL endpoints, with a focus on constructing single 
	endpoints that will serve multiple CRUD operations to our SQLite database to
	simplify the front-end logic and reduce the number of total API calls. 

## Server and Static Store
	
	We will serve each application via a shared Docker container. This Docker
	container will live on an in-house Server, using NoDNS as a routing service.
	In addition, the Server will act as a store for Static Resources such as pet
	animation frames.
	
## Canvas
	
	An open source online classroom application that is widely used by 
	universities. We will use the Canvas API to construct Canvas integration
	services and integrate these services with our application. 

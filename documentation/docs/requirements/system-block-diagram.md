---
sidebar_position: 2
---

# System Block Diagram

<img src="https://user-images.githubusercontent.com/73796086/216864836-fb22e91a-367a-49ae-ba17-50d79acb3ad8.png" alt="System Block Diagram"/>
**Figure 1.** High level design of the Virtual Pet Study Buddy application.

## Description
Our project stack will be composed of the following components: React for the front-end, Django for the back-end, and a combination of a SQLite Database with a schema defined and managed by Django and a Static File store for hosting images and other large files. 

These applications will be Dockerized and hosted on an Ubuntu Server instance, likely in the cloud. Our back-end will need to manage User Profiles, Avatars, Schedules, and required application state data. In addition, it will be responsible for managing communications with our Static File store and with external APIs such as Canvas LMS. Our middleware API will be specified in Django and exposed to our Front-end.

Our front-end will be responsible for presenting the graphical interface to our Users, and provide a portal for managing Profiles, Avatars, Assets, and SSO Authentications. This graphical interface will be served in-browser as a React website, combining HTML, CSS, and Javascript/Typescript to create a beautiful and intuitive environment that Users will be naturally attracted to.


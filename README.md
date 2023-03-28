[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9911786)
<div align="center">

# My Study Buddy
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Site-hotpink)](https://capstone-projects-2023-spring.github.io/project-virtual-pet/)
[![Resources Link](https://img.shields.io/badge/-Resources-9cf)](https://capstone-projects-2023-spring.github.io/project-virtual-pet/resources/Links)

[![Website](https://img.shields.io/website?down_color=red&style=plastic&url=http%3A%2F%2F68.183.30.203%3A3000%2F)](http://68.183.30.203:3000/)


</div>

## Directions

* Please navigate to our app by clicking [this link](http://68.183.30.203:3000/). Once there, you can create an account, select a pet, and explore the site. 
* Study Buddy is a Progressive Web App (PWA). This means it's a web site that you can use in your browser, or it can be downloaded to your device and used like an app. 
   * On iOS: Open Safari and navigate to the site. Press the "Share" button and select "Add to Home Screen" from the popup. Lastly, tap "Add" in the top right corner to finish installing the PWA. It will now be on your home screen.
   * On Android: Open Chrome and navigate to the site. Press the "three dot" icon in the upper right to open the menu. Select "Add to Home screen." Press the "Add" button in the popup. The PWA is now installed and available on your home screen.
![Study buddy pwa instructions!](https://user-images.githubusercontent.com/73796086/227796829-3a226862-e33f-45ff-bac6-83efcccd883a.png)
* The following pages are functional: Register, Login, Home, Account, Canvas Integration, and Logout. 
    * On the Home page, you'll see your chosen pet and its name. You can modify the pet's name and bio by clicking on the Profile tab.
    * You can add tasks in the Tasks tab. When you check a task off, it is marked completed and you earn a candy.
    * To view your inventory of candies earned from completing tasks, go to the Inventory tab. You can feed your pet by dragging and dropping candies onto it, and watch the progress bar fill up. 
    * The Calendar and Progress tabs are currently under development. 
    * On the Canvas Integration page, you can follow directions to generate and upload a Canvas API token to import your assignments from Canvas into the application.
* If you encounter any bugs or issues, please visit our <a href="https://capstone-projects-2023-spring.github.io/project-virtual-pet/">documentation site</a> and click on the "Report Bug" button located on the right-hand side of the page. This will take you to a feedback form where you can provide details about the problem you encountered.
  * Points of contact: Mary Clay (mary.clay@temple.edu) & Alexander Russakoff (alexander.russakoff@temple.edu)
* For QA testing purposes, please reference the [Acceptance Testing document](https://docs.google.com/spreadsheets/d/1cuUb6Kp730-dWrmaLGF4BwymjM5wOjrheQmZXhBRBhs/edit?usp=sharing).

## Keywords

Section 704, web application, JavaScript, HTML, CSS, Python, Django, education, learning, studying, goals, reminders, virtual pet

## Project Abstract

This document proposes a progressive web application that combines the benefits of gamification and personal development to enhance the study experience. The application allows Users to take care of a Virtual Pet, which serves as a study companion and motivator. Users can set daily or weekly goals, set reminders, track their progress, and connect with their Canvas accounts to track assignments. Progress on these goals will directly influence the Virtual Pet’s appearance and mood, inspiring feelings of motivation, companionship, responsibility, and solidarity in the User. By using this application, Users will have an engaging and effective way to improve their academic performance.

<table align="center">
<tr>
    <td align="center">
            <img src="https://user-images.githubusercontent.com/73796086/221391195-a3de8590-2e59-4ff5-b24f-513248ee9ad4.jpg" height="300;"/>
    </td>
    <td align="center">
            <img src="https://user-images.githubusercontent.com/73796086/221391357-8ba86569-f62b-493c-9b7a-a04560773186.png" height="300;"/>
    </td>
</tr>
</table>

## High Level Requirement

The app requires an internet connection to function, and can be accessed on any device with a modern web browser. Users can set study goals, track their progress, and connect with their Canvas account. The user will be rewarded for achieving their study goals through a point system, where the number of points given will depend on the size of the task completed. After reaching a certain number of points, the user’s pet will level up. The app also integrates with Canvas, allowing the user to access and keep track of their assignments. Users can name their pet and interact with it, and perform tasks on their schedule that directly affect their pet’s condition and mood.The pet’s mood and appearance will be influenced by the user’s ability to achieve their goals.

## Conceptual Design

The frontend of the app will be built using JavaScript, React, HTML, and CSS. React will be used to build UI components and manage the state of the application, and JavaScript, HTML, and CSS will be used to create the User interface and handle User interactions. The backend will be built using Python and Django to handle User authentication and authorization, data storage, and the algorithms that determine how the Virtual Pet's appearance changes based on the student's study habits. SQLite will be used to store the User's data, such as their study goals, progress, and rewards. The application will also integrate with Canvas to allow students to track their assignments and classes and include them as personal study goals.

## Background

Similar products include [My Study Life](https://www.mystudylife.com/) and [Quizlet](https://quizlet.com/). These are both closed-source products that aim to help students improve their academic performance. My Study Life is an online student planner which allows students to keep track of their deadlines and classes. Quizlet allows students to create flashcards and quizzes to study for their classes. The Virtual Pet Study Buddy App is similar to these products in that the goal is to provide resources to help students succeed academically and stay on top of their coursework. However, this app also incorporates the unique aspect of a virtual pet companion to help them stay motivated to study. The Virtual Pet Study Buddy app will include some of the same features as Quizlet and My Study Life, like setting reminders or creating and linking to study materials. 

Another closed-source mobile application, titled [Finch](https://finchcare.com/), involves taking care of a virtual pet to achieve self-care goals. [Habitica](https://habitica.com/static/home) is an open-source web application which helps users gamify their life by allowing them to set goals for keeping up with personal habits. Incorporating the concept of caring for a pet and gamifying personal and academic tasks, as in this application, with the features of a study app, will allow users a more personalized and fun experience to succeed in their academic pursuits.

## Required Resources

Research will need to be conducted on the various software resources needed to complete this project, including JavaScript, React, HTML/CSS, Django, SQLite, and Canvas API. React will be used for the front-end, Django for the back-end, and a combination of a SQLite Database with a schema defined and managed by Django and a Static File store. A required resource is an Ubuntu server which will either be run on an old laptop or a hosting service will be used. No other hardware resources are required. 

## Local Build Instructions

### Prerequisites

* Python 3.8 or higher 

* pip3 22 or higher

* npm 8 or higher 

> A secret key and a gmail password will be required in backend `.env` file for the project to run correctly. If you are an approved developer on this project, reach out to your team lead to receive the requisite credentials. Modification of the backend code source code will be required in order to send email verifications on user registration. Our team is happy to assist in guiding you through this process.  

### Set Up

1. <a href=https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/releases>Download</a> the zip file in the release and open. Open a terminal, then navigate to the project directory. 

2. Insert your development keys to `~/sb/backend/.env`
```
SECRET_KEY=<YOUR-KEY>
GMAIL_PASSWORD=<YOUR-PASSWORD>
```
3. Navigate to the backend: 

```bash
cd <your-path>/sb/backend 
```

4. Activate a Python virtual environment and install dependencies:  
> (MacOS/Unix) 

```bash
source tutorial-env/bin/activate
pip3 install -r requirements.txt
```
> Windows

```bash
tutorial-env\Scripts\activate.bat
pip3 install -r requirements.txt
```

5. Activate the backend with the following instructions: 

```bash
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

6. Now, open a new terminal and from the project directory, navigate to the frontend: 

```bash
cd <your-path>/sb/frontend
```
7. Build the frontend as follows. Dependencies will be downloaded and compiled for you:

```bash
npm install 
npm run build 
nmp start
```
8. In your browser, navigate in the search bar to <a href="http://localhost:3000">http://localhost:3000</a>.


## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/mgclay">
            <img src="https://avatars.githubusercontent.com/u/65423598?v=4" width="100;" alt="mgclay"/>
            <br />
            <sub><b>Mary Clay</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ccho-0508">
            <img src="https://avatars.githubusercontent.com/u/80363779?v=4" width="100;" alt="ccho-0508"/>
            <br />
            <sub><b>Christine Cho</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Alexander-Russakoff">
            <img src="https://avatars.githubusercontent.com/u/98143670?v=4" width="100;" alt="Alexander-Russakoff"/>
            <br />
            <sub><b>Alexander Russakoff</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/katrinajaneczko">
            <img src="https://avatars.githubusercontent.com/u/73796086?v=4" width="100;" alt="katrinajaneczko"/>
            <br />
            <sub><b>Katrina Janeczko</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/harrisonfedor">
            <img src="https://avatars.githubusercontent.com/u/43662352?v=4" width="100;" alt="harrisonfedor"/>
            <br />
            <sub><b>Harrison Fedor</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/jay-newman">
            <img src="https://avatars.githubusercontent.com/u/97626791?v=4" width="100;" alt="jay-newman"/>
            <br />
            <sub><b>Jay Newman</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Ian Tyler Applebaum</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # ( readme: collaborators -end )

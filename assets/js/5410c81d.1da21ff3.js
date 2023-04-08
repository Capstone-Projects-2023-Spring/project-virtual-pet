"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[6654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},o="Activities",l={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities",description:"Requirements Gathering",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-virtual-pet/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"Christine",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-virtual-pet/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-virtual-pet/docs/development-plan/tasks"}},s={},p=[{value:"Requirements Gathering",id:"requirements-gathering",level:2},{value:"Top-Level Design",id:"top-level-design",level:2},{value:"Detailed Design",id:"detailed-design",level:2},{value:"Tests",id:"tests",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activities"},"Activities"),(0,i.kt)("h2",{id:"requirements-gathering"},"Requirements Gathering"),(0,i.kt)("p",null,"Research on React, Django, and Docker will be required to create containers that will run the frontend and backend of the site. In order to learn how these tools work together, proof of concepts will be created. Additional information gathering about progression systems is necessary in order to incentivize continued use of the app. This can be done by finding written resources on the topic and surveying the ways in which competing apps implement their progression systems. For hosting the site, different solutions like Google Cloud Platform, Heroku, and DigitalOcean will be explored. Additionally, research on the integration of animated frames into the application must be conducted. "),(0,i.kt)("h2",{id:"top-level-design"},"Top-Level Design"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a navigation bar for different pages related to managing the user\u2019s tasks and pets."),(0,i.kt)("li",{parentName:"ol"},"Create a pet display to help the user keep track of them."),(0,i.kt)("li",{parentName:"ol"},"Create a progression system to appropriately reward users for the completion of tasks."),(0,i.kt)("li",{parentName:"ol"},"Add a pop up for reminders to finish tasks."),(0,i.kt)("li",{parentName:"ol"},"Allow users to access pages for settings unrelated to their pet and tasks like integrating canvas, updating/accessing account information, logging out, etc."),(0,i.kt)("li",{parentName:"ol"},"Allow returning users to log in."),(0,i.kt)("li",{parentName:"ol"},"Allow first-time users to create an account."),(0,i.kt)("li",{parentName:"ol"},"Create the backend communication."),(0,i.kt)("li",{parentName:"ol"},"Setup SQLite database."),(0,i.kt)("li",{parentName:"ol"},"Implement Canvas' authorization and authentication of Virtual Pet Study Buddy through the OAuth2 process."),(0,i.kt)("li",{parentName:"ol"},"Host the site using a cloud service provider."),(0,i.kt)("li",{parentName:"ol"},"Containerize the site.")),(0,i.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a navigation bar for different pages related to managing the user\u2019s tasks and pets"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Task page:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Users can create new tasks by filling out a form specifying details like descriptions, dates and deadlines, if it\u2019s recurring, etc."),(0,i.kt)("li",{parentName:"ul"},"There will be a column of tasks and a column of Canvas assignments (if integrated). Users can check off a task as finished by selecting the checkbox next to  it. Canvas assignments will be marked as finished when they are completed in Canvas. "))),(0,i.kt)("li",{parentName:"ul"},"Calendar page:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Users can interact with a calendar and select days to view what tasks/assignments are due. "))),(0,i.kt)("li",{parentName:"ul"},"Inventory page:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Users can keep track of what items they have and give them to their pet."))),(0,i.kt)("li",{parentName:"ul"},"Pet profile page:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Users can see more details about their pet, like a progress bar showing how many points it has, its age, etc. "),(0,i.kt)("li",{parentName:"ul"},"Users can see more details about their progress, like how many tasks they\u2019ve completed over time, daily login streaks, etc. "))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a pet display to help the user keep track"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Users can always see how their progress impacts their pet with a fixed display. The pet\u2019s mood will visibly shift based on performance; poor performance will worsen the pet\u2019s mood, and the opposite for good performance. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a progression system to appropriately reward users for the completion of tasks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Upon the completion of tasks, pets will receive one or several candies, which upon feeding to their pet will increase their EXP and further their progress to the next level."),(0,i.kt)("li",{parentName:"ul"},"By successfully logging into their account each day, a multiplier will increase the amount of EXP (in the form of candy) the user receives from completing tasks. The size of this multiplier will increase based on the number of days in a row the user has logged in."),(0,i.kt)("li",{parentName:"ul"},"There will be different tiers for experienced gained, ranging from beginner to expert. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a pop up for reminders to finish tasks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pop up reminders will appear for tasks the user wants to be reminded of (part of editing/creating a task)."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allow users access to settings unrelated to their pet and tasks like integrating canvas, updating/accessing account information, logging out, etc."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There will be a separate navigation to access these settings. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allow returning users to log in."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The login page will provide fields for username/email and password."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allow first-time users to create an account."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The login account page will have a 'Create an account' button for first time users."),(0,i.kt)("li",{parentName:"ul"},"Users will be redirected to a form to fill out the necessary fields to create an account."),(0,i.kt)("li",{parentName:"ul"},"Users will be shown a list of pets to choose from and name. "),(0,i.kt)("li",{parentName:"ul"},"Users will be given the option to integrate Canvas."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the backend communication"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set up an API for the site to fetch user information from the SQLite database and Canvas API."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Setup SQLite database"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use Django Authentication system User model to store user information."),(0,i.kt)("li",{parentName:"ul"},"Set up other database models as needed and make migrations to apply changes to database."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement Canvas' authorization and authentication of Virtual Pet Study Buddy through the OAuth2 process."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Users who want to integrate Canvas will be prompted to allow the site access to their Canvas information. "),(0,i.kt)("li",{parentName:"ul"},"Users\u2019 completion of assignments and their grades from Canvas will be shown on the site and have an impact on their pets."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Host the site using a cloud service provider"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The site will run on a Linux server."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Containerize the site"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use containers to run the site\u2019s backend and frontend. ")))),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unit Testing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unit tests for the Django backend will be created with the standard library module \u2018unittest\u2019."),(0,i.kt)("li",{parentName:"ul"},"Unit tests for the React frontend will be created with Jest and the React testing library. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Mock Data"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A Canvas course circuit will be created to use for testing. This will include 1000-4000 level courses, each with a collection of homeworks, quizzes, projects, and tests. "),(0,i.kt)("li",{parentName:"ul"},"We will populate our SQLite database with mock user profiles containing mock avatars, to use with our integration testing platform. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There will be an accompanying routine to load and unload the mock data on a schedule so that integration tests can be repeated."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Integration Testing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Selenium, along with ChromeDriver and GeckoDriver (Firefox), will be used for integration testing. Each integration test will be scripted to conform to the functionality outlined in our use cases. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"System Testing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our docker container will be loaded onto a standalone platform for the purpose of System Testing. The platform will be determined at a later date, with current candidates being a standalone server or a VM instance in the cloud."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Acceptance Testing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"User Acceptance Testing will be performed at the end of the development life cycle to ensure that our product meets all of the requirements as outlined. In addition, we will collect feedback from users to assist with future improvements for the application.")))))}m.isMDXComponent=!0}}]);
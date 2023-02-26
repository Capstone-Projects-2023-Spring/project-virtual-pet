"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(g,s(s({ref:t},c),{},{components:n})):i.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},s="Schedule",a={unversionedId:"development-plan/schedule",id:"development-plan/schedule",title:"Schedule",description:"Gantt Chart",source:"@site/docs/development-plan/schedule.md",sourceDirName:"development-plan",slug:"/development-plan/schedule",permalink:"/project-virtual-pet/docs/development-plan/schedule",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/development-plan/schedule.md",tags:[],version:"current",lastUpdatedBy:"Katrina Janeczko",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Tasks",permalink:"/project-virtual-pet/docs/development-plan/tasks"},next:{title:"Development Environment",permalink:"/project-virtual-pet/docs/development-plan/development-environment"}},l={},p=[{value:"Gantt Chart",id:"gantt-chart",level:2},{value:"Milestone Demo Features",id:"milestone-demo-features",level:2},{value:"Milestone Demo 1 Account Creation & Pet Selection",id:"milestone-demo-1-account-creation--pet-selection",level:3},{value:"Milestone Demo 2 Progression Logic & Calendar Display",id:"milestone-demo-2-progression-logic--calendar-display",level:3},{value:"Milestone Demo 3 Pet Interaction & Visually Representing Progression",id:"milestone-demo-3-pet-interaction--visually-representing-progression",level:3},{value:"Final Demo",id:"final-demo",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schedule"},"Schedule"),(0,r.kt)("h2",{id:"gantt-chart"},"Gantt Chart"),(0,r.kt)("mermaid",{value:"gantt\n    title StudyBuddy Schedule Gantt Chart\n    todayMarker stroke-width:10px,stroke:#0f0,opacity:0.4\n    dateFormat  YYYY-MM-DD\n        section Sprint 0\n        Software Dev.: , 2023-02-08, 6d\n        section Sprint 0\n        Sprint 0 Planning Meeting: active, 2023-02-10, 1d\n        section Sprint 0\n        Brainstorm Progression System: , 2023-02-10, 1d\n        section Sprint 0\n        Complete Software Development Plan: , 2023-02-11, 1d\n        section Sprint 0\n        Revise Requirements Document: , 2023-02-11, 1d\n        section Sprint 0\n        Submit Software Development Plan Assignment: milestone, 2023-02-12, 1d\n\n        section Sprint 1\n        Design Doc & Research: , 2023-02-15, 2w\n        section Sprint 1\n        Sprint 1 Planning Meeting: active, 2023-02-15, 1d\n        section Sprint 1\n        Research/learn React, Django:  , 2023-02-16, 1d\n        section Sprint 1\n        Set up development testing environment on local host:  , 2023-02-16, 1d\n        section Sprint 1\n        Create user account management system:  , 2023-02-16, 1d\n        section Sprint 1\n        Decide on pet art style:  , 2023-02-16, 1d\n        section Sprint 1\n        Create pet art:  , 2023-02-16, 1d\n        section Sprint 1\n        Complete Design Document Part 1:  , 2023-02-18, 1d\n        section Sprint 1\n        Submit Design Document Part 1 (Architecture) Assignment: milestone, , 2023-02-19, 1d\n        section Sprint 1\n        Complete Design Document Part 2:  , 2023-02-23, 1d\n        section Sprint 1\n        Submit Design Document Part 2 (API) Assignment: milestone, , 2023-02-26, 1d\n\n        \n        section Sprint 2\n        Testing Doc & First Demo: , 2023-03-01, 2w\n        section Sprint 2\n        Sprint Planning Meeting: active, 2023-03-01, 1d\n        section Sprint 2\n        Create API : , 2023-03-02, 1d\n        section Sprint 2\n        Deliver first pet design: , 2023-03-02, 1d\n        section Sprint 2\n        Create settings dropdown: , 2023-03-02, 1d\n        section Sprint 2\n        Create pet display : , 2023-03-02, 1d\n        section Sprint 2\n        Create account information page : , 2023-03-02, 1d\n        section Sprint 2\n        Complete Test Procedures Document: , 2023-03-04, 1d\n        section Sprint 2\n        Submit Test Procedures Document Assignment: milestone, , 2023-03-05, 1d\n        section Sprint 2\n        Milestone Demo 1 :crit, milestone,  , 2023-03-14, 1d\n\n        section Sprint 3\n        Goals/Tasks/Reminders: , 2023-03-15, 2w\n        section Sprint 3\n        Sprint Planning Meeting: active , 2023-03-15, 1d\n        section Sprint 3\n        Stand Up Meeting Lecture: active , 2023-03-22, 1d\n        section Sprint 3\n        Create the task page: , 2023-03-22, 1d\n        section Sprint 3\n        Create the calendar page: , 2023-03-22, 1d\n        section Sprint 3\n        Set up Canvas integration: , 2023-03-22, 1d\n        section Sprint 3\n         Milestone Demo 2 :crit, milestone,  , 2023-03-28, 1d\n\n        \n        section Sprint 4\n        Graphics/Interactivity: , 2023-03-29, 2w\n        section Sprint 4\n        Sprint Planning Meeting: active , 2023-03-29, 1d\n        section Sprint 4\n        Stand Up Meeting Lecture: active , 2023-04-05, 1d\n        section Sprint 4\n        Make the pet reactive + Multiple frames for each tier: , 2023-04-07, 1d\n        section Sprint 4\n        Create inventory page: , 2023-04-07, 1d\n        section Sprint 4\n        Implement progression system graphically: , 2023-04-07, 1d\n        section Sprint 4\n        Milestone Demo 3 :crit, milestone,  , 2023-04-11, 1d\n\n        section Sprint 5\n        Final Demo: , 2023-04-12, 16d\n        section Sprint 5\n        Sprint Planning Meeting: active , 2023-04-12, 1d\n        section Sprint 5\n        Stand Up Meeting Lecture: active , 2023-04-19, 1d\n        section Sprint 5\n        Host site on public host: , 2023-04-22, 1d\n        section Sprint 5\n        Add more states to pet(s): , 2023-04-22, 1d\n        section Sprint 5\n        Add pet profile page: , 2023-04-22, 1d\n        section Sprint 5\n        Create task/assignment reminders:, 2023-04-22, 1d\n        section Sprint 5\n        Final Presentation & Demo :crit, milestone,  , 2023-04-27, 1d\n        section Sprint 5\n        Submit Test Report Document Assignment: milestone, , 2023-05-06, 1d\n        section Sprint 5\n        Submit Final Software Release Assignment: milestone, , 2023-05-07, 1d"}),(0,r.kt)("h2",{id:"milestone-demo-features"},"Milestone Demo Features"),(0,r.kt)("h3",{id:"milestone-demo-1-account-creation--pet-selection"},"Milestone Demo 1 ","[Account Creation & Pet Selection]"),(0,r.kt)("p",null,"F: User can create/log in to account"),(0,r.kt)("p",null,"R: User can enter credentials"),(0,r.kt)("p",null,"R: Credentials are authenticated via JWT token"),(0,r.kt)("p",null,"R: First-time user will be sent a verification email"),(0,r.kt)("p",null,"F: User can choose between two pets"),(0,r.kt)("p",null,"R: Select between two different cats (color palette)"),(0,r.kt)("p",null,"R: Name their pet"),(0,r.kt)("p",null,"F: User can view main page with static image of pet"),(0,r.kt)("p",null,"R: Users can see a still image of their pet at all times."),(0,r.kt)("p",null,"F: User can link with Canvas"),(0,r.kt)("p",null,"R: Users will be redirected to a sign on page to connect to their Canvas account."),(0,r.kt)("p",null,"R: Users can see a list of their courses."),(0,r.kt)("p",null,"F: User can view tasks"),(0,r.kt)("p",null,"R: View list of tasks."),(0,r.kt)("p",null,"R: Sort tasks by date.\t"),(0,r.kt)("h3",{id:"milestone-demo-2-progression-logic--calendar-display"},"Milestone Demo 2 ","[Progression Logic & Calendar Display]"),(0,r.kt)("p",null,"F: User can create Canvas-independent tasks"),(0,r.kt)("p",null,"R: Fill out a task form"),(0,r.kt)("p",null,"R: Save the task form"),(0,r.kt)("p",null,"F: User can import tasks from Canvas"),(0,r.kt)("p",null,"R: Tasks/assignments from the user's courses will be imported as tasks."),(0,r.kt)("p",null,"F: User can navigate to progress page ","[formerly pet profile page]"),(0,r.kt)("p",null,"R: View their profile."),(0,r.kt)("p",null,"R: Profile page allows users to view their progress on specific tasks"),(0,r.kt)("p",null,"F: User can complete and organize tasks"),(0,r.kt)("p",null,"R: Completion of tasks influences pet progress"),(0,r.kt)("p",null,"F: Canvas assignments are imported as tasks"),(0,r.kt)("p",null,"R: Tasks will have a name, course with which it is associated, and a description!"),(0,r.kt)("p",null,"R: Users can import tasks multiple times."),(0,r.kt)("p",null,"F: User can use calendar feature"),(0,r.kt)("p",null,"R: A calendar to show which days a task is due."),(0,r.kt)("p",null,"F: User can choose between more pets"),(0,r.kt)("p",null,"R: More than one breed of cat."),(0,r.kt)("h3",{id:"milestone-demo-3-pet-interaction--visually-representing-progression"},"Milestone Demo 3 ","[Pet Interaction & Visually Representing Progression]"),(0,r.kt)("p",null,"F: Make the pet reactive; its mood will visually change"),(0,r.kt)("p",null,"R: User\u2019s progress and task completion will result in mood changes!"),(0,r.kt)("p",null,"R: Pets will be animated."),(0,r.kt)("p",null,"F: Create the inventory page"),(0,r.kt)("p",null,"R: User can view the inventory earned from completing tasks!"),(0,r.kt)("p",null,"R: User can remove candy and place it on their pet (feed it), influencing their "),(0,r.kt)("p",null,"pet\u2019s progress"),(0,r.kt)("p",null,"R: Inventory includes different sizes of candies and a rare candy"),(0,r.kt)("p",null,"F: User can interact with their pet (feed candies)"),(0,r.kt)("p",null,"R: More expansive animations"),(0,r.kt)("p",null,"R: User can give candy to their pet, affecting its mood and level"),(0,r.kt)("p",null,"F: Implement progression system visually"),(0,r.kt)("p",null,"R: See your pet progress toward the next level with a progress bar"),(0,r.kt)("p",null,"R: See your progress towards completion of specific tasks in the Progress page"),(0,r.kt)("h3",{id:"final-demo"},"Final Demo"),(0,r.kt)("p",null,"F: Add more detailed animations for pet states."),(0,r.kt)("p",null,"R: Pet is asleep after a certain time."),(0,r.kt)("p",null,"R: Pet has more options for pets/pet colors."),(0,r.kt)("p",null,"F: Add more customization to pet"),(0,r.kt)("p",null,"R: Create more items for users to give to their pets"),(0,r.kt)("p",null,"F: Create task reminders/notifications"),(0,r.kt)("p",null,"R: Users receive pop-up notifications when a task\u2019s deadline is near"))}d.isMDXComponent=!0}}]);
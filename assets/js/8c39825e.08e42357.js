"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,k=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_position:3},r="Schedule",o={unversionedId:"development-plan/schedule",id:"development-plan/schedule",title:"Schedule",description:"Gantt Chart",source:"@site/docs/development-plan/schedule.md",sourceDirName:"development-plan",slug:"/development-plan/schedule",permalink:"/project-virtual-pet/docs/development-plan/schedule",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/development-plan/schedule.md",tags:[],version:"current",lastUpdatedBy:"Harrison Fedor",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Tasks",permalink:"/project-virtual-pet/docs/development-plan/tasks"},next:{title:"Development Environment",permalink:"/project-virtual-pet/docs/development-plan/development-environment"}},l={},c=[{value:"Gantt Chart",id:"gantt-chart",level:2},{value:"Milestone Demo Features",id:"milestone-demo-features",level:2},{value:"Milestone Demo 1 Account Creation, Pet Basics, & Canvas Integration",id:"milestone-demo-1-account-creation-pet-basics--canvas-integration",level:3},{value:"Milestone Demo 2 Progression System & Full Task Functionality",id:"milestone-demo-2-progression-system--full-task-functionality",level:3},{value:"Milestone Demo 3 Detailed Pet Interactions & Task Reminders",id:"milestone-demo-3-detailed-pet-interactions--task-reminders",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schedule"},"Schedule"),(0,i.kt)("h2",{id:"gantt-chart"},"Gantt Chart"),(0,i.kt)("mermaid",{value:"gantt\n    title StudyBuddy Schedule Gantt Chart\n    todayMarker stroke-width:10px,stroke:#0f0,opacity:0.4\n    dateFormat  YYYY-MM-DD\n        section Software Development Plan\n        Sprint 0: , 2023-02-08, 6d\n        section Software Development Plan\n        Sprint 0 Planning Meeting: active, 2023-02-10, 1d\n        section Software Development Plan\n        Brainstorm Progression System: , 2023-02-10, 2d\n        section Software Development Plan\n        Complete Software Development Plan: , 2023-02-09, 5d\n        section Software Development Plan\n        Revise Requirements Document: , 2023-02-11, 1d\n        section Software Development Plan\n        Submit Software Development Plan Assignment: milestone, 2023-02-12, 1d\n\n        section Account Creation, Pet Basics, & Canvas Integration\n        Sprint 1: , 2023-02-15, 2w\n        section Account Creation, Pet Basics, & Canvas Integration\n        Sprint 1 Planning Meeting: active, 2023-02-15, 1d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Research/learn React, Django:  , 2023-02-16, 13d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Create user account management system:  , 2023-02-16, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Decide on pet art style:  , 2023-02-16, 2d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Create static pet art:  , 2023-02-16, 4d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Complete Design Document Part 1:  , 2023-02-18, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Submit Design Document Part 1 (Architecture) Assignment: milestone, , 2023-02-19, 1d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Complete Design Document Part 2:  , 2023-02-23, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Submit Design Document Part 2 (API) Assignment: milestone, , 2023-02-26, 1d\n\n        \n        section Account Creation, Pet Basics, & Canvas Integration\n        Sprint 2: , 2023-03-01, 2w\n        section Account Creation, Pet Basics, & Canvas Integration\n        Sprint Planning Meeting: active, 2023-03-01, 1d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Create API: , 2023-03-02, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Pet naming/selection: , 2023-03-04, 4d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Set up Canvas integration: , 2023-03-05, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Create pet display : , 2023-03-05, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Create account information page : , 2023-03-07, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Viewable task list : , 2023-03-08, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Settings Menu : , 2023-03-09, 3d\n        section Account Creation, Pet Basics, & Canvas Integration\n        User can import tasks from Canvas: , 2023-03-07, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Host site: milestone, , 2023-03-09, 3d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Complete Test Procedures Document: , 2023-03-01, 5d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Submit Test Procedures Document Assignment: milestone, , 2023-03-05, 1d\n        section Account Creation, Pet Basics, & Canvas Integration\n        Milestone Demo 1 :crit, milestone,  , 2023-03-14, 1d\n\n        section Progression System & Full Task Functionality\n        Sprint 3: , 2023-03-15, 2w\n        section Progression System & Full Task Functionality\n        Sprint Planning Meeting: active , 2023-03-15, 1d\n        section Progression System & Full Task Functionality\n        User can create Canvas-independent tasks: active , 2023-03-16, 3d\n        section Progression System & Full Task Functionality\n        User can complete and organize tasks: , 2023-03-20, 4d\n        section Progression System & Full Task Functionality\n        Implement progression system graphically: , 2023-03-20, 1w\n        section Progression System & Full Task Functionality\n        Pet can be fed candies: , 2023-03-21, 2d\n        section Progression System & Full Task Functionality\n        Create the calendar page: , 2023-03-22, 5d\n        section Progression System & Full Task Functionality\n        Create progress page: , 2023-03-23, 5d\n        section Progression System & Full Task Functionality\n        Create inventory page: , 2023-03-24, 3d\n        section Progression System & Full Task Functionality\n        More pet options: , 2023-03-24, 3d\n        section Progression System & Full Task Functionality\n        Milestone Demo 2 :crit, milestone,  , 2023-03-28, 1d\n\n        \n        section Detailed Pet Interactions & Task Reminders\n        Sprint 4: , 2023-03-29, 2w\n        section Detailed Pet Interactions & Task Reminders\n        Sprint Planning Meeting: active , 2023-03-29, 1d\n        section Detailed Pet Interactions & Task Reminders\n        Make the pet reactive + Multiple frames for each tier: , 2023-03-30, 5d\n        section Detailed Pet Interactions & Task Reminders\n        Create task/assignment reminders: , 2023-04-05, 5d\n        section Detailed Pet Interactions & Task Reminders\n        Milestone Demo 3 :crit, milestone,  , 2023-04-11, 1d\n\n        section Final Demo\n        Sprint 5: , 2023-04-12, 16d\n        section Final Demo\n        Sprint Planning Meeting: active , 2023-04-12, 1d\n        section Final Demo\n        Add more detailed animations for pet states.: active , 2023-04-13, 5d\n        section Final Demo\n        Add more states/customizations to pet(s): , 2023-04-16, 5d\n        section Final Demo\n        Final Presentation & Demo :crit, milestone,  , 2023-04-27, 1d\n        section Final Demo\n        Submit Test Report Document Assignment: milestone, , 2023-05-06, 1d\n        section Final Demo\n        Submit Final Software Release Assignment: milestone, , 2023-05-07, 1d"}),(0,i.kt)("h2",{id:"milestone-demo-features"},"Milestone Demo Features"),(0,i.kt)("h3",{id:"milestone-demo-1-account-creation-pet-basics--canvas-integration"},"Milestone Demo 1 ","[Account Creation, Pet Basics, & Canvas Integration]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F1: Account Management"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User is able to register new account."),(0,i.kt)("li",{parentName:"ul"},"R2: User is able to login with an existing account."),(0,i.kt)("li",{parentName:"ul"},"R3: User is able to update their account name, and email address."),(0,i.kt)("li",{parentName:"ul"},"R4: User is able to view their account information."),(0,i.kt)("li",{parentName:"ul"},"R5: Credentials are authenticated via JWT token."),(0,i.kt)("li",{parentName:"ul"},"R6: First-time user will be sent a verification email."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F2: Pet Selection, Customization, and Care"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User can choose between two virtual pets."),(0,i.kt)("li",{parentName:"ul"},"R2: User can select between two different cats (color palette)."),(0,i.kt)("li",{parentName:"ul"},"R3: User can name their virtual pet."),(0,i.kt)("li",{parentName:"ul"},"R4: Users can see a still image of their virtual pet at all times."),(0,i.kt)("li",{parentName:"ul"},"R5: User sees the pet's mood change temporarily from neutral to happy when they click on it."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F3: User can link with Canvas LMS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: Users can access a page listing instructions to connect their Canvas account."),(0,i.kt)("li",{parentName:"ul"},"R2: Users can see a list of their courses."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F4: User can view tasks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User can view a list of their tasks from Canvas LMS."),(0,i.kt)("li",{parentName:"ul"},"R4: Tasks will have a name, course with which it is associated, and a description.")))),(0,i.kt)("h3",{id:"milestone-demo-2-progression-system--full-task-functionality"},"Milestone Demo 2 ","[Progression System & Full Task Functionality]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F5: Task Completion and task creation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User can fill out a form to create a task."),(0,i.kt)("li",{parentName:"ul"},"R2: Completion of tasks influences virtual pet progress."),(0,i.kt)("li",{parentName:"ul"},"R3: User can import Canvas assignments as tasks."),(0,i.kt)("li",{parentName:"ul"},"R3: Importing Canvas task multiple times causes updates but no duplication."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F6: Create the inventory page"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User can view the inventory earned from completing tasks."),(0,i.kt)("li",{parentName:"ul"},"R2: User can remove candy and place it on their pet (feed it), influencing their pet\u2019s progress."),(0,i.kt)("li",{parentName:"ul"},"R3: Inventory includes different sizes of candies and a rare candy."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F7: User can interact with their pet (feed candies)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User can give candy to their virtual pet, affecting its mood and level."),(0,i.kt)("li",{parentName:"ul"},"R2: User should be able to view task progress and how it affects their virtual pet."),(0,i.kt)("li",{parentName:"ul"},"R3: See your pet progress toward the next level with a progress bar."),(0,i.kt)("li",{parentName:"ul"},"R4: See your progress towards completion of specific tasks in the Progress page.")))),(0,i.kt)("h3",{id:"milestone-demo-3-detailed-pet-interactions--task-reminders"},"Milestone Demo 3 ","[Detailed Pet Interactions & Task Reminders]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F8: Make the pet reactive; its mood will visually change"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User\u2019s progress and task completion will result in virtual pet mood changes."),(0,i.kt)("li",{parentName:"ul"},"R2: User's virtual pets will be animated."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F9: Create task reminders/notifications"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: Users receive pop-up notifications when a task\u2019s deadline is near."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F10: Task organization and filtering"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: User can sort tasks by date."),(0,i.kt)("li",{parentName:"ul"},"R2: Users can assign custom tags."),(0,i.kt)("li",{parentName:"ul"},"R3: Imported Canvas tasks are automatically assigned a tag with course name."),(0,i.kt)("li",{parentName:"ul"},"R4: User can organize tasks by tags."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F11: User can view their tasks on a calendar"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"R1: The system will present the user with a calendar grid view of their upcoming and past due tasks."),(0,i.kt)("li",{parentName:"ul"},"R2: the system will support the Gregorian calendar format.")))))}p.isMDXComponent=!0}}]);
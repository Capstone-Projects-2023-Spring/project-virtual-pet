"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[7607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||n;return a?s.createElement(m,o(o({ref:t},u),{},{components:a})):s.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<n;c++)o[c]=a[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=a(7462),r=(a(7294),a(3905));const n={sidebar_position:5},o="Use-Case Descriptions",i={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-Case Descriptions",description:"Use Case 1",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-virtual-pet/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"jay-newman",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-virtual-pet/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-virtual-pet/docs/category/software-development-plan"}},l={},c=[{value:"Use Case 1",id:"use-case-1",level:3},{value:"Use Case 2",id:"use-case-2",level:3},{value:"Use Case 3",id:"use-case-3",level:3},{value:"Use Case 4",id:"use-case-4",level:3},{value:"Use Case 5",id:"use-case-5",level:3},{value:"Use Case 6",id:"use-case-6",level:3},{value:"Use Case 7",id:"use-case-7",level:3},{value:"Use Case 8",id:"use-case-8",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-case-descriptions"},"Use-Case Descriptions"),(0,r.kt)("h3",{id:"use-case-1"},"Use Case 1"),(0,r.kt)("i",null," As a user, I want to use the resources I've collected in the application to progress my avatar. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user navigates to the InventoryPage in the PageDisplay portion of the screen on the right. The inventory data is fetched through an API call."),(0,r.kt)("li",{parentName:"ol"},"The user views a set of acquired rewards on the InventoryPage in the form of \u2018candies\u2019 which are contained as Items in an ItemGrid in the Inventory."),(0,r.kt)("li",{parentName:"ol"},"The user drags a 'candy' to the avatar, and the Inventory is updated to reflect the removal of a candy. An API call updates the inventory list."),(0,r.kt)("li",{parentName:"ol"},"The user drops the 'candy' onto their avatar on the lefthand side of the screen, and it shows an eating animation and a satisfied animation."),(0,r.kt)("li",{parentName:"ol"},"The avatarInfo is updated which contains the EXP data, which causes the progress bar to update, increasing when the \u2018candy\u2019 is consumed.")),(0,r.kt)("h3",{id:"use-case-2"},"Use Case 2"),(0,r.kt)("i",null," As a user, I want to link Canvas to my Virtual Pet."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user creates an account and profile as described in Use Case 8."),(0,r.kt)("li",{parentName:"ol"},"The user navigates to the Canvas Integration section of the site."),(0,r.kt)("li",{parentName:"ol"},"The user signs on through SSO."),(0,r.kt)("li",{parentName:"ol"},"Courses as assignment data are imported into the user's info.")),(0,r.kt)("h3",{id:"use-case-3"},"Use Case 3"),(0,r.kt)("i",null,"As a user, I want to quickly monitor my progress by assessing the mood of my avatar."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User has set up Canvas integration and has neglected an assignment."),(0,r.kt)("li",{parentName:"ol"},"As the assignment gets closer, the avatar becomes visibly hungry in a comically over-the-top-fashion."),(0,r.kt)("li",{parentName:"ol"},"When the due date for the assignment passes, the avatar becomes visibly upset."),(0,r.kt)("li",{parentName:"ol"},"Experience and rewards gained in the application now have a multiplier that is less than one."),(0,r.kt)("li",{parentName:"ol"},"The user can now retroactively complete the assignment and the multiplier will be returned to the previous state."),(0,r.kt)("li",{parentName:"ol"},"This will be reflected in the avatar's apparent mood. ")),(0,r.kt)("h3",{id:"use-case-4"},"Use Case 4"),(0,r.kt)("i",null," As a user, I want to create a schedule and be encouraged by my Virtual Pet to adhere to the schedule."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user logs into their profile."),(0,r.kt)("li",{parentName:"ol"},"User navigates to the \u201cCreate Task\u201d tab."),(0,r.kt)("li",{parentName:"ol"},"User fills out a form with types of milestones and calendar information regarding due dates. These can be explicit calendar entries based on a particular date, or recur on a regular time interval."),(0,r.kt)("li",{parentName:"ol"},"The backend for the site builds a set of events for the avatar based on these milestones.")),(0,r.kt)("h3",{id:"use-case-5"},"Use Case 5"),(0,r.kt)("i",null,"As a user, I want to have my study app stay up to date on my progress towards my study goals."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user logs into their profile."),(0,r.kt)("li",{parentName:"ol"},"From the homepage, the user can select a specific task to see more information."),(0,r.kt)("li",{parentName:"ol"},"After selecting a task, the user may update their progress by indicating they are halfway through, a quarter of the way through, etc."),(0,r.kt)("li",{parentName:"ol"},"After progressing further towards completing a task, the user\u2019s pet will receive EXP in the form of candy towards its next level.")),(0,r.kt)("h3",{id:"use-case-6"},"Use Case 6"),(0,r.kt)("i",null," As a user, I want to be able to track my pet\u2019s growth and my progress towards reaching my study goals."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user logs into their profile."),(0,r.kt)("li",{parentName:"ol"},"The user can always see their pet's progress towards the next level in the form of a progress bar on the left side of the page."),(0,r.kt)("li",{parentName:"ol"},"The user navigates to the \u2018Pet Profile\u2019 page."),(0,r.kt)("li",{parentName:"ol"},"From this page, the user can see a list of their current tasks and can select a specific task to see more information."),(0,r.kt)("li",{parentName:"ol"},"After selecting their task, the user will see statistics about their progress towards completing that task, including the time remaining before the deadline.")),(0,r.kt)("h3",{id:"use-case-7"},"Use Case 7"),(0,r.kt)("i",null," As a user, I want to be able to log into an account so that my progress and tasks will be saved."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The system requests the user to log in or create an account."),(0,r.kt)("li",{parentName:"ol"},"The user enters their email address and password."),(0,r.kt)("li",{parentName:"ol"},"The system validates the user\u2019s credentials and grants access to the application.")),(0,r.kt)("h3",{id:"use-case-8"},"Use Case 8"),(0,r.kt)("i",null," As a user, it is important that I can create an account so that I can maintain my pet\u2019s growth and my task progress."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upon accessing the web application for the first time, the user is given the option to create\nan account."),(0,r.kt)("li",{parentName:"ol"},"The user inputs their email address and creates a password to create their account."),(0,r.kt)("li",{parentName:"ol"},"After creating the account, the user sees a page allowing them to choose a pet out of a\nselection of avatars."),(0,r.kt)("li",{parentName:"ol"},"The user selects a pet."),(0,r.kt)("li",{parentName:"ol"},"The site automatically navigates to the Canvas Integration tab."),(0,r.kt)("li",{parentName:"ol"},"The user chooses whether to integrate with their Canvas account."),(0,r.kt)("li",{parentName:"ol"},"The user now has access to creating tasks and growing their pet.")))}p.isMDXComponent=!0}}]);
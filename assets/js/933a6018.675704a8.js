"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1807],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||r;return a?t.createElement(m,i(i({ref:n},p),{},{components:a})):t.createElement(m,i({ref:n},p))}));function m(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=a(7462),s=(a(7294),a(3905));const r={sidebar_position:3},i="Class Diagrams",o={unversionedId:"system-architecture/class-diagrams",id:"system-architecture/class-diagrams",title:"Class Diagrams",description:"Backend Class Diagram",source:"@site/docs/system-architecture/class-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/class-diagrams",permalink:"/project-virtual-pet/docs/system-architecture/class-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/system-architecture/class-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Katrina Janeczko",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Component Descriptions",permalink:"/project-virtual-pet/docs/system-architecture/component-descriptions"},next:{title:"Sequence Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/sequence-diagrams"}},l={},c=[{value:"Backend Class Diagram",id:"backend-class-diagram",level:2},{value:"Frontend Class Diagram",id:"frontend-class-diagram",level:2},{value:"Figure 1.1 UML Class Diagram (All React Components)",id:"figure-11-uml-class-diagram-all-react-components",level:3},{value:"Figure 1.2 UML Class Diagram (PetDisplay React Components)",id:"figure-12-uml-class-diagram-petdisplay-react-components",level:3},{value:"PetSprite",id:"petsprite",level:4},{value:"PetDescription and ProgressBar",id:"petdescription-and-progressbar",level:4},{value:"Figure 1.3 UML Class Diagram: PageDisplay React Components",id:"figure-13-uml-class-diagram-pagedisplay-react-components",level:3},{value:"NavBar",id:"navbar",level:4},{value:"TaskPage",id:"taskpage",level:4},{value:"InventoryPage",id:"inventorypage",level:4},{value:"CalendarPage",id:"calendarpage",level:4},{value:"PetProfPage",id:"petprofpage",level:4},{value:"Figure 1.4 UML Class Diagram: Header React Components",id:"figure-14-uml-class-diagram-header-react-components",level:3},{value:"DropDownMenu",id:"dropdownmenu",level:4},{value:"CanvasIntegrationPage",id:"canvasintegrationpage",level:4},{value:"AccountSettingsPage",id:"accountsettingspage",level:4}],p={toc:c};function d(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,s.kt)("h2",{id:"backend-class-diagram"},"Backend Class Diagram"),(0,s.kt)("p",null,"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."),(0,s.kt)("h2",{id:"frontend-class-diagram"},"Frontend Class Diagram"),(0,s.kt)("mermaid",{value:'classDiagram\n    App *-- Header\n    App *-- Main\n\n    Header *-- DropDownMenu\n\n    DropDownMenu "1"*--"3" DropDownItem\n    DropDownItem *--"routes to" CanvasIntegrationPage\n    DropDownItem *-- "routes to" AccountSettingsPage\n\n    Main *-- PetDisplay\n    Main *-- PageDisplay\n\n    PetDisplay *-- PetSprite\n    PetDisplay *-- PetDescription\n    PetDisplay *-- ProgressBar\n\n    PageDisplay *-- NavBar\n    NavBar "1" *-- "4" NavButton\n    PageDisplay *-- TaskPage\n    PageDisplay *-- CalendarPage\n    PageDisplay *-- InventoryPage\n    PageDisplay *-- PetProfPage\n\n    TaskPage *-- TaskList\n    TaskPage *-- CreateTaskForm\n\n    TaskList "1" *-- "0.." TaskItem\n    TaskItem *-- TaskDetails\n    %% TaskItem *-- TaskOptions\n\n    InventoryPage *-- ItemGrid\n    ItemGrid "1" *-- "0.."Item\n\n    CalendarPage *-- Calendar\n\n\n    \n    class App {\n        + Object userInfo    \n    }\n\n\n    class Header {\n        + str title\n        + Object userInfo   \n    }\n    class DropDownMenu {\n        + Array pages\n        + Object userInfo     \n        + handleClick()\n        \n    }\n    class DropDownItem {\n        + str title \n        + Object userInfo   \n        + handleClick()\n        + logout()\n    }\n\n    class CanvasIntegrationPage {\n        + Object userInfo   \n        + redirectTo()\n\n    }\n\n    class AccountSettingsPage {\n        + Object userInfo   \n        + changeEmail()\n        + changeUsername()\n        + changePassword()\n        + deleteAccount()\n\n        \n    }\n\n\n    class Main {\n        + Object avatarInfo\n        + Array inventory\n        + setAvatarInfo()\n        + setInventory()\n    }\n\n\n\n    class PetDisplay {\n        + Object avatarInfo\n        + Array inventory\n        + setInventory()\n        + setAvatarInfo()\n    }\n    class PetSprite{\n        + Object avatarInfo\n        + Object sprite\n        + Array inventory\n\n        + setAvatarInfo()\n        + setInventory()\n        + setSprite()\n        + handleItemRelease()\n    }\n    class PetDescription{\n        + Object avatarInfo\n    }\n    class ProgressBar {\n        + Object avatarInfo\n    }\n\n    \n\n    class PageDisplay {\n        + setTaskList()\n        + setPageView()\n        + setInventory()\n        + Array taskList\n        + Array inventory\n        + int pageView\n        + Object avatarInfo\n    }\n\n    class NavBar {\n        + setPageView()\n        + int pageView\n    }\n\n    class NavButton {\n        + setPageView()\n        + handleClick()\n        + int pageView \n    }\n\n\n    class TaskPage {\n        + Array taskList\n        + setTaskList()\n        + setInventory()\n    }\n    class TaskList{\n        + Array taskList\n        + setTaskList()\n        + setInventory()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskItem {\n        + Object taskItem\n        + handleClick()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskDetails  {\n        + Object taskItem\n        + removeTask()\n        + updateTask()\n    }\n    class CreateTaskForm{\n        + setTaskList()\n        + addTask()\n    }\n\n    class InventoryPage {\n        + Array inventory\n    }\n    class ItemGrid {\n        + Array inventory\n    }\n    class Item {\n        + handleClick()\n        + Object inventoryitem\n    }\n\n\n    class CalendarPage {\n        + Array taskList\n    }\n    class Calendar {\n        + Date currentDate\n        + displayTasks()\n        + handleClick()\n    }\n\n    class PetProfPage {\n        + Object avatarInfo\n        + Array taskList \n    }\n\n    \n'}),(0,s.kt)("h3",{id:"figure-11-uml-class-diagram-all-react-components"},"Figure 1.1 UML Class Diagram (All React Components)"),(0,s.kt)("p",null,"Figure 1.1 shows all the React components that make up the frontend of the StudyBuddy site."),(0,s.kt)("mermaid",{value:"classDiagram\n    PetDisplay *-- PetSprite\n    PetDisplay *-- PetDescription\n    PetDisplay *-- ProgressBar\n\n    class PetDisplay {\n    + Object avatarInfo\n    + Array inventory\n    + setInventory()\n    + setAvatarInfo()\n    }\n    class PetSprite{\n        + Object avatarInfo\n        + Object sprite\n        + Array inventory\n\n        + setAvatarInfo()\n        + setInventory()\n        + setSprite()\n        + handleItemRelease()\n    }\n    class PetDescription{\n        + Object avatarInfo\n    }\n    class ProgressBar {\n        + Object avatarInfo\n    }"}),(0,s.kt)("h3",{id:"figure-12-uml-class-diagram-petdisplay-react-components"},"Figure 1.2 UML Class Diagram (PetDisplay React Components)"),(0,s.kt)("p",null,"Figure 1.2 shows the React components that make PetDisplay. This component will be fixed to the left side of the page, allowing users to always see and interact with their pet. "),(0,s.kt)("h4",{id:"petsprite"},"PetSprite"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The PetSprite component displays a sprite of the user's pet, and allows the user to drag items like candy to it from the InventoryPage (Figure 1.3). Candies will change the pet's 'avatarInfo' state, updating information like total EXP and the last time they were fed/interacted with. The 'inventory' state will also change since the user will have one less item from using the candy. The 'sprite' state will also change since a pet's mood can improve from receiving items. The 'sprite' state is owned by the PetSprite component so those changes will cause only that component to re-render.")),(0,s.kt)("h4",{id:"petdescription-and-progressbar"},"PetDescription and ProgressBar"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The components PetDescription and ProgressBar use the state 'avatarInfo' to display information about the user's pet like its name, mood, total EXP, etc. ")),(0,s.kt)("mermaid",{value:'classDiagram\n    PageDisplay *-- NavBar\n    PageDisplay *-- TaskPage\n    PageDisplay *-- CalendarPage\n    PageDisplay *-- InventoryPage\n    PageDisplay *-- PetProfPage\n\n    NavBar "1" *-- "4" NavButton\n\n    TaskPage *-- TaskList\n    TaskPage *-- CreateTaskForm\n\n    TaskList "1" *-- "0.." TaskItem\n    TaskItem *-- TaskDetails\n\n    InventoryPage *-- ItemGrid\n    ItemGrid "1" *-- "0.."Item\n\n    CalendarPage *-- Calendar\n\n\n    class PageDisplay {\n    + setTaskList()\n    + setPageView()\n    + setInventory()\n    + Array taskList\n    + Array inventory\n    + int pageView\n    + Object avatarInfo\n    }\n\n    class NavBar {\n        + setPageView()\n        + int pageView\n    }\n\n    class NavButton {\n        + setPageView()\n        + handleClick()\n        + int pageView \n    }\n\n    class TaskPage {\n        + Array taskList\n        + setTaskList()\n        + setInventory()\n    }\n    class TaskList{\n        + Array taskList\n        + setTaskList()\n        + setInventory()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskItem {\n        + Object taskItem\n        + handleClick()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskDetails  {\n        + Object taskItem\n        + removeTask()\n        + updateTask()\n    }\n    class CreateTaskForm{\n        + setTaskList()\n        + addTask()  \n    }\n\n    class InventoryPage {\n        + Array inventory\n    }\n    class ItemGrid {\n        + Array inventory\n    }\n    class Item {\n        + handleClick()\n        + Object inventoryitem\n    }\n\n\n    class CalendarPage {\n        + Array taskList\n    }\n    class Calendar {\n        + Date currentDate\n        + displayTasks()\n        + handleClick()\n    }\n\n    class PetProfPage {\n        + Object avatarInfo\n        + Array taskList \n    }\n'}),(0,s.kt)("h3",{id:"figure-13-uml-class-diagram-pagedisplay-react-components"},"Figure 1.3 UML Class Diagram: PageDisplay React Components"),(0,s.kt)("p",null,"Figure 1.3 shows the React components that make PageDisplay. This component is fixed to the right side of the page, and it provides navigation to different pages that will help the user keep track of their task progress and pet. "),(0,s.kt)("h4",{id:"navbar"},"NavBar"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"By default the TaskPage is shown, but users can interact with the NavBar component to reach the other component pages like InventoryPage, CalendarPage, and PetProfPage. The PageDisplay component holds the state 'pageView', so when the user selects a NavButton component, the 'pageView' state will change and trigger a re-render to show the correct page.")),(0,s.kt)("h4",{id:"taskpage"},"TaskPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The TaskPage component's main purpose is to allow users to view, add, delete, and modify their tasks, which is stored in the state 'taskList'. The CreateTaskForm component will allow users to add a new task, and the TaskList component will allow users to select individual TaskItem components to update their progress, change details, or delete them. Further progress on tasks may result in the user receiving a candy, so the state 'inventory' can update due to user interactions with the TaskList component. ")),(0,s.kt)("h4",{id:"inventorypage"},"InventoryPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The InventoryPage component uses the state 'inventory' to show and keep track of what items the user has. This component will re-render when that state changes, which can be caused by the user's interactions with the TaskList and PetSprite component.")),(0,s.kt)("h4",{id:"calendarpage"},"CalendarPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The CalendarPage component holds the state 'taskList'. It allows users to interact with a calendar and select days to see what tasks are due. It will re-render if changes are made to the 'taskList' state, which could be caused by new tasks pulled from the user's Canvas or their interactions with the TaskList component. ")),(0,s.kt)("h4",{id:"petprofpage"},"PetProfPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The PetProfPage component displays the state 'avatarInfo' and 'taskList', showing the user detailed stats on their pet and their overall progress. ")),(0,s.kt)("mermaid",{value:'classDiagram\n    Header *-- DropDownMenu\n\n    DropDownMenu "1"*--"3" DropDownItem\n    DropDownItem *--"routes to" CanvasIntegrationPage\n    DropDownItem *-- "routes to" AccountSettingsPage\n\n    class Header {\n        + str title\n        + Object userInfo   \n    }\n    class DropDownMenu {\n        + Array pages\n        + Object userInfo     \n        + handleClick()  \n    }\n    class DropDownItem {\n        + str title \n        + Object userInfo   \n        + handleClick()\n        + logout()\n    }\n    class CanvasIntegrationPage {\n        + Object userInfo   \n        + redirectTo()\n    }\n    class AccountSettingsPage {\n        + Object userInfo   \n        + changeEmail()\n        + changeUsername()\n        + changePassword()\n        + deleteAccount()        \n    }'}),(0,s.kt)("h3",{id:"figure-14-uml-class-diagram-header-react-components"},"Figure 1.4 UML Class Diagram: Header React Components"),(0,s.kt)("p",null,"Figure 1.4 shows the components that make up Header. Laying along the top, it displays the site's name and a DropDownMenu component for users to navigate to other pages. "),(0,s.kt)("h4",{id:"dropdownmenu"},"DropDownMenu"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When the DropDownMenu component is clicked it will display a list of DropDownItem components. These components allow the user to log out and navigate to the CanvasIntegrationPage and AccountSettingsPage components.")),(0,s.kt)("h4",{id:"canvasintegrationpage"},"CanvasIntegrationPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The CanvasIntegrationPage component will display text describing what the canvas integration will do, and have a button that will redirect users to complete the OAuth2 process.")),(0,s.kt)("h4",{id:"accountsettingspage"},"AccountSettingsPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The AccountSettingsPage component will display the user's information like username, email, last time logged in, etc, and there will be options for the user to change their email, password, username, and delete their account.")))}d.isMDXComponent=!0}}]);
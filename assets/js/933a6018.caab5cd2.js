"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1807],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),s=(t(7294),t(3905));const r={sidebar_position:3},i="Class Diagrams",o={unversionedId:"system-architecture/class-diagrams",id:"system-architecture/class-diagrams",title:"Class Diagrams",description:"Backend Class Diagram",source:"@site/docs/system-architecture/class-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/class-diagrams",permalink:"/project-virtual-pet/docs/system-architecture/class-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/system-architecture/class-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Christine Cho",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Component Descriptions",permalink:"/project-virtual-pet/docs/system-architecture/component-descriptions"},next:{title:"Sequence Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/sequence-diagrams"}},l={},c=[{value:"Backend Class Diagram",id:"backend-class-diagram",level:2},{value:"Frontend Class Diagram",id:"frontend-class-diagram",level:2},{value:"Figure 1.1 All React Components",id:"figure-11-all-react-components",level:5},{value:"App",id:"app",level:4},{value:"Main",id:"main",level:4},{value:"Site Mockup",id:"site-mockup",level:3},{value:"Figure 2. Site Mockup",id:"figure-2-site-mockup",level:5},{value:"PetDisplay Component",id:"petdisplay-component",level:3},{value:"Figure 1.2 PetDisplay Component",id:"figure-12-petdisplay-component",level:5},{value:"PetSprite",id:"petsprite",level:4},{value:"PetDescription and ProgressBar",id:"petdescription-and-progressbar",level:4},{value:"PageDisplay Component",id:"pagedisplay-component",level:3},{value:"Figure 1.3 PageDisplay Component",id:"figure-13-pagedisplay-component",level:5},{value:"NavBar",id:"navbar",level:4},{value:"TaskPage",id:"taskpage",level:4},{value:"InventoryPage",id:"inventorypage",level:4},{value:"CalendarPage",id:"calendarpage",level:4},{value:"ProgressPage",id:"progresspage",level:4},{value:"Header Component",id:"header-component",level:3},{value:"Figure 1.4 Header Component",id:"figure-14-header-component",level:5},{value:"DropDownMenu",id:"dropdownmenu",level:4},{value:"CanvasIntegrationPage",id:"canvasintegrationpage",level:4},{value:"AccountSettingsPage",id:"accountsettingspage",level:4},{value:"Django Class Diagram",id:"django-class-diagram",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,s.kt)("h2",{id:"backend-class-diagram"},"Backend Class Diagram"),(0,s.kt)("p",null,"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."),(0,s.kt)("h2",{id:"frontend-class-diagram"},"Frontend Class Diagram"),(0,s.kt)("mermaid",{value:'classDiagram\n    App *-- Header\n    App *-- Main\n\n    Header *-- DropDownMenu\n\n    DropDownMenu "1"*--"3" DropDownItem\n    DropDownItem *--"routes to" CanvasIntegrationPage\n    DropDownItem *-- "routes to" AccountSettingsPage\n\n    \n    \n\n    Main *-- PetDisplay\n    Main *-- PageDisplay\n\n    PetDisplay *-- PetSprite\n    PetDisplay *-- PetDescription\n    PetDisplay *-- ProgressBar\n\n    PageDisplay *-- NavBar\n    PageDisplay *-- TaskPage\n    PageDisplay *-- CalendarPage\n    PageDisplay *-- InventoryPage\n    PageDisplay *-- ProgressPage\n\n    NavBar "1" *-- "4" NavButton\n\n    TaskPage *-- TaskList\n    TaskPage *-- CreateTaskForm\n\n    TaskList "1" *-- "0.." TaskItem\n    TaskItem *-- TaskDetails\n\n    InventoryPage *-- ItemGrid\n    ItemGrid "1" *-- "0.."Item\n\n    CalendarPage *-- Calendar\n\n    ProgressPage *-- PPTaskList\n    PPTaskList *-- PPTaskItem\n    PPTaskItem *-- PPTaskDetails\n\n\n    \n    class App {\n        + Object userInfo    \n        + setUserInfo()\n        + fetchData()\n    }\n\n\n    class Header {\n        + str title\n        + Object userInfo  \n        + setUserInfo()\n    }\n    class DropDownMenu {\n        + Array pages\n        + Object userInfo     \n        + handleClick()\n        + setUserInfo()\n        \n    }\n    class DropDownItem {\n        + str title \n        + Object userInfo   \n        + handleClick()\n        + logout()\n        + setUserInfo()\n    }\n\n    class CanvasIntegrationPage {\n        + Object userInfo   \n        + redirectTo()\n\n    }\n\n    class AccountSettingsPage {\n        + Object userInfo   \n        + changeEmail()\n        + changeUsername()\n        + changePassword()\n        + deleteAccount()\n        + setUserInfo()\n\n        \n    }\n\n\n    class Main {\n        + Object avatarInfo\n        + Array inventory\n        + setAvatarInfo()\n        + setInventory()\n        + fetchData()\n    }\n\n\n\n    class PetDisplay {\n        + Object avatarInfo\n        + Array inventory\n        + setInventory()\n        + setAvatarInfo()\n    }\n    class PetSprite{\n        + Object avatarInfo\n        + Object sprite\n        + Array inventory\n\n        + setAvatarInfo()\n        + setInventory()\n        + setSprite()\n        + handleItemRelease()\n    }\n    class PetDescription{\n        + Object avatarInfo\n    }\n    class ProgressBar {\n        + Object avatarInfo\n    }\n\n    \n\n    class PageDisplay {\n        + setTaskList()\n        + setPageView()\n        + setInventory()\n        + setAvatarInfo()\n        + fetchData()\n        + Array taskList\n        + Array inventory\n        + int pageView\n        + Object avatarInfo\n    }\n\n    class NavBar {\n        + setPageView()\n        + int pageView\n    }\n\n    class NavButton {\n        + setPageView()\n        + handleClick()\n        + int pageView \n    }\n\n\n    class TaskPage {\n        + Array taskList\n        + setAvatarInfo()\n        + setTaskList()\n        + setInventory()\n    }\n    class TaskList{\n        + Array taskList\n        + setAvatarInfo()\n        + setTaskList()\n        + setInventory()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskItem {\n        + Object taskItem\n        + handleClick()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskDetails  {\n        + Object taskItem\n        + removeTask()\n        + updateTask()\n    }\n    class CreateTaskForm{\n        + setTaskList()\n        + addTask()\n        \n    }\n\n    class InventoryPage {\n        + Array inventory\n    }\n    class ItemGrid {\n        + Array inventory\n    }\n    class Item {\n        + handleClick()\n        + Object inventoryitem\n    }\n\n\n    class CalendarPage {\n        + Array taskList\n    }\n    class Calendar {\n        + Date currentDate\n        + displayTasks()\n        + handleClick()\n    }\n\n    class ProgressPage {\n        + Object avatarInfo\n        + Array taskList \n    }\n    class PPTaskList {\n        + Array taskList \n    }\n\n    class PPTaskItem {\n        + Object taskItem\n        + handleClick()\n    }\n\n    class PPTaskDetails {\n        + Object taskItem \n    }\n\n'}),(0,s.kt)("h5",{id:"figure-11-all-react-components"},"Figure 1.1 All React Components"),(0,s.kt)("p",null,"Figure 1.1 shows all the React components that make up the frontend of the StudyBuddy site."),(0,s.kt)("h4",{id:"app"},"App"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The App component is the entire site broken into smaller components. It first splinters into Main and Header. See ",(0,s.kt)("a",{parentName:"li",href:"#header-component"},"Figure 1.4")," to see the Header component. ")),(0,s.kt)("h4",{id:"main"},"Main"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The Main component owns the 'avatarInfo' and 'inventory' states so the components below can display and make changes to them. It's broken into the components PetDisplay and PageDisplay.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"See ",(0,s.kt)("a",{parentName:"li",href:"#petdisplay-component"},"Figure 1.2")," for the PetDisplay component. "),(0,s.kt)("li",{parentName:"ul"},"See ",(0,s.kt)("a",{parentName:"li",href:"#pagedisplay-component"},"Figure 1.3")," for the PageDisplay component.")))),(0,s.kt)("h3",{id:"site-mockup"},"Site Mockup"),(0,s.kt)("img",{src:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/blob/main/documentation/docs/system-architecture/mockup.png?raw=true",alt:"Site Mockup"}),(0,s.kt)("h5",{id:"figure-2-site-mockup"},"Figure 2. Site Mockup"),(0,s.kt)("h3",{id:"petdisplay-component"},"PetDisplay Component"),(0,s.kt)("mermaid",{value:"classDiagram\n    PetDisplay *-- PetSprite\n    PetDisplay *-- PetDescription\n    PetDisplay *-- ProgressBar\n\n    class PetDisplay {\n    + Object avatarInfo\n    + Array inventory\n    + setInventory()\n    + setAvatarInfo()\n    }\n    class PetSprite{\n        + Object avatarInfo\n        + Object sprite\n        + Array inventory\n\n        + setAvatarInfo()\n        + setInventory()\n        + setSprite()\n        + handleItemRelease()\n    }\n    class PetDescription{\n        + Object avatarInfo\n    }\n    class ProgressBar {\n        + Object avatarInfo\n    }"}),(0,s.kt)("h5",{id:"figure-12-petdisplay-component"},"Figure 1.2 PetDisplay Component"),(0,s.kt)("p",null,"Figure 1.2 shows the React components that make PetDisplay. This component will be fixed to the left side of the page, allowing users to always see and interact with their pet. "),(0,s.kt)("h4",{id:"petsprite"},"PetSprite"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The PetSprite component displays a sprite of the user's pet, and allows the user to drag items like candy to it from the InventoryPage component (See ",(0,s.kt)("a",{parentName:"li",href:"#figure-13-pagedisplay-component"},"Figure 1.3"),"). Candies will change the pet's 'avatarInfo' state, updating information like total EXP and the last time they were fed/interacted with. The 'inventory' state will also change since the user will have one less item from using the candy. The 'sprite' state will also change since a pet's mood can improve from receiving items. The 'sprite' state is owned by the PetSprite component so those changes will cause only that component to re-render.")),(0,s.kt)("h4",{id:"petdescription-and-progressbar"},"PetDescription and ProgressBar"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The components PetDescription and ProgressBar use the state 'avatarInfo' to display information about the user's pet like its name, mood, total EXP, etc. ")),(0,s.kt)("h3",{id:"pagedisplay-component"},"PageDisplay Component"),(0,s.kt)("mermaid",{value:'classDiagram\n\n    PageDisplay *-- NavBar\n    PageDisplay *-- TaskPage\n    PageDisplay *-- CalendarPage\n    PageDisplay *-- InventoryPage\n    PageDisplay *-- ProgressPage\n\n    NavBar "1" *-- "4" NavButton\n\n    TaskPage *-- TaskList\n    TaskPage *-- CreateTaskForm\n\n    TaskList "1" *-- "0.." TaskItem\n    TaskItem *-- TaskDetails\n\n    InventoryPage *-- ItemGrid\n    ItemGrid "1" *-- "0.."Item\n\n    CalendarPage *-- Calendar\n\n    ProgressPage *-- PPTaskList\n    PPTaskList *-- PPTaskItem\n    PPTaskItem *-- PPTaskDetails\n\n    class PageDisplay {\n        + setTaskList()\n        + setPageView()\n        + setInventory()\n        + setAvatarInfo()\n        + fetchData()\n        + Array taskList\n        + Array inventory\n        + int pageView\n        + Object avatarInfo\n    }\n\n    class NavBar {\n        + setPageView()\n        + int pageView\n    }\n\n    class NavButton {\n        + setPageView()\n        + handleClick()\n        + int pageView \n    }\n\n\n    class TaskPage {\n        + Array taskList\n        + setAvatarInfo()\n        + setTaskList()\n        + setInventory()\n    }\n    class TaskList{\n        + Array taskList\n        + setAvatarInfo()\n        + setTaskList()\n        + setInventory()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskItem {\n        + Object taskItem\n        + handleClick()\n        + removeTask()\n        + updateTask()\n    }\n    class TaskDetails  {\n        + Object taskItem\n        + removeTask()\n        + updateTask()\n    }\n    class CreateTaskForm{\n        + setTaskList()\n        + addTask()\n        \n    }\n\n    class InventoryPage {\n        + Array inventory\n    }\n    class ItemGrid {\n        + Array inventory\n    }\n    class Item {\n        + handleClick()\n        + Object inventoryitem\n    }\n\n\n    class CalendarPage {\n        + Array taskList\n    }\n    class Calendar {\n        + Date currentDate\n        + Array taskList\n        + displayTasks()\n\n    }\n\n    class ProgressPage {\n        + Object avatarInfo\n        + Array taskList \n    }\n    class PPTaskList {\n        + Array taskList \n    }\n\n    class PPTaskItem {\n        + Object pptaskItem\n        + handleClick()\n    }\n\n    class PPTaskDetails {\n        + Object pptaskItem \n    }\n'}),(0,s.kt)("h5",{id:"figure-13-pagedisplay-component"},"Figure 1.3 PageDisplay Component"),(0,s.kt)("p",null,"Figure 1.3 shows the React components that make PageDisplay. This component is fixed to the right side of the page, and it provides navigation to different pages that will help the user keep track of their task progress and pet. "),(0,s.kt)("h4",{id:"navbar"},"NavBar"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"By default the TaskPage is shown, but users can interact with the NavBar component to reach the other component pages like InventoryPage, CalendarPage, and ProgressPage. The PageDisplay component holds the state 'pageView', so when the user selects a NavButton component, the 'pageView' state will change and trigger a re-render to show the correct page.")),(0,s.kt)("h4",{id:"taskpage"},"TaskPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The TaskPage component's main purpose is to allow users to view, add, delete, and modify their tasks, which is stored in the state 'taskList'. The CreateTaskForm component will allow users to add a new task, and the TaskList component will allow users to select individual TaskItem components to update their progress, change details, or delete them. Further progress on tasks may result in the user receiving a candy, so the state 'inventory' can update due to user interactions with the TaskList component. ")),(0,s.kt)("h4",{id:"inventorypage"},"InventoryPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The InventoryPage component uses the state 'inventory' to show and keep track of what items the user has. This component will re-render when that state changes, which can be caused by the user's interactions with the TaskList and PetSprite component.")),(0,s.kt)("h4",{id:"calendarpage"},"CalendarPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The CalendarPage component holds the state 'taskList'. It allows users to interact with a calendar and select days to see what tasks are due. It will re-render if changes are made to the 'taskList' state, which could be caused by new tasks pulled from the user's Canvas or their interactions with the TaskList component. ")),(0,s.kt)("h4",{id:"progresspage"},"ProgressPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ProgressPage component shows the user detailed stats on their pet and their task progress using the 'avatarInfo' and 'taskList' states. The user's tasks are displayed with a PPTaskList component which is made up of PPTaskItems. When the user clicks on these componenets, a PPTaskDetails component will render, showing the user their progress on the selected task so far. They can not update the task from here. ")),(0,s.kt)("h3",{id:"header-component"},"Header Component"),(0,s.kt)("mermaid",{value:'classDiagram\n    Header *-- DropDownMenu\n\n    DropDownMenu "1"*--"3" DropDownItem\n    DropDownItem *--"routes to" CanvasIntegrationPage\n    DropDownItem *-- "routes to" AccountSettingsPage\n\n    class Header {\n        + str title\n        + Object userInfo   \n        + setUserInfo()\n    }\n    class DropDownMenu {\n        + Array pages\n        + Object userInfo     \n        + handleClick()  \n        + setUserInfo()\n    }\n    class DropDownItem {\n        + str title \n        + Object userInfo   \n        + handleClick()\n        + logout()\n        + setUserInfo()\n    }\n    class CanvasIntegrationPage {\n        + Object userInfo   \n        + redirectTo()\n    }\n    class AccountSettingsPage {\n        + Object userInfo   \n        + changeEmail()\n        + changeUsername()\n        + changePassword()\n        + deleteAccount()   \n        + setUserInfo()     \n    }'}),(0,s.kt)("h5",{id:"figure-14-header-component"},"Figure 1.4 Header Component"),(0,s.kt)("p",null,"Figure 1.4 shows the components that make up Header. Laying along the top, it displays the site's name and a DropDownMenu component for users to navigate to other pages. "),(0,s.kt)("h4",{id:"dropdownmenu"},"DropDownMenu"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When the DropDownMenu component is clicked it will display a list of DropDownItem components. These components allow the user to log out and navigate to the CanvasIntegrationPage and AccountSettingsPage components.")),(0,s.kt)("h4",{id:"canvasintegrationpage"},"CanvasIntegrationPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The CanvasIntegrationPage component will display text describing what the canvas integration will do, and have a button that will redirect users to complete the OAuth2 process.")),(0,s.kt)("h4",{id:"accountsettingspage"},"AccountSettingsPage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The AccountSettingsPage component will display the user's information like username, email, last time logged in, etc, and there will be options for the user to change their email, password, username, and delete their account. ")),(0,s.kt)("h2",{id:"django-class-diagram"},"Django Class Diagram"),(0,s.kt)("mermaid",{value:'---\ntitle: Brain Buddies API Class Diagram\n---\nclassDiagram\n\n\n\n\n    UserView <--\x3e UserSerializer\n    UserView <--\x3e UserMetaSerializer\n    UserMetaView <--\x3e UserMetaSerializer\n    AvatarView <--\x3e AvatarSerializer\n    InventoryView <--\x3e InventorySerializer\n    TaskView <--\x3e TaskSerializer\n\n    InitializerView o-- UserSerializer\n    InitializerView o-- AvatarSerializer\n    InitializerView o-- TaskSerializer\n    InitializerView o-- InventorySerializer\n    InitializerView o-- UserMetaSerializer\n\n    UserAvatarListView o-- UserSerializer\n    UserAvatarListView o-- AvatarSerializer\n\n    UserInventoryListView o-- UserSerializer\n    UserInventoryListView o-- InventorySerializer\n    \n    UserTaskListView o-- UserSerializer\n    UserTaskListView o-- TaskSerializer\n\n\n    class UserSerializer{\n        -String username\n        -String firstName\n        -String lastName\n        -string email\n        -datetime lastLogin\n        -datetime dateJoined\n\n\n        +getUserInfo(String username): JSON "username,firstName,lastName,email" \n        +getUserDateInfo(String username): JSON "lastLogin,dateJoined"\n    }\n    class AvatarSerializer{\n        -int avatarId\n        -String owner "match username from USER table"\n        -String avatarName\n        -String avatarType \n        -int totalXp\n        -datetime lastInteraction\n        -datetime lastFeed\n\n        +getAvatarList(String username): int[] "avatarId"\n        +getAvatarInfo(String username,int avatarId): JSON "avatarName,avatarType,totalXp,mood"\n        +getMood(String username,int avatarId): String "calculate mood based on last interaction and feeding and return as string"\n        \n    }\n    class TaskSerializer{\n        -int taskId\n        -String username\n        -datetime dueDate\n        -bool completed\n        -bool recurring\n        -int recurrenceTimeDelta\n        -String course\n        -String description\n\n        +getTaskList(String username):JSON[] "array task objects"\n        +getTask(int taskId)\n\n    }\n    class InventorySerializer{\n        -int inventoryId\n        -String candyBaseType \n        -int candyLevel\n        -int quantity\n\n        +getInventoryList(String username):JSON[] "array of inventory objects"\n        \n    }\n\n    class UserMetaSerializer{\n        -charfield username\n        -datetime birthday\n        -textfield description\n\n        +getUserMeta(String username):JSON "usermeta object"\n    }\n\n    class UserView{\n\n        +createUser(JSON userObject)\n        +update(JSON userObject) \n        +delete(String username) "cascades to destroy all related data"\n    }\n    class AvatarView{\n        \n        +create(String username, JSON avatarObject)\n        +update(JSON avatarObject)\n        +delete(int avatarId)\n    }\n    class InventoryView{\n        +create(String username, JSON inventoryObject) "can fail if attempt to create inventory slot for same base and level"\n        +update(JSON inventoryObject)\n        +destroy(int inventoryId)\n    }\n    class TaskView{\n        +create(String username, JSON taskObject)\n        +update(JSON taskObject)\n        +destroy(int taskId)\n    }\n    class UserMetaView{\n        +create(String username, JSON userMetaObject)\n        +update(JSON oldMetaObject, JSON newMetaObject) \n        -destroy(String username) "private because cascade will destroy automatically"\n    }\n    class InitializerView{\n        \n        +getUserFullDescription(String username): JSON[] "returns deeply nested array containing all information needed to render home page"\n    }\n\n    class UserAvatarListView{\n\n        +getAvatarList(String username): JSON[] \n\n    }\n    class UserInventoryListView{\n        +getUserInventoryList(String username): JSON[]\n        \n\n    }\n    class UserTaskListView{\n        +getUserTaskList(String username): JSON[]\n    }\n\n'}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This class diagram shows the relations between serializer and view classes in our Django backend. \nEach serializer acts as an adapter for the tables in our database. \nThe view classes represent the functionality of each URL endpoint that will be specified in our API.\n")))}d.isMDXComponent=!0}}]);
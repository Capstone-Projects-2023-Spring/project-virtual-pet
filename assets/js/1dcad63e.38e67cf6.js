"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8968],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(t),g=s,m=l["".concat(p,".").concat(g)]||l[g]||u[g]||i;return t?n.createElement(m,r(r({ref:a},d),{},{components:t})):n.createElement(m,r({ref:a},d))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[l]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(7462),s=(t(7294),t(3905));const i={sidebar_position:4},r="Sequence Diagrams",o={unversionedId:"system-architecture/sequence-diagrams",id:"system-architecture/sequence-diagrams",title:"Sequence Diagrams",description:"Use Case 1",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-virtual-pet/docs/system-architecture/sequence-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Christine",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Class Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/class-diagrams"},next:{title:"Database Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/database-diagrams"}},p={},c=[{value:"Use Case 1",id:"use-case-1",level:2},{value:"Use Case 2",id:"use-case-2",level:2},{value:"Use Case 3",id:"use-case-3",level:2},{value:"Use Case 4",id:"use-case-4",level:2},{value:"Use Case 5",id:"use-case-5",level:2},{value:"Use Case 6",id:"use-case-6",level:2},{value:"Use Case 7",id:"use-case-7",level:2}],d={toc:c};function l(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,s.kt)("h2",{id:"use-case-1"},"Use Case 1"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As a user, it is important that I can create an account so that I can maintain my pet\u2019s growth and my task progress.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\ntitle Account Creation\n    actor u as User\n    participant a as App\n    participant pf as ProfileCreationView\n    participant ps as PetSelectionView\n    participant pc as PetSelectionCard\n    participant mp as Main\n    participant api as APIMiddleware\n\n    u ->>+a: navigate to the site - https://studybuddy.life\n    a ->>+pf: render(): route to profile creation page\n    pf ->> api: PUT (HTTP) Content-Type: JSON userObject\n    api --\x3e pf: HTTP 200\n    pf --\x3e-a: return profile created\n    a ->>+ps: render(): route to pet selection page\n    ps ->>+pc: render(): generate pet selection cards and present to user\n    u ->> pc: select pet rock\n    pc ->> api: PUT (HTTP) Content-Type: JSON {userid:petObject{}}\n    api --\x3e pc: HTTP 200\n    pc --\x3e-ps: return confirmed creation\n    ps --\x3e-a: return confirmed creation\n    a ->>+ mp: render()\n    mp ->> api: GET (HTTP) initialization routine for main page\n    api --\x3e mp: HTTP 200 Content-Type: JSON[] user total contents \n\n    deactivate mp\n    deactivate a\n"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. Upon accessing the web application for the first time at studybuddy.life, the user is directed to a landing page. There are buttons for creating an account and logging in.\n2. The user selects the 'Register' button to access the account registration form.\n3. The user inputs their username, email address, password, and other optional fields, and clicks the 'Sign Up' button to submit the form. If the information is valid, the user is notified that their account creation was successful.\n4. The user selects the 'Sign In' link to access the sign-in page, and enters in their email and password.\n5. Since the user is logging in for the first time, they are redirected to a pet selection page where they can click through a carousel of different cats and a rock.\n6. The user chooses the rock and names it.\n7. The site redirects the user to the home page of the site where they can see their pet at level.\n")),(0,s.kt)("h2",{id:"use-case-2"},"Use Case 2"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As a user, I want to be able to log into an account to view my my progress and tasks.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\ntitle Signing In\n    actor User\n    participant HomePage\n    participant LoginPage\n    participant APIMiddleware\n\n    User->>+LoginPage: User navigates to the login page and submits their credentials\n    LoginPage->>APIMiddleware: POST (HTTP) username, password\n    APIMiddleware--\x3e>LoginPage: HTTP 200 Content-Type: JSON[] refresh token, access token\n    LoginPage->>LoginPage: Set Auth. Tokens in Local Storage\n    LoginPage->>LoginPage: Set User State in application\n    LoginPage->>-User: User is logged in\n    User->>HomePage: User is redirected to the home page and has access to the applications"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. The user accesses the site by going to 'studybuddy.life'. \n2. The user selects the 'Login' button to access the sign-in page.\n3. The user enters their email address and password.\n4. If the credentials are valid, The user is redirected to the home page where they can see their pet and their tasks. If not, the user will be notified that the credentials are invalid. \n")),(0,s.kt)("h2",{id:"use-case-3"},"Use Case 3"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As a user, I want to keep my pet happy and help it grow by completing tasks and receiving candies.")),(0,s.kt)("mermaid",{value:'sequenceDiagram\ntitle Feeding the Pet\n    actor User\n    participant Main\n    participant PageDisplay\n    participant PetProfPage\n    participant InventoryPage\n    participant Inventory\n    participant PetDisplay\n    participant PetSprite\n    participant ProgressBar\n    participant APIMiddleware\n\n    %%set up pet display \n    activate Main\n    Main ->>+ PetDisplay: fetchData\n    activate PetDisplay\n    PetDisplay ->> APIMiddleware: GET (HTTP) avatarInfo\n    activate APIMiddleware\n    APIMiddleware --\x3e> PetDisplay: HTTP 200 Content-Type: JSON avatarInfo\n    deactivate APIMiddleware\n    Main ->> PetDisplay: render\n    \n    \n    %% set up inventory page display\n    User ->>InventoryPage: User navigates to the "Inventory Page"\n    activate User\n    Main ->> InventoryPage: fetchData\n    activate InventoryPage\n    InventoryPage ->> APIMiddleware: GET (HTTP) inventory\n    activate APIMiddleware\n    APIMiddleware --\x3e> InventoryPage: HTTP 200 Content-Type: JSON[] inventory\n    deactivate APIMiddleware\n    Main ->> InventoryPage: render\n    InventoryPage ->> Inventory: display candies in inventory\n    activate Inventory\n\n    %% click/hold\n    User ->> Inventory: User clicks and holds a candy item to feed the avatar\n    Inventory ->> Main: Update inventory and avatar information\n    deactivate Inventory\n    Main ->> APIMiddleware: PUT (HTTP) avatarInfo, inventory\n    activate APIMiddleware\n    APIMiddleware --\x3e> Main: HTTP 200 success\n    deactivate APIMiddleware\n    \n    Main ->> PetDisplay: render\n    Main ->> InventoryPage: render\n    PetDisplay ->> PetSprite: trigger eating animation\n    activate PetSprite\n    PetDisplay ->> ProgressBar: EXP in avatarInfo increases\n    activate ProgressBar\n    \n    deactivate PetDisplay\n    deactivate Main\n    deactivate User\n    deactivate PetSprite\n    deactivate ProgressBar\n    deactivate InventoryPage'}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagram displays the way in which the user can feed candies collected from completing tasks to their avatar by clicking and holding on candies\nfrom the Inventory Page.\n\n1. The user navigates to the inventory page.\n2. The user can see their collection of candies. Candy types are based on completion of tasks of different sizes and levels.\n3. The user clicks and holds a candy to feed their pet. As a result, the pet becomes visibly happy and it gains EXP.\n")),(0,s.kt)("h2",{id:"use-case-4"},"Use Case 4"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As a user, I want to import my Canvas assignments.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\ntitle Canvas Integration\n    actor User\n    participant App\n    participant Main\n    participant Header\n    participant TaskPage\n    participant DropDownMenu\n    participant DropDownItem\n    participant CanvasIntegrationPage\n    participant APIMiddleware\n    participant CanvasAPI\n    \n    %% User goes to Canvas Integration page + Submits token\n    activate User\n    activate App\n    User ->> DropDownMenu: User clicks to open drop down options\n    activate DropDownMenu \n    DropDownMenu ->> DropDownItem: handleClick to open page\n    deactivate DropDownMenu \n    activate DropDownItem\n    DropDownItem ->> CanvasIntegrationPage: routes to Canvas Integration\n    deactivate DropDownItem\n    activate CanvasIntegrationPage\n    User ->> CanvasIntegrationPage: User reads the instructions, generates a token, and submits it\n    CanvasIntegrationPage ->> APIMiddleware: PUT (HTTP) userInfo\n    activate APIMiddleware\n    APIMiddleware --\x3e>CanvasIntegrationPage:  HTTP 200 Content-Type: JSON{} userInfo\n    deactivate APIMiddleware\n    CanvasIntegrationPage ->> Main: Redirect to Main\n    activate Main\n    deactivate CanvasIntegrationPage\n\n    %% User clicks canvas button\n    User ->> Header : Clicks Canvas fetch/update assignments button\n    activate Header\n    Header ->> APIMiddleware: GET (HTTP) /canvas/\n    activate APIMiddleware\n    APIMiddleware ->> CanvasAPI: Fetch courses and assignments from user's Canvas account\n    activate CanvasAPI\n    CanvasAPI --\x3e> APIMiddleware: HTTP 200 - [] Canvas Assignments\n    deactivate CanvasAPI\n    APIMiddleware --\x3e> Header : HTTP 200\n    deactivate APIMiddleware \n    Header ->> App: Reload\n    App ->> Main: render\n    Main ->> TaskPage: render - new tasks loaded from Canvas\n    activate CanvasAPI\n\n    deactivate User\n    deactivate CanvasAPI\n    deactivate App\n    deactivate Main\n    deactivate Header"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"This sequence diagrams shows how a user can link Canvas to their Virtual Pet Study Buddy. The user will navigate to the \nCanvasIntegrationPage (after creating an account and profile). They will be provided instructions on how to retrieve and submit a Canvas token.\nAfter a successful token submission, the user's canvas assignments can be imported and updated. \n\n1. The user navigates to the 'Canvas Integration' page.\n2. The user reads a set of instructions guiding them on how to import Canvas assignments using a token.\n3. The user copies and pastes their token into an input box and submits.\n4. Once the token is successfully saved, a button with the canvas logo will appear in the header for desktop and footer for mobile.\n5. The user can click the button to import their assignments for the first time, or update existing Canvas assignments.\n6. Once the assignments are imported, the user sees them listed on the task page.\n")),(0,s.kt)("h2",{id:"use-case-5"},"Use Case 5"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As a user, I want to create my own tasks.")),(0,s.kt)("mermaid",{value:'sequenceDiagram\ntitle Task Creation\n    actor u as User\n    participant PageDisplay\n    participant TaskPage\n    participant TaskList\n    participant CreateTaskForm\n    \n    participant APIMiddleware\n    PageDisplay ->> PageDisplay: fetchData\n    PageDisplay ->> APIMiddleware: GET (HTTP) taskList\n    APIMiddleware --\x3e> PageDisplay: HTTP 200 Content-Type: JSON[] taskList\n    PageDisplay ->> TaskPage: render\n    TaskPage ->> TaskList: render\n    u ->>+ CreateTaskForm: User selects the "Create Task" button and fills out form\n    CreateTaskForm --\x3e> CreateTaskForm: addTask()\n    deactivate CreateTaskForm\n    PageDisplay ->> APIMiddleware: CREATE (HTTP) task\n    APIMiddleware --\x3e> PageDisplay: HTTP 200 Content-Type: JSON[] taskList\n    PageDisplay --\x3e> PageDisplay: rerender components\n    PageDisplay ->> TaskPage: render\n    TaskPage ->> TaskList: render'}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. The user logs into their profile.\n2. The user selects the \u201cCreate Task\u201d button on the task page.\n3. The user fills out the 'Create Task' form with information like a title, description, estimated time to complete a task, a due date, and tags for sorting.\n4. The user selects the 'Create' button. They can now see this task on the task page.\n")),(0,s.kt)("h2",{id:"use-case-6"},"Use Case 6"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As a user, I want my study app to help me organize and keep track of my tasks by allowing me to update and sort them.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    title Task Filtering \n    actor User as User\n    participant PageDisplay\n    participant TaskPage\n    participant TaskList\n    participant TaskItem\n    participant APIMiddleware\n    \n    activate PageDisplay\n    PageDisplay ->> PageDisplay: fetchData\n    PageDisplay ->> APIMiddleware: GET (HTTP) taskList\n    activate APIMiddleware\n    APIMiddleware --\x3e> PageDisplay: HTTP 200 Content-Type: JSON[] taskList\n    deactivate APIMiddleware\n    PageDisplay ->> TaskPage: render\n    activate TaskPage\n    TaskPage ->> TaskList: render\n    activate TaskList\n    TaskList ->> TaskItem: renders multiple\n    activate TaskItem\n    \n\n    User->>TaskPage: User selects the filter button\n    User->>TaskPage: User checks off the 'Canvas Assignments' box\n    deactivate TaskItem\n    TaskPage->>TaskList: renders Canvas assignments only\n    TaskList ->> TaskItem: renders multiple Canvas assignments\n    activate TaskItem\n\n    User->>TaskPage: User selects the filter button\n    User->>TaskPage: User unchecks the 'Canvas Assignments' box\n    User->>TaskPage: User checks the 'My Tasks' box\n    deactivate TaskItem\n    TaskPage->>TaskList: renders user-made tasks only\n    TaskList ->> TaskItem: renders multiple user-made tasks\n    activate TaskItem\n\n    deactivate PageDisplay\n    deactivate TaskPage\n    deactivate TaskList\n    deactivate TaskItem\n    "}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. The user logs into their profile. They want to view their Canvas courses and user-made tasks separately. \n2. From the task page, the user selects the filter button next to the 'Create Task' button and sorts tasks by the 'Canvas Assignments' tag. The user can now see all their Canvas assignments.\n3. The user un-checks the 'Canvas Assignment' tag and checks the 'My Tasks' tag. They can now only see the tasks they've made.\n")),(0,s.kt)("h2",{id:"use-case-7"},"Use Case 7"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As a user, I want to help improve my pet's mood if I forget to complete a task.")),(0,s.kt)("mermaid",{value:"sequenceDiagram\ntitle Improve Pet Mood\n    actor u as User\n    participant Main\n    participant PetDisplay\n    participant PetSprite\n    participant PageDisplay\n    participant TaskPage\n    participant TaskList\n    participant TaskItem\n    participant TaskDetails\n    participant APIMiddleware\n    Main ->> Main: fetchData()\n    Main ->> APIMiddleware: GET (HTTP) avatarInfo\n    APIMiddleware --\x3e> Main: HTTP 200 Content-Type: JSON avatarInfo\n    Main ->> PetDisplay: render\n    PetDisplay ->> PetSprite: render\n    Main ->> PageDisplay: render\n\n    \n    PageDisplay ->> APIMiddleware: GET (HTTP) taskList\n    APIMiddleware --\x3e> PageDisplay: HTTP 200 Content-Type: JSON[] taskList\n\n    u ->> Main: User has an assignment that is now past due\n    Main ->> PetDisplay: setAvatarInfo()\n    PetDisplay ->> PetSprite: render\n    PetSprite ->> PetSprite: setSprite(upset)\n    PetSprite ->> PetSprite: render\n    Main ->> PageDisplay: render\n    PageDisplay ->> TaskPage: render\n    TaskPage ->> TaskList: render\n    TaskList ->> TaskItem: render\n    u ->>+ TaskItem: User selects a past due task \n    TaskItem ->>+ TaskDetails: renders\n    deactivate TaskItem\n    u ->>+ TaskDetails: User marks the late task as complete\n    TaskDetails ->> TaskDetails: updateTask()  \n    deactivate TaskDetails\n\n\n\n    PageDisplay->>APIMiddleware: PUT (HTTP) task, inventory\n    APIMiddleware--\x3e>PageDisplay: HTTP 200 Content-Type: JSON[] taskList, JSON[] inventory\n    PageDisplay --\x3e> PageDisplay: rerender components\n    Main ->> PetDisplay: render\n    PetDisplay ->> PetSprite: render\n\n    Main ->> PageDisplay: render\n    "}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. The user has an overdue task. As a result, the pet is visibly upset.\n2. The user checks off the assignment as finished and receives a candy.\n3. The user feeds their pet as described in Use Case 3.\n4. The pet's mood improves and becomes visibly happy.\n")))}l.isMDXComponent=!0}}]);
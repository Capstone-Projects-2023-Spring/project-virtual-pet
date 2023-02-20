"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8968],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>P});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(t),g=s,P=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return t?n.createElement(P,i(i({ref:a},l),{},{components:t})):n.createElement(P,i({ref:a},l))}));function P(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=g;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));const r={sidebar_position:4},i="Sequence Diagrams",o={unversionedId:"system-architecture/sequence-diagrams",id:"system-architecture/sequence-diagrams",title:"Sequence Diagrams",description:"Use Case 1",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-virtual-pet/docs/system-architecture/sequence-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"jay-newman",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Class Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/class-diagrams"},next:{title:"Algorithms",permalink:"/project-virtual-pet/docs/system-architecture/algorithms"}},c={},p=[{value:"Use Case 1",id:"use-case-1",level:2},{value:"Use Case 2",id:"use-case-2",level:2},{value:"Use Case 3",id:"use-case-3",level:2},{value:"Use Case 4",id:"use-case-4",level:2},{value:"Use Case 5",id:"use-case-5",level:2},{value:"As a user, I want to have my study app stay up to date on my progress towards my study goals.",id:"as-a-user-i-want-to-have-my-study-app-stay-up-to-date-on-my-progress-towards-my-study-goals",level:3},{value:"Use Case 6",id:"use-case-6",level:2},{value:"Use Case 7: As a user, I want to be able to log into an account so that my progress and tasks will be saved.",id:"use-case-7-as-a-user-i-want-to-be-able-to-log-into-an-account-so-that-my-progress-and-tasks-will-be-saved",level:2},{value:"Use Case 8",id:"use-case-8",level:2}],l={toc:p};function d(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,s.kt)("h2",{id:"use-case-1"},"Use Case 1"),(0,s.kt)("mermaid",{value:'sequenceDiagram\ntitle Feeding Candies to Progress\n    actor User\n    participant Main\n    participant PageDisplay\n    participant PetProfPage\n    participant InventoryPage\n    participant PetSprite\n    participant ProgressBar\n    participant APIMiddleware\n\n    %%set up pet display \n    activate Main\n    Main ->>+ PetDisplay: fetchData\n    activate PetDisplay\n    PetDisplay ->> APIMiddleware: GET (HTTP) avatarInfo\n    activate APIMiddleware\n    APIMiddleware --\x3e> PetDisplay: HTTP 200 Content-Type: JSON avatarInfo\n    Main ->> PetDisplay: render\n\n    activate User\n    User ->>InventoryPage: User navigates to the "Inventory Page"\n\n    %% set up inventory page display\n    Main ->> InventoryPage: fetchData\n    activate InventoryPage\n    InventoryPage ->> APIMiddleware: GET (HTTP) inventory\n    APIMiddleware --\x3e> InventoryPage: HTTP 200 Content-Type: JSON[] inventory\n    Main ->> Inventory: render\n    InventoryPage ->> Inventory: display candies in inventory\n    \n    %% pick up candies\n    User ->> InventoryPage: User picks up candy from inventory\n    InventoryPage ->> APIMiddleware: POST (HTTP) inventory \n    APIMiddleware --\x3e> InventoryPage: HTTP 200 success\n    Inventory ->> Inventory: Update inventory to remove candy\n    Main ->> InventoryPage: render\n\n    %% drag/drop\n    User ->> PetSprite: User drags and drops candy on avatar\n    activate PetSprite\n    Main ->> PetDisplay: render\n    PetSprite ->> PetDisplay: trigger eating animation\n    PetDisplay ->> ProgressBar: EXP in avatarInfo increases\n    PetDisplay ->> APIMiddleware: POST (HTTP) avatarInfo\n    APIMiddleware --\x3e> PetDisplay: HTTP 200 success\n    deactivate PetDisplay\n    Main ->> ProgressBar: render/update\n\n    deactivate Main\n    deactivate User\n    deactivate APIMiddleware\n    deactivate InventoryPage\n    deactivate PetSprite'}),(0,s.kt)("p",null,"This sequence diagram displays the way in which the user can feed candies collected from completing tasks to their avatar by dragging and dropping candies from the Inventory Page to their avatar which is shown in the Pet Display. "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The user navigates to the InventoryPage in the PageDisplay portion of the screen on the right. The inventory data is fetched through an API call."),(0,s.kt)("li",{parentName:"ol"},"The user views a set of acquired rewards on the InventoryPage in the form of \u2018candies\u2019 which are contained as Items in an ItemGrid in the Inventory."),(0,s.kt)("li",{parentName:"ol"},"The user drags a 'candy' to the avatar, and the Inventory is updated to reflect the removal of a candy. An API call updates the inventory list."),(0,s.kt)("li",{parentName:"ol"},"The user drops the 'candy' onto their avatar on the lefthand side of the screen, and it shows an eating animation and a satisfied animation."),(0,s.kt)("li",{parentName:"ol"},"The avatarInfo is updated which contains the EXP data, which causes the progress bar to update, increasing when the \u2018candy\u2019 is consumed.")),(0,s.kt)("h2",{id:"use-case-2"},"Use Case 2"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor User\n    participant App\n    participant Main\n    participant Header\n    participant DropDownMenu\n    participant DropDownItem\n    participant CanvasIntegrationPage\n    participant CanvasAPI\n\n    activate User\n    User ->> DropDownMenu: User clicks to open drop down options\n    activate DropDownMenu \n    DropDownMenu ->> DropDownItem: handleClick to open page\n    activate DropDownItem\n    DropDownItem ->> CanvasIntegrationPage: routes to Canvas Integration\n    activate CanvasIntegrationPage\n    CanvasIntegrationPage ->> User: Prompt user to sign on through SSO \n    User ->> CanvasIntegrationPage: User signs in externally and it is accepted\n    CanvasIntegrationPage ->> CanvasAPI: fetch courses and assignments from user's Canvas account\n    activate CanvasAPI\n    CanvasIntegrationPage ->> App: update userInfo\n    activate App\n\n\n    deactivate User\n    deactivate DropDownMenu \n    deactivate DropDownItem\n    deactivate CanvasIntegrationPage\n    deactivate CanvasAPI\n    deactivate App"}),(0,s.kt)("p",null,"This sequence diagrams shows how a user can link Canvas to their Virtual Pet Study Buddy. The user will navigate to the CanvasIntegrationPage (after creating an account and profile). They will be prompted to sign in with SSO authentication. After a successful sign-in, the user's data will be updated such that their assignments and courses will be imported into their account."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The user creates an account and profile as described in Use Case 8."),(0,s.kt)("li",{parentName:"ol"},"The user navigates to the Canvas Integration section of the site."),(0,s.kt)("li",{parentName:"ol"},"The user signs on through SSO."),(0,s.kt)("li",{parentName:"ol"},"Courses as assignment data are imported into the user's info.")),(0,s.kt)("h2",{id:"use-case-3"},"Use Case 3"),(0,s.kt)("h2",{id:"use-case-4"},"Use Case 4"),(0,s.kt)("h2",{id:"use-case-5"},"Use Case 5"),(0,s.kt)("h3",{id:"as-a-user-i-want-to-have-my-study-app-stay-up-to-date-on-my-progress-towards-my-study-goals"},"As a user, I want to have my study app stay up to date on my progress towards my study goals."),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    title Updating Task Progress\n    actor User as User\n    participant PageDisplay\n    participant TaskPage\n    participant TaskList\n    participant TaskItem\n    participant TaskDetails\n    participant APIMiddleware\n    \n    PageDisplay ->> PageDisplay: fetchData\n    PageDisplay ->> APIMiddleware: GET (HTTP) taskList\n    APIMiddleware --\x3e> PageDisplay: HTTP 200 Content-Type: JSON[] taskList\n    PageDisplay ->> TaskPage: render\n    TaskPage ->> TaskList: render\n\n    User->>TaskItem: User selects a task to view details\n    TaskItem->>TaskDetails: render\n\n    User ->>+ TaskDetails: User updates progress by indicating they're half-way through\n    TaskDetails ->> TaskDetails: updateTask()\n    deactivate TaskDetails\n\n    PageDisplay ->> APIMiddleware: UPDATE (HTTP) task, inventory\n    APIMiddleware--\x3e>+PageDisplay: HTTP 200 Content-Type: JSON[] taskList, JSON[] inventory\n    PageDisplay--\x3e>PageDisplay: rerender\n    \n    PageDisplay->>TaskPage: render\n    TaskPage->>TaskList: render\n    TaskList->>TaskItem: render\n    "}),(0,s.kt)("h2",{id:"use-case-6"},"Use Case 6"),(0,s.kt)("mermaid",{value:"sequenceDiagram\ntitle Tracking Task Progress\n    actor u as User\n    participant Main\n    participant PageDisplay\n    participant PetProfPage\n    participant PPTaskList\n    participant PPTaskItem\n    participant PPTaskDetails\n    participant APIMiddleware\n    Main ->> Main: fetchData()\n    Main ->> APIMiddleware: GET (HTTP) avatarInfo\n    APIMiddleware --\x3e> Main: HTTP 200 Content-Type: JSON avatarInfo\n    Main ->> PageDisplay: render\n    PageDisplay ->> PageDisplay: fetchData\n    PageDisplay ->> APIMiddleware: GET (HTTP) taskList\n    APIMiddleware --\x3e> PageDisplay: HTTP 200 Content-Type: JSON[] taskList\n    u ->>+PetProfPage: User selects 'Pet Profile' page\n    PetProfPage ->>PPTaskList: render\n    PPTaskList ->>PPTaskItem: render\n    u ->>+ PPTaskItem: User selects a specific task under pet profile\n    PPTaskItem ->> PPTaskDetails: render\n    deactivate PetProfPage\n    deactivate PPTaskItem"}),(0,s.kt)("p",null,"This sequence diagram displays the way in which the user can use the Pet Profile page to see more information about their progress, as shown in Use Case 6. By selecting a task under the pet profile page, they can see their current progress towards completing it, as well as the time remaining before the deadline (whether it be a self-set deadline, or one imposed by Canvas)."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The avatar information is retrieved through an API call."),(0,s.kt)("li",{parentName:"ol"},"The page display component is rendered."),(0,s.kt)("li",{parentName:"ol"},"The list of tasks is retrieved through an API call."),(0,s.kt)("li",{parentName:"ol"},"The user selects 'Pet Profile' page, and selects a specific task to see more information."),(0,s.kt)("li",{parentName:"ol"},"The pet profile page renders the task list, task item, and task details components.")),(0,s.kt)("h2",{id:"use-case-7-as-a-user-i-want-to-be-able-to-log-into-an-account-so-that-my-progress-and-tasks-will-be-saved"},"Use Case 7: As a user, I want to be able to log into an account so that my progress and tasks will be saved."),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    actor User\n    participant HomePage\n    participant LoginPage\n    participant APIMiddleware\n\n    User->>+LoginPage: User navigates to the login page and submits their credentials\n    LoginPage->>APIMiddleware: POST (HTTP) username, password\n    APIMiddleware--\x3e>LoginPage: HTTP 200 Content-Type: JSON[] refresh token, access token\n    LoginPage->>LoginPage: Set Auth. Tokens in Local Storage\n    LoginPage->>LoginPage: Set User State in application\n    LoginPage->>-User: User is logged in\n    User->>HomePage: User is redirected to the home page and has access to the applications"}),(0,s.kt)("h2",{id:"use-case-8"},"Use Case 8"))}d.isMDXComponent=!0}}]);
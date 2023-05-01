"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=s(a),c=l,d=k["".concat(u,".").concat(c)]||k[c]||m[c]||i;return a?n.createElement(d,r(r({ref:t},o),{},{components:a})):n.createElement(d,r({ref:t},o))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[k]="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:1},r="Frontend Unit Tests",p={unversionedId:"testing-plan/unit-testing",id:"testing-plan/unit-testing",title:"Frontend Unit Tests",description:"For All React Component Tests",source:"@site/docs/testing-plan/unit-testing.md",sourceDirName:"testing-plan",slug:"/testing-plan/unit-testing",permalink:"/project-virtual-pet/docs/testing-plan/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/testing-plan/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Katrina Janeczko",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-virtual-pet/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-virtual-pet/docs/testing-plan/integration-testing"}},u={},s=[{value:"For All React Component Tests",id:"for-all-react-component-tests",level:2},{value:"Mock Objects / Calls",id:"mock-objects--calls",level:2},{value:"React Component Unit Tests",id:"react-component-unit-tests",level:2},{value:"App",id:"app",level:3},{value:"DropDownMenu",id:"dropdownmenu",level:3},{value:"DropDownItem",id:"dropdownitem",level:3},{value:"CanvasIntegrationPage",id:"canvasintegrationpage",level:3},{value:"AccountSettingsPage",id:"accountsettingspage",level:3},{value:"Main",id:"main",level:3},{value:"PetSprite",id:"petsprite",level:3},{value:"PageDisplay",id:"pagedisplay",level:3},{value:"NavButton",id:"navbutton",level:3},{value:"TaskItem",id:"taskitem",level:3},{value:"TaskDetails",id:"taskdetails",level:3},{value:"CreateTaskForm",id:"createtaskform",level:3},{value:"Item",id:"item",level:3},{value:"Calendar",id:"calendar",level:3},{value:"PPTaskItem",id:"pptaskitem",level:3}],o={toc:s};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"frontend-unit-tests"},"Frontend Unit Tests"),(0,l.kt)("h2",{id:"for-all-react-component-tests"},"For All React Component Tests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Not every React component from the class diagram will have their tests described in this document to avoid repetition.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Each React component will have its own test file with at a least one test case. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Every test file will check that the React component has rendered.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Every React component that updates state variables will have tests to verify that they are being updated correctly.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For example: "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test component was correctly rendered."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User action results in component appearing on screen. "))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Component is rendered and mounted on the DOM."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test states being updated."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-1"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function used to update state is called."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-1"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The component is re-rendered with updated state value.")))))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"mock-objects--calls"},"Mock Objects / Calls"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mock versions of the user's personal information, inventory, tasks, and pet details will be used for the tests."),(0,l.kt)("li",{parentName:"ul"},"Mock calls will be used to simulate interactions with the backend. ")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"react-component-unit-tests"},"React Component Unit Tests"),(0,l.kt)("h3",{id:"app"},"App"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test fetching of user data from backend.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-2"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Logged in user opens application."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-2"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to fetchData(), which calls setUserInfo()."),(0,l.kt)("li",{parentName:"ul"},"On success, values stored in userInfo is updated."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"dropdownmenu"},"DropDownMenu"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test user clicking on DropDownMenu component.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-3"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on component."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-3"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"handleClick() is called, DropDownItems are rendered."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"dropdownitem"},"DropDownItem"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on DropDownItem component - Account Settings option."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-4"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on option to view account settings page."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-4"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"handleClick() is called, AccountSettingsPage component is rendered."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on DropDownItem component - Canvas Integration option."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-5"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on option to view Canvas integration page."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-5"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"handleClick() is called, CanvasIntegrationPage is rendered."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on DropDownItem component - Log Out option."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-6"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on option to log out."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-6"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"handleClick() is called, user is logged out."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"canvasintegrationpage"},"CanvasIntegrationPage"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test user inputting Canvas access token.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-7"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User enters key into input field and clicks the submit button."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-7"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"On success, user is notified that token was validated, setUserInfo() is called and userInfo value is updated."),(0,l.kt)("li",{parentName:"ul"},"On failure, user is notified that token was invalid."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"accountsettingspage"},"AccountSettingsPage"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user updating email information."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-8"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User enters new email into input field and clicks the submit button."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-8"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"On success, calls changeEmail() which calls setUserInfo(). Value of userInfo is updated to include updated email. "),(0,l.kt)("li",{parentName:"ul"},"On failure, user is notified that the email is invalid."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user updating username."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-9"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User enters new username into input field and clicks the submit button."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-9"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"On success, calls changeUsername() which calls setUserInfo(). Value of userInfo is updated to include updated username. "),(0,l.kt)("li",{parentName:"ul"},"On failure, user is notified that username is already taken."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user updating password"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-10"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User enters current and new password into input fields and clicks submit."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-10"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"On success, calls changePassword() which interacts with the backend to update password securely."),(0,l.kt)("li",{parentName:"ul"},"On failure, user can be notified that:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Current password was entered incorrectly."),(0,l.kt)("li",{parentName:"ul"},"New passwords don't match."),(0,l.kt)("li",{parentName:"ul"},"New password does not meet length/character requirements."))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user deleting their account"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-11"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User selects delete account button and verifies the operation via typing their pet's name."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-11"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"On success, user is notified that their account has been deleted and is securely logged out."),(0,l.kt)("li",{parentName:"ul"},"On failure, user can be notified that the pet's name was entered incorrectly."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"main"},"Main"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test fetching of user's inventory and pet information.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-12"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User logs into application."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-12"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to fetchData(), which calls setInventory() and setAvatarInfo()."),(0,l.kt)("li",{parentName:"ul"},"On success, values stored in inventory and avatarInfo are updated."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"petsprite"},"PetSprite"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user feeding pet"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-13"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User drags a candy from their inventory and drops it on their pet."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-13"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to handleItemRelease(), which calls setAvatarInfo(), setInventory(), and setSprite()."),(0,l.kt)("li",{parentName:"ul"},"On success, pet XP, sprite image, and inventory are updated accordingly."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on pet."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-14"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on their pet."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-14"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to handleClick(), which calls setSprite(), triggering a positive animation."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"pagedisplay"},"PageDisplay"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test fetching of user's taskList information.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-15"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User logs into application."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-15"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to fetchData(), which calls setTaskList()."),(0,l.kt)("li",{parentName:"ul"},"On success, values stored in taskList are updated.  "))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"navbutton"},"NavButton"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on NavButton component - Task Page button."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-16"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on button to view task page."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-16"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TaskPage component is rendered."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on NavButton component - Inventory Page button."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-17"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on button to view inventory page."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-17"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"InventoryPage component is rendered."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on NavButton component - Calendar Page button."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-18"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on button to view calendar page."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-18"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CalendarPage component is rendered."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user clicking on NavButton component - Progress Page button."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-19"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on button to view progress page."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-19"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ProgressPage component is rendered."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"taskitem"},"TaskItem"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user updating task completion status."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-20"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User indicates how much of the task they have completed."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-20"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to updateTask(), which calls setTaskList() and updates the value of taskList. If task is completed, then setInventory() is also called and the value of inventory is updated."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user deleting task."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-21"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks button to delete task."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-21"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to updateTask(), which calls setTaskList() and updates the value of taskList."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user selecting TaskItem component."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-22"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on TaskItem component."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-22"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TaskDetails component is rendered."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"taskdetails"},"TaskDetails"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user editing task details."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-23"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on edit button and updates task attributes (name, details, size, date, recurring status)."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-23"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to updateTask(), which calls setTaskList() and updates the value of taskList."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Test user deleting task"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-24"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks button to delete task."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-24"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to updateTask(), which calls setTaskList() and updates the value of taskList."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"createtaskform"},"CreateTaskForm"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test user creating a new task.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-25"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User fills out form describing task."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-25"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to updateTask(), which calls setTaskList() and updates the value of taskList."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"item"},"Item"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test user picking up and dragging a candy.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-26"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User selects an item."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-26"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Item follows user's finger/mouse around the screen."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"calendar"},"Calendar"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test user selecting a calendar date.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-27"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on a date in the Calendar component."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-27"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Call to handleClick(), which calls displayTasks() and shows users a list of tasks due on that date."))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"pptaskitem"},"PPTaskItem"),(0,l.kt)("details",{open:"True"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test user clicking on PPTaskItem.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"input--user-action-28"},"Input / User action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User clicks on PPTaskItem component."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"expected-result-28"},"Expected Result"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Renders PPTaskDetails component."))))))))}k.isMDXComponent=!0}}]);
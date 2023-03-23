"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return a?r.createElement(m,s(s({ref:t},h),{},{components:a})):r.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},s="Integration tests",o={unversionedId:"testing/integration-testing",id:"testing/integration-testing",title:"Integration tests",description:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-virtual-pet/docs/testing/integration-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Mary Clay",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Frontend Unit Tests",permalink:"/project-virtual-pet/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-virtual-pet/docs/testing/acceptence-testing"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Sample Python script for loading data",id:"sample-python-script-for-loading-data",level:2},{value:"Sample Selenium Script",id:"sample-selenium-script",level:2},{value:"Sample Bash script",id:"sample-bash-script",level:2},{value:"1.) Experience shows the expected quantity.",id:"1-experience-shows-the-expected-quantity",level:2},{value:"2.) Inventory is updated to the expected quantity.",id:"2-inventory-is-updated-to-the-expected-quantity",level:2},{value:"1.) Each page contains the correct title, verifying that we are routing through the pages correctly.",id:"1-each-page-contains-the-correct-title-verifying-that-we-are-routing-through-the-pages-correctly",level:2},{value:"2.) The expected courses are listed under tasks.",id:"2-the-expected-courses-are-listed-under-tasks",level:2},{value:"1.) Multiplier reads the correct value when decreased",id:"1-multiplier-reads-the-correct-value-when-decreased",level:2},{value:"2.) Multiplier reads the correct value when increased",id:"2-multiplier-reads-the-correct-value-when-increased",level:2},{value:"3.) Pet mood is accurate at steps 3 and 6",id:"3-pet-mood-is-accurate-at-steps-3-and-6",level:2},{value:"1.) The task component is viewable, and contains the correct values.",id:"1-the-task-component-is-viewable-and-contains-the-correct-values",level:2},{value:"2.) The calendar component is updated on the correct date.",id:"2-the-calendar-component-is-updated-on-the-correct-date",level:2},{value:"1.) The task is correctly updated based on level of completion (each stage will be asserted).",id:"1-the-task-is-correctly-updated-based-on-level-of-completion-each-stage-will-be-asserted",level:2},{value:"2.) The inventory is updated with the correct candy.",id:"2-the-inventory-is-updated-with-the-correct-candy",level:2},{value:"1.) The correct task information is displayed.",id:"1-the-correct-task-information-is-displayed",level:2},{value:"2.) The task shows the correct date corresponding to its respective deadlines",id:"2-the-task-shows-the-correct-date-corresponding-to-its-respective-deadlines",level:2},{value:"1.) The correct user credentials are displayed on the pet selection page.",id:"1-the-correct-user-credentials-are-displayed-on-the-pet-selection-page",level:2},{value:"2.) The updated list of pets is shown, and each picture is aligned with the correct information.",id:"2-the-updated-list-of-pets-is-shown-and-each-picture-is-aligned-with-the-correct-information",level:2},{value:"1.) Upon choosing NOT to integrate canvas, the user is routed to the correct landing page.",id:"1-upon-choosing-not-to-integrate-canvas-the-user-is-routed-to-the-correct-landing-page",level:2},{value:"2.) Upon choosing to integrate canvas, the user is routed to the integration page.",id:"2-upon-choosing-to-integrate-canvas-the-user-is-routed-to-the-integration-page",level:2},{value:"3.) Upon completing canvas integration, the user&#39;s information is correctly integrated into the final landing page in the process.",id:"3-upon-completing-canvas-integration-the-users-information-is-correctly-integrated-into-the-final-landing-page-in-the-process",level:2}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integration-tests"},"Integration tests"),(0,n.kt)("p",null,"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results."),(0,n.kt)("h1",{id:"basic-workflow"},"Basic Workflow"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We will leverage Selenium to complete our integration testing in a semi-automated fashion. This integration tests will occur in clean version of our production build, with a clean version of our production database. We will reserve a set of user ids in real prod for the purpose of repeating these tests before our final release. We are currently constructing our endpoints using Django Rest Framework, which provides a serializer class that we can leverage to load the production database with mock data. Django provides a shell environment we can use to import our serializers and load data into the database programatically. Therefore, we can pre-prepare a set of scripts and pipe them into the shell using a bash script. For example:"),(0,n.kt)("h2",{id:"sample-python-script-for-loading-data"},"Sample Python script for loading data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom db.serializers import *\n\n#data is a valid dictionary representing required fields of a task object\ntask = TaskSerializer(**data) \ntask.is_valid()\ntask.save()\n\n")),(0,n.kt)("h2",{id:"sample-selenium-script"},"Sample Selenium Script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\nWebDriver driver = new ChromeDriver();\ndriver.get("http://127.0.0.1:3000)\ntitle = \'Study Buddies\'\nassertIs(title, driver.title, "Compare expected title with true title.")\n\n')),(0,n.kt)("h2",{id:"sample-bash-script"},"Sample Bash script"),(0,n.kt)("p",null,"Here we are leveraging our prepared python script to perform CRUD operations in Django's shell, then launching our shell backend and front end before finally launching our prepared selenium script. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#!bin/bash\ncat load_data.py | python manage.py shell\npython manage.py runserver\ncd ../\nnmp start\npython3 selenium_script_use_case_1.py\npython3 selenium_script_use_case_2.py\n# and so on\n")),(0,n.kt)("h1",{id:"use-case-1"},"Use Case 1"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null,"As a user, I want to use the resources I've collected in the application to progress my avatar. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-the-user-navigates-to-the-inventorypage-in-the-pagedisplay-portion-of-the-screen-on-the-right-the-inventory-data-is-fetched-through-an-api-call"},"1.) The user navigates to the InventoryPage in the PageDisplay portion of the screen on the right. The inventory data is fetched through an API call.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-the-user-views-a-set-of-acquired-rewards-on-the-inventorypage-in-the-form-of-candies-which-are-contained-as-items-in-an-itemgrid-in-the-inventory"},"2.) The user views a set of acquired rewards on the InventoryPage in the form of \u2018candies\u2019 which are contained as Items in an ItemGrid in the Inventory.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-the-user-drags-a-candy-to-the-avatar-and-the-inventory-is-updated-to-reflect-the-removal-of-a-candy-an-api-call-updates-the-inventory-list"},"3.) The user drags a 'candy' to the avatar, and the Inventory is updated to reflect the removal of a candy. An API call updates the inventory list.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"4-the-user-drops-the-candy-onto-their-avatar-on-the-lefthand-side-of-the-screen-and-it-shows-an-eating-animation-and-a-satisfied-animation"},"4.) The user drops the 'candy' onto their avatar on the lefthand side of the screen, and it shows an eating animation and a satisfied animation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"5-the-avatarinfo-is-updated-which-contains-the-exp-data-which-causes-the-progress-bar-to-update-increasing-when-the-candy-is-consumed"},"5.) The avatarInfo is updated which contains the EXP data, which causes the progress bar to update, increasing when the \u2018candy\u2019 is consumed.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions"},"Assertions"),(0,n.kt)("h2",{id:"1-experience-shows-the-expected-quantity"},"1.) Experience shows the expected quantity."),(0,n.kt)("h2",{id:"2-inventory-is-updated-to-the-expected-quantity"},"2.) Inventory is updated to the expected quantity."),(0,n.kt)("h1",{id:"use-case-2"},"Use Case 2"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null,"As a user, I want to link Canvas to my Virtual Pet. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-the-user-creates-an-account-and-profile-as-described-in-use-case-8"},"1.) The user creates an account and profile as described in Use Case 8.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-the-user-navigates-to-the-canvas-integration-section-of-the-site"},"2.) The user navigates to the Canvas Integration section of the site.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-the-user-signs-on-through-sso"},"3.) The user signs on through SSO.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"4-courses-as-assignment-data-are-imported-into-the-users-info"},"4.) Courses as assignment data are imported into the user's info.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions-1"},"Assertions"),(0,n.kt)("h2",{id:"1-each-page-contains-the-correct-title-verifying-that-we-are-routing-through-the-pages-correctly"},"1.) Each page contains the correct title, verifying that we are routing through the pages correctly."),(0,n.kt)("h2",{id:"2-the-expected-courses-are-listed-under-tasks"},"2.) The expected courses are listed under tasks."),(0,n.kt)("h1",{id:"use-case-3"},"Use Case 3"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null,"As a user, I want to quickly monitor my progress by assessing the mood of my avatar."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-user-has-set-up-canvas-integration-and-has-neglected-an-assignment"},"1.) User has set up Canvas integration and has neglected an assignment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-as-the-assignment-gets-closer-the-avatar-becomes-visibly-hungry-in-a-comically-over-the-top-fashion"},"2.) As the assignment gets closer, the avatar becomes visibly hungry in a comically over-the-top-fashion.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-when-the-due-date-for-the-assignment-passes-the-avatar-becomes-visibly-upset"},"3.) When the due date for the assignment passes, the avatar becomes visibly upset.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"4-experience-and-rewards-gained-in-the-application-now-have-a-multiplier-that-is-less-than-one"},"4.) Experience and rewards gained in the application now have a multiplier that is less than one.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"5-the-user-can-now-retroactively-complete-the-assignment-and-the-multiplier-will-be-returned-to-the-previous-state"},"5.) The user can now retroactively complete the assignment and the multiplier will be returned to the previous state.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"6-this-will-be-reflected-in-the-avatars-apparent-mood"},"6.) This will be reflected in the avatar's apparent mood.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions-2"},"Assertions"),(0,n.kt)("h2",{id:"1-multiplier-reads-the-correct-value-when-decreased"},"1.) Multiplier reads the correct value when decreased"),(0,n.kt)("h2",{id:"2-multiplier-reads-the-correct-value-when-increased"},"2.) Multiplier reads the correct value when increased"),(0,n.kt)("h2",{id:"3-pet-mood-is-accurate-at-steps-3-and-6"},"3.) Pet mood is accurate at steps 3 and 6"),(0,n.kt)("h1",{id:"use-case-4"},"Use Case 4"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null," As a user, I want to create a schedule and be encouraged by my Virtual Pet to adhere to the schedule."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-the-user-logs-into-their-profile"},"1.) The user logs into their profile.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-user-navigates-to-the-create-task-tab"},"2.) User navigates to the \u201cCreate Task\u201d tab.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-user-fills-out-a-form-with-types-of-milestones-and-calendar-information-regarding-due-dates-these-can-be-explicit-calendar-entries-based-on-a-particular-date-or-recur-on-a-regular-time-interval"},"3.) User fills out a form with types of milestones and calendar information regarding due dates. These can be explicit calendar entries based on a particular date, or recur on a regular time interval.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"4-the-backend-for-the-site-builds-a-set-of-events-for-the-avatar-based-on-these-milestones"},"4.) The backend for the site builds a set of events for the avatar based on these milestones.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions-3"},"Assertions"),(0,n.kt)("h2",{id:"1-the-task-component-is-viewable-and-contains-the-correct-values"},"1.) The task component is viewable, and contains the correct values."),(0,n.kt)("h2",{id:"2-the-calendar-component-is-updated-on-the-correct-date"},"2.) The calendar component is updated on the correct date."),(0,n.kt)("h1",{id:"use-case-5"},"Use Case 5"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null," As a user, I want to have my study app stay up to date on my progress towards my study goals."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-the-user-logs-into-their-profile-1"},"1.) The user logs into their profile.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-from-the-homepage-the-user-can-select-a-specific-task-to-see-more-information"},"2.) From the homepage, the user can select a specific task to see more information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-after-selecting-a-task-the-user-may-update-their-progress-by-indicating-they-are-halfway-through-a-quarter-of-the-way-through-etc"},"3.) After selecting a task, the user may update their progress by indicating they are halfway through, a quarter of the way through, etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"4-after-progressing-further-towards-completing-a-task-the-users-pet-will-receive-exp-in-the-form-of-candy-towards-its-next-level"},"4.) After progressing further towards completing a task, the user\u2019s pet will receive EXP in the form of candy towards its next level.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions-4"},"Assertions"),(0,n.kt)("h2",{id:"1-the-task-is-correctly-updated-based-on-level-of-completion-each-stage-will-be-asserted"},"1.) The task is correctly updated based on level of completion (each stage will be asserted)."),(0,n.kt)("h2",{id:"2-the-inventory-is-updated-with-the-correct-candy"},"2.) The inventory is updated with the correct candy."),(0,n.kt)("h1",{id:"use-case-6"},"Use Case 6"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null,"  As a user, I want to be able to track my pet\u2019s growth and my progress towards reaching my study goals."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-the-user-logs-into-their-profile-2"},"1.) The user logs into their profile.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-the-user-can-always-see-their-pets-progress-towards-the-next-level-in-the-form-of-a-progress-bar-on-the-left-side-of-the-page"},"2.) The user can always see their pet's progress towards the next level in the form of a progress bar on the left side of the page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-the-user-navigates-to-the-pet-profile-page"},"3.) The user navigates to the \u2018Pet Profile\u2019 page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"4-from-this-page-the-user-can-see-a-list-of-their-current-tasks-and-can-select-a-specific-task-to-see-more-information"},"4.) From this page, the user can see a list of their current tasks and can select a specific task to see more information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"5-after-selecting-their-task-the-user-will-see-statistics-about-their-progress-towards-completing-that-task-including-the-time-remaining-before-the-deadline"},"5.) After selecting their task, the user will see statistics about their progress towards completing that task, including the time remaining before the deadline.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions-5"},"Assertions"),(0,n.kt)("h2",{id:"1-the-correct-task-information-is-displayed"},"1.) The correct task information is displayed."),(0,n.kt)("h2",{id:"2-the-task-shows-the-correct-date-corresponding-to-its-respective-deadlines"},"2.) The task shows the correct date corresponding to its respective deadlines"),(0,n.kt)("h1",{id:"use-case-7"},"Use Case 7"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null,"  As a user, I want to be able to log into an account so that my progress and tasks will be saved."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-the-system-requests-the-user-to-log-in-or-create-an-account"},"1.) The system requests the user to log in or create an account.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-the-user-enters-their-email-address-and-password"},"2.) The user enters their email address and password.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-the-system-validates-the-users-credentials-and-grants-access-to-the-application"},"3.) The system validates the user\u2019s credentials and grants access to the application.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions-6"},"Assertions"),(0,n.kt)("h2",{id:"1-the-correct-user-credentials-are-displayed-on-the-pet-selection-page"},"1.) The correct user credentials are displayed on the pet selection page."),(0,n.kt)("h2",{id:"2-the-updated-list-of-pets-is-shown-and-each-picture-is-aligned-with-the-correct-information"},"2.) The updated list of pets is shown, and each picture is aligned with the correct information."),(0,n.kt)("h1",{id:"use-case-8"},"Use Case 8"),(0,n.kt)("details",{open:"True"},(0,n.kt)("summary",null,"As a user, it is important that I can create an account so that I can maintain my pet\u2019s growth and my task progress."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"1-upon-accessing-the-web-application-for-the-first-time-the-user-is-given-the-option-to-create-an-account"},"1.) Upon accessing the web application for the first time, the user is given the option to create an account.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"2-the-user-inputs-their-email-address-and-creates-a-password-to-create-their-account"},"2.) The user inputs their email address and creates a password to create their account.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"3-after-creating-the-account-the-user-sees-a-page-allowing-them-to-choose-a-pet-out-of-a-selection-of-avatars"},"3.) After creating the account, the user sees a page allowing them to choose a pet out of a selection of avatars.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"4-the-user-selects-a-pet"},"4.) The user selects a pet.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"5-the-site-automatically-navigates-to-the-canvas-integration-tab"},"5.) The site automatically navigates to the Canvas Integration tab.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"6-the-user-chooses-whether-to-integrate-with-their-canvas-account"},"6.) The user chooses whether to integrate with their Canvas account.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"7-the-user-now-has-access-to-creating-tasks-and-growing-their-pet"},"7.) The user now has access to creating tasks and growing their pet.")))),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"assertions-7"},"Assertions"),(0,n.kt)("h2",{id:"1-upon-choosing-not-to-integrate-canvas-the-user-is-routed-to-the-correct-landing-page"},"1.) Upon choosing NOT to integrate canvas, the user is routed to the correct landing page."),(0,n.kt)("h2",{id:"2-upon-choosing-to-integrate-canvas-the-user-is-routed-to-the-integration-page"},"2.) Upon choosing to integrate canvas, the user is routed to the integration page."),(0,n.kt)("h2",{id:"3-upon-completing-canvas-integration-the-users-information-is-correctly-integrated-into-the-final-landing-page-in-the-process"},"3.) Upon completing canvas integration, the user's information is correctly integrated into the final landing page in the process."))}d.isMDXComponent=!0}}]);
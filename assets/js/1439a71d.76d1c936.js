"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1117],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=o.createContext({}),u=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(i.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=a,k=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(k,l(l({ref:e},c),{},{components:n})):o.createElement(k,l({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[d]="string"==typeof t?t:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9749:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},l="Acceptance Tests Report",s={unversionedId:"test-report/acceptance-test-report",id:"test-report/acceptance-test-report",title:"Acceptance Tests Report",description:"Description",source:"@site/docs/test-report/acceptance-test-report.md",sourceDirName:"test-report",slug:"/test-report/acceptance-test-report",permalink:"/project-virtual-pet/docs/test-report/acceptance-test-report",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/test-report/acceptance-test-report.md",tags:[],version:"current",lastUpdatedBy:"Christine",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Integration Tests Report",permalink:"/project-virtual-pet/docs/test-report/integration-test-report"}},i={},u=[{value:"Description",id:"description",level:2},{value:"Manual tests",id:"manual-tests",level:2},{value:"Spreadsheets",id:"spreadsheets",level:3},{value:"Tests",id:"tests",level:3},{value:"Description of failed tests",id:"description-of-failed-tests",level:3},{value:"Automated tests",id:"automated-tests",level:2},{value:"Output",id:"output",level:3},{value:"Notes on the automated tests",id:"notes-on-the-automated-tests",level:3}],c={toc:u};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"acceptance-tests-report"},"Acceptance Tests Report"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The acceptance tests demonstrate functional and non-functional requirements using a combination of automated tests derived from the use-cases (user stories) and manual tests with recorded observation of the results. As the application developed over time, the acceptance test document from the testing plan, in the form of a Google spreadsheet, was kept up-to-date. This same spreadsheet was used as a basis for creating automated versions of the same tests with Selenium. "),(0,a.kt)("h2",{id:"manual-tests"},"Manual tests"),(0,a.kt)("h3",{id:"spreadsheets"},"Spreadsheets"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{href:"https://docs.google.com/spreadsheets/d/1cuUb6Kp730-dWrmaLGF4BwymjM5wOjrheQmZXhBRBhs/edit?usp=sharing"},"this Google Sheet")," for a blank copy of the manual acceptance tests. "),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{href:"https://docs.google.com/spreadsheets/d/1v4dPHoCdsGfFrSIzFaNgPxO5WODzLWRHibZIn-iCB3s/edit?usp=sharing"},"this Google Sheet")," for a completed version of the manual acceptance tests. "),(0,a.kt)("h3",{id:"tests"},"Tests"),(0,a.kt)("p",null,"The tests are also outlined below for reference:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Test ID"),(0,a.kt)("th",null,"Action/Steps"),(0,a.kt)("th",null,"Expected Result"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"View launch screen. Navigate to Study Buddy site, at https://studybuddy.life"),(0,a.kt)("td",null,"You should see the launch screen page with options to Login or Register")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"Registration - create new account. Click the Register button on the launch screen. Enter a username, valid email, and password. Enter your name, birthday, and a bio. Click the Sign Up button."),(0,a.kt)("td",null,'You should see a "Success!" popup if your account registration was successful. You should receive a welcome email confirming your account registration.')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3"),(0,a.kt)("td",null,"Login - correct credentials. At the login page, enter your correct credentials (email and password) then click the Sign In button"),(0,a.kt)("td",null,"Upon your first sign-in only, you should be redirected to the Pet Selection page. Upon any other sign-in, on login, you should be redirected to the homepage and see your pet and its name on the left of the screen.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"4"),(0,a.kt)("td",null,"Login - incorrect credentials."),(0,a.kt)("td",null,'At the login page, enter incorrect credentials, such as an incorrect password. Click the Sign In button. You should see a popup error message stating "Unauthorized".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"5"),(0,a.kt)("td",null,"Pet selection - choosing a pet"),(0,a.kt)("td",null,"At the Pet Selection page, navigate with the arrows to choose from a selection of pets. You should be prompted to enter a name.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"6"),(0,a.kt)("td",null,"Pet selection - no name entered"),(0,a.kt)("td",null,'At the Pet Selection page, after selecting a pet, click "Submit" without entering a name. You should see a warning message saying "You must enter a name".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"7"),(0,a.kt)("td",null,"Pet selection - name entered"),(0,a.kt)("td",null,'At the Pet Selection page, after selecting a pet, enter a name and click "Continue". You should be redirected to the homepage and see your pet and its name on the left of the screen.')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"8"),(0,a.kt)("td",null,"Logout"),(0,a.kt)("td",null,"From the homepage, click the Logout button in the top right corner. On logout, you should be redirected to the landing page.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"9"),(0,a.kt)("td",null,"Change pet information - empty input"),(0,a.kt)("td",null,"From the homepage, click the Profile tab. Change your pet's name and/or bio to an empty input. Click Submit. Your pet's name and/or bio should remain unchanged. No errors should pop up.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"10"),(0,a.kt)("td",null,"Change pet information - valid input"),(0,a.kt)("td",null,"From the homepage, click the Profile tab. Change your pet's name and/or bio to new input(s). Your pet's name and/or bio should appear as changed on the left of the screen.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"11"),(0,a.kt)("td",null,"Change user account information - empty input"),(0,a.kt)("td",null,'From the homepage, click user icon in the top right, beside your username. Click "Account" to navigate to the Account page. Enter an empty input for your name and/or bio. Click Submit. You should see an error(s) prompting you to enter a name and/or bio before submitting. Your information should remain unchanged.')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"12"),(0,a.kt)("td",null,"Change user account information - valid input"),(0,a.kt)("td",null,'From the homepage, click user icon in the top right, beside your username. Click "Account" to navigate to the Account page. Enter a valid input for your name and/or bio. Click Submit. After pressing Submit, once you navigate away from the page and navigate back, your profile inputs/changes will be saved.')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"13"),(0,a.kt)("td",null,'Create a Task. On the homepage, click the Tasks tab. Click "Create Task". Enter details about Task (name, description, due date). Click "Create Task".'),(0,a.kt)("td",null,"You should see the new Task in the Task list, under the Active tab.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"14"),(0,a.kt)("td",null,'Delete a Task. On the homepage, click the Tasks tab. From either the Active or Completed tabs, choose a Task you would like to delete. Click the "x" to the right of the task to delete.'),(0,a.kt)("td",null,"You should no longer see the deleted Task in the Task list.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"15"),(0,a.kt)("td",null,"Complete a Task. On the Task page, click the checkbox next to a Task."),(0,a.kt)("td",null,"In the Inventory tab of the homepage, a new candy is shown. Task moved from Active to Completed section of Tasks.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"16"),(0,a.kt)("td",null,"Feed pet a candy. On the homepage, navigate to the Inventory tab to open the Inventory. Click and hold down on a (colored, not gray) candy to feed your pet."),(0,a.kt)("td",null,"You should see a confetti animation on the candy. Your pet should react by displaying a happy animation. The progress bar below the pet should fill from left to right. The candy should no longer be present in the Inventory.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"17"),(0,a.kt)("td",null,'Canvas Integration - valid token. Click user icon in the top right, beside your username. Click "Canvas Integration" to navigate to the Canvas Integration page. From the Canvas Integration page, follow the instructions for securely entering your API key. Enter a valid token, then click Submit.'),(0,a.kt)("td",null,"You should see a loading screen and be redirected to the homepage. You should see the Canvas icon spinning to indicate the tasks are importing, which may take some time. After a bit of time, you should see your Canvas assignments in the Tasks list. You are unable to check off your Canvas tasks manually.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"18"),(0,a.kt)("td",null,'Canvas Integration - invalid token. Click user icon in the top right, beside your username. Click "Canvas Integration" to navigate to the Canvas Integration page. Enter a non-valid token, such as "hello". Then click Submit.'),(0,a.kt)("td",null,"You should receive a warning that you must enter a valid token.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"19"),(0,a.kt)("td",null,"Canvas Integration - updating. Click Canvas icon in the top left from the Main page."),(0,a.kt)("td",null,"The icon should begin spinning. When done, any updates to assignments through Canvas should reflect in corresponding Task's details. No imported assignments should be repeated. Any submitted tasks should be reflected by being removed from the To-Do list and a candy should be present in the Inventory.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"20"),(0,a.kt)("td",null,"Click on pet. Click on pet from the main page."),(0,a.kt)("td",null,'The pet should animate with a speech bubble saying ""Hi!""')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"21"),(0,a.kt)("td",null,"Level up. Turn your volume up. Feed pet candies until pet levels up."),(0,a.kt)("td",null,"There should be a sound associated with leveling up. At level 20, the pet gains a propeller hat.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"22"),(0,a.kt)("td",null,"Notifications. Once logged in (make sure it's a non-private browser), click the notification bell in the bottom right corner."),(0,a.kt)("td",null,'A native prompt the subscribe to notifications should pop up. Clicking "Allow" should trigger a "Welcome to Study Buddy!" notification.')))),(0,a.kt)("h3",{id:"description-of-failed-tests"},"Description of failed tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In test number 21, not all pets obtain the propeller hat upon reaching level 20. Only the gray cat does. "),(0,a.kt)("li",{parentName:"ul"},"In test number 22, this passes in some cases but not all. If an iOS device is not updated, it will not display the notification bell and receive notifications. Additionally, 2 welcome notifications are sometimes sent the first time a user subscribes.")),(0,a.kt)("h2",{id:"automated-tests"},"Automated tests"),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{href:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/tree/main/pocs-capstone/tests/acceptance"},"here")," to be directed to the Python script of automated acceptance tests on our GitHub repository."),(0,a.kt)("p",null,"The output from the automated acceptance tests can also be found below."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AUTOMATED ACCEPTANCE TESTS USING SELENIUM\n\nlaunch_test | Acceptance test 1: PASSED\nregister_test | Acceptance test 2: PASSED\nlogin_test_correct | Acceptance test 3: PASSED\nlogin_test_incorrect | Acceptance test 4: PASSED\npet_select_noname_test | Acceptance test 5: PASSED\npet_select_test | Acceptance test 6: PASSED\nlogout_test | Acceptance test 7: PASSED\npetprofile_empty_test | Acceptance test 8: PASSED\npetprofile_test | Acceptance test 9: PASSED\naccount_info_empty_test | Acceptance test 10: PASSED\naccount_info_changed_test | Acceptance test 11: PASSED\ncreate_task_test | Acceptance test 12: PASSED\ncomplete_task_test | Acceptance test 13: PASSED\ndelete_task_test | Acceptance test 14: PASSED\nfeed_test | Acceptance test 15: PASSED\n")),(0,a.kt)("h3",{id:"notes-on-the-automated-tests"},"Notes on the automated tests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The tests cover all manual acceptance tests except ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Canvas integration (which requires a real user's token)"),(0,a.kt)("li",{parentName:"ul"},"Clicking on the pet (which requires observation of an animation)"),(0,a.kt)("li",{parentName:"ul"},"Notifications (which require user's permission and cannot be fully automated)"))),(0,a.kt)("li",{parentName:"ul"},"The above output comes from tests that were run on the desktop version of Study Buddy on Mac in Chrome drivers using Selenium")))}d.isMDXComponent=!0}}]);
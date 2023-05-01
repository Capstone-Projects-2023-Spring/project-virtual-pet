"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),p=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?s.createElement(m,a(a({ref:t},l),{},{components:n})):s.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},a="Acceptance Tests Report",c={unversionedId:"test-report/acceptance-test-report",id:"test-report/acceptance-test-report",title:"Acceptance Tests Report",description:"Description",source:"@site/docs/test-report/acceptance-test-report.md",sourceDirName:"test-report",slug:"/test-report/acceptance-test-report",permalink:"/project-virtual-pet/docs/test-report/acceptance-test-report",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/test-report/acceptance-test-report.md",tags:[],version:"current",lastUpdatedBy:"Katrina Janeczko",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Integration Tests Report",permalink:"/project-virtual-pet/docs/test-report/integration-test-report"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Manual tests",id:"manual-tests",level:2},{value:"Spreadsheets",id:"spreadsheets",level:3},{value:"Tests",id:"tests",level:3},{value:"Description of failed tests",id:"description-of-failed-tests",level:3},{value:"Automated tests",id:"automated-tests",level:2},{value:"Output",id:"output",level:3},{value:"Notes on the automated tests",id:"notes-on-the-automated-tests",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"acceptance-tests-report"},"Acceptance Tests Report"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The acceptance tests demonstrate functional and non-functional requirements using a combination of automated tests derived from the use-cases (user stories) and manual tests with recorded observation of the results. As the application developed over time, the acceptance test document from the testing plan, in the form of a Google spreadsheet, was kept up-to-date. This same spreadsheet was used as a basis for creating automated versions of the same tests with Selenium. "),(0,r.kt)("h2",{id:"manual-tests"},"Manual tests"),(0,r.kt)("h3",{id:"spreadsheets"},"Spreadsheets"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{href:"https://docs.google.com/spreadsheets/d/1cuUb6Kp730-dWrmaLGF4BwymjM5wOjrheQmZXhBRBhs/edit?usp=sharing"},"this Google Sheet")," for a blank copy of the manual acceptance tests. "),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{href:"https://docs.google.com/spreadsheets/d/1v4dPHoCdsGfFrSIzFaNgPxO5WODzLWRHibZIn-iCB3s/edit?usp=sharing"},"this Google Sheet")," for a completed version of the manual acceptance tests. "),(0,r.kt)("h3",{id:"tests"},"Tests"),(0,r.kt)("p",null,"The tests are also outlined below for reference:\n| Test ID | Action/Steps | Expected Result |\n| ------- | ------------ | ----------------|\n| 1       | View launch screen. Navigate to Study Buddy site, at ",(0,r.kt)("a",{parentName:"p",href:"https://studybuddy.life"},"https://studybuddy.life"),' | You should see the launch screen page with options to Login or Register |\n| 2       | Registration - create new account. Click the Register button on the launch screen. Enter a username, valid email, and password. Enter your name, birthday, and a bio. Click the Sign Up button. | You should see a "Sucess!" popup if your account registration was successful. You should receive a welcome email confirming your account registration. |\n| 3       | Login - correct credentials. At the login page, enter your correct credentials (email and password) then click the Sign In button | Upon your first sign-in only, you should be redirected to the Pet Selection page. Upon any other sign-in, on login, you should be redirected to the homepage and see your pet and its name on the left of the screen. |'),(0,r.kt)("h3",{id:"description-of-failed-tests"},"Description of failed tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In test number 21, not all pets obtain the propeller hat upon reaching level 20. Only the gray cat does. "),(0,r.kt)("li",{parentName:"ul"},"In test number 22, this passes in some cases but not all. If an iOS device is not updated, it will not display the notification bell and receive notifications. Additionally, 2 welcome notifications are sometimes sent the first time a user subscribes.")),(0,r.kt)("h2",{id:"automated-tests"},"Automated tests"),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{href:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/tree/main/pocs-capstone/tests/acceptance"},"here")," to be directed to the Python script of automated acceptance tests on our GitHub repository."),(0,r.kt)("p",null,"The output from the automated acceptance tests can also be found below."),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("p",null,"AUTOMATED ACCEPTANCE TESTS USING SELENIUM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"launch_test | Acceptance test 1: PASSED\nregister_test | Acceptance test 2: PASSED\nlogin_test_correct | Acceptance test 3: PASSED\nlogin_test_incorrect | Acceptance test 4: PASSED\npet_select_noname_test | Acceptance test 5: PASSED\npet_select_test | Acceptance test 6: PASSED\nlogout_test | Acceptance test 7: PASSED\npetprofile_empty_test | Acceptance test 8: PASSED\npetprofile_test | Acceptance test 9: PASSED\naccount_info_empty_test | Acceptance test 10: PASSED\naccount_info_changed_test | Acceptance test 11: PASSED\ncreate_task_test | Acceptance test 12: PASSED\ncomplete_task_test | Acceptance test 13: PASSED\ndelete_task_test | Acceptance test 14: PASSED\nfeed_test | Acceptance test 15: PASSED\n")),(0,r.kt)("h3",{id:"notes-on-the-automated-tests"},"Notes on the automated tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The tests cover all manual acceptance tests except ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Canvas integration (which requires a real user's token)"),(0,r.kt)("li",{parentName:"ul"},"Clicking on the pet (which requires observation of an animation)"),(0,r.kt)("li",{parentName:"ul"},"Notifications (which require user's permission and cannot be fully automated)"))),(0,r.kt)("li",{parentName:"ul"},"The above output comes from tests that were run on the desktop version of Study Buddy on Mac in Chrome drivers using Selenium")))}u.isMDXComponent=!0}}]);
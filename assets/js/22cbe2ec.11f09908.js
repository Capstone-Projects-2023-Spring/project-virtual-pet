"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8672],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>f});var r=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(s),m=n,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||a;return s?r.createElement(f,l(l({ref:t},u),{},{components:s})):r.createElement(f,l({ref:t},u))}));function f(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,l=new Array(a);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=s[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},3751:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(7462),n=(s(7294),s(3905));const a={sidebar_position:4},l="Backend Unit Tests",i={unversionedId:"testing/backend-unit-testing",id:"testing/backend-unit-testing",title:"Backend Unit Tests",description:"Views",source:"@site/docs/testing/backend-unit-testing.md",sourceDirName:"testing",slug:"/testing/backend-unit-testing",permalink:"/project-virtual-pet/docs/testing/backend-unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/testing/backend-unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Ian Tyler Applebaum",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Acceptance test",permalink:"/project-virtual-pet/docs/testing/acceptence-testing"}},o={},d=[{value:"Views",id:"views",level:2},{value:"CustomUserInfoViewTests",id:"customuserinfoviewtests",level:3},{value:"UserLoginViewTests",id:"userloginviewtests",level:3},{value:"CustomUserCreateViewTests",id:"customusercreateviewtests",level:3},{value:"PetDataViewTests",id:"petdataviewtests",level:3},{value:"UserTaskViewTests",id:"usertaskviewtests",level:3},{value:"UserInventoryTests",id:"userinventorytests",level:3},{value:"Register View",id:"register-view",level:3},{value:"<em>def test_view_url_exists_at_desired_location(self)</em>",id:"def-test_view_url_exists_at_desired_locationself",level:4},{value:"Database Models",id:"database-models",level:2},{value:"NewUser Model",id:"newuser-model",level:3},{value:"<em>def test_first_name_label(self)</em>",id:"def-test_first_name_labelself",level:4},{value:"<em>def test_user_name_max_length(self)</em>",id:"def-test_user_name_max_lengthself",level:4},{value:"<em>def test_first_name_max_length(self)</em>",id:"def-test_first_name_max_lengthself",level:4},{value:"<em>def test_bio_max_length(self)</em>",id:"def-test_bio_max_lengthself",level:4},{value:"<em>def test_object_name_is_user_name(self)</em>",id:"def-test_object_name_is_user_nameself",level:4},{value:"<em>def test_email_address_label(self)</em>",id:"def-test_email_address_labelself",level:4},{value:"<em>test_bio_label(self)</em>",id:"test_bio_labelself",level:4},{value:"CustomAccountManager Model (pending)",id:"customaccountmanager-model-pending",level:3},{value:"Avatar Model (pending)",id:"avatar-model-pending",level:3},{value:"Inventory Model (pending)",id:"inventory-model-pending",level:3},{value:"Task Model (pending)",id:"task-model-pending",level:3}],u={toc:d};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backend-unit-tests"},"Backend Unit Tests"),(0,n.kt)("h2",{id:"views"},"Views"),(0,n.kt)("h3",{id:"customuserinfoviewtests"},"CustomUserInfoViewTests"),(0,n.kt)("p",null,"Procedure: This class will provide the user's data to the frontend ",(0,n.kt)("br",null),"\nTests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow the user data to send ",(0,n.kt)("br",null),"\nInputs: url path - String, url name - String ",(0,n.kt)("br",null),"\nExpected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve user data object ",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"userloginviewtests"},"UserLoginViewTests"),(0,n.kt)("p",null,"Procedure: This class will receive a user's login credentials and verify with the database if the credentials are valid",(0,n.kt)("br",null),"\nTests: Check status codes, url exists at desire location, url reverse lookup, if credentials are correct or incorrect",(0,n.kt)("br",null),"\nInputs: user_name - String, password - String",(0,n.kt)("br",null),"\nExpected Results: True for correct status code, true if url exists and can be looked up by name, true if credential provided are valid, true if credential provided are not valid",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"customusercreateviewtests"},"CustomUserCreateViewTests"),(0,n.kt)("p",null,"Procedure: This class will recieve register data and attempt to register a new user",(0,n.kt)("br",null),"\nTests:  Check status codes, url exists at desire location, url reverse lookup, if register data already exists",(0,n.kt)("br",null),"\nInputs: user_name - String, email - String, first_name - String, password - String",(0,n.kt)("br",null),"\nExpected Results: True for correct status code, true if url exists and can be looked up by name, true if register data provided is valid, true if register data provided is not valid",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"petdataviewtests"},"PetDataViewTests"),(0,n.kt)("p",null,"Procedure: This class will provide the user's pet data",(0,n.kt)("br",null),"\nTests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow pet data to be sent",(0,n.kt)("br",null),"\nInputs: url path - String, url name - String",(0,n.kt)("br",null),"\nExpected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve pet data object",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"usertaskviewtests"},"UserTaskViewTests"),(0,n.kt)("p",null,"Procedure: This class will provide the user's task data",(0,n.kt)("br",null),"\nTests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow task data to be sent",(0,n.kt)("br",null),"\nInputs: url path - String, url name - String",(0,n.kt)("br",null),"\nExpected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve task data object",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"userinventorytests"},"UserInventoryTests"),(0,n.kt)("p",null,"Procedure: This class will provide the user's inventory data",(0,n.kt)("br",null),"\nTests: Tests: Check status codes, url exists at desired location, url reverse lookup, check authentication to allow inventory data to be sent",(0,n.kt)("br",null),"\nInputs: url path - String, url name - String",(0,n.kt)("br",null),"\nExpected Results: True for correct status code, true if url exists and can be looked up by name, true if unauthorized to recieve inventory data object",(0,n.kt)("br",null)),(0,n.kt)("h3",{id:"register-view"},"Register View"),(0,n.kt)("h4",{id:"def-test_view_url_exists_at_desired_locationself"},(0,n.kt)("em",{parentName:"h4"},"def test_view_url_exists_at_desired_location(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," Test: Checks if the url exists for register view\n Returns: True if the response status code is 201, other wise false\n")),(0,n.kt)("h2",{id:"database-models"},"Database Models"),(0,n.kt)("h3",{id:"newuser-model"},"NewUser Model"),(0,n.kt)("h4",{id:"def-test_first_name_labelself"},(0,n.kt)("em",{parentName:"h4"},"def test_first_name_label(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Test: Checks the text for the first_name label\nReturns: True if the first_name text label matches the expected label output, otherwise false\n")),(0,n.kt)("h4",{id:"def-test_user_name_max_lengthself"},(0,n.kt)("em",{parentName:"h4"},"def test_user_name_max_length(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the user_name text\nReturns: True if the user_name max length matches the expected max length, otherwise false\n")),(0,n.kt)("h4",{id:"def-test_first_name_max_lengthself"},(0,n.kt)("em",{parentName:"h4"},"def test_first_name_max_length(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the first_name text\nReturns: True if the first_name max length matches the expected max length, otherwise false\n")),(0,n.kt)("h4",{id:"def-test_bio_max_lengthself"},(0,n.kt)("em",{parentName:"h4"},"def test_bio_max_length(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the first_name text\nReturns: True if the first_name max length matches the expected max length, otherwise false\n")),(0,n.kt)("h4",{id:"def-test_object_name_is_user_nameself"},(0,n.kt)("em",{parentName:"h4"},"def test_object_name_is_user_name(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Test: Checks that the database object's name is the user_name attribute\nReturns: True if the object's name matches the expected user_name output, otherwise false\n")),(0,n.kt)("h4",{id:"def-test_email_address_labelself"},(0,n.kt)("em",{parentName:"h4"},"def test_email_address_label(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Test: Checks the text for the email_address label\nReturns: True if the email_address text label matches the expected label output, otherwise false\n")),(0,n.kt)("h4",{id:"test_bio_labelself"},(0,n.kt)("em",{parentName:"h4"},"test_bio_label(self)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Test: Checks the text for the bio label\nReturns: True if the bio label text label matches the expected label output, otherwise false\n")),(0,n.kt)("h3",{id:"customaccountmanager-model-pending"},"CustomAccountManager Model (pending)"),(0,n.kt)("h3",{id:"avatar-model-pending"},"Avatar Model (pending)"),(0,n.kt)("h3",{id:"inventory-model-pending"},"Inventory Model (pending)"),(0,n.kt)("h3",{id:"task-model-pending"},"Task Model (pending)"))}c.isMDXComponent=!0}}]);
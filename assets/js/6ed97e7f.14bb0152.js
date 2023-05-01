"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[5099],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var s=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,l=function(e,t){if(null==e)return{};var a,s,l={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var _=s.createContext({}),d=function(e){var t=s.useContext(_),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return s.createElement(_.Provider,{value:t},e.children)},f="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,_=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=d(a),h=l,c=f["".concat(_,".").concat(h)]||f[h]||o[h]||n;return a?s.createElement(c,r(r({ref:t},m),{},{components:a})):s.createElement(c,r({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=h;var i={};for(var _ in t)hasOwnProperty.call(t,_)&&(i[_]=t[_]);i.originalType=e,i[f]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<n;d++)r[d]=a[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>r,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=a(7462),l=(a(7294),a(3905));const n={sidebar_position:4},r="Backend Unit Tests",i={unversionedId:"testing-plan/backend-unit-testing",id:"testing-plan/backend-unit-testing",title:"Backend Unit Tests",description:"Backend Coverage Report",source:"@site/docs/testing-plan/backend-unit-testing.md",sourceDirName:"testing-plan",slug:"/testing-plan/backend-unit-testing",permalink:"/project-virtual-pet/docs/testing-plan/backend-unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/testing-plan/backend-unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Christine Cho",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Acceptance test",permalink:"/project-virtual-pet/docs/testing-plan/acceptence-testing"}},_={},d=[{value:"Views",id:"views",level:2},{value:"CustomUserInfoViewTests",id:"customuserinfoviewtests",level:3},{value:"<em>def test_view_url_exists_at_desired_location(self)</em>",id:"def-test_view_url_exists_at_desired_locationself",level:4},{value:"<em>def test_view_url_accessible_by_name(self)</em>",id:"def-test_view_url_accessible_by_nameself",level:4},{value:"APITokenViewTest",id:"apitokenviewtest",level:3},{value:"<em>def test_login_with_valid_credentials(self)</em>",id:"def-test_login_with_valid_credentialsself",level:4},{value:"<em>def test_login_with_invalid_credentials(self)</em>",id:"def-test_login_with_invalid_credentialsself",level:4},{value:"Register View",id:"register-view",level:3},{value:"<em>def test_view_url_exists_at_desired_location(self)</em>",id:"def-test_view_url_exists_at_desired_locationself-1",level:4},{value:"Database Models",id:"database-models",level:2},{value:"NewUser Model",id:"newuser-model",level:3},{value:"<em>def test_email_address_label(self)</em>",id:"def-test_email_address_labelself",level:4},{value:"<em>def test_user_name_max_length(self)</em>",id:"def-test_user_name_max_lengthself",level:4},{value:"<em>def test_first_name_max_length(self)</em>",id:"def-test_first_name_max_lengthself",level:4},{value:"<em>def test_bio_max_length(self)</em>",id:"def-test_bio_max_lengthself",level:4},{value:"<em>def test_bio_label(self)</em>",id:"def-test_bio_labelself",level:4},{value:"<em>def test_canvas_token_max_length(self)</em>",id:"def-test_canvas_token_max_lengthself",level:4},{value:"<em>def test_object_name_is_actual_name(self)</em>",id:"def-test_object_name_is_actual_nameself",level:4},{value:"<em>def test_canvas_token_is_returned(self)</em>",id:"def-test_canvas_token_is_returnedself",level:4},{value:"Avatar Model",id:"avatar-model",level:3},{value:"<em>def test_avatar_type_max_length(self)</em>",id:"def-test_avatar_type_max_lengthself",level:4},{value:"<em>def test_pet_name_max_length(self)</em>",id:"def-test_pet_name_max_lengthself",level:4},{value:"<em>def test_flavour_text_max_length(self)</em>",id:"def-test_flavour_text_max_lengthself",level:4},{value:"<em>def test_object_name_is_actual_name(self)</em>",id:"def-test_object_name_is_actual_nameself-1",level:4},{value:"Inventory Model",id:"inventory-model",level:3},{value:"<em>def test_candy_base_type_max_length(self)</em>",id:"def-test_candy_base_type_max_lengthself",level:4},{value:"<em>def test_object_name_is_actual_name(self)</em>",id:"def-test_object_name_is_actual_nameself-2",level:4},{value:"Task Model",id:"task-model",level:3},{value:"<em>def test_title_max_length(self)</em>",id:"def-test_title_max_lengthself",level:4},{value:"<em>def test_task_type_max_length(self)</em>",id:"def-test_task_type_max_lengthself",level:4},{value:"<em>def test_unique_canvas_tag_max_length(self)</em>",id:"def-test_unique_canvas_tag_max_lengthself",level:4},{value:"<em>def test_course_title_max_length(self)</em>",id:"def-test_course_title_max_lengthself",level:4},{value:"<em>def test_object_name_is_actual_name(self)</em>",id:"def-test_object_name_is_actual_nameself-3",level:4}],m={toc:d};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"backend-unit-tests"},"Backend Unit Tests"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Backend Coverage Report"),(0,l.kt)("img",{width:"764",alt:"backend-tests",src:"https://user-images.githubusercontent.com/43662352/235539294-aca59a84-1310-4cb0-a1db-2ee7066ac4b1.png"})),(0,l.kt)("h2",{id:"views"},"Views"),(0,l.kt)("h3",{id:"customuserinfoviewtests"},"CustomUserInfoViewTests"),(0,l.kt)("h4",{id:"def-test_view_url_exists_at_desired_locationself"},(0,l.kt)("em",{parentName:"h4"},"def test_view_url_exists_at_desired_location(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the url exists by attempting to register with mock user data\nReturns: True if response status code is 201, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_view_url_accessible_by_nameself"},(0,l.kt)("em",{parentName:"h4"},"def test_view_url_accessible_by_name(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the view's url is accessible by the name\nReturns: True if the response status code is 201, otherwise false\n")),(0,l.kt)("h3",{id:"apitokenviewtest"},"APITokenViewTest"),(0,l.kt)("h4",{id:"def-test_login_with_valid_credentialsself"},(0,l.kt)("em",{parentName:"h4"},"def test_login_with_valid_credentials(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the user can login with valid credentials\nReturns: True if response status code is 200, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_login_with_invalid_credentialsself"},(0,l.kt)("em",{parentName:"h4"},"def test_login_with_invalid_credentials(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the user can login with invalid credentials\nReturns: True if response status code is 401, otherwise false\n")),(0,l.kt)("h3",{id:"register-view"},"Register View"),(0,l.kt)("h4",{id:"def-test_view_url_exists_at_desired_locationself-1"},(0,l.kt)("em",{parentName:"h4"},"def test_view_url_exists_at_desired_location(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," Test: Checks if the url exists for register view\n Returns: True if the response status code is 201, other wise false\n")),(0,l.kt)("h2",{id:"database-models"},"Database Models"),(0,l.kt)("h3",{id:"newuser-model"},"NewUser Model"),(0,l.kt)("h4",{id:"def-test_email_address_labelself"},(0,l.kt)("em",{parentName:"h4"},"def test_email_address_label(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the text for the email_address label\nReturns: True if the email_address text label matches the expected label output, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_user_name_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_user_name_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the user_name text\nReturns: True if the user_name max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_first_name_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_first_name_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the first_name text\nReturns: True if the first_name max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_bio_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_bio_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the bio text\nReturns: True if the first_name max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_bio_labelself"},(0,l.kt)("em",{parentName:"h4"},"def test_bio_label(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the text for the bio label\nReturns: True if the bio label text label matches the expected label output, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_canvas_token_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_canvas_token_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the canvas_token text\nReturns: True if the canvas_token max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_object_name_is_actual_nameself"},(0,l.kt)("em",{parentName:"h4"},"def test_object_name_is_actual_name(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks that the database object's name is the user_name attribute\nReturns: True if the object's name matches the expected user_name output, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_canvas_token_is_returnedself"},(0,l.kt)("em",{parentName:"h4"},"def test_canvas_token_is_returned(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks that the fucntion get_canvas_token() returns the canvas token\nReturns: True if the function returns the expected canvas token, otherwise false\n")),(0,l.kt)("h3",{id:"avatar-model"},"Avatar Model"),(0,l.kt)("h4",{id:"def-test_avatar_type_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_avatar_type_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the avatar_type text\nReturns: True if the avatar_type max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_pet_name_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_pet_name_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the pet_name text\nReturns: True if the pet_name max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_flavour_text_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_flavour_text_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the flavour_text text\nReturns: True if the flavour_text max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_object_name_is_actual_nameself-1"},(0,l.kt)("em",{parentName:"h4"},"def test_object_name_is_actual_name(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks that the database object's name is the actual name given\nReturns: True if the object's name matches the expected objects name, otherwise false\n")),(0,l.kt)("h3",{id:"inventory-model"},"Inventory Model"),(0,l.kt)("h4",{id:"def-test_candy_base_type_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_candy_base_type_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the candy_base_type text\nReturns: True if the candy_base_type max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_object_name_is_actual_nameself-2"},(0,l.kt)("em",{parentName:"h4"},"def test_object_name_is_actual_name(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks that the database object's name is the actual name given\nReturns: True if the object's name matches the expected objects name, otherwise false\n")),(0,l.kt)("h3",{id:"task-model"},"Task Model"),(0,l.kt)("h4",{id:"def-test_title_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_title_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the title text\nReturns: True if the title max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_task_type_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_task_type_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the task_type text\nReturns: True if the task_type max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_unique_canvas_tag_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_unique_canvas_tag_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the unique_canvas_tag text\nReturns: True if the unique_canvas_tag max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_course_title_max_lengthself"},(0,l.kt)("em",{parentName:"h4"},"def test_course_title_max_length(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks the size of the field allocated for the course_title text\nReturns: True if the course_title max length matches the expected max length, otherwise false\n")),(0,l.kt)("h4",{id:"def-test_object_name_is_actual_nameself-3"},(0,l.kt)("em",{parentName:"h4"},"def test_object_name_is_actual_name(self)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Test: Checks that the database object's name is the actual name given\nReturns: True if the object's name matches the expected objects name, otherwise false\n")))}f.isMDXComponent=!0}}]);
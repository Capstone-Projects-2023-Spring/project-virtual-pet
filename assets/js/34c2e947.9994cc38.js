"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8632],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:5,description:"Canvas endpoints necessary to retrieve the information we need from a user's Canvas account."},s="Canvas API Specs",o={unversionedId:"api-specification/canvas-endpoints",id:"api-specification/canvas-endpoints",title:"Canvas API Specs",description:"Canvas endpoints necessary to retrieve the information we need from a user's Canvas account.",source:"@site/docs/api-specification/canvas-endpoints.md",sourceDirName:"api-specification",slug:"/api-specification/canvas-endpoints",permalink:"/project-virtual-pet/docs/api-specification/canvas-endpoints",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/api-specification/canvas-endpoints.md",tags:[],version:"current",lastUpdatedBy:"mgclay",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Canvas endpoints necessary to retrieve the information we need from a user's Canvas account."},sidebar:"docsSidebar",previous:{title:"Study Buddies - User Registration and Validation API",permalink:"/project-virtual-pet/docs/api-specification/openapi-spec"},next:{title:"Backend Class Documentation",permalink:"/project-virtual-pet/docs/api-specification/backend-class-doc"}},l={},u=[{value:"Notes:",id:"notes",level:2},{value:"How to read the next section",id:"how-to-read-the-next-section",level:2},{value:"Action",id:"action",level:3},{value:"Endpoints for Task Generation",id:"endpoints-for-task-generation",level:2},{value:"List your courses",id:"list-your-courses",level:3},{value:"List assignments",id:"list-assignments",level:3},{value:"List the TODO items",id:"list-the-todo-items",level:3},{value:"OAuth2",id:"oauth2",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"canvas-api-specs"},"Canvas API Specs"),(0,i.kt)("h2",{id:"notes"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Base URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://templeu.instructure.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.pagination.html"},"Pagination"),": Requests that return multiple items will be paginated to 10 items by default. You can set a custom per-page amount with the ?per_page parameter. There is an unspecified limit to how big you can set per_page to.")),(0,i.kt)("h2",{id:"how-to-read-the-next-section"},"How to read the next section"),(0,i.kt)("h3",{id:"action"},"Action"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request"),": Description"),(0,i.kt)("li",{parentName:"ul"},"Parameters: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"type parameter1 --\x3e description of parameter"))),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"The request Katrina tried with her own Canvas account & Postman and it worked")),(0,i.kt)("li",{parentName:"ul"},"Returns:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the relevent fields we'll want to collect and store from this call")))),(0,i.kt)("h2",{id:"endpoints-for-task-generation"},"Endpoints for Task Generation"),(0,i.kt)("h3",{id:"list-your-courses"},(0,i.kt)("a",{parentName:"h3",href:"https://canvas.instructure.com/doc/api/courses.html#method.courses.index"},"List your courses")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v1/courses"),": Retrieve a paginated list of courses in this account."),(0,i.kt)("li",{parentName:"ul"},"Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string ",(0,i.kt)("inlineCode",{parentName:"li"},"enrollment_state")," --\x3e return courses where the user has an enrollment with the given state (",(0,i.kt)("inlineCode",{parentName:"li"},"active"),")"))),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"GET https://templeu.instructure.com/api/v1/courses/?enrollment_state=active&per_page=100"))),(0,i.kt)("h3",{id:"list-assignments"},(0,i.kt)("a",{parentName:"h3",href:"https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index"},"List assignments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v1/courses/:course_id/assignments"),": Returns the paginated list of assignments for the current course or assignment group."),(0,i.kt)("li",{parentName:"ul"},"Parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string ",(0,i.kt)("inlineCode",{parentName:"li"},"include")," submission --\x3e the user's current submission for each assignment (which holds score)"))),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"GET https://templeu.instructure.com/api/v1/courses/124235/assignments?per_page=100&include=submission")),(0,i.kt)("li",{parentName:"ul"},"Returns:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'integer "id" --\x3e assignment id'),(0,i.kt)("li",{parentName:"ul"},'string "description" --\x3e description of assignment'),(0,i.kt)("li",{parentName:"ul"},'string "due_at" --\x3e date/time in ISO 8601 format for due date of assignment'),(0,i.kt)("li",{parentName:"ul"},'integer "points_possible"'),(0,i.kt)("li",{parentName:"ul"},'string "name" --\x3e assignment name'),(0,i.kt)("li",{parentName:"ul"},'boolean "is_quiz_assignment" --\x3e tells you whether it\'s an Assignment or a Quiz'),(0,i.kt)("li",{parentName:"ul"},'integer "course_id" --\x3e the associated course that this is from (which we needed to get here anyway)'),(0,i.kt)("li",{parentName:"ul"},'"submission": ',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'integer "score"'),(0,i.kt)("li",{parentName:"ul"},'boolean "late"'),(0,i.kt)("li",{parentName:"ul"},'string "workflow_state" --\x3e such as "graded", "submitted", "unsubmitted", "published"')))))),(0,i.kt)("h3",{id:"list-the-todo-items"},(0,i.kt)("a",{parentName:"h3",href:"https://canvas.instructure.com/doc/api/users.html#method.users.todo_items"},"List the TODO items")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v1/users/self/todo"),": A paginated list of the current user's list of todo items. There is a limit to the number of items returned. Note: the reason we probably want to use the List courses endpoint then retrieve the list of assignments by each course is because we can better filter through the assignments & include undated assignments. And I am not sure how far out the TODOs go. "),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"GET https://templeu.instructure.com/api/v1/users/self/todo")),(0,i.kt)("li",{parentName:"ul"},"Returns:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'string "context_name" --\x3e name of associated course'),(0,i.kt)("li",{parentName:"ul"},'integer "course_id" --\x3e course id for the TODO item'),(0,i.kt)("li",{parentName:"ul"},'"assignment":',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'integer "id" --\x3e assignment id'),(0,i.kt)("li",{parentName:"ul"},'string "description" --\x3e description of assignment'),(0,i.kt)("li",{parentName:"ul"},'string "due_at" --\x3e date/time in ISO 8601 format for due date of assignment'),(0,i.kt)("li",{parentName:"ul"},'string "name" --\x3e name of assignment'),(0,i.kt)("li",{parentName:"ul"},'integer "points_possible"'))),(0,i.kt)("li",{parentName:"ul"},'string "workflow_state" --\x3e such as "graded", "submitted", "unsubmitted", "published"'),(0,i.kt)("li",{parentName:"ul"},'boolean "is_quiz_assignment" --\x3e tells you whether it\'s an Assignment or a Quiz')))),(0,i.kt)("h2",{id:"oauth2"},(0,i.kt)("a",{parentName:"h2",href:"https://canvas.instructure.com/doc/api/file.oauth.html"},"OAuth2")),(0,i.kt)("p",null,"Read ",(0,i.kt)("a",{parentName:"p",href:"https://canvas.instructure.com/doc/api/file.oauth.html#accessing-canvas-api"},"this")," for a walkthrough, which I have summarized below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.oauth.html#manual-token-generation"},"Manual Token Generation"),': These are steps for obtaining an Access Token for testing the above Canvas endpoints as an individual user. However, "asking any other user to manually generate a token and enter it into your application is a violation of Canvas\' terms of service. Applications in use by multiple users MUST use OAuth to obtain tokens".',(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Go to your personal Canvas page"),(0,i.kt)("li",{parentName:"ol"},"Navigate to Account > Settings > Approved Integrations"),(0,i.kt)("li",{parentName:"ol"},"Click the button to generate a new access token."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.oauth.html#oauth2-flow"},"OAuth2 Flow"),": Our application can rely on Canvas for a user's identity. During step 1 of the web application flow below, specify the optional scope parameter as ",(0,i.kt)("inlineCode",{parentName:"li"},"scope=/auth/userinfo"),". When the user is asked to grant our application access in step 2 of the web application flow, they will also be given an option to remember their authorization. If they grant access and remember the authorization, Canvas will skip step 2 of the request flow for future requests.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Step 1: Redirect users to request Canvas access",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET https://<canvas-install-url>/login/oauth2/auth?client_id=XXX&response_type=code&state=YYY&redirect_uri=https://example.com/oauth2response")," is a sample request --\x3e see ",(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.oauth_endpoints.html#get-login-oauth2-auth"},"here")," for more details"))),(0,i.kt)("li",{parentName:"ol"},"Step 2: Redirect back to the request_uri, or out-of-band redirect",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://www.example.com/oauth2response?code=XXX&state=YYY")," OAuth2 response contained in query string if the user accepts our request, when Canvas redirects back to our request_uri --\x3e see ",(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.oauth.html#oauth2-flow-2"},"here")," for error handling"),(0,i.kt)("li",{parentName:"ul"},"The app can then extract the code, and use it along with the client_id and client_secret to obtain the final access_key"))),(0,i.kt)("li",{parentName:"ol"},"Step 3: Exchange the code for the final access token",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{width:"1104",alt:"Screen Shot 2023-02-26 at 11 21 46 PM",src:"https://user-images.githubusercontent.com/73796086/221473642-377b74f4-b62f-4a7f-b02c-9f4f13ec7159.png"})))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.oauth.html#using-access-tokens"},"Using an Access Token to authenticate requests"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{width:"1103",alt:"Screen Shot 2023-02-26 at 11 21 30 PM",src:"https://user-images.githubusercontent.com/73796086/221473614-9f855814-3a11-43f1-b024-1d2081351fe4.png"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.oauth.html#using-refresh-tokens"},"Using a Refresh Token to get a new Access Token"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{width:"1089",alt:"Screen Shot 2023-02-26 at 11 20 30 PM",src:"https://user-images.githubusercontent.com/73796086/221473505-2f36f50e-8bf5-4baf-a992-26a44ac53636.png"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://canvas.instructure.com/doc/api/file.oauth_endpoints.html#delete-login-oauth2-token"},"Logging Out"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send a DELETE request to login/oauth2/token")))))}c.isMDXComponent=!0}}]);
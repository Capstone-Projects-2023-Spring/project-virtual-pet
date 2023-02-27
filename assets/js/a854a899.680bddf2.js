"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},o="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-virtual-pet/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Christine Cho",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-virtual-pet/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-virtual-pet/docs/requirements/system-block-diagram"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-overview"},"System Overview"),(0,n.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,n.kt)("p",null,"This document proposes a progressive web application that combines the benefits of gamification and personal development to enhance the study experience. The application allows Users to take care of a Virtual Pet, which serves as a study companion and motivator. Users can set daily or weekly goals, set reminders, track their progress, and connect with their Canvas accounts to track assignments. Progress on these goals will directly influence the Virtual Pet\u2019s appearance and mood, inspiring feelings of motivation, companionship, responsibility, and solidarity in the User. By using this application, Users will have an engaging and effective way to improve their academic performance."),(0,n.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,n.kt)("p",null,"The frontend of the app will be built using JavaScript, React, HTML, and CSS. React will be used to build UI components and manage the state of the application, and JavaScript, HTML, and CSS will be used to create the User interface and handle User interactions. The backend will be built using Python and Django to handle User authentication and authorization, data storage, and the algorithms that determine how the Virtual Pet's appearance changes based on the student's study habits. SQLite will be used to store the User's data, such as their study goals, progress, and rewards. The application will also integrate with Canvas to allow students to track their assignments and classes and include them as personal study goals."),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Similar products include ",(0,n.kt)("a",{parentName:"p",href:"https://www.mystudylife.com/"},"My Study Life")," and ",(0,n.kt)("a",{parentName:"p",href:"https://quizlet.com/"},"Quizlet"),". These are both closed-source products that aim to help students improve their academic performance. My Study Life is an online student planner which allows students to keep track of their deadlines and classes. Quizlet allows students to create flashcards and quizzes to study for their classes. The Virtual Pet Study Buddy App is similar to these products in that the goal is to provide resources to help students succeed academically and stay on top of their coursework. However, this app also incorporates the unique aspect of a virtual pet companion to help them stay motivated to study. The Virtual Pet Study Buddy app will include some of the same features as Quizlet and My Study Life, like setting reminders or creating and linking to study materials. "),(0,n.kt)("br",null),(0,n.kt)("p",null,"Another closed-source mobile application, titled ",(0,n.kt)("a",{parentName:"p",href:"https://finchcare.com/"},"Finch"),", involves taking care of a virtual pet to achieve self-care goals. ",(0,n.kt)("a",{parentName:"p",href:"https://habitica.com/static/home"},"Habitica")," is an open-source web application which helps users gamify their life by allowing them to set goals for keeping up with personal habits. Incorporating the concept of caring for a pet and gamifying personal and academic tasks, as in this application, with the features of a study app, will allow users a more personalized and fun experience to succeed in their academic pursuits."))}u.isMDXComponent=!0}}]);
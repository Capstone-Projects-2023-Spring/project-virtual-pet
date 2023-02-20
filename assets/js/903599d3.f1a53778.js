"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Component Descriptions",s={unversionedId:"system-architecture/component-descriptions",id:"system-architecture/component-descriptions",title:"Component Descriptions",description:"System Block Diagram",source:"@site/docs/system-architecture/component-descriptions.md",sourceDirName:"system-architecture",slug:"/system-architecture/component-descriptions",permalink:"/project-virtual-pet/docs/system-architecture/component-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/system-architecture/component-descriptions.md",tags:[],version:"current",lastUpdatedBy:"jay-newman",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-virtual-pet/docs/system-architecture/design"},next:{title:"Class Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/class-diagrams"}},c={},p=[{value:"System Block Diagram",id:"system-block-diagram",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"component-descriptions"},"Component Descriptions"),(0,a.kt)("h2",{id:"system-block-diagram"},"System Block Diagram"),(0,a.kt)("p",null,"A description the different components and their interfaces. For example: client, server, database."),(0,a.kt)("h1",{id:"reactjs"},"React.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A component based web development framework for designing single-page \nprogressive web applications. We will use React to construct our front-end.\n")),(0,a.kt)("h1",{id:"django"},"Django"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A high-level Python web development framework that abstracts many typical \nfeatures such as session authentication and database management. We will use\nDjango to construct our back-end and act as an ORM for our database. \n")),(0,a.kt)("h1",{id:"sqlite"},"SQLite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A light-weight and server-less SQL database engine. We will use SQLite to\nstore user profile information and related data such as avatar stats and\ninventory items.\n")),(0,a.kt)("h1",{id:"django-rest-framework-api"},"Django Rest Framework (API)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A Django API framework that provides tools for creating RESTful APIs. We\nwill use Django Rest Framework to server a robust and intuitive REST API to\nour front-end via URL endpoints, with a focus on constructing single \nendpoints that will serve multiple CRUD operations to our SQLite database to\nsimplify the front-end logic and reduce the number of total API calls. \n")),(0,a.kt)("h1",{id:"server-and-static-store"},"Server and Static Store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"We will serve each application via a shared Docker container. This Docker\ncontainer will live on an in-house Server, using NoDNS as a routing service.\nIn addition, the Server will act as a store for Static Resources such as pet\nanimation frames.\n")),(0,a.kt)("h1",{id:"canvas"},"Canvas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"An open source online classroom application that is widely used by \nuniversities. We will use the Canvas API to construct Canvas integration\nservices and integrate these services with our application.\n")))}u.isMDXComponent=!0}}]);
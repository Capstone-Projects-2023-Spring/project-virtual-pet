"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8525],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>S});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),p=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(a.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,S=d["".concat(a,".").concat(u)]||d[u]||m[u]||o;return t?i.createElement(S,s(s({ref:n},l),{},{components:t})):i.createElement(S,s({ref:n},l))}));function S(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3},s="Schedule",c={unversionedId:"development-plan/schedule",id:"development-plan/schedule",title:"Schedule",description:"",source:"@site/docs/development-plan/schedule.md",sourceDirName:"development-plan",slug:"/development-plan/schedule",permalink:"/project-virtual-pet/docs/development-plan/schedule",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/development-plan/schedule.md",tags:[],version:"current",lastUpdatedBy:"Harrison Fedor",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Tasks",permalink:"/project-virtual-pet/docs/development-plan/tasks"},next:{title:"Development Environment",permalink:"/project-virtual-pet/docs/development-plan/development-environment"}},a={},p=[],l={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schedule"},"Schedule"),(0,r.kt)("mermaid",{value:"gantt\n    title StudyBuddy Schedule Gantt Chart\n    todayMarker stroke-width:10px,stroke:#0f0,opacity:0.4\n    dateFormat  YYYY-MM-DD\n\n        section Sprint 0\n        Software Dev.: , 2023-02-08, 6d\n        section Sprint 0\n        Sprint 0 Planning Meeting: active, 2023-02-10, 1d\n        section Sprint 0\n        Brainstorm Progression System: , 2023-02-10, 1d\n        section Sprint 0\n        Complete Software Development Plan: , 2023-02-11, 1d\n        section Sprint 0\n        Revise Requirements Document: , 2023-02-11, 1d\n        section Sprint 0\n        Submit Software Development Plan Assignment: milestone, 2023-02-12, 1d\n\n        section Sprint 1\n        Design Doc & Research: , 2023-02-15, 2w\n        section Sprint 1\n        Sprint 1 Planning Meeting: active, 2023-02-15, 1d\n        section Sprint 1\n        Research/learn React, Django:  , 2023-02-16, 1d\n        section Sprint 1\n        Set up simple site:  , 2023-02-16, 1d\n        section Sprint 1\n        Create user account management system:  , 2023-02-16, 1d\n        section Sprint 1\n        Decide on pet art style:  , 2023-02-16, 1d\n        section Sprint 1\n        Complete Design Document Part 1:  , 2023-02-18, 1d\n        section Sprint 1\n        Submit Design Document Part 1 (Architecture) Assignment: milestone, , 2023-02-19, 1d\n        section Sprint 1\n         Complete Design Document Part 2:  , 2023-02-23, 1d\n        section Sprint 1\n         Submit Design Document Part 2 (API) Assignment: milestone, , 2023-02-26, 1d\n\n        section Sprint 2\n         Testing Doc & First Demo: , 2023-03-01, 2w\n        section Sprint 2\n         Sprint Planning Meeting: active, 2023-03-01, 1d\n         section Sprint 2\n         Deliver first pet design: , 2023-03-02, 1d\n         section Sprint 2\n         Create settings page : , 2023-03-02, 1d\n         section Sprint 2\n         Create API : , 2023-03-02, 1d\n         section Sprint 2\n         Create account information page : , 2023-03-02, 1d\n        section Sprint 2\n        Complete Test Procedures Document: , 2023-03-04, 1d\n        section Sprint 2\n        Submit Test Procedures Document Assignment: milestone, , 2023-03-05, 1d\n        section Sprint 2\n         Milestone Demo 1 :crit, milestone,  , 2023-03-14, 1d\n\n        section Sprint 3\n        Goals/Tasks/Reminders: , 2023-03-15, 2w\n        section Sprint 3\n        Sprint Planning Meeting: active , 2023-03-15, 1d\n        section Sprint 3\n         Stand Up Meeting Lecture: active , 2023-03-22, 1d\n        section Sprint 3\n         Implement task/goal setting: , 2023-03-22, 1d\n         section Sprint 3\n         Set up Canvas integration: , 2023-03-22, 1d\n        section Sprint 3\n         Milestone Demo 2 :crit, milestone,  , 2023-03-28, 1d\n\n        section Sprint 4\n        Graphics/Interactivity: , 2023-03-29, 2w\n        section Sprint 4\n         Sprint Planning Meeting: active , 2023-03-29, 1d\n        section Sprint 4\n         Stand Up Meeting Lecture: active , 2023-04-05, 1d\n         section Sprint 4\n         Create pet viewer window: , 2023-04-07, 1d\n         section Sprint 4\n         Multiple frames for each level: , 2023-04-07, 1d\n         section Sprint 4\n         Implement progression system graphically: , 2023-04-07, 1d\n        section Sprint 4\n         Milestone Demo 3 :crit, milestone,  , 2023-04-11, 1d\n\n        section Sprint 5\n         Final Demo: , 2023-04-12, 16d\n        section Sprint 5\n         Sprint Planning Meeting: active , 2023-04-12, 1d\n        section Sprint 5\n         Stand Up Meeting Lecture: active , 2023-04-19, 1d\n         section Sprint 5\n         Host site: , 2023-04-22, 1d\n        section Sprint 5\n         Add more states to pet(s): , 2023-04-22, 1d\n        section Sprint 5\n         Final Presentation & Demo :crit, milestone,  , 2023-04-27, 1d\n        section Sprint 5\n         Submit Test Report Document Assignment: milestone, , 2023-05-06, 1d\n        section Sprint 5\n         Submit Final Software Release Assignment: milestone, , 2023-05-07, 1d"}))}d.isMDXComponent=!0}}]);
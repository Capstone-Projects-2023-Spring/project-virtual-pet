"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},o="Database Diagrams",s={unversionedId:"system-architecture/database-diagrams",id:"system-architecture/database-diagrams",title:"Database Diagrams",description:"Entity-Relation Diagram",source:"@site/docs/system-architecture/database-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/database-diagrams",permalink:"/project-virtual-pet/docs/system-architecture/database-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/system-architecture/database-diagrams.md",tags:[],version:"current",lastUpdatedBy:"mgclay",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Sequence Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/sequence-diagrams"},next:{title:"API Specification",permalink:"/project-virtual-pet/docs/category/api-specification"}},c={},l=[{value:"Entity-Relation Diagram",id:"entity-relation-diagram",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-diagrams"},"Database Diagrams"),(0,r.kt)("h2",{id:"entity-relation-diagram"},"Entity-Relation Diagram"),(0,r.kt)("img",{src:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/blob/e76593c753687652403314ca2000eb3c1ee0aeb8/documentation/docs/system-architecture/database_diagram.png",alt:"Entity-Relation Diagram"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n\nerDiagram\n\n    USER ||--|{ AVATAR : owns\n    USER ||--o{ INVENTORY : owns\n    USER ||--o{ TASK : owns\n    USER ||--|| USERMETA : owns\n    AVATAR }|--|| MOODSTORE : references\n    USER {\n        charfield username PK \n        string first_name\n        string last_name\n        string password_hash "PBKDF2 or similar"\n        string email\n        datetime last_login\n        datetime date_joined\n        int active_avatar FK "avatar_id from AVATAR table"        \n    }\n\n    AVATAR {\n        int avatar_id PK\n        charfield owner FK "USER - username"\n        charfield avatar_name \n        enum avatar_type FK  \n        int total_xp \n        datetime last_interaction\n        datetime last_feed\n        datetime birthday\n        string flavour_text "u for uropian"\n    }\n\n    INVENTORY {\n        int inventory_id PK\n        charfield username FK\n        enum candy_base_type "SMALL, MEDIUM, LARGE, CAKE"\n        enum candy_level "multiplier for basetype, BEGINNER,\n            NOVICE,INTERMEDIATE, ADVANCED, EXPERT"   \n        int quantity\n        \n    }\n\n    TASK {\n        int task_id PK\n        charfield username FK\n        datetime due_date "optional"\n        bool completed "default = False"\n        bool recurring "default = False"\n        int recurrence_time_delta "optional default = 0, required if recurring"\n        int completion_status "1-4"\n        charfield course "optional - link Canvas task with course"\n        textfield description "optional field giving notes about task"\n\n    }\n\n    USERMETA {\n\n        charfield username FK\n        datetime birthday "Optional: Can get a birthday notification and Pet State will go to GREAT"\n        textfield description "Optional: User can give a brief description of their goals for profile"\n\n    }\n\n    MOODSTORE {\n\n        charfield avatar_type PK\n        charfield moodpath_sad "filename in static store"\n        charfield moodpath_neutral "filename in static store"\n        charfield moodpath_happy "filename in static store"\n\n    }\n\n\n\n```\n\n\n    This diagram shows the individual tables and their relations in our SQLite data-base. The tables are as follows:\n\n    - USER the Django default user implementation \n    - AVATAR holds pet information and relate back to USER(many2one)\n    - TASK holds tasks specified by USER(many2one)\n    - INVENTORY holds inventory items currently held by USER(many2one)\n    - USERMETA holds additional optional information about USER(one2one)\n    - MOODSTORE relates animation frame palettes to AVATAR(one2many)\n')))}m.isMDXComponent=!0}}]);
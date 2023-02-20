"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>P});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=s.createContext({}),l=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return s.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,P=u["".concat(o,".").concat(m)]||u[m]||d[m]||n;return a?s.createElement(P,i(i({ref:t},p),{},{components:a})):s.createElement(P,i({ref:t},p))}));function P(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=a(7462),r=(a(7294),a(3905));const n={sidebar_position:4},i="Sequence Diagrams",c={unversionedId:"system-architecture/sequence-diagrams",id:"system-architecture/sequence-diagrams",title:"Sequence Diagrams",description:"Use Case 1",source:"@site/docs/system-architecture/sequence-diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence-diagrams",permalink:"/project-virtual-pet/docs/system-architecture/sequence-diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/system-architecture/sequence-diagrams.md",tags:[],version:"current",lastUpdatedBy:"Christine Cho",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Class Diagrams",permalink:"/project-virtual-pet/docs/system-architecture/class-diagrams"},next:{title:"Algorithms",permalink:"/project-virtual-pet/docs/system-architecture/algorithms"}},o={},l=[{value:"Use Case 1",id:"use-case-1",level:2},{value:"Use Case 2",id:"use-case-2",level:2},{value:"Use Case 3",id:"use-case-3",level:2},{value:"Use Case 4",id:"use-case-4",level:2},{value:"Use Case 5",id:"use-case-5",level:2},{value:"Use Case 6",id:"use-case-6",level:2},{value:"Use Case 7",id:"use-case-7",level:2},{value:"Use Case 8",id:"use-case-8",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,r.kt)("h2",{id:"use-case-1"},"Use Case 1"),(0,r.kt)("h2",{id:"use-case-2"},"Use Case 2"),(0,r.kt)("h2",{id:"use-case-3"},"Use Case 3"),(0,r.kt)("h2",{id:"use-case-4"},"Use Case 4"),(0,r.kt)("h2",{id:"use-case-5"},"Use Case 5"),(0,r.kt)("mermaid",{value:"sequenceDiagram\n    title Updating Task Progress\n    actor User as User\n    participant PageDisplay\n    participant TaskPage\n    participant TaskList\n    participant TaskItem\n    participant TaskDetails\n    participant APIMiddleware\n    \n    User->>+TaskItem: User selects a task to view details\n    TaskItem->>TaskDetails: render\n    User->>TaskDetails: User updates progress by indicating they're half-way through\n    TaskDetails->>TaskDetails: updateTask()\n    %% Note over TaskDetails \n    PageDisplay->>APIMiddleware: UPDATE (HTTP) task, inventory\n    APIMiddleware--\x3e>PageDisplay: HTTP 200 Content-Type: JSON[] taskList, JSON[] inventory\n    PageDisplay--\x3e>PageDisplay: rerender\n    PageDisplay->>TaskPage: render\n    TaskPage->>TaskList: render\n    TaskList->>TaskItem: render\n    deactivate TaskItem"}),(0,r.kt)("h2",{id:"use-case-6"},"Use Case 6"),(0,r.kt)("mermaid",{value:"sequenceDiagram\ntitle Tracking Task Progress\n    actor u as User\n    participant Main\n    participant PageDisplay\n    participant PetProfPage\n    participant PPTaskList\n    participant PPTaskItem\n    participant PPTaskDetails\n    participant APIMiddleware\n    Main ->> Main: fetchData()\n    Main ->> APIMiddleware: GET (HTTP) avatarInfo\n    APIMiddleware --\x3e> Main: HTTP 200 Content-Type: JSON avatarInfo\n    Main ->> PageDisplay: render\n    PageDisplay ->> PageDisplay: fetchData\n    PageDisplay ->> APIMiddleware: GET (HTTP) taskList\n    APIMiddleware --\x3e> PageDisplay: HTTP 200 Content-Type: JSON[] taskList\n    u ->>+PetProfPage: User selects 'Pet Profile' page\n    PetProfPage ->>PPTaskList: render\n    PPTaskList ->>PPTaskItem: render\n    u ->>+ PPTaskItem: User selects a specific task under pet profile\n    PPTaskItem ->> PPTaskDetails: render\n    deactivate PetProfPage\n    deactivate PPTaskItem"}),(0,r.kt)("p",null,"This sequence diagram displays the way in which the user can use the Pet Profile page to see more information about their progress, as shown in Use Case 6. By selecting a task under the pet profile page, they can see their current progress towards completing it, as well as the time remaining before the deadline (whether it be a self-set deadline, or one imposed by Canvas)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The avatar information is retrieved through an API call."),(0,r.kt)("li",{parentName:"ol"},"The page display component is rendered."),(0,r.kt)("li",{parentName:"ol"},"The list of tasks is retrieved through an API call."),(0,r.kt)("li",{parentName:"ol"},"The user selects 'Pet Profile' page, and selects a specific task to see more information."),(0,r.kt)("li",{parentName:"ol"},"The pet profile page renders the task list, task item, and task details components.")),(0,r.kt)("h2",{id:"use-case-7"},"Use Case 7"),(0,r.kt)("h2",{id:"use-case-8"},"Use Case 8"))}u.isMDXComponent=!0}}]);
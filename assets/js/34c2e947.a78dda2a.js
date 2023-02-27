"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,v=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5,description:"Canvas endpoints necessary to retrieve the information we need from a user's Canvas account."},i="Canvas Endpoints",c={unversionedId:"api-specification/canvas-endpoints",id:"api-specification/canvas-endpoints",title:"Canvas Endpoints",description:"Canvas endpoints necessary to retrieve the information we need from a user's Canvas account.",source:"@site/docs/api-specification/canvas-endpoints.md",sourceDirName:"api-specification",slug:"/api-specification/canvas-endpoints",permalink:"/project-virtual-pet/docs/api-specification/canvas-endpoints",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/api-specification/canvas-endpoints.md",tags:[],version:"current",lastUpdatedBy:"Alexander-Russakoff",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Canvas endpoints necessary to retrieve the information we need from a user's Canvas account."},sidebar:"docsSidebar",previous:{title:"CalculatorModel.java",permalink:"/project-virtual-pet/docs/api-specification/calculator-model-generated"},next:{title:"Test Procedures",permalink:"/project-virtual-pet/docs/category/test-procedures"}},s={},p=[{value:"List active courses in an account",id:"list-active-courses-in-an-account",level:3},{value:"<code>GET /api/v1/accounts/:account_id/courses</code>",id:"get-apiv1accountsaccount_idcourses",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"canvas-endpoints"},"Canvas Endpoints"),(0,a.kt)("h3",{id:"list-active-courses-in-an-account"},"List active courses in an account"),(0,a.kt)("h2",{id:"get-apiv1accountsaccount_idcourses"},(0,a.kt)("inlineCode",{parentName:"h2"},"GET /api/v1/accounts/:account_id/courses")),(0,a.kt)("p",null,"Retrieve a paginated list of courses in this account."))}l.isMDXComponent=!0}}]);
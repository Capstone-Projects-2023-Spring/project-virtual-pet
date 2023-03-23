"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||n;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:6,description:"Backend class descriptions."},l="Backend Class Documentation",s={unversionedId:"api-specification/backend-class-doc",id:"api-specification/backend-class-doc",title:"Backend Class Documentation",description:"Backend class descriptions.",source:"@site/docs/api-specification/backend-class-doc.md",sourceDirName:"api-specification",slug:"/api-specification/backend-class-doc",permalink:"/project-virtual-pet/docs/api-specification/backend-class-doc",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-virtual-pet/edit/main/documentation/docs/api-specification/backend-class-doc.md",tags:[],version:"current",lastUpdatedBy:"Ian Tyler Applebaum",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Backend class descriptions."},sidebar:"docsSidebar",previous:{title:"Canvas API Specs",permalink:"/project-virtual-pet/docs/api-specification/canvas-endpoints"},next:{title:"Study Buddies Backend Sphinx Docs",permalink:"/project-virtual-pet/docs/api-specification/backend-sphinx"}},o={},p=[{value:"MyTokenObtainPairView",id:"mytokenobtainpairview",level:3},{value:"MyTokenObtainPairSerializer",id:"mytokenobtainpairserializer",level:3},{value:"RegisterView",id:"registerview",level:3},{value:"RegisterSerializer",id:"registerserializer",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backend-class-documentation"},"Backend Class Documentation"),(0,i.kt)("h3",{id:"mytokenobtainpairview"},"MyTokenObtainPairView"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Purpose: Sub class to provide a view to create the access token and the refresh token with custom claims. Class inherits from TokenObtainPairView."),(0,i.kt)("li",{parentName:"ul"},"Datafields: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"serializer_class",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type: Alias"),(0,i.kt)("li",{parentName:"ul"},"Purpose: Set serializer for custom claims")))))),(0,i.kt)("h3",{id:"mytokenobtainpairserializer"},"MyTokenObtainPairSerializer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Purpose: Sub class to serialize token with custom claims .Class inherits from TokenObtainPairSerializer."),(0,i.kt)("li",{parentName:"ul"},"Methods:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"+"," get_token()",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Purpose: Produce refresh token for view used to generate access token."),(0,i.kt)("li",{parentName:"ul"},"Pre-condition: User sends valid login credentials."),(0,i.kt)("li",{parentName:"ul"},"Post-Condition: A valid token is returned."),(0,i.kt)("li",{parentName:"ul"},"Parameters: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Token",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Purpose: stores super().get_token so custom claims can be applied"))))),(0,i.kt)("li",{parentName:"ul"},"Return Values: Jwt refresh token"),(0,i.kt)("li",{parentName:"ul"},"Exceptions Thrown: Error code in rest response")))))),(0,i.kt)("h3",{id:"registerview"},"RegisterView"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Purpose: Sub class to provide a view for a new user to register an account. Class inherits from generics.CreateAPIView."),(0,i.kt)("li",{parentName:"ul"},"Datafields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"queryset",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type: List of objects"),(0,i.kt)("li",{parentName:"ul"},"Purpose: Store all User objects from the database."))),(0,i.kt)("li",{parentName:"ul"},"permission_classes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type: Permissions class"),(0,i.kt)("li",{parentName:"ul"},"Purpose: Store permissions class AllowAny because any potential should be allowed to register as a new user in the system."))),(0,i.kt)("li",{parentName:"ul"},"serializer_class",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type: Serializer Class"),(0,i.kt)("li",{parentName:"ul"},"Purpose: Store RegisterSerializer class.")))))),(0,i.kt)("h3",{id:"registerserializer"},"RegisterSerializer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Purpose: Sub class to serialize registration information."),(0,i.kt)("li",{parentName:"ul"},"Inner Class:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Class Meta",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Purpose: Validate request data in specified format."))))),(0,i.kt)("li",{parentName:"ul"},"Datafields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"password",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type: SHA256"),(0,i.kt)("li",{parentName:"ul"},"Purpose: Validate and clean data"))),(0,i.kt)("li",{parentName:"ul"},"password2",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type: SHA256"),(0,i.kt)("li",{parentName:"ul"},"Purpose: Validate and clean data"))))),(0,i.kt)("li",{parentName:"ul"},"Methods:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"+"," validate():",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Purpose: Check if password and password2 match."),(0,i.kt)("li",{parentName:"ul"},"Pre-condition: User has not tried to register with the same credentials in the past."),(0,i.kt)("li",{parentName:"ul"},"Post-Condition: A new user is added to the database with the provided credentials."),(0,i.kt)("li",{parentName:"ul"},"Parameters: dictionary",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"attrs"))),(0,i.kt)("li",{parentName:"ul"},"Return Values: attrs"),(0,i.kt)("li",{parentName:"ul"},"Exceptions Thrown: Validation error"))),(0,i.kt)("li",{parentName:"ul"},"+"," create():",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Purpose: Create new user in database."),(0,i.kt)("li",{parentName:"ul"},"Pre-condition: User is attempting to register."),(0,i.kt)("li",{parentName:"ul"},"Post-Condition: User will be able to login"),(0,i.kt)("li",{parentName:"ul"},"Parameters: dictionary",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Validate_data"))),(0,i.kt)("li",{parentName:"ul"},"Return Values: user"),(0,i.kt)("li",{parentName:"ul"},"Exceptions Thrown: User already exists")))))))}c.isMDXComponent=!0}}]);
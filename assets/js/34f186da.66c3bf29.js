"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8030:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>c,toc:()=>l,default:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"annotations",title:"Annotations"},c={unversionedId:"schema-generator/customizing-schemas/annotations",id:"version-5.x.x/schema-generator/customizing-schemas/annotations",isDocsHomePage:!1,title:"Annotations",description:"graphql-kotlin-schema-generator ships with a number of annotation classes to allow you to enhance your GraphQL schema",source:"@site/versioned_docs/version-5.x.x/schema-generator/customizing-schemas/annotations.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/annotations",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/annotations",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/customizing-schemas/annotations.md",version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1643402233,formattedLastUpdatedAt:"1/28/2022",frontMatter:{id:"annotations",title:"Annotations"},sidebar:"version-5.x.x/docs",previous:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/nested-arguments"},next:{title:"Generator Configuration & Hooks",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/generator-config"}},l=[],p={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," ships with a number of annotation classes to allow you to enhance your GraphQL schema\nfor things that can't be directly derived from Kotlin reflection."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./documenting-fields"},"@GraphQLDescription")," - Provide a description for a GraphQL field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./directives"},"@GraphQLDirective")," - Registers directive on a GraphQL field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./excluding-fields"},"@GraphQLIgnore")," - Exclude field from the GraphQL schema"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./renaming-fields"},"@GraphQLName")," - Override the name used for the type"),(0,o.kt)("li",{parentName:"ul"},"Kotlin built in ",(0,o.kt)("a",{parentName:"li",href:"./deprecating-schema"},"@Deprecated")," - Apply the GraphQL ",(0,o.kt)("inlineCode",{parentName:"li"},"@deprecated")," directive on the field"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./custom-type-reference"},"@GraphQLType")," - Allows specifying a return type that is not the Kotlin code")))}m.isMDXComponent=!0}}]);
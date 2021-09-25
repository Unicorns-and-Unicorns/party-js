"use strict";(self.webpackChunkparty_js_docs=self.webpackChunkparty_js_docs||[]).push([[6018],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4751:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={title:"Migrating from v1"},l=void 0,p={unversionedId:"migrating-v1-v2",id:"migrating-v1-v2",isDocsHomePage:!1,title:"Migrating from v1",description:"v2 of the library comes with a few API changes, which developers will have to adapt to. Below you can find references to methods shipped in v1, and how to mimic their functionality in v2.",source:"@site/docs/migrating-v1-v2.md",sourceDirName:".",slug:"/migrating-v1-v2",permalink:"/docs/migrating-v1-v2",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/migrating-v1-v2.md",tags:[],version:"current",frontMatter:{title:"Migrating from v1"},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Templates",permalink:"/docs/ref/templates"}},s=[{value:"Utility",id:"utility",children:[]},{value:"Effects",id:"effects",children:[]},{value:"Shapes",id:"shapes",children:[]},{value:"Variations",id:"variations",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"v2 of the library comes with a few API changes, which developers will have to adapt to. Below you can find references to methods shipped in v1, and how to mimic their functionality in v2."),(0,i.kt)("h2",{id:"utility"},"Utility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.init()"))),(0,i.kt)("p",null,"Since components in the library are now lazily initialized, and re-created whenever they are deemed missing, there is no need to re-initialize it, since it's done internally. However, if you do not want the components to be lazily initialized, you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"party.forceInit()")," to manually initialize the library's components."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"effects"},"Effects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.area(area, options)"))),(0,i.kt)("p",null,"This function is replaced by the ",(0,i.kt)("em",{parentName:"p"},"confetti")," template. For the new set of options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/templates"},"documentation")," of the template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"party.confetti(area);\n")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.element(element, options)"))),(0,i.kt)("p",null,"This function is replaced by the ",(0,i.kt)("em",{parentName:"p"},"confetti")," template. For the new set of options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/templates"},"documentation")," of the template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"party.confetti(element);\n")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.position(x, y, options)"))),(0,i.kt)("p",null,"This function is replaced by the ",(0,i.kt)("em",{parentName:"p"},"confetti")," template. For the new set of options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/templates"},"documentation")," of the template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"party.confetti(new party.Rect(x, y));\n")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.cursor(options)"))),(0,i.kt)("p",null,"This function is replaced by the ",(0,i.kt)("em",{parentName:"p"},"confetti")," template. For the new set of options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/templates"},"documentation")," of the template. Note that in order to retrieve the mouse position from ",(0,i.kt)("inlineCode",{parentName:"p"},"window.event"),", this has to be called inside the callback of a mouse event, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"onclick"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"party.confetti(window.event);\n")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.screen(options)"))),(0,i.kt)("p",null,"This function is replaced by the ",(0,i.kt)("em",{parentName:"p"},"confetti")," template, although it looks slightly different in v2. For the new set of options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/templates"},"documentation")," of the template. Note that this function no longer adapts to the screen's dimensions, you may need to modify the amount of emitted particles through ",(0,i.kt)("inlineCode",{parentName:"p"},"options.count"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"party.confetti(party.Rect.fromScreen());\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"shapes"},"Shapes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.registerShape(name, shapeDefinition)"))),(0,i.kt)("p",null,"v2 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/shapes"},"leverages the power of shapes"),", no longer only supporting primitive SVG shapes and polygons. You can now use ",(0,i.kt)("strong",{parentName:"p"},"any")," HTML string as a shape."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'party.resolvableShapes["myNewShape"] = "<div></div>";\n// You can now use "myNewShape" as the identifier of a shape to use in an effect.\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"variations"},"Variations"),(0,i.kt)("p",null,"Variations are no longer exported at top level, and are located under ",(0,i.kt)("inlineCode",{parentName:"p"},"party.variations.*")," instead."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.constant(value)"))),(0,i.kt)("p",null,"This utility function has been ",(0,i.kt)("strong",{parentName:"p"},"removed"),". You can directly pass a constant value to a variation instead."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.array(array)"))),(0,i.kt)("p",null,"This utility function has been ",(0,i.kt)("strong",{parentName:"p"},"removed"),". You can directly pass an array to a variation instead, and a random element from it will be picked when evaluating it."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.variation(value, variation, isAbsolute)"))),(0,i.kt)("p",null,"To prevent confusion, this function has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"party.skew(value, amount)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"party.skewRelative(value, percentage)")," respectively."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.minmax(min, max)"))),(0,i.kt)("p",null,"This variation function has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"party.variation.range(min, max)"),"."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"party.linearGradient(...colors)"))),(0,i.kt)("p",null,"This method is now a ",(0,i.kt)("em",{parentName:"p"},"component"),". New gradients can be created via ",(0,i.kt)("inlineCode",{parentName:"p"},"new party.Gradient(...colors)"),". To pass the gradient to a variation, one can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"gradientSample")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const myGradient = new party.Gradient(...colors);\nconst myVariation = party.variations.gradientSample(myGradient);\n")))}u.isMDXComponent=!0}}]);
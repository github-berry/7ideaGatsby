/*! For license information please see component---src-pages-contact-js-35fa99562d680d358210.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[501],{5900:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},384:function(e,t,n){"use strict";n.d(t,{ZP:function(){return d}});var a={_origin:"https://api.emailjs.com"},o=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},r=n(3144),i=n(5671),l=(0,r.Z)((function e(t){(0,i.Z)(this,e),this.status=t.status,this.text=t.responseText})),c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,r){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,n=new l(t);200===n.status||"OK"===n.text?o(n):r(n)})),i.addEventListener("error",(function(e){var t=e.target;r(new l(t))})),i.open("POST",a._origin+e,!0),Object.keys(n).forEach((function(e){i.setRequestHeader(e,n[e])})),i.send(t)}))},d={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";a._userID=e,a._origin=t},send:function(e,t,n,r){var i=r||a._userID;o(i,e,t);var l={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:n};return c("/api/v1.0/email/send",JSON.stringify(l),{"Content-type":"application/json"})},sendForm:function(e,t,n,r){var i=r||a._userID,l=function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);o(i,e,t);var d=new FormData(l);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",i),c("/api/v1.0/email/send-form",d)}}},6465:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(4942),o=n(4925),r=n(5900),i=n.n(r),l=n(7294),c=n(5893);var d=l.createContext({prefixes:{}});d.Consumer,d.Provider;function s(e,t){var n=(0,l.useContext)(d).prefixes;return e||n[t]||t}var m=["bsPrefix","fluid","as","className"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=l.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,r=e.as,l=void 0===r?"div":r,d=e.className,u=(0,o.Z)(e,m),f=s(n,"container"),g="string"==typeof a?"-".concat(a):"-fluid";return(0,c.jsx)(l,p(p({ref:t},u),{},{className:i()(d,a?"".concat(f).concat(g):f)}))}));f.displayName="Container",f.defaultProps={fluid:!1};var g=f},5617:function(e,t,n){"use strict";var a=n(7294),o=n(9),r=n(5444),i=o.default.div.withConfig({displayName:"Navbar__MainHeader",componentId:"sc-h4wduu-0"})(["width:100%;height:80px;border-bottom:solid 1px rgba(255,255,255,0.2);position:fixed;top:0;left:0;z-index:2;@media only screen and (min-width:1200px){z-index:3;}transition:all 1s cubic-bezier(0.16,1,0.3,1);display:block;box-sizing:border-box;background-color:",";@media only screen and (min-width:1200px){height:120px;}"],(function(e){return e.active&&"rgba(0, 0, 0, 0.8)"})),l=o.default.div.withConfig({displayName:"Navbar__MainLogo",componentId:"sc-h4wduu-1"})(["width:80px;height:80px;background-color:#d02020;position:absolute;top:0;left:0;padding:1rem;& a{color:#007bff;text-decoration:none;background-color:transparent;}& img{max-width:100%;height:auto;}@media only screen and (min-width:1200px){width:120px;height:120px;}"]),c=o.default.div.withConfig({displayName:"Navbar__MainNav",componentId:"sc-h4wduu-2"})(['box-sizing:border-box;display:none;margin-left:25%;& .main-menu{list-style:none;padding:0;margin:0;display:flex;-webkit-box-align:center;align-items:center;height:120px;}& .menu-item{list-style:none;display:list-item;text-align:-webkit-match-parent;}& a{font:400 normal 1rem/120px "Poppins";color:#fff;padding:64px 64px 64px 0px;text-transform:uppercase;text-decoration:none;&:hover{text-decoration:underline;color:#fff;}}@media only screen and (min-width:1200px){display:block;}']),d=(0,o.default)(r.Link).withConfig({displayName:"Navbar__GetInTouch",componentId:"sc-h4wduu-3"})(['padding:0 4rem;display:none;position:absolute;top:0;right:0;background-color:#d02020;color:#fff;font:700 normal 1.5rem/120px "Poppins";text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;color:#fff;}@media only screen and (min-width:1200px){display:block;}']);t.Z=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,a.useEffect)((function(){window.onscroll=function(){return e()};var e=function(){document.documentElement.scrollTop>20?n(!0):n(!1)}}),[]);return a.createElement(a.Fragment,null,a.createElement(i,{active:t,className:"main-header"},a.createElement(l,null,a.createElement("a",{href:"/",className:"custom-logo-link"},a.createElement("img",{className:"custom-logo",src:"https://7idea.com/wp-content/uploads/2021/08/logo-white.png",alt:"logo"}))),a.createElement(c,null,a.createElement("ul",{className:"main-menu"},[{link:"/",name:"HOME"},{link:"/about",name:"ABOUT US"},{link:"/project",name:"PROJECTS"},{link:"/client",name:"CLIENTS"},{link:"/team",name:"TEAM"},{link:"/contact",name:"CONTACT US"}].map((function(e,t){return a.createElement("li",{key:t,className:"menu-item"},a.createElement("a",{href:e.link},e.name))})))),a.createElement(d,{to:"/contact"},"Get In Touch")))}},9275:function(e,t,n){"use strict";var a=n(7294),o=n(9),r=o.default.div.withConfig({displayName:"Sidebar",componentId:"sc-1j4crdv-0"})(["left:",";position:fixed;width:240px;height:100%;top:0;background:#d01f20;transition:all 0.5s ease;@media (min-width:1199px){display:none;}z-index:3;"],(function(e){return e.active?"0":"-250px"})),i=o.default.a.withConfig({displayName:"Sidebar__A",componentId:"sc-1j4crdv-1"})(['display:block;font:700 normal 1.5rem "Poppins";padding:8px 32px;color:white;box-sizing:border-box;text-decoration:none;&:hover{color:#fff;}']),l=o.default.li.withConfig({displayName:"Sidebar__Li",componentId:"sc-1j4crdv-2"})(["list-style:none;&:hover ","{text-decoration:underline;}"],i),c=o.default.div.withConfig({displayName:"Sidebar__ToggleMenu",componentId:"sc-1j4crdv-3"})(["display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:80px;height:80px;padding:32px 16px;cursor:pointer;transition:all 1s cubic-bezier(0.16,1,0.3,1);right:0;z-index:2;position:fixed;display:none;@media (max-width:1199px){display:inline-block;}& i{&:nth-child(2){margin-top:4px;margin-bottom:4px;}display:block;width:32px;height:2px;border-radius:100px;background:#fff;transition:all 0.6s cubic-bezier(0.16,1,0.3,1);transform-origin:center center;margin-left:auto;margin-right:auto;}"," & i:nth-child(1){transform:rotate(45deg) translate(4px,2px);margin:0;transition-delay:0.1s;}"," & i:nth-child(2){opacity:0;transform:translateX(-10px);}"," & i:nth-child(3){transform:rotate(-45deg) translate(4px,-2px);margin:0;margin-top:-3px;transition-delay:0.1s;}"],(function(e){return!e.active}),(function(e){return!e.active}),(function(e){return!e.active}));t.Z=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return a.createElement(a.Fragment,null,a.createElement(c,{onClick:function(){return n(!t)},active:t},a.createElement("i",null),a.createElement("i",null),a.createElement("i",null)),a.createElement(r,{active:t},a.createElement("ul",{style:{padding:0}},[{link:"/",name:"Home"},{link:"/about",name:"About Us"},{link:"/project",name:"Projects"},{link:"/client",name:"Clients"},{link:"/team",name:"Team."},{link:"/contact",name:"Contact Us"}].map((function(e,t){return a.createElement(l,{key:t},a.createElement(i,{href:e.link},e.name))})))))}},5610:function(e,t,n){"use strict";var a=n(7294),o=n(3284),r=n.n(o),i=n(9),l=i.default.div.withConfig({displayName:"footer__MainFooter",componentId:"sc-1abtvul-0"})(["background-color:#000;color:#fff;padding:2rem;overflow:hidden;@media only screen and (min-width:1200px){padding:240px 120px 0;}"]),c=i.default.img.withConfig({displayName:"footer__Image",componentId:"sc-1abtvul-1"})(["max-width:180px;height:auto;vertical-align:middle;border-style:none;"]),d=i.default.ul.withConfig({displayName:"footer__FooterMenu",componentId:"sc-1abtvul-2"})(['list-style:none;padding:0;margin:0;& li{display:list-item;text-align:-webkit-match-parent;}& li a{text-decoration:none;background-color:transparent;color:#fff;font:400 normal 1rem/2 "Poppins";}']),s=i.default.div.withConfig({displayName:"footer__CopyRight",componentId:"sc-1abtvul-3"})(["text-align:center;margin-top:64px;@media only screen and (min-width:1200px){margin-top:120px;padding-bottom:120px;}"]);t.Z=function(){return(0,a.useEffect)((function(){r().init({duration:2e3})}),[]),a.createElement(a.Fragment,null,a.createElement(l,{"data-aos":"fade-up"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-4 md-3",style:{marginBottom:"1rem"}},a.createElement("div",{className:"footer-logo"},a.createElement("a",{href:"#"},a.createElement(c,{src:"/logo-white.png"})))),a.createElement("div",{className:"col-md-4 md-3",style:{marginBottom:"1rem",padding:"0 14px"}},a.createElement("div",{className:"footer-nav"},a.createElement(d,null,a.createElement("li",null,a.createElement("a",{href:"/"},"Home")),a.createElement("li",null,a.createElement("a",{href:"/about"},"About Us.")),a.createElement("li",null,a.createElement("a",{href:"/project"},"Projects.")),a.createElement("li",null,a.createElement("a",{href:"/client"},"Clients.")),a.createElement("li",null,a.createElement("a",{href:"/team"},"Team.")),a.createElement("li",null,a.createElement("a",{href:"/contact"},"Contact Us."))))),a.createElement("div",{className:"col-md-4 md-3",style:{marginBottom:"1rem",padding:"0 16px"}},a.createElement("div",{className:"footer-content"},"7 idea is a new startup company that offers IT solutions and online marketing. We are trying to build a bigger team to answer our business needs. As we are growing we are looking for people to join us and build up our team and culture. Our service offers a new cutting edge technology and we are able to move quickly to catch up with the new technology."))),a.createElement(s,null,"© 2020 7idea. All Rights Reserved")))}},262:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(9),r=n(6465),i=n(5617),l=n(9275),c=n(5610),d=n(384),s=o.default.div.withConfig({displayName:"contact__PageTitle",componentId:"sc-fmyaan-0"})(['background-color:#000;color:#fff;position:relative;z-index:0;background-position:center center;background-size:cover;&:before{display:block;content:"";position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.8);z-index:-1;}']),m=(0,o.default)(r.Z).withConfig({displayName:"contact__CustomContainer",componentId:"sc-fmyaan-1"})(["width:100%;padding-right:15px !important;padding-left:15px !important;margin-right:auto;margin-left:auto;@media (min-width:1200px){max-width:1140px;}@media (min-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}"]),u=o.default.h2.withConfig({displayName:"contact__Title",componentId:"sc-fmyaan-2"})(['font:700 normal 3rem "Poppins";@media only screen and (min-width:1200px){font:700 normal 5rem "Poppins";}']),p=o.default.div.withConfig({displayName:"contact__ContentArea",componentId:"sc-fmyaan-3"})(["padding:2rem 0;@media only screen and (min-width:1200px){padding:5rem 0;}"]),f=o.default.div.withConfig({displayName:"contact__CoverForm",componentId:"sc-fmyaan-4"})([""]),g=o.default.input.withConfig({displayName:"contact__Input",componentId:"sc-fmyaan-5"})(["width:100%;max-width:100%;height:48px;line-height:1.3;color:#555;background-color:#fff;border-color:#bfc3c8;font-size:18px;padding:8px;margin-top:3px;box-sizing:border-box;border:none;border-bottom:2px solid silver;&:focus{outline:none;border-bottom:2px solid #66afe9;}::placeholder{color:#a1a1a1;font-size:18px;}"]),h=o.default.textarea.withConfig({displayName:"contact__TextArea",componentId:"sc-fmyaan-6"})(["width:100%;padding:8px;padding-bottom:23px;margin-top:3px;border:none;border-bottom:2px solid silver;box-sizing:border-box;&:focus{outline:none;border-bottom:2px solid #66afe9;}::placeholder{color:#a1a1a1;font-size:18px;}"]),b=o.default.div.withConfig({displayName:"contact__Panel",componentId:"sc-fmyaan-7"})(["font-size:14px;padding:15px;margin:5px 0 15px;border:1px solid ",";background-color:",";& .title{color:",";margin:0 0 5px;}"],(function(e){return e.bg}),(function(e){return e.bg}),(function(e){return e.title})),x=o.default.button.withConfig({displayName:"contact__SendButton",componentId:"sc-fmyaan-8"})(['width:auto;font-family:"Poppins";font-size:15px;height:auto;line-height:normal;text-align:center;background:#0a0202;border-width:0px;border-color:#020a08;border-style:solid;color:#ffffff;cursor:pointer;font-weight:normal;border-radius:0px;text-shadow:none;padding:10px 20px;box-sizing:border-box;box-shadow:0 1px 1px #eeeeee;margin-top:10px;margin-bottom:25px;margin-left:0;margin-right:0;vertical-align:middle;']);t.default=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],o=(0,a.useState)(""),r=o[0],y=o[1],v=(0,a.useState)(""),w=v[0],E=v[1],_=(0,a.useState)(!1),k=_[0],N=_[1],C=(0,a.useState)(!1),I=C[0],O=C[1],j=(0,a.useState)(!1),P=j[0];j[1];(0,a.useEffect)((function(){window.sessionStorage.getItem("panelRed")&&(N(!1),O(!0))}),[]);return a.createElement(a.Fragment,null,a.createElement(i.Z,null),a.createElement(l.Z,null),a.createElement(s,{style:{backgroundImage:"url()",paddingTop:"240px",paddingBottom:"120px"}},a.createElement(m,null,a.createElement(u,null,"Contact Us"))),a.createElement(p,null,a.createElement(m,null,k&&a.createElement(b,{bg:"#deefd8",title:"#519051"},a.createElement("p",{className:"title"},"Your responses were successfully submitted. Thank you!")),I&&a.createElement(b,{bg:"#F3DEDD",title:"#B94A48"},a.createElement("p",{className:"title"},"Your responses were successfully submitted. Thank you!")),P&&a.createElement(b,{bg:"#F3DEDD",title:"#B94A48"},a.createElement("p",{className:"title"},"There was a problem with your submission. Errors are marked below.")),!k&&!I&&a.createElement(f,null,a.createElement("form",{onSubmit:function(e){e.preventDefault(),t&&r&&w&&(d.ZP.sendForm("service_xs4m3m3","template_51zh96s",e.target,"user_uDbimTdCIgR3lLIX2aNIf").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()),window.sessionStorage.setItem("panelRed",!0),N(!0)}},a.createElement("div",{style:{marginBottom:"20px"}},a.createElement(g,{type:"text",name:"name",placeholder:"NAME",defaultValue:"",onChange:function(e){return n(e.target.value)}})),a.createElement("div",{style:{marginBottom:"20px"}},a.createElement(g,{type:"email",name:"email",placeholder:"EMAIL",defaultValue:"",onChange:function(e){return y(e.target.value)}})),a.createElement("div",{style:{marginBottom:"13px"}},a.createElement(h,{name:"message",placeholder:"MESSAGE",rows:"5",defaultValue:"",onChange:function(e){return E(e.target.value)}})),a.createElement("div",{className:"frm_submit"},a.createElement(x,null,"SEND")))))),a.createElement(c.Z,null))}},5671:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return a}})},3144:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})},4942:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return a}})},4925:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-35fa99562d680d358210.js.map
(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{19:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),l=c(13),i=c.n(l),n=(c(19),c(0)),r=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark py-3 sticky-top",id:"navbar",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand justify-content-md-start",href:"/",children:"Jon Hay"}),Object(n.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse navbar-toggleable-xs justify-content-md-end text-center",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{className:"nav-item mx-3",children:Object(n.jsx)("a",{className:"nav-link","aria-current":"page",href:"/#home",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item mx-3",children:Object(n.jsx)("a",{className:"nav-link",href:"/#about",children:"About"})}),Object(n.jsx)("li",{className:"nav-item mx-3",children:Object(n.jsx)("a",{className:"nav-link",href:"/#projects",children:"Projects"})}),Object(n.jsx)("li",{className:"nav-item mx-3",children:Object(n.jsx)("a",{className:"nav-link",href:"/#skills",children:"Skills"})}),Object(n.jsx)("li",{className:"nav-item mx-3",children:Object(n.jsx)("a",{className:"nav-link",href:"/#contact",children:"Contact"})})]})})]})})},o=c(3),j=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)("orange"),i=Object(o.a)(l,2),r=i[0],j=i[1],d=function(){s(!c),j("orange"===r?"purple":"orange")},m="header header-background jumbotron-fluid background-image-".concat(r);return Object(n.jsx)("header",{className:m,children:Object(n.jsx)("div",{className:"container-fluid py-5",onMouseEnter:d,onMouseLeave:d,children:Object(n.jsx)("div",{className:"row text-white text-center",children:Object(n.jsxs)("div",{className:"col",children:[!c&&Object(n.jsx)("p",{id:"header-text-1",className:"header-text",children:"My name is Jon"}),c&&Object(n.jsx)("p",{id:"header-text-2",className:"header-text",children:"And I'm a full stack developer from Santa Barbara."})]})})})})},d=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{className:"p-3 p-lg-4",id:"about",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"row text-white text-center",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h5",{className:"display-4",children:"About"}),Object(n.jsx)("img",{src:"".concat("/jonhayjr","/img/JonHeadShot.jpeg"),className:"img-fluid img-radius my-3",alt:"Jon Headshot"}),Object(n.jsx)("p",{className:"lead line-height",children:"My passion for programming began after I took my first programming class in high school.  In January 2021, I decided to take this passion to the next level and enrolled in the Front End Development Techdegree Program with Team Treehouse.  After completing this Techdegree, I still wanted to learn more and decided to pursue the Full Stack JavaScript Techdegree which I completed in July 2021.  In my free time, you can find me learning new programming technologies or building cool projects.  You can check out some of those projects below."})]})})})}),Object(n.jsx)("hr",{})]})},m=c(14),b=c.n(m),h={apiBaseUrl:"https://jh-react-portfolio-api.herokuapp.com/api"},x=function(e){var t=e.projects,c=t?t.map((function(e,t){return Object(n.jsx)("div",{className:"text-center mb-4 col-xs-12 col-md-6 col-lg-4","data-index":t,children:Object(n.jsxs)("div",{className:"card text-center bg-light border-dark rounded h-100 p-4",children:[Object(n.jsx)("img",{src:"".concat("/jonhayjr","/img/").concat(e.image),className:"card-img-top img-fluid mb-4",alt:e.name}),Object(n.jsxs)("div",{className:"card-body d-flex flex-column text-center",children:[Object(n.jsx)("h5",{className:"card-title",children:e.name}),Object(n.jsx)("p",{className:"card-text",children:e.description}),Object(n.jsxs)("p",{className:"skills-used mt-auto card-text",children:[Object(n.jsx)("span",{className:"font-weight-bold",children:"Skills Used:"})," ",e.skills]}),Object(n.jsx)("a",{href:e.github,className:"btn btn-secondary mb-4",target:"_blank",rel:"noopener noreferrer",children:"View Code"}),Object(n.jsx)("a",{href:e.livepreview,className:"btn btn-dark",target:"_blank",rel:"noopener noreferrer",children:"Go to Website"})]})]})},t)})):"";return Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"row",children:c})})},u=function(){var e=Object(a.useState)(localStorage.getItem("skill")?localStorage.getItem("skill"):"All"),t=Object(o.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)([]),i=Object(o.a)(l,2),r=i[0],j=i[1],d=Object(a.useState)(!0),m=Object(o.a)(d,2),u=m[0],p=m[1];Object(a.useEffect)((function(){p(!0);var e="All"===c?"".concat(h.apiBaseUrl,"/projects"):"".concat(h.apiBaseUrl,"/projects/").concat(c);b.a.get(e).then((function(e){j(e.data),p(!1)}))}),[c]);return Object(n.jsxs)("div",{children:[Object(n.jsxs)("section",{className:"p-3 p-lg-4",id:"projects",children:[Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"row text-center",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h5",{className:"display-4 text-white mb-4",children:"Projects"}),Object(n.jsx)("form",{className:"mb-4",children:Object(n.jsxs)("select",{className:"form-select-lg form-select-sm my-3 custom-select","aria-label":"default select example",onChange:function(e){s(e.target.value),localStorage.setItem("skill",e.target.value)},value:c,children:[Object(n.jsx)("option",{disabled:!0,value:"none",children:"Filter by skill"}),Object(n.jsx)("option",{value:"All",children:"All"}),Object(n.jsx)("option",{value:"HTML",children:"HTML"}),Object(n.jsx)("option",{value:"CSS",children:"CSS"}),Object(n.jsx)("option",{value:"JavaScript",children:"JavaScript"}),Object(n.jsx)("option",{value:"Sass",children:"Sass"}),Object(n.jsx)("option",{value:"API",children:"API"}),Object(n.jsx)("option",{value:"Bootstrap",children:"Bootstrap"}),Object(n.jsx)("option",{value:"React",children:"React"}),Object(n.jsx)("option",{value:"Node",children:"Node"}),Object(n.jsx)("option",{value:"Express",children:"Express"}),Object(n.jsx)("option",{value:"Pug",children:"Pug"}),Object(n.jsx)("option",{value:"Sequelize",children:"Sequelize"}),Object(n.jsx)("option",{value:"SQL",children:"SQL"})]})})]})})}),u?Object(n.jsx)("p",{className:"lead text-white mb-4 text-center mt-4",children:"Loading..."}):Object(n.jsx)(x,{projects:r})]}),Object(n.jsx)("hr",{})]})},p=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{className:"skills p-3 p-lg-4",id:"skills",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row text-center",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h5",{className:"display-4 text-white mb-4",children:"Skills"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("ul",{className:"list-group text-center",children:[Object(n.jsx)("li",{className:"list-group-item list-item-html5 font-weight-bold mb-2 w-75 mx-auto",children:"HTML5"}),Object(n.jsx)("li",{className:"list-group-item list-item-css3 font-weight-bold mb-2 w-75 mx-auto",children:"CSS3"}),Object(n.jsx)("li",{className:"list-group-item list-item-javascript font-weight-bold mb-2 w-75 mx-auto",children:"JavaScript"}),Object(n.jsx)("li",{className:"list-group-item list-item-sass font-weight-bold mb-2 w-75 mx-auto",children:"Sass"}),Object(n.jsx)("li",{className:"list-group-item list-item-github font-weight-bold mb-2 w-75 mx-auto",children:"Github"}),Object(n.jsx)("li",{className:"list-group-item list-item-git font-weight-bold mb-2 w-75 mx-auto",children:"Git"}),Object(n.jsx)("li",{className:"list-group-item list-item-bootstrap font-weight-bold mb-2 w-75 mx-auto",children:"Bootstrap"}),Object(n.jsx)("li",{className:"list-group-item list-item-react font-weight-bold mb-2 w-75 mx-auto",children:"React"}),Object(n.jsx)("li",{className:"list-group-item list-item-node font-weight-bold mb-2 w-75 mx-auto",children:"Node"}),Object(n.jsx)("li",{className:"list-group-item list-item-express font-weight-bold mb-2 w-75 mx-auto",children:"Express"}),Object(n.jsx)("li",{className:"list-group-item list-item-sql font-weight-bold mb-2 w-75 mx-auto",children:"SQL"})]})})})]})}),Object(n.jsx)("hr",{})]})},O=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("section",{className:"contact p-3 p-lg-4",id:"contact",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h5",{className:"display-4 text-white mb-5 text-center",children:"Contact"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col text-center",children:[Object(n.jsx)("a",{href:"mailto:jonhayjr@gmail.com",className:"mx-3 mx-md-5 text-decoration-none",rel:"noopener noreferrer",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope email",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/jonhayjr",target:"_blank",className:"linkedin-link mx-3 mx-md-5 text-decoration-none",rel:"noopener noreferrer",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin linkedin",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),Object(n.jsx)("a",{href:"https://github.com/jonhayjr",target:"_blank",className:"mx-3 mx-md-5 text-decoration-none",rel:"noopener noreferrer",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-github github",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})]})})]})})})},g=function(){return Object(n.jsx)("footer",{className:"bg-dark mt-5 py-3",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row text-center justify-content-center",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("p",{className:"text-white m-0",children:"Created by Jon Hay"})})}),Object(n.jsx)("div",{className:"row text-center justify-content-center pt-3",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("a",{href:"#top",className:"text-primary lead",children:"Back To Top"})})})]})})},v=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(r,{}),Object(n.jsx)(j,{}),Object(n.jsx)(d,{}),Object(n.jsx)(u,{}),Object(n.jsx)(p,{}),Object(n.jsx)(O,{}),Object(n.jsx)(g,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),l(e),i(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.03cb7c8f.chunk.js.map
(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{19:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(13),s=a.n(r),l=(a(19),a(0));var i=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"Employee Directory"})})},d=a(4),j=a(14),o=a.n(j),h=function(){return o.a.get("https://randomuser.me/api/?results=100&nat=us")};a(39),a(40);var b=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),i=s[0],j=s[1];return Object(n.useEffect)((function(){h().then((function(e){c(e.data.results),j(e.data.results)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(l.jsx)("div",{className:"navbar-collapse row",id:"navbarNav",children:Object(l.jsx)("form",{className:"form-inline",children:Object(l.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return function(e){var t=e.target.value;console.log(t);var n=a.filter((function(e){return(e.name.first+" "+e.name.last+" "+e.email+" "+e.login.username+e.cell).toLowerCase().includes(t.trim().toLowerCase())}));j(n)}(e)}})})})}),Object(l.jsx)("div",{className:"datatable mt-5",children:Object(l.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Phone"}),Object(l.jsx)("th",{children:"Email"}),Object(l.jsx)("th",{children:"Login"})]})}),Object(l.jsx)("tbody",{children:i.map((function(e){var t=e.name,a=e.email,n=e.login,c=e.cell;return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[t.first," ",t.last]}),Object(l.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(l.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(l.jsx)("a",{href:"mailto:"+a,target:"__blank",children:a})}),Object(l.jsx)("td",{"data-th":"Login",className:"align-middle",children:n.username})]})}))})]})})]})};var m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i,{}),Object(l.jsx)(b,{})]})};a(41);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4ba6d425.chunk.js.map
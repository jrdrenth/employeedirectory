(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(18),s=c.n(r),i=(c(25),c(0));var l=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Employee Directory"})})},j=c(5),o=c(19),d=c(8),h=(c(31),c(20)),b=c.n(h),u=function(){return b.a.get("https://randomuser.me/api/?results=100&nat=us")};c(49);var m=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(j.a)(r,2),l=s[0],h=s[1],b=Object(a.useState)([]),m=Object(j.a)(b,2),O=m[0],x=m[1],f=Object(a.useState)(!0),p=Object(j.a)(f,2),g=p[0],v=p[1];function N(e,t){var c=e,a=t;return g||(c=t,a=e),c.name.first.toLowerCase().localeCompare(a.name.first.toLowerCase())}return Object(a.useEffect)((function(){u().then((function(e){h(e.data.results.sort(N)),x(e.data.results.sort(N))}))}),[]),Object(a.useEffect)((function(){n(!c);var e=O.sort(N);x(e)}),[g]),Object(i.jsxs)("div",{children:[Object(i.jsx)("nav",{className:"navbar bg-light",children:Object(i.jsx)("form",{children:Object(i.jsx)("input",{className:"form-control",type:"search",placeholder:"Search",onChange:function(e){return function(e){var t=e.target.value,c=l.filter((function(e){return(e.name.first+" "+e.name.last+" "+e.email+" "+e.login.username+e.cell).toLowerCase().includes(t.trim().toLowerCase())}));x(c.sort(N))}(e)}})})}),Object(i.jsx)("main",{className:"mt-5",children:Object(i.jsxs)("table",{className:"table table-striped table-hover table-condensed",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Photo"}),Object(i.jsxs)("th",{onClick:function(){v(!g)},children:["Name",Object(i.jsx)(o.a,{className:"caret",icon:g?d.b:d.a})]}),Object(i.jsx)("th",{children:"Phone"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Login"})]})}),Object(i.jsx)("tbody",{children:O.map((function(e){var t=e.picture,c=e.name,a=e.email,n=e.login,r=e.cell;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{"data-th":"Photo",className:"align-middle",children:Object(i.jsx)("img",{src:t.medium,alt:"profile pic"})}),Object(i.jsxs)("td",{"data-th":"Name",className:"align-middle",children:[c.first," ",c.last]}),Object(i.jsx)("td",{"data-th":"Phone",className:"align-middle",children:r}),Object(i.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(i.jsx)("a",{href:"mailto:"+a,target:"__blank",children:a})}),Object(i.jsx)("td",{"data-th":"Login",className:"align-middle",children:n.username})]},n.uuid)}))})]})})]})};var O=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{})]})};c(50);s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f606511f.chunk.js.map
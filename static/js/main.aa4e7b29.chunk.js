(this["webpackJsonponline-frontend-libraries"]=this["webpackJsonponline-frontend-libraries"]||[]).push([[0],{18:function(e,t,n){e.exports=n(35)},23:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(23),n(5)),u=(n(24),n(25),n(6)),i={type:"rotate",payload:!0},s={type:"rotate",payload:!1},m=function(e){return{type:"rotate",payload:e}},f=n(10),d=n(37),E=n(38),p=(n(31),function(e){var t=function(e,t){if(e<1||t<1)return[];for(var n=Array.from({length:e}).fill(2),a=[],r=0;r+t<=n.length;r+=t)a.push(n.slice(r,r+t));return a},n=Object(a.useState)(5),o=Object(f.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(20),i=Object(f.a)(u,2),s=i[0],m=i[1],p=Object(a.useState)(t(s,c)),b=Object(f.a)(p,2),h=b[0],g=b[1];return Object(a.useEffect)((function(){s>0&&s<=100&&c>0&&c<=100&&g(t(s,c))}),[s,c]),Object(a.useEffect)((function(){setInterval((function(){var e=new Date;document.getElementById("date").innerHTML="Date: ".bold().fontsize("20")+e.getDate()+"-"+e.getMonth()+"-"+e.getFullYear()+"    Time: ".bold().fontsize("20")+e.getHours()+" hours "+e.getMinutes()+" minutes "+e.getSeconds()+" seconds ",document.onmousemove=function(e){document.getElementById("mouse").innerHTML="Mouse Co-ordinates [".concat(e.clientX,",").concat(e.clientY,"]")}}),1e3)}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h2",{id:"date"}),r.a.createElement("h2",{id:"mouse"}),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Enter Total Size"),r.a.createElement(E.a.Control,{type:"number",min:"1",max:"100",value:s,onChange:function(e){m(Number(e.target.value))},placeholder:"Enter Total Size"})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Enter Row Size"),r.a.createElement(E.a.Control,{type:"number",min:"1",max:"100",placeholder:"Enter Total Size",value:c,onChange:function(e){l(Number(e.target.value))}}))))),r.a.createElement("hr",null),h.map((function(e,t){return r.a.createElement("div",{className:"rows",key:t},e.map((function(e,n){return r.a.createElement("div",{className:"columns",key:n},"[",t+1,",",n+1,"]")})))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Footer")),r.a.createElement("hr",null))});n(33);var b=Object(u.b)((function(e){return Object(l.a)({},e)}),(function(e){return{stopAction:function(){return e(s)},startAction:function(){return e(i)},rotateAction:function(t){return e(m(t))}}}))((function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h={rotating:!0},g=function(e,t){switch(t.type){case"rotate":return{rotating:t.payload};default:return Object(l.a)({},e)}},v=n(9),y=function(){return Object(v.b)(g,h)};n(34);c.a.render(r.a.createElement(u.a,{store:y()},r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.aa4e7b29.chunk.js.map
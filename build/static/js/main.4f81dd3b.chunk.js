(this["webpackJsonpgithub-landing"]=this["webpackJsonpgithub-landing"]||[]).push([[0],Array(35).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(24),a=n.n(s),o=(n(35),n(36),n(37),n(38),n(3)),l=n(1),i=function(){var e=localStorage.getItem("prefers-dark");return null===e&&(e="false"),localStorage.setItem("prefers-dark",e),JSON.parse(e)},u=Object(c.createContext)([{prefersDark:i()},function(){}]),j=function(e){var t=e.children,n=Object(c.useState)({prefersDark:i()}),r=Object(o.a)(n,2),s=r[0],a=r[1],j=function(){return a({prefersDark:!s.prefersDark})},d=Object(c.useMemo)((function(){return[s,j]}),[s,j]);return Object(c.useEffect)((function(){s.prefersDark&&localStorage.setItem("prefers-dark","true"),s.prefersDark||localStorage.setItem("prefers-dark","false")}),[s,j]),Object(l.jsx)(u.Provider,{value:d,children:t})},d=u,f=n(11);n(40),n(41),n(42);function b(){return Object(l.jsxs)("footer",{className:"footer text-small",children:[Object(l.jsx)("div",{children:"Dan Serio"}),"dserio.d@gmail.com"]})}var h=n(25),O=n(27),m=n(26),x=(n(43),n(6)),p=n(7);n(44);function v(e){var t=e.variant,n=e.small,c=e.className,r=e.children,s=e.leftIcon,a=e.rightIcon,o=e.onClick,i=Object(p.a)(e,["variant","small","className","children","leftIcon","rightIcon","onClick"]);return Object(l.jsxs)("button",Object(x.a)(Object(x.a)({className:"btn ".concat(n?"small":""," ").concat(t||"primary"," ").concat(c||"").trim().replace(/\s+/g," ")},i),{},{onClick:o,onTouchEnd:o,children:[s,Object(l.jsx)("span",{children:r}),a]}))}function g(e){var t=e.isOpen,n=e.open,r=e.close,s=Object(c.useContext)(d),a=Object(o.a)(s,2),i=(a[0],a[1]),u=Object(c.useRef)(null);!function(e,t){Object(c.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t(n)}return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}(u,r);var j=function(){var e={resume:"https://danserio.com",codepen:"https://codepen.io/radNoise",opinionflexr:"https://opinionflexr.com"};return Object(l.jsx)("ul",{children:Object.keys(e).map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e[t],children:t})},t)}))})};return Object(l.jsxs)("div",{className:"header-nav",children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)(h.a,{onClick:n,onTouchEnd:n})}),Object(l.jsxs)("nav",{className:t?"open":void 0,ref:u,children:[Object(l.jsx)("header",{children:Object(l.jsx)(m.a,{onClick:r,onTouchEnd:r})}),Object(l.jsx)(j,{}),Object(l.jsx)("footer",{children:Object(l.jsx)(v,{className:"subtle menu-btn",leftIcon:Object(l.jsx)(O.a,{}),onTouchEnd:function(){r(),i()},onClick:function(){r(),i()},children:"Theme"})})]})]})}n(45);function N(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("div",{className:"logo-area",children:[Object(l.jsx)("h1",{className:"logo",children:"Dan Serio"}),Object(l.jsx)("small",{children:"dserio.d@gmail.com"})]}),Object(l.jsx)(g,{isOpen:n,open:function(){return r(!0)},close:function(){return r(!1)}})]})}var k=n(4);n(46);function S(e){var t=e.className,n=e.children,c=Object(p.a)(e,["className","children"]);return Object(l.jsx)("section",Object(x.a)(Object(x.a)({className:"section ".concat(t||"").trim()},c),{},{children:n}))}n(47),n(48);function C(){return Object(l.jsxs)("nav",{className:"project-nav",children:[Object(l.jsx)(f.b,{to:"/todos",children:"Todo App"}),Object(l.jsx)(f.b,{to:"/game-of-life",children:"Game of Life"}),Object(l.jsx)(f.b,{to:"/words-per-minute",children:"Words per minute"})]})}n(54);function w(e){var t=e.title,n=e.desc,c=e.className,r=e.children,s=Object(p.a)(e,["title","desc","className","children"]);return Object(l.jsxs)("section",Object(x.a)(Object(x.a)({className:"project ".concat(c||"").trim()},s),{},{children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)("p",{children:Object(l.jsx)("small",{children:n})}),r]}))}n(55);function y(e){var t=e.refresh,n=e.nextFrame;return Object(l.jsxs)("div",{className:"game-of-life-controls",children:[Object(l.jsx)(v,{variant:"outline",onClick:t,children:"Refresh"}),Object(l.jsx)(v,{onClick:n,children:"Next Frame"})]})}var A=n(29),D=function e(t,n,c){Object(A.a)(this,e),this.x=t,this.y=n,this.isAlive=void 0;var r=Math.random;this.isAlive=c?r()>=c:r()>=.75};function E(e,t){for(var n=~~(0,Math.sqrt)(e),c=[],r=0;r<n;r++){for(var s=[],a=0;a<n;a++)s.push(new D(a,r));c.push(s)}return c}function T(){var e=Object(c.useRef)(null),t=Object(c.useState)(E(400)),n=Object(o.a)(t,2),r=n[0],s=n[1],a=Object(c.useContext)(d),i=Object(o.a)(a,1)[0],u=Object(c.useMemo)((function(){return i.prefersDark?{size:16,aliveFill:"#114c2a",aliveStroke:"#48d583",deadFill:"transparent",deadStroke:"#2a2b27"}:{size:16,aliveFill:"#48d583",aliveStroke:"#114c2a",deadFill:"transparent",deadStroke:"#808377"}}),[i.prefersDark]);Object(c.useEffect)((function(){if(e.current){e.current.height=320,e.current.width=320;var t=e.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height),function(e,t,n){function c(t){var c=t.x,r=t.y,s=t.isAlive,a=n.aliveFill,o=n.aliveStroke,l=n.deadFill,i=n.deadStroke,u=n.size;e.beginPath(),e.save(),e.fillStyle=s?a:l,e.strokeStyle=s?o:i,e.translate(c*u,r*u),e.rect(1,1,u-2,u-2),e.fill(),e.stroke(),e.restore(),e.closePath()}for(var r=0;r<t.length;r++)for(var s=0;s<t[r].length;s++)c(t[r][s]);console.log("RENDERED CELLS ".concat((new Date).getTime()))}(t,r,u)}}),[r,u]);return Object(l.jsxs)(w,{title:"Game of Life",desc:"A Simple implementation of Conway's Game of Life",children:[Object(l.jsx)("canvas",{ref:e}),Object(l.jsx)(y,{refresh:function(){return s(E(400))},nextFrame:function(){return s(function(e){function t(t,n){for(var c=0,r=0,s=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];r<s.length;r++){var a=s[r];e[n+a[1]]&&e[n+a[1]][t+a[0]]&&e[n+a[1]][t+a[0]].isAlive&&c++}return c}for(var n=[],c=0;c<e.length;c++){for(var r=[],s=0;s<e[c].length;s++){var a=e[c][s],o=t(s,c),l=new D(s,c);a.isAlive&&o>=2&&o<=3||!a.isAlive&&3===o?l.isAlive=!0:l.isAlive=!1,r.push(l)}n.push(r)}return n}(r))}})]})}var I=n(21);n(56);function F(e){var t=e.children,n=e.className,c=Object(p.a)(e,["children","className"]);return Object(l.jsx)("div",Object(x.a)(Object(x.a)({className:"btn-group ".concat(n||"").trim()},c),{},{children:t}))}n(57);function M(e){var t=e.noneComplete,n=e.noneSelected,c=e.allSelected,r=e.selectAll,s=e.selectNone,a=e.removeCompleted,o=e.removeSelected;return Object(l.jsx)("thead",{className:"todo-controls",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"controls-cell",children:[c&&Object(l.jsx)(v,{className:"subtle",small:!0,onClick:s,children:"Select None"}),!c&&Object(l.jsx)(v,{className:"subtle",small:!0,onClick:r,children:" Select All"})]})}),Object(l.jsx)("td",{children:Object(l.jsxs)(F,{className:"controls-cell",children:[Object(l.jsx)(v,{className:"subtle",small:!0,variant:"error",disabled:t,onClick:a,children:"Remove Complete"}),Object(l.jsx)(v,{className:"subtle",small:!0,variant:"error",disabled:n,onClick:o,children:"Remove Selected"})]})})]})})}n(58);function R(e){var t=e.className,n=Object(p.a)(e,["className"]);return Object(l.jsx)("input",Object(x.a)({className:"input primary ".concat(t||"").trim()},n))}n(59);function L(e){var t=e.addTodo,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],a=r[1],i=Object(c.useRef)(null);return Object(l.jsxs)("form",{ref:i,className:"todo-form",onSubmit:function(e){e.preventDefault(),a(""),t(s),i.current&&i.current.reset()},children:[Object(l.jsx)(R,{type:"text",name:"todo",onChange:function(e){var t=e.target.value;a(t)},defaultValue:s}),Object(l.jsx)(v,{type:"submit",style:{marginLeft:"1rem"},disabled:0===s.length,children:"Add"})]})}n(60);function P(e){var t=e.defaultChecked,n=e.onClick,r=(Object(p.a)(e,["defaultChecked","onClick"]),Object(c.useState)(t)),s=Object(o.a)(r,2),a=s[0],i=s[1];Object(c.useMemo)((function(){i(t)}),[t]);var u=function(){i(!a),n&&n(a||!1)};return Object(l.jsx)("div",{className:"checkbox ".concat(a?"checked":""),onClick:u,onTouchEnd:u})}n(61);function U(e){var t=e.toggleSelected,n=e.toggleComplete,r=e.selected,s=e.complete,a=e.text,o=Object(p.a)(e,["toggleSelected","toggleComplete","selected","complete","text"]),i=Object(c.useMemo)((function(){return{text:a,complete:s,selected:r}}),[a,s,r]);return Object(l.jsxs)("tr",Object(x.a)(Object(x.a)({},o),{},{className:"todo-item",children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"cell",children:Object(l.jsx)(P,{onClick:function(){return t(i)},defaultChecked:r})})}),Object(l.jsx)("td",{onClick:function(){return n(i)},onTouchEnd:function(){return n(i)},children:Object(l.jsx)("div",{className:"cell",style:i.complete?{opacity:.5,textDecoration:"line-through"}:{opacity:1,textDecoration:"none"},children:a})})]}))}n(62);function G(e){var t=e.todos,n=e.toggleComplete,r=e.toggleSelected;return Object(c.useEffect)((function(){console.log(t)}),[t]),Object(l.jsx)("tbody",{className:"todo-list",children:t.map((function(e){var t=e.text,c=e.complete,s=e.selected;return Object(l.jsx)(U,{text:t,complete:c,selected:s,toggleSelected:r,toggleComplete:n},t)}))})}n(63);function W(){var e=Object(c.useState)([{text:"Walk the Dog",complete:!1,selected:!1},{text:"Feed the Dog",complete:!0,selected:!1},{text:"Make dinner",complete:!1,selected:!1}]),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(c.useMemo)((function(){r(n.sort((function(e,t){return t.text<e.text?-1:t.text>e.text?1:0})))}),[n]);var s=Object(c.useMemo)((function(){return 0===n.filter((function(e){return!1===e.selected})).length}),[n]),a=Object(c.useMemo)((function(){return 0===n.filter((function(e){return!0===e.selected})).length}),[n]),i=Object(c.useMemo)((function(){return 0===n.filter((function(e){return!0===e.complete})).length}),[n]),u=function(e,t){var c=e.toUpperCase(),s=n.filter((function(e){return e.text.toUpperCase()===c}))[0];void 0!==t.complete&&(s.complete=t.complete),void 0!==t.selected&&(s.selected=t.selected),r([].concat(Object(I.a)(n.filter((function(e){return e.text.toUpperCase()!==c}))),[s]))};return Object(l.jsxs)(w,{className:"todos",title:"Todo App",desc:"A simple todo app",children:[!n.length&&Object(l.jsx)("h3",{style:{opacity:.67},children:"No Todos"}),n.length>0&&Object(l.jsxs)("table",{children:[Object(l.jsx)(M,{todos:n,selectNone:function(){r(n.map((function(e){return e.selected=!1,e})))},selectAll:function(){r(n.map((function(e){return e.selected=!0,e})))},noneSelected:a,allSelected:s,noneComplete:i,removeCompleted:function(){return r(n.filter((function(e){return!e.complete})))},removeSelected:function(){return r(n.filter((function(e){return!e.selected})))}}),Object(l.jsx)(G,{todos:n,toggleSelected:function(e){return u(e.text,{selected:!e.selected})},toggleComplete:function(e){var t=e.text,n=e.complete;u(t,{complete:!n})}})]}),Object(l.jsx)(L,{addTodo:function(e){e=e.trim().replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/," "),n.filter((function(t){return t.text.toUpperCase()===e.toUpperCase()})).length>0||r([].concat(Object(I.a)(n),[{text:e,complete:!1}]))}})]})}n(64);function z(e){var t=e.isRunning,n=e.stop,r=e.start,s=e.reset,a=Object(c.useState)(!1),i=Object(o.a)(a,2),u=i[0],j=i[1];return Object(l.jsxs)("div",{className:"wpm-controls",children:[!t&&!u&&Object(l.jsx)(v,{onClick:function(){return r()},children:"Start"}),t&&Object(l.jsx)(v,{onClick:function(){j(!0),n()},children:"Done"}),!t&&u&&Object(l.jsx)(v,{onClick:function(){s(),r()},children:"Restart"})]})}n(65);function J(e){var t=e.wpm,n=e.accuracy,c=e.totalTime;return Object(l.jsx)("div",{className:"wpm-results",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"table-cell",children:"Words Per Minute"})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"table-cell",children:"Total Time (Seconds)"})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"table-cell",children:"Accuracy"})})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"table-cell ".concat(t<=15?"negative":t>=60?"positive":"").trim(),children:t})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"table-cell",children:c.toFixed(2)})}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"table-cell ".concat(n<=60?"negative":n>=90?"positive":"").trim(),children:[n,"%"]})})]})})]})})}var V=n(30);function q(e,t){var n=e,c=t;e.length<t.length&&(n=t,c=e);var r=n.length;return 0===r?1:(r-function(e,t){e=e.toLowerCase(),t=t.toLowerCase();for(var n=new Array,c=0;c<=e.length;c++){for(var r=c,s=0;s<=t.length;s++)if(0===c)n[s]=s;else if(s>0){var a=n[s-1];e.charAt(c-1)!==t.charAt(s-1)&&(a=Math.min(Math.min(a,r),n[s])+1),n[s-1]=r,r=a}c>0&&(n[t.length]=r)}return n[t.length]}(n,c))/parseFloat("".concat(r))}function B(e){var t=e.content,n=Object(c.useRef)(null),r=Object(c.useContext)(d),s=Object(o.a)(r,1)[0];return Object(c.useEffect)((function(){if(n.current){n.current.width=680,n.current.height=192;var e=n.current.getContext("2d"),c=function(){var e=(t.match(/.{1,65}/g)||[]).length,n=t.split(/\s+/g);return function(e,t){for(var n=[],c=0;c<e.length;c+=t)n.push(e.slice(c,c+t));return n}(n,~~(n.length/e))}();e.font="18px Tahoma normal",e.fillStyle=s.prefersDark?"#fafafa":"#121212",c.forEach((function(t,n){e.beginPath(),0===n?e.fillText(t.join(" "),1,16):e.fillText(t.join(" "),1,16+32*n),e.closePath()}))}}),[s,s.prefersDark]),Object(l.jsx)("div",{children:Object(l.jsx)("canvas",{width:680,height:192,ref:n})})}function H(){var e=new V.LoremIpsum,t=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),a=Object(o.a)(s,2),l=a[0],i=a[1],u=Object(c.useState)(0),j=Object(o.a)(u,2),d=j[0],f=j[1],b=Object(c.useState)(0),h=Object(o.a)(b,2),O=h[0],m=h[1],x=function(){return r(!1)},p=function(){return r(!0)},v=function(){m(0),f(0)};return Object(c.useEffect)((function(){return n&&!l&&i(setInterval((function(){f(Date.now()),console.group("interval")}),250)),!n&&l&&(clearInterval(l),i(null)),function(){l&&clearInterval(l),i(null)}}),[n]),{start:function(e){p(),m(Date.now()),f(Date.now()),e&&e()},stop:x,clear:v,reset:function(){x(),v()},resume:p,elapsed:function(){return d-O},timer:d,isRunning:n,timeStart:O}}(),n=t.start,r=t.stop,s=t.reset,a=t.isRunning,i=t.elapsed,u=Object(c.useRef)(null),j=Object(c.useState)(e.generateParagraphs(1).trim().replace(/\s+/g," ")),d=Object(o.a)(j,2),f=d[0],b=d[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),m=O[0],x=O[1],p=Object(c.useState)(0),v=Object(o.a)(p,2),g=v[0],N=v[1],k=Object(c.useState)(0),S=Object(o.a)(k,2),C=S[0],y=S[1];return Object(c.useMemo)((function(){var e=Math.round;N(+"".concat((100*q(m,f)).toFixed(2)));var t=m.trim().replace(/\s+/g," ").split(/\s/g).length/i()*60;isFinite(t)||(t=0),y(e(1e3*t))}),[m,f]),Object(c.useEffect)((function(){return function(){r(),s()}}),[]),Object(l.jsxs)(w,{title:"Words Per Minute Game",desc:"A simple words per minute game",children:[Object(l.jsx)(z,{isRunning:a,start:function(){return n((function(){u.current&&(u.current.disabled=!1,u.current.focus(),x("")),b(e.generateParagraphs(1))}))},stop:r,reset:function(){u.current&&(u.current.disabled=!1,u.current.value="",u.current.focus()),x(""),s(),b(e.generateParagraphs(1))}}),a&&Object(l.jsx)(B,{content:f}),Object(l.jsx)("textarea",{disabled:!a,onChange:function(e){var t=e.target.value;x(t)},defaultValue:m,className:"textarea",ref:u}),!a&&Object(l.jsx)(J,{accuracy:g,wpm:C,totalTime:i()/1e3})]})}n(78);function K(){return Object(l.jsx)("main",{className:"content",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(S,{className:"about",id:"about",children:Object(l.jsxs)("article",{children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsxs)("p",{children:["My name is Dan Serio. I have loved web development since I first discovered it at the ",Object(l.jsx)("a",{href:"https://www.aaart.edu/",children:"American Academy of Art"})," Thirteen years ago. I'm very interested in frontend development and I have a particular interest in Typescript and React. I also enjoy working on backend/fullstack projects as well as experimenting with other languages and libraries. I like discovering and using the right tools for the job, and I take pleasure in seeking out the simplest solutions possible."]})]})}),Object(l.jsxs)(S,{className:"showcase",id:"showcase",children:[Object(l.jsx)("h1",{children:"Showcase"}),Object(l.jsx)(C,{}),Object(l.jsxs)(k.c,{children:[Object(l.jsx)(k.a,{path:"/todos",component:W}),Object(l.jsx)(k.a,{path:"/game-of-life",component:T}),Object(l.jsx)(k.a,{path:"/words-per-minute",component:H})]})]})]})})}var Q=function(){var e=Object(c.useContext)(d),t=Object(o.a)(e,1)[0];return Object(l.jsx)("div",{className:t.prefersDark?"app dark":"app",children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(N,{}),Object(l.jsx)(K,{}),Object(l.jsx)(b,{})]})})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{children:Object(l.jsx)(Q,{})})}),document.getElementById("root"))}]),[[79,1,2]]]);
//# sourceMappingURL=main.4f81dd3b.chunk.js.map
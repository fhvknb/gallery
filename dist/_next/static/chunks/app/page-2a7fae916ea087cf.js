(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2480:function(){},8819:function(e,n,t){Promise.resolve().then(t.bind(t,4515))},4515:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var s=t(7437),r=t(2265);t(2113);var i=t(888),o=t.n(i),c=t(8110);function a(e,n){return"IMG"===e?"https://raw.githubusercontent.com/fhvknb/raw-assets/master/".concat(n,"/"):"https://raw.githubusercontent.com/fhvknb/raw-assets/master/json/".concat(n,".json")}let l=a("IMG","gt"),d=a("DATA","gt");function u(e){let{cb:n}=e,t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{t.current&&t.current.addEventListener("submit",function(e){e.preventDefault();let t=new FormData(this),s={};t.forEach((e,n)=>{s[n]=e}),n&&n(s)})},[]),(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:(0,s.jsx)("div",{className:" rounded bg-white p-4",children:(0,s.jsxs)("form",{id:"conf_form",ref:t,children:[(0,s.jsxs)("div",{className:"pb-4 flex justify-between",children:[(0,s.jsx)("div",{className:"w-20 leading-8",children:"Group:"}),(0,s.jsx)("input",{className:"w-60 h-8 rounded indent-2 focus:outline-none focus:ring focus:ring-2-indigo-500  focus:border-indigo-500 border-2 border-indigo-300  ",name:"group"})]}),(0,s.jsxs)("div",{className:"pb-4 flex justify-between",children:[(0,s.jsx)("div",{className:"w-20 leading-8",children:"Duration:"}),(0,s.jsx)("input",{className:"w-60 h-8 rounded indent-2 border-2 border-indigo-300  focus:outline-none focus:ring focus:ring-2-indigo-500 focus:border-indigo-500",type:"number",name:"duration"})]}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("button",{className:"border-solid border-2 border-indigo-600 pl-4 pr-4 rounded",children:"保存"})})]})})})}function f(e){let{cb:n}=e,t=(0,r.useRef)(null),[i,o]=(0,r.useState)("");return(0,r.useEffect)(()=>{t.current&&t.current.addEventListener("submit",function(e){e.preventDefault();let t=new FormData(this),s={};if(t.forEach((e,n)=>{s[n]=e}),!(null==s?void 0:s.password)){o("密码不能为空");return}"9eb3489a8d9e592694038d09830713cd"===(0,c.MD5)(s.password).toString()?n&&n():o("密码输入错误！Tip：'dwp toor spv'")})},[]),(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:(0,s.jsx)("div",{className:" rounded bg-white p-4",children:(0,s.jsxs)("form",{id:"login_form",ref:t,children:[(0,s.jsxs)("div",{className:"pb-4 flex justify-between",children:[(0,s.jsx)("div",{className:"w-20 leading-8",children:"Password:"}),(0,s.jsx)("input",{className:"w-60 h-8 rounded indent-2 focus:outline-none focus:ring focus:ring-2-indigo-500  focus:border-indigo-500 border-2 border-indigo-300  ",type:"password",name:"password"})]}),!!i&&(0,s.jsx)("div",{className:"text-sm text-rose-500 pb-4",children:i}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("button",{className:"border-solid border-2 border-indigo-600 pl-4 pr-4 rounded",children:"Login"})})]})})})}function m(e){let{isLogin:n=!1}=e,[t,i]=(0,r.useState)([]),[c,m]=(0,r.useState)(0),[g,h]=(0,r.useState)(!1),[b,x]=(0,r.useState)(n),p=(0,r.useRef)(null),j=async()=>{let e=localStorage.getItem("viewerConf"),n=e&&JSON.parse(e);(null==n?void 0:n.group)&&(d=a("DATA",n.group),l=a("IMG",n.group));try{let e=await fetch(d);if(200===e.status){let n=await e.json();i(function(e){if(!e||!e.length)return[];for(let n=e.length-1;n>0;n--){let t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}(n))}}catch(e){console.log(e)}},w=()=>{if(p.current){var e;null===(e=p.current)||void 0===e||e.destroy()}let n=localStorage.getItem("viewerConf"),t=n&&JSON.parse(n);p.current=new(o())(document.getElementById("images"),{interval:(null==t?void 0:t.duration)?Number(t.duration):5e3})};return(0,r.useEffect)(()=>{b&&j()},[]),(0,r.useEffect)(()=>{t.length&&setTimeout(()=>{w()},10)},[t]),(0,s.jsxs)(s.Fragment,{children:[b&&(0,s.jsxs)("div",{className:"container min-w-fit  min-h-screen",children:[(0,s.jsxs)("ul",{className:"flex flex-wrap",id:"images",children:[t&&t.length>0&&t.map((e,n)=>(0,s.jsx)("li",{className:"w-48 h-48 mt-2 ml-2 ",children:(0,s.jsx)("img",{src:"".concat(l).concat(e.imgSrc),className:"w-full h-full object-cover rounded"})},"img_".concat(n+9))),(0,s.jsx)("li",{onClick:()=>{if(3===c){m(0),h(!0);return}m(e=>++e)},className:"w-48 h-48 ml-2 mt-2"})]}),g&&(0,s.jsx)(u,{cb:e=>{e&&(localStorage.setItem("viewerConf",JSON.stringify(e)),window.location.href="/?")}})]}),!b&&(0,s.jsx)(f,{cb:()=>{(function(e,n,t){let s="";{let e=new Date;e.setTime(e.getTime()+864e5),s="; expires="+e.toUTCString()}document.cookie=e+"=1"+s+"; path=/"})("isLogin",0,0),x(!0),j()}})]})}function g(){let[e,n]=(0,r.useState)(!1),[t,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{i(document.cookie.includes("isLogin=1")),n(!0)},[]),(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)(m,{isLogin:t})})}}},function(e){e.O(0,[992,322,971,23,744],function(){return e(e.s=8819)}),_N_E=e.O()}]);
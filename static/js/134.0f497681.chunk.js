"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{8866:function(n,e,r){var t=r(4137),a=r(184);e.Z=function(){return(0,a.jsx)("div",{className:"Loader",children:(0,a.jsx)(t.Bb,{height:"80",width:"80",radius:"9",color:"#3f51b5",ariaLabel:"three-dots-loading"})})}},3727:function(n,e,r){r.d(e,{Ai:function(){return f},Hx:function(){return p},Y5:function(){return l},uV:function(){return d},wr:function(){return o}});var t=r(8683),a=r(5861),i=r(7757),s=r.n(i),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={api_key:"1ff5f9e57945bfb0ff78aaaf0ecf4ac6",language:"en-US"},o=function(){var n=(0,a.Z)(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week",{params:u});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e),{params:u});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(s().mark((function n(e){var r,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"),{params:u});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(s().mark((function n(e){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews"),{params:(0,t.Z)((0,t.Z)({},u),{},{page:1})});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:(0,t.Z)((0,t.Z)({},u),{},{query:e,include_adult:!0,page:1})});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6940:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,a,i,s,c,u,o=r(5861),l=r(9439),d=r(7757),p=r.n(d),f=r(2791),x=r(7689),h=r(1087),v=r(1909),m=r(168),g=r(7924),b=g.ZP.div(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  padding: 15px;\n"]))),j=g.ZP.div(a||(a=(0,m.Z)(["\n  min-width: 300px;\n  overflow: hidden;\n"]))),Z=g.ZP.div(i||(i=(0,m.Z)(["\n  width: 500px;\n  text-align: justify;\n"]))),w=r.p+"static/media/defaultImg.08ba4a3915c0ff049252.png",k=r(184),y=function(n){var e=n.movie,r=e.poster_path,t=e.title,a=e.release_date,i=e.vote_average,s=e.overview,c=e.genres,u=r?"https://image.tmdb.org/t/p/w300/"+r:w,o=i?Math.round(100*Number(i)/10):"no data available";return(0,k.jsxs)(b,{children:[(0,k.jsx)(j,{children:(0,k.jsx)("img",{src:"".concat(u),alt:t})}),(0,k.jsxs)(Z,{children:[(0,k.jsxs)("h2",{children:[t," (",a&&a.slice(0,4),")"]}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsxs)("p",{children:["User Score: ",(0,k.jsxs)("span",{children:[o,"%"]})]})}),(0,k.jsxs)("li",{children:[(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:s||"no data available"})]}),(0,k.jsxs)("li",{children:[(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:c?c.map((function(n){return n.name})).join(" "):"no data available"})]})]})]})]})},_=r(8866),P=r(3727),U=g.ZP.section(s||(s=(0,m.Z)(["\n  padding: 15px;\n  border-bottom: 2px solid black;\n"]))),S=g.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  border-bottom: 2px solid black;\n"]))),C=(0,g.ZP)(h.rU)(u||(u=(0,m.Z)(["\n  padding: 7px 10px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n  color: black;\n  border: transparent;\n  border-radius: 5px;\n  font-weight: bold;\n"]))),L=function(){var n,e,r=(0,x.UO)().movieId,t=(0,f.useState)(null),a=(0,l.Z)(t,2),i=a[0],s=a[1],c=(0,f.useState)(!1),u=(0,l.Z)(c,2),d=u[0],m=u[1],g=(0,f.useState)(null),b=(0,l.Z)(g,2),j=b[0],Z=b[1],w=(0,x.TH)(),L=(0,f.useRef)(null!==(n=null===w||void 0===w||null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,f.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,o.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),Z(null),e.next=5,(0,P.Y5)(r,{signal:n.signal});case 5:t=e.sent,s(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[r]),(0,k.jsxs)(k.Fragment,{children:[d&&(0,k.jsx)(_.Z,{}),j&&(0,k.jsx)("p",{children:"Error loading movie. Please try again later."}),i&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(C,{to:L.current,children:[(0,k.jsx)(v.rpj,{}),"Go back"]}),(0,k.jsx)(U,{children:(0,k.jsx)(y,{movie:i||{}})}),(0,k.jsxs)(S,{children:[(0,k.jsx)("h4",{children:"Additional information"}),(0,k.jsx)(h.rU,{to:"cast",children:"Cast"}),(0,k.jsx)(h.rU,{to:"reviews",children:"Reviews"})]}),(0,k.jsx)(f.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(x.j3,{})})]})]})}}}]);
//# sourceMappingURL=134.0f497681.chunk.js.map
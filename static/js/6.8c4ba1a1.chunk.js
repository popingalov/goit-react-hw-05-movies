(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[6],{22:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return O}));var r=n(25),c=n.n(r),a=n(26),i=n(27),u=n.n(i),s="https://api.themoviedb.org/3",o="7c9dd50606a07df965d51fc9621e1448";function l(){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.a.get("".concat(s,"/trending/movie/day?api_key=").concat(o)).then((function(t){return t.data.results})),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e)).then((function(t){return t.data.results})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data.results})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},61:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var r=n(5),c=n(0),a=n(1),i=n(7),u=n(59),s=n(22),o=n(10),l=n(2),j=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,57))})),p=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,58))}));function d(){var t,e,n=Object(a.f)(),d=Object(a.e)(),b=Object(a.g)().movieId,h=Object(c.useState)(null),f=Object(r.a)(h,2),v=f[0],O=f[1],x=Object(c.useRef)();Object(c.useEffect)((function(){Object(s.b)(b).then(O),x.current=d.state}),[b]);return Object(l.jsx)(l.Fragment,{children:v&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("button",{type:"button",onClick:function(){var t;(null===x||void 0===x||null===(t=x.current)||void 0===t?void 0:t.state)&&null!==x.current?n(x.current.state):n("/")},children:[Object(l.jsx)(u.a,{style:{marginBottom:-2}}),null!==(t=null===d||void 0===d||null===(e=d.state)||void 0===e?void 0:e.label)&&void 0!==t?t:"Go Back"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:v.poster_path?"https://image.tmdb.org/t/p/w500/".concat(v.poster_path):"https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_960_720.jpg",alt:v.title}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:v.title}),Object(l.jsxs)("p",{children:["User Score: ",10*v.vote_average,"%"]}),Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsx)("p",{children:v.overview}),Object(l.jsx)("h4",{children:"Genres"}),Object(l.jsx)("p",{children:v.genres.map((function(t){return t.name+" "}))})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Additional information"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/movies/".concat(b,"/cast"),children:"Cast"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/movies/".concat(b,"/reviews"),children:"Reviews"})})]})]}),Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)(o.a,{}),children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/cast",element:Object(l.jsx)(j,{})}),Object(l.jsx)(a.a,{path:"/reviews",element:Object(l.jsx)(p,{})})]})})]})})}}}]);
//# sourceMappingURL=6.8c4ba1a1.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{26:function(e,t,n){n.d(t,{Hg:function(){return i},Jh:function(){return d},TP:function(){return p},z1:function(){return o},zv:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="1e921bda25d654ede2c45d2e5f25e7d6",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},828:function(e,t,n){n.r(t);var r=n(439),a=n(26),c=n(791),u=n(689),s=n(87),i=n(184);t.default=function(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1],p=(0,u.UO)().movieId;if((0,c.useEffect)((function(){(0,a.TP)(p).then(o)}),[p]),n){var f=n.poster_path,d=n.title,v=n.overview,h=n.vote_average,l=n.genres.map((function(e){return e.name+" "}));return(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(f),alt:"".concat(d)}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:d}),(0,i.jsxs)("h3",{children:["Rating: ",Math.round(10*h),"%"]}),(0,i.jsx)("h3",{children:"Overview"}),(0,i.jsx)("p",{children:v}),(0,i.jsxs)("h3",{children:["Genres: ",l]}),(0,i.jsx)(s.rU,{to:"cast",children:"Cast"}),(0,i.jsx)(s.rU,{to:"reviews",children:"Reviews"}),(0,i.jsx)(c.Suspense,{children:(0,i.jsx)(u.j3,{})})]})]})}}}}]);
//# sourceMappingURL=828.63cce6af.chunk.js.map
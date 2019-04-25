(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},175:function(e,t,n){e.exports=n(357)},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(39),i=n.n(l),o=(n(180),n(61)),c=n(53),u=n(23),s=n.n(u),m=n(40),p=n(41),d=n(42),g=n(44),f=n(43),v=n(45),h=n(9),E=n(8);function b(){var e=Object(h.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return b=function(){return e},e}function y(){var e=Object(h.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return y=function(){return e},e}function w(){var e=Object(h.a)(["\n  :first-child {\n    margin-top: 20px;\n  }\n\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return w=function(){return e},e}var k=E.default.div(w()),x=E.default.span(y()),_=E.default.div(b()),O=function(e){var t=e.title,n=e.children;return r.a.createElement(k,null,r.a.createElement(x,null,t),r.a.createElement(_,null,n))},j=n(30),S=n.n(j),T=n(31),R=n.n(T),U=n(22),C=n.n(U),M=n(14),I=n.n(M),N=n(167),P=n.n(N),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Loading | \uc804\uc790\uc815\ubd80\uc11c\ube44\uc2a4")),r.a.createElement(R.a,null,r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(I.a,null),r.a.createElement(I.a,null,r.a.createElement(P.a,{animation:"grow",role:"status",variant:"success"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement(I.a,null))))};function A(){var e=Object(h.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return A=function(){return e},e}function D(){var e=Object(h.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return D=function(){return e},e}function F(){var e=Object(h.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return F=function(){return e},e}function L(){var e=Object(h.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return L=function(){return e},e}function B(){var e=Object(h.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return B=function(){return e},e}function W(){var e=Object(h.a)(["\n  font-size: 12px;\n"]);return W=function(){return e},e}var V=E.default.div(W()),K=E.default.div(B(),function(e){return e.bgUrl}),q=E.default.span(L()),J=E.default.div(F(),K,q),G=E.default.span(D()),H=E.default.span(A()),$=function(e){var t=e.id,a=e.imageUrl,l=e.title,i=e.rating,c=e.year,u=e.isMovie,s=void 0!==u&&u;return r.a.createElement(o.b,{to:s?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(V,null,r.a.createElement(J,null,r.a.createElement(K,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(116)}),r.a.createElement(q,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",i,"/10")),r.a.createElement(G,null,l.length>18?"".concat(l.substring(0,18),"..."):l),r.a.createElement(H,null,c)))},Q=n(51),X=n.n(Q),Y=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,l=e.loading,i=e.error;return l?r.a.createElement(z,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Movies | \uc804\uc790\uc815\ubd80\uc11c\ube44\uc2a4")),r.a.createElement(R.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,null,t&&t.length>0&&r.a.createElement(O,{title:"Now Playing"},t.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})))),r.a.createElement(C.a,null,r.a.createElement(I.a,null,a&&a.length>0&&r.a.createElement(O,{title:"Upcoming Movies"},a.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})))),r.a.createElement(C.a,null,r.a.createElement(I.a,null,n&&n.length>0&&r.a.createElement(O,{title:"Popular Movies"},n.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})))),r.a.createElement(C.a,null,r.a.createElement(I.a,null,i&&r.a.createElement(X.a,{variant:"danger",text:i})))))},Z=n(170),ee=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"10923b261ba94d897ac6b81148314a3f",language:"ko-KR"}}),te={nowPlaying:function(){return ee.get("movie/now_playing")},upcoming:function(){return ee.get("movie/upcoming")},popular:function(){return ee.get("movie/popular")},movieDetail:function(e){return ee.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return ee.get("search/movie",{params:{query:encodeURIComponent(e)}})}},ne={topRated:function(){return ee.get("tv/top_rated")},popular:function(){return ee.get("tv/popular")},airingToday:function(){return ee.get("tv/airing_today")},showDetail:function(e){return ee.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return ee.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ae=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,popular:null,upcoming:null,loading:!0,error:null},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark(function e(){var t,n,a,r,l,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,te.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,te.popular();case 11:l=e.sent,i=l.data.results,this.setState({nowPlaying:n,upcoming:r,popular:i}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,l=e.error,i=e.loading;return r.a.createElement(Y,{nowPlaying:t,upcoming:n,popular:a,error:l,loading:i})}}]),t}(r.a.Component),re=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,l=e.loading,i=e.error;return l?r.a.createElement(z,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"TV Shows | \uc804\uc790\uc815\ubd80\uc11c\ube44\uc2a4")),r.a.createElement(R.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,null,t&&t.length>0&&r.a.createElement(O,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(O,{title:"Popular Shows"},n.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(O,{title:"Airing Today"},a.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})))),r.a.createElement(C.a,null,r.a.createElement(I.a,null,i&&r.a.createElement(X.a,{variant:"danger",text:i})))))},le=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark(function e(){var t,n,a,r,l,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,ne.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,ne.airingToday();case 11:l=e.sent,i=l.data.results,this.setState({topRated:n,popular:r,airingToday:i}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,l=e.error,i=e.loading;return r.a.createElement(re,{topRated:t,popular:n,airingToday:a,error:l,loading:i})}}]),t}(r.a.Component),ie=n(46),oe=n.n(ie),ce=n(47),ue=n.n(ce),se=n(81),me=n.n(se),pe=n(106),de=n.n(pe),ge=n(105),fe=n.n(ge),ve=n(24),he=n.n(ve);function Ee(){var e=Object(h.a)([""]);return Ee=function(){return e},e}var be=E.default.header(Ee()),ye=Object(c.f)(function(e){e.location.pathname;return r.a.createElement(be,null,r.a.createElement(oe.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",fixed:"top"},r.a.createElement(oe.a.Brand,{to:"/"},"\uc804\uc790\uc815\ubd80\uc11c\ube44\uc2a4"),r.a.createElement(oe.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(oe.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(ue.a,{className:"mr-auto"},r.a.createElement(ue.a.Link,{href:"/"},"Movie"),r.a.createElement(ue.a.Link,{href:"/tv"},"TV"),r.a.createElement(ue.a.Link,{href:"/search"},"Search"),r.a.createElement(he.a,{title:"Sample",id:"collasible-nav-dropdown"},r.a.createElement(he.a.Item,{href:"sample/1-1"},"Action"),r.a.createElement(he.a.Item,{href:"sample/1-2"},"Another action"),r.a.createElement(he.a.Item,{href:"sample/1-2"},"Something"),r.a.createElement(he.a.Divider,null),r.a.createElement(he.a.Item,{href:"sample/2"},"Separated link"))),r.a.createElement(me.a,{inline:!0},r.a.createElement(de.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(fe.a,{variant:"outline-light"},"Search")))))});function we(){var e=Object(h.a)([""]);return we=function(){return e},e}var ke=E.default.footer(we()),xe=Object(c.f)(function(e){e.location.pathname;return r.a.createElement(ke,null,r.a.createElement(oe.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"bottom",className:"justify-content-center"},r.a.createElement(oe.a.Brand,null,"\xa9 2019 coolitea"),r.a.createElement(oe.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(oe.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(ue.a,{className:"mr-auto"},r.a.createElement(ue.a.Link,{href:"/terms"},"Terms")),r.a.createElement(ue.a,{className:"mr-auto"},r.a.createElement(he.a,{title:"Family Site",id:"collasible-nav-dropdown",drop:"up"},r.a.createElement(he.a.Item,{href:"http://www.ksd.or.kr",target:"_blank"},"KSD"),r.a.createElement(he.a.Item,{href:"https://evote.ksd.or.kr",target:"_blank"},"K-eVote"),r.a.createElement(he.a.Item,{href:"http://www.seibro.or.kr",target:"_blank"},"Seibro"))),r.a.createElement(ue.a,{className:"mr-auto"},r.a.createElement(he.a,{title:"\uad00\ub828 \uc0ac\uc774\ud2b8",id:"collasible-nav-dropdown",drop:"up"},r.a.createElement(he.a.Item,{href:"http://www.fsc.go.kr/",target:"_blank"},"\uae08\uc735\uc704\uc6d0\ud68c"),r.a.createElement(he.a.Item,{href:"http://dart.fss.or.kr/",target:"_blank"},"\uc804\uc790\uacf5\uc2dc\uc2dc\uc2a4\ud15c(Dart)"))))))});function _e(){var e=Object(h.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return _e=function(){return e},e}var Oe=E.default.input(_e()),je=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,l=e.searchTerm,i=e.handleSubmit,o=e.error,c=e.updateTerm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Search | \uc804\uc790\uc815\ubd80\uc11c\ube44\uc2a4")),r.a.createElement(R.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement(me.a,{onSubmit:i},r.a.createElement(Oe,{placeholder:"Search Movies or TV Shows...",value:l,onChange:c})),a?r.a.createElement(z,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(O,{title:"Movie Results"},t.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(O,{title:"TV Show Results"},n.map(function(e){return r.a.createElement($,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(X.a,{variant:"danger",text:o}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(X.a,{variant:"danger",text:"Nothing found"})))," ")))},Se=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(m.a)(s.a.mark(function e(){var t,a,r,l,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,te.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,ne.search(t);case 9:l=e.sent,i=l.data.results,n.setState({movieResults:r,tvResults:i}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])})),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,l=e.error,i=e.loading;return r.a.createElement(je,{movieResults:t,tvResults:n,searchTerm:a,error:l,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function Te(){var e=Object(h.a)(["\n  width: 100%;\n  font-size: 20px;\n  font-weight: 300;\n  margin: 20px 0;\n"]);return Te=function(){return e},e}function Re(){var e=Object(h.a)(["\n  height: 200px;\n  width: 320px;\n"]);return Re=function(){return e},e}function Ue(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 320px);\n  grid-gap: 10px;\n  margin-bottom: 20px;\n"]);return Ue=function(){return e},e}function Ce(){var e=Object(h.a)(["\n  width: 100%;\n"]);return Ce=function(){return e},e}var Me=E.default.div(Ce()),Ie=E.default.div(Ue()),Ne=E.default.iframe(Re()),Pe=E.default.h4(Te()),ze=function(e){var t=e.videos;return r.a.createElement(Me,null,r.a.createElement(Pe,null,"Teasers"),r.a.createElement(Ie,null,t.length>0&&t.map(function(e,t){return t<2?r.a.createElement(Ne,{key:t,src:"https://www.youtube.com/embed/".concat(e.key),controls:!0,frameborder:"0",allowfullscreen:!0}):null})))},Ae=n(172),De=n.n(Ae);function Fe(){var e=Object(h.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n"]);return Fe=function(){return e},e}function Le(){var e=Object(h.a)(["\n  margin: 0 10px;\n"]);return Le=function(){return e},e}function Be(){var e=Object(h.a)([""]);return Be=function(){return e},e}function We(){var e=Object(h.a)(["\n  margin: 20px 0;\n"]);return We=function(){return e},e}function Ve(){var e=Object(h.a)(["\n  font-size: 32px;\n"]);return Ve=function(){return e},e}function Ke(){var e=Object(h.a)(["\n  margin-left: 10px;\n"]);return Ke=function(){return e},e}function qe(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return qe=function(){return e},e}var Je=E.default.div(qe(),function(e){return e.bgImage}),Ge=E.default.div(Ke()),He=E.default.h3(Ve()),$e=E.default.div(We()),Qe=E.default.span(Be()),Xe=E.default.span(Le()),Ye=E.default.p(Fe()),Ze=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(z,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| \uc804\uc790\uc815\ubd80\uc11c\ube44\uc2a4")),r.a.createElement(Je,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(R.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,{md:3},r.a.createElement(De.a,{src:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(116),fluid:!0,rounded:!0})),r.a.createElement(I.a,{md:9},r.a.createElement(Ge,null,r.a.createElement(He,null,t.original_title?t.original_title:t.original_name),r.a.createElement($e,null,r.a.createElement(Qe,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Xe,null,"\u2022"),r.a.createElement(Qe,null,t.runtime?t.runtime:t.episode_run_time[0]," ","min"),r.a.createElement(Xe,null,"\u2022"),r.a.createElement(Qe,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(Ye,null,t.overview),t.videos&&t.videos.results.length>0&&r.a.createElement(ze,{videos:t.videos.results}))))))},et=function(e){function t(e){var n;Object(p.a)(this,t),n=Object(g.a)(this,Object(f.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark(function e(){var t,n,a,r,l,i,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,l=parseInt(n),!isNaN(l)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(i=null,e.prev=6,!r){e.next=14;break}return e.next=10,te.movieDetail(l);case 10:o=e.sent,i=o.data,e.next=18;break;case 14:return e.next=16,ne.showDetail(l);case 16:c=e.sent,i=c.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:i}),e.finish(23);case 26:case"end":return e.stop()}},e,this,[[6,20,23,26]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(Ze,{result:t,error:n,loading:a})}}]),t}(r.a.Component),tt=function(e){var t=e.loading,n=e.error;return t?r.a.createElement(z,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Terms | \uc804\uc790\uc815\ubd80\uc11c\ube44\uc2a4")),r.a.createElement(R.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement("h1",null,"\uc57d\uad00")))),n&&r.a.createElement(X.a,{variant:"danger",text:n}))},nt=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,loading:!0},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!1});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.error,n=e.loading;return r.a.createElement(tt,{error:t,loading:n})}}]),t}(r.a.Component),at=function(){return r.a.createElement(o.a,null,r.a.createElement(ye,null),r.a.createElement("main",null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,component:ae}),r.a.createElement(c.b,{path:"/tv",component:le}),r.a.createElement(c.b,{path:"/search",component:Se}),r.a.createElement(c.b,{path:"/movie/:id",component:et}),r.a.createElement(c.b,{path:"/show/:id",component:et}),r.a.createElement(c.b,{path:"/terms",component:nt}),r.a.createElement(c.a,{from:"*",to:"/"}))),r.a.createElement(xe,null))},rt=n(173),lt=n.n(rt);function it(){var e=Object(h.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;        \n        padding:70px 0;        \n    }\n"]);return it=function(){return e},e}var ot=Object(E.createGlobalStyle)(it(),lt.a);var ct=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(at,null),r.a.createElement(ot,null))},ut=(n(258),n(138),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function st(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(ct,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/egov-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/egov-react","/service-worker.js");ut?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):st(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):st(t,e)})}}()}},[[175,1,2]]]);
//# sourceMappingURL=main.b5e5b9ad.chunk.js.map
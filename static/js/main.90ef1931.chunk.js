(this["webpackJsonpmovie-fan-app"]=this["webpackJsonpmovie-fan-app"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(29),i=c.n(n),s=(c(35),c(13)),o=c(2),r=(c(36),c(10)),d=c(11),j=c(15),m=c(14),v=c(12),p=c.n(v),b="fec8b5ab27b292a68294261bb21b04a5",l=c(1),h=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={movieList:[]},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(b);p.a.get(t).then((function(t){var c=t.data.results;e.setState({movieList:c})}))}},{key:"render",value:function(){var e=this.state.movieList.map((function(e,t){return Object(l.jsx)("div",{className:"col s3",children:Object(l.jsx)(s.b,{to:"/movie/".concat(e.id),children:Object(l.jsx)("img",{src:"".concat("http://image.tmdb.org/t/p/w300").concat(e.poster_path)})})},t)}));return Object(l.jsx)("div",{className:"row",children:e})}}]),c}(a.Component),u=function(e){Object(j.a)(c,e);var t=Object(m.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={movie:{}},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId,c="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(b);p.a.get(c).then((function(t){e.setState({movie:t.data})}))}},{key:"render",value:function(){if(void 0===this.state.movie.title)return Object(l.jsx)("h5",{children:"Loading..."});var e=this.state.movie,t="http://image.tmdb.org/t/p/w300".concat(e.poster_path);return Object(l.jsx)("div",{className:"row",onClick:function(){return window.history.back()},children:Object(l.jsx)("div",{className:"col s12 m3",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("img",{src:t})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("span",{className:"card-title",children:e.title}),Object(l.jsxs)("p",{children:["Budget: ",e.budget]}),Object(l.jsxs)("p",{children:["Tagline: ",e.tagline]}),Object(l.jsxs)("p",{children:["Overview: ",e.overview]})]})]})})})}}]),c}(a.Component);var O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(s.a,{basename:"/movie-fan-app",children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(o.a,{exact:!0,path:"/movie/:movieId",component:u})]})})})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.90ef1931.chunk.js.map
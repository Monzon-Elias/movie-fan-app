(this["webpackJsonpmovie-fan-app"]=this["webpackJsonpmovie-fan-app"]||[]).push([[0],{35:function(t,e,a){},36:function(t,e,a){},61:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a(29),i=a.n(n),s=(a(35),a(13)),o=a(2),r=(a(36),a(10)),d=a(11),j=a(15),m=a(14),l=a(12),p=a.n(l),v="fec8b5ab27b292a68294261bb21b04a5",b=a(1),h=function(t){Object(j.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).state={movieList:[]},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this,e="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(v);p.a.get(e).then((function(e){var a=e.data.results;t.setState({movieList:a})}))}},{key:"render",value:function(){var t=this.state.movieList.map((function(t,e){return Object(b.jsx)("div",{className:"col s3",children:Object(b.jsx)(s.b,{to:"/movie/".concat(t.id),children:Object(b.jsx)("img",{src:"".concat("http://image.tmdb.org/t/p/w300").concat(t.poster_path)})})},e)}));return Object(b.jsx)("div",{className:"row",children:t})}}]),a}(c.Component),u=function(t){Object(j.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).state={movie:{}},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.movieId,a="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(v);p.a.get(a).then((function(e){console.log(e.data),t.setState({movie:e.data})}))}},{key:"render",value:function(){if(void 0===this.state.movie.title)return Object(b.jsx)("h5",{children:"Loading..."});var t=this.state.movie,e="http://image.tmdb.org/t/p/w300".concat(t.poster_path);return Object(b.jsx)("div",{className:"row",onClick:function(){return window.history.back()},children:Object(b.jsx)("div",{className:"col s12 m3",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("img",{src:e})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsx)("span",{className:"card-title",children:t.title}),Object(b.jsxs)("p",{children:["Budget: ",t.budget]}),Object(b.jsxs)("p",{children:["Tagline: ",t.tagline]}),Object(b.jsxs)("p",{children:["Overview: ",t.overview]})]})]})})})}}]),a}(c.Component);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(s.a,{basename:"/https://monzon-elias.github.io/movie-fan-app",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(b.jsx)(o.a,{exact:!0,path:"/movie/:movieId",component:u})]})})})};i.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.3d36fce0.chunk.js.map
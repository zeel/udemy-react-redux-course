(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),s=a(8),o=a.n(s),u=a(16),m=a(2),l=a(3),h=a(5),p=a(4),d=a(6),f=a(17),b=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 8870f5e8c899280cd06c8cd318c973513a396f317c29bc2844b9de45f563540b"}}),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.onInputChange=function(e){a.setState({searchTerm:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSearchSubmit(a.state.searchTerm)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search Images"),r.a.createElement("input",{type:"text",placeholder:"Enter keywords to search images",onChange:this.onInputChange}))))}}]),t}(r.a.Component),v=(a(42),10),E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).setSpans=function(){a.setState({rowEnd:Math.ceil((a.image.current.clientHeight+25)/v)})},a.image=r.a.createRef(),a.state={rowEnd:0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.image.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image;return r.a.createElement("div",{className:"image-card",style:{gridRowEnd:"span ".concat(this.state.rowEnd),visibility:"".concat(this.state.rowEnd?"visible":"hidden")}},r.a.createElement("img",{className:"ui image",alt:e.alt,src:e.url,ref:this.image}))}}]),t}(r.a.Component),j=(a(43),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderEmptyContainer",value:function(){return r.a.createElement("div",{className:"ui segment empty-container"},"No Images Found")}},{key:"render",value:function(){var e=this.props.images,t=this.props.images.map(function(e){return r.a.createElement(E,{image:e,key:e.id})});return e.length>0?r.a.createElement("div",{className:"ui segment image-list"},t):this.renderEmptyContainer()}}]),t}(r.a.Component)),y=(a(44),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={images:null},a.onSearchSubmit=function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.trim())){e.next=6;break}return e.next=4,b.get("search/photos",{params:{query:n}});case 4:r=e.sent;try{200===r.status?(i=[],r.data.results.forEach(function(e){i.push({id:e.id,url:e.urls.regular,alt:e.alt_description})}),a.setState({images:i})):a.setState({errorMsg:r.data.errors.join(", ")})}catch(c){a.setState({errorMsg:c.response.data.errors.join(", ")})}case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(g,{onSearchSubmit:this.onSearchSubmit}),this.state.images?r.a.createElement(j,{images:this.state.images}):this.state.errorMsg)}}]),t}(r.a.Component));a(45);c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bedb27ff.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2kpy":function(t,e,a){"use strict";a("vmDm")},"8+sH":function(t,e,a){},BgJl:function(t,e,a){"use strict";a("8+sH")},Fs0V:function(t,e,a){"use strict";a("TuYI")},"J/+R":function(t,e,a){},KQm4:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("a3WO");var s=a("BsWD");function r(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(s.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Rm1S:function(t,e,a){"use strict";var n=a("xluM"),s=a("14Sl"),r=a("glrk"),i=a("UMSQ"),o=a("V37c"),l=a("HYAF"),c=a("3Eq5"),u=a("iqWW"),p=a("FMNM");s("match",(function(t,e,a){return[function(e){var a=l(this),s=null==e?void 0:c(e,t);return s?n(s,e,a):new RegExp(e)[t](o(a))},function(t){var n=r(this),s=o(t),l=a(e,n,s);if(l.done)return l.value;if(!n.global)return p(n,s);var c=n.unicode;n.lastIndex=0;for(var f,g=[],d=0;null!==(f=p(n,s));){var v=o(f[0]);g[d]=v,""===v&&(n.lastIndex=u(s,i(n.lastIndex),c)),d++}return 0===d?null:g}]}))},TuYI:function(t,e,a){},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("Kw5r");var n=a("DOVJ"),s=(a("Y6W1"),a("VTBJ")),r=(a("qePV"),a("rB9j"),a("UxlC"),a("2B1R"),a("ALS0"),a("ma9I"),a("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,i=e.data,l=e.parent,c=a.info,u=a.showLinks,p=a.showNavigation,f=a.ariaLabel,g=function(t,e){var a=t.currentPage,n=void 0===a?1:a,s=t.totalPages,r=void 0===s?1:s,i=Math.ceil(e/2),o=Math.floor(n-i),l=Math.floor(n+i);r<=e?(o=0,l=r):n<=i?(o=0,l=e):n+i>=r&&(o=r-e,l=r);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:n,total:r,start:o,end:l,pages:c}}(c,a.range),d=g.current,v=g.total,b=g.pages,h=g.start,m=g.end,C=Object(r.d)(l.$route),y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===d&&(i=a.ariaCurrentLabel);var c={to:o(C,e),exact:!0};return a.activeLinkClass&&(c.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(c.exactActiveClass=a.exactActiveLinkClass),t(n.a,{class:[a.linkClass,l],attrs:Object(s.a)(Object(s.a)({},c),{},{"aria-label":i.replace("%n",e),"aria-current":d===e})},[r])},L=u?b.map((function(t){return y(t,t,a.ariaLinkLabel)})):[];if(p){var x=a.firstLabel,k=a.prevLabel,S=a.nextLabel,P=a.lastLabel,_=a.ariaFirstLabel,w=a.ariaPrevLabel,j=a.ariaNextLabel,O=a.ariaLastLabel,I=a.firstClass,B=a.prevClass,$=a.nextClass,A=a.lastClass,M=a.navClass;d>1&&L.unshift(y(d-1,k,w,[B,M])),h>0&&L.unshift(y(1,x,_,[I,M])),d<v&&L.push(y(d+1,S,j,[$,M])),m<v&&L.push(y(v,P,O,[A,M]))}return L.length<2?null:t("nav",Object(s.a)(Object(s.a)({},i),{},{attrs:{role:"navigation","aria-label":f}}),L)}};function o(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(r.g)(t)+"/".concat(e).concat(a):t}a("6NbQ")},iEXD:function(t,e,a){"use strict";a.r(e);var n=a("KQm4"),s=(a("ma9I"),a("+2oP"),a("Wsvf")),r=(a("SYor"),a("rB9j"),a("UxlC"),a("Rm1S"),{props:["post"],methods:{getPlainText:function(t){return t.replace(/<\/?[^>]+(>|$)/gi,"").trim()},getSnippet:function(t){return!0===this.hasMoreContent(t)&&!1==!!t.node.excerpt.trim().match(/[.,:!?]$/)?"".concat(t.node.excerpt.trim()," ..."):t.node.excerpt.trim()},hasMoreContent:function(t){return this.getPlainText(t.node.content).length>this.getPlainText(t.node.excerpt).length}}}),i=(a("BgJl"),a("7uw+")),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-post-headline columns is-gapless"},[a("div",{staticClass:"column is-two-thirds-desktop"},[a("figure",[a("div",{staticClass:"image is-16by9"},[a("g-link",{attrs:{to:t.post.node.path}},[a("img",{attrs:{alt:t.post.node.figure.img.alt,src:t.post.node.figure.img.src}})])],1),a("figcaption",[a("a",{attrs:{href:t.post.node.figure.url,target:"_blank"}},[t._v("\n          "+t._s(t.post.node.figure.caption)+"\n        ")])])])]),a("div",{staticClass:"column is-one-third-desktop"},[a("h3",{staticClass:"title is-3"},[a("g-link",{attrs:{to:t.post.node.path}},[t._v("\n        "+t._s(t.post.node.title)+"\n      ")])],1),a("div",{staticClass:"content"},[a("p",[a("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.getSnippet(t.post))}}),!0===t.hasMoreContent(t.post)?a("g-link",{staticClass:"continue-reading",attrs:{to:t.post.node.path}},[t._v("continue reading")]):t._e()],1)])])])}),[],!1,null,"2383f99e",null).exports,l={props:["post"]},c=(a("2kpy"),{props:["posts"],components:{PostHeadline:o,PostCard:Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-post-card is-flex is-flex-direction-column"},[a("figure",[a("div",{staticClass:"image is-16by9"},[a("g-link",{attrs:{to:t.post.node.path}},[a("img",{attrs:{alt:t.post.node.figure.img.alt,src:t.post.node.figure.img.src}})])],1),a("figcaption",[a("a",{attrs:{href:t.post.node.figure.url,target:"_blank"}},[t._v("\n        "+t._s(t.post.node.figure.caption)+"\n      ")])])]),a("div",{staticClass:"is-flex is-flex-direction-column is-flex-grow-1"},[a("h3",{staticClass:"title is-5"},[a("g-link",{attrs:{to:t.post.node.path}},[t._v("\n        "+t._s(t.post.node.title)+"\n      ")])],1)])])}),[],!1,null,"19adcd43",null).exports,Pager:s.a},computed:{chunks:function(){return[this.posts.edges.slice(0,1)].concat(Object(n.a)(this.chunkArray(this.posts.edges.slice(1),3)))}},methods:{chunkArray:function(t,e){for(var a=[],n=0;n<t.length;n+=e)a.push(t.slice(n,n+e));return a}}}),u=(a("Fs0V"),{metaInfo:function(){return{title:"Blog"}},components:{Posts:Object(i.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-posts"},[a("div",{staticClass:"container"},[t._l(t.chunks,(function(e,n){return a("div",{key:n,staticClass:"columns"},t._l(e,(function(t){return a("div",{key:t.node.id,staticClass:"column is-flex"},[a(0===n?"PostHeadline":"PostCard",{attrs:{post:t}})],1)})),0)})),a("Pager",{staticClass:"m-pagination",attrs:{info:t.posts.pageInfo}})],2)])}),[],!1,null,"556f95a6",null).exports},methods:{breadcrumbFactory:function(){return this.$page.posts.pageInfo.currentPage>1?[{to:"/",label:"Home"},{to:"/blog/",label:"Blog"},{to:"/blog/".concat(this.$page.posts.pageInfo.currentPage,"/"),label:"Page ".concat(this.$page.posts.pageInfo.currentPage)}]:[{to:"/",label:"Home"},{to:"/blog/",label:"Blog"}]}}}),p=(a("r/Ft"),null),f=Object(i.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"m-blog"},[e("Posts",{attrs:{posts:this.$page.posts}})],1)])}),[],!1,null,"60161b0d",null);"function"==typeof p&&p(f);e.default=f.exports},"r/Ft":function(t,e,a){"use strict";a("J/+R")},vmDm:function(t,e,a){}}]);
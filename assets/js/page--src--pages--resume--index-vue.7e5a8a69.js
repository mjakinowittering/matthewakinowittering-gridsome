(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0yJd":function(e,s,t){"use strict";t("2sdy")},"2sdy":function(e,s,t){},"7ESV":function(e,s,t){},EUja:function(e,s,t){"use strict";var n=t("WSbT"),r=t("V37c"),a=t("HYAF"),o=RangeError;e.exports=function(e){var s=r(a(this)),t="",i=n(e);if(i<0||i==1/0)throw o("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(s+=s))1&i&&(t+=s);return t}},F5UZ:function(e,s,t){"use strict";t.r(s);t("toAj"),t("ma9I");var n=t("wd/R"),r=t.n(n),a={props:["dateFrom","dateTo"],methods:{calcLengthOfService:function(e,s){var t=this.calcLengthOfServiceInMonths(r()(e),null!==s?r()(s):r()());return t<12?this.lengthOfServiceLessThanOneYear(t):t<13?this.lengthOfServiceOneYear(t):this.lengthOfServiceGreaterThanOneYear(t)},calcLengthOfServiceInMonths:function(e,s){return Math.ceil(s.diff(e,"months",!0).toFixed(2))},isPresent:function(e){return null!==e?e:"Present"},lengthOfServiceLessThanOneYear:function(e){var s=e>1?"mths":"mth";return"".concat(e," ").concat(s)},lengthOfServiceOneYear:function(e){return"".concat(e," yr")},lengthOfServiceGreaterThanOneYear:function(e){var s=Math.floor(e/12),t=e-12*s,n=t>1?"mths":"mth",r=s>1?"yrs":"yr";return"".concat(s," ").concat(r," ").concat(t," ").concat(n)}}},o=(t("U7mv"),t("7uw+")),i=Object(o.a)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",{staticClass:"m-timeframe"},[t("i",{staticClass:"las la-calendar"}),e._v(" "+e._s(e.dateFrom)+" - "+e._s(e.isPresent(e.dateTo))+" • "+e._s(e.calcLengthOfService(e.dateFrom,e.dateTo)))])}),[],!1,null,"31d00c8c",null).exports,j={props:["event"],components:{Timeframe:i}},c=(t("0yJd"),{props:["events"],components:{Event:Object(o.a)(j,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"m-event"},[s("h4",[this._v(this._s(this.event.node.title))]),s("Timeframe",{attrs:{dateFrom:this.event.node.dateFrom,dateTo:this.event.node.dateTo}}),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:this._s(this.event.node.content)}})],1)}),[],!1,null,"62028f14",null).exports}}),l=(t("tLVL"),{metaInfo:function(){return{title:"Resume"}},components:{Timeframe:i,History:Object(o.a)(c,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"m-history"},e._l(e.events,(function(s,n){return t("div",{key:s.node.id,staticClass:"m-timeline"},[t("Event",{attrs:{event:s}}),n!=e.events.length-1?t("hr"):e._e()],1)})),0)}),[],!1,null,"71a2122c",null).exports}}),u=(t("TELr"),null),d=Object(o.a)(l,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("Layout",[t("div",{staticClass:"m-resume"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-two-thirds-desktop"},[t("h1",[e._v("Resume")]),t("h2",[e._v("Education")]),e._l(e.$page.allUniversity.edges,(function(s,n){return t("div",{key:s.node.id,staticClass:"m-topic"},[t("h3",[e._v(e._s(s.node.name))]),s.node.courses.edges.length>1?t("Timeframe",{attrs:{dateFrom:s.node.dateFrom,dateTo:s.node.dateTo}}):e._e(),t("History",{attrs:{events:s.node.courses.edges}}),n!=e.$page.allUniversity.edges.length-1?t("hr"):e._e()],1)})),t("hr"),t("h2",[e._v("Employment")]),e._l(e.$page.allCompany.edges,(function(s,n){return t("div",{key:s.node.id,staticClass:"m-topic",attrs:{id:n}},[t("h3",[e._v(e._s(s.node.name))]),s.node.roles.edges.length>1?t("Timeframe",{attrs:{dateFrom:s.node.dateFrom,dateTo:s.node.dateTo}}):e._e(),t("History",{attrs:{events:s.node.roles.edges}}),n!=e.$page.allCompany.edges.length-1?t("hr"):e._e()],1)}))],2)])])])])}),[],!1,null,"7772a847",null);"function"==typeof u&&u(d);s.default=d.exports},RnhZ:function(e,s,t){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(e){var s=a(e);return t(s)}function a(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="RnhZ"},TELr:function(e,s,t){"use strict";t("tJBq")},U7mv:function(e,s,t){"use strict";t("ULRB")},ULRB:function(e,s,t){},tJBq:function(e,s,t){},tLVL:function(e,s,t){"use strict";t("7ESV")},toAj:function(e,s,t){"use strict";var n=t("I+eb"),r=t("4zBA"),a=t("WSbT"),o=t("QIpd"),i=t("EUja"),j=t("0Dky"),c=RangeError,l=String,u=Math.floor,d=r(i),m=r("".slice),f=r(1..toFixed),h=function(e,s,t){return 0===s?t:s%2==1?h(e,s-1,t*e):h(e*e,s/2,t)},v=function(e,s,t){for(var n=-1,r=t;++n<6;)r+=s*e[n],e[n]=r%1e7,r=u(r/1e7)},g=function(e,s){for(var t=6,n=0;--t>=0;)n+=e[t],e[t]=u(n/s),n=n%s*1e7},p=function(e){for(var s=6,t="";--s>=0;)if(""!==t||0===s||0!==e[s]){var n=l(e[s]);t=""===t?n:t+d("0",7-n.length)+n}return t};n({target:"Number",proto:!0,forced:j((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!j((function(){f({})}))},{toFixed:function(e){var s,t,n,r,i=o(this),j=a(e),u=[0,0,0,0,0,0],f="",y="0";if(j<0||j>20)throw c("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return l(i);if(i<0&&(f="-",i=-i),i>1e-21)if(t=(s=function(e){for(var s=0,t=e;t>=4096;)s+=12,t/=4096;for(;t>=2;)s+=1,t/=2;return s}(i*h(2,69,1))-69)<0?i*h(2,-s,1):i/h(2,s,1),t*=4503599627370496,(s=52-s)>0){for(v(u,0,t),n=j;n>=7;)v(u,1e7,0),n-=7;for(v(u,h(10,n,1),0),n=s-1;n>=23;)g(u,1<<23),n-=23;g(u,1<<n),v(u,1,1),g(u,2),y=p(u)}else v(u,0,t),v(u,1<<-s,0),y=p(u)+d("0",j);return y=j>0?f+((r=y.length)<=j?"0."+d("0",j-r)+y:m(y,0,r-j)+"."+m(y,r-j)):f+y}})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+FNB":function(s,e,t){},"/Gi1":function(s,e,t){"use strict";t("+FNB")},"/t+3":function(s,e,t){},"7pJa":function(s,e,t){},F5UZ:function(s,e,t){"use strict";t.r(e);var n=t("wd/R"),a=t.n(n),r={props:["dateFrom","dateTo"],methods:{calcLengthOfService(s,e){const t=this.calcLengthOfServiceInMonths(a()(s),null!==e?a()(e):a()());return t<12?this.lengthOfServiceLessThanOneYear(t):t<13?this.lengthOfServiceOneYear(t):this.lengthOfServiceGreaterThanOneYear(t)},calcLengthOfServiceInMonths:(s,e)=>Math.ceil(e.diff(s,"months",!0).toFixed(2)),isPresent:s=>null!==s?s:"Present",lengthOfServiceLessThanOneYear:s=>`${s} ${s>1?"mths":"mth"}`,lengthOfServiceOneYear:s=>s+" yr",lengthOfServiceGreaterThanOneYear(s){const e=Math.floor(s/12),t=s-12*e,n=e>1?"yrs":"yr";return 0!==t?`${e} ${n} ${t} ${t>1?"mths":"mth"}`:`${e} ${n}`}}},i=(t("QYV1"),t("KHd+")),o=Object(i.a)(r,(function(){var s=this,e=s._self._c;return e("p",{staticClass:"m-timeframe"},[e("i",{staticClass:"las la-calendar"}),s._v(" "+s._s(s.dateFrom)+" - "+s._s(s.isPresent(s.dateTo))+" •\n  "+s._s(s.calcLengthOfService(s.dateFrom,s.dateTo))+"\n")])}),[],!1,null,"d367ab02",null).exports,c={props:["event"],components:{Timeframe:o}},j=(t("/Gi1"),{props:["events"],components:{Event:Object(i.a)(c,(function(){var s=this._self._c;return s("div",{staticClass:"m-event"},[s("h4",[this._v(this._s(this.event.node.title))]),s("Timeframe",{attrs:{dateFrom:this.event.node.dateFrom,dateTo:this.event.node.dateTo}}),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:this._s(this.event.node.content)}})],1)}),[],!1,null,"41999ea2",null).exports}}),l={props:["title","organisations"],components:{Timeframe:o,Timeline:Object(i.a)(j,(function(){var s=this._self._c;return s("div",{staticClass:"m-timeline"},this._l(this.events,(function(e){return s("Event",{key:e.node.id,attrs:{event:e}})})),1)}),[],!1,null,null,null).exports}},d=(t("SzHf"),{metaInfo:()=>({title:"Resume"}),components:{Topic:Object(i.a)(l,(function(){var s=this,e=s._self._c;return e("div",{staticClass:"m-topic"},[e("h2",[s._v(s._s(s.title))]),s._l(s.organisations,(function(t,n){return e("div",{key:t.node.id,staticClass:"m-topic__organisation"},[e("h3",[e("g-link",{attrs:{to:t.node.address}},[s._v(s._s(t.node.name))])],1),t.node.events.edges.length>1?e("Timeframe",{attrs:{dateFrom:t.node.dateFrom,dateTo:t.node.dateTo}}):s._e(),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"m-topic__intro content",domProps:{innerHTML:s._s(t.node.content)}}),e("Timeline",{attrs:{events:t.node.events.edges}}),n!=s.organisations.length-1?e("hr"):s._e()],1)}))],2)}),[],!1,null,null,null).exports},data:()=>({productManager:{dateSince:new Date("2010-06-01T00:00:00+0000")}}),methods:{timeSinceBecomingProductManager(){return a()(this.productManager.dateSince).fromNow("y")},monthBecameProductManager(){return this.productManager.dateSince.toLocaleString("default",{month:"long"})},yearBecameProductManager(){return this.productManager.dateSince.toLocaleString("default",{year:"numeric"})},timeSinceBecomingProductManagerTitle(){return`I've worked in Product Management roles since ${this.monthBecameProductManager()} ${this.yearBecameProductManager()}`}}}),m=(t("OABz"),null),u=Object(i.a)(d,(function(){var s=this._self._c;return s("Layout",[s("div",{staticClass:"m-resume"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds-desktop"},[s("h1",[this._v(this._s(this.$page.introduction.title))]),s("div",{staticClass:"m-story"},[s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:this._s(this.$page.introduction.content)}})]),s("hr"),s("Topic",{attrs:{title:"Employment",organisations:this.$page.companies.edges}}),s("hr"),s("Topic",{attrs:{title:"Education",organisations:this.$page.universities.edges}})],1)])])])])}),[],!1,null,"f17d8696",null);"function"==typeof m&&m(u);e.default=u.exports},FeDH:function(s,e,t){},OABz:function(s,e,t){"use strict";t("/t+3")},QYV1:function(s,e,t){"use strict";t("FeDH")},RnhZ:function(s,e,t){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function a(s){var e=r(s);return t(e)}function r(s){if(!t.o(n,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return n[s]}a.keys=function(){return Object.keys(n)},a.resolve=r,s.exports=a,a.id="RnhZ"},SzHf:function(s,e,t){"use strict";t("7pJa")}}]);
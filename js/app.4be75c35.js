(function(e){function n(n){for(var t,c,u=n[0],f=n[1],b=n[2],o=0,d=[];o<u.length;o++)c=u[o],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&d.push(s[c][0]),s[c]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);h&&h(n);while(d.length)d.shift()();return r.push.apply(r,b||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],t=!0,c=1;c<a.length;c++){var u=a[c];0!==s[u]&&(t=!1)}t&&(r.splice(n--,1),e=f(f.s=a[0]))}return e}var t={},c={app:0},s={app:0},r=[];function u(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-2ac22a7a":"9e0ae641","chunk-2fb5d073":"6da062a2","chunk-38b8c406":"a8bd5ab5","chunk-62b460dc":"3201b11f","chunk-6ebdabae":"e0729734","chunk-77520a2e":"74c7b6fc","chunk-7f87fa9f":"0cf35cda","chunk-a12221c4":"d27b91b2","chunk-0acf5005":"58bc8f9a","chunk-1a6410c0":"59dfd495","chunk-43b230d8":"0a536322","chunk-44bbe3f8":"e730b50b","chunk-98bf3058":"3e4e14fa","chunk-0ae83701":"f29936e5","chunk-1c842293":"2376959e","chunk-229870b0":"83113869","chunk-59ae4eeb":"9f35ace8","chunk-6b7443f0":"974b1316","chunk-8a84be1a":"9c9b2d59","chunk-6c9a4ae8":"48f20d87","chunk-d4a6e1e0":"aab6c496","chunk-251e1ce2":"3692e2c9","chunk-1f0fad0f":"5f3443f4","chunk-bdc40bec":"2df01525"}[e]+".js"}function f(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,f),a.l=!0,a.exports}f.e=function(e){var n=[],a={"chunk-2ac22a7a":1,"chunk-2fb5d073":1,"chunk-38b8c406":1,"chunk-62b460dc":1,"chunk-6ebdabae":1,"chunk-77520a2e":1,"chunk-7f87fa9f":1,"chunk-a12221c4":1,"chunk-0acf5005":1,"chunk-1a6410c0":1,"chunk-43b230d8":1,"chunk-44bbe3f8":1,"chunk-98bf3058":1,"chunk-0ae83701":1,"chunk-1c842293":1,"chunk-229870b0":1,"chunk-59ae4eeb":1,"chunk-6b7443f0":1,"chunk-8a84be1a":1,"chunk-6c9a4ae8":1,"chunk-d4a6e1e0":1,"chunk-251e1ce2":1,"chunk-1f0fad0f":1,"chunk-bdc40bec":1};c[e]?n.push(c[e]):0!==c[e]&&a[e]&&n.push(c[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-2ac22a7a":"8c46ded9","chunk-2fb5d073":"f6b8f053","chunk-38b8c406":"c0af73bc","chunk-62b460dc":"51139861","chunk-6ebdabae":"0cf9a3aa","chunk-77520a2e":"92219d35","chunk-7f87fa9f":"40fd7c38","chunk-a12221c4":"ba8fca06","chunk-0acf5005":"d8ba5d91","chunk-1a6410c0":"a6f8339d","chunk-43b230d8":"4727b5fb","chunk-44bbe3f8":"2bd16923","chunk-98bf3058":"34d0bb2f","chunk-0ae83701":"b6fa35b6","chunk-1c842293":"5f1bb044","chunk-229870b0":"28f7e007","chunk-59ae4eeb":"a7e5dfe0","chunk-6b7443f0":"a6f8339d","chunk-8a84be1a":"fac15e17","chunk-6c9a4ae8":"ba56d3bb","chunk-d4a6e1e0":"1c270774","chunk-251e1ce2":"8bcfda9e","chunk-1f0fad0f":"11f84c5a","chunk-bdc40bec":"c5898eb3"}[e]+".css",s=f.p+t,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var b=r[u],o=b.getAttribute("data-href")||b.getAttribute("href");if("stylesheet"===b.rel&&(o===t||o===s))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){b=d[u],o=b.getAttribute("data-href");if(o===t||o===s)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var t=n&&n.target&&n.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete c[e],h.parentNode.removeChild(h),a(r)},h.href=s;var i=document.getElementsByTagName("head")[0];i.appendChild(h)})).then((function(){c[e]=0})));var t=s[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,a){t=s[e]=[n,a]}));n.push(t[2]=r);var b,o=document.createElement("script");o.charset="utf-8",o.timeout=120,f.nc&&o.setAttribute("nonce",f.nc),o.src=u(e);var d=new Error;b=function(n){o.onerror=o.onload=null,clearTimeout(h);var a=s[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",d.name="ChunkLoadError",d.type=t,d.request=c,a[1](d)}s[e]=void 0}};var h=setTimeout((function(){b({type:"timeout",target:o})}),12e4);o.onerror=o.onload=b,document.head.appendChild(o)}return Promise.all(n)},f.m=e,f.c=t,f.d=function(e,n,a){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(f.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)f.d(a,t,function(n){return e[n]}.bind(null,t));return a},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="/",f.oe=function(e){throw console.error(e),e};var b=window["webpackJsonp"]=window["webpackJsonp"]||[],o=b.push.bind(b);b.push=n,b=b.slice();for(var d=0;d<b.length;d++)n(b[d]);var h=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"13b9":function(e,n,a){},"4a36":function(e,n,a){"use strict";var t=a("e34d"),c=a.n(t);c.a},"56d7":function(e,n,a){"use strict";a.r(n);a("a133"),a("ed0d"),a("f09c"),a("e117");var t=a("a593"),c=a("ec3a"),s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],u=a("9ca4"),f={},b=Object(u["a"])(f,s,r,!1,null,null,null),o=b.exports,d=(a("e18c"),a("4fb5")),h=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"layout"},[a("a-layout",[a("a-layout-header",[a("headerNav")],1),a("a-layout-content",{staticClass:"layout-content"},[a("router-view")],1),a("a-layout-footer",[a("footerNav")],1)],1)],1)},i=[],l=function(){return a.e("chunk-6ebdabae").then(a.bind(null,"d614"))},j=function(){return a.e("chunk-62b460dc").then(a.bind(null,"2ec6"))},k={name:"layout",data:function(){return{timer:null,contentWidth:"1200px",collapsed:!1,routerList:[]}},components:{headerNav:l,footerNav:j},mounted:function(){},methods:{handleClick:function(){},openChange:function(e){console.log("当前的event",e)}}},m=k,p=(a("4a36"),a("e9f8"),Object(u["a"])(m,h,i,!1,null,"e35742b4",null)),v=p.exports;t["a"].use(d["a"]);var g=[{path:"/",component:v,children:[{path:"/index",component:function(){return a.e("chunk-2ac22a7a").then(a.bind(null,"2638"))},name:"首页"},{path:"/product",component:function(){return a.e("chunk-38b8c406").then(a.bind(null,"c994"))},name:"解决方案"},{path:"/programme",component:function(){return a.e("chunk-7f87fa9f").then(a.bind(null,"8dcd"))},name:"解决方案"},{path:"/system",component:function(){return a.e("chunk-2fb5d073").then(a.bind(null,"9e47"))},name:"系统特色"},{path:"/price",component:function(){return a.e("chunk-a12221c4").then(a.bind(null,"e651"))},name:"价格"},{path:"/channel",component:function(){return a.e("chunk-77520a2e").then(a.bind(null,"7776"))},name:"渠道"}]}],y=new d["a"]({mode:"hash",base:"/",routes:g}),w=y,z=a("9f3a");t["a"].use(z["a"]);var O=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("95f3");t["a"].config.productionTip=!1,t["a"].use(c["a"]),w.beforeEach((function(e,n,a){"/"!=e.path&&e.path?a():a("/index")})),new t["a"]({router:w,store:O,render:function(e){return e(o)}}).$mount("#app")},aaf1:function(e,n,a){var t={"./af":"0674","./af.js":"0674","./ar":"6cc2","./ar-dz":"b1de","./ar-dz.js":"b1de","./ar-kw":"7d0b","./ar-kw.js":"7d0b","./ar-ly":"4064","./ar-ly.js":"4064","./ar-ma":"56ad","./ar-ma.js":"56ad","./ar-sa":"adaa","./ar-sa.js":"adaa","./ar-tn":"5221","./ar-tn.js":"5221","./ar.js":"6cc2","./az":"1a3f","./az.js":"1a3f","./be":"84b2","./be.js":"84b2","./bg":"a213","./bg.js":"a213","./bm":"8b34","./bm.js":"8b34","./bn":"3482","./bn-bd":"98bb","./bn-bd.js":"98bb","./bn.js":"3482","./bo":"a3f6","./bo.js":"a3f6","./br":"72ea","./br.js":"72ea","./bs":"fa2c","./bs.js":"fa2c","./ca":"f217","./ca.js":"f217","./cs":"1b54","./cs.js":"1b54","./cv":"ae9c","./cv.js":"ae9c","./cy":"7554","./cy.js":"7554","./da":"b478","./da.js":"b478","./de":"35a9","./de-at":"5b88","./de-at.js":"5b88","./de-ch":"7475","./de-ch.js":"7475","./de.js":"35a9","./dv":"4c16","./dv.js":"4c16","./el":"3f33","./el.js":"3f33","./en-au":"73ff","./en-au.js":"73ff","./en-ca":"bfc9","./en-ca.js":"bfc9","./en-gb":"428a","./en-gb.js":"428a","./en-ie":"6b5c","./en-ie.js":"6b5c","./en-il":"eb4a","./en-il.js":"eb4a","./en-in":"3fbf","./en-in.js":"3fbf","./en-nz":"89f8","./en-nz.js":"89f8","./en-sg":"13d6","./en-sg.js":"13d6","./eo":"dfd6","./eo.js":"dfd6","./es":"5221e","./es-do":"7a70","./es-do.js":"7a70","./es-mx":"a656","./es-mx.js":"a656","./es-us":"3081","./es-us.js":"3081","./es.js":"5221e","./et":"45f3","./et.js":"45f3","./eu":"d1a1","./eu.js":"d1a1","./fa":"6773","./fa.js":"6773","./fi":"259f","./fi.js":"259f","./fil":"32e2","./fil.js":"32e2","./fo":"0e60","./fo.js":"0e60","./fr":"0600","./fr-ca":"6520","./fr-ca.js":"6520","./fr-ch":"2b9c","./fr-ch.js":"2b9c","./fr.js":"0600","./fy":"23bb","./fy.js":"23bb","./ga":"f9bb","./ga.js":"f9bb","./gd":"088a","./gd.js":"088a","./gl":"da3a","./gl.js":"da3a","./gom-deva":"e728","./gom-deva.js":"e728","./gom-latn":"b781","./gom-latn.js":"b781","./gu":"ab1a","./gu.js":"ab1a","./he":"2e9a","./he.js":"2e9a","./hi":"77d9","./hi.js":"77d9","./hr":"334c","./hr.js":"334c","./hu":"9f96","./hu.js":"9f96","./hy-am":"f2d9","./hy-am.js":"f2d9","./id":"7e6f","./id.js":"7e6f","./is":"770b","./is.js":"770b","./it":"aed5","./it-ch":"72a8","./it-ch.js":"72a8","./it.js":"aed5","./ja":"d546","./ja.js":"d546","./jv":"63b1","./jv.js":"63b1","./ka":"517d","./ka.js":"517d","./kk":"1320","./kk.js":"1320","./km":"b9f3","./km.js":"b9f3","./kn":"d861","./kn.js":"d861","./ko":"ce13","./ko.js":"ce13","./ku":"ecb8","./ku.js":"ecb8","./ky":"885a","./ky.js":"885a","./lb":"aa9d","./lb.js":"aa9d","./lo":"579e","./lo.js":"579e","./lt":"b8d7","./lt.js":"b8d7","./lv":"1bb4","./lv.js":"1bb4","./me":"673d","./me.js":"673d","./mi":"26ae","./mi.js":"26ae","./mk":"e174","./mk.js":"e174","./ml":"4a84","./ml.js":"4a84","./mn":"aadd","./mn.js":"aadd","./mr":"a2a5","./mr.js":"a2a5","./ms":"d18a","./ms-my":"66b0","./ms-my.js":"66b0","./ms.js":"d18a","./mt":"7fb0","./mt.js":"7fb0","./my":"74d1","./my.js":"74d1","./nb":"5fd8","./nb.js":"5fd8","./ne":"4e84","./ne.js":"4e84","./nl":"6f41","./nl-be":"6f69","./nl-be.js":"6f69","./nl.js":"6f41","./nn":"e69e","./nn.js":"e69e","./oc-lnc":"8d28","./oc-lnc.js":"8d28","./pa-in":"b000","./pa-in.js":"b000","./pl":"510c","./pl.js":"510c","./pt":"714b","./pt-br":"e9f3","./pt-br.js":"e9f3","./pt.js":"714b","./ro":"a876","./ro.js":"a876","./ru":"ba7c","./ru.js":"ba7c","./sd":"25dc","./sd.js":"25dc","./se":"d540","./se.js":"d540","./si":"1b0a","./si.js":"1b0a","./sk":"bfa3","./sk.js":"bfa3","./sl":"d112","./sl.js":"d112","./sq":"8f41","./sq.js":"8f41","./sr":"61ee","./sr-cyrl":"17eb","./sr-cyrl.js":"17eb","./sr.js":"61ee","./ss":"0d66","./ss.js":"0d66","./sv":"820c","./sv.js":"820c","./sw":"dbbf","./sw.js":"dbbf","./ta":"70b6","./ta.js":"70b6","./te":"67e8","./te.js":"67e8","./tet":"9609","./tet.js":"9609","./tg":"a19a","./tg.js":"a19a","./th":"459d","./th.js":"459d","./tk":"b2a1","./tk.js":"b2a1","./tl-ph":"341b","./tl-ph.js":"341b","./tlh":"b24c","./tlh.js":"b24c","./tr":"8f6c","./tr.js":"8f6c","./tzl":"fea0","./tzl.js":"fea0","./tzm":"9828","./tzm-latn":"a859","./tzm-latn.js":"a859","./tzm.js":"9828","./ug-cn":"0a67","./ug-cn.js":"0a67","./uk":"82cc","./uk.js":"82cc","./ur":"ad72","./ur.js":"ad72","./uz":"015a","./uz-latn":"35be","./uz-latn.js":"35be","./uz.js":"015a","./vi":"90db","./vi.js":"90db","./x-pseudo":"7eee","./x-pseudo.js":"7eee","./yo":"b9ec","./yo.js":"b9ec","./zh-cn":"10ef","./zh-cn.js":"10ef","./zh-hk":"c3a6","./zh-hk.js":"c3a6","./zh-mo":"9218","./zh-mo.js":"9218","./zh-tw":"0144","./zh-tw.js":"0144"};function c(e){var n=s(e);return a(n)}function s(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=s,e.exports=c,c.id="aaf1"},e34d:function(e,n,a){},e9f8:function(e,n,a){"use strict";var t=a("13b9"),c=a.n(t);c.a}});
//# sourceMappingURL=app.4be75c35.js.map
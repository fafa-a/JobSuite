(function(e){function a(a){for(var s,r,c=a[0],i=a[1],l=a[2],f=0,b=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&b.push(n[r][0]),n[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(a);while(b.length)b.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],s=!0,c=1;c<t.length;c++){var i=t[c];0!==n[i]&&(s=!1)}s&&(o.splice(a--,1),e=r(r.s=t[0]))}return e}var s={},n={app:0},o=[];function r(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=s,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)r.d(t,s,function(a){return e[a]}.bind(null,s));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/JobSuite/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var d=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var s=t("8a23"),n=t.n(s);n.a},"27f6":function(e,a,t){},4678:function(e,a,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var a=o(e);return t(a)}function o(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id="4678"},"4a93":function(e,a,t){},"4b36":function(e,a,t){"use strict";var s=t("4a93"),n=t.n(s);n.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-main",[t("headerH1",{attrs:{msg:"Job suite"}}),t("jobForm",{on:{offerAdded:function(a){e.snackbar=!0}}})],1)],1)},o=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v(e._s(e.msg))])])},c=[],i={name:"HeaderH1",props:{msg:String}},l=i,d=(t("4b36"),t("2877")),f=Object(d["a"])(l,r,c,!1,null,null,null),b=f.exports,u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-snackbar",{attrs:{timeout:4e3,top:"",color:"success"},model:{value:e.snackbar,callback:function(a){e.snackbar=a},expression:"snackbar"}},[t("span",[e._v("Awesome! You added a new job offer.")]),t("v-btn",{attrs:{text:"",color:"white"},on:{click:function(a){e.snackbar=!1}}},[e._v("Close")])],1),t("v-form",{model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{label:"Company Name",required:""},model:{value:e.formData.company,callback:function(a){e.$set(e.formData,"company",a)},expression:"formData.company"}})],1),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{label:"Job Name",required:""},model:{value:e.formData.job,callback:function(a){e.$set(e.formData,"job",a)},expression:"formData.job"}})],1),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{rules:e.URLJobRules,label:"Url Job Offer",required:""},model:{value:e.formData.URLJobOffer,callback:function(a){e.$set(e.formData,"URLJobOffer",a)},expression:"formData.URLJobOffer"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-checkbox",{attrs:{label:"CV",value:"CV"},model:{value:e.formData.pieceSend,callback:function(a){e.$set(e.formData,"pieceSend",a)},expression:"formData.pieceSend"}}),t("v-checkbox",{attrs:{label:"Cover Letter",value:"CL"},model:{value:e.formData.pieceSend,callback:function(a){e.$set(e.formData,"pieceSend",a)},expression:"formData.pieceSend"}})],1),t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-textarea",{attrs:{outlined:"",id:"txt",label:"Complements"},model:{value:e.formData.txt,callback:function(a){e.$set(e.formData,"txt",a)},expression:"formData.txt"}})],1),t("v-col",{staticClass:"d-flex justify-center align-center"},[t("v-btn",{attrs:{elevation:"7",fab:"",dark:"",color:"indigo",loading:e.loading},on:{click:e.added}},[t("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1)],1)],1)],1),t("JobCard",{attrs:{data:e.jobInfo,date:e.now}})],1)},j=[],m=t("c1df"),p=t.n(m),v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-row",[e._l(e.data,(function(a,s){return t("v-col",{key:s,attrs:{cols:"12",lg:"3",sm:"4"}},[t("v-card",{staticClass:"mb-6 mx-auto",attrs:{"min-width":"300"}},[t("v-card-text",[t("p",{staticClass:"display-1 text--primary text-capitalize"},[e._v(e._s(a.job))]),t("div",[t("span",{staticClass:"text--primary "},[e._v("Company :")]),t("span",{staticClass:"text-uppercase"},[e._v(e._s(a.company))])]),t("p",{staticClass:"text-right date"},[e._v(e._s(a.date))]),t("p",{staticClass:"mt-2"},[e._v(" Piece send : "),a.pieces.includes("CV")?t("span",{staticClass:"ml-6"},[t("i",{staticClass:"far fa-check-square"},[e._v(" CV")])]):e._e(),a.pieces.includes("CL")?t("span",{staticClass:"ml-6"},[t("i",{staticClass:"far fa-check-square"},[e._v(" CL")])]):e._e()]),t("div",[a.complements?t("p",{staticClass:"card-text complements"},[t("span",{staticClass:"text--primary"},[e._v("Complements :")]),t("br"),e._v(" "+e._s(a.complements)+" ")]):t("p",{staticClass:"card-text"},[e._v(" No complements ")])])]),t("v-divider",{staticClass:"mx-4"}),t("v-card-actions",[t("v-card-text",{staticClass:"d-flex justify-space-around"},[t("v-chip",{staticClass:"mr-1 job-link",attrs:{href:a.URL,target:"_blank"}},[t("v-icon",{attrs:{color:"green darken-1 accent-4",left:""}},[e._v("fas fa-external-link-alt")]),e._v(" Job page ")],1),t("v-chip",{staticClass:"mr-1 edit",on:{click:e.edited}},[t("v-icon",{attrs:{color:"orange darken-1",left:""}},[e._v("far fa-edit")]),e._v(" Edit ")],1),t("v-chip",{staticClass:"delete",on:{click:function(a){e.dialog=!0}}},[t("v-icon",{attrs:{color:"red darken-1",left:""}},[e._v("far fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)],1)})),t("dialog-comfirm",{attrs:{dialog:e.dialog},on:{confirmDeleted:function(a){return e.deleted(a)}}})],2)},h=[],k=(t("4160"),t("159b"),t("5530")),g=t("59ca"),x=t.n(g),y=(t("e71f"),{apiKey:"AIzaSyC_yKkHnfJh-Hbx3eupgeTU438pt-854jo",authDomain:"job-suite.firebaseapp.com",databaseURL:"https://job-suite.firebaseio.com",projectId:"job-suite",storageBucket:"job-suite.appspot.com",messagingSenderId:"280149980363",appId:"1:280149980363:web:473d754564062ff843174e",measurementId:"G-NJJCYTFT7K"});x.a.initializeApp(y);var C=x.a.firestore(),_=C,w=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-dialog",{attrs:{value:e.dialog,"max-width":"350"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[e._v("Confirmation")]),t("v-card-text",[e._v(" Are you sure you want delete this content."),t("br"),e._v(" This action cannot be undone. ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(a){e.dialog=!1}}},[e._v(" Cancel ")]),t("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:e.confirmDeleted}},[e._v(" Confirm ")])],1)],1)],1)},D=[],V={name:"DialogConfirm",props:{dialog:{type:Boolean,default:!1}},methods:{confirmDeleted:function(){this.$emit("confirmDeleted")}}},O=V,z=t("6544"),J=t.n(z),S=t("8336"),L=t("b0af"),R=t("99d9"),U=t("169a"),$=t("2fa4"),T=Object(d["a"])(O,w,D,!1,null,null,null),E=T.exports;J()(T,{VBtn:S["a"],VCard:L["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VDialog:U["a"],VSpacer:$["a"]});var I={name:"JobCard",data:function(){return{dialog:!1}},props:["data","date","jobId"],components:{"dialog-comfirm":E},methods:{deleted:function(e){var a=e.id;console.log(a)},edited:function(){console.log("not ok")}},created:function(){var e=this;_.collection("job-offer").onSnapshot((function(a){var t=a.docChanges();t.forEach((function(a){"added"===a.type&&e.data.push(Object(k["a"])(Object(k["a"])({},a.doc.data()),{},{id:a.doc.id}))}))}))}},A=I,q=(t("761c"),t("cc20")),M=t("62ad"),P=t("ce7e"),F=t("132d"),H=t("0fd9"),N=Object(d["a"])(A,v,h,!1,null,"5038f4ea",null),Y=N.exports;J()(N,{VCard:L["a"],VCardActions:R["a"],VCardText:R["b"],VChip:q["a"],VCol:M["a"],VDivider:P["a"],VIcon:F["a"],VRow:H["a"]});var B={name:"JobForm",data:function(){return{valid:!1,loading:!1,snackbar:!1,formData:{company:"",job:"",URLJobOffer:"http://www.fixErrorURL.com",pieceSend:[],txt:""},jobInfo:[],URLJobRules:[function(e){return!!e||"URL is required"},function(e){return/https?:[0-9]*\/\/[\w!?/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/.test(e)||"URL must be valid"}]}},methods:{added:function(){var e=this;if(this.valid){this.loading=!0;var a={company:this.formData.company,job:this.formData.job,URL:this.formData.URLJobOffer,pieces:this.formData.pieceSend,complements:this.formData.txt,date:this.now};_.collection("job-offer").add(a).then((function(){e.loading=!1,e.snackbar=!0})),this.jobInfo.push(this.formData),this.formData={company:"",job:"",URLJobOffer:"http://www.fixErrorURL.com",pieceSend:[],txt:""}}}},computed:{now:function(){return p()().format("dddd DD-MM-YYYY")}},components:{JobCard:Y}},K=B,G=(t("9e10"),t("ac7c")),Q=t("4bd4"),W=t("2db4"),X=t("8654"),Z=t("a844"),ee=Object(d["a"])(K,u,j,!1,null,"4186c1f0",null),ae=ee.exports;J()(ee,{VBtn:S["a"],VCheckbox:G["a"],VCol:M["a"],VForm:Q["a"],VIcon:F["a"],VRow:H["a"],VSnackbar:W["a"],VTextField:X["a"],VTextarea:Z["a"]});var te={name:"App",components:{HeaderH1:b,JobForm:ae},data:function(){return{}}},se=te,ne=(t("034f"),t("7496")),oe=t("f6c4"),re=Object(d["a"])(se,n,o,!1,null,null,null),ce=re.exports;J()(re,{VApp:ne["a"],VMain:oe["a"]});var ie=t("f309");s["a"].use(ie["a"]);var le=new ie["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:le,render:function(e){return e(ce)}}).$mount("#app")},"666a":function(e,a,t){},"761c":function(e,a,t){"use strict";var s=t("27f6"),n=t.n(s);n.a},"8a23":function(e,a,t){},"9e10":function(e,a,t){"use strict";var s=t("666a"),n=t.n(s);n.a}});
//# sourceMappingURL=app.e7c6d2b8.js.map
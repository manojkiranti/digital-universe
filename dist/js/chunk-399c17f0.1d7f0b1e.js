(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399c17f0"],{"3a99":function(t,a,s){t.exports=s.p+"img/NIC-ASIA-BANK-BANNER.a1f7deb3.png"},a012:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"digital-universe-home"},[s("Header"),s("div",{staticClass:"home-body-main"},[s("router-view")],1),s("FooterNav")],1)},i=[],e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{attrs:{id:"home-header"}},[s("div",{staticClass:"menu main-header"},[s("div",{staticClass:"container container-sm menu__wrapper"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-2"},[s("div",{staticClass:"menu__item"},[s("div",{staticClass:"d-none d-t-block"},[s("button",{staticClass:"menu__mobile-button",attrs:{type:"button"},on:{click:function(a){t.navOpen=!t.navOpen}}},[s("span",[s("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:["fal","bars"]}})],1)])])])]),t._m(0),s("div",{staticClass:"col-2"},[s("div",{staticClass:"user-login"},[s("span",{staticClass:"user-icon"},[s("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:["fal","user"]}})],1)])])])])]),s("transition",{attrs:{name:"translateX"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.navOpen,expression:"navOpen"}],staticClass:"main-menu-item"},[s("button",{staticClass:"sidemenu__btn",class:{active:t.navOpen},on:{click:function(a){t.navOpen=!t.navOpen}}},[s("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:["fal","times"]}})],1),s("div",{staticClass:"menu__item d-t-none"},[s("nav",{staticClass:"nav-mobile"},[s("ul",[s("li",{on:{click:function(a){t.navOpen=!1}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","home"]}}),s("span",{staticClass:"nav-text"},[t._v("Home")])],1)])],1),s("li",{on:{click:function(a){t.navOpen=!1}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/offers"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","badge-percent"]}}),s("span",{staticClass:"nav-text"},[t._v("Offers")])],1)])],1),s("li",{on:{click:function(a){t.navOpen=!1}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/branches"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","university"]}}),s("span",{staticClass:"nav-text"},[t._v("Branches")])],1)])],1),s("li",{on:{click:function(a){t.navOpen=!1}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/support"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","cog"]}}),s("span",{staticClass:"nav-text"},[t._v("Support")])],1)])],1)])])])])])],1)},o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"col-8"},[n("div",{staticClass:"menu__logo menu__item"},[n("a",{attrs:{href:"/"}},[n("span",{staticClass:"logo-wrap"},[n("span",{staticClass:"logo-text"},[n("span",{staticClass:"logo-tt"},[t._v(" Digital Universe")])]),n("span",{staticClass:"logo-img"},[n("span",{staticClass:"logo-sub-text"},[t._v("by")]),n("img",{staticClass:"menu__logo-img",attrs:{src:s("3a99"),alt:""}})])])])])])}],c={name:"HomeHeader",props:{activeClass:{type:Object,default:function(){}}},data:function(){return{navOpen:!1}},mounted:function(){},methods:{toggleRightSidebar:function(){document.body.classList.toggle("right-bar-enabled")},goTo:function(t){this.$emit("scrollTo",t)}}},l=c,r=s("2877"),u=Object(r["a"])(l,e,o,!1,null,null,null),v=u.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bottom-nav"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"nav nav-pills nav-justified"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","home"]}}),s("span",{staticClass:"nav-text"},[t._v("Home")])],1)])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/offers"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","badge-percent"]}}),s("span",{staticClass:"nav-text"},[t._v("Offers")])],1)])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/branches"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","university"]}}),s("span",{staticClass:"nav-text"},[t._v("Branches")])],1)])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/support"}},[s("span",[s("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:["fal","cog"]}}),s("span",{staticClass:"nav-text"},[t._v("Support")])],1)])],1)])])])},p=[],f={name:"FooterNav"},C=f,d=Object(r["a"])(C,m,p,!1,null,null,null),h=d.exports,_=s("cc2f"),b=s.n(_),g={name:"Home",mixins:[b.a],components:{Header:v,FooterNav:h},data:function(){return{headerTitle:"NIC ASIA ONLINE SERVICES"}},mounted:function(){},created:function(){},destroyed:function(){},methods:{}},k=g,w=Object(r["a"])(k,n,i,!1,null,null,null);a["default"]=w.exports},cc2f:function(t,a){t.exports={created:function(){this.restrictDesktop()},methods:{restrictDesktop:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(alert("Please use your mobile phone browser"),this.$router.push("/404"))}}}}}]);
//# sourceMappingURL=chunk-399c17f0.1d7f0b1e.js.map
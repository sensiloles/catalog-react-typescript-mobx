!function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={0:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([105,1]),r()}({101:function(e,t,r){var a=r(102);"string"==typeof a&&(a=[[e.i,a,""]]);var n={insert:"head",singleton:!1};r(104)(a,n);a.locals&&(e.exports=a.locals)},102:function(e,t,r){(e.exports=r(103)(!0)).push([e.i,"input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #FFFFFF inset;box-shadow:0 0 0 30px #FFFFFF inset}\n","",{version:3,sources:["App.scss"],names:[],mappings:"AAAA,uBAAuB,2CAAkC,CAAlC,mCAAmC",file:"App.scss",sourcesContent:["input:-webkit-autofill{box-shadow:0 0 0 30px #FFFFFF inset}\n"]}])},105:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(9),i=r.n(o),l=r(11),c=r(57),s=r.n(c),u=r(68),d=r.n(u),p=r(31),m=r.n(p),g=r(45),f=r.n(g),y=r(46),b=r.n(y),h=r(16),v=r.n(h),E=(r(65),r(10)),w=r(53),C=r.n(w),O=r(47),x=r.n(O);function j(e){var t=function(e,t){if("object"!==C()(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==C()(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===C()(t)?t:String(t)}var P,k,I,S,N,F,L,D,A=[{login:"admin",password:"123test"},{login:"developer",password:"456test"}],T=function(e){var t=e.login,r=e.password;return new Promise((function(e,a){var n;A.forEach((function(e){if(e.login===t&&e.password===r){var a="password",o=(e[a],x()(e,[a].map(j)));n=o}})),n?setTimeout((function(){return e(n)}),3e3):setTimeout((function(){return a(new Error("Incorrect login or password"))}),3e3)}))},z=(P=function(){function e(){f()(this,e),m()(this,"login",k,this),m()(this,"error",I,this),m()(this,"dataIsLoading",S,this),m()(this,"isLogged",N,this)}var t;return b()(e,[{key:"authUser",value:(t=d()(s.a.mark((function e(t,r,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.dataIsLoading=!0,e.prev=1,e.next=4,T({login:t,password:r});case 4:n=e.sent,this.login=n.login,this.dataIsLoading=!1,this.isLogged=!0,this.error="",a(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),this.error=e.t0.message,this.dataIsLoading=!1,a();case 17:case"end":return e.stop()}}),e,this,[[1,12]])}))),function(e,r,a){return t.apply(this,arguments)})}]),e}(),k=v()(P.prototype,"login",[E.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),I=v()(P.prototype,"error",[E.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),S=v()(P.prototype,"dataIsLoading",[E.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),N=v()(P.prototype,"isLogged",[E.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v()(P.prototype,"authUser",[E.b],Object.getOwnPropertyDescriptor(P.prototype,"authUser"),P.prototype),P);var W=(F=function(){function e(t){var r,a=t.categories,n=t.products;f()(this,e),m()(this,"categories",L,this),m()(this,"products",D,this),this._nextCategoryId=void 0,this.categories=a,this.products=n,this._nextCategoryId=(r=Object.keys(this.categories).map((function(e){return Number(e)})),Math.max.apply(null,r)+1),this.bindMethods()}return b()(e,[{key:"bindMethods",value:function(){this.removeCategory=this.removeCategory.bind(this),this.editCategory=this.editCategory.bind(this),this.addCategory=this.addCategory.bind(this),this.addProduct=this.addProduct.bind(this),this.removeProduct=this.removeProduct.bind(this),this.editProduct=this.editProduct.bind(this)}},{key:"removeCategory",value:function(e){delete this.categories[e]}},{key:"editCategory",value:function(e,t){var r=this;Object.keys(t).forEach((function(a){r.categories[e][a]=t[a]}))}},{key:"addCategory",value:function(e){var t={};Object.keys(e).forEach((function(r){t[r]=e[r]})),this.categories[this._nextCategoryId]=t,this._nextCategoryId+=1}},{key:"addProduct",value:function(e){var t=e.name,r=e.categoryId,a=this.products.length+1;this.products.push({id:a,name:t,categoryId:r})}},{key:"removeProduct",value:function(e){var t=this.products.filter((function(t){return t.id!==e}));this.products=t}},{key:"editProduct",value:function(e){var t=e.id,r=e.name,a=e.categoryId;this.products=this.products.map((function(e){return e.id===t?{id:t,name:r,categoryId:a}:e}))}}]),e}(),L=v()(F.prototype,"categories",[E.f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=v()(F.prototype,"products",[E.f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v()(F.prototype,"removeCategory",[E.b],Object.getOwnPropertyDescriptor(F.prototype,"removeCategory"),F.prototype),v()(F.prototype,"editCategory",[E.b],Object.getOwnPropertyDescriptor(F.prototype,"editCategory"),F.prototype),v()(F.prototype,"addCategory",[E.b],Object.getOwnPropertyDescriptor(F.prototype,"addCategory"),F.prototype),v()(F.prototype,"addProduct",[E.b],Object.getOwnPropertyDescriptor(F.prototype,"addProduct"),F.prototype),v()(F.prototype,"removeProduct",[E.b],Object.getOwnPropertyDescriptor(F.prototype,"removeProduct"),F.prototype),v()(F.prototype,"editProduct",[E.b],Object.getOwnPropertyDescriptor(F.prototype,"editProduct"),F.prototype),F);var _,B=n.a.createContext({userStore:new z,catalogStore:(_={categories:{1:{name:"test"},2:{name:"test2"},3:{name:"test3"}},products:[{id:1,name:"test product 1",categoryId:2},{id:2,name:"test product 2",categoryId:2},{id:3,name:"test product 4",categoryId:3}]},new W(_))}),R=function(){return n.a.useContext(B)},M=r(33),V=r.n(M),U=r(153),G=r(15),H=r.n(G),J=r(107),q=r(154),K=r(155),Q=r(156),X=r(38),Y=r(157),Z=r(148),$=r(152),ee=r(71),te=r.n(ee),re=r(72),ae=r.n(re),ne=r(51),oe=r.n(ne),ie=r(164),le=r(140),ce=r(141),se=r(142),ue=r(143),de=r(144),pe=Object(l.a)((function(e){var t=e.removableProduct,r=e.setRemovableProduct,a=R().catalogStore.removeProduct,o=function(){r(null)};return n.a.createElement(ie.a,{open:Boolean(t),onClose:o,"aria-labelledby":"form-dialog-title"},n.a.createElement(le.a,{id:"form-dialog-title"},"Delete product"),n.a.createElement(ce.a,null,n.a.createElement(se.a,null,"Are you sure you want to delete this product?")),n.a.createElement(ue.a,null,n.a.createElement(de.a,{onClick:o,color:"primary"},"Close"),n.a.createElement(de.a,{onClick:function(){t&&a(t),o()},color:"secondary"},"Delete")))})),me=r(150),ge=r(165),fe=r(163),ye=r(149),be=Object(l.a)((function(e){var t=e.className,r=e.categories,a=e.categoryId,o=e.onChangeCategory,i=Object.keys(r);return n.a.createElement(fe.a,{value:r[a]?a:0,onChange:o,className:t,variant:"outlined",margin:"none",fullWidth:!0,style:{maxWidth:"40%"}},n.a.createElement(ye.a,{value:0},"Select category"),i.map((function(e){return n.a.createElement(ye.a,{key:e,value:e},r[Number(e)].name)})))})),he=Object(l.a)((function(e){var t=e.categoryId,r=e.selectCategoryId,o=R().catalogStore,i=o.categories,l=o.removeCategory,c=o.editCategory,s=o.addCategory,u=Object(a.useState)(!1),d=H()(u,2),p=d[0],m=d[1],g=i[t],f=g?g.name:"",y=Object(a.useState)(f),b=H()(y,2),h=b[0],v=b[1];Object(a.useEffect)((function(){v(f)}),[f]);var E=function(){m(!1),v(f)},w=n.a.createElement(ie.a,{open:p,onClose:E,"aria-labelledby":"form-dialog-edit-category"},n.a.createElement(le.a,{id:"form-dialog-edit-category"},"Edit category"),n.a.createElement(ce.a,null,n.a.createElement(se.a,null,"Enter a new name or delete this category via buttons below"),n.a.createElement(ge.a,{autoFocus:!0,margin:"dense",id:"name",label:"New category name",type:"text",fullWidth:!0,value:h,onChange:function(e){v(e.currentTarget.value)}})),n.a.createElement(ue.a,null,n.a.createElement(de.a,{onClick:function(){l(t),m(!1),r(0)},color:"secondary"},"Delete"),n.a.createElement(de.a,{onClick:function(){c(t,{name:h}),m(!1)},color:"primary"},"Save name"))),C=n.a.createElement(ie.a,{open:p,onClose:E,"aria-labelledby":"form-dialog-add-category"},n.a.createElement(le.a,{id:"form-dialog-add-category"},"Add new category"),n.a.createElement(ce.a,null,n.a.createElement(se.a,null,"Enter a name for the new category"),n.a.createElement(ge.a,{autoFocus:!0,margin:"dense",id:"name",label:"Category name",type:"text",fullWidth:!0,value:h,onChange:function(e){v(e.currentTarget.value)}})),n.a.createElement(ue.a,null,n.a.createElement(de.a,{onClick:E,color:"secondary"},"Close"),n.a.createElement(de.a,{onClick:function(){h&&(s({name:h}),m(!1),v(""))},color:"primary",disabled:!h},"Add category")));return n.a.createElement("div",null,n.a.createElement($.a,{color:"primary","aria-label":"Edit category",size:"small",onClick:function(){t||v(""),m(!0)}},n.a.createElement(oe.a,null)),g?w:C)})),ve=Object(U.a)((function(){return{productAddForm:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center",minWidth:"25%"},productProps:{flexDirection:"row",alignItems:"center",width:"100%"},inputSelectCategory:{marginLeft:"2px"},buttonSubmit:{marginTop:"5px",width:"100%"}}})),Ee=Object(l.a)((function(e){var t=e.action,r=e.productId,o=e.submitForm,i=e.handleClickCloseDialog,l=R().catalogStore,c=l.categories,s=l.products,u=ve(),d=r?s[r-1].categoryId:0,p=r?s[r-1].name:"",m=Object(a.useState)(p||""),g=H()(m,2),f=g[0],y=g[1],b=Object(a.useState)(d||0),h=H()(b,2),v=h[0],E=h[1],w=Object(a.useState)(!1),C=H()(w,2),O=C[0],x=C[1];return n.a.createElement("div",{className:u.productAddForm},n.a.createElement(me.a,{className:u.productProps},n.a.createElement(ge.a,{type:"text",variant:"outlined",placeholder:"Enter product name",onChange:function(e){y(e.currentTarget.value),e.currentTarget.value?x(!1):x(!0)},value:f,hiddenLabel:!0,fullWidth:!0,error:O}),n.a.createElement(be,{className:u.inputSelectCategory,categories:c,categoryId:v,onChangeCategory:function(e){E(Number(e.target.value))}}),n.a.createElement(he,{categoryId:v,selectCategoryId:E})),n.a.createElement(de.a,{type:"button",variant:"outlined",color:"primary",onClick:function(){f&&v?(o(r?{id:r,name:f,categoryId:v}:{name:f,categoryId:v}),i&&i(),y("")):x(!0)},className:u.buttonSubmit,disabled:O||!v},t))})),we=Object(U.a)((function(){return{dialogActions:{justifyContent:"center",marginBottom:"5px"}}})),Ce=Object(l.a)((function(e){var t=e.editableProduct,r=e.setEditableProduct,a=R().catalogStore.editProduct,o=we(),i=function(){r(null)};return n.a.createElement(ie.a,{open:Boolean(t),onClose:i,"aria-labelledby":"form-dialog-title"},n.a.createElement(le.a,{id:"form-dialog-title"},"Edit product"),n.a.createElement(ce.a,null,n.a.createElement(se.a,null,"Change data of this product and click to save button. Or close this window")),n.a.createElement(ue.a,{className:o.dialogActions},n.a.createElement(Ee,{action:"edit",productId:t,submitForm:a,handleClickCloseDialog:i})))})),Oe=Object(U.a)((function(e){return{productList:V()({flexGrow:1,border:"1px solid gray",marginLeft:"20px",borderRadius:e.shape.borderRadius},e.breakpoints.down("sm"),{marginTop:"10px",marginLeft:"0px"}),productItem:{maxWidth:"100%"},productText:{overflowWrap:"break-word",paddingRight:"80px"}}})),xe=Object(l.a)((function(){var e=R().catalogStore,t=e.categories,r=e.products,o=Oe(),i=Object(a.useState)(null),l=H()(i,2),c=l[0],s=l[1],u=Object(a.useState)(null),d=H()(u,2),p=d[0],m=d[1],g=r.map((function(e){return n.a.createElement(J.a,{key:e.id,className:o.productItem},n.a.createElement(q.a,null,n.a.createElement(K.a,null,n.a.createElement(te.a,null))),n.a.createElement(Q.a,{className:o.productText,primary:n.a.createElement(X.a,null,e.name),secondary:t[e.categoryId]?t[e.categoryId].name:"category not defined"}),n.a.createElement(Y.a,null,n.a.createElement($.a,{onClick:function(){e.id&&m(e.id)}},n.a.createElement(oe.a,null)),n.a.createElement($.a,{onClick:function(){e.id&&s(e.id)}},n.a.createElement(ae.a,null))))}));return n.a.createElement("div",{className:o.productList},r.length?n.a.createElement(n.a.Fragment,null,n.a.createElement(Z.a,null,g),n.a.createElement(pe,{removableProduct:c,setRemovableProduct:s}),n.a.createElement(Ce,{editableProduct:p,setEditableProduct:m})):n.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},"No products"))})),je=Object(U.a)((function(e){var t;return{catalog:(t={display:"flex",margin:"20px 0px"},V()(t,e.breakpoints.down("sm"),{flexDirection:"column",margin:"10px 0px"}),V()(t,e.breakpoints.up("lg"),{margin:"20px 100px"}),t)}})),Pe=Object(l.a)((function(){var e=R().catalogStore,t=e.categories,r=e.products,a=e.addProduct,o=je();return n.a.createElement("div",{className:o.catalog},n.a.createElement(Ee,{action:"add",submitForm:a}),n.a.createElement(xe,{categories:t,products:r}))})),ke=r(162),Ie=r(52),Se=r.n(Ie),Ne=r(147),Fe=r(151),Le=r(167),De=r(161),Ae=r(56),Te=r.n(Ae),ze=r(3),We=r(160),_e=r(158),Be=r(159),Re=r(76),Me=r.n(Re),Ve=r(73),Ue=r.n(Ve),Ge=r(74),He=r.n(Ge),Je=r(75),qe=r.n(Je),Ke={success:Ue.a,warning:He.a,error:qe.a,info:Se.a},Qe=Object(U.a)((function(e){return{success:{backgroundColor:_e.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:Be.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}})),Xe=function(e){var t=Qe(),r=e.className,a=e.message,o=e.onClose,i=e.variant,l=x()(e,["className","message","onClose","variant"]),c=Ke[i];return n.a.createElement(We.a,Te()({className:Object(ze.a)(t[i],r),"aria-describedby":"client-snackbar",message:[n.a.createElement("span",{id:"client-snackbar",className:t.message,key:"message-".concat(t.message)},n.a.createElement(c,{className:Object(ze.a)(t.icon,t.iconVariant)}),a)],action:[n.a.createElement($.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},n.a.createElement(Me.a,{className:t.icon}))]},l))};function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ye(r,!0).forEach((function(t){V()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $e=Object(U.a)((function(){return{loginForm:{display:"flex",flexDirection:"column",padding:"10px",border:"1px solid #4f4848",borderRadius:"4px"},textField:{marginTop:"10px"},loginButton:{marginTop:"7px",minHeight:"36px"},spiner:{color:"#3f51b5"}}})),et={login:{value:"",error:!1},password:{value:"",error:!1}};function tt(e,t){switch(t.type){case"setLoginError":return Ze({},e,{login:Ze({},e.login,{error:!0})});case"setPasswordError":return Ze({},e,{password:Ze({},e.password,{error:!0})});case"setLoginValue":return Ze({},e,{login:{value:t.value||"",error:!1}});case"setPasswordValue":return Ze({},e,{password:{value:t.value||"",error:!1}});default:return Ze({},e)}}var rt=Object(l.a)((function(){var e=R().userStore,t=$e(),r=Object(a.useReducer)(tt,et),o=H()(r,2),i=o[0],l=o[1],c=Object(a.useState)(!1),s=H()(c,2),u=s[0],d=s[1],p=function(e,t){"clickaway"!==t&&d(!1)};return n.a.createElement("form",{className:t.loginForm,onSubmit:function(t){t.preventDefault(),i.login.value||i.password.value?i.login.value?i.password.value?e.authUser(i.login.value.toLowerCase(),i.password.value,(function(){e.error.length&&d(!0)})):l({type:"setPasswordError"}):l({type:"setLoginError"}):(l({type:"setLoginError"}),l({type:"setPasswordError"}))}},n.a.createElement(ge.a,{id:"login",className:t.textField,type:"text",autoComplete:"username",value:i.login.value,onChange:function(e){l({type:"setLoginValue",value:e.currentTarget.value}),e.currentTarget.value.length||l({type:"setLoginError"})},variant:"outlined",label:"login",error:i.login.error,disabled:e.dataIsLoading}),i.login.error?n.a.createElement(Fe.a,{id:"my-helper-text",error:i.login.error},"Login field cannot be empty"):null,n.a.createElement(ge.a,{id:"password",className:t.textField,type:"password",autoComplete:"current-password",value:i.password.value,onChange:function(e){l({type:"setPasswordValue",value:e.currentTarget.value}),e.currentTarget.value.length||l({type:"setPasswordError"})},variant:"outlined",label:"password",error:i.password.error,disabled:e.dataIsLoading}),i.password.error?n.a.createElement(Fe.a,{id:"my-helper-text",error:i.password.error},"Password field cannot be empty"):null,n.a.createElement(de.a,{type:"submit",variant:"contained",color:"primary",className:t.loginButton,disabled:e.dataIsLoading||i.login.error||i.password.error},e.dataIsLoading?n.a.createElement(De.a,{color:"secondary",size:20,className:t.spiner}):"LOGIN"),n.a.createElement(Le.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:u&&!e.dataIsLoading,autoHideDuration:8e3,onClose:p},n.a.createElement(Xe,{onClose:p,variant:"error",message:"".concat(e.error,". Please re-enter the form")})))})),at=Object(U.a)((function(){return{loginContainer:{display:"flex",justifyContent:"center",flexDirection:"column",height:"90vh"},infoIcon:{color:"orange",alignSelf:"center",marginTop:"10px",cursor:"pointer"},testData:{padding:"5px"}}})),nt=Object(l.a)((function(){var e=Object(a.useState)(null),t=H()(e,2),r=t[0],o=t[1],i=at();return n.a.createElement(ke.a,{maxWidth:"sm",className:i.loginContainer},n.a.createElement(rt,null),n.a.createElement(Se.a,{className:i.infoIcon,onClick:function(e){o(e.currentTarget)}}),n.a.createElement(Ne.a,{open:Boolean(r),onClose:function(e,t){"backdropClick"===t&&o(null)},anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},n.a.createElement(X.a,{className:i.testData},n.a.createElement("b",null,"User data for testing app:"),n.a.createElement("br",null),n.a.createElement("br",null),"Login: admin",n.a.createElement("br",null),"Password: 123test",n.a.createElement("br",null),n.a.createElement("br",null),"Login: developer",n.a.createElement("br",null),"Password: 456test")))})),ot=(r(101),Object(l.a)((function(){var e=R().userStore;return n.a.createElement("div",{className:"app"},e.isLogged?n.a.createElement(Pe,null):n.a.createElement(nt,null))})));i.a.render(n.a.createElement(ot,null),document.getElementById("root"))}});
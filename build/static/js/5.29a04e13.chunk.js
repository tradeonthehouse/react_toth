/*! For license information please see 5.29a04e13.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{336:function(t,e,n){"use strict";var r=n(528),i=Object(r.a)("div")((function(t){return{backgroundColor:t.theme.palette.primary.light,minHeight:"100vh"}}));e.a=i},337:function(t,e,n){"use strict";var r=n(12),i=n(58),a=n(3),o=(n(0),n(297)),c=n(92),s=n(1),l=["children"],u=Object(o.a)((function(t){var e;return{card:(e={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},Object(a.a)(e,t.breakpoints.down("sm"),{margin:"20px"}),Object(a.a)(e,t.breakpoints.down("lg"),{maxWidth:"400px"}),e),content:Object(a.a)({padding:t.spacing(5)+" !important"},t.breakpoints.down("lg"),{padding:t.spacing(3)+" !important"})}}));e.a=function(t){var e=t.children,n=Object(i.a)(t,l),a=u();return Object(s.jsx)(c.a,Object(r.a)(Object(r.a)({className:a.card,contentClass:a.content},n),{},{children:e}))}},339:function(t,e,n){"use strict";var r=n(0);e.a=function(){var t=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){t.current=!1}}),[]),t}},340:function(t,e,n){"use strict";n(0);var r=n(287),i=n(71),a=n(314),o=n(1);e.a=function(){return Object(o.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(o.jsx)(i.a,{variant:"subtitle2",component:a.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(o.jsx)(i.a,{variant:"subtitle2",component:a.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},341:function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function c(t){r(o,i,a,c,s,"next",t)}function s(t){r(o,i,a,c,s,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return i}))},370:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var r=n(135),i=n.n(r),a=function(t){return t<2?{label:"Poor",color:i.a.errorMain}:t<3?{label:"Weak",color:i.a.warningDark}:t<4?{label:"Normal",color:i.a.orangeMain}:t<5?{label:"Good",color:i.a.successMain}:t<6?{label:"Strong",color:i.a.successDark}:void 0},o=function(t){var e=0;return t.length>5&&e++,t.length>7&&e++,function(t){return new RegExp(/[0-9]/).test(t)}(t)&&e++,function(t){return new RegExp(/[!#@$%^&*)(+=._-]/).test(t)}(t)&&e++,function(t){return new RegExp(/[a-z]/).test(t)&&new RegExp(/[A-Z]/).test(t)}(t)&&e++,e}},371:function(t,e,n){"use strict";e.a=n.p+"static/media/social-google.9887eb8e.svg"},536:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(27),o=n(20),c=n(292),s=n(304),l=n(287),u=n(71),d=n(166),h=n(336),f=n(337),j=n(133),p=n(341),b=n(13),m=n(346),g=n(12),x=n(3),v=n(21),O=n(297),y=n(313),w=n(310),E=n(298),k=n(320),L=n(303),S=n(306),C=n(321),N=n(312),I=n(326),_=n(327),P=n(530),R=n(357),G=n(356),W=n(339),z=n(371),B=n(73),D=n(370),F=n(354),T=n.n(F),A=n(355),M=n.n(A),q=n(1);function H(){H=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(C){s=function(t,e,n){return t[e]=n}}function l(t,e,n,i){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),c=new k(i||[]);return r(o,"_invoke",{value:O(t,n,c)}),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var d={};function h(){}function f(){}function j(){}var p={};s(p,a,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(L([])));m&&m!==e&&n.call(m,a)&&(p=m);var g=j.prototype=h.prototype=Object.create(p);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function v(t,e){function i(r,a,o,c){var s=u(t[r],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,o,c)}),(function(t){i("throw",t,o,c)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return i("throw",t,o,c)}))}c(s.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function O(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return S()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var c=y(o,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function y(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=u(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=j,r(g,"constructor",{value:j,configurable:!0}),r(j,"constructor",{value:f,configurable:!0}),f.displayName=s(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(v.prototype),s(v.prototype,o,(function(){return this})),t.AsyncIterator=v,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new v(l(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(g),s(g,c,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var V=Object(O.a)((function(t){return{redButton:Object(x.a)({fontSize:"1rem",fontWeight:500,backgroundColor:t.palette.grey[50],border:"1px solid",borderColor:t.palette.grey[100],color:t.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:t.palette.primary.light}},t.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:t.spacing(2),padding:"5px 56px",borderColor:t.palette.grey[100]+" !important",color:t.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(x.a)({marginRight:"16px"},t.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(g.a)({},t.typography.customInput)}})),J=function(t){var e=Object.assign({},(Object(m.a)(t),t)),n=V(),o=Object(W.a)(),l=Object(c.a)((function(t){return t.breakpoints.down("sm")})),h=Object(v.c)((function(t){return t.customization})),f=i.a.useState(!1),j=Object(b.a)(f,2),x=j[0],O=j[1],F=i.a.useState(!0),A=Object(b.a)(F,2),J=A[0],Y=A[1],U=i.a.useState(0),Z=Object(b.a)(U,2),$=Z[0],K=Z[1],Q=i.a.useState(""),X=Object(b.a)(Q,2),tt=X[0],et=X[1],nt=function(){var t=Object(p.a)(H().mark((function t(){return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.error("Register");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),rt=function(){O(!x)},it=function(t){t.preventDefault()},at=function(t){var e=Object(D.b)(t);K(e),et(Object(D.a)(e))};return Object(r.useEffect)((function(){at("123456")}),[]),Object(q.jsxs)(i.a.Fragment,{children:[Object(q.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(q.jsx)(s.a,{item:!0,xs:12,children:Object(q.jsx)(B.a,{children:Object(q.jsxs)(y.a,{disableElevation:!0,fullWidth:!0,className:n.redButton,onClick:nt,size:"large",variant:"contained",children:[Object(q.jsx)("img",{src:z.a,alt:"google",width:"20px",sx:{mr:{xs:1,sm:2}},className:n.loginIcon})," Sign up with Google"]})})}),Object(q.jsx)(s.a,{item:!0,xs:12,children:Object(q.jsxs)(w.a,{sx:{alignItems:"center",display:"flex"},children:[Object(q.jsx)(d.a,{className:n.signDivider,orientation:"horizontal"}),Object(q.jsx)(B.a,{children:Object(q.jsx)(y.a,{variant:"outlined",className:n.signText,sx:{borderRadius:h.borderRadius+"px"},disableRipple:!0,disabled:!0,children:"OR"})}),Object(q.jsx)(d.a,{className:n.signDivider,orientation:"horizontal"})]})}),Object(q.jsx)(s.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(q.jsx)(w.a,{sx:{mb:2},children:Object(q.jsx)(u.a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),Object(q.jsx)(G.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:R.a().shape({email:R.b().email("Must be a valid email").max(255).required("Email is required"),password:R.b().max(255).required("Password is required")}),onSubmit:function(){var t=Object(p.a)(H().mark((function t(e,n){var r,i,a;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.setErrors,i=n.setStatus,a=n.setSubmitting;try{o.current&&(i({success:!0}),a(!1))}catch(e){console.error(e),o.current&&(i({success:!1}),r({submit:e.message}),a(!1))}case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),children:function(t){var r=t.errors,i=t.handleBlur,o=t.handleChange,c=t.handleSubmit,d=t.isSubmitting,h=t.touched,f=t.values;return Object(q.jsxs)("form",Object(g.a)(Object(g.a)({noValidate:!0,onSubmit:c},e),{},{children:[Object(q.jsxs)(s.a,{container:!0,spacing:l?0:2,children:[Object(q.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(E.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"Joseph",className:n.loginInput})}),Object(q.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(E.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"Doe",className:n.loginInput})})]}),Object(q.jsxs)(k.a,{fullWidth:!0,error:Boolean(h.email&&r.email),className:n.loginInput,children:[Object(q.jsx)(L.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(q.jsx)(S.a,{id:"outlined-adornment-email-register",type:"email",value:f.email,name:"email",onBlur:i,onChange:o,inputProps:{classes:{notchedOutline:n.notchedOutline}}}),h.email&&r.email&&Object(q.jsxs)(C.a,{error:!0,id:"standard-weight-helper-text--register",children:[" ",r.email," "]})]}),Object(q.jsxs)(k.a,{fullWidth:!0,error:Boolean(h.password&&r.password),className:n.loginInput,children:[Object(q.jsx)(L.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(q.jsx)(S.a,{id:"outlined-adornment-password-register",type:x?"text":"password",value:f.password,name:"password",label:"Password",onBlur:i,onChange:function(t){o(t),at(t.target.value)},endAdornment:Object(q.jsx)(N.a,{position:"end",children:Object(q.jsx)(I.a,{"aria-label":"toggle password visibility",onClick:rt,onMouseDown:it,edge:"end",children:x?Object(q.jsx)(T.a,{}):Object(q.jsx)(M.a,{})})}),inputProps:{classes:{notchedOutline:n.notchedOutline}}}),h.password&&r.password&&Object(q.jsxs)(C.a,{error:!0,id:"standard-weight-helper-text-password-register",children:[" ",r.password," "]})]}),0!==$&&Object(q.jsx)(k.a,{fullWidth:!0,children:Object(q.jsx)(w.a,{sx:{mb:2},children:Object(q.jsxs)(s.a,{container:!0,spacing:2,alignItems:"center",children:[Object(q.jsx)(s.a,{item:!0,children:Object(q.jsx)(w.a,{backgroundColor:tt.color,sx:{width:85,height:8,borderRadius:"7px"}})}),Object(q.jsx)(s.a,{item:!0,children:Object(q.jsx)(u.a,{variant:"subtitle1",fontSize:"0.75rem",children:tt.label})})]})})}),Object(q.jsx)(s.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(q.jsx)(s.a,{item:!0,children:Object(q.jsx)(_.a,{control:Object(q.jsx)(P.a,{checked:J,onChange:function(t){return Y(t.target.checked)},name:"checked",color:"primary"}),label:Object(q.jsxs)(u.a,{variant:"subtitle1",children:["Agree with \xa0",Object(q.jsx)(u.a,{variant:"subtitle1",component:a.b,to:"#",children:"Terms & Condition."})]})})})}),r.submit&&Object(q.jsx)(w.a,{sx:{mt:3},children:Object(q.jsx)(C.a,{error:!0,children:r.submit})}),Object(q.jsx)(w.a,{sx:{mt:2},children:Object(q.jsx)(B.a,{children:Object(q.jsx)(y.a,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})]})},Y=n(340);e.default=function(){var t=Object(o.a)(),e=Object(c.a)(t.breakpoints.down("sm"));return Object(q.jsx)(h.a,{children:Object(q.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(q.jsx)(s.a,{item:!0,xs:12,children:Object(q.jsx)(s.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(q.jsx)(s.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(q.jsx)(f.a,{children:Object(q.jsxs)(s.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(q.jsx)(s.a,{item:!0,sx:{mb:3},children:Object(q.jsx)(a.b,{to:"#",children:Object(q.jsx)(j.a,{})})}),Object(q.jsx)(s.a,{item:!0,xs:12,children:Object(q.jsx)(s.a,{container:!0,direction:e?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(q.jsx)(s.a,{item:!0,children:Object(q.jsxs)(l.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(q.jsx)(u.a,{color:t.palette.secondary.main,gutterBottom:!0,variant:e?"h3":"h2",children:"Sign up"}),Object(q.jsx)(u.a,{variant:"caption",fontSize:"16px",textAlign:e?"center":"",children:"Enter your credentials to continue"})]})})})}),Object(q.jsx)(s.a,{item:!0,xs:12,children:Object(q.jsx)(J,{})}),Object(q.jsx)(s.a,{item:!0,xs:12,children:Object(q.jsx)(d.a,{})}),Object(q.jsx)(s.a,{item:!0,xs:12,children:Object(q.jsx)(s.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(q.jsx)(u.a,{component:a.b,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Have an account?"})})})]})})})})}),Object(q.jsx)(s.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(q.jsx)(Y.a,{})})]})})}}}]);
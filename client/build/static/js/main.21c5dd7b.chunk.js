(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),i=(n(111),n(21)),s=n(17),l=(n(112),n(4)),u=n.n(l),j=n(19),b=n(187),d=n(2);b.a.propTypes={alerts:u.a.array.isRequired};var p=Object(j.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(d.jsx)(b.a,{severity:e.alertType,children:e.msg},e.id)}))})),h=n(26),f=n.n(h),O=n(42),x=n(30),m=n.n(x),g=n(188),y="LOGIN_SUCCESS",v="LOGIN_FAIL",C="AUTH_ERROR",S="REGISTER_SUCCESS",w="SET_ALERT",I="REMOVE_ALERT",P="USER_LOADED",k="REGISTER_FAIL",R="GET_PROFILE",E="PROFILE_ERROR",T="CLEAR_PROFILE",A="LOGOUT",L=function(e,t){return function(n){var r=Object(g.a)();n({type:w,payload:{msg:e,alertType:t,id:r}}),setTimeout((function(){return n({type:I,payload:r})}),5e3)}},F="https://login-register-backend-ms.herokuapp.com",N=function(){return function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(F,"/api/user/profile/me"));case 3:n=e.sent,t({type:R,payload:n.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:T}),t({type:E,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(O.a)(f.a.mark((function r(a){var c,o,i;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("from action "),r.prev=1,c={headers:{"Content-type":"application/json"}},r.next=5,m.a.post("".concat(F,"/api/user/profile"),e,c);case 5:o=r.sent,a({type:R,payload:o.data}),a(L(n?"Profile Updated":"Profile Created","success")),n||t.push("/desktop"),r.next=16;break;case 11:r.prev=11,r.t0=r.catch(1),(i=r.t0.response.data.errors)&&i.forEach((function(e){a(L(e.msg,"error"))})),a({type:E,payload:{msg:r.t0.response.statusText,status:r.t0.response.status}});case 16:case"end":return r.stop()}}),r,null,[[1,11]])})));return function(e){return r.apply(this,arguments)}}()},q=n(11),H={profile:null,loading:!1,error:{}},_=n(184),D=n(183),M=n(32),U=n.p+"static/media/img.2d29a104.png",J=function(e){var t=e.profile;return Object(d.jsx)(r.Fragment,{children:Object(d.jsx)(D.a,{align:"center",children:Object(d.jsxs)(M.a,{border:"primary",style:{width:"18rem"},children:[Object(d.jsx)(M.a.Img,{variant:"top",src:t.profileImg?t.profileImg:U,height:"150"}),Object(d.jsxs)(M.a.Body,{children:[Object(d.jsxs)(M.a.Title,{children:["Hello ",t.user.name]}),Object(d.jsxs)(M.a.Text,{children:["I am ",t.profession]}),Object(d.jsxs)(M.a.Text,{children:["City:"," ",t.city]}),Object(d.jsx)(M.a.Text,{children:"Hobbies"}),t.hobby.map((function(e){return Object(d.jsx)(M.a.Text,{children:e})}))]})]})})})},B=n(93),Y=n.n(B),V=n(75),W=function(e){e?m.a.defaults.headers.common["x-auth-token"]=e:delete m.a.defaults.headers.common["x-auth-token"]},z="https://login-register-backend-ms.herokuapp.com",K=function(){return function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&W(localStorage.token),e.prev=1,e.next=4,m.a.get("".concat(z,"/me"));case 4:n=e.sent,t({type:P,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:C});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},Q=function(e){var t=e.auth,n=(t.isAuthenticated,t.loading,e.logout);return Object(d.jsx)(r.Fragment,{children:Object(d.jsxs)(V.a,{bg:"dark",variant:"dark",children:[Object(d.jsx)(V.a.Brand,{children:"Login-Registration"}),Object(d.jsxs)("a",{onClick:n,href:"/",children:[Object(d.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(d.jsx)("span",{className:"hide-sm",children:"Logout"})]})]})})};Q.prototypes={logout:u.a.func.isRequired,auth:u.a.object.isRequired};var X=Object(j.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:T}),e({type:A})}}})(Q),Z={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},$=n(94),ee=n.n($),te=n(29),ne=n(34),re=n(10),ae=n(62),ce=n.n(ae),oe=(n(137),function(e){var t=e.profile,n=t.profile,a=t.loading,c=e.getCurrentProfile,o=e.history,i=e.createProfile,s=Object(r.useState)({profession:"",bio:"",hobby:"",city:"",profileImg:""}),l=Object(ne.a)(s,2),u=l[0],j=l[1];Object(r.useEffect)((function(){c(),j({profession:a||!n.profession?"":n.profession,bio:n.bio?n.bio:"",hobby:n.hobby?n.hobby:"",city:n.city?n.city:"",profileImg:n.profileImg?n.profileImg:""})}),[a,c]);var b=u.profession,p=u.bio,h=u.hobby,f=u.city,O=(u.profileImg,function(e){return j(Object(q.a)(Object(q.a)({},u),{},Object(te.a)({},e.target.name,e.target.value)))});return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(X,{}),Object(d.jsx)("h1",{className:"large text-danger",children:"Edit Your Profile"}),Object(d.jsxs)(re.a,{onSubmit:function(e){return function(e){e.preventDefault(),i(u,o,!0),console.log(u)}(e)},children:[Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(d.jsx)(re.a.Group,{children:Object(d.jsx)(ce.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return j(Object(q.a)(Object(q.a)({},u),{},{profileImg:t}))}})}),Object(d.jsx)(re.a.Label,{children:"Profession* :"}),Object(d.jsxs)(re.a.Control,{as:"select",name:"profession",value:b,onChange:function(e){return O(e)},children:[Object(d.jsx)("option",{children:"Select Profession"}),Object(d.jsx)("option",{children:"Software Enginner"}),Object(d.jsx)("option",{children:"Software Tester"}),Object(d.jsx)("option",{children:"Team Lead"}),Object(d.jsx)("option",{children:"Manager"}),Object(d.jsx)("option",{children:"HR Manager"})]})]}),Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(d.jsx)(re.a.Label,{children:"Bio :"}),Object(d.jsx)(re.a.Control,{type:"text",name:"bio",value:p,onChange:function(e){return O(e)}})]}),Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlSelect2",children:[Object(d.jsx)(re.a.Label,{children:"Hobbies Please use comma separated values (eg.HTML,CSS,JavaScript,PHP) :"}),Object(d.jsx)(re.a.Control,{type:"text",name:"hobby",value:h,onChange:function(e){return O(e)}})]}),Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(d.jsx)(re.a.Label,{children:"City* :"}),Object(d.jsx)(re.a.Control,{type:"text",name:"city",value:f,onChange:function(e){return O(e)}})]}),Object(d.jsx)("center",{children:Object(d.jsx)("input",{type:"submit",className:"btn btn-primary my-1"})})]})]})});oe.prototype={profile:u.a.object.isRequired,getCurrentProfile:u.a.func.isRequired,createProfile:u.a.func.isRequired};var ie=Object(j.b)((function(e){return{profile:e.profile}}),{createProfile:G,getCurrentProfile:N})(oe),se=function(e){var t=e.getCurrentProfile,n=e.auth,a=(n.user,n.isAuthenticated,e.profile),c=a.profile,o=a.loading;return Object(r.useEffect)((function(){t()}),[]),Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(X,{}),o?Object(d.jsx)(r.Fragment,{children:Object(d.jsx)(_.a,{color:"secondary"})}):Object(d.jsx)(r.Fragment,{children:null===c?Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("h3",{className:"large text-danger",children:"Welcome "}),Object(d.jsx)("p",{children:" Yous have not created Profile,Please create Profile"}),Object(d.jsxs)(i.b,{to:"/create-profile",className:"btn btn-light",children:[Object(d.jsx)(Y.a,{}),"Create Profile"]})]}):Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("h1",{className:"large text-danger",children:"Edit Your Profile"}),Object(d.jsxs)(i.b,{to:"/edit-profile",className:"btn btn-light",children:[Object(d.jsx)(ee.a,{}),"Edit-Profile"]}),Object(d.jsx)(J,{profile:c})]})})]})};se.prototype={getCurrentProfile:u.a.func.isRequired,auth:u.a.object.isRequired,profile:u.a.object.isRequired};var le=Object(j.b)((function(e){return{auth:e.auth,profile:e.profile}}),{getCurrentProfile:N})(se),ue=n(182),je=n(189),be=n(63),de=n.n(be),pe=n(186),he=n(185),fe=function(e){var t=e.login,n=e.isAuthenticated,a=Object(r.useState)({email:"",password:""}),c=Object(ne.a)(a,2),o=c[0],l=c[1],u=o.email,j=o.password,b=function(e){l(Object(q.a)(Object(q.a)({},o),{},Object(te.a)({},e.target.name,e.target.value)))};if(n)return Object(d.jsx)(s.a,{to:"/desktop"});return Object(d.jsx)(r.Fragment,{children:Object(d.jsx)(ue.a,{elevation:5,style:{padding:20,height:"70vh",width:"60vh",margin:"20px auto"},children:Object(d.jsxs)(D.a,{align:"center",children:[Object(d.jsx)(je.a,{style:{backgroundColor:"green"},children:Object(d.jsx)(de.a,{})}),Object(d.jsx)("h2",{children:"Sign In"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return function(e){e.preventDefault(),t(u,j)}(e)},children:[Object(d.jsx)(pe.a,{id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:u,onChange:function(e){return b(e)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(pe.a,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:j,onChange:function(e){return b(e)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(he.a,{type:"submit",variant:"outlined",color:"primary",children:"Sign In"}),Object(d.jsxs)("p",{className:"my-1",children:["Dont't have an account? ",Object(d.jsx)(i.b,{to:"/register",children:"Sign Up"})]})]})]})})})};fe.protoTypes={login:u.a.func.isRequired,isAuthenticated:u.a.bool};var Oe=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(O.a)(f.a.mark((function n(r){var a,c,o,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,m.a.post("".concat(z,"/"),c,a);case 5:o=n.sent,r({type:y,payload:o.data}),r(K()),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(2),(i=n.t0.response.data.errors)&&i.forEach((function(e){r(L(e.msg,"error"))})),r({type:v});case 15:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})(fe),xe=function(e){var t=e.register,n=e.isAuthenticated,a=e.setAlert,c=Object(r.useState)({name:"",email:"",password:"",password2:""}),o=Object(ne.a)(c,2),l=o[0],u=o[1],j=l.name,b=l.email,p=l.password,h=l.password2,f=function(e){u(Object(q.a)(Object(q.a)({},l),{},Object(te.a)({},e.target.name,e.target.value)))};if(n)return Object(d.jsx)(s.a,{to:"/desktop"});return Object(d.jsx)(r.Fragment,{children:Object(d.jsx)(ue.a,{elevation:5,style:{padding:20,height:"70%",width:"60vh",margin:"20px auto"},children:Object(d.jsxs)(D.a,{align:"center",children:[Object(d.jsx)(je.a,{style:{backgroundColor:"green"},children:Object(d.jsx)(de.a,{})}),Object(d.jsx)("h2",{children:"Sign Up"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return function(e){e.preventDefault(),p!==h?a("Password do not Match","error"):(t({name:j,email:b,password:p}),console.log("user Addded"))}(e)},children:[Object(d.jsx)(pe.a,{id:"outlined-basic",label:"Name",variant:"outlined",value:j,name:"name",onChange:function(e){return f(e)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(pe.a,{id:"outlined-basic",label:"Email",variant:"outlined",value:b,name:"email",onChange:function(e){return f(e)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(pe.a,{id:"outlined-basic",label:"Password",variant:"outlined",type:"password",value:p,name:"password",onChange:function(e){return f(e)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(pe.a,{id:"outlined-basic",label:"Confirm Password",variant:"outlined",type:"password",value:h,name:"password2",onChange:function(e){return f(e)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(he.a,{type:"submit",variant:"outlined",color:"primary",children:"Sign Up"}),Object(d.jsxs)("p",{className:"my-1",children:["Alredy Have Account? ",Object(d.jsx)(i.b,{to:"/",children:"Sign In"})]})]})]})})})};xe.protoTypes={register:u.a.func.isRequired,isAuthenticated:u.a.bool,setAlert:u.a.func.isRequired};var me=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){var t=e.name,n=e.email,r=e.password;return function(){var e=Object(O.a)(f.a.mark((function e(a){var c,o,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:t,email:n,password:r}),e.prev=2,e.next=5,m.a.post("".concat(z,"/api/user"),o,c);case 5:i=e.sent,a({type:S,payload:i.data}),a(K()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(s=e.t0.response.data.errors)&&s.forEach((function(e){a(L(e.msg,"error"))})),a({type:k});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},setAlert:L})(xe),ge=function(e){var t=e.history,n=e.createProfile,a=Object(r.useState)({profession:"",bio:"",hobby:"",city:"",profileImg:""}),c=Object(ne.a)(a,2),o=c[0],i=c[1],s=o.profession,l=o.bio,u=o.hobby,j=o.city,b=(o.profileImg,function(e){return i(Object(q.a)(Object(q.a)({},o),{},Object(te.a)({},e.target.name,e.target.value)))});return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(X,{}),Object(d.jsx)("h1",{className:"large text-danger",children:"Create Your Profile"}),Object(d.jsxs)(re.a,{onSubmit:function(e){return function(e){e.preventDefault(),n(o,t,!0)}(e)},children:[Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(d.jsx)(re.a.Group,{children:Object(d.jsx)(ce.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return i(Object(q.a)(Object(q.a)({},o),{},{profileImg:t}))}})}),Object(d.jsx)(re.a.Label,{children:"Profession* :"}),Object(d.jsxs)(re.a.Control,{as:"select",name:"profession",value:s,onChange:function(e){return b(e)},children:[Object(d.jsx)("option",{children:"Select Profession"}),Object(d.jsx)("option",{children:"Software Enginner"}),Object(d.jsx)("option",{children:"Software Tester"}),Object(d.jsx)("option",{children:"Team Lead"}),Object(d.jsx)("option",{children:"Manager"}),Object(d.jsx)("option",{children:"HR Manager"})]})]}),Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(d.jsx)(re.a.Label,{children:"Bio : "}),Object(d.jsx)(re.a.Control,{type:"text",name:"bio",value:l,onChange:function(e){return b(e)}})]}),Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlSelect2",children:[Object(d.jsx)(re.a.Label,{children:"Hobbies Please use comma separated values (eg.HTML,CSS,JavaScript,PHP) : "}),Object(d.jsx)(re.a.Control,{type:"text",name:"hobby",value:u,onChange:function(e){return b(e)}})]}),Object(d.jsxs)(re.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(d.jsx)(re.a.Label,{children:"City* : "}),Object(d.jsx)(re.a.Control,{type:"text",name:"city",value:j,onChange:function(e){return b(e)},required:!0})]}),Object(d.jsx)("center",{children:Object(d.jsx)("input",{type:"submit",className:"btn btn-primary my-1"})})]})]})};ge.prototype={createProfile:u.a.func.isRequired};var ye=Object(j.b)(null,{createProfile:G})(ge);var ve=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(s.b,{exact:!0,path:"/",component:Oe}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{exact:!0,path:"/register",component:me}),Object(d.jsx)(s.b,{exact:!0,path:"/desktop",component:le}),Object(d.jsx)(s.b,{exact:!0,path:"/edit-profile",component:ie}),Object(d.jsx)(s.b,{exact:!0,path:"/create-profile",component:ye})]})]})})},Ce=n(33),Se=n(95),we=n(96),Ie=n(97),Pe=[],ke=Object(Ce.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case S:case y:return localStorage.setItem("token",r.token),Object(q.a)(Object(q.a)(Object(q.a)({},e),r),{},{isAuthenticated:!0,loading:!1});case P:return Object(q.a)(Object(q.a)({},e),{},{isAuthenticated:!0,loading:!1,user:r});case k:case A:case C:case v:return localStorage.removeItem("token"),Object(q.a)(Object(q.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case R:return Object(q.a)(Object(q.a)({},e),{},{profile:r,loading:!1});case E:return Object(q.a)(Object(q.a)({},e),{},{error:r,loading:!1});case T:return Object(q.a)(Object(q.a)({},e),{},{profile:null,loading:!1});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case w:return[].concat(Object(Ie.a)(e),[r]);case I:return e.filter((function(e){return e.id!==r}));default:return e}}}),Re=[we.a],Ee=Object(Ce.createStore)(ke,{},Object(Se.composeWithDevTools)(Ce.applyMiddleware.apply(void 0,Re)));o.a.render(Object(d.jsx)(j.a,{store:Ee,children:Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ve,{})})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.21c5dd7b.chunk.js.map
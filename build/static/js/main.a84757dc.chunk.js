(this.webpackJsonpMultitasker=this.webpackJsonpMultitasker||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/face-detection.d7a0ecb7.png"},106:function(e,t,a){e.exports=a.p+"static/media/graph.3513f139.png"},108:function(e,t,a){e.exports=a(352)},114:function(e,t,a){},326:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),c=a.n(r),i=(a(113),a(114),a(12)),l=a(6),s=a(101),m=a.n(s),u=(a(326),function(e){var t=e.imageUrl,a=e.boxes;return n.createElement("div",null,n.createElement("div",{className:"center"},n.createElement("img",{className:"ma2",alt:"",id:"inputimage",src:t,width:"500px",height:"auto"}),n.createElement("div",{className:"ma2 absolute block"},n.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),a.map((function(e,t){return n.createElement("div",{key:t,className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})})))))}),p=a(354),d=a(356),f=a(357),g=a(355),h=function(e){var t=e.onRouteChange,a=e.toggleModal,r=Object(n.useState)(!1),c=Object(l.a)(r,2),i=c[0],s=c[1];return o.a.createElement("div",{className:"pa4 tc"},o.a.createElement(p.a,{isOpen:i,toggle:function(){return s((function(e){return!e}))}},o.a.createElement(d.a,{tag:"span","data-toggle":"dropdown","aria-expanded":i},o.a.createElement("img",{src:"http://tachyons.io/img/logo.jpg",className:"br-100 pa1 ba b--black-10 h3 w3",alt:"avatar"})),o.a.createElement(f.a,{right:!0,className:"b--transparent shadow-5",style:{marginTop:"20px",backgroundColor:"rgba(255,255,255,0.5)"}},o.a.createElement(g.a,{onClick:a},"Profile"),o.a.createElement(g.a,{onClick:function(){return t("signout")}},"Sign Out"))))},b=function(e){var t=e.onRouteChange,a=e.isSignedIn,n=e.toggleModal;return a?o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(h,{onRouteChange:t,toggleModal:n})):o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim underline pa3 pointer"},"Sign In"),o.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim underline pa3 pointer"},"Register"))};b.defaultProps={isSignedIn:!1};var E=o.a.memo(b),w=function(e){var t=e.fetchProfile,a=e.onRouteChange,r=e.stage,c=Object(n.useReducer)((function(e,t){var a=t.type,n=t.payload;switch(a){case"CHANGE_EMAIL":return Object(i.a)(Object(i.a)({},e),{},{email:n});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{password:n});default:return console.error(new Error("FormReducer type is not valid")),e}}),{email:"",password:""}),s=Object(l.a)(c,2),m=s[0],u=s[1],p=function(e){e.preventDefault(),fetch("http://".concat(r,"/signin"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}).then((function(e){return e.json()})).then((function(e){var a;e.userId&&"true"===e.success&&(a=e.token,window.sessionStorage.setItem("SmartBrainToken",a),t(e.token,e.userId))})).catch(console.log)};return o.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},o.a.createElement("main",{className:"pa4"},o.a.createElement("form",{className:"measure"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email"},"Email"),o.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",autoComplete:"email",name:"email",id:"email",onChange:function(e){return u({type:"CHANGE_EMAIL",payload:e.target.value})}})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",autoComplete:"current-password",name:"password",id:"password",onChange:function(e){return u({type:"CHANGE_PASS",payload:e.target.value})}}))),o.a.createElement("div",{className:""},o.a.createElement("input",{onClick:function(e){return p(e)},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib input-signin",type:"submit",value:"Sign in"})),o.a.createElement("div",{className:"lh-copy mt3"},o.a.createElement("p",{onClick:function(){return a("register")},className:"f6 link dim db pointer"},"Register")))))},v=a(107),N=function(e){var t=e.fetchProfile,a=e.stage;Object(n.useEffect)((function(){document.getElementById("registerForm").reset()}),[]);var r=Object(v.a)(),c=r.register,i=r.handleSubmit;return o.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},o.a.createElement("main",{className:"pa4"},o.a.createElement("form",{id:"registerForm",className:"measure",onSubmit:i((function(e){""!==e.password&&""!==e.email&&fetch("http://".concat(a,"/register"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var a;e&&(t(e.token,e.userId),a=e.token,window.sessionStorage.setItem("SmartBrainToken",a))}))}))},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),o.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",autoComplete:"name",id:"name",pattern:"(?=.*[a-z])(?=.*[A-Z]).{2,}",title:"Must contain at least one uppercase and lowercase letter, and at least 2 characters long.",ref:c({required:!0,pattern:/(?=.*[a-z])(?=.*[A-Z])/i})})),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email"},"Email"),o.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",autoComplete:"email",name:"email",id:"email",ref:c({required:!0})})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",autoComplete:"new-password",id:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}",title:"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 characters long.",ref:c({required:!0})}))),o.a.createElement("div",null,o.a.createElement("input",{className:"ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib input-register",type:"submit",value:"Register"})))))},y=a(104),j=a.n(y),C=(a(346),function(e){var t=e.image,a=e.context,n=e.onRouteChangeObj;return o.a.createElement("div",{className:"mt4 mb4 mt0 Logo",onClick:function(e){return n.onRouteChange(n.route)}},o.a.createElement("h1",null,a),o.a.createElement(j.a,{className:"Tilt br4 ",options:{max:55}},o.a.createElement("div",{className:"Tilt-inner pa3"},o.a.createElement("img",{alt:"logo",src:t}))))}),O=(a(347),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return o.a.createElement("div",{className:"ma2 mh4"},o.a.createElement("div",{className:"f3 b-400 white"},o.a.createElement("p",null,"This Magic Brain will detect faces in your pictures. Give it a try!"),o.a.createElement("p",null,"Try pasting in a url of a photo.")),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"imageForm center pa4 br3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-100 center",type:"tex",onChange:t}),o.a.createElement("button",{className:"grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),k=function(e){var t=e.entries,a=e.name,r=Object(n.useState)(""),c=Object(l.a)(r,2),i=c[0],s=c[1];Object(n.useEffect)((function(){void 0!==t&&m(t)}),[t,a]);var m=function(e){fetch("https://x12q8i6zkb.execute-api.us-east-1.amazonaws.com/dev/rank?rank=".concat(e.toString()),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.input&&s(e.input)})).catch((function(e){return console.log}))};return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"".concat(a,", your current entry count is...")),o.a.createElement("div",{className:"white f1"},t),o.a.createElement("div",{className:"white f2"},"Your Badge: ".concat(i)))};k.defaultProps={name:"Ops.. we didn't get your name. But",entries:"0"};var S=k,A=a(3),I=a.n(A),x=(a(348),document.getElementById("modal-root")),R=function(e){var t=e.children,a=Object(n.useState)(document.createElement("div")),o=Object(l.a)(a,2),r=o[0];o[1];return Object(n.useEffect)((function(){return x&&x.appendChild(r),function(){x&&x.removeChild(r)}}),[r]),c.a.createPortal(t,r)};R.propTypes={children:I.a.shape({$$typeof:I.a.symbol,key:I.a.number,props:I.a.object,type:I.a.func})};var T,_=R,B=(a(349),function(e){var t=e.user,a=e.toggleModal,r=e.loadUser,c=e.stage,s=Object(n.useState)(!1),m=Object(l.a)(s,2),u=m[0],p=m[1],d=t.id,f=t.name,g=t.age,h=t.pet,b=Object(n.useReducer)((function(e,t){switch(t.type){case"NAME_CHANGE":return Object(i.a)(Object(i.a)({},e),{},{name:t.payload});case"AGE_CHANGE":return!1===isNaN(t.payload)?(p(!1),Object(i.a)(Object(i.a)({},e),{},{age:t.payload})):(u||p(!0),e);case"PET_CHANGE":return Object(i.a)(Object(i.a)({},e),{},{pet:t.payload});default:return new Error("FormReducer type is not valid")}}),{name:f,age:g,pet:h}),E=Object(l.a)(b,2),w=E[0],v=E[1];return o.a.createElement("div",{className:"profile-modal"},o.a.createElement("article",{className:"overflow-y-auto ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},o.a.createElement("main",{className:"pa4  w-80"},o.a.createElement("img",{src:"http://tachyons.io/img/logo.jpg",className:"dib h3 w3",alt:"avatar"}),o.a.createElement("h1",null,w.name||f),o.a.createElement("h4",null,"Image submitted: ".concat(t.entries)),o.a.createElement("p",null,"Member since: ".concat(new Date(t.joined||"Who are you?").toLocaleDateString())),o.a.createElement("hr",null),o.a.createElement("label",{className:"mt2 fw6",htmlFor:"user-name"},"Name:"),o.a.createElement("input",{className:"pa2 ba w-100",placeholder:t.name,type:"text",name:"user-name",id:"name",onChange:function(e){return v({type:"NAME_CHANGE",payload:e.target.value})}}),o.a.createElement("label",{className:"mt2 fw6",htmlFor:"user-age"},"Age:"),o.a.createElement("input",{className:"pa2 ba w-100",placeholder:g||"immortal!",type:"text",name:"user-age",id:"age",onChange:function(e){return v({type:"AGE_CHANGE",payload:e.target.value})}}),u?o.a.createElement("p",{className:"alert alert-warning"},"Age needs to be a number"):o.a.createElement("p",null),o.a.createElement("label",{className:"mt2 fw6",htmlFor:"pet-name"},"Pet:"),o.a.createElement("input",{className:"pa2 ba w-100",placeholder:h,type:"text",name:"pet-name",id:"pet",onChange:function(e){return v({type:"PET_CHANGE",payload:e.target.value})}}),o.a.createElement("div",{className:"mt4 pa2",style:{display:"flex",justifyContent:"space-around"}},o.a.createElement("button",{onClick:function(){return e=w,void fetch("http://".concat(c,"/profile/").concat(d),{method:"post",headers:{"Content-Type":"application/json",Authentication:window.sessionStorage.getItem("SmartBrainToken")||"no token"},body:JSON.stringify({formInput:e})}).then((function(n){200===n.status||304===n.status?(a(),r(Object(i.a)(Object(i.a)({},t),e))):alert("Something went wrong.. please try again later.")})).catch(console.log);var e},className:"b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"},"Save"),o.a.createElement("button",{className:"b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20",onClick:a},"Cancel"))),o.a.createElement("div",{onClick:a,className:"modal-close"},"\xd7")))}),G=(a(350),a(105)),P=a.n(G),M=a(106),F=a.n(M);T={stage:"localhost",startPoint:"signin"};var z={particles:{number:{value:30,density:{enable:!0,value_area:800}}}},H=function(){var e=Object(n.useState)({id:null,name:"",email:"",entries:"0",joined:"",age:"",pet:""}),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(T.stage),s=Object(l.a)(c,2),p=s[0],d=(s[1],Object(n.useState)(!1)),f=Object(l.a)(d,2),g=f[0],h=f[1],b=Object(n.useState)(!1),v=Object(l.a)(b,2),y=v[0],j=v[1],k=Object(n.useState)(!1),A=Object(l.a)(k,2),I=A[0],x=A[1],R=Object(n.useState)(T.startPoint),G=Object(l.a)(R,2),M=G[0],H=G[1],q=Object(n.useState)([]),D=Object(l.a)(q,2),L=D[0],J=D[1],W=Object(n.useState)(""),U=Object(l.a)(W,2),Z=U[0],$=U[1],Y=Object(n.useState)(""),K=Object(l.a)(Y,2),Q=K[0],V=K[1],X=Object(n.useState)(!0),ee=Object(l.a)(X,2),te=ee[0],ae=ee[1];Object(n.useEffect)((function(){var e=window.sessionStorage.getItem("SmartBrainToken");e?(x((function(){return!0})),fetch("http://".concat(p,"/signin"),{method:"post",headers:{"Content-Type":"application/json",Authentication:e}}).then((function(e){return e.json()})).then((function(t){t&&t.id?ne(e,t.id):x((function(){return!1}))})).catch(console.log)):x((function(){return!1}))}),[]);var ne=function(e,t){null!==t&&void 0!==t&&fetch("http://".concat(p,"/profile/").concat(t.toString()),{method:"get",headers:{"Content-Type":"application/json",Authentication:e}}).then((function(e){return e.json()})).then((function(e){e.email&&(oe(e),ce("home"))})).catch((function(e){return console.log}))},oe=function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{id:e.id,name:e.name,age:e.age||"",pet:e.pet||"",email:e.email,entries:e.entries,joined:e.joined})}))},re=function(e){e&&J((function(){return e}))},ce=function(e){"signout"===e?(window.sessionStorage.removeItem("SmartBrainToken"),r((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:null,name:"",email:"",entries:"0",joined:"",age:"",pet:""})})),h(!1),j(!1),x(!1),H("signin"),J([]),$(""),V("")):"home"===e?j((function(){return!0})):"faceDetection"===e&&H("faceDetection"),H((function(){return e}))},ie=function(){h((function(e){return!e}))};return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{className:"particles",params:z}),o.a.createElement(E,{isSignedIn:y,onRouteChange:ce,toggleModal:ie}),g&&o.a.createElement(_,null,o.a.createElement(B,{loadUser:oe,toggleModal:ie,user:a,stage:p})),"home"===M?o.a.createElement("div",{id:"LogoComponent"},o.a.createElement(C,{image:P.a,context:"Face Recognition",onRouteChangeObj:{onRouteChange:ce,route:"faceDetection"}}),o.a.createElement(C,{image:F.a,context:"coming soon..",onRouteChangeObj:{onRouteChange:ce,route:"home"}})):"faceDetection"===M?o.a.createElement("div",null,o.a.createElement(S,{name:a.name,entries:a.entries}),Z?o.a.createElement(u,{boxes:L,imageUrl:Z,stage:p}):null,o.a.createElement(O,{onInputChange:function(e){V(e.target.value)},onButtonSubmit:function(){te&&(ae(!1),setTimeout((function(){return ae(!0)}),3e3),""!==Q?fetch("http://".concat(p,"/imageurl"),{method:"post",headers:{"Content-Type":"application/json",Authentication:window.sessionStorage.getItem("SmartBrainToken")||""},body:JSON.stringify({input:Q})}).then((function(e){return e.json()})).then((function(e){var t;e&&void 0===e.status.code&&(re([]),$("https://64.media.tumblr.com/39152183fc21b80af07e4c8146bc784b/tumblr_noqcsiGNIt1u7zqzwo1_500.gif")),e&&"10000"!==e.status.code&&($((function(){return Q})),fetch("http://".concat(p,"/image"),{method:"put",headers:{"Content-Type":"application/json",Authentication:window.sessionStorage.getItem("SmartBrainToken")||""},body:JSON.stringify({id:a.id})}).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{entries:e})}))})).catch((function(e){console.error(e)}))),re(void 0!==(t=e.outputs[0].data.regions)||"number"===typeof t.id?t.map((function(e){var a=e.region_info.bounding_box,n=document.getElementById("inputimage");if(null!==n){var o=Number(n.offsetWidth),r=Number(n.offsetHeight);return{leftCol:a.left_col*o,topRow:a.top_row*r,rightCol:o-a.right_col*o,bottomRow:r-a.bottom_row*r}}return[t]})):[t])})).catch((function(e){re([]),$("https://64.media.tumblr.com/39152183fc21b80af07e4c8146bc784b/tumblr_noqcsiGNIt1u7zqzwo1_500.gif"),console.error(e)})):(re([]),$("https://64.media.tumblr.com/39152183fc21b80af07e4c8146bc784b/tumblr_noqcsiGNIt1u7zqzwo1_500.gif")))}})):"signin"===M?I?o.a.createElement("h1",{className:"f1 fw6 ph0 mh0"},"Loading"):o.a.createElement(w,{onRouteChange:ce,fetchProfile:ne,stage:p}):o.a.createElement(N,{fetchProfile:ne,stage:p}))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(351);c.a.render(o.a.createElement(H,null),document.getElementById("root")),c.a.render(o.a.createElement(_,null),document.getElementById("modal-root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");q?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):D(e)}))}}()}},[[108,1,2]]]);
//# sourceMappingURL=main.a84757dc.chunk.js.map
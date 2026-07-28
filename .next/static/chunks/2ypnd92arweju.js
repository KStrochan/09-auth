(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54616,5766,t=>{"use strict";let e,r;var a,i=t.i(71645),o=t.i(14272),s=t.i(40143),n=t.i(15823),l=t.i(19273),u=class extends n.Subscribable{#t;#e=void 0;#r;#a;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,l.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,l.hashKey)(e.mutationKey)!==(0,l.hashKey)(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#o(t)}getCurrentResult(){return this.#e}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#i(),this.#o()}mutate(t,e){return this.#a=e,this.#r?.removeObserver(this),this.#r=this.#t.getMutationCache().build(this.#t,this.options),this.#r.addObserver(this),this.#r.execute(t)}#i(){let t=this.#r?.state??(0,o.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){s.notifyManager.batch(()=>{if(this.#a&&this.hasListeners()){let e=this.#e.variables,r=this.#e.context,a={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};if(t?.type==="success"){try{this.#a.onSuccess?.(t.data,e,r,a)}catch(t){Promise.reject(t)}try{this.#a.onSettled?.(t.data,null,e,r,a)}catch(t){Promise.reject(t)}}else if(t?.type==="error"){try{this.#a.onError?.(t.error,e,r,a)}catch(t){Promise.reject(t)}try{this.#a.onSettled?.(void 0,t.error,e,r,a)}catch(t){Promise.reject(t)}}}this.listeners.forEach(t=>{t(this.#e)})})}},c=t.i(12598);t.s(["useMutation",0,function(t,e){let r=(0,c.useQueryClient)(e),[a]=i.useState(()=>new u(r,t));i.useEffect(()=>{a.setOptions(t)},[a,t]);let o=i.useSyncExternalStore(i.useCallback(t=>a.subscribe(s.notifyManager.batchCalls(t)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),n=i.useCallback((t,e)=>{a.mutate(t,e).catch(l.noop)},[a]);if(o.error&&(0,l.shouldThrowError)(a.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:n,mutateAsync:o.mutate}}],54616);let d={data:""},m=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,h=/\n+/g,f=(t,e)=>{let r="",a="",i="";for(let o in t){let s=t[o];"@"==o[0]?"i"==o[1]?r=o+" "+s+";":a+="f"==o[1]?f(s,o):o+"{"+f(s,"k"==o[1]?"":e)+"}":"object"==typeof s?a+=f(s,e?e.replace(/([^,])+/g,t=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):o):null!=s&&(o="-"==o[1]?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=f.p?f.p(o,s):o+":"+s+";")}return r+(e&&i?e+"{"+i+"}":i)+a},g={},y=t=>{if("object"==typeof t){let e="";for(let r in t)e+=r+y(t[r]);return e}return t};function b(t){let e,r,a=this||{},i=t.call?t(a.p):t;return((t,e,r,a,i)=>{var o;let s=y(t),n=g[s]||(g[s]=(t=>{let e=0,r=11;for(;e<t.length;)r=101*r+t.charCodeAt(e++)>>>0;return"go"+r})(s));if(!g[n]){let e=s!==t?t:(t=>{let e,r,a=[{}];for(;e=m.exec(t.replace(p,""));)e[4]?a.shift():e[3]?(r=e[3].replace(h," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][e[1]]=e[2].replace(h," ").trim();return a[0]})(t);g[n]=f(i?{["@keyframes "+n]:e}:e,r?"":"."+n)}let l=r&&g.g;return r&&(g.g=g[n]),o=g[n],l?e.data=e.data.replace(l,o):-1===e.data.indexOf(o)&&(e.data=a?o+e.data:e.data+o),n})(i.unshift?i.raw?(e=[].slice.call(arguments,1),r=a.p,i.reduce((t,a,i)=>{let o=e[i];if(o&&o.call){let t=o(r),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;o=e?"."+e:t&&"object"==typeof t?t.props?"":f(t,""):!1===t?"":t}return t+a+(null==o?"":o)},"")):i.reduce((t,e)=>Object.assign(t,e&&e.call?e(a.p):e),{}):i,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||d})(a.target),a.g,a.o,a.k)}b.bind({g:1});let v,x,_,w=b.bind({k:1});function S(t,e){let r=this||{};return function(){let a=arguments;function i(o,s){let n=Object.assign({},o),l=n.className||i.className;r.p=Object.assign({theme:x&&x()},n),r.o=/go\d/.test(l),n.className=b.apply(r,a)+(l?" "+l:""),e&&(n.ref=s);let u=t;return t[0]&&(u=n.as||t,delete n.as),_&&u[0]&&_(n),v(u,n)}return e?e(i):i}}var j=(t,e)=>"function"==typeof t?t(e):t,O=(e=0,()=>(++e).toString()),N="default",E=(t,e)=>{let{toastLimit:r}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:a}=e;return E(t,{type:+!!t.toasts.find(t=>t.id===a.id),toast:a});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(t=>t.id===i||void 0===i?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+o}))}}},M=[],C={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},F=(t,e=N)=>{A[e]=E(A[e]||C,t),M.forEach(([t,r])=>{t===e&&r(A[e])})},k=t=>Object.keys(A).forEach(e=>F(t,e)),$=(t=N)=>e=>{F(e,t)},I=t=>(e,r)=>{let a,i=((t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(null==r?void 0:r.id)||O()}))(e,t,r);return $(i.toasterId||(a=i.id,Object.keys(A).find(t=>A[t].toasts.some(t=>t.id===a))))({type:2,toast:i}),i.id},R=(t,e)=>I("blank")(t,e);R.error=I("error"),R.success=I("success"),R.loading=I("loading"),R.custom=I("custom"),R.dismiss=(t,e)=>{let r={type:3,toastId:t};e?$(e)(r):k(r)},R.dismissAll=t=>R.dismiss(void 0,t),R.remove=(t,e)=>{let r={type:4,toastId:t};e?$(e)(r):k(r)},R.removeAll=t=>R.remove(void 0,t),R.promise=(t,e,r)=>{let a=R.loading(e.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let i=e.success?j(e.success,t):void 0;return i?R.success(i,{id:a,...r,...null==r?void 0:r.success}):R.dismiss(a),t}).catch(t=>{let i=e.error?j(e.error,t):void 0;i?R.error(i,{id:a,...r,...null==r?void 0:r.error}):R.dismiss(a)}),t};var P=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,X=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,B=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,D=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,L=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${D} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=S("div")`
  position: absolute;
`,G=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:t})=>{let{icon:e,type:r,iconTheme:a}=t;return void 0!==e?"string"==typeof e?i.createElement(q,null,e):e:"blank"===r?null:i.createElement(G,null,i.createElement(X,{...a}),"loading"!==r&&i.createElement(U,null,"error"===r?i.createElement(T,{...a}):i.createElement(L,{...a})))},V=S("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;i.memo(({toast:t,position:e,style:a,children:o})=>{let s=t.height?((t,e)=>{let a=t.includes("top")?1:-1,[i,o]=(()=>{if(void 0===r&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");r=!t||t.matches}return r})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:e?`${w(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},n=i.createElement(Q,{toast:t}),l=i.createElement(J,{...t.ariaProps},j(t.message,t));return i.createElement(V,{className:t.className,style:{...s,...a,...t.style}},"function"==typeof o?o({icon:n,message:l}):i.createElement(i.Fragment,null,n,l))}),a=i.createElement,f.p=void 0,v=a,x=void 0,_=void 0,b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,t.s(["default",0,R],5766)},20896,t=>{t.v({actions:"NoteForm-module__XA_SlW__actions",cancelButton:"NoteForm-module__XA_SlW__cancelButton",error:"NoteForm-module__XA_SlW__error",form:"NoteForm-module__XA_SlW__form",formGroup:"NoteForm-module__XA_SlW__formGroup",input:"NoteForm-module__XA_SlW__input",select:"NoteForm-module__XA_SlW__select",submitButton:"NoteForm-module__XA_SlW__submitButton",textarea:"NoteForm-module__XA_SlW__textarea"})},85762,t=>{"use strict";let e,r;var a=t.i(43476),i=t.i(54616),o=t.i(12598),s=t.i(18566),n=t.i(5766),l=t.i(19152),u=t.i(68834);let c=t=>e=>{try{let r=t(e);if(r instanceof Promise)return r;return{then:t=>c(t)(r),catch(t){return this}}}catch(t){return{then(t){return this},catch:e=>c(e)(t)}}},d={title:"",content:"",tag:"Todo"},m=(0,u.create)()((e=t=>({draft:d,setDraft:e=>t(t=>({draft:{...t.draft,...e}})),clearDraft:()=>t({draft:d})}),r={name:"note-draft",partialize:t=>({draft:t.draft})},(t,a,i)=>{let o,s={storage:function(t){let e;try{e=t()}catch(t){return}return{getItem:t=>{var r;let a=t=>null===t?null:JSON.parse(t,void 0),i=null!=(r=e.getItem(t))?r:null;return i instanceof Promise?i.then(a):a(i)},setItem:(t,r)=>e.setItem(t,JSON.stringify(r,void 0)),removeItem:t=>e.removeItem(t)}}(()=>window.localStorage),partialize:t=>t,version:0,merge:(t,e)=>({...e,...t}),...r},n=!1,l=0,u=new Set,d=new Set,m=s.storage;if(!m)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...e)},a,i);let p=()=>{let t=s.partialize({...a()});return m.setItem(s.name,{state:t,version:s.version})},h=i.setState;i.setState=(t,e)=>(h(t,e),p());let f=e((...e)=>(t(...e),p()),a,i);i.getInitialState=()=>f;let g=()=>{var e,r;if(!m)return;let i=++l;n=!1,u.forEach(t=>{var e;return t(null!=(e=a())?e:f)});let h=(null==(r=s.onRehydrateStorage)?void 0:r.call(s,null!=(e=a())?e:f))||void 0;return c(m.getItem.bind(m))(s.name).then(t=>{if(t)if("number"!=typeof t.version||t.version===s.version)return[!1,t.state];else{if(s.migrate){let e=s.migrate(t.state,t.version);return e instanceof Promise?e.then(t=>[!0,t]):[!0,e]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var r;if(i!==l)return;let[n,u]=e;if(t(o=s.merge(u,null!=(r=a())?r:f),!0),n)return p()}).then(()=>{i===l&&(null==h||h(a(),void 0),o=a(),n=!0,d.forEach(t=>t(o)))}).catch(t=>{i===l&&(null==h||h(void 0,t))})};return i.persist={setOptions:t=>{s={...s,...t},t.storage&&(m=t.storage)},clearStorage:()=>{null==m||m.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>n,onHydrate:t=>(u.add(t),()=>{u.delete(t)}),onFinishHydration:t=>(d.add(t),()=>{d.delete(t)})},s.skipHydration||g(),o||f}));var p=t.i(20896);let h=["Todo","Work","Personal","Meeting","Shopping"];t.s(["default",0,function(){let t=(0,s.useRouter)(),e=(0,o.useQueryClient)(),{draft:r,setDraft:u,clearDraft:c}=m(),d=(0,i.useMutation)({mutationFn:l.createNote,onSuccess:()=>{c(),e.invalidateQueries({queryKey:["notes"]}),n.default.success("Note created successfully"),t.push("/notes/filter/all")},onError:()=>{n.default.error("Failed to create note")}});return(0,a.jsxs)("form",{action:t=>{let e;return e={title:t.get("title")?.toString()??"",content:t.get("content")?.toString()??"",tag:t.get("tag")},void d.mutate(e)},className:p.default.form,children:[(0,a.jsxs)("div",{className:p.default.formGroup,children:[(0,a.jsx)("label",{htmlFor:"title",children:"Title"}),(0,a.jsx)("input",{id:"title",name:"title",className:p.default.input,defaultValue:r.title,onChange:t=>u({title:t.target.value})})]}),(0,a.jsxs)("div",{className:p.default.formGroup,children:[(0,a.jsx)("label",{htmlFor:"content",children:"Content"}),(0,a.jsx)("textarea",{id:"content",name:"content",rows:8,className:p.default.textarea,defaultValue:r.content,onChange:t=>u({content:t.target.value})})]}),(0,a.jsxs)("div",{className:p.default.formGroup,children:[(0,a.jsx)("label",{htmlFor:"tag",children:"Tag"}),(0,a.jsx)("select",{id:"tag",name:"tag",className:p.default.select,defaultValue:r.tag,onChange:t=>u({tag:t.target.value}),children:h.map(t=>(0,a.jsx)("option",{value:t,children:t},t))})]}),(0,a.jsxs)("div",{className:p.default.actions,children:[(0,a.jsx)("button",{type:"button",className:p.default.cancelButton,onClick:()=>t.back(),children:"Cancel"}),(0,a.jsx)("button",{type:"submit",className:p.default.submitButton,disabled:d.isPending,children:d.isPending?"Creating...":"Create note"})]})]})}],85762)}]);
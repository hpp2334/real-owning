!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){e.exports=React},function(e,t){e.exports=MaterialUI},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(l=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var l,i,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(r[l]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);a&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t){e.exports=MaterialUI.SvgIcon},function(e,t){e.exports=ReactVirtualized},function(e,t,n){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function i(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],r=0;r<e.length;r++){var o=e[r],c=t.base?o[0]+t.base:o[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var m=i(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==m?(l[m].references++,l[m].updater(f)):l.push({identifier:u,updater:h(f,t),references:1}),a.push(u)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var u,m=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var o=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function d(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,g=0;function h(e,t){var n,a,r;if(t.singleton){var o=g++;n=p||(p=s(t)),a=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=s(t),a=d.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=i(n[a]);l[r].references--}for(var o=c(e,t),s=0;s<n.length;s++){var u=i(n[s]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}n=o}}}},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(14)).default)(r.default.createElement("path",{transform:"scale(1.2, 1.2)",d:"M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Settings");t.default=o},function(e,t){e.exports=reactDropzone},function(e,t,n){var a=n(5),r=n(11);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a)()(!1);r.push([e.i,"/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-doctag {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-type,\n.hljs-class .hljs-title {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #009926;\n}\n\n.hljs-symbol,\n.hljs-bullet {\n  color: #990073;\n}\n\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #0086b3;\n}\n\n.hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n",""]),t.default=r},function(e,t,n){var a=n(5),r=n(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a)()(!1);r.push([e.i,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n* {\n  margin: 0;\n}",""]),t.default=r},function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default.memo(o.default.forwardRef((function(t,n){return o.default.createElement(l.default,(0,r.default)({ref:n},t),e)})));0;return n.muiName=l.default.muiName,n};var r=a(n(15)),o=a(n(0)),l=a(n(3))},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){"use strict";n.r(t);n(10);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),i=(n(12),n(1)),c=n(8),s=n.n(c);class u{constructor(){this.st=new Set}register(e){this.st.add(e)}unregister(e){this.st.delete(e)}notify(...e){for(const t of this.st)t(...e)}get DEBUG_stSize(){return this.st.size}}const m={},f={},d=e=>"useStore:"+e,p=(e,t,n)=>{if(n){const n=localStorage.getItem(d(e));null!=n&&(t=JSON.parse(n))}e in m||(m[e]=t,f[e]=new u);const[r,o]=Object(a.useState)(m[e]),[l,i]=Object(a.useState)(0),c=Object(a.useCallback)(()=>{i(e=>e+1)},[i]);return Object(a.useEffect)(()=>{o(m[e])},[l,e]),Object(a.useEffect)(()=>(f[e].register(c),()=>{f[e].unregister(c)}),[e,c]),[r,t=>{m[e]!==t&&(m[e]=t,n&&localStorage.setItem(d(e),JSON.stringify(t)),f[e].notify())}]};var g=function(){const[,e]=p("cur-page","main");return r.a.createElement(i.AppBar,{position:"fixed"},r.a.createElement(i.Toolbar,null,r.a.createElement(i.Typography,{variant:"h6"},"Real Owning"),r.a.createElement(i.IconButton,{color:"default",onClick:()=>e("setting")},r.a.createElement(s.a,null))))};const h=Object(i.makeStyles)(e=>({formControl:{margin:e.spacing(3),display:"flex"},paper:{padding:"10px"},button:{margin:e.spacing(1,1,0,0)}})),v=["SZUOJ-Log","vjudge.net"],b=["Simple(C++)"];var y=function(e){const t=h(),[n]=Object(a.useState)(0),[o,l]=p("setting",{fileWork:"SZUOJ-Log",checkSchema:"Simple(C++)"},!0),[c,s]=Object(a.useState)(Object.assign({},o)),u=e=>t=>{const n=t.target.value;s(Object.assign(Object.assign({},c),{[e]:n}))};return r.a.createElement(i.Paper,{classes:{root:t.paper}},r.a.createElement("form",{onSubmit:t=>{t.preventDefault();const n=Object.assign({},c);l(n),e.onSaveSetting&&e.onSaveSetting(n)}},r.a.createElement(i.FormControl,{component:"fieldset",classes:{root:t.formControl}},r.a.createElement(i.FormLabel,{component:"legend"},"File Worker"),r.a.createElement(i.RadioGroup,{name:"fileWork",value:c.fileWork,onChange:u("fileWork")},v.map(e=>r.a.createElement(i.FormControlLabel,{key:e,value:e,control:r.a.createElement(i.Radio,null),label:e})))),r.a.createElement(i.FormControl,{component:"fieldset",classes:{root:t.formControl}},r.a.createElement(i.FormLabel,{component:"legend"},"Check Schema"),r.a.createElement(i.RadioGroup,{name:"checkSchema",value:c.checkSchema,onChange:u("checkSchema")},b.map(e=>r.a.createElement(i.FormControlLabel,{key:e,value:e,control:r.a.createElement(i.Radio,null),label:e})))),r.a.createElement(i.FormControl,{component:"fieldset",classes:{root:t.formControl}},r.a.createElement(i.Button,{type:"submit",variant:"outlined",color:"primary",disabled:!!n},"Save"))))},j=n(9),E=n(4);const{grey:S}=i.colors,k={},w=new function(){return new Worker(n.p+"bundle-cbaea0a42dcf2ab17f40.worker.js")},x=Object(i.makeStyles)(()=>({mainPage:{},greyPaper:{backgroundColor:S[50],margin:"1em 0",minHeight:"20em",display:"flex",alignItems:"center",justifyContent:"center"},loadingProgress:{position:"absolute",left:"50%",top:"50%",marginTop:"-0.7em",marginLeft:"-0.6em"},buttonWrapper:{position:"relative",display:"flex",flexGrow:1,justifyContent:"flex-end"},radioGroup:{flexDirection:"row"},pageDetail:{margin:"2em 0"},pageDetailBlock:{display:"flex",flexDirection:"row",margin:"1em 0",padding:"1em",alignItems:"flex-start"},pageDetailBlockRate:{marginRight:"1em"},codeBlock:{minWidth:"20em",flexBasis:"20em",flexGrow:1,marginLeft:"1em"},codeBlockCodeWrapper:{whiteSpace:"pre-wrap",marginTop:"0.5em",overflowY:"auto",overflow:"hidden",height:"30em",backgroundColor:"#eee",padding:"0.5em"},loading:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},pageFileWork:{display:"flex",height:"40em",alignItems:"center",justifyContent:"center",marginTop:"1em",boxShadow:"inset 0em 0em 1em #eee",borderRadius:".5em"},pageFileWorkInner:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},highLight:{minHeight:"30em"}}));function O(e){const t=x(),{onClickReset:n}=e;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:t.buttonWrapper},r.a.createElement(i.Button,{variant:"outlined",color:"default",onClick:n},"RESET")))}const C=({cb:e})=>{const t=x();return r.a.createElement("div",{className:t.codeBlock},r.a.createElement(i.Chip,{label:e.codeId,color:"primary"}),r.a.createElement("div",{className:t.codeBlockCodeWrapper},r.a.createElement("pre",{className:t.highLight},r.a.createElement("code",null,e.code))))};function R(e){const t=x(),{analysisResult:n}=e,o=Object(a.useMemo)(()=>Object.keys(n),[n]),[l,c]=Object(a.useState)("");function s({index:e,style:a}){const{a:o,b:c,rate:s}=n[l][e],u=e===n[l].length-1;return r.a.createElement("div",{key:l+"-"+e,style:a},r.a.createElement("div",{className:t.pageDetailBlock},r.a.createElement(i.Box,{position:"relative",display:"flex",className:t.pageDetailBlockRate},r.a.createElement(i.CircularProgress,{variant:"static",value:100*s,color:100*s>=90?"secondary":"primary"}),r.a.createElement(i.Box,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(i.Typography,{variant:"caption",component:"div",color:"textSecondary"},Math.round(100*s)+"%"))),r.a.createElement(C,{cb:o}),r.a.createElement(C,{cb:c})),!u&&r.a.createElement(i.Divider,{light:!0}))}return Object(a.useEffect)(()=>{var e;n!==k&&c(null!==(e=o[0])&&void 0!==e?e:"")},[n,o]),r.a.createElement("div",{className:t.pageDetail},r.a.createElement(i.RadioGroup,{name:"cur-problem-id",value:l,onChange:e=>c(e.target.value),classes:{root:t.radioGroup}},o.map(e=>r.a.createElement(i.FormControlLabel,{key:e,value:e,control:r.a.createElement(i.Radio,null),label:e}))),r.a.createElement(E.WindowScroller,null,({height:e,isScrolling:t,onChildScroll:a,scrollTop:o})=>r.a.createElement(E.AutoSizer,null,({width:i})=>{var c,u;return r.a.createElement(E.List,{autoHeight:!0,height:e,isScrolling:t,onScroll:a,rowCount:null!==(u=null===(c=n[l])||void 0===c?void 0:c.length)&&void 0!==u?u:0,rowHeight:601,rowRenderer:s,scrollTop:o,width:i})})))}function M({onFileSelect:e}){const t=Object(a.useCallback)(t=>{const[n]=t;n&&e(n)},[]),n=x(),{getRootProps:o,getInputProps:l,isDragActive:c}=Object(j.useDropzone)({onDrop:t});return r.a.createElement("div",{className:n.pageFileWork},r.a.createElement("div",Object.assign({},o(),{className:n.pageFileWorkInner}),r.a.createElement(i.Typography,{variant:"h6",component:"div",color:"textSecondary"},c?"Drop the file to work":"You can drag a file to here, or click here to select a file to work"),r.a.createElement("input",Object.assign({},l()))))}function N({processRate:e,curStage:t}){const n=x();return r.a.createElement("div",{className:n.loading},r.a.createElement(i.Fade,{in:"working"===t},r.a.createElement(i.Box,{position:"relative",display:"inline-flex"},r.a.createElement(i.CircularProgress,{variant:"static",value:100*e,size:150}),r.a.createElement(i.Box,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(i.Typography,{variant:"h4",component:"div",color:"textSecondary"},Math.round(100*e)+"%")))))}var B=function(){const[e,t]=Object(a.useState)(),[n]=p("setting",{fileWork:"SZUOJ-Log",checkSchema:"Simple(C++)"},!0),[o,l]=Object(a.useState)(k),[i,c]=Object(a.useState)("wait-for-file-selection"),[s,u]=Object(a.useState)(0),[,m]=p("global-message",{message:""}),f=()=>{c("wait-for-file-selection"),t(void 0),u(0)},d=x();return Object(a.useEffect)(()=>{if(e){c("working");const t=new FileReader;t.readAsArrayBuffer(e),t.onload=function(e){e.target&&(w.postMessage([e.target.result,n]),w.onmessage=function(e){const{err:t,data:n,evName:a}=e.data;if("process-rate"!==a){if("done"===a)l(n);else if("error"===a)return m({message:t}),void f();c("done")}else u(n)})}}},[e,n]),r.a.createElement("div",{className:d.mainPage},"wait-for-file-selection"===i&&r.a.createElement(M,{onFileSelect:t}),"working"===i&&r.a.createElement(N,{processRate:s,curStage:i}),"done"===i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onClickReset:f,curStage:i}),r.a.createElement(R,{analysisResult:o})))};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var I=n(3),T=n.n(I);var L,D,P=(L=r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),(D=r.a.memo(r.a.forwardRef((function(e,t){return r.a.createElement(T.a,F({ref:t},e),L)})))).muiName=T.a.muiName,D);function W(){const[e,t]=p("global-message",{message:""}),[n,o]=r.a.useState(!1);Object(a.useEffect)(()=>{e.message&&o(!0)},[e]);const l=(e,n)=>{"clickaway"!==n&&(o(!1),t({message:""}))};return r.a.createElement(i.Snackbar,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:6e3,onClose:l,message:e.message,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(i.IconButton,{size:"small","aria-label":"close",color:"inherit",onClick:l},r.a.createElement(P,{fontSize:"small"})))})}const{green:_}=i.colors,z=Object(i.createMuiTheme)({palette:{primary:{main:_[600]},secondary:{main:"#f44336"}}});var U=function(){const[e,t]=p("cur-page","main");return r.a.createElement("div",{className:"App"},r.a.createElement(i.ThemeProvider,{theme:z},r.a.createElement(W,null),r.a.createElement(g,null),r.a.createElement(i.Container,{maxWidth:"lg",style:{marginTop:"100px"}},"setting"===e&&r.a.createElement(y,{onSaveSetting:()=>t("main")}),"main"===e&&r.a.createElement(B,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}]);
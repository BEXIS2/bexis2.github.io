function a(t){const n=typeof t;return t!=null&&(n=="object"||n=="function")}function i(t,n,e){return e===!0||e===""?t?"col":`col-${n}`:e==="auto"?t?"col-auto":`col-${n}-auto`:t?`col-${e}`:`col-${n}-${e}`}function o(t){let n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))n=t.map(o).filter(Boolean).join(" ");else for(let e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function l(...t){return t.map(o).filter(Boolean).join(" ")}function f(t){if(!t)return 0;let{transitionDuration:n,transitionDelay:e}=window.getComputedStyle(t);const r=Number.parseFloat(n),s=Number.parseFloat(e);return!r&&!s?0:(n=n.split(",")[0],e=e.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(e))*1e3)}export{i as a,l as c,f as g,a as i};

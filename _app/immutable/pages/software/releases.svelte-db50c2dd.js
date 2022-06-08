import{S as te,i as le,s as se,e as p,t as P,k as I,c as $,a as w,h as j,d as u,m as R,b,g as h,_ as g,j as z,w as q,l as B,x as H,y as S,q as k,o as A,B as N,a1 as ae,$ as U,f as re,a4 as W,a0 as fe,a5 as ie,E as F,n as ne,p as oe,C as ue,z as ce,A as _e}from"../../chunks/index-f4bc5dab.js";/* empty css                                                           */import{T as he,a as me}from"../../chunks/TabPane-79d05d1d.js";import{b as pe}from"../../chunks/paths-396f020f.js";import{S as $e}from"../../chunks/SvelteMarkdown-e860d6ff.js";import{R as be,C as Q}from"../../chunks/Row-29e0025b.js";import"../../chunks/index-d30ae72a.js";import"../../chunks/utils-f9eb197c.js";import"../../chunks/NavItem-10d38098.js";function Y(f,e,s){const t=f.slice();return t[7]=e[s],t}function ge(f){let e,s,t,l,n,a=f[2].login+"",r,i;return{c(){e=p("h3"),s=p("img"),l=I(),n=p("a"),r=P(a),this.h()},l(_){e=$(_,"H3",{});var c=w(e);s=$(c,"IMG",{src:!0,style:!0}),l=R(c),n=$(c,"A",{href:!0});var E=w(n);r=j(E,a),E.forEach(u),c.forEach(u),this.h()},h(){U(s.src,t=f[2].avatar_url)||b(s,"src",t),re(s,"width","20px"),b(n,"href",i=f[2].html_url)},m(_,c){h(_,e,c),g(e,s),g(e,l),g(e,n),g(n,r)},p(_,c){c&4&&!U(s.src,t=_[2].avatar_url)&&b(s,"src",t),c&4&&a!==(a=_[2].login+"")&&z(r,a),c&4&&i!==(i=_[2].html_url)&&b(n,"href",i)},d(_){_&&u(e)}}}function de(f){let e,s,t,l,n;return{c(){e=p("a"),s=p("img"),l=I(),n=P(f[3]),this.h()},l(a){e=$(a,"A",{href:!0,target:!0});var r=w(e);s=$(r,"IMG",{src:!0,alt:!0}),l=R(r),n=j(r,f[3]),r.forEach(u),this.h()},h(){U(s.src,t=pe+"/icons/label_black_24dp.svg")||b(s,"src",t),b(s,"alt","label"),b(e,"href",f[4]),b(e,"target","_blank")},m(a,r){h(a,e,r),g(e,s),g(e,l),g(e,n)},p(a,r){r&8&&z(n,a[3]),r&16&&b(e,"href",a[4])},d(a){a&&u(e)}}}function ve(f){let e,s;return{c(){e=p("div"),s=P(f[5]),this.h()},l(t){e=$(t,"DIV",{class:!0});var l=w(e);s=j(l,f[5]),l.forEach(u),this.h()},h(){b(e,"class","text-end")},m(t,l){h(t,e,l),g(e,s)},p(t,l){l&32&&z(s,t[5])},d(t){t&&u(e)}}}function ke(f){let e,s,t,l,n,a;return e=new Q({props:{xs:"4",$$slots:{default:[ge]},$$scope:{ctx:f}}}),t=new Q({props:{xs:"2",$$slots:{default:[de]},$$scope:{ctx:f}}}),n=new Q({props:{xs:"6",$$slots:{default:[ve]},$$scope:{ctx:f}}}),{c(){q(e.$$.fragment),s=I(),q(t.$$.fragment),l=I(),q(n.$$.fragment)},l(r){H(e.$$.fragment,r),s=R(r),H(t.$$.fragment,r),l=R(r),H(n.$$.fragment,r)},m(r,i){S(e,r,i),h(r,s,i),S(t,r,i),h(r,l,i),S(n,r,i),a=!0},p(r,i){const _={};i&1028&&(_.$$scope={dirty:i,ctx:r}),e.$set(_);const c={};i&1048&&(c.$$scope={dirty:i,ctx:r}),t.$set(c);const E={};i&1056&&(E.$$scope={dirty:i,ctx:r}),n.$set(E)},i(r){a||(k(e.$$.fragment,r),k(t.$$.fragment,r),k(n.$$.fragment,r),a=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),A(n.$$.fragment,r),a=!1},d(r){N(e,r),r&&u(s),N(t,r),r&&u(l),N(n,r)}}}function Z(f){let e,s,t,l=f[7].name+"",n,a,r;return{c(){e=p("div"),s=p("h3"),t=p("a"),n=P(l),r=I(),this.h()},l(i){e=$(i,"DIV",{});var _=w(e);s=$(_,"H3",{});var c=w(s);t=$(c,"A",{href:!0});var E=w(t);n=j(E,l),E.forEach(u),c.forEach(u),r=R(_),_.forEach(u),this.h()},h(){b(t,"href",a=f[7].browser_download_url)},m(i,_){h(i,e,_),g(e,s),g(s,t),g(t,n),g(e,r)},p(i,_){_&64&&l!==(l=i[7].name+"")&&z(n,l),_&64&&a!==(a=i[7].browser_download_url)&&b(t,"href",a)},d(i){i&&u(e)}}}function we(f){let e,s,t,l,n,a,r,i,_,c,E,J,K,D,O,L,M,T;n=new be({props:{$$slots:{default:[ke]},$$scope:{ctx:f}}}),c=new $e({props:{source:f[1]}});let V=f[6],d=[];for(let o=0;o<V.length;o+=1)d[o]=Z(Y(f,V,o));return{c(){e=p("h1"),s=p("a"),t=P(f[0]),l=I(),q(n.$$.fragment),a=I(),r=p("hr"),i=I(),_=p("p"),q(c.$$.fragment),E=I(),J=p("hr"),K=I(),D=p("h2"),O=P("Assets"),L=I();for(let o=0;o<d.length;o+=1)d[o].c();M=B(),this.h()},l(o){e=$(o,"H1",{});var m=w(e);s=$(m,"A",{href:!0,target:!0});var C=w(s);t=j(C,f[0]),C.forEach(u),m.forEach(u),l=R(o),H(n.$$.fragment,o),a=R(o),r=$(o,"HR",{}),i=R(o),_=$(o,"P",{});var X=w(_);H(c.$$.fragment,X),X.forEach(u),E=R(o),J=$(o,"HR",{}),K=R(o),D=$(o,"H2",{class:!0});var v=w(D);O=j(v,"Assets"),v.forEach(u),L=R(o);for(let G=0;G<d.length;G+=1)d[G].l(o);M=B(),this.h()},h(){b(s,"href",f[4]),b(s,"target","_blank"),b(D,"class","svelte-1w5i5q1")},m(o,m){h(o,e,m),g(e,s),g(s,t),h(o,l,m),S(n,o,m),h(o,a,m),h(o,r,m),h(o,i,m),h(o,_,m),S(c,_,null),h(o,E,m),h(o,J,m),h(o,K,m),h(o,D,m),g(D,O),h(o,L,m);for(let C=0;C<d.length;C+=1)d[C].m(o,m);h(o,M,m),T=!0},p(o,[m]){(!T||m&1)&&z(t,o[0]),(!T||m&16)&&b(s,"href",o[4]);const C={};m&1084&&(C.$$scope={dirty:m,ctx:o}),n.$set(C);const X={};if(m&2&&(X.source=o[1]),c.$set(X),m&64){V=o[6];let v;for(v=0;v<V.length;v+=1){const G=Y(o,V,v);d[v]?d[v].p(G,m):(d[v]=Z(G),d[v].c(),d[v].m(M.parentNode,M))}for(;v<d.length;v+=1)d[v].d(1);d.length=V.length}},i(o){T||(k(n.$$.fragment,o),k(c.$$.fragment,o),T=!0)},o(o){A(n.$$.fragment,o),A(c.$$.fragment,o),T=!1},d(o){o&&u(e),o&&u(l),N(n,o),o&&u(a),o&&u(r),o&&u(i),o&&u(_),N(c),o&&u(E),o&&u(J),o&&u(K),o&&u(D),o&&u(L),ae(d,o),o&&u(M)}}}function Ee(f,e,s){let{name:t}=e,{body:l}=e,{author:n}=e,{tag_name:a}=e,{html_url:r}=e,{published_at:i}=e,{assets:_}=e;return f.$$set=c=>{"name"in c&&s(0,t=c.name),"body"in c&&s(1,l=c.body),"author"in c&&s(2,n=c.author),"tag_name"in c&&s(3,a=c.tag_name),"html_url"in c&&s(4,r=c.html_url),"published_at"in c&&s(5,i=c.published_at),"assets"in c&&s(6,_=c.assets)},[t,l,n,a,r,i,_]}class Ie extends te{constructor(e){super(),le(this,e,Ee,we,se,{name:0,body:1,author:2,tag_name:3,html_url:4,published_at:5,assets:6})}}function y(f,e,s){const t=f.slice();return t[2]=e[s],t}function Re(f){let e,s=f[5].message+"",t;return{c(){e=p("p"),t=P(s),this.h()},l(l){e=$(l,"P",{style:!0});var n=w(e);t=j(n,s),n.forEach(u),this.h()},h(){re(e,"color","red")},m(l,n){h(l,e,n),g(e,t)},p(l,n){n&1&&s!==(s=l[5].message+"")&&z(t,s)},i:F,o:F,d(l){l&&u(e)}}}function Ae(f){let e,s,t;return s=new he({props:{vertical:!0,pills:!0,$$slots:{default:[qe]},$$scope:{ctx:f}}}),{c(){e=p("div"),q(s.$$.fragment),this.h()},l(l){e=$(l,"DIV",{class:!0});var n=w(e);H(s.$$.fragment,n),n.forEach(u),this.h()},h(){b(e,"class","content")},m(l,n){h(l,e,n),S(s,e,null),t=!0},p(l,n){const a={};n&65&&(a.$$scope={dirty:n,ctx:l}),s.$set(a)},i(l){t||(k(s.$$.fragment,l),t=!0)},o(l){A(s.$$.fragment,l),t=!1},d(l){l&&u(e),N(s)}}}function x(f){let e,s,t=f[1],l=[];for(let a=0;a<t.length;a+=1)l[a]=ee(y(f,t,a));const n=a=>A(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=B()},l(a){for(let r=0;r<l.length;r+=1)l[r].l(a);e=B()},m(a,r){for(let i=0;i<l.length;i+=1)l[i].m(a,r);h(a,e,r),s=!0},p(a,r){if(r&1){t=a[1];let i;for(i=0;i<t.length;i+=1){const _=y(a,t,i);l[i]?(l[i].p(_,r),k(l[i],1)):(l[i]=ee(_),l[i].c(),k(l[i],1),l[i].m(e.parentNode,e))}for(ne(),i=t.length;i<l.length;i+=1)n(i);oe()}},i(a){if(!s){for(let r=0;r<t.length;r+=1)k(l[r]);s=!0}},o(a){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)A(l[r]);s=!1},d(a){ae(l,a),a&&u(e)}}}function Ce(f){let e,s,t;const l=[f[2]];let n={};for(let a=0;a<l.length;a+=1)n=ue(n,l[a]);return e=new Ie({props:n}),{c(){q(e.$$.fragment),s=I()},l(a){H(e.$$.fragment,a),s=R(a)},m(a,r){S(e,a,r),h(a,s,r),t=!0},p(a,r){const i=r&1?ce(l,[_e(a[2])]):{};e.$set(i)},i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){A(e.$$.fragment,a),t=!1},d(a){N(e,a),a&&u(s)}}}function ee(f){let e,s;return e=new me({props:{tabId:f[2].id,tab:f[2].tag_name,$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p(t,l){const n={};l&1&&(n.tabId=t[2].id),l&1&&(n.tab=t[2].tag_name),l&65&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function qe(f){let e,s,t=f[1]&&x(f);return{c(){t&&t.c(),e=B()},l(l){t&&t.l(l),e=B()},m(l,n){t&&t.m(l,n),h(l,e,n),s=!0},p(l,n){l[1]?t?(t.p(l,n),n&1&&k(t,1)):(t=x(l),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(ne(),A(t,1,1,()=>{t=null}),oe())},i(l){s||(k(t),s=!0)},o(l){A(t),s=!1},d(l){t&&t.d(l),l&&u(e)}}}function He(f){let e,s;return{c(){e=p("p"),s=P("...waiting")},l(t){e=$(t,"P",{});var l=w(e);s=j(l,"...waiting"),l.forEach(u)},m(t,l){h(t,e,l),g(e,s)},p:F,i:F,o:F,d(t){t&&u(e)}}}function Se(f){let e,s,t,l,n={ctx:f,current:null,token:null,hasCatch:!0,pending:He,then:Ae,catch:Re,value:1,error:5,blocks:[,,,]};return W(t=f[0],n),{c(){e=I(),s=B(),n.block.c(),this.h()},l(a){fe('[data-svelte="svelte-1cnrxsu"]',document.head).forEach(u),e=R(a),s=B(),n.block.l(a),this.h()},h(){document.title="Releases"},m(a,r){h(a,e,r),h(a,s,r),n.block.m(a,n.anchor=r),n.mount=()=>s.parentNode,n.anchor=s,l=!0},p(a,[r]){f=a,n.ctx=f,r&1&&t!==(t=f[0])&&W(t,n)||ie(n,f,r)},i(a){l||(k(n.block),l=!0)},o(a){for(let r=0;r<3;r+=1){const i=n.blocks[r];A(i)}l=!1},d(a){a&&u(e),a&&u(s),n.block.d(a),n.token=null,n=null}}}async function Xe(){const e=await fetch("https://api.github.com/repos/BEXIS2/Core/releases");return console.log("load releases"),{status:e.status,props:{bexis2releases:e.ok&&await e.json()}}}function Ne(f,e,s){let{bexis2releases:t=""}=e;return f.$$set=l=>{"bexis2releases"in l&&s(0,t=l.bexis2releases)},[t]}class Fe extends te{constructor(e){super(),le(this,e,Ne,Se,se,{bexis2releases:0})}}export{Fe as default,Xe as load};

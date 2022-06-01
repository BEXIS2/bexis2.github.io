import{S as ne,i as le,s as ce,k as h,e as v,t as y,w as E,a1 as ue,d as c,m as g,c as k,a as I,h as L,x as A,g as d,_ as F,y as z,q as p,o as m,B,l as w,E as x,n as Z,p as ee,a2 as te,C as oe,z as re,A as ae}from"../../chunks/index-9cba69f2.js";import{R as V,C as se}from"../../chunks/Row-93e4c129.js";import{C as ie}from"../../chunks/card-74010dc2.js";import"../../chunks/paths-396f020f.js";var N=[{title:"Search Data",description:"Find datasets by keyword (incl. autocomplete) or use facets, filtering, sorting to quickly retrieve the dataset you need.",icon:"search_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Upload Data",description:"Upload your tabular data or any other type of data to BEXIS 2 and describe it with metadata.",icon:"file_upload_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Web API Access",description:"Beside downloading a dataset from the portal, you may also retrieve data stored in BEXIS directly with a script or from your application (e.g. R) using API calls.",icon:"bookmarks_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Dataset Permissions",description:"Specify fine grained data permissions on who can view, access, or update your dataset.",icon:"visibility_off_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Re-use Data Structures",description:"Keep track of the evolution of your dataset (i.e. who did what and when) and return to any previous version if needed.",icon:"bookmarks_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Dataset Versioning",description:"Keep track of the evolution of your dataset (i.e. who did what and when) and return to any previous version if needed.",icon:"bookmarks_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Data Publication",description:"Publish your dataset with a renown data repository or data journal (e.g. GFBio, Biodiversity Data Journal) and make it a citeable data publication identified by a DOI.",icon:"bookmarks_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Single Sign-on",description:"Use your existing credentials of your organisation to log on to BEXIS. No need to remember another username and password.",icon:"bookmarks_FILL0_wght400_GRAD0_opsz48.svg"}],H=[{title:"Customizable Search Interface",description:"Customize the Search Interface, e.g. select the metadata elements to be indexed and shown, specify the facets, and determine the representation of search results.",icon:"search_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Use Multiple Metadata Schemas",description:"Import multiple metadata schemas (XSD) relevant to your user community and map them to system types. For each schema a custom form will be generated by BEXIS 2.",icon:"file_upload_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Notification Framework",description:"BEXIS 2 comes with a notification framework to send out custom messages (e.g. via email) to users on specific actions.",icon:"bookmarks_FILL0_wght400_GRAD0_opsz48.svg"},{title:"System Feature Permission",description:"Specify fine grained permissions on system features and tools for individual users or groups.",icon:"shield_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Extensible Architecture",description:"BEXIS 2 follows a modular design and can be integrated with external applications and services or extended with custom modules",icon:"visibility_off_FILL0_wght400_GRAD0_opsz48.svg"},{title:"Party Package",description:"Manage information about organizations, institutes, projects, people, (or any custom type) and their relationships in one place and re-use this information throughout the system.",icon:"bookmarks_FILL0_wght400_GRAD0_opsz48.svg"}];function W(u,o,s){const r=u.slice();return r[0]=o[s],r}function Q(u,o,s){const r=u.slice();return r[0]=o[s],r}function fe(u){let o,s;return{c(){o=v("b"),s=y("not loaded")},l(r){o=k(r,"B",{});var t=I(o);s=L(t,"not loaded"),t.forEach(c)},m(r,t){d(r,o,t),F(o,s)},p:x,i:x,o:x,d(r){r&&c(o)}}}function _e(u){let o,s,r=N,t=[];for(let e=0;e<r.length;e+=1)t[e]=T(Q(u,r,e));const l=e=>m(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();o=w()},l(e){for(let i=0;i<t.length;i+=1)t[i].l(e);o=w()},m(e,i){for(let a=0;a<t.length;a+=1)t[a].m(e,i);d(e,o,i),s=!0},p(e,i){if(i&0){r=N;let a;for(a=0;a<r.length;a+=1){const f=Q(e,r,a);t[a]?(t[a].p(f,i),p(t[a],1)):(t[a]=T(f),t[a].c(),p(t[a],1),t[a].m(o.parentNode,o))}for(Z(),a=r.length;a<t.length;a+=1)l(a);ee()}},i(e){if(!s){for(let i=0;i<r.length;i+=1)p(t[i]);s=!0}},o(e){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)m(t[i]);s=!1},d(e){te(t,e),e&&c(o)}}}function de(u){let o,s,r;const t=[u[0]];let l={};for(let e=0;e<t.length;e+=1)l=oe(l,t[e]);return o=new ie({props:l}),{c(){E(o.$$.fragment),s=h()},l(e){A(o.$$.fragment,e),s=g(e)},m(e,i){z(o,e,i),d(e,s,i),r=!0},p(e,i){const a=i&0?re(t,[ae(e[0])]):{};o.$set(a)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){m(o.$$.fragment,e),r=!1},d(e){B(o,e),e&&c(s)}}}function T(u){let o,s;return o=new se({props:{xs:"4",$$slots:{default:[de]},$$scope:{ctx:u}}}),{c(){E(o.$$.fragment)},l(r){A(o.$$.fragment,r)},m(r,t){z(o,r,t),s=!0},p(r,t){const l={};t&32&&(l.$$scope={dirty:t,ctx:r}),o.$set(l)},i(r){s||(p(o.$$.fragment,r),s=!0)},o(r){m(o.$$.fragment,r),s=!1},d(r){B(o,r)}}}function pe(u){let o,s,r,t;const l=[_e,fe],e=[];function i(a,f){return N?0:1}return o=i(),s=e[o]=l[o](u),{c(){s.c(),r=w()},l(a){s.l(a),r=w()},m(a,f){e[o].m(a,f),d(a,r,f),t=!0},p(a,f){s.p(a,f)},i(a){t||(p(s),t=!0)},o(a){m(s),t=!1},d(a){e[o].d(a),a&&c(r)}}}function me(u){let o,s;return{c(){o=v("b"),s=y("not loaded")},l(r){o=k(r,"B",{});var t=I(o);s=L(t,"not loaded"),t.forEach(c)},m(r,t){d(r,o,t),F(o,s)},p:x,i:x,o:x,d(r){r&&c(o)}}}function he(u){let o,s,r=H,t=[];for(let e=0;e<r.length;e+=1)t[e]=Y(W(u,r,e));const l=e=>m(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();o=w()},l(e){for(let i=0;i<t.length;i+=1)t[i].l(e);o=w()},m(e,i){for(let a=0;a<t.length;a+=1)t[a].m(e,i);d(e,o,i),s=!0},p(e,i){if(i&0){r=H;let a;for(a=0;a<r.length;a+=1){const f=W(e,r,a);t[a]?(t[a].p(f,i),p(t[a],1)):(t[a]=Y(f),t[a].c(),p(t[a],1),t[a].m(o.parentNode,o))}for(Z(),a=r.length;a<t.length;a+=1)l(a);ee()}},i(e){if(!s){for(let i=0;i<r.length;i+=1)p(t[i]);s=!0}},o(e){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)m(t[i]);s=!1},d(e){te(t,e),e&&c(o)}}}function ge(u){let o,s,r;const t=[u[0]];let l={};for(let e=0;e<t.length;e+=1)l=oe(l,t[e]);return o=new ie({props:l}),{c(){E(o.$$.fragment),s=h()},l(e){A(o.$$.fragment,e),s=g(e)},m(e,i){z(o,e,i),d(e,s,i),r=!0},p(e,i){const a=i&0?re(t,[ae(e[0])]):{};o.$set(a)},i(e){r||(p(o.$$.fragment,e),r=!0)},o(e){m(o.$$.fragment,e),r=!1},d(e){B(o,e),e&&c(s)}}}function Y(u){let o,s;return o=new se({props:{xs:"4",$$slots:{default:[ge]},$$scope:{ctx:u}}}),{c(){E(o.$$.fragment)},l(r){A(o.$$.fragment,r)},m(r,t){z(o,r,t),s=!0},p(r,t){const l={};t&32&&(l.$$scope={dirty:t,ctx:r}),o.$set(l)},i(r){s||(p(o.$$.fragment,r),s=!0)},o(r){m(o.$$.fragment,r),s=!1},d(r){B(o,r)}}}function $e(u){let o,s,r,t;const l=[he,me],e=[];function i(a,f){return H?0:1}return o=i(),s=e[o]=l[o](u),{c(){s.c(),r=w()},l(a){s.l(a),r=w()},m(a,f){e[o].m(a,f),d(a,r,f),t=!0},p(a,f){s.p(a,f)},i(a){t||(p(s),t=!0)},o(a){m(s),t=!1},d(a){e[o].d(a),a&&c(r)}}}function be(u){let o,s,r,t,l,e,i,a,f,P,D,j,X,$,C,S,M,U,b,q;return $=new V({props:{$$slots:{default:[pe]},$$scope:{ctx:u}}}),b=new V({props:{$$slots:{default:[$e]},$$scope:{ctx:u}}}),{c(){o=h(),s=v("h2"),r=y("Features"),t=h(),l=v("p"),e=y(`BEXIS 2 is a free and open source software (LGPL 3.0) supporting researchers in managing their data throughout the entire data life cycle from data collection, 
			documentation, processing, analyzing, to sharing and publishing research data.`),i=h(),a=v("p"),f=y(`BEXIS 2 is a modular scalable platform suitable for working groups and collaborative project consortia with up to several hundred researchers. 
			It has been designed to meet the requirements of researchers in the field of biodiversity, but it is generic enough to serve other communities as well.`),P=h(),D=v("h2"),j=y("End User Features"),X=h(),E($.$$.fragment),C=h(),S=v("h2"),M=y("System Admin / Data Manager Features"),U=h(),E(b.$$.fragment),this.h()},l(n){ue('[data-svelte="svelte-t02ist"]',document.head).forEach(c),o=g(n),s=k(n,"H2",{});var R=I(s);r=L(R,"Features"),R.forEach(c),t=g(n),l=k(n,"P",{});var G=I(l);e=L(G,`BEXIS 2 is a free and open source software (LGPL 3.0) supporting researchers in managing their data throughout the entire data life cycle from data collection, 
			documentation, processing, analyzing, to sharing and publishing research data.`),G.forEach(c),i=g(n),a=k(n,"P",{});var J=I(a);f=L(J,`BEXIS 2 is a modular scalable platform suitable for working groups and collaborative project consortia with up to several hundred researchers. 
			It has been designed to meet the requirements of researchers in the field of biodiversity, but it is generic enough to serve other communities as well.`),J.forEach(c),P=g(n),D=k(n,"H2",{});var K=I(D);j=L(K,"End User Features"),K.forEach(c),X=g(n),A($.$$.fragment,n),C=g(n),S=k(n,"H2",{});var O=I(S);M=L(O,"System Admin / Data Manager Features"),O.forEach(c),U=g(n),A(b.$$.fragment,n),this.h()},h(){document.title="Features"},m(n,_){d(n,o,_),d(n,s,_),F(s,r),d(n,t,_),d(n,l,_),F(l,e),d(n,i,_),d(n,a,_),F(a,f),d(n,P,_),d(n,D,_),F(D,j),d(n,X,_),z($,n,_),d(n,C,_),d(n,S,_),F(S,M),d(n,U,_),z(b,n,_),q=!0},p(n,[_]){const R={};_&32&&(R.$$scope={dirty:_,ctx:n}),$.$set(R);const G={};_&32&&(G.$$scope={dirty:_,ctx:n}),b.$set(G)},i(n){q||(p($.$$.fragment,n),p(b.$$.fragment,n),q=!0)},o(n){m($.$$.fragment,n),m(b.$$.fragment,n),q=!1},d(n){n&&c(o),n&&c(s),n&&c(t),n&&c(l),n&&c(i),n&&c(a),n&&c(P),n&&c(D),n&&c(X),B($,n),n&&c(C),n&&c(S),n&&c(U),B(b,n)}}}class Ie extends ne{constructor(o){super(),le(this,o,null,be,ce,{})}}export{Ie as default};

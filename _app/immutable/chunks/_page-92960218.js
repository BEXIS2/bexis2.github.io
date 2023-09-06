var ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ut(j){return j&&j.__esModule&&Object.prototype.hasOwnProperty.call(j,"default")?j.default:j}var oe={exports:{}};(function(j,le){(function(F,N){N(le)})(ht,function(F){var N=function(){function D(r,S){function e(){this.constructor=r}e.prototype=S.prototype,r.prototype=new e}function C(r,S,e,b){this.message=r,this.expected=S,this.found=e,this.location=b,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,C)}D(C,Error),C.buildMessage=function(r,S){var e={literal:function(m){return'"'+A(m.text)+'"'},class:function(m){var y="",w;for(w=0;w<m.parts.length;w++)y+=m.parts[w]instanceof Array?B(m.parts[w][0])+"-"+B(m.parts[w][1]):B(m.parts[w]);return"["+(m.inverted?"^":"")+y+"]"},any:function(m){return"any character"},end:function(m){return"end of input"},other:function(m){return m.description}};function b(m){return m.charCodeAt(0).toString(16).toUpperCase()}function A(m){return m.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(y){return"\\x0"+b(y)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(y){return"\\x"+b(y)})}function B(m){return m.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(y){return"\\x0"+b(y)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(y){return"\\x"+b(y)})}function O(m){return e[m.type](m)}function ae(m){var y=new Array(m.length),w,z;for(w=0;w<m.length;w++)y[w]=O(m[w]);if(y.sort(),y.length>0){for(w=1,z=1;w<y.length;w++)y[w-1]!==y[w]&&(y[z]=y[w],z++);y.length=z}switch(y.length){case 1:return y[0];case 2:return y[0]+" or "+y[1];default:return y.slice(0,-1).join(", ")+", or "+y[y.length-1]}}function te(m){return m?'"'+A(m)+'"':"end of input"}return"Expected "+ae(r)+" but "+te(S)+" found."};function ee(r,S){S=S!==void 0?S:{};var e={},b={START:Xe},A=Xe,B=function(t){return t.reduce((i,s)=>{let n=i[i.length-1];return n&&n.itemtype==="comment"&&s.itemtype==="comment"?n.comment+=s.comment:i.push(s),i},[])},O=E("preamble, entry, string, or comment"),ae=function(t){return{itemtype:"preamble",...t}},te=function(t){return{itemtype:"string",...t}},m=function(t){return{itemtype:"entry",...t}},y=function(t){return{itemtype:"comment",comment:t}},w=E("preamble"),z="@preamble",Ye=v("@preamble",!0),K="(",X=v("(",!1),W=")",q=v(")",!1),ea=function(t){return{enclosed:"parentheses",...t}},R="{",G=v("{",!1),M="}",k=v("}",!1),aa=function(t){return{enclosed:"braces",...t}},ta=function(t){return{enclosed:"parentheses",value:t,datatype:"unenclosed",raw:t}},na=function(t){return{enclosed:"braces",value:t,datatype:"unenclosed",raw:t}},ia=function(t){return t},sa=E("string"),ra="@string",oa=v("@string",!0),ne=function(t){return t},la=E("comment"),de=/^[^@]/,fe=T(["@"],!0,!1),he="@",ue=v("@",!1),pe="comment",me=v("comment",!0),ge=/^[^\n\r]/,ye=T([`
`,"\r"],!0,!1),be=/^[^A-Za-z0-9]/,ve=T([["A","Z"],["a","z"],["0","9"]],!0,!1),ca=/^[^{(]/,da=T(["{","("],!0,!1),fa=E("entry"),ha="preamble",ua=v("preamble",!0),pa="string",ma=v("string",!0),ga=function(t,i){return{enclosed:"braces",...i}},ya=function(t,i){return{enclosed:"parentheses",...i}},ba=function(t,i){return{type:t.toLowerCase(),...i,raw:P()}},_=",",U=v(",",!1),va=function(t){return t},we=function(t,i,s){return s},wa=function(t,i,s){return[i,...s]},Sa=function(t,i){return{key:t,fields:i||[]}},Ea=E("assignment"),xa="=",Aa=v("=",!1),Ia=function(t,i){return i},Ba=function(t,i){return{name:t,...i||{value:null,datatype:"null",raw:""}}},Da=E("expression"),Se="#",Ee=v("#",!1),xe=function(t,i){return i},Ca=function(t,i){return i.length>0?{value:[t,...i],datatype:"concatinate",raw:P()}:t},$a=E("literal"),Ae='"',Ie=v('"',!1),Ta=function(t){return{value:t,datatype:"quoted",raw:P()}},Ra=function(t){return{value:t,datatype:"braced",raw:P()}},Ga=function(t){return{value:t,datatype:"number",raw:P()}},Ma=function(t){return{value:t,datatype:"identifier",raw:P()}},ka=E("identifier"),Be=/^[^=#,{}()[\] \t\n\r]/,De=T(["=","#",",","{","}","(",")","[","]"," ","	",`
`,"\r"],!0,!1),ja=E("key for assignment"),Ce=/^[# ]/,$e=T(["#"," "],!1,!1),Fa=E("number"),Te=/^[0-9]/,Re=T([["0","9"]],!1,!1),Pa=function(){return ft(P())},La=E("braced value"),Ge=/^[^{}]/,Me=T(["{","}"],!0,!1),za=E("quoted string"),ke=/^[^"{]/,je=T(['"',"{"],!0,!1),Fe="\\\\",Na=v("\\\\",!1),Pe="\\{",Oa=v("\\{",!1),Le="\\}",Ja=v("\\}",!1),ze='\\"',Ha=v('\\"',!1),Ka=E("whitespace"),Ne=/^[ \t\n\r]/,Oe=T([" ","	",`
`,"\r"],!1,!1),Xa=E("end of line"),Wa=`
`,qa=v(`
`,!1),Je=`\r
`,_a=v(`\r
`,!1),Ua="\r",Qa=v("\r",!1),Va="\u2028",Za=v("\u2028",!1),Ya="\u2029",et=v("\u2029",!1),at=tt(),a=0,u=0,Q=[{line:1,column:1}],$=0,ie=[],o=0,V;if("startRule"in S){if(!(S.startRule in b))throw new Error(`Can't start parsing from rule "`+S.startRule+'".');A=b[S.startRule]}function P(){return r.substring(u,a)}function v(t,i){return{type:"literal",text:t,ignoreCase:i}}function T(t,i,s){return{type:"class",parts:t,inverted:i,ignoreCase:s}}function tt(){return{type:"any"}}function nt(){return{type:"end"}}function E(t){return{type:"other",description:t}}function He(t){var i=Q[t],s;if(i)return i;for(s=t-1;!Q[s];)s--;for(i=Q[s],i={line:i.line,column:i.column};s<t;)r.charCodeAt(s)===10?(i.line++,i.column=1):i.column++,s++;return Q[t]=i,i}function Ke(t,i){var s=He(t),n=He(i);return{start:{offset:t,line:s.line,column:s.column},end:{offset:i,line:n.line,column:n.column}}}function f(t){a<$||(a>$&&($=a,ie=[]),ie.push(t))}function it(t,i,s){return new C(C.buildMessage(t,i),t,i,s)}function Xe(){var t,i,s;for(t=a,i=[],s=We();s!==e;)i.push(s),s=We();return i!==e&&(u=t,i=B(i)),t=i,t}function We(){var t,i;return o++,t=a,i=st(),i!==e&&(u=t,i=ae(i)),t=i,t===e&&(t=a,i=rt(),i!==e&&(u=t,i=te(i)),t=i,t===e&&(t=a,i=lt(),i!==e&&(u=t,i=m(i)),t=i,t===e&&(t=a,i=ot(),i!==e&&(u=t,i=y(i)),t=i))),o--,t===e&&(i=e,o===0&&f(O)),t}function st(){var t,i,s,n,c,l,d,h,p;return o++,t=a,r.substr(a,9).toLowerCase()===z?(i=r.substr(a,9),a+=9):(i=e,o===0&&f(Ye)),i!==e?(s=g(),s!==e?(n=a,r.charCodeAt(a)===40?(c=K,a++):(c=e,o===0&&f(X)),c!==e?(l=g(),l!==e?(d=se(),d!==e?(h=g(),h!==e?(r.charCodeAt(a)===41?(p=W,a++):(p=e,o===0&&f(q)),p!==e?(u=n,c=ea(d),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e),n===e&&(n=a,r.charCodeAt(a)===123?(c=R,a++):(c=e,o===0&&f(G)),c!==e?(l=g(),l!==e?(d=se(),d!==e?(h=g(),h!==e?(r.charCodeAt(a)===125?(p=M,a++):(p=e,o===0&&f(k)),p!==e?(u=n,c=aa(d),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e),n===e&&(n=a,r.charCodeAt(a)===40?(c=K,a++):(c=e,o===0&&f(X)),c!==e?(l=L(),l!==e?(r.charCodeAt(a)===41?(d=W,a++):(d=e,o===0&&f(q)),d!==e?(u=n,c=ta(l),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e),n===e&&(n=a,r.charCodeAt(a)===123?(c=R,a++):(c=e,o===0&&f(G)),c!==e?(l=L(),l!==e?(r.charCodeAt(a)===125?(d=M,a++):(d=e,o===0&&f(k)),d!==e?(u=n,c=na(l),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)))),n!==e?(u=t,i=ia(n),t=i):(a=t,t=e)):(a=t,t=e)):(a=t,t=e),o--,t===e&&(i=e,o===0&&f(w)),t}function rt(){var t,i,s,n,c,l,d,h,p;return o++,t=a,r.substr(a,7).toLowerCase()===ra?(i=r.substr(a,7),a+=7):(i=e,o===0&&f(oa)),i!==e?(s=g(),s!==e?(n=a,r.charCodeAt(a)===40?(c=K,a++):(c=e,o===0&&f(X)),c!==e?(l=g(),l!==e?(d=J(),d!==e?(h=g(),h!==e?(r.charCodeAt(a)===41?(p=W,a++):(p=e,o===0&&f(q)),p!==e?(u=n,c=ne(d),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e),n===e&&(n=a,r.charCodeAt(a)===123?(c=R,a++):(c=e,o===0&&f(G)),c!==e?(l=g(),l!==e?(d=J(),d!==e?(h=g(),h!==e?(r.charCodeAt(a)===125?(p=M,a++):(p=e,o===0&&f(k)),p!==e?(u=n,c=ne(d),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)),n!==e?(u=t,i=ne(n),t=i):(a=t,t=e)):(a=t,t=e)):(a=t,t=e),o--,t===e&&(i=e,o===0&&f(sa)),t}function ot(){var t,i,s,n,c,l,d,h,p,x;if(o++,t=a,i=[],de.test(r.charAt(a))?(s=r.charAt(a),a++):(s=e,o===0&&f(fe)),s!==e)for(;s!==e;)i.push(s),de.test(r.charAt(a))?(s=r.charAt(a),a++):(s=e,o===0&&f(fe));else i=e;if(i!==e?t=r.substring(t,a):t=i,t===e){if(t=a,i=a,r.charCodeAt(a)===64?(s=he,a++):(s=e,o===0&&f(ue)),s!==e){if(n=a,r.substr(a,7).toLowerCase()===pe?(c=r.substr(a,7),a+=7):(c=e,o===0&&f(me)),c!==e){if(l=a,d=g(),d!==e?(r.charCodeAt(a)===123?(h=R,a++):(h=e,o===0&&f(G)),h!==e?(p=L(),p!==e?(r.charCodeAt(a)===125?(x=M,a++):(x=e,o===0&&f(k)),x!==e?(d=[d,h,p,x],l=d):(a=l,l=e)):(a=l,l=e)):(a=l,l=e)):(a=l,l=e),l===e){for(l=a,d=[],ge.test(r.charAt(a))?(h=r.charAt(a),a++):(h=e,o===0&&f(ye));h!==e;)d.push(h),ge.test(r.charAt(a))?(h=r.charAt(a),a++):(h=e,o===0&&f(ye));d!==e?(h=dt(),h!==e?(d=[d,h],l=d):(a=l,l=e)):(a=l,l=e)}l!==e?(c=[c,l],n=c):(a=n,n=e)}else a=n,n=e;if(n===e){if(n=[],be.test(r.charAt(a))?(c=r.charAt(a),a++):(c=e,o===0&&f(ve)),c!==e)for(;c!==e;)n.push(c),be.test(r.charAt(a))?(c=r.charAt(a),a++):(c=e,o===0&&f(ve));else n=e;n===e&&(n=a,c=H(),c!==e?(l=g(),l!==e?(ca.test(r.charAt(a))?(d=r.charAt(a),a++):(d=e,o===0&&f(da)),d!==e?(c=[c,l,d],n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e))}n!==e?(s=[s,n],i=s):(a=i,i=e)}else a=i,i=e;i!==e?t=r.substring(t,a):t=i}return o--,t===e&&(i=e,o===0&&f(la)),t}function lt(){var t,i,s,n,c,l,d,h,p,x,I;return o++,t=a,r.charCodeAt(a)===64?(i=he,a++):(i=e,o===0&&f(ue)),i!==e?(s=a,o++,r.substr(a,7).toLowerCase()===pe?(n=r.substr(a,7),a+=7):(n=e,o===0&&f(me)),n===e&&(r.substr(a,8).toLowerCase()===ha?(n=r.substr(a,8),a+=8):(n=e,o===0&&f(ua)),n===e&&(r.substr(a,6).toLowerCase()===pa?(n=r.substr(a,6),a+=6):(n=e,o===0&&f(ma)))),o--,n===e?s=void 0:(a=s,s=e),s!==e?(n=H(),n!==e?(c=g(),c!==e?(l=a,r.charCodeAt(a)===123?(d=R,a++):(d=e,o===0&&f(G)),d!==e?(h=g(),h!==e?(p=qe(),p!==e?(x=g(),x!==e?(r.charCodeAt(a)===125?(I=M,a++):(I=e,o===0&&f(k)),I!==e?(u=l,d=ga(n,p),l=d):(a=l,l=e)):(a=l,l=e)):(a=l,l=e)):(a=l,l=e)):(a=l,l=e),l===e&&(l=a,r.charCodeAt(a)===40?(d=K,a++):(d=e,o===0&&f(X)),d!==e?(h=g(),h!==e?(p=qe(),p!==e?(x=g(),x!==e?(r.charCodeAt(a)===41?(I=W,a++):(I=e,o===0&&f(q)),I!==e?(u=l,d=ya(n,p),l=d):(a=l,l=e)):(a=l,l=e)):(a=l,l=e)):(a=l,l=e)):(a=l,l=e)),l!==e?(u=t,i=ba(n,l),t=i):(a=t,t=e)):(a=t,t=e)):(a=t,t=e)):(a=t,t=e)):(a=t,t=e),o--,t===e&&(i=e,o===0&&f(fa)),t}function qe(){var t,i,s,n,c,l,d,h,p,x,I;if(t=a,i=a,s=H(),s!==e?(n=g(),n!==e?(r.charCodeAt(a)===44?(c=_,a++):(c=e,o===0&&f(U)),c!==e?(u=i,s=va(s),i=s):(a=i,i=e)):(a=i,i=e)):(a=i,i=e),i===e&&(i=null),i!==e)if(s=g(),s!==e){if(n=a,c=J(),c!==e){for(l=[],d=a,h=g(),h!==e?(r.charCodeAt(a)===44?(p=_,a++):(p=e,o===0&&f(U)),p!==e?(x=g(),x!==e?(I=J(),I!==e?(u=d,h=we(i,c,I),d=h):(a=d,d=e)):(a=d,d=e)):(a=d,d=e)):(a=d,d=e);d!==e;)l.push(d),d=a,h=g(),h!==e?(r.charCodeAt(a)===44?(p=_,a++):(p=e,o===0&&f(U)),p!==e?(x=g(),x!==e?(I=J(),I!==e?(u=d,h=we(i,c,I),d=h):(a=d,d=e)):(a=d,d=e)):(a=d,d=e)):(a=d,d=e);l!==e?(u=n,c=wa(i,c,l),n=c):(a=n,n=e)}else a=n,n=e;n===e&&(n=null),n!==e?(c=g(),c!==e?(r.charCodeAt(a)===44?(l=_,a++):(l=e,o===0&&f(U)),l===e&&(l=null),l!==e?(u=t,i=Sa(i,n),t=i):(a=t,t=e)):(a=t,t=e)):(a=t,t=e)}else a=t,t=e;else a=t,t=e;return t}function J(){var t,i,s,n,c,l,d;return o++,t=a,i=_e(),i!==e?(s=a,n=g(),n!==e?(r.charCodeAt(a)===61?(c=xa,a++):(c=e,o===0&&f(Aa)),c!==e?(l=g(),l!==e?(d=se(),d!==e?(u=s,n=Ia(i,d),s=n):(a=s,s=e)):(a=s,s=e)):(a=s,s=e)):(a=s,s=e),s===e&&(s=null),s!==e?(u=t,i=Ba(i,s),t=i):(a=t,t=e)):(a=t,t=e),o--,t===e&&(i=e,o===0&&f(Ea)),t}function se(){var t,i,s,n,c,l,d,h;if(o++,t=a,i=re(),i!==e){for(s=[],n=a,c=g(),c!==e?(r.charCodeAt(a)===35?(l=Se,a++):(l=e,o===0&&f(Ee)),l!==e?(d=g(),d!==e?(h=re(),h!==e?(u=n,c=xe(i,h),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e);n!==e;)s.push(n),n=a,c=g(),c!==e?(r.charCodeAt(a)===35?(l=Se,a++):(l=e,o===0&&f(Ee)),l!==e?(d=g(),d!==e?(h=re(),h!==e?(u=n,c=xe(i,h),n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e);s!==e?(u=t,i=Ca(i,s),t=i):(a=t,t=e)}else a=t,t=e;return o--,t===e&&(i=e,o===0&&f(Da)),t}function re(){var t,i,s,n;return o++,t=a,r.charCodeAt(a)===34?(i=Ae,a++):(i=e,o===0&&f(Ie)),i!==e?(s=Ue(),s!==e?(r.charCodeAt(a)===34?(n=Ae,a++):(n=e,o===0&&f(Ie)),n!==e?(u=t,i=Ta(s),t=i):(a=t,t=e)):(a=t,t=e)):(a=t,t=e),t===e&&(t=a,r.charCodeAt(a)===123?(i=R,a++):(i=e,o===0&&f(G)),i!==e?(s=L(),s!==e?(r.charCodeAt(a)===125?(n=M,a++):(n=e,o===0&&f(k)),n!==e?(u=t,i=Ra(s),t=i):(a=t,t=e)):(a=t,t=e)):(a=t,t=e),t===e&&(t=a,i=ct(),i!==e&&(u=t,i=Ga(i)),t=i,t===e&&(t=a,i=H(),i!==e&&(u=t,i=Ma(i)),t=i))),o--,t===e&&(i=e,o===0&&f($a)),t}function H(){var t,i,s;if(o++,t=a,i=[],Be.test(r.charAt(a))?(s=r.charAt(a),a++):(s=e,o===0&&f(De)),s!==e)for(;s!==e;)i.push(s),Be.test(r.charAt(a))?(s=r.charAt(a),a++):(s=e,o===0&&f(De));else i=e;return i!==e?t=r.substring(t,a):t=i,o--,t===e&&(i=e,o===0&&f(ka)),t}function _e(){var t,i,s,n,c,l;if(o++,t=a,i=a,s=H(),s!==e){if(n=a,c=[],Ce.test(r.charAt(a))?(l=r.charAt(a),a++):(l=e,o===0&&f($e)),l!==e)for(;l!==e;)c.push(l),Ce.test(r.charAt(a))?(l=r.charAt(a),a++):(l=e,o===0&&f($e));else c=e;c!==e?(l=_e(),l!==e?(c=[c,l],n=c):(a=n,n=e)):(a=n,n=e),n===e&&(n=null),n!==e?(s=[s,n],i=s):(a=i,i=e)}else a=i,i=e;return i!==e?t=r.substring(t,a):t=i,o--,t===e&&(i=e,o===0&&f(ja)),t}function ct(){var t,i,s;if(o++,t=a,i=[],Te.test(r.charAt(a))?(s=r.charAt(a),a++):(s=e,o===0&&f(Re)),s!==e)for(;s!==e;)i.push(s),Te.test(r.charAt(a))?(s=r.charAt(a),a++):(s=e,o===0&&f(Re));else i=e;return i!==e&&(u=t,i=Pa()),t=i,o--,t===e&&(i=e,o===0&&f(Fa)),t}function L(){var t,i,s,n,c,l,d,h;for(o++,t=a,i=a,s=[],n=Z(),n===e&&(Ge.test(r.charAt(a))?(n=r.charAt(a),a++):(n=e,o===0&&f(Me)));n!==e;)s.push(n),n=Z(),n===e&&(Ge.test(r.charAt(a))?(n=r.charAt(a),a++):(n=e,o===0&&f(Me)));return s!==e?(n=a,r.charCodeAt(a)===123?(c=R,a++):(c=e,o===0&&f(G)),c!==e?(l=L(),l!==e?(r.charCodeAt(a)===125?(d=M,a++):(d=e,o===0&&f(k)),d!==e?(h=L(),h!==e?(c=[c,l,d,h],n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e)):(a=n,n=e),n===e&&(n=null),n!==e?(s=[s,n],i=s):(a=i,i=e)):(a=i,i=e),i!==e?t=r.substring(t,a):t=i,o--,t===e&&(i=e,o===0&&f(La)),t}function Ue(){var t,i,s,n,c,l,d,h;for(o++,t=a,i=a,s=[],n=Z(),n===e&&(ke.test(r.charAt(a))?(n=r.charAt(a),a++):(n=e,o===0&&f(je)));n!==e;)s.push(n),n=Z(),n===e&&(ke.test(r.charAt(a))?(n=r.charAt(a),a++):(n=e,o===0&&f(je)));return s!==e?(n=a,r.charCodeAt(a)===123?(c=R,a++):(c=e,o===0&&f(G)),c!==e?(l=a,d=L(),d!==e?(r.charCodeAt(a)===125?(h=M,a++):(h=e,o===0&&f(k)),h!==e?(d=[d,h],l=d):(a=l,l=e)):(a=l,l=e),l===e&&(l=null),l!==e?(d=Ue(),d!==e?(c=[c,l,d],n=c):(a=n,n=e)):(a=n,n=e)):(a=n,n=e),n===e&&(n=null),n!==e?(s=[s,n],i=s):(a=i,i=e)):(a=i,i=e),i!==e?t=r.substring(t,a):t=i,o--,t===e&&(i=e,o===0&&f(za)),t}function Z(){var t;return r.substr(a,2)===Fe?(t=Fe,a+=2):(t=e,o===0&&f(Na)),t===e&&(r.substr(a,2)===Pe?(t=Pe,a+=2):(t=e,o===0&&f(Oa)),t===e&&(r.substr(a,2)===Le?(t=Le,a+=2):(t=e,o===0&&f(Ja)),t===e&&(r.substr(a,2)===ze?(t=ze,a+=2):(t=e,o===0&&f(Ha))))),t}function g(){var t,i;for(o++,t=[],Ne.test(r.charAt(a))?(i=r.charAt(a),a++):(i=e,o===0&&f(Oe));i!==e;)t.push(i),Ne.test(r.charAt(a))?(i=r.charAt(a),a++):(i=e,o===0&&f(Oe));return o--,t===e&&(i=e,o===0&&f(Ka)),t}function dt(){var t,i;return o++,r.charCodeAt(a)===10?(t=Wa,a++):(t=e,o===0&&f(qa)),t===e&&(r.substr(a,2)===Je?(t=Je,a+=2):(t=e,o===0&&f(_a)),t===e&&(r.charCodeAt(a)===13?(t=Ua,a++):(t=e,o===0&&f(Qa)),t===e&&(r.charCodeAt(a)===8232?(t=Va,a++):(t=e,o===0&&f(Za)),t===e&&(r.charCodeAt(a)===8233?(t=Ya,a++):(t=e,o===0&&f(et)),t===e&&(t=a,o++,r.length>a?(i=r.charAt(a),a++):(i=e,o===0&&f(at)),o--,i===e?t=void 0:(a=t,t=e)))))),o--,t===e&&(i=e,o===0&&f(Xa)),t}const ft=t=>{switch(S.number){case"string":return t;case"number":return parseInt(t,10);case"bigint":return BigInt(t);default:const i=parseInt(t,10);return i>Number.MAX_SAFE_INTEGER?BigInt(t):i}};if(V=A(),V!==e&&a===r.length)return V;throw V!==e&&a<r.length&&f(nt()),it(ie,$<r.length?r.charAt($):null,$<r.length?Ke($,$+1):Ke($,$))}return{SyntaxError:C,parse:ee}}();const Qe={jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"},Y=(D,C)=>N.parse(D,C),Ve=D=>{for(;D.match(/(^|[^\\])\{.*?([^\\])\}/s);)D=D.replace(/(^|[^\\])\{(.*?)([^\\])\}/s,"$1$2$3");return D},ce=(D,C)=>{let ee=Y(D,C),r=[],S={...Qe},e=(b,A)=>{if(b==="number")return A;if(b==="quoted"||b==="braced")return Ve(A).replace(/\\(["'%@{}()_])/g,"$1");if(b==="identifier")return S[A]||"";if(b==="concatinate")return A.map(({datatype:B,value:O})=>e(B,O)).join("");if(b==="null")return null};for(let b of ee)if(b.itemtype==="string")S[b.name]=e(b.datatype,b.value);else if(b.itemtype==="entry"){let A={key:b.key,type:b.type};for(let B of b.fields)A[B.name.toUpperCase()]=e(B.datatype,B.value);r.push(A)}return r};var Ze={parse:Y,entries:ce};F.default=Ze,F.entries=ce,F.parse=Y,Object.defineProperty(F,"__esModule",{value:!0})})})(oe,oe.exports);var pt=oe.exports;const mt=ut(pt),gt=`  @Demo{BLAA201110,
   title={TapirDotNETXml – TAPIR compliant interface for XML Data Structure Mapping},
   authors={David Blaa, Birgitta Koenig-Ries, Andreas Ostrowski, Eleonora Petzold, Jens Nieschulze},
   source={TDWG 2011 - Annual Conference},
   place={New Orleans, USA},
   date={2011-10-01},
   year={2011},
   type={Demo},
  }

  @ConferencePaper{KOENIGRIES2011,
   title={BExIS – Biodiversity Exploratories Information System},
   authors={	Birgitta Koenig-Ries, Andreas Ostrowski, Eleonora Petzold, Jens Nieschulze},
   source={TDWG 2011 - Annual Conference},
   place={New Orleans, USA},
   date={2011-10-01},
   year={2011},
   type={Conference Paper},
   abstract={The Biodiversity Exploratories Information System (BExIS) (https://exploratories.bgc-jena.mpg.de) is a virtual research environment for collaborative research. It has been developed as the data repository and information exchange platform of the Biodiversity Exploratories collaborative project (Exploratories, www.biodiversity-exploratories.de). This project started in 2006 and is funded by the German Science Foundation (DFG) as a long-term, interdisciplinary open research platform. The goal is to advance biodiversity research in Germany by a better understanding of the relationship between biodiversity of different taxa and levels, the role of land use and management for biodiversity, and the role of biodiversity for processes in the ecosystem. Currently, the Exploratories comprise around 40 subprojects from a wide range of disciplines ranging from soil science to remote sensing and from genetics to landscape geography, resulting in a spatial resolution from a few square centimetre (genomics) to entire landscapes (airborne remote sensing), a time resolution from ½ hour of automatic climatic data loggers to 5-year return cycle of forest inventories. All of these projects use BExIS. Additionally, BExIS is being used by a number of additional collaborative projects beyond the Exploratories including the DFG financed research units Kilimanjaro ecosystems under global change (KiLi, https://www.kilimanjaro.biozentrum.uni-wuerzburg.de) and The Jena Experiment (http://www.the-jena-experiment.de). Further installations are in preparation.
    BExIS offers a web-based interface to a platform for storage and management of biodiversity data in a database. All metadata and primary data are handled with the document oriented native XML approach. BExIS uses IBM’s DB2 as relational Database Management System (DBMS) with pureXML, a native XML extension (http://www-01.ibm.com/software/data/db2/xml) .
    BExIS supports highly flexible data structures and data syntax for primary data ensured by user-driven configuration during metadata creation. Thereby the user defines the data structure for primary data, more precisely the quantity, arrangement, and data type of variables. This allows different scientists to use their own diverse data structures while still sharing their data in one database.
    It is possible to map BExIS project specific metadata schema to biodiversity metadata standards like DarwinCore with its TapirDotNETXml application, an extension of TapirDotNET (http://wiki.tdwg.org/twiki/bin/view/TAPIR/TapirDotNET). It provides an interface to the TDWG Access Protocol for Information Retrieval (TAPIR) and allows networking of BExIS data in data portals like GBIF or DataOne, and more generally the flow of data between repositories or ,e,g., towards data archives.
    BExIS offers a variety of functions for visualization of data: it is viewable as scrollable tables, may be displayed against Google Maps and plotted via a statistics service.
    BExIS is based on a service oriented architecture which allows for easy integration of external functionality and automatic data flows.  For instance, it provides a web service based interface to RServe (RServe, http://www.rforge.net/Rserve/doc.html).
    BExIS also offers a function to merge multiple datasets, and the option to create views of defined subsets of structured data. It supports a number of usual file formats (Microsoft Excel and Access, ASCII, dBASE) for uploading, updating, downloading and sharing the data. BExIS can manage also unstructured data such as documents, pictures and GIS data.
    Access to data and functionality are handled by fine grained authorization mechanisms, managing users, rights of data use, and roles.
    BExIS provides further functionalities useful for projects, e.g., to organize and document field work, as well as blackboards and interactive charting of research plots and Wiki based communication platforms In addition, there are publication and event management tools for scientific work.
    BExIS is freely available under a Creative Commons license for non-commercial use.},
  },

 @ConferencePaper{OSTROWSKI201102,
   title={BExIS – Biodiversity Exploratories Information System},
   authors={Andreas Ostrowski, Dennis Heimann, Eleonora Petzold, Jens Nieschulze},
   source={Workshop on Data repositories in environmental sciences},
   place={Jena, Rauischholzhausen, GER},
   date={2011-02-01},
   year={2011},
   type={Publication},
   abstract={The Biodiversity Exploratory Information System (BExIS) is the data repository and information exchange platform of the Biodiversity Exploratories project.
    The Biodiversity Exploratories started in 2006 and is funded by the German Science Foundation (DFG) as a long-term, interdisciplinary open research platform. The goal is to advance biodiversity research in Germany and further the understanding of the relationship between biodiversity of different taxa and levels, the role of land use and management for biodiversity, and the role of biodiversity for ecosystem processes. At present 40 projects with 300 researchers work on 1000 research plots of two landuse types in three regions in Germany.
    The interchange of data among projects is considered crucial for the success of the project. The diversity among the involved projects is mirrored by the diversity of file formats, -syntax and, semantics. BExIS supports file formats common among its researchers (xlsx, xls, dbf, mdb, txt) and allows data ingestion of flexible syntax, determined in collaboration with all field researchers.
    At present, BExIS hosts about 470 datasets, comprising around 30 million tupel with around 400 million data items, around 7000 variables, 2000 concepts, and more than 10000 differently labelled species.
    BExIS has a web-based interface to a platform for storage and management of all project data in a database. It has a fine grained user and rights management and offers upload, update, and online edit of data. BExIS supports different structured data types and unstructured data. Support of flexible data syntax is ensured by use of XML based metadata schemas and datastructure mapping.
    BExIS provides further project desired functionalities, e.g. to organize and document field work, for visualising and editing common data on maps, and provides the use of statistical analysis also for online merged data sets.
    BExIS is presented with three posters. One will give a “Feature Overview” with BExIS provided functionalities. The second poster shows a “Technical Overview” with focus on system design and used technology.
    The problem of the semantic heterogeneity and data interoperability is dealt with the implementation of ontology and is described in the Poster “Semantic Data Access within the Biodiversity Exploratories Information System BExIS”.},
    name={Poster},
    url={https://fusion.cs.uni-jena.de/fusion/wp-content/uploads/2015/05/Ostrowski_BExIS_SysTec_WS2011-final.pdf}
  },

@Poster{PETZOLD201102,
   title={Biodiversity Exploratory Information System (BExIS) – User requirements and system development},
   authors={Eleonora Petzold, Andreas Ostrowski, Dennis Heimann, Jens Nieschulze},
   source={Workshop on Data repositories in environmental sciences},
   place={Jena, Rauischholzhausen},
   date={2011-02-01},
   year={2011},
   type={Publication},
   abstract={The Biodiversity Exploratory Information System (BExIS) is the data repository and information exchange platform of the Biodiversity Exploratories project.
    The Biodiversity Exploratories started in 2006 and is funded by the German Science Foundation (DFG) as a long-term, interdisciplinary open research platform. The goal is to advance biodiversity research in Germany and further the understanding of the relationship between biodiversity of different taxa and levels, the role of land use and management for biodiversity, and the role of biodiversity for ecosystem processes. At present 40 projects with 300 researchers work on 1000 research plots of two landuse types in three regions in Germany.
    The interchange of data among projects is considered crucial for the success of the project. The diversity among the involved projects is mirrored by the diversity of file formats, -syntax and, semantics. BExIS supports file formats common among its researchers (xlsx, xls, dbf, mdb, txt) and allows data ingestion of flexible syntax, determined in collaboration with all field researchers.
    At present, BExIS hosts about 470 datasets, comprising around 30 million tupel with around 400 million data items, around 7000 variables, 2000 concepts, and more than 10000 differently labelled species.
    BExIS has a web-based interface to a platform for storage and management of all project data in a database. It has a fine grained user and rights management and offers upload, update, and online edit of data. BExIS supports different structured data types and unstructured data. Support of flexible data syntax is ensured by use of XML based metadata schemas and datastructure mapping.
    BExIS provides further project desired functionalities, e.g. to organize and document field work, for visualising and editing common data on maps, and provides the use of statistical analysis also for online merged data sets.
    BExIS is presented with three posters. One will give a “Feature Overview” with BExIS provided functionalities. The second poster shows a “Technical Overview” with focus on system design and used technology.
    The problem of the semantic heterogeneity and data interoperability is dealt with the implementation of ontology and is described in the Poster “Semantic Data Access within the Biodiversity Exploratories Information System BExIS”.},
   name={Poster},
   url={https://fusion.cs.uni-jena.de/fusion/wp-content/uploads/2015/05/poster_Rauischholzhausen_petzold.pdf}
  },

@Poster{HEIMANN201102,
   title={Semantic Data Integration in BExIS},
   authors={Dennis Heimann, Jens Nieschulze, Birgitta König-Ries, E.D. Schulze},
   source={Workshop on Data repositories in environmental sciences},
   place={Rauischholzhausen, Germany},
   date={2011-02-01},
   year={2011},
   type={Poster},
   abstract={In order to address the complex ecological relationships of landuse, biodiversity, and ecosystem prossess, research in ecology progressed from site-specific approaches with measurements at spatial and temporal small scales to long-term explorations on larger scales. This research paradigm is promoted by collaborations and data exchange policies between research projects, and technical advances within data management. On this account data reuse and interoperability plays an important role in information systems design of large scale and long-term ecological projects. Against this background, providing just a database system is no longer sufficient – instead a data repository should also be able to capture the semantics of its data sets to allow for the disentanglement of ecological relationships.
The poster presents our approach of enabling the Biodiversity Exploratories Information System (BExiS) for data sharing and interoperability. We have addressed the problem of semantic heterogeneity within the datasets by relating all data items to concepts of a common, upper-level ontology which reflects the relationships between individual ecological topics. The poster describes our approaches of ontology-based data integration and user-friendly annotation and shows furthermore an example of the current state of our underlying ontology.},
  },

@ConferencePaper{CHAMANARA20121201,
   title={A Conceptual Model for Biodiversity Information Management},
   authors={Javad Chamanara},
   source={8th International Conference on Ecologocal Informatics ISEI 2012},
   place={Brasilia, Brasil},
   date={2012-12-01},
   year={2012},
   type={Conference Paper},
  },

@inproceedings{CHAMANARA201212,
   title={Towards a Query Language for Unified Scientific Data Processing and Management},
   authors={Javad Chamanara, Birgitta Koenig-Ries},
   source={8th International Conference on Ecologocal Informatics ISEI 2012},
   place={Brasilia, Brasil},
   date={2012-12-01},
   year={2012},
   type={Conference Paper},
  },

@inproceedings{10.1145/2389686.2389690,
title = {SciQL: A Query Language for Unified Scientific Data Processing and Management},
author = {Chamanara, Javad and K\\"{o}nig-Ries, Birgitta},
source = {PIKM '12: Proceedings of the 5th Ph.D. workshop on Information and knowledge},
place = {Maui, Hawaii, USA},
date = {2012-11-02},
year = {2012},
type={Research Article},
abstract = {Science is more and more data-driven. This means, that a significant part of a scientist's work is dedicated to accessing, visualizing, integrating and analyzing data from a possibly wide range of heterogeneous sources. In this paper we propose SciQL, a query language that supports scientists in this task and allows them to focus on their main purpose, i.e., on doing research.SciQL sits between scientists or data processing tools on the one hand and different data sources on the other hand in order to decouple users from technical aspects of accessing data. It allows users to express their data management, refinement, transformation, processing procedures and visualizations in SciQL regardless of the syntax and capabilities of the underlying physical data source sources. This way scientists and client tools deal with only one language to interact with different data sources, e.g., text files, spreadsheets, relational DBMSs, or MapReduce systems. To achieve this, SciQL provides various constructs among them Schema Definition, (e.g., schema design and Data transformation), Data Retrieval (connecting to various data sources and formats, filtering, joining, grouping), Data Manipulation (e.g. Updating, deleting, versioning and provenance) and Visualization commands and data structures can be named.In this paper, we will discuss the general idea why we believe SciQL is needed, and explain the goals and the steps we intend to take in order to achieve these aims.},
name={Article},
url = {https://doi.org/10.1145/2389686.2389690}
}

@ConferencePaper{OWONIBI201209,
   title={Biodiversity Research Data Management},
   authors={Michael Owonibi, Birgitta Koenig-Ries, Eleonora Petzold, Andreas Ostrowski},
   source={Jahrestagung der GfÖ},
   place={Lüneburg, Germany},
   date={2012-09-01},
   year={2012},
   type={Conference Paper},
  },


  @JournalPaper{LOTZ201210,
   title={Diverse or Uniform? — Intercomparison of two major German Project Databases for Interdisciplinary Collaborative Functional Biodiversity Research},
   authors={Thomas Lotz, Jens Nieschulze, Jörg Bendix, Maik Dobbermann, Birgitta König-Ries},
   source={Ecological Informatics, Volume 8, Pages 10–19},
   place={Ecological Informatics},
   date={2012-03-01},
   year={2012},
   type={Journal Paper},
   abstract={Research on biodiversity, its relation to ecosystem functioning and services, and the assessment of the impacts of environmental change on biodiversity needs an interdisciplinary perspective. This implies a great diversity of data and data formats gathered mostly in short- to mid-term collaborative research projects. It has been common practice that projects develop specific data management and communication solutions. We compare solutions of two major German collaborative research programs in functional biodiversity research to derive functional commonalities. This in-depth analysis follows five categories of the data life cycle: (i) data acquisition, (ii) metadata management, (iii) database, (iv) exploration, analysis and visualization, and (v) data curation and preservation. The results show that even though both systems were developed completely independently, they reveal comparable overall features and a similar state of implementation. Major focus areas lie in the implementation of comparable metadata schemas and their importance for storage and access strategies for tabular data on the value level. Basic analysis tools and similar management functions are considered. Intensive communication with the users and the orientation of ongoing developments based on user requirements is also important. Both systems are different mostly in specific details which, however, do not influence the overall comparable performance. It should be also emphasized that the same functionality is achieved with completely different software. The choice of software is based on the evaluation of available technologies. Thereby it might be influenced by individual experiences of the developers, but is mainly determined by the data diversity, which forces the usage of flexible technologies to develop adaptable systems. It is concluded that overall features for project databases of collaborative research projects must be supplemented by sophisticated data description, storage, and analysis structures to serve the requirements of integrative functional biodiversity research.},
   name={Article},
   url={https://www.sciencedirect.com/science/article/pii/S157495411100094X},
  },

  @article{CHAMANARA2014261,
   title={A conceptual Model for Data Management in the field of Ecology},
   authors={Javad Chamanara, Birgitta König-Ries},
   source={Ecological Informatics 24},
   place={Journal of Ecological Informatics},
   date={2014-11-01},
   year={2014},
   type={Journal Paper},
   abstract={Conceptual models play an important role in identifying the domain under study and establishing an interoperability framework between different scientific groups and tools working on the same or neighboring domains. The importance comes from the fact that the conceptual models describe the target domain in a technology agnostic manner, using domain terminology, considerations, and rules. In this paper we introduce a highly flexible data and metadata structure for biodiversity (and related fields) information management. The model incorporates important concepts needed to develop a proper domain model for managing biodiversity data, e.g., data, data structure, metadata, metadata structure, and semantic descriptions of model elements. The model is designed in UML using the object oriented analysis paradigms. The data management teams of several large collaborative projects as well as those of two research institutes were actively cooperating in the design of the model, thus ensuring that all aspects relevant for these very different projects and institutions are considered and that a high acceptance of the model will ensue. The model supports and encourages reuse and sharing of different elements, making the cross dataset syntheses, comparison, merging and searches easier. The incorporated semantic package helps to annotate dataset’s variables and metadata attributes by means of ontologies, taxonomies or thesauri. These annotations can be used for standardization, localization and also for managing the variety of meanings of same or similar variables among community members. The model is currently undergoing its implementation phase and will replace the model used in the current version of BExIS, a data management platform for biodiversity research, when finished.},
   name={Article},
   url = {https://www.sciencedirect.com/science/article/pii/S1574954113001246}
  },


  @article{OWONIBI201310,
   title={A Data Quality Management Module for BExIS},
   authors={Michael Owonibi, Roman Gerlach, Andreas Ostrowski, Eleonora Petzold, Birgitta König-Ries},
   source={TDWG Annual Conference},
   place={Florence, Italy},
   date={2013-10-01},
   year={2013},
   type={Conference Paper},
   abstract={Experiment data is prone to containing errors, therefore, data quality management (DQM) is an important integral part of the Biodiversity Exploratories Information System (BExIS) – the data repository and information exchange platform of the Biodiversity Exploratories project. Of recent, BExIS is being redesigned to be modular, scalable and extendable, and in this new version, a new DQM framework module is being developed. Within it, a user can specify DQM criteria on (groups of) variables at data structure design time. Such criteria include integrity constraints, data types, regex patterns, series definition, variable dependencies, complex business rules, e.g., condition-based patterns, and domain value ranges, e.g., a (reference to a) list for string-valued variables. In addition, users will be able to specify other variables/datasets which are related to a variable/dataset being created, and thresholds for indicating dataset/variable/tuple completeness and redundancy. Based on some of the DQM criteria specified, a user will be able to download Microsoft Excel templates with macros for performing a guided data entry and validation before dataset upload. At upload time, the dataset will be validated against some of the user-specified DQM criteria. Afterwards, dataset auditing will be carried out as a batch process. Data profiling which generates a description of the components of the dataset using various statistical metrics will be carried out as the first part of data auditing. The other part consists of several forms of data analytics and mining procedures using information such as the related dataset/variable provided at data structure design-time. Some of the analysis done will include outlier detection, redundancy analysis (using absolute or fuzzy matching techniques), text based analytics (for detecting, e.g., spelling errors, groups of misspelled terms, cryptic names etc.), and the generation of DQM criteria which are not specified by the users, e.g., patterns, variable dependencies etc. which the dataset will then be validated against.  Furthermore, the data structure will also be examined to determine, e.g., non-atomic columns, and GIS-related checks are done here, too. A report based on the data profiling statistics and the probable errors based on the data analytics will then be sent to the data owner. Finally, the correction and enrichment component will assist the data owners to (mass-)correct their dataset based on the report. This component also consists of tools for suggesting possible corrections, e.g., for missing values, and data enrichment information, e.g., link to Catalogue of Life for species datasets.},
  },


  @article{GERLACH201309,
   title={BExIS – Supporting Integrated Data Management through the entire Ecological Data-Life-Cycle},
   authors={Roman Gerlach, David Blaa, Javad Chamanara, Martin Hohmuth, Andreas Ostrowski, Michael Owonibi, Eleonora Petzold, Sven Thiel, Birgitta König-Ries},
   source={43th Annual Meeting of the Ecological Society of Germany, Austria and Switzerland (GFÖ)},
   place={Potsdam, Germany},
   date={2013-09-01},
   year={2013},
   type={Conference Paper},
   abstract={Developing efficient tools to manage the entire ecological data-life-cycle has been a challenge and an active research field in applied computer science for more than a decade.  Specialized tools to handle different components of the data-life-cycle including data processing, analysis, and data storage are present in diverse forms. However, the availability of frameworks connecting different components of the ecological data-life-cycle is limited, thus hampering efficient integrated data management. In this presentation we will illustrate how challenges in data management and data-life-cycle are being addressed during the development of the new BEXIS 2.x.x software. The Biodiversity Exploratories Information System (BExIS) has been established as a data repository and information exchange platform of the Biodiversity Exploratories project. The BExIS System has also been instantiated and adapted by additional projects such as the Jena Experiment, Kilimanjaro, and EFForTS. As part of the DFG-LIS funded project BExIS++ (http://fusion.cs.uni-jena.de/bexis) the system is currently being refactored and redesigned to meet the demand for a more generic, scalable, modular and interoperable software. Following the data-life-cycle concept the new BEXIS 2.x.x software will provide modules for data collection, discovery, dissemination, integration, quality assurance and research planning. A second release is scheduled to be published under a GNU General Public License version 3 in September 2013.},
  },


  @publication{GERLACH201306,
   title={Supporting Integrated Data Management through the entire Ecological Data-Life-Cycle – BExIS and beyond},
   authors={Roman Gerlach},
   source={Invited talk at BioCenter Klein Flottbek, University of Hamburg},
   place={Hamburg, Germany},
   date={2013-06-01},
   year={2013},
   type={Publication},
  },

  @article{GERLACH201303,
   title={Joined Efforts to Develop BExIS – an Information System for Biodiversity and beyond},
   authors={Roman Gerlach, David Blaa, Javad Chamanara, Sven Thiel, Michael Owonibi, Andreas Ostrowski, Eleonora Petzold, Jitendra Gaikwad, Martin Hohmuth, Birgitta König-Ries},
   source={12th meeting on vegetation databases: Linking vegetation and plant trait databases},
   place={Leipzig, Germany},
   date={2013-03-01},
   year={2013},
   type={Workshop Paper},
  },


  @demo{GERLACH201302,
   title={Advancing the Biodiversity Exploratories Information System (BExIS)},
   authors={Roman Gerlach, David Blaa, Javad Chamanara, Martin Hohmuth, Andreas Ostrowski, Michael Owonibi, Eleonora Petzold, Sven Thiel, Birgitta König-Ries},
   source={BioSyst.EU 2013 Global systematics!},
   place={Vienna, Austria},
   date={2013-02-01},
   year={2013},
   type={Demo},
   abstract={The Biodiversity Exploratories Information System (BExIS) is a virtual environment for interdisciplinary, collaborative research. Starting in 2006 the system has been developed as a long-term data repository, resource management and information exchange platform for the Biodiversity Exploratories project. Currently, the Exploratories comprise around 40 sub-projects and more than 300 users from disciplines ranging from soil science to remote sensing and from genetics to landscape ecology. The system supports this diversity by allowing flexible, user-defined data structures for primary data. BExIS is accessed through a web interface containing functionality for data storage and management (upload, download, update of primary data; creating and publishing metadata, fieldbook) and for viewing and processing data (e.g.merging data, statistics). Based on additional funding by the German Science Foundation (DFG), BExIS is currently being redesigned and reengineered to become a generic biodiversity repository software (BExIS++) that is modular, scalable and adaptable to other use cases. During this 3 year process existing features are being enhanced (e.g.security, authorization, geospatial data support, visualization) and new feature are added (e.g.Lucene search engine with faceted search interface, mobile client support). The BExIS++ system builds on Microsoft .NET technology and will be provided under a creative commons licence.},
  },


  @poster{GERLACH201411,
   title={BExIS++ Supporting Data-Life-Cycle Management in Biodiversity and Beyond},
   authors={Roman Gerlach, David Blaa, Javad Chamanara, Martin Hohmuth, Nafiseh Navabpour, Sven Thiel, Birgitta König-Ries},
   source={2nd Data Management Workshop Cologne},
   place={Cologne, Germany},
   date={2014-11-01},
   year={2014},
   type={Publication},
   abstract={Managing research data throughout the entire ecological data‐life‐cycle has been a challenge and an active research field in applied computer science for more than a decade. Specialized tools to handle individual components of the data‐life‐cycle do exist in great variety. However, the availability of frameworks connecting components for data creation, quality assurance, data processing, data publication, and data discovery is limited, thus hampering efficient scientific work flows. In order to address these issues we follow a threefold approach: first, we develop the technical infrastructure, namely the data management platform BExIS 2; second, we try to improve data literacy and data management skills of individual researchers and students; third, we try to enhance administrative and institutional conditions. Building on the legacy of the Biodiversity Exploratories Information System (BExIS) the BExIS++ project was initiated in 2011 to advance the existing BExIS system in terms of scalability, modularity and interoperability, but also to better support the data-life-cycle management. Based on a new conceptual model and application architecture, the new BExIS 2 platform is being developed as a generic biodiversity data repository providing modules for data collection, discovery, dissemination, integration, quality assurance and research planning. Key features of the current BExIS 2.4.0 system include: support for a broad range of data structures and data types, support for multiple database management systems (e.g. PostgreSQL, IBM DB2), a faceted search on metadata and primary data, customizable data downloads and a highly flexible security system. New features are being developed based on requests from the user community and released every three month under a GNU General Public License (version 3). The current user community comprises a number of large scale research projects that adapted the original BExIS system (e.g. Jena Experiment, Kilimanjaro, EFForTS) and are expected to migrate, as well as projects that implement and contribute to the new BExIS 2 system (e.g. iDiv, AquaDiva, GFBio). Besides the technical development we investigate how undergraduate, graduate and PhD students can be trained more effectively on research data management and data-life-cycle issues. For example, we conducted a workshop “Research Data Management – Make your Data count!” for PhD students at the Graduate Academy at the University of Jena. Lectures for undergraduate students are in preparation. Along the third theme we work towards raising awareness on general research data management aspects at the university level. The aim is promote and implement standards of good scientific practice, i.e.  long-term archiving, preservation, and publication of research data. We also provide consultancy on creating data policies and data management plans to other researchers of participating institutions.BExIS++ is funded through the LIS program of the German Science Foundation (DFG).},
   name={Poster},
   url={https://fusion.cs.uni-jena.de/bpp/wp-content/uploads/sites/8/2015/12/Poster_BExISpp_Nov2014.pdf}
  },


  @article{GERLACH201410,
   title={BExIS 2 – a Flexible Data Management Platform for Biodiversity},
   authors={Roman Gerlach, David Blaa, Javad Chamanara, Martin Hohmuth, Nafiseh Navabpour, Sven Thiel, Birgitta König-Ries},
   source={TDWG Annual Conference},
   place={Jönköping, Sweden},
   date={2014-10-01},
   year={2014},
   type={Workshop Paper},
   abstract={In this demonstration we will introduce the BExIS 2 research data management platform. BExIS 2 is the completely redesigned and refactored successor of the earlier Biodiversity Exploratories Information System (BExIS), which was established in 2007 as the data repository and information exchange platform for the Biodiversity Exploratories project (40+ sub-projects, 300+ researchers). Over the years BExIS has been adapted for additional large scale projects in functional biodiversity in Germany (e.g. Jena Experiment, Kilimanjaro, EFForTS). With the growing community not only the list of requested features rose, also the demand for a more flexible and easier to instantiate system grew. In 2011 we started to revamp the system based on a newly designed architecture to be more generic and meet modern software standards in terms of scalability, modularity and interoperability. Following the data-life-cycle concept BExIS 2 provides modules for data collection, data discovery, dissemination, integration, quality assurance and research planning. Key features of the current BExIS 2.4.0 system includes: support for a broad range of data structures and data types, support for multiple database management systems (e.g. PostgreSQL, IBM DB2), a faceted search on metadata and primary data, customizable data downloads and a highly flexible security system. New features are being developed based on requests from the user community and released every three month under a GNU General Public License (version 3). The development of BExIS 2 is being funded by the German Science Foundation (DFG) as part of the BExIS++ project (http://fusion.cs.uni-jena.de/bexis). Funding for specific extensions and modules is further provided by DFG through the projects: BExIS, AquaDiva and iDiv.},
  },


  @article{GERLACH201409,
   title={Teaching Research Data Management across Disciplines and Different graduation Levels},
   authors={Roman Gerlach, Birgitta König-Ries},
   source={44th Annual Meeting of the Ecological Society of Germany, Austria and Switzerland (GFÖ)},
   place={Hildesheim, Germany},
   date={2014-09-01},
   year={},
   type={Conference Paper},
   abstract={In fields like Ecology, Biology or Geoscience research relies fundamentally on data gathered in the field or the laboratory by humans or autonomous sensors. However, according to Reichman et al. (2011, DOI: 10.1126/science.1197962) “…less than 1% of the ecological data collected is accessible after publication of associated results.” Although this estimated number may have increased slightly by now due to numerous initiatives dealing with the technological, organizational, and sociological challenges here, effective research data management is still not an integral part of the science workflow for many researchers.
Despite being involved also in developing technological solution to the problem, in this presentation we will focus only on activities towards education and training of students and young scientists. We would like to share and discuss our experiences in developing and implementing training courses on research data management.
In order to create a general awareness on data management issues as early as possible we develop single lectures for B.Sc. and M.Sc. students, which can be included into existing modules without interfering to much with the existing curricular.
Besides educating students in ecology or related discipline it is also important to train computer science students on research data management.  Here we will develop an entire module as part of the Computational and Data Science Master at FSU.
In June 2014 we will conduct a 1-day workshop “Research data management – make your data count!” at the Graduate Academy of the Friedrich-Schiller-University.
With more data management software becoming available, there is a need to offer hands-on training courses on these tools. For example, there have been a number of practical training courses for the Biodiversity Exploratories Information System. We will continue this type of course also for the new BExIS 2 platform.
These activities are funded by the German Research Foundation (DFG) and in part by the Friedrich-Schiller-University Jena.},
  },

  @bookchapter{GALHARDAS201407,
   title={An Introduction to the Data Retrieval Facilities of the XQt Language for Scientific Data},
   authors={Javad Chamanara, Birgitta König-Ries},
   source={In: Galhardas, H. and Rahm, E., Data Integration in the Life Sciences, Lecture Notes in Computer Science 8574, pp 143-150},
   place={Springer International Publishing Switzerland},
   date={2014-07-17},
   year={2014},
   type={Book Chapter},
   abstract={	Scientific data is stored in a wide variety of different formats. While much recent research and development have focused on specialized languages and tools to fulfill the requirements of specific domains or data structures, the need for more general technologies to enable data scientists to deal with various forms of data in a universal manner is growing. In this paper we describe data querying capabilities of the XQt language in order to show how it enables the users to author their processes in data source and format ignorant ways and to share and reuse their data, processes, and acquired skills. In addition, we describe the internals of the language, the execution pipeline, and the mapping between the domain level schemas and the physical structure of the data. The paper highlights the retrieval capabilities of XQt and illustrates some of its basic performance indicators.},
   name={Article},
   url={https://link.springer.com/chapter/10.1007/978-3-319-08590-6_14}
  },

  @demo{GERLACH201401,
   title={BExIS++ Forschungsdatenmanagement},
   authors={Roman Gerlach, Birgitta König-Ries, David Blaa, Javad Chamanara, Sven Thiel},
   source={21st Diversity Workbench Workshop},
   place={Munich, Germany},
   date={2014-03-01},
   year={2014},
   type={Demo},
  },

  @article{GERLACH201509,
   title={BEXIS 2 – A platform for managing heterogeneous biodiversity data and projects},
   authors={	Roman Gerlach, David Blaa, Javad Chamanara, Martin Hohmuth, Nafiseh Navabpour, Sven Thiel, Birgitta König-Ries},
   source={TDWG Conference 2015},
   place={Nairobi, Kenya},
   date={2015-09-28},
   year={2015},
   type={Conference Paper},
   abstract={In this presentation we will demonstrate the capabilities of the BEXIS 2 software. BEXIS is being developed to address the data management needs of large scale research projects with multiple sub-projects and several hundred researchers. Following the data-life-cycle concept BEXIS 2 provides modules for data collection, data discovery, dissemination, integration, quality assurance and research planning. Key features of the current BEXIS 2 system include: support for a broad range of data structures and data types, support for multiple database management systems (e.g. PostgreSQL, IBM DB2), a faceted search on metadata and primary data, customizable data downloads and a highly flexible security system. Currently, we strive to dramatically improve the usability and performance of the system. New features are being developed based on requests from the user community and released every three month under a GNU Lesser General Public License (version 3).
The development of BEXIS 2 is being funded by the German Science Foundation (DFG) as part of the BExIS++ project (http://fusion.cs.uni-jena.de/bexis). Funding for specific extensions and modules is further provided by DFG through the projects: Biodiversity Exploratories, AquaDiva, iDiv, and GFBio.},
   name={Article},
   url={https://fusion.cs.uni-jena.de/bppFiles/publications/GerlachR_etal_TDWG2015_BEXIS2.pdf}
  },

  @article{GERLACH20150928,
   title={Teaching Biodiversity Data Management to Computer Science and Geography Students – An Experience Report},
   authors={Roman Gerlach, Birgitta König-Ries, Christiane Schmullius, Sören Hese},
   source={TDWG 2015},
   place={Nairobi, Kenya},
   date={2015-09-28},
   year={2015},
   type={Conference Paper},
   abstract={In the age of big data and data driven science, the ability to properly manage research data is a key competence any student in the sciences should acquire. Likewise, in order to be able to provide adequate software platforms, students of computer science need to learn about the requirements towards such systems from the domain scientists.
In order to meet both requirements, in this semester, we combined two courses at our university: The class „Management of Scientific Data“ taught as part of our Masters‘ programs in Computer Science and in Computational and Data Science and an introductory class on geoinformatics for first year Bachelor students in Geography.
The students jointly planned a field campaign to obtain vegetation data of a forest plot in the Roda valley close to Jena. The Management of Scientific Data students acted as coaches for the bachelor students, directly applying the knowledge on proper data collection and description in their lectures. They later on used the data for tasks on quality assurance and data analysis. The bachelor students were exposed to the topic of data management in a very early stage of their academic training.
An important aspect is that the data collected was not just „toy data“, but data that is really needed in national and international research projects. The Roda Valley is a designated area for the validation of forest biomass by the European Space Agency. It is used intensively to test and develop new methods in remote sensing. The data collected by the students will serve as the necessary in situ data providing the ground truth.
Based on the positive experience and feedback from this semester, we will extend this combination of classes next year. Students will work together not just in the planning of the field campaign but over the entire course of the semester. We also intend to include Ecology students. Their field work takes place in the same area – integrating their data would considerably increase the value of the data collected and the opportunities for analyses.
With this, we hope to lay the foundation for the training of future data scientists with a background in either a domain science or computer science.},
  name={Article},
   url={https://fusion.cs.uni-jena.de/bppFiles/publications/GerlachR_etal_TDWG2015-815_TeachingRDM.pdf}
  },

  @article{KLAN201509,
   title={Closing the Gaps in Biodiversity Data Management: What Biodiversity Researchers Seek and Computer Science Can Offer},
   authors={Friederike Klan, Felicitas Löffler, Jitendra Gaikwad, Roman Gerlach, Alsayed Algergawy, Pawandeep Khaur, Dorothee Wieczorek},
   source={45th Annual Meeting of the Ecological Society of Germany, Austria and Switzerland (GFÖ 2015)},
   place={Göttingen, Germany},
   date={2015-09-10},
   year={2015},
   type={Conference Paper},
  },


  @article{GERLACH201508,
   title={Advancing research data management practices in ecology and biodiversity with technology, training, and support},
   authors={Roman Gerlach, Birgitta König-Ries},
   source={Ecological Society of America - Annual Meeting 2015},
   place={Baltimore, USA},
   date={2015-08-13},
   year={2015},
   type={Conference Paper},
   abstract={Background/Question/Methods
Over the past decade data management in ecology and biodiversity has seen a proliferation of concepts, standards, software tools, and data infrastructures. The importance of data management is widely acknowledged by funding agencies and researchers alike. Technical solutions for all aspects of the data life cycle are available now. However, from our experiences with research communities in Germany, data management practices are only partially adopted into the scientific workflow and awareness of existing tools is often limited to some aspects, such as analysis or storage. Although there is a growing interest in data management issues and technical solutions, there still seems to be a gap between the technology available today and what is taken up by the scientific community.
In our presentation, we will discuss obstacles and shortcomings that lead to this conclusion. We will argue that to overcome these challenges, a threefold approach is necessary: First, the provision of suitable data management platforms for the ecological and biodiversity research community, second, training efforts to raise awareness and empower researchers to do proper data management, and third the establishment of organizational structures to support researchers.
Results/Conclusions
In the second part of our presentation, we highlight how we implement this threefold approach at our institution:
First, we spearhead the development of the BExIS 2 data management platform (http://fusion.cs.uni-jena.de/bexis). The aim is to provide a generic, scalable, and modular platform following the data life cycle concept. The system is based on a conceptual model and provides modules for data collection, discovery, dissemination, integration, quality assurance and research planning. Advanced features are dataset evolution (versioning) or views on variables of multiple datasets (spanning views). Overall, this development is a community driven effort supported by multiple projects at different research institutions. The user community is engaged through dedicated requirements and usability workshops.
Second, in addition to BExIS 2 specific training we conduct research data management workshops for PhD students (all disciplines), students of Computational science (M.Sc.), and students of ecology and geography (B.Sc., M.Sc.).
Third, we are in the process of establishing a helpdesk to provide support to all scientists of the University of Jena. This involves presentations to raise awareness on research data management topics, but also to assist members in creating data policies, data management plans, data publications and advise on long-term archiving.
These activities are partially funded by the German Science Foundation (DFG) and the Friedrich-Schiller-University of Jena.},
   name={Article},
   url={https://eco.confex.com/eco/2015/webprogram/Paper55116.html}
  },

  @article{CHAMANARA201506,
   title={An Extensible Conceptual Model for Tabular Scientific Datasets},
   authors={Javad Chamanara, Michael Owonibi, Alsayed Algergawy, Roman Gerlach},
   source={	The International Symposium on Challenges for Designing and Using Datasets (DATASETS 2015), June 21 - 26, 2015 - Brussels, Belgium},
   place={Brussels, Belgium},
   date={2015-06-01},
   year={2015},
   type={Conference Paper},
   abstract={There is a proliferation of datasets generated by various scientists of different scientific disciplines. Therefore, there is a growing need to construct and develop platforms that enable scientists to capture, exchange, process, and interpret data for immediate use, as well as to store and manage data to support future reuse. Modeling and organizing data within such platforms are key challenges. To this end, in this paper, we introduce the dataset model of the BExIS 2 platform and how data can be organized inside the model. In particular, we describe the anatomy of a general purpose tabular dataset, which consists of data tuples to represent the table rows and data cells that are compound objects holding the obtained values and their auxiliary information. The structure of datasets is defined and applied separately in order to factor out shared concepts such as unit of measurement, methodology, data type, valid and missing values, processing functions and so on. The datasets are extensible in multiple ways and can be annotated on various levels utilizing taxonomies, ontologies, and custom metadata structures.},
   name={Article},
   url={https://fusion.cs.uni-jena.de/bpp/wp-content/uploads/sites/8/2015/12/ChamanaraJ_etal_DATASETS2015.pdf}
  },

  @article{KONIG2016,
   title={BEXIS 2 – research data management towards data integration.},
   authors={Birgitta König-Ries, Javad Chamanara, David Blaa, Sven Thiel, Martin Hohmuth, Nafiseh Navabpour},
   source={SciDataCon 2016, International Data Week},
   place={Denver, CO, USA},
   date={2016-09-13},
   year={2016},
   type={Conference Paper},
   abstract={BEXIS 2 is an open source software for research data management in large scale projects with several hundred researchers. It has been designed to support the entire data life cycle during the active project phase. Requirements have been gathered from researchers in the biodiversity domain. However, it may serve other communities, too. In the Biodiversity domain a large portion of the data is collected in the field or laboratory and is structured as tabular data. Generic data management repositories (e.g. Fedora Repository, DSpace, ckan) mostly do not handle the internal structure of a dataset. With BEXIS 2 researchers are able to design, store and re-use data structures, which facilitates data discovery and data integration. In BEXIS 2 data structures of tabular data comprise any number of variables, which can be defined by a data type, a unit of measurement, and various other constraints. This precise definition strongly supports discoverability and reuse of data. Other advanced features of the current BEXIS 2 system are dataset versioning, management of multiple metadata schema, a faceted search and customizable data access (i.e. filter, sort, select, views), direct data access through APIs and a highly flexible security system (incl. single sign-on).},
  },

  @article{GERLACH201609,
   title={How to improve data visibility, re-use and fitness for use – technical and non-technical approaches while developing a data management software},
   authors={Roman Gerlach, Birgitta König-Ries},
   source={46th Annual Meeting of the Ecological Society of Germany, Austria and Switzerland (GFÖ 2016)},
   place={Marburg, Germany},
   date={2016-09-08},
   year={2016},
   type={Conference Paper},
  },

  @article{GERLACH201709,
   title={FAIR Data Management in Collaborative Projects Using BEXIS 2},
   authors={Roman Gerlach, Masoud Allahyari, Afereh Bahrami, David Schöne},
   source={RDA 10th Plenary Meeting},
   place={Montreal, Canada},
   date={2017-09-19},
   year={2017},
   type={Publication},
   abstract={	BEXIS 2 is a modular, scalable, interoperable, free and open source system supporting large research consortia on all aspects of data life cycle management. The software is being developed based on requirements from the biodiversity and ecology domain that mostly deal with tabular data, but it can be configured to serve other domains and data types as well. BEXIS 2 is very flexible and can be instantiated with multiple tenants, multiple metadata schemas, and various database systems. System features supporting the FAIR data principles are a faceted search (incl. primary data), a customizable data download and export (i.e., filter, sort, select, views), direct data access via API’s (e.g., from R), a highly flexible security system (incl. single sign-on), dataset versioning, and a dedicated management of data structures, variables and units of measures.},
   name={Article},
   url={https://fusion.cs.uni-jena.de/bpp/wp-content/uploads/sites/8/2017/10/Bexis_poster.jpg}
  },

  @article{10.3897/BDJ.9.e72901,
	authors = {Javad Chamanara and Jitendra Gaikwad and Roman Gerlach and Alsayed Algergawy and Andreas Ostrowski and Birgitta König-Ries},
	title = {BEXIS2: A FAIR-aligned data management system for biodiversity, ecology and environmental data},
	year = {2021},
	type={Publication},
	abstract = {Obtaining fit-to-use data associated with diverse aspects of biodiversity, ecology and environment is challenging since often it is fragmented, sub-optimally managed and available in heterogeneous formats. Recently, with the universal acceptance of the FAIR data principles, the requirements and standards of data publications have changed substantially. Researchers are encouraged to manage the data as per the FAIR data principles and ensure that the raw data, metadata, processed data, software, codes and associated material are securely stored and the data be made available with the completion of the research.We have developed BEXIS2 as an open-source community-driven web-based research data management system to support research data management needs of mid to large-scale research projects with multiple sub-projects and up to several hundred researchers. BEXIS2 is a modular and extensible system providing a range of functions to realise the complete data lifecycle from data structure design to data collection, data discovery, dissemination, integration, quality assurance and research planning. It is an extensible and customisable system that allows for the development of new functions and customisation of its various components from database schemas to the user interface layout, elements and look and feel.During the development of BEXIS2, we aimed to incorporate key aspects of what is encoded in FAIR data principles. To investigate the extent to which BEXIS2 conforms to these principles, we conducted the self-assessment using the FAIR indicators, definitions and criteria provided in the FAIR Data Maturity Model. Even though the FAIR data maturity model is developed initially to judge the conformance of datasets, the self-assessment results indicated that BEXIS2 remarkably conforms and supports FAIR indicators. BEXIS2 strongly conforms to the indicators Findability and Accessibility. The indicator Interoperability is moderately supported as of now; however, for many of the lesssupported facets, we have concrete plans for improvement. Reusability (as defined by the FAIR data principles) is partially achieved.This paper also illustrates community deployment examples of the BEXIS2 instances as success stories to exemplify its capacity to meet the biodiversity and ecological data management needs of differently sized projects and serve as an organisational research data management system.},
	issn = {1314-2836},
	pages = {e72901},
	url = {https://doi.org/10.3897/BDJ.9.e72901},
	eprint = {https://doi.org/10.3897/BDJ.9.e72901},
	journal = {Biodiversity Data Journal}
},
`;async function yt(){return{body:mt.entries(gt).sort((F,N)=>new Date(N.DATE)-new Date(F.DATE))}}const bt=Object.freeze(Object.defineProperty({__proto__:null,load:yt},Symbol.toStringTag,{value:"Module"}));export{bt as _,yt as l};
async function e(){const t=await fetch("https://raw.githubusercontent.com/BEXIS2/Documents/master/System/system%20functionalities.md");return{status:t.status,doc:t.ok&&await t.text()}}const o=Object.freeze(Object.defineProperty({__proto__:null,load:e},Symbol.toStringTag,{value:"Module"}));export{o as _,e as l};
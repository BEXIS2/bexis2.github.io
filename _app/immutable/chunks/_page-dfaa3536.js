async function t(){const e=await fetch("https://raw.githubusercontent.com/BEXIS2/Documents/master/System/modules_overview.md");return console.log("load releases"),{status:e.status,modules:await e.text()}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:t},Symbol.toStringTag,{value:"Module"}));export{s as _,t as l};

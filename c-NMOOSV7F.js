import{e as k}from"./c-Q5NMJAH5.js";import{f as P,g as S}from"./c-EMG22ZJB.js";import"./c-ITEA2UPL.js";import"./c-LZWDDIGQ.js";import{b as x,g as $}from"./c-SIYIBQB3.js";import{b as g,c as v}from"./c-7CJWDRQ4.js";import"./c-E6MVXD5Z.js";import{d as b}from"./c-7SA2DYP3.js";import"./c-ZAQA7L4O.js";import"./c-2SGKD7PA.js";import"./c-KPGOLG5O.js";import{g as w}from"./c-VFRQ4LKT.js";import"./c-VYJREQA7.js";import"./c-KAZXLEVL.js";import{E as f,ba as h}from"./c-2FLAFJWN.js";import"./c-E6GD7TWK.js";import{e as d,f as u}from"./c-62IXJUWR.js";import"./c-EJSKQDKX.js";import{b as m}from"./c-36X2LLUK.js";import"./c-PBVGMHWF.js";import"./c-427Z5ASM.js";var l=6,M=3;function z(){let r=k(),n=r.filter(e=>!e.ref.startsWith("srs:")).slice(0,1),i=r.filter(e=>e.ref.startsWith("srs:")).slice(0,3),c=S(2),s=[...i,...n,...c];if(s.length<l)try{s.push(...w(l-s.length))}catch{}return u(s).slice(0,l)}function E(r){if(P().length<4)return r.innerHTML=`<a class="back-link" href="#parcours">\u2190 Parcours</a>
    <section class="card blanc-intro"><h1>\u26A1 S\xE9ance express</h1><p class="lead">Terminez une ou deux le\xE7ons d'abord : la s\xE9ance express r\xE9vise les mots que vous avez appris.</p>
    <a class="btn primary" href="#parcours">Aller au parcours</a></section>`,!0;let n=z(),i=new Map(Object.values(m.vocab||{}).map(s=>[s.zh,s])),c=Date.now();return document.body.classList.add("focus-mode"),$(r,{title:"\u26A1 S\xE9ance express \xB7 3 minutes",questions:n,xpPerAnswer:5,deadline:Date.now()+M*6e4,onAnswer:({index:s,correct:e})=>{let t=n[s]?.ref||"";if(t.startsWith("srs:gen:")){let a=i.get(t.slice(8));a&&b(a,e?"good":"again")}},onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:s=>{document.body.classList.remove("focus-mode");let e=s.filter(y=>y.correct).length,t=s.length,a=f({label:"S\xE9ance express",score:e,total:t,xpPer:5,key:"express"}),p=Math.round((Date.now()-c)/1e3),o=Math.round(e/Math.max(1,t)*100);r.innerHTML=`
      <section class="results ${o>=50?"ok":"ko"}">
        <div class="res-hero happy"><span class="res-mascot">${g(o>=50?"cheer":"idle",{size:110})}</span><span class="m-bubble res-bubble">${d(v(o>=50?"win":"good"))}</span></div>
        <h1>${o===100?"Sans faute, et en express ! \u26A1":"S\xE9ance express termin\xE9e"}</h1>
        <p class="lead">${e} / ${t} bonnes r\xE9ponses en ${Math.floor(p/60)} min ${String(p%60).padStart(2,"0")}</p>
        <div class="res-tiles">
          <div class="rt t-streak"><small>S\xE9rie</small><b>${h()} j</b><span>\u{1F525}</span></div>
          <div class="rt t-xp"><small>${a.capped?"XP":"Gagn\xE9s"}</small><b>${a.capped?"d\xE9j\xE0 pris":`+${a.xpGained}`}</b><span>\u26A1</span></div>
        </div>
        ${x(s,{open:!1})}
        <div class="result-actions">
          <a class="btn primary big" href="#express" data-reload>Encore 3 minutes</a>
          <a class="btn ghost" href="#seance">S\xE9ance compl\xE8te (\u2248 10 min)</a>
        </div>
      </section>`}}),!0}export{E as renderExpress};

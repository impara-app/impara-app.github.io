import{t as n}from"./c-O7XFUMVD.js";import{e as l,f as c}from"./c-6AJRVT3S.js";import{e as p,x as t}from"./c-62IXJUWR.js";import{f as i,g as o}from"./c-EDIVJPJP.js";import{b as a}from"./c-36X2LLUK.js";import"./c-PBVGMHWF.js";import"./c-427Z5ASM.js";function u(s){return s.type==="mcq"?s.options[s.answer]:s.type==="match"?s.pairs.map(e=>`${t(e[0])} = ${t(e[1])}`).join(" \xB7 "):s.answer[0]}function g(s){let e=Object.values(a.errors).map(r=>({...r,q:i(r.ref),t:l(r.ref)?c:p})).filter(r=>r.q).sort((r,m)=>m.count-r.count);s.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head">
    <p class="eyebrow">Cahier d'erreurs</p>
    <h1>\u{1F501} ${e.length?`${e.length} notion${e.length>1?"s":""} \xE0 retravailler`:"Rien \xE0 revoir"}</h1>
    <p class="muted">Chaque question rat\xE9e est rang\xE9e ici. Elle dispara\xEEt apr\xE8s <b>${n} bonnes r\xE9ponses d'affil\xE9e</b>. ${a.mastered?`D\xE9j\xE0 <b>${a.mastered}</b> notion(s) ma\xEEtris\xE9e(s) !`:""}</p>
    ${e.length?`<a class="btn primary big" href="#revision">Lancer une r\xE9vision (${Math.min(10,e.length)} question${e.length>1?"s":""}) \u2192</a>`:""}
  </header>
  ${e.length?`<ul class="error-list">${e.map(r=>`
    <li class="card error-item">
      <div class="err-top">
        <span class="tag">${r.t(o(r.ref))}</span>
        <span class="err-count" title="Nombre d'erreurs">\u2717 ${r.count}</span>
        <span class="err-mastery" title="Progression vers la ma\xEEtrise">${"\u25CF".repeat(r.streak)}${"\u25CB".repeat(n-r.streak)}</span>
      </div>
      <p class="err-q">${r.t(r.q.q)}</p>
      ${r.lastAnswer?`<p class="err-given">Votre r\xE9ponse : <s>${r.t(r.lastAnswer)}</s></p>`:""}
      <p class="err-ok">Bonne r\xE9ponse : <b>${r.t(u(r.q))}</b></p>
      ${r.q.explain?`<p class="err-explain">\u{1F4A1} ${r.t(r.q.explain)}</p>`:""}
    </li>`).join("")}</ul>`:'<div class="empty-state"><span>\u{1F31F}</span><p>Aucune erreur en attente. Continuez comme \xE7a !</p><a class="btn primary" href="#parcours">Retour au parcours</a></div>'}`}export{g as renderErreurs};

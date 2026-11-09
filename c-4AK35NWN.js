import{b as f}from"./c-ZAQA7L4O.js";import{b as j}from"./c-H4RWLSE7.js";import"./c-NJQ6RLTZ.js";import{C as v,v as u}from"./c-V3FWSTN4.js";import{g as q,h}from"./c-IJDGVJEV.js";import{a as y,b as d,h as L}from"./c-H3CKUEKX.js";import{x as c}from"./c-ZUK6C2ZE.js";import"./c-427Z5ASM.js";var l={mod:"all",q:""},E=t=>[t.title,t.intro,...t.sections.flatMap(i=>[i.title,i.text,...(i.examples||[]).flat(),...(i.table?.rows||[]).flat()])].join(" ").replace(/<[^>]+>/g," ").toLowerCase();function z(t){let i=y.flatMap(e=>e.lessons.filter(s=>s.module!=="vocab"&&s.sections?.length).map(s=>({l:s,lv:e}))),r=i.filter(({l:e})=>v(e)||u(e.id)),$=i.length-r.length,b=Object.keys(d).filter(e=>r.some(({l:s})=>s.module===e));t.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head">
    <p class="eyebrow">Fiches de grammaire</p>
    <h1>\u{1F4CB} ${r.length} fiche${r.length>1?"s":""}</h1>
    <p class="muted">Toutes les explications de vos le\xE7ons, rang\xE9es par th\xE8me.${$?` ${$} autres se d\xE9bloquent au fil du parcours.`:""}</p>
  </header>
  <div class="toolbar fi-bar">
    <input type="search" class="search" placeholder="Rechercher (ex. : subjonctif, \u4E86, articles\u2026)" value="${c(l.q)}" aria-label="Rechercher une fiche">
    <div class="chips fi-mods" role="group" aria-label="Th\xE8me">
      ${["all",...b].map(e=>`<button type="button" class="chip-btn ${l.mod===e?"on":""}" data-mod="${e}">${e==="all"?"Tout":`${f(e,{size:15})} ${c(d[e].label)}`}</button>`).join("")}
    </div>
  </div>
  <div class="fi-list"></div>`;let g=t.querySelector(".fi-list"),p=()=>{let e=l.q.trim().toLowerCase(),s=r.filter(({l:o})=>(l.mod==="all"||o.module===l.mod)&&(!e||E(o).includes(e)));if(!s.length){g.innerHTML='<p class="empty">Aucune fiche ne correspond.</p>';return}let T=l.mod==="all"?b.map(o=>[o,s.filter(({l:m})=>m.module===o)]).filter(([,o])=>o.length):[[l.mod,s]];g.innerHTML=T.map(([o,m])=>`
      <h2 class="fi-group">${f(o,{size:18})} ${c(d[o].label)} <small>${m.length}</small></h2>
      ${m.map(({l:a,lv:n})=>`
        <details class="fiche card" style="--lvl:${n.color}" ${e&&s.length<=3?"open":""}>
          <summary><span class="fi-emoji">${a.emoji}</span><span class="fi-t"><b>${q(n.id,a.title)}</b><small>${c(L(n))}${u(a.id)?"":" \xB7 pas encore valid\xE9e"}</small></span></summary>
          <div class="fi-body">
            ${a.intro?`<p class="lead">${h(n.id,a.intro)}</p>`:""}
            ${a.sections.map((k,w)=>j(k,w,n.id)).join("")}
            ${a.mnemo?`<aside class="mnemo"><span class="mnemo-icon">\u{1F4A1}</span><div><p class="eyebrow">Astuce</p><p>${h(n.id,a.mnemo)}</p></div></aside>`:""}
            <a class="btn ghost small" href="#lecon-${a.id}">Ouvrir la le\xE7on \u2192</a>
          </div>
        </details>`).join("")}`).join("")};return t.querySelector(".search").oninput=e=>{l.q=e.target.value,p()},t.querySelectorAll("[data-mod]").forEach(e=>e.onclick=()=>{l.mod=e.dataset.mod,t.querySelectorAll("[data-mod]").forEach(s=>s.classList.toggle("on",s===e)),p()}),p(),!0}export{z as renderFiches};

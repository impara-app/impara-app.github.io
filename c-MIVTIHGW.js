import{a as L,b as j}from"./c-TV5AMFOY.js";import{F as x,j as k,k as P,la as w,ma as V,na as R,o as $,q,s as S}from"./c-4URL7VOQ.js";import{a as z}from"./c-ZAQA7L4O.js";import{c as A}from"./c-MQKQRSKL.js";import"./c-6BRODPYL.js";import"./c-3M6EEBJX.js";import{I as b,d as H,e as f,f as v,j as M,y as n}from"./c-HPXZTFFF.js";import"./c-427Z5ASM.js";var D=e=>n(e?.pseudo||e?.username||"Joueur"),G=(e,s="")=>`<span class="s-avatar ${s} ${k(e?.frame)}"${e?.color?` style="background:${n(e.color)}"`:""}>${n(e?.avatar||"\u{1F464}")}</span>`,m=e=>Number(e||0).toLocaleString("fr-FR"),J=["\u{1F947}","\u{1F948}","\u{1F949}"],d="all",u=null;function X(e){return!A()||!q()?(e.innerHTML=`<header class="page-head"><h1>\u{1F9ED} D\xE9couvrir</h1></header>
      <section class="card"><p>Connectez-vous \xE0 votre compte (Param\xE8tres \u203A Compte) pour d\xE9couvrir les autres joueurs.</p>
      <a class="btn primary" href="#reglages-compte">Se connecter</a></section>`,!0):!1}var E=`<div class="dc-skel" aria-busy="true">${"<span></span>".repeat(5)}</div>`;async function Z(e){if(X(e))return!0;let s=location.hash;e.innerHTML=`<header class="page-head dc-head"><h1>\u{1F9ED} D\xE9couvrir</h1>
    <p class="muted">La communaut\xE9 ${n(f[v]?.label?`\xB7 ${f[v].label}`:"")}</p></header>
    <div data-zone="dc">${u?"":E}</div>`,u&&g(e,u);try{$().ready||await S(),u=await w()}catch(c){return location.hash!==s||u||(e.querySelector('[data-zone="dc"]').innerHTML=`<section class="card"><p class="form-msg error">${n(c.message)}</p></section>`),!0}return location.hash===s&&g(e,u),!0}function g(e,s){let c=e.querySelector('[data-zone="dc"]');if(!c)return;let r=$().me,i=d==="week"?s.week||[]:s.top||[];c.innerHTML=`
    <section class="dc-stats">
      <div class="dc-stat"><span>\u{1F465}</span><b>${m(s.players)}</b><small>joueurs inscrits</small></div>
      <div class="dc-stat"><span>\u{1F525}</span><b>${m(s.active)}</b><small>actifs cette semaine</small></div>
      <div class="dc-stat"><span>\u26A1</span><b>${m(s.xp)}</b><small>XP gagn\xE9s en ${n(f[v]?.label?.toLowerCase()||"")}</small></div>
      <div class="dc-stat"><span>\u{1F3C6}</span><b>${s.my_rank?`${s.my_rank}<sup>${s.my_rank===1?"er":"e"}</sup>`:"\u2013"}</b><small>votre place sur ${m(s.learners)}</small></div>
    </section>
    ${s.me_visible?"":`<section class="card dc-join"><p><b>Vous n'apparaissez pas encore dans le classement.</b><br><span class="muted small">Votre pseudo, votre avatar et votre XP deviendront visibles des autres joueurs.</span></p>
      <button class="btn primary" data-join>Appara\xEEtre</button></section>`}
    <section class="card dc-board">
      <div class="seg wide dc-tabs" role="tablist">
        <button data-dtab="all" class="${d==="all"?"on":""}">XP au total</button>
        <button data-dtab="week" class="${d==="week"?"on":""}">Cette semaine</button>
      </div>
      ${i.length?`<ol class="s-board dc-list">${i.map((a,o)=>{let l=a.id===r?.id;return`<li class="${l?"me":""}"><a href="#joueur-${n(a.username)}">
          <span class="s-rank">${o<3?J[o]:o+1}</span>${G(a,"sm")}
          <span class="s-board-name">${l?"Vous":D(a)}<small>@${n(a.username)}${d==="all"&&a.level?` \xB7 ${n(a.level)}`:""}${d==="all"&&a.streak?` \xB7 \u{1F525} ${a.streak}`:""}</small></span>
          <b>${m(a.xp)} XP</b></a></li>`}).join("")}</ol>`:`<p class="muted small dc-empty">${d==="week"?"Personne n'a encore gagn\xE9 d'XP cette semaine.":"Aucun joueur visible pour le moment."}</p>`}
      <p class="fr-foot">${m(s.visible)} joueur${s.visible>1?"s":""} visible${s.visible>1?"s":""} \xB7 seuls ceux qui l'ont choisi apparaissent.</p>
    </section>
    <form class="card dc-search" data-search><input name="u" placeholder="Rechercher un joueur (@nom)" autocomplete="off" autocapitalize="none"><button class="btn ghost small">Voir</button></form>`,c.querySelectorAll("[data-dtab]").forEach(a=>a.onclick=()=>{d=a.dataset.dtab,g(e,s)}),c.querySelector("[data-join]")?.addEventListener("click",async a=>{a.currentTarget.disabled=!0;try{await R(!0),u=await w(),g(e,u),b("Vous apparaissez dans D\xE9couvrir \u2713","ok")}catch(o){b(o.message||"Erreur","warn"),a.currentTarget.disabled=!1}}),c.querySelector("[data-search]").onsubmit=a=>{a.preventDefault();let o=a.currentTarget.u.value.trim().toLowerCase().replace(/^@/,"");o&&(location.hash=`joueur-${o}`)}}async function ee(e,s){if(X(e))return!0;let c=location.hash;e.innerHTML=`<a class="back-link" href="#decouvrir">\u2190 D\xE9couvrir</a>${E}`;let r;try{$().ready||await S(),r=await V(s)}catch(t){return location.hash===c&&(e.innerHTML=`<a class="back-link" href="#decouvrir">\u2190 D\xE9couvrir</a><section class="card"><p class="form-msg error">${n(t.message)}</p></section>`),!0}if(location.hash!==c)return!0;if(!r||r.hidden)return e.innerHTML=`<a class="back-link" href="#decouvrir">\u2190 D\xE9couvrir</a><section class="card"><p>${r?`@${n(s)} n'appara\xEEt pas dans D\xE9couvrir.`:`Aucun joueur ne s'appelle @${n(s)}.`}</p></section>`,!0;if(r.rel==="friend")return location.replace(`#ami-${r.username}`),!0;if(r.rel==="me")return location.replace("#profil"),!0;let i=r.stats||{},a=Object.keys(f).filter(t=>i[t]),o=r.color||"#cfe6ff",l=P(r.banner),O=(()=>{let t=parseInt(o.slice(1),16);return((t>>16)*299+(t>>8&255)*587+(t&255)*114)/1e3>150?"#1d2733":"#ffffff"})(),T=Math.max(0,...a.map(t=>i[t].streak||0)),_=a.reduce((t,p)=>t+(i[p].xp||0),0),F={none:`<button class="btn primary" data-add>${z("user-plus",{size:18})} Ajouter en ami</button>`,sent:'<button class="btn ghost" disabled>Demande envoy\xE9e</button>',received:'<a class="btn primary" href="#amis">R\xE9pondre \xE0 sa demande</a>'}[r.rel]||"";e.innerHTML=`<div class="pf fp">
    <section class="fh-banner ${l?"has-pattern":""}" style="--banner:${n(o)};--banner-ink:${l?l.ink:O}${l?`;--banner-bg:${l.bg}`:""}">
      <a class="fh-btn" href="#decouvrir" aria-label="Retour">\u2039</a>
      <span class="fh-avatar ${k(r.frame)}">${n(r.avatar||"\u{1F464}")}</span>
    </section>
    <section class="pf-body fh-body">
      <h1 class="fh-name">${D(r)}</h1>
      <p class="fh-handle">@${n(r.username)} \xB7 inscrit depuis ${new Date(r.since).toLocaleDateString("fr-FR",{month:"long",year:"numeric"})}</p>
      <div class="fh-chips">
        ${T?`<span class="fh-chip fire">\u{1F525} ${T} j de s\xE9rie</span>`:""}
        <span class="fh-chip gold">\u26A1 ${m(_)} XP</span>
        ${a.map(t=>`<span class="fh-chip"><span class="flag mini">${H(t)}</span>${n(i[t].level||"")}</span>`).join("")}
      </div>
      <div class="dc-act">${F}</div>
      <div data-recap>${L(i,a,null,`${D(r)} n'a pas encore commenc\xE9 de parcours.`)}</div>
    </section></div>`;let y=e.querySelector("[data-recap]"),C=t=>{y.innerHTML=L(i,a,t,""),j(y,C)};return j(y,C),e.querySelector("[data-add]")?.addEventListener("click",async t=>{let p=t.currentTarget;p.disabled=!0;try{let h=await x(r.username);b(h==="accepted"?"Vous \xEAtes maintenant amis \u{1F389}":"Demande d'ami envoy\xE9e \u2713","ok"),p.outerHTML=`<button class="btn ghost" disabled>${h==="accepted"?"\u2713 Amis":"Demande envoy\xE9e"}</button>`}catch(h){b(h.message,"warn"),p.disabled=!1}}),!0}var ae=()=>!!M.settings.discoverTab;export{ae as discoverTabOn,Z as renderDecouvrir,ee as renderJoueur};

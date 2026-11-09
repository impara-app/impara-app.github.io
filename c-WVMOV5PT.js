import{F as P,j as k,k as M,la as w,ma as x,na as z,o as $,q as H,s as S}from"./c-BVX5C3ON.js";import{a as T}from"./c-ZAQA7L4O.js";import{c as C}from"./c-KFYK736G.js";import"./c-POB3GHDO.js";import"./c-PJBGR76R.js";import{I as f,d as y,e as b,f as h,j as D,y as r}from"./c-73F2H2ED.js";import"./c-427Z5ASM.js";var j=a=>r(a?.pseudo||a?.username||"Joueur"),R=(a,s="")=>`<span class="s-avatar ${s} ${k(a?.frame)}"${a?.color?` style="background:${r(a.color)}"`:""}>${r(a?.avatar||"\u{1F464}")}</span>`,i=a=>Number(a||0).toLocaleString("fr-FR"),N=["\u{1F947}","\u{1F948}","\u{1F949}"],p="all",m=null;function A(a){return!C()||!H()?(a.innerHTML=`<header class="page-head"><h1>\u{1F9ED} D\xE9couvrir</h1></header>
      <section class="card"><p>Connectez-vous \xE0 votre compte (Param\xE8tres \u203A Compte) pour d\xE9couvrir les autres joueurs.</p>
      <a class="btn primary" href="#reglages-compte">Se connecter</a></section>`,!0):!1}var q=`<div class="dc-skel" aria-busy="true">${"<span></span>".repeat(5)}</div>`;async function K(a){if(A(a))return!0;let s=location.hash;a.innerHTML=`<header class="page-head dc-head"><h1>\u{1F9ED} D\xE9couvrir</h1>
    <p class="muted">La communaut\xE9 ${r(b[h]?.label?`\xB7 ${b[h].label}`:"")}</p></header>
    <div data-zone="dc">${m?"":q}</div>`,m&&g(a,m);try{$().ready||await S(),m=await w()}catch(o){return location.hash!==s||m||(a.querySelector('[data-zone="dc"]').innerHTML=`<section class="card"><p class="form-msg error">${r(o.message)}</p></section>`),!0}return location.hash===s&&g(a,m),!0}function g(a,s){let o=a.querySelector('[data-zone="dc"]');if(!o)return;let t=$().me,d=p==="week"?s.week||[]:s.top||[];o.innerHTML=`
    <section class="dc-stats">
      <div class="dc-stat"><span>\u{1F465}</span><b>${i(s.players)}</b><small>joueurs inscrits</small></div>
      <div class="dc-stat"><span>\u{1F525}</span><b>${i(s.active)}</b><small>actifs cette semaine</small></div>
      <div class="dc-stat"><span>\u26A1</span><b>${i(s.xp)}</b><small>XP gagn\xE9s en ${r(b[h]?.label?.toLowerCase()||"")}</small></div>
      <div class="dc-stat"><span>\u{1F3C6}</span><b>${s.my_rank?`${s.my_rank}<sup>${s.my_rank===1?"er":"e"}</sup>`:"\u2013"}</b><small>votre place sur ${i(s.learners)}</small></div>
    </section>
    ${s.me_visible?"":`<section class="card dc-join"><p><b>Vous n'apparaissez pas encore dans le classement.</b><br><span class="muted small">Votre pseudo, votre avatar et votre XP deviendront visibles des autres joueurs.</span></p>
      <button class="btn primary" data-join>Appara\xEEtre</button></section>`}
    <section class="card dc-board">
      <div class="seg wide dc-tabs" role="tablist">
        <button data-dtab="all" class="${p==="all"?"on":""}">XP au total</button>
        <button data-dtab="week" class="${p==="week"?"on":""}">Cette semaine</button>
      </div>
      ${d.length?`<ol class="s-board dc-list">${d.map((e,l)=>{let u=e.id===t?.id;return`<li class="${u?"me":""}"><a href="#joueur-${r(e.username)}">
          <span class="s-rank">${l<3?N[l]:l+1}</span>${R(e,"sm")}
          <span class="s-board-name">${u?"Vous":j(e)}<small>@${r(e.username)}${p==="all"&&e.level?` \xB7 ${r(e.level)}`:""}${p==="all"&&e.streak?` \xB7 \u{1F525} ${e.streak}`:""}</small></span>
          <b>${i(e.xp)} XP</b></a></li>`}).join("")}</ol>`:`<p class="muted small dc-empty">${p==="week"?"Personne n'a encore gagn\xE9 d'XP cette semaine.":"Aucun joueur visible pour le moment."}</p>`}
      <p class="fr-foot">${i(s.visible)} joueur${s.visible>1?"s":""} visible${s.visible>1?"s":""} \xB7 seuls ceux qui l'ont choisi apparaissent.</p>
    </section>
    <form class="card dc-search" data-search><input name="u" placeholder="Rechercher un joueur (@nom)" autocomplete="off" autocapitalize="none"><button class="btn ghost small">Voir</button></form>`,o.querySelectorAll("[data-dtab]").forEach(e=>e.onclick=()=>{p=e.dataset.dtab,g(a,s)}),o.querySelector("[data-join]")?.addEventListener("click",async e=>{e.currentTarget.disabled=!0;try{await z(!0),m=await w(),g(a,m),f("Vous apparaissez dans D\xE9couvrir \u2713","ok")}catch(l){f(l.message||"Erreur","warn"),e.currentTarget.disabled=!1}}),o.querySelector("[data-search]").onsubmit=e=>{e.preventDefault();let l=e.currentTarget.u.value.trim().toLowerCase().replace(/^@/,"");l&&(location.hash=`joueur-${l}`)}}async function Q(a,s){if(A(a))return!0;let o=location.hash;a.innerHTML=`<a class="back-link" href="#decouvrir">\u2190 D\xE9couvrir</a>${q}`;let t;try{$().ready||await S(),t=await x(s)}catch(n){return location.hash===o&&(a.innerHTML=`<a class="back-link" href="#decouvrir">\u2190 D\xE9couvrir</a><section class="card"><p class="form-msg error">${r(n.message)}</p></section>`),!0}if(location.hash!==o)return!0;if(!t||t.hidden)return a.innerHTML=`<a class="back-link" href="#decouvrir">\u2190 D\xE9couvrir</a><section class="card"><p>${t?`@${r(s)} n'appara\xEEt pas dans D\xE9couvrir.`:`Aucun joueur ne s'appelle @${r(s)}.`}</p></section>`,!0;if(t.rel==="friend")return location.replace(`#ami-${t.username}`),!0;if(t.rel==="me")return location.replace("#profil"),!0;let d=t.stats||{},e=Object.keys(b).filter(n=>d[n]),l=t.color||"#cfe6ff",u=M(t.banner),V=(()=>{let n=parseInt(l.slice(1),16);return((n>>16)*299+(n>>8&255)*587+(n&255)*114)/1e3>150?"#1d2733":"#ffffff"})(),L=Math.max(0,...e.map(n=>d[n].streak||0)),X=e.reduce((n,c)=>n+(d[c].xp||0),0),E={none:`<button class="btn primary" data-add>${T("user-plus",{size:18})} Ajouter en ami</button>`,sent:'<button class="btn ghost" disabled>Demande envoy\xE9e</button>',received:'<a class="btn primary" href="#amis">R\xE9pondre \xE0 sa demande</a>'}[t.rel]||"";return a.innerHTML=`<div class="pf fp">
    <section class="fh-banner ${u?"has-pattern":""}" style="--banner:${r(l)};--banner-ink:${u?u.ink:V}${u?`;--banner-bg:${u.bg}`:""}">
      <a class="fh-btn" href="#decouvrir" aria-label="Retour">\u2039</a>
      <span class="fh-avatar ${k(t.frame)}">${r(t.avatar||"\u{1F464}")}</span>
    </section>
    <section class="pf-body fh-body">
      <h1 class="fh-name">${j(t)}</h1>
      <p class="fh-handle">@${r(t.username)} \xB7 inscrit depuis ${new Date(t.since).toLocaleDateString("fr-FR",{month:"long",year:"numeric"})}</p>
      <div class="fh-chips">
        ${L?`<span class="fh-chip fire">\u{1F525} ${L} j de s\xE9rie</span>`:""}
        <span class="fh-chip gold">\u26A1 ${i(X)} XP</span>
        ${e.map(n=>`<span class="fh-chip"><span class="flag mini">${y(n)}</span>${r(d[n].level||"")}</span>`).join("")}
      </div>
      <div class="dc-act">${E}</div>
      ${e.length?e.map(n=>{let c=d[n];return`<div class="fp-recap"><p class="fp-lang"><span class="flag mini">${y(n)}</span>${r(b[n].label)} \xB7 <b>${r(c.level||"")}</b> <small>${r(c.levelName||"")}</small></p>
        <div class="pf-grid">
          <div class="pf-card"><span>\u26A1</span><b>${i(c.xp)}</b><small>XP au total</small></div>
          <div class="pf-card"><span>\u{1F525}</span><b>${c.streak||0} j</b><small>S\xE9rie</small></div>
          <div class="pf-card"><span>\u{1F4C8}</span><b>${c.pct??0} %</b><small>du parcours</small></div>
          <div class="pf-card"><span>\u{1F4D2}</span><b>${i(c.words)}</b><small>Mots appris</small></div>
          <div class="pf-card"><span>\u2705</span><b>${c.lessons??"\u2013"}</b><small>Le\xE7ons</small></div>
          <div class="pf-card"><span>\u{1F3C5}</span><b>${r(c.level||"\u2013")}</b><small>Niveau</small></div>
        </div></div>`}).join(""):`<p class="muted small">${j(t)} n'a pas encore commenc\xE9 de parcours.</p>`}
    </section></div>`,a.querySelector("[data-add]")?.addEventListener("click",async n=>{let c=n.currentTarget;c.disabled=!0;try{let v=await P(t.username);f(v==="accepted"?"Vous \xEAtes maintenant amis \u{1F389}":"Demande d'ami envoy\xE9e \u2713","ok"),c.outerHTML=`<button class="btn ghost" disabled>${v==="accepted"?"\u2713 Amis":"Demande envoy\xE9e"}</button>`}catch(v){f(v.message,"warn"),c.disabled=!1}}),!0}var U=()=>!!D.settings.discoverTab;export{U as discoverTabOn,K as renderDecouvrir,Q as renderJoueur};

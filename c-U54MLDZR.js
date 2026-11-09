import{a as B,b as N}from"./c-WEFCO2SZ.js";import"./c-KFYK736G.js";import{c as O}from"./c-TAR5CILF.js";import{t as M,v as R}from"./c-POB3GHDO.js";import{d as I}from"./c-JIOPGAS6.js";import{e as j,h as D}from"./c-PJBGR76R.js";import{E,K as A,L as V,f as C,j as P,l as z,y as o,z as H}from"./c-73F2H2ED.js";import"./c-427Z5ASM.js";var U={it:()=>import("./c-BUJRU6XR.js"),zh:()=>import("./c-NFO6XNUY.js")},b=(await(U[C]||U.it)()).default,x=d=>R(d.after),f=()=>C==="zh",se=()=>({total:b.length,open:b.filter(x).length,done:b.filter(d=>P.dialogues?.[d.id]?.done).length});function te(d){return d.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">Parler en situation</p><h1>\u{1F4AC} Dialogues</h1>
    <p class="muted">Une sc\xE8ne de la vie r\xE9elle : \xE0 chaque tour, choisissez la r\xE9plique qui convient. Attention aux r\xE9ponses maladroites !</p></header>
  <div class="story-list">
    ${b.map(i=>{let s=x(i),g=P.dialogues?.[i.id],p=j(i.after);return`<a class="story-item ${s?"":"locked"}" ${s?`href="#dialogue-${i.id}"`:'aria-disabled="true"'}>
        <span class="story-emoji">${s?i.emoji:"\u{1F512}"}</span>
        <span class="story-txt"><b class="${f()?"zh":""}">${o(i.title)} <em class="story-lvl">${o(D(i.level))}</em></b>
          ${i.titlePy?`<small class="py">${o(i.titlePy)}</small>`:""}
          <small>${s?o(i.intro):`Se d\xE9bloque apr\xE8s la le\xE7on \xAB ${o(p?.title||i.after)} \xBB`}</small></span>
        ${g?.done?`<span class="story-done" title="Meilleur score">${g.best} %</span>`:""}
      </a>`}).join("")}
  </div>`,!0}function ae(d,i){let s=b.find(e=>e.id===i);if(!s||!x(s))return!1;let g=f()&&I(s.level),p=s.turns.filter(e=>e.choices).length,h=0,q=0,m=!1;document.body.classList.add("focus-mode"),d.innerHTML=`
  <section class="story dlg">
    <div class="story-top">
      <button class="btn ghost small" data-quit aria-label="Quitter">\u2715</button>
      <div class="progress"><span class="story-bar"></span></div>
      ${B()}
    </div>
    <header class="story-head"><span class="big-emoji">${s.emoji}</span>
      <h1 class="${f()?"zh":""}">${o(s.title)}</h1>${s.titlePy?`<p class="py">${o(s.titlePy)}</p>`:""}
      <p class="muted">${o(s.intro)}</p></header>
    <div class="story-lines"></div>
    <div class="dlg-pick" hidden></div>
    <div class="story-foot"><button class="btn primary big" data-next>Commencer</button></div>
  </section>`;let $=e=>d.querySelector(e),X=$(".story-lines"),c=$(".dlg-pick"),r=$("[data-next]");$("[data-quit]").onclick=()=>{document.body.classList.remove("focus-mode"),location.hash="dialogues"};let w=(e,n=!0)=>E(e,{force:!0,voice:n?null:"alt"}),y=null;N(()=>({place:`Dialogue \xB7 ${s.title}`,audio:y?.t??y?.npc??"",question:y?.fr||"",expected:y?.py||""}));function S(e,n){y=e;let l=document.createElement("div");l.className=`sl talk ${n?"me":""}`,l.style.setProperty("--who",n?"var(--verde)":"#3b82c4"),l.innerHTML=`<span class="sl-who">${n?"Vous":o(s.npc)}</span>
      <div class="sl-bubble"><p class="sl-t ${f()?"zh":""}">${O(e.t??e.npc)}</p>
        ${e.py?`<p class="sl-py ${g?"":"hidden"}">${o(e.py)}</p>`:""}
        <p class="sl-fr hidden">${o(e.fr)}</p></div>
      <button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button>`,l.querySelector("[data-say]").onclick=t=>{t.stopPropagation(),w(e.t??e.npc,n)},l.onclick=()=>{l.querySelector(".sl-fr").classList.toggle("hidden"),l.querySelector(".sl-py")?.classList.remove("hidden")},X.appendChild(l),w(e.t??e.npc,n),l.scrollIntoView({behavior:"smooth",block:"end"})}function F(e){let n=H(e.choices.map((t,a)=>({...t,i:a}))),l=0;r.hidden=!0,c.hidden=!1,c.innerHTML=`<div class="dlg-head"><p class="eyebrow">\xC0 vous : que r\xE9pondez-vous ?</p>
        <button class="btn ghost small" data-fr>${m?"Masquer":"Voir"} les traductions</button></div>
      <div class="dlg-opts">${n.map(t=>`<button class="option dlg-opt" data-i="${t.i}">
        <span><b class="${f()?"zh":""}">${o(t.t)}</b>${t.py&&g?`<small class="py">${o(t.py)}</small>`:""}<small class="dlg-fr" ${m?"":"hidden"}>${o(t.fr)}</small></span>
        <i class="dlg-say" data-hear="${t.i}" role="button" aria-label="\xC9couter">\u{1F50A}</i></button>`).join("")}</div>
      <div class="dlg-fb" aria-live="polite"></div>`,c.querySelector("[data-fr]").onclick=t=>{m=!m,c.querySelectorAll(".dlg-fr").forEach(a=>a.hidden=!m),t.currentTarget.textContent=`${m?"Masquer":"Voir"} les traductions`},c.querySelectorAll("[data-hear]").forEach(t=>t.onclick=a=>{a.stopPropagation(),w(e.choices[+t.dataset.hear].t)}),c.scrollIntoView({behavior:"smooth",block:"end"}),c.querySelectorAll(".dlg-opt").forEach(t=>t.onclick=()=>{if(t.disabled)return;let a=e.choices[+t.dataset.i];l++;let v=c.querySelector(".dlg-fb");if(a.ok===0){t.disabled=!0,t.classList.add("wrong"),v.innerHTML=`<div class="dlg-res ko"><b>\u2717 \xC7a ne va pas</b><p>${o(a.why)}</p><p class="small muted">Choisissez une autre r\xE9ponse.</p></div>`;return}let u=e.choices.find(k=>k.ok===2)||a;l===1&&(q+=a.ok),c.querySelectorAll(".dlg-opt").forEach(k=>{k.disabled=!0,+k.dataset.i===e.choices.indexOf(u)&&k.classList.add("correct")}),a.ok===1&&t.classList.add("meh"),v.innerHTML=a.ok===2?`<div class="dlg-res ok"><b>\u2713 Parfait !</b><p>${o(a.why)}</p></div>`:`<div class="dlg-res meh"><b>\u2248 Compr\xE9hensible, mais maladroit</b><p>${o(a.why)}</p><p class="small">Plus naturel : <b class="${f()?"zh":""}">${o(u.t)}</b></p></div>`,r.hidden=!1,r.textContent="Continuer",r.focus(),r.onclick=()=>{c.hidden=!0,c.innerHTML="",S(a.ok===2?a:u,!0),L()}})}function L(){if(h>=s.turns.length){r.hidden=!1,r.textContent="Terminer",r.onclick=T;return}let e=s.turns[h++];if($(".story-bar").style.width=`${Math.round(h/s.turns.length*100)}%`,e.choices)return F(e);S(e,!1),s.turns[h]?.choices?setTimeout(()=>L(),700):(r.hidden=!1,r.textContent=h>=s.turns.length?"Terminer":"Continuer",r.onclick=h>=s.turns.length?T:L)}function T(){let e=Math.round(q/(2*p)*100),n=P.dialogues?.[s.id],l=!n?.done,t=M({label:`Dialogue \xB7 ${s.title}`,score:q,total:2*p,xpPer:5,key:`dialogue:${s.id}`}),a=0;l&&(a=20,M({label:"",score:1,total:0,xpPer:a})),z(u=>{u.dialogues={...u.dialogues||{},[s.id]:{done:!0,best:Math.max(n?.best||0,e),date:Date.now()}}}),document.body.classList.remove("focus-mode");let v=b.find(u=>x(u)&&!P.dialogues?.[u.id]?.done);d.innerHTML=`
    <section class="results ${e>=60?"ok":"ko"}">
      ${V(e,150,12)}
      <h1>${e===100?"Comme un natif ! \u{1F389}":e>=60?"Bien jou\xE9 !":"Dialogue termin\xE9"}</h1>
      <p class="lead">${q} / ${2*p} points \xB7 ${p} r\xE9pliques</p>
      <div class="result-chips">${t.capped&&!a?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${t.xpGained+a} XP</span>`}${a?'<span class="chip">\u{1F4AC} Nouveau dialogue</span>':""}</div>
      <div class="result-actions">
        ${v?`<a class="btn primary big" href="#dialogue-${v.id}">Dialogue suivant \u2192</a>`:'<a class="btn primary big" href="#dialogues">Tous les dialogues</a>'}
        <a class="btn ghost" href="#dialogue-${s.id}" data-reload>Rejouer</a>
      </div>
    </section>`,e===100&&A()}return r.onclick=()=>L(),!0}export{se as dialogueCount,ae as renderDialogue,te as renderDialogues};

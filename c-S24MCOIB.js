import{a as Q,b as I}from"./c-F4AT6JQ3.js";import{c as V}from"./c-NJQ6RLTZ.js";import{r as D,s as _,t as M,v as F}from"./c-V3FWSTN4.js";import{d as U}from"./c-IJDGVJEV.js";import{e as N,h as A}from"./c-H3CKUEKX.js";import{D as R,E as X,F as G,J as O,K as B,e as f,i as L,k as E,x as l}from"./c-ZUK6C2ZE.js";var W={it:()=>import("./c-63WSWNZF.js"),zh:()=>import("./c-HW3VVQCS.js")},J={[f]:(await(W[f]||W.it)()).default};var K=new Set(["\u738B\u660E","\u5F20\u4F1F","\u8001\u677F","\u7238\u7238","\u54E5\u54E5","\u5F1F\u5F1F","\u7237\u7237","Marco","Luca","Paolo","Giorgio","Signor Rossi","Cameriere","Barista","Impiegato","Selezionatore"]),Y=new Set(["L\xE9a","\u5F20\u4F1F\u7684\u5988\u5988","\u5C0F\u7F8E","\u59D0\u59D0","\u59B9\u59B9","\u5988\u5988","\u5976\u5976","\u670D\u52A1\u5458","Giulia","Sofia","Anna","Dottoressa","Commessa","Signora","Direttrice"]),q=()=>J[f]||[],S=i=>F(i.after),C=["#3b82c4","#c2410c","#7c3aed","#0f766e","#be185d"],pt=()=>({total:q().length,open:q().filter(S).length,done:q().filter(i=>L.stories?.[i.id]?.done).length});function ht(i){return i.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">Lire et \xE9couter</p><h1>\u{1F4D6} Histoires</h1>
    <p class="muted">De courts dialogues avec les mots de vos le\xE7ons. Touchez une phrase pour voir sa traduction.</p></header>
  <div class="story-list">
    ${q().map(n=>{let t=S(n),m=L.stories?.[n.id],v=N(n.after);return`<a class="story-item ${t?"":"locked"}" ${t?`href="#histoire-${n.id}"`:'aria-disabled="true"'}>
        <span class="story-emoji">${t?n.emoji:"\u{1F512}"}</span>
        <span class="story-txt"><b class="${f==="zh"?"zh":""}">${l(n.title)} <em class="story-lvl">${l(A(n.level||"A1"))}</em></b>
          ${n.titlePy?`<small class="py">${l(n.titlePy)}</small>`:""}
          <small>${t?l(n.intro):`Se d\xE9bloque apr\xE8s la le\xE7on \xAB ${l(v?.title||n.after)} \xBB`}</small></span>
        ${m?.done?`<span class="story-done" title="Termin\xE9e">${m.best}/${m.total} \u2713${D(`story:${n.id}`)?`<small>XP dans ${_(D(`story:${n.id}`))}</small>`:""}</span>`:""}
      </a>`}).join("")}
  </div>`,!0}function mt(i,n){let t=q().find(e=>e.id===n);if(!t||!S(t))return!1;let m=f==="zh"&&U(t.level||"A1"),v=[...new Set(t.lines.map(e=>e.who).filter(Boolean))],H=e=>C[v.indexOf(e)%C.length],w=e=>e?K.has(e)?"m":Y.has(e)?"f":v.indexOf(e)%2?"alt":null:null,y=t.lines.filter(e=>e.q).length,g=0,h=0,b=!1;document.body.classList.add("focus-mode"),i.innerHTML=`
  <section class="story">
    <div class="story-top">
      <button class="btn ghost small" data-quit aria-label="Quitter">\u2715</button>
      <div class="progress"><span class="story-bar"></span></div>
      ${Q()}
    </div>
    <header class="story-head"><span class="story-big">${t.emoji}</span>
      <h1 class="${f==="zh"?"zh":""}">${l(t.title)}</h1>${t.titlePy?`<p class="py">${l(t.titlePy)}</p>`:""}
      <p class="muted small">${l(t.intro)}</p></header>
    <div class="story-lines" aria-live="polite"></div>
    <div class="story-foot"><button class="btn primary big" data-next>Commencer</button></div>
  </section>`;let x=i.querySelector(".story-lines"),o=i.querySelector("[data-next]"),z=i.querySelector(".story-bar"),T=()=>{document.body.classList.remove("focus-mode"),location.hash="histoires"};i.querySelector("[data-quit]").onclick=T;function j(e){let a=`<p class="sl-t ${f==="zh"?"zh":""}">${V(e.t)}</p>
      ${e.py?`<p class="sl-py ${m?"":"hidden"}">${l(e.py)}</p>`:""}
      <p class="sl-fr hidden">${l(e.fr)}</p>`;return e.who?`<div class="sl talk" tabindex="0" style="--who:${H(e.who)}">
      <span class="sl-who">${l(e.who)}</span>
      <div class="sl-bubble">${a}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`:`<div class="sl narr" tabindex="0"><div class="sl-body">${a}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`}let u=null;I(()=>({place:`Histoire \xB7 ${t.title}`,audio:u?.t||"",question:u?.q?`${u.q} \u2014 ${(u.options||[]).join(" / ")}`:u?.fr||"",expected:u?.q?u.options?.[u.answer]:[u?.t,u?.py].filter(Boolean).join(" \xB7 ")}));function s(e){u=e;let d=document.createElement("div");d.innerHTML=j(e);let a=d.firstElementChild;x.appendChild(a);let r=w(e.who);a.querySelector("[data-say]").onclick=c=>{c.stopPropagation(),R(e.t,{force:!0,voice:r})},a.onclick=()=>{a.querySelector(".sl-fr").classList.toggle("hidden"),a.querySelector(".sl-py")?.classList.remove("hidden")},R(e.t,{force:!0,voice:r}),a.scrollIntoView({behavior:"smooth",block:"end"})}function p(e){u=e,b=!0,o.disabled=!0,o.textContent="Choisissez une r\xE9ponse";let d=e.options.map((r,c)=>c).sort(()=>Math.random()-.5),a=document.createElement("div");a.className="sl-q card",a.innerHTML=`<p class="eyebrow">Question</p><p class="sl-qt">${l(e.q)}</p>
      <div class="options">${d.map(r=>`<button class="option" data-i="${r}"><span>${l(e.options[r])}</span></button>`).join("")}</div>`,x.appendChild(a),a.scrollIntoView({behavior:"smooth",block:"end"}),a.querySelectorAll("[data-i]").forEach(r=>r.onclick=()=>{let c=+r.dataset.i,P=c===e.answer;P&&h++,a.querySelectorAll("[data-i]").forEach($=>{$.disabled=!0,+$.dataset.i===e.answer?$.classList.add("correct"):$===r&&$.classList.add("wrong")}),a.insertAdjacentHTML("beforeend",`<p class="sl-res ${P?"ok":"ko"}">${P?"\u2713 Bonne r\xE9ponse !":"\u2717 Pas tout \xE0 fait."}</p>`),b=!1,o.disabled=!1,o.textContent="Continuer",o.focus()})}function k(){let e=L.stories?.[t.id],d=!e?.done,a=M({label:`Histoire \xB7 ${t.title}`,score:h,total:y,xpPer:10,key:`story:${t.id}`}),r=0;d&&(r=20,M({label:"",score:1,total:0,xpPer:r})),E($=>{$.stories={...$.stories||{},[t.id]:{done:!0,best:Math.max(e?.best||0,h),total:y,date:Date.now()}}}),document.body.classList.remove("focus-mode");let c=y?Math.round(h/y*100):100,P=q().find($=>S($)&&!L.stories?.[$.id]?.done);i.innerHTML=`
    <section class="results ${c>=60?"ok":"ko"}">
      ${B(c,150,12)}
      <h1>${c===100?"Tout compris ! \u{1F389}":c>=60?"Histoire termin\xE9e !":"Histoire termin\xE9e"}</h1>
      <p class="lead">${h} / ${y} questions de compr\xE9hension</p>
      <div class="result-chips">${a.capped&&!r?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${a.xpGained+r} XP</span>`}${r?'<span class="chip">\u{1F4D6} Nouvelle histoire lue</span>':""}</div>
      <div class="result-actions">
        ${P?`<a class="btn primary big" href="#histoire-${P.id}">Histoire suivante \u2192</a>`:'<a class="btn primary big" href="#histoires">Toutes les histoires</a>'}
        <a class="btn ghost" href="#histoire-${t.id}" data-reload>Relire</a>
      </div>
    </section>`,c===100&&O()}return o.onclick=()=>{if(b)return;if(g>=t.lines.length)return k();let e=t.lines[g++];z.style.width=`${Math.round(g/t.lines.length*100)}%`,e.q?p(e):(s(e),o.textContent=g>=t.lines.length?"Terminer":"Continuer")},!0}var Z=i=>i.lines.filter(n=>n.t&&!n.q),tt=i=>Math.max(1,Math.round(Z(i).reduce((n,t)=>n+t.t.length,0)/(f==="zh"?260:900)));function ft(i){let n=q().filter(S);return i.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">\xC9coute longue</p><h1>\u{1F3A7} Comprendre \xE0 l'oral</h1>
    <p class="muted">Une histoire enti\xE8re, sans le texte, puis des questions. Mettez des \xE9couteurs et concentrez-vous sur le sens.</p></header>
  ${n.length?`<div class="story-list">${n.map(t=>{let m=L.listens?.[t.id];return`<a class="story-item" href="#ecoute-${t.id}"><span class="story-emoji">${t.emoji}</span>
      <span class="story-txt"><b class="${f==="zh"?"zh":""}">${l(t.title)} <em class="story-lvl">${l(A(t.level||"A1"))}</em></b>
      <small>\u2248 ${tt(t)} min \xB7 ${t.lines.filter(v=>v.q).length} questions</small></span>
      ${m?`<span class="story-done">${m.best}/${m.total} \u2713</span>`:""}</a>`}).join("")}</div>`:'<div class="empty-state"><p>Les \xE9coutes se d\xE9bloquent avec les histoires, au fil des le\xE7ons.</p><a class="btn primary" href="#parcours">Continuer le parcours</a></div>'}`,!0}function yt(i,n){let t=q().find(s=>s.id===n);if(!t||!S(t))return!1;let m=[...new Set(t.lines.map(s=>s.who).filter(Boolean))],v=s=>C[m.indexOf(s)%C.length],H=s=>s?K.has(s)?"m":Y.has(s)?"f":m.indexOf(s)%2?"alt":null:null,w=Z(t),y=t.lines.filter(s=>s.q),g=!1,h=!1,b=0,x=0;document.body.classList.add("focus-mode"),i.innerHTML=`
  <section class="story listen">
    <div class="story-top"><button class="btn ghost small" data-quit aria-label="Quitter">\u2715</button><div class="progress"><span class="story-bar"></span></div>${Q()}</div>
    <header class="story-head"><span class="story-big">${t.emoji}</span><h1 class="${f==="zh"?"zh":""}">${l(t.title)}</h1>
      <p class="muted small">${l(t.intro)}</p></header>
    <div class="ls-stage">
      <div class="ls-wave" aria-hidden="true">${Array.from({length:9},(s,p)=>`<i style="--i:${p}"></i>`).join("")}</div>
      <p class="ls-who" aria-live="polite">Pr\xEAt ?</p>
      <p class="ls-hint muted small">Pas de texte : \xE9coutez jusqu'au bout, les questions arrivent \xE0 la fin.</p>
    </div>
    <div class="story-foot ls-foot">
      <button class="btn primary big" data-play>\u25B6 \xC9couter l'histoire</button>
      <button class="btn ghost" data-questions hidden>R\xE9pondre aux questions \u2192</button>
    </div>
  </section>`;let o=s=>i.querySelector(s);I(()=>({place:`\xC9coute \xB7 ${t.title}`,audio:w[Math.max(0,b-1)]?.t||"",question:"",expected:""}));let z=()=>{h=!0,document.body.classList.remove("focus-mode"),location.hash="ecoutes"};o("[data-quit]").onclick=z,window.addEventListener("hashchange",()=>{h=!0},{once:!0});async function T(){if(g){h=!0;return}for(g=!0,h=!1,x++,o(".ls-stage").classList.add("on"),o("[data-play]").textContent="\u23F8 Pause";b<w.length&&!h;b++){let s=w[b];o(".ls-who").innerHTML=s.who?`<span class="ls-chip" style="--who:${v(s.who)}">${l(s.who)}</span>`:'<span class="ls-chip narr">Narrateur</span>',o(".story-bar").style.width=`${Math.round((b+1)/w.length*100)}%`,await X(s.t,{voice:H(s.who)}),h||await new Promise(p=>setTimeout(p,450))}g=!1,o(".ls-stage").classList.remove("on"),b>=w.length?(b=0,o(".ls-who").textContent="Fin de l'histoire",o("[data-play]").textContent="\u21BA R\xE9\xE9couter",o("[data-play]").className="btn ghost",o("[data-questions]").hidden=!1,o("[data-questions]").className="btn primary big"):(o("[data-play]").textContent="\u25B6 Reprendre",o(".ls-who").textContent="En pause")}o("[data-play]").onclick=()=>T(),o("[data-questions]").onclick=()=>{h=!0,G(),j()};function j(){let s=0,p=0,k=()=>{if(s>=y.length)return u(p);let e=y[s],d=e.options.map((a,r)=>r).sort(()=>Math.random()-.5);o(".story-bar").style.width=`${Math.round(s/y.length*100)}%`,o(".ls-stage").innerHTML=`<div class="sl-q card"><p class="eyebrow">Question ${s+1} / ${y.length}</p><p class="sl-qt">${l(e.q)}</p>
        <div class="options">${d.map(a=>`<button class="option" data-i="${a}"><span>${l(e.options[a])}</span></button>`).join("")}</div></div>`,o(".ls-foot").innerHTML='<button class="btn primary big" data-nextq disabled>Continuer</button>',o(".ls-stage").querySelectorAll("[data-i]").forEach(a=>a.onclick=()=>{+a.dataset.i===e.answer&&p++,o(".ls-stage").querySelectorAll("[data-i]").forEach(c=>{c.disabled=!0,+c.dataset.i===e.answer?c.classList.add("correct"):c===a&&c.classList.add("wrong")}),o("[data-nextq]").disabled=!1,o("[data-nextq]").focus()}),o("[data-nextq]").onclick=()=>{s++,k()}};k()}function u(s){document.body.classList.remove("focus-mode");let p=y.length,k=L.listens?.[t.id],e=M({label:`\xC9coute \xB7 ${t.title}`,score:s,total:p,xpPer:12,key:`listen:${t.id}`});E(a=>{a.listens={...a.listens||{},[t.id]:{best:Math.max(k?.best||0,s),total:p,date:Date.now()}}});let d=p?Math.round(s/p*100):100;i.innerHTML=`
    <section class="results ${d>=60?"ok":"ko"}">
      ${B(d,150,12)}
      <h1>${d===100?"Tout compris \xE0 l'oral ! \u{1F389}":d>=60?"Bonne \xE9coute !":"L'oreille s'entra\xEEne"}</h1>
      <p class="lead">${s} / ${p} questions \xB7 ${x>1?`\xE9cout\xE9e ${x} fois`:"une seule \xE9coute"}</p>
      <div class="result-chips">${e.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${e.xpGained} XP</span>`}</div>
      <div class="result-actions">
        <a class="btn primary big" href="#histoire-${t.id}">Lire l'histoire avec le texte</a>
        <a class="btn ghost" href="#ecoutes">Autres \xE9coutes</a>
      </div>
    </section>`,d===100&&O()}return!0}export{J as a,pt as b,ht as c,mt as d,ft as e,yt as f};

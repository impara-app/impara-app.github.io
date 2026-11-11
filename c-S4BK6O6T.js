import{a as U}from"./c-MTBVWJL7.js";import{a as Q,b as N}from"./c-2SGKD7PA.js";import{c as W}from"./c-55C5M23L.js";import{C as D,D as _,E as S,G as F}from"./c-O7XFUMVD.js";import{d as V}from"./c-6AJRVT3S.js";import{e as l,k as R,l as G,m as I,r as O,s as B}from"./c-62IXJUWR.js";import{e as X,h as E}from"./c-EDIVJPJP.js";import{b as L,d as A}from"./c-36X2LLUK.js";import{f as $}from"./c-PBVGMHWF.js";var J=new Set(["\u738B\u660E","\u5F20\u4F1F","\u8001\u677F","\u7238\u7238","\u54E5\u54E5","\u5F1F\u5F1F","\u7237\u7237","Marco","Luca","Paolo","Giorgio","Signor Rossi","Cameriere","Barista","Impiegato","Selezionatore"]),K=new Set(["L\xE9a","\u5F20\u4F1F\u7684\u5988\u5988","\u5C0F\u7F8E","\u59D0\u59D0","\u59B9\u59B9","\u5988\u5988","\u5976\u5976","\u670D\u52A1\u5458","Giulia","Sofia","Anna","Dottoressa","Commessa","Signora","Direttrice"]),q=()=>U[$]||[],M=i=>F(i.after),C=["#3b82c4","#c2410c","#7c3aed","#0f766e","#be185d"],ce=()=>({total:q().length,open:q().filter(M).length,done:q().filter(i=>L.stories?.[i.id]?.done).length});function de(i){return i.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">Lire et \xE9couter</p><h1>\u{1F4D6} Histoires</h1>
    <p class="muted">De courts dialogues avec les mots de vos le\xE7ons. Touchez une phrase pour voir sa traduction.</p></header>
  <div class="story-list">
    ${q().map(n=>{let e=M(n),m=L.stories?.[n.id],v=X(n.after);return`<a class="story-item ${e?"":"locked"}" ${e?`href="#histoire-${n.id}"`:'aria-disabled="true"'}>
        <span class="story-emoji">${e?n.emoji:"\u{1F512}"}</span>
        <span class="story-txt"><b class="${$==="zh"?"zh":""}">${l(n.title)} <em class="story-lvl">${l(E(n.level||"A1"))}</em></b>
          ${n.titlePy?`<small class="py">${l(n.titlePy)}</small>`:""}
          <small>${e?l(n.intro):`Se d\xE9bloque apr\xE8s la le\xE7on \xAB ${l(v?.title||n.after)} \xBB`}</small></span>
        ${m?.done?`<span class="story-done" title="Termin\xE9e">${m.best}/${m.total} \u2713${D(`story:${n.id}`)?`<small>XP dans ${_(D(`story:${n.id}`))}</small>`:""}</span>`:""}
      </a>`}).join("")}
  </div>`,!0}function ue(i,n){let e=q().find(t=>t.id===n);if(!e||!M(e))return!1;let m=$==="zh"&&V(e.level||"A1"),v=[...new Set(e.lines.map(t=>t.who).filter(Boolean))],H=t=>C[v.indexOf(t)%C.length],w=t=>t?J.has(t)?"m":K.has(t)?"f":v.indexOf(t)%2?"alt":null:null,f=e.lines.filter(t=>t.q).length,g=0,h=0,y=!1;document.body.classList.add("focus-mode"),i.innerHTML=`
  <section class="story">
    <div class="story-top">
      <button class="btn ghost small" data-quit aria-label="Quitter">\u2715</button>
      <div class="progress"><span class="story-bar"></span></div>
      ${Q()}
    </div>
    <header class="story-head"><span class="story-big">${e.emoji}</span>
      <h1 class="${$==="zh"?"zh":""}">${l(e.title)}</h1>${e.titlePy?`<p class="py">${l(e.titlePy)}</p>`:""}
      <p class="muted small">${l(e.intro)}</p></header>
    <div class="story-lines" aria-live="polite"></div>
    <div class="story-foot"><button class="btn primary big" data-next>Commencer</button></div>
  </section>`;let k=i.querySelector(".story-lines"),o=i.querySelector("[data-next]"),z=i.querySelector(".story-bar"),T=()=>{document.body.classList.remove("focus-mode"),location.hash="histoires"};i.querySelector("[data-quit]").onclick=T;function j(t){let a=`<p class="sl-t ${$==="zh"?"zh":""}">${W(t.t)}</p>
      ${t.py?`<p class="sl-py ${m?"":"hidden"}">${l(t.py)}</p>`:""}
      <p class="sl-fr hidden">${l(t.fr)}</p>`;return t.who?`<div class="sl talk" tabindex="0" style="--who:${H(t.who)}">
      <span class="sl-who">${l(t.who)}</span>
      <div class="sl-bubble">${a}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`:`<div class="sl narr" tabindex="0"><div class="sl-body">${a}</div><button class="speak" data-say aria-label="R\xE9\xE9couter">\u{1F50A}</button></div>`}let u=null;N(()=>({place:`Histoire \xB7 ${e.title}`,audio:u?.t||"",question:u?.q?`${u.q} \u2014 ${(u.options||[]).join(" / ")}`:u?.fr||"",expected:u?.q?u.options?.[u.answer]:[u?.t,u?.py].filter(Boolean).join(" \xB7 ")}));function s(t){u=t;let d=document.createElement("div");d.innerHTML=j(t);let a=d.firstElementChild;k.appendChild(a);let r=w(t.who);a.querySelector("[data-say]").onclick=c=>{c.stopPropagation(),R(t.t,{force:!0,voice:r})},a.onclick=()=>{a.querySelector(".sl-fr").classList.toggle("hidden"),a.querySelector(".sl-py")?.classList.remove("hidden")},R(t.t,{force:!0,voice:r}),a.scrollIntoView({behavior:"smooth",block:"end"})}function p(t){u=t,y=!0,o.disabled=!0,o.textContent="Choisissez une r\xE9ponse";let d=t.options.map((r,c)=>c).sort(()=>Math.random()-.5),a=document.createElement("div");a.className="sl-q card",a.innerHTML=`<p class="eyebrow">Question</p><p class="sl-qt">${l(t.q)}</p>
      <div class="options">${d.map(r=>`<button class="option" data-i="${r}"><span>${l(t.options[r])}</span></button>`).join("")}</div>`,k.appendChild(a),a.scrollIntoView({behavior:"smooth",block:"end"}),a.querySelectorAll("[data-i]").forEach(r=>r.onclick=()=>{let c=+r.dataset.i,P=c===t.answer;P&&h++,a.querySelectorAll("[data-i]").forEach(b=>{b.disabled=!0,+b.dataset.i===t.answer?b.classList.add("correct"):b===r&&b.classList.add("wrong")}),a.insertAdjacentHTML("beforeend",`<p class="sl-res ${P?"ok":"ko"}">${P?"\u2713 Bonne r\xE9ponse !":"\u2717 Pas tout \xE0 fait."}</p>`),y=!1,o.disabled=!1,o.textContent="Continuer",o.focus()})}function x(){let t=L.stories?.[e.id],d=!t?.done,a=S({label:`Histoire \xB7 ${e.title}`,score:h,total:f,xpPer:10,key:`story:${e.id}`}),r=0;d&&(r=20,S({label:"",score:1,total:0,xpPer:r})),A(b=>{b.stories={...b.stories||{},[e.id]:{done:!0,best:Math.max(t?.best||0,h),total:f,date:Date.now()}}}),document.body.classList.remove("focus-mode");let c=f?Math.round(h/f*100):100,P=q().find(b=>M(b)&&!L.stories?.[b.id]?.done);i.innerHTML=`
    <section class="results ${c>=60?"ok":"ko"}">
      ${B(c,150,12)}
      <h1>${c===100?"Tout compris ! \u{1F389}":c>=60?"Histoire termin\xE9e !":"Histoire termin\xE9e"}</h1>
      <p class="lead">${h} / ${f} questions de compr\xE9hension</p>
      <div class="result-chips">${a.capped&&!r?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${a.xpGained+r} XP</span>`}${r?'<span class="chip">\u{1F4D6} Nouvelle histoire lue</span>':""}</div>
      <div class="result-actions">
        ${P?`<a class="btn primary big" href="#histoire-${P.id}">Histoire suivante \u2192</a>`:'<a class="btn primary big" href="#histoires">Toutes les histoires</a>'}
        <a class="btn ghost" href="#histoire-${e.id}" data-reload>Relire</a>
      </div>
    </section>`,c===100&&O()}return o.onclick=()=>{if(y)return;if(g>=e.lines.length)return x();let t=e.lines[g++];z.style.width=`${Math.round(g/e.lines.length*100)}%`,t.q?p(t):(s(t),o.textContent=g>=e.lines.length?"Terminer":"Continuer")},!0}var Y=i=>i.lines.filter(n=>n.t&&!n.q),Z=i=>Math.max(1,Math.round(Y(i).reduce((n,e)=>n+e.t.length,0)/($==="zh"?260:900)));function pe(i){let n=q().filter(M);return i.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <header class="page-head"><p class="eyebrow">\xC9coute longue</p><h1>\u{1F3A7} Comprendre \xE0 l'oral</h1>
    <p class="muted">Une histoire enti\xE8re, sans le texte, puis des questions. Mettez des \xE9couteurs et concentrez-vous sur le sens.</p></header>
  ${n.length?`<div class="story-list">${n.map(e=>{let m=L.listens?.[e.id];return`<a class="story-item" href="#ecoute-${e.id}"><span class="story-emoji">${e.emoji}</span>
      <span class="story-txt"><b class="${$==="zh"?"zh":""}">${l(e.title)} <em class="story-lvl">${l(E(e.level||"A1"))}</em></b>
      <small>\u2248 ${Z(e)} min \xB7 ${e.lines.filter(v=>v.q).length} questions</small></span>
      ${m?`<span class="story-done">${m.best}/${m.total} \u2713</span>`:""}</a>`}).join("")}</div>`:'<div class="empty-state"><p>Les \xE9coutes se d\xE9bloquent avec les histoires, au fil des le\xE7ons.</p><a class="btn primary" href="#parcours">Continuer le parcours</a></div>'}`,!0}function he(i,n){let e=q().find(s=>s.id===n);if(!e||!M(e))return!1;let m=[...new Set(e.lines.map(s=>s.who).filter(Boolean))],v=s=>C[m.indexOf(s)%C.length],H=s=>s?J.has(s)?"m":K.has(s)?"f":m.indexOf(s)%2?"alt":null:null,w=Y(e),f=e.lines.filter(s=>s.q),g=!1,h=!1,y=0,k=0;document.body.classList.add("focus-mode"),i.innerHTML=`
  <section class="story listen">
    <div class="story-top"><button class="btn ghost small" data-quit aria-label="Quitter">\u2715</button><div class="progress"><span class="story-bar"></span></div>${Q()}</div>
    <header class="story-head"><span class="story-big">${e.emoji}</span><h1 class="${$==="zh"?"zh":""}">${l(e.title)}</h1>
      <p class="muted small">${l(e.intro)}</p></header>
    <div class="ls-stage">
      <div class="ls-wave" aria-hidden="true">${Array.from({length:9},(s,p)=>`<i style="--i:${p}"></i>`).join("")}</div>
      <p class="ls-who" aria-live="polite">Pr\xEAt ?</p>
      <p class="ls-hint muted small">Pas de texte : \xE9coutez jusqu'au bout, les questions arrivent \xE0 la fin.</p>
    </div>
    <div class="story-foot ls-foot">
      <button class="btn primary big" data-play>\u25B6 \xC9couter l'histoire</button>
      <button class="btn ghost" data-questions hidden>R\xE9pondre aux questions \u2192</button>
    </div>
  </section>`;let o=s=>i.querySelector(s);N(()=>({place:`\xC9coute \xB7 ${e.title}`,audio:w[Math.max(0,y-1)]?.t||"",question:"",expected:""}));let z=()=>{h=!0,document.body.classList.remove("focus-mode"),location.hash="ecoutes"};o("[data-quit]").onclick=z,window.addEventListener("hashchange",()=>{h=!0},{once:!0});async function T(){if(g){h=!0;return}for(g=!0,h=!1,k++,o(".ls-stage").classList.add("on"),o("[data-play]").textContent="\u23F8 Pause";y<w.length&&!h;y++){let s=w[y];o(".ls-who").innerHTML=s.who?`<span class="ls-chip" style="--who:${v(s.who)}">${l(s.who)}</span>`:'<span class="ls-chip narr">Narrateur</span>',o(".story-bar").style.width=`${Math.round((y+1)/w.length*100)}%`,await G(s.t,{voice:H(s.who)}),h||await new Promise(p=>setTimeout(p,450))}g=!1,o(".ls-stage").classList.remove("on"),y>=w.length?(y=0,o(".ls-who").textContent="Fin de l'histoire",o("[data-play]").textContent="\u21BA R\xE9\xE9couter",o("[data-play]").className="btn ghost",o("[data-questions]").hidden=!1,o("[data-questions]").className="btn primary big"):(o("[data-play]").textContent="\u25B6 Reprendre",o(".ls-who").textContent="En pause")}o("[data-play]").onclick=()=>T(),o("[data-questions]").onclick=()=>{h=!0,I(),j()};function j(){let s=0,p=0,x=()=>{if(s>=f.length)return u(p);let t=f[s],d=t.options.map((a,r)=>r).sort(()=>Math.random()-.5);o(".story-bar").style.width=`${Math.round(s/f.length*100)}%`,o(".ls-stage").innerHTML=`<div class="sl-q card"><p class="eyebrow">Question ${s+1} / ${f.length}</p><p class="sl-qt">${l(t.q)}</p>
        <div class="options">${d.map(a=>`<button class="option" data-i="${a}"><span>${l(t.options[a])}</span></button>`).join("")}</div></div>`,o(".ls-foot").innerHTML='<button class="btn primary big" data-nextq disabled>Continuer</button>',o(".ls-stage").querySelectorAll("[data-i]").forEach(a=>a.onclick=()=>{+a.dataset.i===t.answer&&p++,o(".ls-stage").querySelectorAll("[data-i]").forEach(c=>{c.disabled=!0,+c.dataset.i===t.answer?c.classList.add("correct"):c===a&&c.classList.add("wrong")}),o("[data-nextq]").disabled=!1,o("[data-nextq]").focus()}),o("[data-nextq]").onclick=()=>{s++,x()}};x()}function u(s){document.body.classList.remove("focus-mode");let p=f.length,x=L.listens?.[e.id],t=S({label:`\xC9coute \xB7 ${e.title}`,score:s,total:p,xpPer:12,key:`listen:${e.id}`});A(a=>{a.listens={...a.listens||{},[e.id]:{best:Math.max(x?.best||0,s),total:p,date:Date.now()}}});let d=p?Math.round(s/p*100):100;i.innerHTML=`
    <section class="results ${d>=60?"ok":"ko"}">
      ${B(d,150,12)}
      <h1>${d===100?"Tout compris \xE0 l'oral ! \u{1F389}":d>=60?"Bonne \xE9coute !":"L'oreille s'entra\xEEne"}</h1>
      <p class="lead">${s} / ${p} questions \xB7 ${k>1?`\xE9cout\xE9e ${k} fois`:"une seule \xE9coute"}</p>
      <div class="result-chips">${t.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${t.xpGained} XP</span>`}</div>
      <div class="result-actions">
        <a class="btn primary big" href="#histoire-${e.id}">Lire l'histoire avec le texte</a>
        <a class="btn ghost" href="#ecoutes">Autres \xE9coutes</a>
      </div>
    </section>`,d===100&&O()}return!0}export{ce as a,de as b,ue as c,pe as d,he as e};

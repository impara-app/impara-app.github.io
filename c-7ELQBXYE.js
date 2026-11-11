import{d as E}from"./c-K5VCASTW.js";import"./c-E6MVXD5Z.js";import"./c-ZAQA7L4O.js";import"./c-FEKK23SY.js";import"./c-MQKQRSKL.js";import"./c-SOVZPZMM.js";import{E as S,i as L,j as x,l as $,m as b,p as g}from"./c-6BRODPYL.js";import"./c-BIAU6VNF.js";import{a as n,h as i}from"./c-3M6EEBJX.js";import{I as k,L as P,g as v,j as y,l as h,y as c,z as d}from"./c-HPXZTFFF.js";import"./c-427Z5ASM.js";var u=8,m=6;function j(t){let e=d(t.exam.map((r,o)=>({ref:`exam-${t.id}:${o}`,q:r}))),s=d(t.lessons).map(r=>d(r.quiz.map((o,l)=>({ref:`${r.id}:${l}`,q:o})).filter(o=>o.q.type!=="match"))),a=e.slice(0,u/2);for(let r=0;a.length<u&&s.some(o=>o.length);r++){let o=s[r%s.length];o.length&&a.push(o.pop())}for(let r of e.slice(u/2)){if(a.length>=u)break;a.push(r)}return d(a)}var q=()=>{let t=0;for(;t<n.length&&S(n[t].id);)t++;return t};function I(t){let e=q(),s=y.placement;return t.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Test de niveau</p>
    <h1>\u{1F9ED} O\xF9 commencer ?</h1>
    <p class="lead">Quelques questions par palier, de plus en plus difficiles, pour vous placer directement au bon niveau ${c(v.label==="Mandarin"?"HSK":"CECRL")}.</p>
    <ul class="defi-rules">
      <li>\u{1F4C8} ${u} questions par palier, du plus facile (${c(i(n[0]))}) au plus difficile (${c(i(n[n.length-1]))})</li>
      <li>\u2705 ${m}/${u} pour passer au palier suivant ; le test s'arr\xEAte d\xE8s qu'un palier est trop difficile</li>
      <li>\u{1F3AF} \xC0 la fin, les paliers r\xE9ussis sont valid\xE9s : vous commencez au bon endroit</li>
      <li>\u{1F937} Vous ne savez pas ? R\xE9pondez au hasard plut\xF4t que de chercher : le test sera plus juste</li>
    </ul>
    ${e?`<p class="muted small">Vous avez d\xE9j\xE0 valid\xE9 ${e} palier${e>1?"s":""} : votre progression actuelle sera toujours conserv\xE9e.</p>`:""}
    ${s?`<p class="muted small">Dernier test : ${c(s.label)}.</p>`:""}
    <button class="btn primary big" data-go>Commencer le test</button>
    <a class="btn ghost" href="#parcours">Je pr\xE9f\xE8re commencer au d\xE9but</a>
  </section>`,t.querySelector("[data-go]").onclick=()=>N(t,0,[]),!0}function N(t,e,s){let a=n[e];document.body.classList.add("focus-mode"),E(t,{title:`Test de niveau \xB7 palier ${i(a)}`,questions:j(a),countText:(r,o)=>`${i(a)} \xB7 ${r+1}/${o}`,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:r=>{document.body.classList.remove("focus-mode");let o=r.filter(f=>f.correct).length,l=[...s,{id:a.id,score:o,total:r.length}];if(o>=m&&e+1<n.length)return w(t,e,l);T(t,l.filter(f=>f.score>=m).length,l)}})}function w(t,e,s){let a=s[s.length-1],r=n[e+1];t.innerHTML=`
  <section class="results ok">
    <p class="eyebrow">Test de niveau</p>
    <h1>Palier ${c(i(n[e]))} r\xE9ussi \u2713</h1>
    <p class="lead">${a.score} / ${a.total} bonnes r\xE9ponses</p>
    <div class="pl-steps">${z(s)}</div>
    <div class="result-actions">
      <button class="btn primary big" data-next>Continuer : palier ${c(i(r))} \u2192</button>
      <button class="btn ghost" data-stop>M'arr\xEAter ici</button>
    </div>
  </section>`,t.querySelector("[data-next]").onclick=()=>N(t,e+1,s),t.querySelector("[data-stop]").onclick=()=>T(t,s.filter(o=>o.score>=m).length,s)}var z=t=>n.map((e,s)=>{let a=t[s];return`<span class="pl-step ${a?a.score>=m?"ok":"ko":"todo"}" title="${a?`${a.score}/${a.total}`:""}">${c(i(e))}${a?`<small>${a.score}/${a.total}</small>`:""}</span>`}).join("");function T(t,e,s){let a=q(),r=n[Math.min(e,n.length-1)],o=e===0?"d\xE9butant":e>=n.length?`${i(n[n.length-1])} valid\xE9`:`niveau ${i(n[e-1])}`;h(p=>{p.placement={n:e,label:o,date:Date.now(),scores:s}});let l=e>a;t.innerHTML=`
  <section class="results ${e?"ok":""}">
    <p class="eyebrow">R\xE9sultat du test</p>
    <h1>${e===0?"On commence par les bases \u{1F331}":e>=n.length?"Impressionnant ! \u{1F3C6}":`Votre niveau : ${c(i(n[e-1]))} \u{1F3AF}`}</h1>
    <div class="pl-steps">${z(s)}</div>
    <p class="lead">${e===0?`Le palier ${c(i(n[0]))} est fait pour vous : vous progresserez vite.`:e>=n.length?"Vous avez r\xE9ussi tous les paliers.":`Nous vous conseillons de commencer au palier <b>${c(i(r))}</b>.`}</p>
    ${l?`<p class="muted">Les le\xE7ons et examens des paliers ${c(n.slice(a,e).map(i).join(", "))} seront marqu\xE9s comme r\xE9ussis. Vous pourrez toujours y revenir.</p>`:e?'<p class="muted">Votre progression actuelle va d\xE9j\xE0 jusque-l\xE0 : rien \xE0 changer.</p>':""}
    <div class="result-actions">
      ${l?`<button class="btn primary big" data-apply>Commencer au palier ${c(i(r))} \u2192</button>
        <a class="btn ghost" href="#parcours">Non merci, je garde mon parcours</a>`:'<a class="btn primary big" href="#parcours">Aller au parcours \u2192</a>'}
      <a class="btn ghost" href="#test-niveau" data-reload>Refaire le test</a>
    </div>
  </section>`,e&&P(),t.querySelector("[data-apply]")?.addEventListener("click",()=>{C(e),k(`Paliers valid\xE9s : vous commencez en ${i(r)} \u2713`,"ok"),location.hash="parcours"})}function C(t){let e=new Date().toISOString();h(s=>{s.checkpoints||={};let a={...s.feedSent||{}},r=Date.now();n.slice(0,t).forEach(o=>{o.lessons.forEach(l=>{if(s.lessons[l.id]?.passed)return;let p=x;a[`lesson-${l.id}`]||=r,s.lessons[l.id]={best:Math.ceil(p*L),total:p,attempts:s.lessons[l.id]?.attempts||0,passed:!0,date:e,placed:!0}}),s.checkpoints[g(o.id)]?.passed||(s.checkpoints[g(o.id)]={best:$,total:$,attempts:0,passed:!0,date:e,placed:!0}),a[`exam-${o.id}`]||=r,s.exams[o.id]?.passed||(s.exams[o.id]={best:b,total:b,attempts:s.exams[o.id]?.attempts||0,passed:!0,date:e,placed:!0})}),s.feedSent=a})}export{m as PASS_N,u as PER_LEVEL,C as applyPlacement,I as renderTestNiveau};

import{i as R}from"./c-NIWIMQL7.js";import"./c-S4BK6O6T.js";import"./c-MTBVWJL7.js";import{a as O,c as P}from"./c-QWP52JQZ.js";import"./c-7CJWDRQ4.js";import{a as S,b as h,d as w}from"./c-E6MVXD5Z.js";import"./c-KMOFPVBJ.js";import"./c-ZAQA7L4O.js";import"./c-2SGKD7PA.js";import"./c-KPGOLG5O.js";import"./c-N6NZ7XWY.js";import"./c-VYJREQA7.js";import"./c-55C5M23L.js";import{E as I,G as A}from"./c-O7XFUMVD.js";import"./c-6AJRVT3S.js";import{a as C,b as L,e as p,r as B,s as x}from"./c-62IXJUWR.js";import"./c-EDIVJPJP.js";import{b as $,d as E}from"./c-36X2LLUK.js";import{f as T}from"./c-PBVGMHWF.js";import"./c-427Z5ASM.js";var v=60,N=["essere","avere","parlare","mangiare","prendere","dormire","capire","fare","andare"],i=null;function D(){let n=new Set;return Object.keys($.vocab||{}).forEach(l=>String(l).split(/\s*\/\s*/).forEach(e=>{e=e.trim(),/^[a-zàèéìòù]+(are|ere|ire|arsi|ersi|irsi)$/.test(e)&&w(e,"presente",0)&&n.add(e)})),[...n]}var V=()=>Object.keys(h).filter(n=>A(h[n].lesson));function te(n){if(T!=="it")return!1;let l=D(),e=V();(!i||!i.every(o=>e.includes(o)))&&(i=e.slice());let j=$.conjBest||{},a=l.length>=3&&e.length;return n.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <section class="card cj-intro">
    <p class="eyebrow">Conjugaison</p>
    <h1>\u23F1\uFE0F ${v} secondes chrono</h1>
    <p class="lead">Un verbe, un temps, une personne : \xE9crivez la bonne forme le plus vite possible.</p>
    ${a?`
    <p class="cj-label">Temps</p>
    <div class="chips cj-tenses">${Object.entries(h).map(([o,c])=>`<button type="button" class="chip-btn ${i.includes(o)?"on":""}" data-t="${o}" ${e.includes(o)?"":'disabled title="Se d\xE9bloque avec la le\xE7on correspondante"'}>${e.includes(o)?"":"\u{1F512} "}${p(c.label)}</button>`).join("")}</div>
    <p class="muted small">${l.length} verbes de vos mots \xB7 record : <b>${j.all||0}</b></p>
    <button class="btn primary big" data-go>Commencer</button>`:`<p class="muted">Terminez d'abord les le\xE7ons sur le pr\xE9sent : les verbes appris arriveront ici.</p><a class="btn primary" href="#parcours">Continuer le parcours</a>`}
  </section>`,a&&(n.querySelectorAll("[data-t]").forEach(o=>o.onclick=()=>{let c=o.dataset.t;i=i.includes(c)?i.length>1?i.filter(u=>u!==c):i:[...i,c],n.querySelectorAll("[data-t]").forEach(u=>u.classList.toggle("on",i.includes(u.dataset.t)))}),n.querySelector("[data-go]").onclick=()=>U(n,l.length>=3?l:[...new Set([...l,...N])],i.slice())),!0}function U(n,l,e){document.body.classList.add("focus-mode");let j=[],a=null,o=0,c=0,u=performance.now(),d=null,m=!1,r="";n.innerHTML=`
  <section class="quiz cj">
    <header class="quiz-top"><button class="icon-btn quiz-quit" aria-label="Quitter">\u2715</button><div class="bar cj-time"><span></span></div><span class="quiz-count cj-score">0</span></header>
    <div class="quiz-card cj-card">
      <p class="q-label cj-tense"></p>
      <h2 class="cj-prompt"><span class="cj-person"></span><span class="cj-verb"></span></h2>
      <input class="tr-input cj-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Forme conjugu\xE9e" enterkeyhint="go">
      <p class="cj-fb" aria-live="polite"></p>
    </div>
    <footer class="quiz-foot"><button class="btn primary big quiz-action">Valider</button></footer>
  </section>`;let s=t=>n.querySelector(t),f=s(".cj-input");s(".cj-card").appendChild(P(f));let H=()=>{clearInterval(d),document.body.classList.remove("focus-mode"),F(n,j,o,e)};s(".quiz-quit").onclick=()=>{clearInterval(d),document.body.classList.remove("focus-mode"),location.hash="entrainement"};function g(){let t=null;for(let b=0;b<40&&!t;b++){let k=l[Math.floor(Math.random()*l.length)],y=e[Math.floor(Math.random()*e.length)],q=Math.floor(Math.random()*6),M=w(k,y,q);M&&`${k}${y}${q}`!==r&&(t={v:k,t:y,p:q,...M})}a=t,r=`${t.v}${t.t}${t.p}`,s(".cj-tense").textContent=h[t.t].label,s(".cj-person").textContent=(t.t==="congiuntivo"?"che ":"")+S[t.p],s(".cj-verb").textContent=t.v,s(".cj-fb").textContent="",s(".cj-card").classList.remove("ok","ko"),f.value="",f.disabled=!1,m=!1,f.focus()}function z(){if(m||!a)return;let t=f.value.trim();if(!t)return;let b=O(t,a.answers);j.push({...a,given:t,correct:b.correct}),b.correct?(o++,c++,C(c>=3&&c%3===0?"combo":"good"),L(15),s(".cj-score").textContent=o,s(".cj-card").classList.add("ok"),s(".cj-fb").textContent=b.note?`\u2713 ${a.show}`:`\u2713 ${c>=3?`${c} d'affil\xE9e !`:""}`,m=!0,setTimeout(g,b.note?700:260)):(c=0,C("bad"),L([30,30]),s(".cj-card").classList.add("ko"),s(".cj-fb").innerHTML=`\u2717 <b>${p(a.show)}</b>`,m=!0,f.disabled=!0,setTimeout(g,1400))}s(".quiz-action").onclick=z,f.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),z())}),n._cleanup=()=>clearInterval(d),d=setInterval(()=>{if(!s(".cj-time"))return clearInterval(d);let t=Math.max(0,v-(performance.now()-u)/1e3);s(".cj-time span").style.width=`${t/v*100}%`,s(".cj-time").classList.toggle("hurry",t<10),t<=0&&H()},100),g()}function F(n,l,e,j){let a=l.length,o=I({label:"Conjugaison",score:e,total:a,key:"conjugaison"}),c=$.conjBest?.all||0,u=e>c;u&&E(r=>{r.conjBest={...r.conjBest||{},all:e}});let d=a?Math.round(e/a*100):0,m=l.filter(r=>!r.correct);n.innerHTML=`
  <section class="results ${d>=60?"ok":"ko"}">
    ${x(d,150,12)}
    <h1>${u&&e?"Nouveau record ! \u{1F3C6}":e>=10?"Rapide !":"Bien jou\xE9 !"}</h1>
    <p class="lead">${e} bonne${e>1?"s":""} r\xE9ponse${e>1?"s":""} en ${v} s \xB7 ${a} essai${a>1?"s":""}</p>
    <div class="result-chips">${R(o)}<span class="chip">\u{1F3C6} Record : ${Math.max(c,e)}</span></div>
    ${m.length?`<details class="mistakes card" open><summary><b>Vos erreurs</b><span class="mk-n">${m.length}</span></summary><ol class="mk-list">${m.map(r=>`
      <li class="mk"><p class="mk-q"><small>${p(h[r.t].label)}</small>${p((r.t==="congiuntivo"?"che ":"")+S[r.p])} \xB7 ${p(r.v)}</p>
        <p class="mk-a no"><span>Votre r\xE9ponse</span><s>${p(r.given)}</s></p>
        <p class="mk-a yes"><span>Bonne r\xE9ponse</span><b>${p(r.show)}</b><button type="button" class="speak mk-say" data-speak="${p(r.show.replace(/o\/a$|i\/e$/,s=>s[0]))}" aria-label="\xC9couter">\u{1F50A}</button></p></li>`).join("")}</ol></details>`:""}
    <div class="result-actions"><a class="btn primary big" href="#conjugaison" data-reload>Rejouer</a><a class="btn ghost" href="#entrainement">Autres exercices</a></div>
  </section>`,u&&e&&B()}export{te as renderConjugaison};

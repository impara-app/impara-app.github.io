import{b as ne}from"./c-6AX2RPEB.js";import{a as ae,b as te}from"./c-CPUZSUUX.js";import{b as A,d as O}from"./c-PLLCDGCD.js";import"./c-BOUC4AG4.js";import"./c-EZB5BZO7.js";import"./c-ZAQA7L4O.js";import"./c-F4AT6JQ3.js";import"./c-V75TW76F.js";import{b as ee,c as se}from"./c-TETXN4WV.js";import{i as z}from"./c-XG3TAIHP.js";import"./c-VYJREQA7.js";import"./c-N7LRVGD6.js";import{A as B,B as R,C as S,G,M as Z,N as Y,b as D,c as w,d as H,e as y,f as L,g as I,i as U,t as V,u as F,w as W,y as K,z as J}from"./c-2ZATKK2E.js";import"./c-FNCOXAB6.js";import{a as h,d as g,e as C,f as N,h as c}from"./c-KTQDGSTN.js";import{J as M,K as X,f as b,i as v,k as T,o as Q,x as u,y as f}from"./c-ZUK6C2ZE.js";import"./c-427Z5ASM.js";function Ee(t,s){let e=C(s);return!e||!R(e)?!1:(q(t,{kind:"lesson",id:s,label:e.title,title:`Quiz \xB7 ${e.title}`,questions:ie(e),back:`#lecon-${s}`}),!0)}function ie(t){let s=D,e=f(t.quiz.map((p,k)=>({ref:`${t.id}:${k}`,q:p}))),n=Math.min(e.length,v.lessons[t.id]?.attempts?Math.round(s*.6):s),a=te(ae(t),1,`${t.id}:ord`,t.levelId),r=e.slice(0,Math.min(n,s-a.length)),o=z(t,s-r.length-a.length),i=e.slice(r.length,r.length+Math.max(0,s-r.length-o.length-a.length));return f([...r,...o,...a,...i])}function j(t,s,e=[]){let n=[...e],a=f(t).map(r=>f(r.quiz.map((o,i)=>({ref:`${r.id}:${i}`,q:o,lesson:r}))));for(let r=0;n.length<s&&a.some(o=>o.length);r++){let o=a[r%a.length];o.length&&n.push(o.pop())}for(let r=0,o=0;n.length<s&&o<t.length*3;r++,o++){let i=t[r%t.length];z(i,Math.min(3,s-n.length)).forEach(k=>n.push({...k,lesson:i}))}return f(n.slice(0,s))}var re=t=>j(t.lessons,y,f(t.exam.map((s,e)=>({ref:`exam-${t.id}:${e}`,q:s}))).slice(0,y));function ge(t,s){let e=g(s),n=h.indexOf(e);if(!e||!K(n))return!1;let a=e.lessons.slice(0,W(e)),r=j(a,H).map(({ref:o,q:i})=>({ref:o,q:i}));return q(t,{kind:"checkpoint",id:s,label:`Mi-palier ${c(e)}`,title:`Test de mi-palier ${c(e)}`,questions:f(r),back:"#parcours"}),!0}function ye(t,s){let e=g(s),n=h.indexOf(e);return!e||!S(n)?!1:(q(t,{kind:"exam",id:s,label:`Examen ${c(s)}`,title:`Examen de fin de palier ${c(s)}`,questions:re(e).map(({ref:a,q:r})=>({ref:a,q:r})),back:"#parcours"}),!0)}function Me(t,s){let e=g(s),n=h.indexOf(e);if(!e||!B(n))return!1;let a=y,r=e.lessons.filter(i=>F(i.id)).length,o=v.blanc?.[s];return t.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Entra\xEEnement \xE0 l'examen</p>
    <h1>\u{1F4DD} Examen blanc ${u(c(e))}</h1>
    <p class="lead">${a} questions tir\xE9es de <b>toutes les le\xE7ons</b> du palier, comme le jour de l'examen.</p>
    <ul class="defi-rules">
      <li>\u{1F3AF} Il faut <b>${Math.round(w*100)} %</b> pour r\xE9ussir le vrai examen</li>
      <li>\u{1F0CF} ${L} jokers : une faute de frappe (une lettre fausse, en trop ou manquante) est pardonn\xE9e</li>
      <li>\u{1F4DA} Vous avez termin\xE9 <b>${r}/${e.lessons.length}</b> le\xE7ons : les autres appara\xEEtront aussi</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs : c'est un essai</li>
      <li>\u{1F4CB} \xC0 la fin : les le\xE7ons \xE0 revoir en priorit\xE9</li>
    </ul>
    ${o?`<p class="muted small">Meilleur examen blanc : <b>${o.best}/${o.total}</b> \xB7 dernier : ${o.last}/${o.total}</p>`:""}
    <button class="btn primary big" data-go>Commencer l'examen blanc</button>
  </section>`,t.querySelector("[data-go]").onclick=()=>oe(t,e),!0}function oe(t,s){let e=j(s.lessons,y);document.body.classList.add("focus-mode"),O(t,{title:`Examen blanc ${c(s)}`,questions:e.map(({ref:n,q:a})=>({ref:n,q:a})),jokers:L,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:n=>{document.body.classList.remove("focus-mode");let a=n.filter(l=>l.correct).length,r=n.length,o=V({label:`Examen blanc ${c(s)}`,score:a,total:r,xpPer:2,key:`blanc:${s.id}`});T(l=>{let m=l.blanc?.[s.id];l.blanc={...l.blanc||{},[s.id]:{best:Math.max(m?.best||0,a),last:a,total:r,date:Date.now()}}});let i={};n.forEach((l,m)=>{if(!l.correct){let P=e[m].lesson;i[P.id]=(i[P.id]||0)+1}});let p=s.lessons.filter(l=>i[l.id]).sort((l,m)=>i[m.id]-i[l.id]),k=Math.round(a/r*100),x=Math.ceil(w*r),$=a>=x,d=S(h.indexOf(s));t.innerHTML=`
      <section class="results ${$?"ok":"ko"}">
        ${X(k,150,12)}
        <h1>${$?"Vous auriez r\xE9ussi l'examen ! \u{1F393}":"Pas encore tout \xE0 fait"}</h1>
        <p class="lead">${a} / ${r} bonnes r\xE9ponses \xB7 ${x} n\xE9cessaires</p>
        <p class="muted">${$?d?"Vous \xEAtes pr\xEAt\xB7e : lancez-vous pour de vrai !":"Terminez les le\xE7ons du palier pour d\xE9bloquer le vrai examen.":`Il vous manque ${x-a} bonne${x-a>1?"s":""} r\xE9ponse${x-a>1?"s":""}. Voici quoi revoir en priorit\xE9.`}</p>
        <div class="result-chips">${o.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${o.xpGained} XP</span>`}</div>
        ${p.length?`<div class="card blanc-review"><h2 class="h3">\u{1F4CB} \xC0 revoir</h2><ul>${p.map(l=>{let m=R(l);return`<li><span>${l.emoji} ${u(l.title)}</span><small>${i[l.id]} erreur${i[l.id]>1?"s":""}</small>
            ${m?`<a class="btn ghost small" href="#lecon-${l.id}">Revoir</a>`:'<span class="muted small">\u{1F512} pas encore faite</span>'}</li>`}).join("")}</ul></div>`:""}
        ${A(n,{open:!1})}
        <div class="result-actions">
          ${$&&d?`<a class="btn primary big" href="#examen-${s.id}">Passer le vrai examen \u2192</a>`:`<a class="btn primary big" href="#blanc-${s.id}" data-reload>Refaire un examen blanc</a>`}
          <a class="btn ghost" href="#parcours">Retour au parcours</a>
        </div>
      </section>`,$&&M()}})}function Le(t){let s=Object.values(v.errors).sort((e,n)=>n.count-e.count||e.lastWrong-n.lastWrong).slice(0,10).map(e=>({ref:e.ref,q:N(e.ref)})).filter(e=>e.q);return s.length?(q(t,{kind:"review",id:"review",label:"R\xE9vision des erreurs",title:"R\xE9vision de vos erreurs",questions:f(s),back:"#erreurs"}),!0):(location.hash="erreurs",!0)}function q(t,s){document.body.classList.add("focus-mode"),s.t0=Date.now(),O(t,{title:s.title,questions:s.questions,xpPerAnswer:U,jokers:s.kind==="exam"?L:s.kind==="checkpoint"?I:0,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=s.back.slice(1)},onFinish:e=>{document.body.classList.remove("focus-mode");let n=Y({kind:s.kind,id:s.id,label:s.label,results:e});n.ms=Date.now()-s.t0,n.results=e,le(t,s,n),s.kind==="exam"&&n.passed&&n.firstPass&&import("./c-O22RTV6A.js").then(a=>a.showLevelUp(s.id)).catch(()=>{})}})}function le(t,s,e){let n=Math.round(e.ratio*100),a=G(),r,o,i;if(s.kind==="review")r=n===100?"Sans faute ! \u{1F4AA}":"R\xE9vision termin\xE9e",o=e.mastered?`${e.mastered} notion(s) ma\xEEtris\xE9e(s) et retir\xE9e(s) du cahier d'erreurs.`:"Une erreur dispara\xEEt du cahier apr\xE8s 2 bonnes r\xE9ponses d'affil\xE9e.",i=Object.keys(v.errors).length?'<a class="btn primary big" href="#revision" data-reload>Nouvelle r\xE9vision</a>':'<a class="btn primary big" href="#parcours">Retour au parcours</a>';else if(e.passed)r=s.kind==="exam"?`Palier ${c(s.id)} valid\xE9 ! \u{1F393}`:s.kind==="checkpoint"?"Mi-palier franchi ! \u{1F6E1}\uFE0F":b.resultHeads[e.stars-1]||b.resultHeads[0],o=s.kind==="checkpoint"?"La deuxi\xE8me moiti\xE9 du palier est d\xE9bloqu\xE9e.":s.kind==="exam"?h[h.findIndex(d=>d.id===s.id)+1]?`Le palier ${c(h[h.findIndex(d=>d.id===s.id)+1])} est maintenant d\xE9bloqu\xE9.`:b.finished:e.newWords?`${e.newWords} nouveaux mots ajout\xE9s \xE0 votre carnet.`:"Le\xE7on valid\xE9e.",i=a?`<a class="btn primary big" href="#${J(a)}">${a.kind==="lesson"?"Le\xE7on suivante":a.kind==="checkpoint"?`Test de mi-palier ${c(a.level)}`:`Examen ${c(a.level)}`} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon tableau de bord</a>';else{r=b.almost;let d=Math.ceil(e.passMark*e.total);o=s.kind==="exam"?`L'examen se valide sans aucune faute (${e.total}/${e.total}). Il vous en manquait ${e.total-e.score}. Vos erreurs sont dans le cahier : r\xE9visez-les, puis r\xE9essayez.`:s.kind==="checkpoint"?`Il faut ${d}/${e.total} pour franchir le mi-palier. R\xE9visez les le\xE7ons concern\xE9es (vos erreurs sont dans le cahier), puis r\xE9essayez : les questions changent.`:`Il faut ${Math.round(e.passMark*100)} % pour valider. Relisez la le\xE7on, vos erreurs sont dans le cahier.`,i=`<a class="btn primary big" href="#${s.kind==="exam"?"examen-"+s.id:s.kind==="checkpoint"?"mipalier-"+s.id:"quiz-"+s.id}" data-reload>R\xE9essayer</a>`}s.kind!=="review"&&ne(s.kind,s.id)&&(i='<a class="btn primary big" href="#seance">Continuer la s\xE9ance du jour \u2192</a>'+(e.passed?"":i.replace("btn primary big","btn ghost")));let p=Math.round((e.ms||0)/1e3),k=p>=60?`${Math.floor(p/60)}:${String(p%60).padStart(2,"0")}`:`${p} s`,x=Z(),$=(d,l,m,P,E=null)=>`<div class="rt ${P}"><small>${l}</small><b ${E!=null?`data-count="${E}"`:""}>${E!=null?0:m}</b><span>${d}</span></div>`;t.innerHTML=`
  <section class="results ${e.passed?"ok":"ko"} rich">
    <div class="res-hero ${e.passed?"happy":"sad"}">
      <span class="res-mascot">${ee(e.passed?"cheer":"sad",{size:132})}</span>
      <span class="res-me">${u(v.profile?.avatar||"\u{1F642}")}</span>
      <span class="m-bubble res-bubble">${u(se(e.passed?"win":"fail"))}</span>
    </div>
    ${s.kind!=="review"?`<div class="stars" aria-label="${e.stars} \xE9toiles sur 3">${[1,2,3].map(d=>`<span class="${d<=e.stars?"on":""}" style="--d:${d*160}ms">\u2605</span>`).join("")}</div>`:""}
    <h1>${r}</h1>
    <p class="muted">${u(o)}</p>
    <div class="res-tiles">
      ${$("\u26A1","XP gagn\xE9s",e.xpGained,"t-xp",e.xpGained)}
      ${$("\u{1F3AF}","Pr\xE9cision",`${n} %`,n>=80?"t-acc":"t-acc low",null)}
      ${$("\u23F1\uFE0F","Temps",k,"t-time")}
      ${$("\u{1F525}","S\xE9rie",`${x} j`,"t-streak")}
    </div>
    <div class="result-chips">
      <span class="chip">\u2705 ${e.score} / ${e.total}</span>
      ${e.newWords?`<span class="chip">\u{1F4D2} +${e.newWords} mots</span>`:""}
      ${e.total-e.score?`<span class="chip warn">\u{1F501} ${e.total-e.score} \xE0 revoir</span>`:""}
    </div>
    ${A(e.results,{open:e.total-e.score<=6})}
    <div class="result-actions">
      ${i}
      <a class="btn ghost" href="${s.back}">${s.kind==="lesson"?"Relire la le\xE7on":"Retour"}</a>
    </div>
  </section>`,t.querySelectorAll("[data-count]").forEach(d=>{let l=+d.dataset.count,m=performance.now(),P=E=>{let _=Math.min(1,(E-m)/900);d.textContent=Math.round(l*(1-Math.pow(1-_,3))),_<1&&requestAnimationFrame(P)};requestAnimationFrame(P)}),s.kind==="exam"&&e.passed&&e.firstPass?(M({sound:"fanfare"}),setTimeout(()=>ce(s.id,e),900)):e.passed&&(e.firstPass||e.ratio===1)?M():e.passed&&Q("win")}function ce(t,s){let e=g(t),n=h.indexOf(e),a=h[n+1],r=v.profile?.pseudo||"",o=new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),i=document.createElement("div");i.className="diploma-screen",i.innerHTML=`
    <div class="dip-card" role="dialog" aria-label="Dipl\xF4me ${u(c(e))}">
      <div class="dip-ribbon">\u{1F393}</div>
      <p class="dip-kicker">Dipl\xF4me</p>
      <h2>Palier ${u(c(e))}</h2>
      <p class="dip-level">${u(e.name)} \xB7 ${u(e.title)}</p>
      <p class="dip-to">d\xE9cern\xE9 \xE0</p>
      <p class="dip-name">${u(r)} ${u(v.profile?.avatar||"")}</p>
      <p class="dip-meta">${u(b.label)} \xB7 ${s.score}/${s.total} \xB7 ${o}</p>
      <div class="dip-seal">${u(b.brand)}</div>
      <div class="dip-actions">
        ${a?`<a class="btn primary big" href="#parcours" data-next="${a.id}">D\xE9couvrir le palier ${u(c(a))} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon parcours</a>'}
        ${navigator.share?'<button class="btn ghost" data-share>Partager</button>':""}
        <button class="btn ghost" data-close>Fermer</button>
      </div>
    </div>`,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("in"));let p=()=>{i.classList.remove("in"),setTimeout(()=>i.remove(),250)};i.querySelector("[data-close]").onclick=p,i.querySelector("[data-next]")?.addEventListener("click",()=>{p(),setTimeout(()=>document.getElementById(`palier-${a.id}`)?.scrollIntoView({behavior:"smooth"}),400)}),i.querySelector("[data-share]")?.addEventListener("click",()=>navigator.share({title:`Dipl\xF4me ${c(e)}`,text:`\u{1F393} J'ai valid\xE9 le palier ${c(e)} en ${b.label.toLowerCase()} sur ${b.brand} !`,url:location.origin+location.pathname}).catch(()=>{}))}export{Me as renderBlanc,ye as renderExamen,ge as renderMiPalier,Ee as renderQuiz,Le as renderRevision};

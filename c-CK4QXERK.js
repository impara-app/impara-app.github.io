import{b as ie}from"./c-AOA5YEHK.js";import{a as te,b as ne}from"./c-NIWIMQL7.js";import"./c-S4BK6O6T.js";import"./c-MTBVWJL7.js";import{b as z,f as ae,g as O}from"./c-QWP52JQZ.js";import{b as ee,c as se}from"./c-7CJWDRQ4.js";import"./c-E6MVXD5Z.js";import"./c-KMOFPVBJ.js";import"./c-ZAQA7L4O.js";import"./c-2SGKD7PA.js";import"./c-KPGOLG5O.js";import{i as j}from"./c-AGYPKDOK.js";import"./c-N6NZ7XWY.js";import"./c-VYJREQA7.js";import"./c-55C5M23L.js";import{E as V,G as W,I as F,K,L as J,M as B,N as S,O as A,S as G,ba as Z,ca as Y,l as D,m as R,n as H,o as M,p as L,q as I,s as U}from"./c-O7XFUMVD.js";import"./c-6AJRVT3S.js";import{a as Q,e as p,f as k,r as g,s as X}from"./c-62IXJUWR.js";import{a as $,d as E,e as C,f as N,h as d}from"./c-EDIVJPJP.js";import{b as v,d as w}from"./c-36X2LLUK.js";import{g as f}from"./c-PBVGMHWF.js";import"./c-427Z5ASM.js";function Ee(t,s){let e=C(s);return!e||!S(e)?!1:(q(t,{kind:"lesson",id:s,label:e.title,title:`Quiz \xB7 ${e.title}`,questions:re(e),back:`#lecon-${s}`}),!0)}function re(t){let s=D,e=v.qAsked||{},r=k(t.quiz.map((u,c)=>({ref:`${t.id}:${c}`,q:u}))).sort((u,c)=>(e[u.ref]||0)-(e[c.ref]||0)),n=v.lessons[t.id]?.attempts||0,o=Math.min(r.length,n?Math.round(s*(n>=2?.4:.6)):s),i=ne(te(t),1,`${t.id}:ord`,t.levelId),a=r.slice(0,Math.min(o,s-i.length)),m=j(t,s-a.length-i.length),x=r.slice(a.length,a.length+Math.max(0,s-a.length-m.length-i.length)),b=[...a,...m,...i,...x];return w(u=>{let c=u.qAsked||={};b.forEach(l=>{!l.ref.includes(":gen:")&&!l.ref.endsWith(":ord")&&(c[l.ref]=(c[l.ref]||0)+1)})}),k(b)}function T(t,s,e=[]){let r=[...e],n=k(t).map(o=>k(o.quiz.map((i,a)=>({ref:`${o.id}:${a}`,q:i,lesson:o}))));for(let o=0;r.length<s&&n.some(i=>i.length);o++){let i=n[o%n.length];i.length&&r.push(i.pop())}for(let o=0,i=0;r.length<s&&i<t.length*3;o++,i++){let a=t[o%t.length];j(a,Math.min(3,s-r.length)).forEach(x=>r.push({...x,lesson:a}))}return k(r.slice(0,s))}var oe=t=>T(t.lessons,M,k(t.exam.map((s,e)=>({ref:`exam-${t.id}:${e}`,q:s}))).slice(0,M));function Me(t,s){let e=E(s),r=$.indexOf(e);if(!e||!K(r))return!1;let n=e.lessons.slice(0,F(e)),o=T(n,H).map(({ref:i,q:a})=>({ref:i,q:a}));return q(t,{kind:"checkpoint",id:s,label:`Mi-palier ${d(e)}`,title:`Test de mi-palier ${d(e)}`,questions:k(o),back:"#parcours"}),!0}function ge(t,s){let e=E(s),r=$.indexOf(e);return!e||!A(r)?!1:(q(t,{kind:"exam",id:s,label:`Examen ${d(s)}`,title:`Examen de fin de palier ${d(s)}`,questions:oe(e).map(({ref:n,q:o})=>({ref:n,q:o})),back:"#parcours"}),!0)}function Le(t,s){let e=E(s),r=$.indexOf(e);if(!e||!B(r))return!1;let n=M,o=e.lessons.filter(a=>W(a.id)).length,i=v.blanc?.[s];return t.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Entra\xEEnement \xE0 l'examen</p>
    <h1>\u{1F4DD} Examen blanc ${p(d(e))}</h1>
    <p class="lead">${n} questions tir\xE9es de <b>toutes les le\xE7ons</b> du palier, comme le jour de l'examen.</p>
    <ul class="defi-rules">
      <li>\u{1F3AF} Il faut <b>${Math.round(R*100)} %</b> pour r\xE9ussir le vrai examen</li>
      <li>\u{1F0CF} ${L} jokers : une faute de frappe (une lettre fausse, en trop ou manquante) est pardonn\xE9e</li>
      <li>\u{1F4DA} Vous avez termin\xE9 <b>${o}/${e.lessons.length}</b> le\xE7ons : les autres appara\xEEtront aussi</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs : c'est un essai</li>
      <li>\u{1F4CB} \xC0 la fin : les le\xE7ons \xE0 revoir en priorit\xE9</li>
    </ul>
    ${i?`<p class="muted small">Meilleur examen blanc : <b>${i.best}/${i.total}</b> \xB7 dernier : ${i.last}/${i.total}</p>`:""}
    <button class="btn primary big" data-go>Commencer l'examen blanc</button>
  </section>`,t.querySelector("[data-go]").onclick=()=>le(t,e),!0}function le(t,s){let e=T(s.lessons,M);document.body.classList.add("focus-mode"),O(t,{title:`Examen blanc ${d(s)}`,questions:e.map(({ref:r,q:n})=>({ref:r,q:n})),jokers:L,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:r=>{document.body.classList.remove("focus-mode");let n=r.filter(l=>l.correct).length,o=r.length,i=V({label:`Examen blanc ${d(s)}`,score:n,total:o,xpPer:2,key:`blanc:${s.id}`});w(l=>{let h=l.blanc?.[s.id];l.blanc={...l.blanc||{},[s.id]:{best:Math.max(h?.best||0,n),last:n,total:o,date:Date.now()}}});let a={};r.forEach((l,h)=>{if(!l.correct){let P=e[h].lesson;a[P.id]=(a[P.id]||0)+1}});let m=s.lessons.filter(l=>a[l.id]).sort((l,h)=>a[h.id]-a[l.id]),x=Math.round(n/o*100),b=Math.ceil(R*o),u=n>=b,c=A($.indexOf(s));t.innerHTML=`
      <section class="results ${u?"ok":"ko"}">
        ${X(x,150,12)}
        <h1>${u?"Vous auriez r\xE9ussi l'examen ! \u{1F393}":"Pas encore tout \xE0 fait"}</h1>
        <p class="lead">${n} / ${o} bonnes r\xE9ponses \xB7 ${b} n\xE9cessaires</p>
        <p class="muted">${u?c?"Vous \xEAtes pr\xEAt\xB7e : lancez-vous pour de vrai !":"Terminez les le\xE7ons du palier pour d\xE9bloquer le vrai examen.":`Il vous manque ${b-n} bonne${b-n>1?"s":""} r\xE9ponse${b-n>1?"s":""}. Voici quoi revoir en priorit\xE9.`}</p>
        <div class="result-chips">${i.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${i.xpGained} XP</span>`}</div>
        ${m.length?`<div class="card blanc-review"><h2 class="h3">\u{1F4CB} \xC0 revoir</h2><ul>${m.map(l=>{let h=S(l);return`<li><span>${l.emoji} ${p(l.title)}</span><small>${a[l.id]} erreur${a[l.id]>1?"s":""}</small>
            ${h?`<a class="btn ghost small" href="#lecon-${l.id}">Revoir</a>`:'<span class="muted small">\u{1F512} pas encore faite</span>'}</li>`}).join("")}</ul></div>`:""}
        ${z(r,{open:!1})}
        <div class="result-actions">
          ${u&&c?`<a class="btn primary big" href="#examen-${s.id}">Passer le vrai examen \u2192</a>`:`<a class="btn primary big" href="#blanc-${s.id}" data-reload>Refaire un examen blanc</a>`}
          <a class="btn ghost" href="#parcours">Retour au parcours</a>
        </div>
      </section>`,u&&g()}})}function qe(t){let s=Object.values(v.errors).sort((e,r)=>r.count-e.count||e.lastWrong-r.lastWrong).slice(0,10).map(e=>({ref:e.ref,q:N(e.ref)})).filter(e=>e.q);return s.length?(q(t,{kind:"review",id:"review",label:"R\xE9vision des erreurs",title:"R\xE9vision de vos erreurs",questions:k(s),back:"#erreurs"}),!0):(location.hash="erreurs",!0)}async function q(t,s){let e=`${s.kind}:${s.id}`,r=location.hash;t.innerHTML="";let n=await ae(e);location.hash===r&&(document.body.classList.add("focus-mode"),s.t0=n?.ts?Date.now()-6e4:Date.now(),O(t,{title:s.title,questions:s.questions,saveKey:e,resume:n,xpPerAnswer:U,jokers:s.kind==="exam"?L:s.kind==="checkpoint"?I:0,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=s.back.slice(1)},onFinish:o=>{document.body.classList.remove("focus-mode");let i=Y({kind:s.kind,id:s.id,label:s.label,results:o});i.ms=Date.now()-s.t0,i.results=o,ce(t,s,i),s.kind==="exam"&&i.passed&&i.firstPass&&import("./c-HFRUFLKY.js").then(a=>a.showLevelUp(s.id)).catch(()=>{})}}))}function ce(t,s,e){let r=Math.round(e.ratio*100),n=G(),o,i,a;if(s.kind==="review")o=r===100?"Sans faute ! \u{1F4AA}":"R\xE9vision termin\xE9e",i=e.mastered?`${e.mastered} notion(s) ma\xEEtris\xE9e(s) et retir\xE9e(s) du cahier d'erreurs.`:"Une erreur dispara\xEEt du cahier apr\xE8s 2 bonnes r\xE9ponses d'affil\xE9e.",a=Object.keys(v.errors).length?'<a class="btn primary big" href="#revision" data-reload>Nouvelle r\xE9vision</a>':'<a class="btn primary big" href="#parcours">Retour au parcours</a>';else if(e.passed)o=s.kind==="exam"?`Palier ${d(s.id)} valid\xE9 ! \u{1F393}`:s.kind==="checkpoint"?"Mi-palier franchi ! \u{1F6E1}\uFE0F":f.resultHeads[e.stars-1]||f.resultHeads[0],i=s.kind==="checkpoint"?"La deuxi\xE8me moiti\xE9 du palier est d\xE9bloqu\xE9e.":s.kind==="exam"?$[$.findIndex(c=>c.id===s.id)+1]?`Le palier ${d($[$.findIndex(c=>c.id===s.id)+1])} est maintenant d\xE9bloqu\xE9.`:f.finished:e.newWords?`${e.newWords} nouveaux mots ajout\xE9s \xE0 vos mots.`:"Le\xE7on valid\xE9e.",a=n?`<a class="btn primary big" href="#${J(n)}">${n.kind==="lesson"?"Le\xE7on suivante":n.kind==="checkpoint"?`Test de mi-palier ${d(n.level)}`:`Examen ${d(n.level)}`} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon tableau de bord</a>';else{o=f.almost;let c=Math.ceil(e.passMark*e.total);i=s.kind==="exam"?`L'examen se valide sans aucune faute (${e.total}/${e.total}). Il vous en manquait ${e.total-e.score}. Vos erreurs sont dans le cahier : r\xE9visez-les, puis r\xE9essayez.`:s.kind==="checkpoint"?`Il faut ${c}/${e.total} pour franchir le mi-palier. R\xE9visez les le\xE7ons concern\xE9es (vos erreurs sont dans le cahier), puis r\xE9essayez : les questions changent.`:`Il faut ${Math.round(e.passMark*100)} % pour valider. Relisez la le\xE7on, vos erreurs sont dans le cahier.`,a=`<a class="btn primary big" href="#${s.kind==="exam"?"examen-"+s.id:s.kind==="checkpoint"?"mipalier-"+s.id:"quiz-"+s.id}" data-reload>R\xE9essayer</a>`}s.kind!=="review"&&ie(s.kind,s.id)&&(a='<a class="btn primary big" href="#seance">Continuer la s\xE9ance du jour \u2192</a>'+(e.passed?"":a.replace("btn primary big","btn ghost")));let m=Math.round((e.ms||0)/1e3),x=m>=60?`${Math.floor(m/60)}:${String(m%60).padStart(2,"0")}`:`${m} s`,b=Z(),u=(c,l,h,P,y=null)=>`<div class="rt ${P}"><small>${l}</small><b ${y!=null?`data-count="${y}"`:""}>${y!=null?0:h}</b><span>${c}</span></div>`;t.innerHTML=`
  <section class="results ${e.passed?"ok":"ko"} rich">
    <div class="res-hero ${e.passed?"happy":"sad"}">
      <span class="res-mascot">${ee(e.passed?"cheer":"sad",{size:132})}</span>
      <span class="res-me">${p(v.profile?.avatar||"\u{1F642}")}</span>
      <span class="m-bubble res-bubble">${p(se(e.passed?"win":"fail"))}</span>
    </div>
    ${s.kind!=="review"?`<div class="stars" aria-label="${e.stars} \xE9toiles sur 3">${[1,2,3].map(c=>`<span class="${c<=e.stars?"on":""}" style="--d:${c*160}ms">\u2605</span>`).join("")}</div>`:""}
    <h1>${o}</h1>
    <p class="muted">${p(i)}</p>
    <div class="res-tiles">
      ${u("\u26A1","XP gagn\xE9s",e.xpGained,"t-xp",e.xpGained)}
      ${u("\u{1F3AF}","Pr\xE9cision",`${r} %`,r>=80?"t-acc":"t-acc low",null)}
      ${u("\u23F1\uFE0F","Temps",x,"t-time")}
      ${u("\u{1F525}","S\xE9rie",`${b} j`,"t-streak")}
    </div>
    <div class="result-chips">
      <span class="chip">\u2705 ${e.score} / ${e.total}</span>
      ${e.newWords?`<span class="chip">\u{1F4D2} +${e.newWords} mots</span>`:""}
      ${e.total-e.score?`<span class="chip warn">\u{1F501} ${e.total-e.score} \xE0 revoir</span>`:""}
    </div>
    ${z(e.results,{open:e.total-e.score<=6})}
    <div class="result-actions">
      ${a}
      <a class="btn ghost" href="${s.back}">${s.kind==="lesson"?"Relire la le\xE7on":"Retour"}</a>
    </div>
  </section>`,t.querySelectorAll("[data-count]").forEach(c=>{let l=+c.dataset.count,h=performance.now(),P=y=>{let _=Math.min(1,(y-h)/900);c.textContent=Math.round(l*(1-Math.pow(1-_,3))),_<1&&requestAnimationFrame(P)};requestAnimationFrame(P)}),s.kind==="exam"&&e.passed&&e.firstPass?(g({sound:"fanfare"}),setTimeout(()=>de(s.id,e),900)):e.passed&&(e.firstPass||e.ratio===1)?g():e.passed&&Q("win")}function de(t,s){let e=E(t),r=$.indexOf(e),n=$[r+1],o=v.profile?.pseudo||"",i=new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),a=document.createElement("div");a.className="diploma-screen",a.innerHTML=`
    <div class="dip-card" role="dialog" aria-label="Dipl\xF4me ${p(d(e))}">
      <div class="dip-ribbon">\u{1F393}</div>
      <p class="dip-kicker">Dipl\xF4me</p>
      <h2>Palier ${p(d(e))}</h2>
      <p class="dip-level">${p(e.name)} \xB7 ${p(e.title)}</p>
      <p class="dip-to">d\xE9cern\xE9 \xE0</p>
      <p class="dip-name">${p(o)} ${p(v.profile?.avatar||"")}</p>
      <p class="dip-meta">${p(f.label)} \xB7 ${s.score}/${s.total} \xB7 ${i}</p>
      <div class="dip-seal">${p(f.brand)}</div>
      <div class="dip-actions">
        ${n?`<a class="btn primary big" href="#parcours" data-next="${n.id}">D\xE9couvrir le palier ${p(d(n))} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon parcours</a>'}
        ${navigator.share?'<button class="btn ghost" data-share>Partager</button>':""}
        <button class="btn ghost" data-close>Fermer</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("in"));let m=()=>{a.classList.remove("in"),setTimeout(()=>a.remove(),250)};a.querySelector("[data-close]").onclick=m,a.querySelector("[data-next]")?.addEventListener("click",()=>{m(),setTimeout(()=>document.getElementById(`palier-${n.id}`)?.scrollIntoView({behavior:"smooth"}),400)}),a.querySelector("[data-share]")?.addEventListener("click",()=>navigator.share({title:`Dipl\xF4me ${d(e)}`,text:`\u{1F393} J'ai valid\xE9 le palier ${d(e)} en ${f.label.toLowerCase()} sur ${f.brand} !`,url:location.origin+location.pathname}).catch(()=>{}))}export{Le as renderBlanc,ge as renderExamen,Me as renderMiPalier,Ee as renderQuiz,qe as renderRevision};

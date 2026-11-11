import{b as ne}from"./c-T6LFLYIZ.js";import{a as ae,b as te}from"./c-ZBSDUUSQ.js";import{b as O,d as j}from"./c-TZUXKHD5.js";import"./c-E6MVXD5Z.js";import"./c-ZAKVLMEQ.js";import"./c-UU4YX77H.js";import"./c-ZAQA7L4O.js";import"./c-FEKK23SY.js";import"./c-MQKQRSKL.js";import{b as ee,c as se}from"./c-SOVZPZMM.js";import{i as z}from"./c-ZQ7SEGB5.js";import"./c-VYJREQA7.js";import"./c-PGWR3KB4.js";import{A as J,B,C as S,D as A,H as G,N as Z,O as Y,b as D,c as R,d as H,e as y,f as L,g as I,i as U,t as V,v as W,x as F,z as K}from"./c-ZGKPSPJK.js";import"./c-BIAU6VNF.js";import{a as $,d as g,e as C,f as N,h as d}from"./c-3M6EEBJX.js";import{L as M,M as X,g as f,j as v,l as w,p as Q,y as p,z as k}from"./c-HPXZTFFF.js";import"./c-427Z5ASM.js";function Ee(a,s){let e=C(s);return!e||!S(e)?!1:(q(a,{kind:"lesson",id:s,label:e.title,title:`Quiz \xB7 ${e.title}`,questions:ie(e),back:`#lecon-${s}`}),!0)}function ie(a){let s=D,e=v.qAsked||{},n=k(a.quiz.map((u,c)=>({ref:`${a.id}:${c}`,q:u}))).sort((u,c)=>(e[u.ref]||0)-(e[c.ref]||0)),i=v.lessons[a.id]?.attempts||0,o=Math.min(n.length,i?Math.round(s*(i>=2?.4:.6)):s),r=te(ae(a),1,`${a.id}:ord`,a.levelId),t=n.slice(0,Math.min(o,s-r.length)),m=z(a,s-t.length-r.length),x=n.slice(t.length,t.length+Math.max(0,s-t.length-m.length-r.length)),b=[...t,...m,...r,...x];return w(u=>{let c=u.qAsked||={};b.forEach(l=>{!l.ref.includes(":gen:")&&!l.ref.endsWith(":ord")&&(c[l.ref]=(c[l.ref]||0)+1)})}),k(b)}function _(a,s,e=[]){let n=[...e],i=k(a).map(o=>k(o.quiz.map((r,t)=>({ref:`${o.id}:${t}`,q:r,lesson:o}))));for(let o=0;n.length<s&&i.some(r=>r.length);o++){let r=i[o%i.length];r.length&&n.push(r.pop())}for(let o=0,r=0;n.length<s&&r<a.length*3;o++,r++){let t=a[o%a.length];z(t,Math.min(3,s-n.length)).forEach(x=>n.push({...x,lesson:t}))}return k(n.slice(0,s))}var re=a=>_(a.lessons,y,k(a.exam.map((s,e)=>({ref:`exam-${a.id}:${e}`,q:s}))).slice(0,y));function ge(a,s){let e=g(s),n=$.indexOf(e);if(!e||!K(n))return!1;let i=e.lessons.slice(0,F(e)),o=_(i,H).map(({ref:r,q:t})=>({ref:r,q:t}));return q(a,{kind:"checkpoint",id:s,label:`Mi-palier ${d(e)}`,title:`Test de mi-palier ${d(e)}`,questions:k(o),back:"#parcours"}),!0}function ye(a,s){let e=g(s),n=$.indexOf(e);return!e||!A(n)?!1:(q(a,{kind:"exam",id:s,label:`Examen ${d(s)}`,title:`Examen de fin de palier ${d(s)}`,questions:re(e).map(({ref:i,q:o})=>({ref:i,q:o})),back:"#parcours"}),!0)}function Me(a,s){let e=g(s),n=$.indexOf(e);if(!e||!B(n))return!1;let i=y,o=e.lessons.filter(t=>W(t.id)).length,r=v.blanc?.[s];return a.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Entra\xEEnement \xE0 l'examen</p>
    <h1>\u{1F4DD} Examen blanc ${p(d(e))}</h1>
    <p class="lead">${i} questions tir\xE9es de <b>toutes les le\xE7ons</b> du palier, comme le jour de l'examen.</p>
    <ul class="defi-rules">
      <li>\u{1F3AF} Il faut <b>${Math.round(R*100)} %</b> pour r\xE9ussir le vrai examen</li>
      <li>\u{1F0CF} ${L} jokers : une faute de frappe (une lettre fausse, en trop ou manquante) est pardonn\xE9e</li>
      <li>\u{1F4DA} Vous avez termin\xE9 <b>${o}/${e.lessons.length}</b> le\xE7ons : les autres appara\xEEtront aussi</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs : c'est un essai</li>
      <li>\u{1F4CB} \xC0 la fin : les le\xE7ons \xE0 revoir en priorit\xE9</li>
    </ul>
    ${r?`<p class="muted small">Meilleur examen blanc : <b>${r.best}/${r.total}</b> \xB7 dernier : ${r.last}/${r.total}</p>`:""}
    <button class="btn primary big" data-go>Commencer l'examen blanc</button>
  </section>`,a.querySelector("[data-go]").onclick=()=>oe(a,e),!0}function oe(a,s){let e=_(s.lessons,y);document.body.classList.add("focus-mode"),j(a,{title:`Examen blanc ${d(s)}`,questions:e.map(({ref:n,q:i})=>({ref:n,q:i})),jokers:L,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash="parcours"},onFinish:n=>{document.body.classList.remove("focus-mode");let i=n.filter(l=>l.correct).length,o=n.length,r=V({label:`Examen blanc ${d(s)}`,score:i,total:o,xpPer:2,key:`blanc:${s.id}`});w(l=>{let h=l.blanc?.[s.id];l.blanc={...l.blanc||{},[s.id]:{best:Math.max(h?.best||0,i),last:i,total:o,date:Date.now()}}});let t={};n.forEach((l,h)=>{if(!l.correct){let P=e[h].lesson;t[P.id]=(t[P.id]||0)+1}});let m=s.lessons.filter(l=>t[l.id]).sort((l,h)=>t[h.id]-t[l.id]),x=Math.round(i/o*100),b=Math.ceil(R*o),u=i>=b,c=A($.indexOf(s));a.innerHTML=`
      <section class="results ${u?"ok":"ko"}">
        ${X(x,150,12)}
        <h1>${u?"Vous auriez r\xE9ussi l'examen ! \u{1F393}":"Pas encore tout \xE0 fait"}</h1>
        <p class="lead">${i} / ${o} bonnes r\xE9ponses \xB7 ${b} n\xE9cessaires</p>
        <p class="muted">${u?c?"Vous \xEAtes pr\xEAt\xB7e : lancez-vous pour de vrai !":"Terminez les le\xE7ons du palier pour d\xE9bloquer le vrai examen.":`Il vous manque ${b-i} bonne${b-i>1?"s":""} r\xE9ponse${b-i>1?"s":""}. Voici quoi revoir en priorit\xE9.`}</p>
        <div class="result-chips">${r.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${r.xpGained} XP</span>`}</div>
        ${m.length?`<div class="card blanc-review"><h2 class="h3">\u{1F4CB} \xC0 revoir</h2><ul>${m.map(l=>{let h=S(l);return`<li><span>${l.emoji} ${p(l.title)}</span><small>${t[l.id]} erreur${t[l.id]>1?"s":""}</small>
            ${h?`<a class="btn ghost small" href="#lecon-${l.id}">Revoir</a>`:'<span class="muted small">\u{1F512} pas encore faite</span>'}</li>`}).join("")}</ul></div>`:""}
        ${O(n,{open:!1})}
        <div class="result-actions">
          ${u&&c?`<a class="btn primary big" href="#examen-${s.id}">Passer le vrai examen \u2192</a>`:`<a class="btn primary big" href="#blanc-${s.id}" data-reload>Refaire un examen blanc</a>`}
          <a class="btn ghost" href="#parcours">Retour au parcours</a>
        </div>
      </section>`,u&&M()}})}function Le(a){let s=Object.values(v.errors).sort((e,n)=>n.count-e.count||e.lastWrong-n.lastWrong).slice(0,10).map(e=>({ref:e.ref,q:N(e.ref)})).filter(e=>e.q);return s.length?(q(a,{kind:"review",id:"review",label:"R\xE9vision des erreurs",title:"R\xE9vision de vos erreurs",questions:k(s),back:"#erreurs"}),!0):(location.hash="erreurs",!0)}function q(a,s){document.body.classList.add("focus-mode"),s.t0=Date.now(),j(a,{title:s.title,questions:s.questions,xpPerAnswer:U,jokers:s.kind==="exam"?L:s.kind==="checkpoint"?I:0,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=s.back.slice(1)},onFinish:e=>{document.body.classList.remove("focus-mode");let n=Y({kind:s.kind,id:s.id,label:s.label,results:e});n.ms=Date.now()-s.t0,n.results=e,le(a,s,n),s.kind==="exam"&&n.passed&&n.firstPass&&import("./c-TAMNRG6Z.js").then(i=>i.showLevelUp(s.id)).catch(()=>{})}})}function le(a,s,e){let n=Math.round(e.ratio*100),i=G(),o,r,t;if(s.kind==="review")o=n===100?"Sans faute ! \u{1F4AA}":"R\xE9vision termin\xE9e",r=e.mastered?`${e.mastered} notion(s) ma\xEEtris\xE9e(s) et retir\xE9e(s) du cahier d'erreurs.`:"Une erreur dispara\xEEt du cahier apr\xE8s 2 bonnes r\xE9ponses d'affil\xE9e.",t=Object.keys(v.errors).length?'<a class="btn primary big" href="#revision" data-reload>Nouvelle r\xE9vision</a>':'<a class="btn primary big" href="#parcours">Retour au parcours</a>';else if(e.passed)o=s.kind==="exam"?`Palier ${d(s.id)} valid\xE9 ! \u{1F393}`:s.kind==="checkpoint"?"Mi-palier franchi ! \u{1F6E1}\uFE0F":f.resultHeads[e.stars-1]||f.resultHeads[0],r=s.kind==="checkpoint"?"La deuxi\xE8me moiti\xE9 du palier est d\xE9bloqu\xE9e.":s.kind==="exam"?$[$.findIndex(c=>c.id===s.id)+1]?`Le palier ${d($[$.findIndex(c=>c.id===s.id)+1])} est maintenant d\xE9bloqu\xE9.`:f.finished:e.newWords?`${e.newWords} nouveaux mots ajout\xE9s \xE0 vos mots.`:"Le\xE7on valid\xE9e.",t=i?`<a class="btn primary big" href="#${J(i)}">${i.kind==="lesson"?"Le\xE7on suivante":i.kind==="checkpoint"?`Test de mi-palier ${d(i.level)}`:`Examen ${d(i.level)}`} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon tableau de bord</a>';else{o=f.almost;let c=Math.ceil(e.passMark*e.total);r=s.kind==="exam"?`L'examen se valide sans aucune faute (${e.total}/${e.total}). Il vous en manquait ${e.total-e.score}. Vos erreurs sont dans le cahier : r\xE9visez-les, puis r\xE9essayez.`:s.kind==="checkpoint"?`Il faut ${c}/${e.total} pour franchir le mi-palier. R\xE9visez les le\xE7ons concern\xE9es (vos erreurs sont dans le cahier), puis r\xE9essayez : les questions changent.`:`Il faut ${Math.round(e.passMark*100)} % pour valider. Relisez la le\xE7on, vos erreurs sont dans le cahier.`,t=`<a class="btn primary big" href="#${s.kind==="exam"?"examen-"+s.id:s.kind==="checkpoint"?"mipalier-"+s.id:"quiz-"+s.id}" data-reload>R\xE9essayer</a>`}s.kind!=="review"&&ne(s.kind,s.id)&&(t='<a class="btn primary big" href="#seance">Continuer la s\xE9ance du jour \u2192</a>'+(e.passed?"":t.replace("btn primary big","btn ghost")));let m=Math.round((e.ms||0)/1e3),x=m>=60?`${Math.floor(m/60)}:${String(m%60).padStart(2,"0")}`:`${m} s`,b=Z(),u=(c,l,h,P,E=null)=>`<div class="rt ${P}"><small>${l}</small><b ${E!=null?`data-count="${E}"`:""}>${E!=null?0:h}</b><span>${c}</span></div>`;a.innerHTML=`
  <section class="results ${e.passed?"ok":"ko"} rich">
    <div class="res-hero ${e.passed?"happy":"sad"}">
      <span class="res-mascot">${ee(e.passed?"cheer":"sad",{size:132})}</span>
      <span class="res-me">${p(v.profile?.avatar||"\u{1F642}")}</span>
      <span class="m-bubble res-bubble">${p(se(e.passed?"win":"fail"))}</span>
    </div>
    ${s.kind!=="review"?`<div class="stars" aria-label="${e.stars} \xE9toiles sur 3">${[1,2,3].map(c=>`<span class="${c<=e.stars?"on":""}" style="--d:${c*160}ms">\u2605</span>`).join("")}</div>`:""}
    <h1>${o}</h1>
    <p class="muted">${p(r)}</p>
    <div class="res-tiles">
      ${u("\u26A1","XP gagn\xE9s",e.xpGained,"t-xp",e.xpGained)}
      ${u("\u{1F3AF}","Pr\xE9cision",`${n} %`,n>=80?"t-acc":"t-acc low",null)}
      ${u("\u23F1\uFE0F","Temps",x,"t-time")}
      ${u("\u{1F525}","S\xE9rie",`${b} j`,"t-streak")}
    </div>
    <div class="result-chips">
      <span class="chip">\u2705 ${e.score} / ${e.total}</span>
      ${e.newWords?`<span class="chip">\u{1F4D2} +${e.newWords} mots</span>`:""}
      ${e.total-e.score?`<span class="chip warn">\u{1F501} ${e.total-e.score} \xE0 revoir</span>`:""}
    </div>
    ${O(e.results,{open:e.total-e.score<=6})}
    <div class="result-actions">
      ${t}
      <a class="btn ghost" href="${s.back}">${s.kind==="lesson"?"Relire la le\xE7on":"Retour"}</a>
    </div>
  </section>`,a.querySelectorAll("[data-count]").forEach(c=>{let l=+c.dataset.count,h=performance.now(),P=E=>{let T=Math.min(1,(E-h)/900);c.textContent=Math.round(l*(1-Math.pow(1-T,3))),T<1&&requestAnimationFrame(P)};requestAnimationFrame(P)}),s.kind==="exam"&&e.passed&&e.firstPass?(M({sound:"fanfare"}),setTimeout(()=>ce(s.id,e),900)):e.passed&&(e.firstPass||e.ratio===1)?M():e.passed&&Q("win")}function ce(a,s){let e=g(a),n=$.indexOf(e),i=$[n+1],o=v.profile?.pseudo||"",r=new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),t=document.createElement("div");t.className="diploma-screen",t.innerHTML=`
    <div class="dip-card" role="dialog" aria-label="Dipl\xF4me ${p(d(e))}">
      <div class="dip-ribbon">\u{1F393}</div>
      <p class="dip-kicker">Dipl\xF4me</p>
      <h2>Palier ${p(d(e))}</h2>
      <p class="dip-level">${p(e.name)} \xB7 ${p(e.title)}</p>
      <p class="dip-to">d\xE9cern\xE9 \xE0</p>
      <p class="dip-name">${p(o)} ${p(v.profile?.avatar||"")}</p>
      <p class="dip-meta">${p(f.label)} \xB7 ${s.score}/${s.total} \xB7 ${r}</p>
      <div class="dip-seal">${p(f.brand)}</div>
      <div class="dip-actions">
        ${i?`<a class="btn primary big" href="#parcours" data-next="${i.id}">D\xE9couvrir le palier ${p(d(i))} \u2192</a>`:'<a class="btn primary big" href="#tableau">Voir mon parcours</a>'}
        ${navigator.share?'<button class="btn ghost" data-share>Partager</button>':""}
        <button class="btn ghost" data-close>Fermer</button>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("in"));let m=()=>{t.classList.remove("in"),setTimeout(()=>t.remove(),250)};t.querySelector("[data-close]").onclick=m,t.querySelector("[data-next]")?.addEventListener("click",()=>{m(),setTimeout(()=>document.getElementById(`palier-${i.id}`)?.scrollIntoView({behavior:"smooth"}),400)}),t.querySelector("[data-share]")?.addEventListener("click",()=>navigator.share({title:`Dipl\xF4me ${d(e)}`,text:`\u{1F393} J'ai valid\xE9 le palier ${d(e)} en ${f.label.toLowerCase()} sur ${f.brand} !`,url:location.origin+location.pathname}).catch(()=>{}))}export{Me as renderBlanc,ye as renderExamen,ge as renderMiPalier,Ee as renderQuiz,Le as renderRevision};

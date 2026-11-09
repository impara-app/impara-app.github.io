import{a as L}from"./c-C733FH4I.js";import{A as R,B as T,E as z,F as G,G as D,H,J as K,N as W,k as N,v as A,w as C}from"./c-POB3GHDO.js";import{g as M}from"./c-JIOPGAS6.js";import{a as b,c as j,e as O,g as F,h as f}from"./c-PJBGR76R.js";import{L as k,g as P,j as m,y as g}from"./c-73F2H2ED.js";import"./c-427Z5ASM.js";var w=i=>N(i),S=i=>m.dayLog?.[i]||0,B=["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."];function V(){let e=new Date;e.setHours(12,0,0,0);let c=new Date(e);c.setDate(e.getDate()-(e.getDay()+6)%7-112);let l=s=>s<=0?0:s<20?1:s<50?2:s<100?3:4,n="",o="",d=0,t=0,r=-1;for(let s=0;s<17;s++){let $="",u=new Date(c);u.setDate(c.getDate()+s*7),u.getMonth()!==r&&(o+=`<span style="grid-column:${s+1}">${B[u.getMonth()]}</span>`,r=u.getMonth());for(let a=0;a<7;a++){let p=new Date(c);p.setDate(c.getDate()+s*7+a);let X=w(p),y=S(X),I=p>e;y>0&&(d++,t+=y),$+=`<i class="hm-c l${I?"x":l(y)} ${X===w(e)?"today":""}" title="${p.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})} : ${y} XP"></i>`}n+=`<div class="hm-col">${$}</div>`}let h=0,v=0;for(let s=119;s>=0;s--){let $=new Date(e);$.setDate(e.getDate()-s),S(w($))>0?h=Math.max(h,++v):v=0}return`<section class="card dash-wide">
    <div class="dw-head"><h2 class="h3">\u{1F4C5} Calendrier de pratique</h2><span class="muted small">${d} jour${d>1?"s":""} actif${d>1?"s":""} \xB7 meilleure s\xE9rie ${h} j</span></div>
    <div class="hm-wrap"><div class="hm-days"><span>L</span><span></span><span>M</span><span></span><span>V</span><span></span><span>D</span></div>
      <div class="hm"><div class="hm-months">${o}</div><div class="hm-grid">${n}</div></div></div>
    <div class="hm-legend"><span>Moins</span>${[0,1,2,3,4].map(s=>`<i class="hm-c l${s}"></i>`).join("")}<span>Plus</span></div>
  </section>`}function q(){let e=[];for(let a=29;a>=0;a--){let p=new Date;p.setDate(p.getDate()-a),e.push({d:p,x:S(w(p))})}let c=Math.max(50,...e.map(a=>a.x)),l=320,n=120,o=6,d=a=>o+a*(l-2*o)/29,t=a=>n-o-a/c*(n-2*o-10),r=e.map((a,p)=>`${p?"L":"M"}${d(p).toFixed(1)},${t(a.x).toFixed(1)}`).join(" "),h=`${r} L${d(29).toFixed(1)},${n-o} L${d(0).toFixed(1)},${n-o} Z`,v=e.reduce((a,p)=>a+p.x,0),s=e.reduce((a,p)=>p.x>a.x?p:a,e[0]),$=m.profile?.dailyGoal||50,u=[0,7,14,21,29].map(a=>`<span style="left:${d(a)/l*100}%">${e[a].d.getDate()} ${B[e[a].d.getMonth()]}</span>`).join("");return`<section class="card dash-wide">
    <div class="dw-head"><h2 class="h3">\u{1F4C8} XP des 30 derniers jours</h2><span class="muted small">${v} XP \xB7 ${Math.round(v/30)} / jour en moyenne</span></div>
    <div class="xc">
      <svg viewBox="0 0 ${l} ${n}" preserveAspectRatio="none" class="xc-svg" aria-hidden="true">
        <defs><linearGradient id="xcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--lvl-c)" stop-opacity=".35"/><stop offset="1" stop-color="var(--lvl-c)" stop-opacity="0"/></linearGradient></defs>
        <line x1="0" x2="${l}" y1="${t($).toFixed(1)}" y2="${t($).toFixed(1)}" class="xc-goal"/>
        <path d="${h}" fill="url(#xcg)"/><path d="${r}" class="xc-line" fill="none" vector-effect="non-scaling-stroke"/>
      </svg>
      ${e.map((a,p)=>a.x?`<i class="xc-dot ${a===s?"best":""}" style="left:${d(p)/l*100}%;top:${t(a.x)/n*100}%" title="${a.d.toLocaleDateString("fr-FR")} : ${a.x} XP"></i>`:"").join("")}
      <span class="xc-goal-l" style="top:${t($)/n*100}%">objectif ${$}</span>
    </div>
    <div class="xc-ticks">${u}</div>
    ${s.x?`<p class="small muted">\u{1F3C5} Meilleur jour : <b>${s.x} XP</b> le ${s.d.toLocaleDateString("fr-FR",{day:"numeric",month:"long"})}</p>`:'<p class="small muted">Gagnez des XP pour voir votre courbe se dessiner.</p>'}
  </section>`}function _(){let i=Object.values(m.vocab),e=0,c=0,l=0;i.forEach(t=>{let r=L(t);r?r.box>=4?e++:c++:l++});let n=Math.max(1,i.length),o=t=>Math.round(t/n*100),d=i.map(t=>({w:t,c:L(t)})).filter(({c:t})=>t&&(t.lapses||0)>0&&t.box<4).sort((t,r)=>(r.c.lapses||0)-(t.c.lapses||0)||t.c.box-r.c.box).slice(0,6);return`<section class="card">
    <h2 class="h3">\u{1F4D2} Mes mots</h2>
    <div class="wm-bar"><span class="k" style="width:${o(e)}%"></span><span class="l" style="width:${o(c)}%"></span><span class="n" style="width:${o(l)}%"></span></div>
    <div class="wm-legend"><span><i class="k"></i>${e} ma\xEEtris\xE9${e>1?"s":""}</span><span><i class="l"></i>${c} en cours</span><span><i class="n"></i>${l} jamais r\xE9vis\xE9${l>1?"s":""}</span></div>
    <h3 class="wm-h">\u26A0\uFE0F Mots fragiles</h3>
    ${d.length?`<ul class="wm-list">${d.map(({w:t,c:r})=>`<li><b class="${P.wordClass}">${g(t.zh)}</b>${t.py?`<small class="py">${g(t.py)}</small>`:""}<span>${g(String(t.fr).split(" \u2014 ")[0])}</span><em>${r.lapses}\xD7</em></li>`).join("")}</ul>
      <a class="btn ghost small" href="#reviser">\u{1F0CF} Les r\xE9viser en flashcards</a>`:`<p class="small muted">${i.length?"Aucun mot oubli\xE9 r\xE9cemment \u{1F44D} Les mots rat\xE9s en flashcards appara\xEEtront ici.":"Terminez une le\xE7on pour remplir votre carnet."}</p>`}
  </section>`}function U(){let i={};Object.values(m.errors).forEach(l=>{let n=String(l.ref).split(":")[0];i[n]=(i[n]||0)+(l.count||1)});let e=Object.entries(i).sort((l,n)=>n[1]-l[1]).slice(0,5),c=Math.max(1,...e.map(l=>l[1]));return`<section class="card">
    <h2 class="h3">\u{1F3AF} Points faibles</h2>
    ${e.length?`<ul class="wk-list">${e.map(([l,n])=>{let o=O(l),d=o?`${o.emoji} ${o.title}`:F(l+":0");return`<li><a href="${o?`#lecon-${o.id}`:"#erreurs"}"><span class="wk-l">${M(o?.levelId||"",d)}</span><span class="wk-bar"><i style="width:${n/c*100}%"></i></span><b>${n}</b></a></li>`}).join("")}</ul><a class="btn primary small" href="#revision">\u{1F501} R\xE9viser mes erreurs</a>`:`<p class="small muted">Aucune erreur en attente : bravo ! Vos erreurs de quiz s'afficheront ici, regroup\xE9es par le\xE7on.</p>`}
  </section>`}function os(i){let e=G(),c=m.profile?.dailyGoal||50,l=K(),n=Math.min(100,Math.round(l/c*100)),o=j.filter(s=>A(s.id)).length,d=Object.keys(m.vocab).length,t=Object.keys(m.errors).length,r=H(),h=m.history.filter(s=>s.kind!=="review"),v=h.length?Math.round(h.reduce((s,$)=>s+$.score/$.total,0)/h.length*100):0;i.innerHTML=`
  <header class="page-head">
    <p class="eyebrow">Tableau de bord</p>
    <h1>${g(m.profile?.avatar||"")} ${g(m.profile?.pseudo||"")}, voici votre progression</h1>
  </header>

  <div class="dash-grid">
    <section class="card dash-main">
      ${k(e.pct,168,14)}
      <div>
        <p class="eyebrow">Progression globale ${f(b[0])} \u2192 ${f(b[b.length-1])}</p>
        <h2>${e.done} / ${e.total} \xE9tapes</h2>
        <p class="muted">Niveau actuel : <b>${f(D())} \xB7 ${D().name}</b></p>
        ${r?`<a class="btn primary dash-resume" href="#${R(r)}">
          <span class="dr-txt">${r.kind==="lesson"?"Reprendre : "+M(r.lesson.levelId,r.lesson.title):r.kind==="checkpoint"?"Test de mi-palier "+f(r.level):"Passer l'examen "+f(r.level)}</span><span class="dr-arrow" aria-hidden="true">\u2192</span></a>`:""}
      </div>
    </section>

    <section class="card goal">
      ${k(n,96,9,`${l}`)}
      <div>
        <p class="eyebrow">Objectif du jour</p>
        <h3>${l} / ${c} XP</h3>
        <p class="small muted">${n>=100?`Objectif atteint, ${P.goalDone} ! \u{1F389}`:`Encore ${c-l} XP aujourd'hui.`}</p>
      </div>
    </section>

    <section class="stats">
      ${x("\u{1F525}",W(),"jour(s) de s\xE9rie")}
      ${x("\u26A1",m.xp,"XP au total")}
      ${x("\u2705",o,`le\xE7on(s) sur ${j.length}`)}
      ${x("\u{1F3AF}",v+"%","r\xE9ussite moyenne")}
      <a class="stat link" href="#carnet">${E("\u{1F4D2}",d,"mots dans le carnet")}</a>
      <a class="stat link ${t?"warn":""}" href="#erreurs">${E("\u{1F501}",t,"erreur(s) \xE0 revoir")}</a>
    </section>

    ${V()}
    ${q()}
    ${_()}
    ${U()}

    <section class="card levels-card">
      <h2 class="h3">Progression par palier</h2>
      <ul class="level-bars">
        ${b.map((s,$)=>{let u=z($),a=T($);return`<li class="${a?"":"locked"}" style="--lvl:${s.color}">
            <span class="lb-id">${f(s)}</span>
            <span class="lb-name">${s.name}${s.hsk&&!s.label?` \xB7 ${s.hsk}`:""}${C(s.id)?" \u{1F3C6}":""}</span>
            <span class="lb-bar"><i style="width:${u.pct}%"></i></span>
            <span class="lb-pct">${a?u.pct+"%":"\u{1F512}"}</span>
          </li>`}).join("")}
      </ul>
    </section>

    <section class="card history-card">
      <h2 class="h3">Activit\xE9 r\xE9cente</h2>
      ${m.history.length?`<ul class="history">${m.history.slice(0,8).map(s=>`
        <li>
          <span class="h-dot ${s.passed?"ok":"ko"}"></span>
          <span class="h-label">${g(s.label)}</span>
          <span class="h-score">${s.score}/${s.total}</span>
          <time>${new Date(s.date).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}</time>
        </li>`).join("")}</ul>`:`<p class="empty">Aucune activit\xE9 pour l'instant. <a href="#parcours">Commencez votre premi\xE8re le\xE7on</a> !</p>`}
    </section>
  </div>`}var E=(i,e,c)=>`<span class="stat-icon">${i}</span><b>${e}</b><small>${c}</small>`,x=(i,e,c)=>`<div class="stat">${E(i,e,c)}</div>`;export{os as renderDashboard};

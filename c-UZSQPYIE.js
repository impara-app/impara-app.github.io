import{a as w,b as S,c as k,d as M,e as F}from"./c-FHFLBEES.js";import{b as D}from"./c-7CJWDRQ4.js";import"./c-KMOFPVBJ.js";import{U as R,V as d,W as $,Z as E,_ as P,ba as j,u as p}from"./c-O7XFUMVD.js";import"./c-6AJRVT3S.js";import{e as v,s as y}from"./c-62IXJUWR.js";import"./c-EDIVJPJP.js";import{b as a}from"./c-36X2LLUK.js";import"./c-PBVGMHWF.js";import"./c-427Z5ASM.js";var A=["L","M","M","J","V","S","D"];function _(){let r=new Date,e=new Date(r);e.setDate(r.getDate()-(r.getDay()+6)%7);let u=p();return A.map((i,l)=>{let t=new Date(e);t.setDate(e.getDate()+l);let o=p(t),n=(a.dayLog?.[o]||0)>0,m=(a.frozenDays||[]).includes(o);return`<div style="--k:${l}" class="ss-day ${n?"on":""} ${m&&!n?"frozen":""} ${o===u?"today":""} ${o>u?"future":""}"><small>${i}</small><span>${n?"\u2713":m?"\u{1F9CA}":""}</span></div>`}).join("")}function L(r){let e=j(),u=p(),i=(a.dayLog?.[u]||0)>0,l=a.profile?.dailyGoal||50,t=R(),o=Math.min(100,Math.round(t/l*100)),n=new Date;n.setHours(24,0,0,0);let m=Math.max(0,Math.floor((n-Date.now())/36e5)),x=Math.max(0,Math.floor((n-Date.now())%36e5/6e4)),h=a.streakFreezes||0,b=$-e%$,c=P(e),g=[...E].reverse().find(([s])=>s<=e)?.[0]||0,z=a.settings.remindHour||20;return r.innerHTML=`
  <a class="back-link" href="#parcours">\u2190 Parcours</a>
  <section class="card sr-hero ${i?"lit":""}">
    <div class="sr-flame" aria-hidden="true">\u{1F525}</div>
    <div class="sr-main">
      <p class="sr-num"><b>${e}</b> jour${e>1?"s":""} de s\xE9rie</p>
      <p class="sr-status">${i?"\u2705 S\xE9rie prolong\xE9e aujourd'hui, bravo !":e?`\u23F3 Faites un exercice aujourd'hui pour la garder : encore ${m} h ${String(x).padStart(2,"0")}.`:"Faites un exercice pour allumer votre s\xE9rie."}</p>
    </div>
    <span class="sr-mascot">${D(i?"cheer":"idle",{size:72})}</span>
    <div class="ss-week sr-week">${_()}</div>
    ${i?"":'<a class="btn primary" href="#seance">\u25B6 S\xE9ance du jour (\u2248 10 min)</a>'}
  </section>

  <div class="sr-grid">
    <section class="card sr-goal">
      ${y(o,92,9,`${t}`)}
      <div><p class="eyebrow">Objectif du jour</p><h3>${t} / ${l} XP</h3>
        <p class="small muted">${o>=100?"Objectif atteint \u{1F389}":`Encore ${l-t} XP aujourd'hui.`}</p>
        <a class="link-btn small" href="#reglages-preferences">Changer l'objectif</a></div>
    </section>

    <section class="card sr-freeze">
      <h2 class="h3">\u{1F9CA} Gels de s\xE9rie</h2>
      <div class="sr-ice">${Array.from({length:d},(s,f)=>`<span class="${f<h?"on":""}">\u{1F9CA}</span>`).join("")}<b>${h} / ${d}</b></div>
      <p class="small muted">Si vous oubliez un jour, un gel prot\xE8ge automatiquement votre s\xE9rie. Vous en gagnez un tous les ${$} jours de s\xE9rie (${d} au maximum).</p>
      ${h<d?`<p class="small">Prochain gel dans <b>${b} jour${b>1?"s":""}</b>.</p>`:'<p class="small">R\xE9serve pleine \u{1F44D}</p>'}
    </section>

    <section class="card dash-wide sr-rewards">
      <h2 class="h3">\u{1F381} R\xE9compenses de s\xE9rie</h2>
      ${c?`<p class="small">Prochaine r\xE9compense dans <b>${c[0]-e} jour${c[0]-e>1?"s":""}</b> : ${v(c[1])}.</p>
        <div class="sv-bar"><i style="width:${Math.round((e-g)/(c[0]-g)*100)}%"></i></div>`:'<p class="small">Toutes les r\xE9compenses sont d\xE9bloqu\xE9es \u{1F3C6}</p>'}
      <ol class="sr-steps">${E.map(([s,f])=>`<li class="${e>=s?"ok":""}"><b>${s} j</b><span>${v(f)}</span><em>${e>=s?"\u2713 D\xE9bloqu\xE9":`${s-e} j`}</em></li>`).join("")}</ol>
      <a class="link-btn small" href="#personnaliser">Voir mes cadres, avatars et banni\xE8res \u2192</a>
    </section>

    <section class="card sr-remind">
      <h2 class="h3">\u23F0 Rappel de s\xE9rie</h2>
      <p class="small">${a.settings.streakReminder===!1?"Le rappel est d\xE9sactiv\xE9.":`Si votre s\xE9rie est en danger, une notification vous pr\xE9vient vers <b>${z} h</b>.`}</p>
      <a class="link-btn small" href="#reglages-notifications">R\xE9gler les notifications \u2192</a>
    </section>
    ${w()}

    ${M()}
    ${F()}
    ${S()}
  </div>`,k(r,()=>{let s=scrollY;L(r),scrollTo(0,s)}),!0}export{L as renderSerie};

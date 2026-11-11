import{d as n,e as d,y as r}from"./c-HPXZTFFF.js";var o=a=>a==null?"\u2013":Number(a).toLocaleString("fr-FR"),t=(a,l)=>[...l].sort((s,i)=>(a[i].pct||0)-(a[s].pct||0)||(a[i].xp||0)-(a[s].xp||0))[0];function b(a,l,s,i){if(!l.length)return`<p class="muted small">${i}</p>`;let e=l.includes(s)?s:t(a,l),p=a[e];return`<div class="fp-recap">
    <div class="fp-lang-row">
      <p class="fp-lang"><span class="flag mini">${n(e)}</span>${r(d[e].label)} \xB7 <b>${r(p.level||"")}</b> <small>${r(p.levelName||"")}</small></p>
      ${l.length>1?`<div class="fp-lang-pick" role="group" aria-label="Choisir la langue du r\xE9cap">${l.map(c=>`<button type="button" class="${c===e?"on":""}" data-recap-lang="${c}" aria-pressed="${c===e}" aria-label="Voir le r\xE9cap en ${r(d[c].label.toLowerCase())}"><span class="flag mini">${n(c)}</span></button>`).join("")}</div>`:""}
    </div>
    <div class="pf-grid">
      <div class="pf-card"><span>\u{1F525}</span><b>${p.streak||0} j</b><small>S\xE9rie</small></div>
      <div class="pf-card"><span>\u26A1</span><b>${o(p.xp)}</b><small>XP au total</small></div>
      <div class="pf-card"><span>\u{1F4C8}</span><b>${p.pct??0} %</b><small>du parcours</small></div>
      <div class="pf-card"><span>\u{1F4D2}</span><b>${o(p.words)}</b><small>Mots appris</small></div>
      <div class="pf-card"><span>\u2705</span><b>${p.lessons??"\u2013"}</b><small>Le\xE7ons</small></div>
      <div class="pf-card"><span>\u{1F3C5}</span><b>${r(p.level||"\u2013")}</b><small>Niveau</small></div>
    </div></div>`}function f(a,l){a.querySelectorAll("[data-recap-lang]").forEach(s=>s.onclick=()=>l(s.dataset.recapLang))}export{b as a,f as b};

import{c as P}from"./c-N7LRVGD6.js";import{B as j,H as y,a as x,b as d}from"./c-2ZATKK2E.js";import{g as c,h as $}from"./c-FNCOXAB6.js";import{b,d as f,e as L,h as S}from"./c-KTQDGSTN.js";import{G as u,M as h,f as p,i as v,x as r}from"./c-ZUK6C2ZE.js";function Q(a,i){let s=L(i);if(!s||!j(s))return!1;let e=f(s.levelId),l=b[s.module],o=v.lessons[i],m=e.lessons;return a.innerHTML=`
  <article class="lesson" style="--lvl:${e.color}">
    <a class="back" href="#parcours">\u2190 Parcours</a>
    <header class="lesson-head">
      <div class="lesson-emoji">${s.emoji}</div>
      <div>
        <p class="eyebrow">${S(e)}${e.hsk&&!e.label?` (${e.hsk})`:""} \xB7 ${l.icon} ${l.label} \xB7 Le\xE7on ${s.index+1}/${m.length}</p>
        <h1>${c(e.id,s.title)}</h1>
        <p class="lead">${$(e.id,s.intro)}</p>
        ${o?`<p class="small muted">Meilleur score : ${o.best}/${o.total} ${"\u2605".repeat(y(o))}</p>`:""}
      </div>
    </header>

    <nav class="lesson-steps" aria-label="Sections">
      ${s.sections.map((n,t)=>`<a href="#s${t}" data-scroll="s${t}">${t+1}. ${c(e.id,n.title)}</a>`).join("")}
    </nav>

    ${s.sections.map((n,t)=>N(n,t,e.id)).join("")}

    <aside class="mnemo">
      <span class="mnemo-icon">\u{1F9E0}</span>
      <div><p class="eyebrow">Astuce mn\xE9motechnique</p><p>${$(e.id,s.mnemo)}</p></div>
    </aside>

    <section class="card">
      <h2 class="h3">\u{1F4D2} Mots de la le\xE7on</h2>
      <p class="small muted">Ils rejoindront votre carnet de vocabulaire d\xE8s que vous r\xE9ussirez le quiz.${p.code==="zh"?" Touchez un mot pour voir les cl\xE9s de ses caract\xE8res.":""}</p>
      <ul class="vocab-grid">
        ${s.vocab.map(h).map(([n,t,z])=>`<li class="${t?"has-py":""}">${u(n)}<span class="it ${p.wordClass}">${p.code==="zh"?`<span class="wd" data-wd="${r(n)}" role="button" tabindex="0">${r(n)}</span>`:r(n)}</span>${t?`<span class="py">${r(t)}</span>`:""}<span class="fr">${r(z)}</span></li>`).join("")}
      </ul>
    </section>

    <div class="lesson-cta">
      <p>${d} questions \xB7 80 % pour valider (${Math.ceil(x*d)}/${d})</p>
      <a class="btn primary big" href="#quiz-${s.id}">Je suis pr\xEAt\xB7e : quiz \u2192</a>
    </div>
  </article>`,!0}function N(a,i,s){return`
  <section class="card lesson-section" id="s${i}">
    <h2 class="h3"><span class="num">${i+1}</span><span>${c(s,a.title)}</span></h2>
    ${a.text?`<p>${$(s,a.text)}</p>`:""}
    ${a.table?_(a.table,s):""}
    ${a.examples?`<ul class="examples">${a.examples.map(h).map(([e,l,o])=>`<li>${u(e)}<div><span class="it ${p.wordClass}">${P(e)}</span>${l?`<span class="py">${r(l)}</span>`:""}<span class="fr">${r(o)}</span></div></li>`).join("")}</ul>`:""}
  </section>`}function _({cols:a,rows:i},s){let e=a.some(l=>l);return`<div class="table-wrap"><table>
    ${e?`<thead><tr>${a.map(l=>`<th>${c(s,l)}</th>`).join("")}</tr></thead>`:""}
    <tbody>${i.map(l=>`<tr>${l.map((o,m)=>`<td class="${m===0&&e?"first":""}">${c(s,o)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`}export{Q as a,N as b,_ as c};

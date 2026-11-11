import{b as D,g as N}from"./c-QWP52JQZ.js";import"./c-7CJWDRQ4.js";import"./c-E6MVXD5Z.js";import"./c-ZAQA7L4O.js";import"./c-2SGKD7PA.js";import"./c-KPGOLG5O.js";import{b as O}from"./c-N6NZ7XWY.js";import{E as H,M as w}from"./c-O7XFUMVD.js";import"./c-6AJRVT3S.js";import{e as y,f as h,r as C,s as E,u as z,v as T}from"./c-62IXJUWR.js";import{a as k,d as P,h as $}from"./c-EDIVJPJP.js";import{b as v,d as j}from"./c-36X2LLUK.js";import{g as L}from"./c-PBVGMHWF.js";import"./c-427Z5ASM.js";var M=()=>L.label==="Mandarin",S=()=>M()?"HSK":"CELI",q=60,p=[{key:"oral",name:"Compr\xE9hension orale",emoji:"\u{1F3A7}",min:8},{key:"lecture",name:"Compr\xE9hension \xE9crite",emoji:"\u{1F4D6}",min:8},{key:"ecrit",name:"Production \xE9crite",emoji:"\u270D\uFE0F",min:10}],d=10,U=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"");function X(s){let n=[],r=[];s.lessons.forEach(o=>{(o.sections||[]).flatMap(i=>i.examples||[]).flatMap(T).forEach(([i,a,l])=>{i&&l&&i.length<=(M()?26:90)&&n.push({t:i,py:a,fr:String(l).split(" \u2014 ")[0],ref:`${o.id}:ep`})}),(o.vocab||[]).map(z).forEach(([i,a,l])=>{i&&l&&r.push({t:i,py:a,fr:l,ref:`${o.id}:ep`})})});let e=o=>[...new Map(o.map(i=>[i.t,i])).values()];return{ex:h(e(n)),words:h(e(r))}}var R=(s,n)=>O(n,s,3),Q=(s,n)=>{let r=h([s,...n]);return{options:r,answer:r.indexOf(s)}};function g(s,n){let r=[...s.exam.map((e,o)=>({ref:`exam-${s.id}:${o}`,q:e})),...s.lessons.flatMap(e=>e.quiz.map((o,i)=>({ref:`${e.id}:${i}`,q:o})))];return h(r.filter(e=>n.includes(e.q.type)))}function B(s){let{ex:n,words:r}=X(s),e=new Set,o=(t,c)=>{let u=[];for(let b of t){if(u.length>=c)break;e.has(b.t)||(e.add(b.t),u.push(b))}return u},i=[...o(n,7).map(t=>({ref:t.ref,q:{type:"listen",say:t.t,q:"Que signifie la phrase entendue ?",...Q(t.fr,R(n,t)),reveal:t.py?`${t.t} (${t.py})`:t.t}})),...o(r,3).map(t=>({ref:t.ref,q:{type:"listen",write:!0,say:t.t,q:M()?"\xC9crivez le mot entendu (caract\xE8res ou pinyin)":"\xC9crivez le mot entendu",answer:M()?[t.t,t.py,U(t.py)].filter(Boolean):[t.t],reveal:`${t.t}${t.py?` ${t.py}`:""} \u2014 ${t.fr}`}}))],a=[...o(n,5).map(t=>({ref:t.ref,q:{type:"mcq",q:t.t,...Q(t.fr,R(n,t)),explain:t.py?`${t.py} \u2014 ${t.fr}`:""}})),...g(s,["mcq"]).slice(0,d-5)],l=g(s,["translate"]),m=g(s,["fill"]),f=[...l.slice(0,5),...m.slice(0,d-Math.min(5,l.length))];if(f.length<d){let t=new Set(a.map(c=>c.ref));f.push(...g(s,["mcq"]).filter(c=>!t.has(c.ref)).slice(0,d-f.length))}return[i,a,f].map(t=>h(t).slice(0,d))}function x(s){let n=k.map((r,e)=>({l:r,i:e})).filter(({i:r})=>w(r));return s.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Conditions r\xE9elles</p>
    <h1>\u23F1\uFE0F \xC9preuve type ${S()}</h1>
    <p class="lead">Trois sections chronom\xE9tr\xE9es, comme le jour d'une certification. Choisissez le niveau :</p>
    <div class="ep-levels">${n.map(({l:r})=>{let e=v.epreuve?.[r.id];return`<a class="ep-level" href="#epreuve-${r.id}"><b>${y($(r))}</b><small>${e?`Meilleure note ${e.best}/100`:"Pas encore tent\xE9e"}</small></a>`}).join("")}</div>
  </section>`,!0}function ee(s,n){let r=P(n),e=k.indexOf(r);if(!r||!w(e))return!1;let o=v.epreuve?.[n],i=p.reduce((a,l)=>a+l.min,0);return s.innerHTML=`
  <a class="back-link" href="#epreuve">\u2190 \xC9preuves</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Conditions r\xE9elles \xB7 inspir\xE9e du ${S()}</p>
    <h1>\u23F1\uFE0F \xC9preuve ${y($(r))}</h1>
    <p class="lead">${p.length*d} questions en ${i} minutes, sans correction pendant l'\xE9preuve.</p>
    <ol class="ep-plan">${p.map(a=>`<li><span>${a.emoji}</span><b>${a.name}</b><small>${d} questions \xB7 ${a.min} min</small></li>`).join("")}</ol>
    <ul class="defi-rules">
      <li>\u{1F507} Aucune correction avant la fin : comme \xE0 l'examen</li>
      <li>\u23F1\uFE0F Chaque section a son chrono ; \xE0 z\xE9ro, les questions restantes comptent comme fausses</li>
      <li>\u{1F3AF} Note sur 100 ; ${q}/100 pour r\xE9ussir</li>
      <li>\u{1F3A7} Mettez des \xE9couteurs : la premi\xE8re section est \xE0 l'oral</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs</li>
    </ul>
    ${o?`<p class="muted small">Meilleure note : <b>${o.best}/100</b> \xB7 derni\xE8re : ${o.last}/100</p>`:""}
    <button class="btn primary big" data-go>Commencer l'\xE9preuve</button>
  </section>`,s.querySelector("[data-go]").onclick=()=>{let a=B(r);A(s,r,a,0,[])},!0}function A(s,n,r,e,o){let i=p[e];document.body.classList.add("focus-mode"),N(s,{title:`${i.emoji} ${i.name} \xB7 ${$(n)}`,questions:r[e],silent:!0,deadline:Date.now()+i.min*6e4,countText:(a,l)=>`${e+1}/${p.length} \xB7 ${a+1}/${l}`,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=`epreuve-${n.id}`},onFinish:a=>{let l=[...o,a];if(e+1<p.length)return G(s,n,r,e+1,l);document.body.classList.remove("focus-mode"),I(s,n,l)}})}function G(s,n,r,e,o){let i=p[e],l=o[o.length-1].some(m=>m.timeout);s.innerHTML=`
  <section class="card blanc-intro ep-pause">
    <p class="eyebrow">Section ${e}/${p.length} termin\xE9e${l?" \xB7 temps \xE9coul\xE9":""}</p>
    <h1>${i.emoji} Section suivante : ${i.name}</h1>
    <p class="lead">${d} questions \xB7 ${i.min} minutes</p>
    <p class="muted small">Les r\xE9sultats seront affich\xE9s \xE0 la fin de l'\xE9preuve. Respirez un coup !</p>
    <button class="btn primary big" data-go>Commencer la section</button>
  </section>`,s.querySelector("[data-go]").onclick=()=>A(s,n,r,e,o)}function I(s,n,r){let e=r.map(c=>Math.round(c.filter(u=>u.correct).length/Math.max(1,c.length)*100)),o=Math.round(e.reduce((c,u)=>c+u,0)/e.length),i=o>=q,a=r.flat(),l=a.filter(c=>c.correct).length,m=v.epreuve?.[n.id];j(c=>{let u=m?.bestSec||[0,0,0];c.epreuve={...c.epreuve||{},[n.id]:{best:Math.max(m?.best||0,o),last:o,date:Date.now(),sec:e,bestSec:u.map((b,F)=>Math.max(b,e[F]||0))}}});let f=H({label:`\xC9preuve ${S()} ${$(n)}`,score:l,total:a.length,xpPer:3,key:`epreuve-${n.id}`}),t=p[e.indexOf(Math.min(...e))];s.innerHTML=`
  <section class="results ${i?"ok":"ko"}">
    <p class="eyebrow">\xC9preuve type ${S()} \xB7 ${y($(n))}</p>
    ${E(o,150,12)}
    <h1>${o===100?"Note parfaite ! \u{1F3C6}":i?"\xC9preuve r\xE9ussie \u{1F389}":"Pas encore, mais vous y \xEAtes presque"}</h1>
    <p class="lead"><b>${o}/100</b>${m&&o>m.best?" \xB7 nouveau record !":""}</p>
    <div class="ep-scores">${p.map((c,u)=>`<div class="ep-score ${e[u]>=q?"ok":"ko"}"><span>${c.emoji}</span><b>${e[u]}</b><small>${c.name}</small></div>`).join("")}</div>
    ${!i||e.some(c=>c<q)?`<p class="muted">Point \xE0 travailler : <b>${t.name.toLowerCase()}</b>.</p>`:""}
    <div class="result-chips">${f.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${f.xpGained} XP</span>`}</div>
    ${D(a,{open:!1})}
    <div class="result-actions">
      <a class="btn primary big" href="#epreuve-${n.id}" data-reload>Refaire une \xE9preuve</a>
      <a class="btn ghost" href="#entrainement">Retour \xE0 l'entra\xEEnement</a>
    </div>
  </section>`,i&&C()}export{q as PASS,B as buildSections,ee as renderEpreuve,x as renderEpreuveHub};

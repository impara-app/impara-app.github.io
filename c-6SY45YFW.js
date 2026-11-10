import{b as N,d as O}from"./c-HLN6AJMN.js";import"./c-E6MVXD5Z.js";import"./c-ZAQA7L4O.js";import"./c-WEFCO2SZ.js";import"./c-KFYK736G.js";import"./c-BLS4NBAE.js";import{B as L,t as H}from"./c-POB3GHDO.js";import"./c-JIOPGAS6.js";import{a as w,d as P,h}from"./c-PJBGR76R.js";import{K as C,L as E,N as z,O as T,g as S,j as b,l as j,y as v,z as $}from"./c-73F2H2ED.js";import"./c-427Z5ASM.js";var q=()=>S.label==="Mandarin",M=()=>q()?"HSK":"CELI",g=60,p=[{key:"oral",name:"Compr\xE9hension orale",emoji:"\u{1F3A7}",min:8},{key:"lecture",name:"Compr\xE9hension \xE9crite",emoji:"\u{1F4D6}",min:8},{key:"ecrit",name:"Production \xE9crite",emoji:"\u270D\uFE0F",min:10}],m=10,A=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"");function F(s){let r=[],t=[];s.lessons.forEach(o=>{(o.sections||[]).flatMap(i=>i.examples||[]).flatMap(T).forEach(([i,a,l])=>{i&&l&&i.length<=(q()?26:90)&&r.push({t:i,py:a,fr:String(l).split(" \u2014 ")[0],ref:`${o.id}:ep`})}),(o.vocab||[]).map(z).forEach(([i,a,l])=>{i&&l&&t.push({t:i,py:a,fr:l,ref:`${o.id}:ep`})})});let e=o=>[...new Map(o.map(i=>[i.t,i])).values()];return{ex:$(e(r)),words:$(e(t))}}function R(s,r){let t=[];for(let e of $(s)){if(t.length>=3)break;e.fr!==r&&!t.includes(e.fr)&&t.push(e.fr)}return t}var D=(s,r)=>{let t=$([s,...r]);return{options:t,answer:t.indexOf(s)}};function y(s,r){let t=[...s.exam.map((e,o)=>({ref:`exam-${s.id}:${o}`,q:e})),...s.lessons.flatMap(e=>e.quiz.map((o,i)=>({ref:`${e.id}:${i}`,q:o})))];return $(t.filter(e=>r.includes(e.q.type)))}function U(s){let{ex:r,words:t}=F(s),e=new Set,o=(n,c)=>{let u=[];for(let k of n){if(u.length>=c)break;e.has(k.t)||(e.add(k.t),u.push(k))}return u},i=[...o(r,7).map(n=>({ref:n.ref,q:{type:"listen",say:n.t,q:"Que signifie la phrase entendue ?",...D(n.fr,R(r,n.fr)),reveal:n.py?`${n.t} (${n.py})`:n.t}})),...o(t,3).map(n=>({ref:n.ref,q:{type:"listen",write:!0,say:n.t,q:q()?"\xC9crivez le mot entendu (caract\xE8res ou pinyin)":"\xC9crivez le mot entendu",answer:q()?[n.t,n.py,A(n.py)].filter(Boolean):[n.t],reveal:`${n.t}${n.py?` ${n.py}`:""} \u2014 ${n.fr}`}}))],a=[...o(r,5).map(n=>({ref:n.ref,q:{type:"mcq",q:n.t,...D(n.fr,R(r,n.fr)),explain:n.py?`${n.py} \u2014 ${n.fr}`:""}})),...y(s,["mcq"]).slice(0,m-5)],l=y(s,["translate"]),d=y(s,["fill"]),f=[...l.slice(0,5),...d.slice(0,m-Math.min(5,l.length))];if(f.length<m){let n=new Set(a.map(c=>c.ref));f.push(...y(s,["mcq"]).filter(c=>!n.has(c.ref)).slice(0,m-f.length))}return[i,a,f].map(n=>$(n).slice(0,m))}function W(s){let r=w.map((t,e)=>({l:t,i:e})).filter(({i:t})=>L(t));return s.innerHTML=`
  <a class="back-link" href="#entrainement">\u2190 Entra\xEEnement</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Conditions r\xE9elles</p>
    <h1>\u23F1\uFE0F \xC9preuve type ${M()}</h1>
    <p class="lead">Trois sections chronom\xE9tr\xE9es, comme le jour d'une certification. Choisissez le niveau :</p>
    <div class="ep-levels">${r.map(({l:t})=>{let e=b.epreuve?.[t.id];return`<a class="ep-level" href="#epreuve-${t.id}"><b>${v(h(t))}</b><small>${e?`Meilleure note ${e.best}/100`:"Pas encore tent\xE9e"}</small></a>`}).join("")}</div>
  </section>`,!0}function Y(s,r){let t=P(r),e=w.indexOf(t);if(!t||!L(e))return!1;let o=b.epreuve?.[r],i=p.reduce((a,l)=>a+l.min,0);return s.innerHTML=`
  <a class="back-link" href="#epreuve">\u2190 \xC9preuves</a>
  <section class="card blanc-intro">
    <p class="eyebrow">Conditions r\xE9elles \xB7 inspir\xE9e du ${M()}</p>
    <h1>\u23F1\uFE0F \xC9preuve ${v(h(t))}</h1>
    <p class="lead">${p.length*m} questions en ${i} minutes, sans correction pendant l'\xE9preuve.</p>
    <ol class="ep-plan">${p.map(a=>`<li><span>${a.emoji}</span><b>${a.name}</b><small>${m} questions \xB7 ${a.min} min</small></li>`).join("")}</ol>
    <ul class="defi-rules">
      <li>\u{1F507} Aucune correction avant la fin : comme \xE0 l'examen</li>
      <li>\u23F1\uFE0F Chaque section a son chrono ; \xE0 z\xE9ro, les questions restantes comptent comme fausses</li>
      <li>\u{1F3AF} Note sur 100 ; ${g}/100 pour r\xE9ussir</li>
      <li>\u{1F3A7} Mettez des \xE9couteurs : la premi\xE8re section est \xE0 l'oral</li>
      <li>\u{1F9EA} Rien n'est valid\xE9 ni ajout\xE9 au cahier d'erreurs</li>
    </ul>
    ${o?`<p class="muted small">Meilleure note : <b>${o.best}/100</b> \xB7 derni\xE8re : ${o.last}/100</p>`:""}
    <button class="btn primary big" data-go>Commencer l'\xE9preuve</button>
  </section>`,s.querySelector("[data-go]").onclick=()=>{let a=U(t);Q(s,t,a,0,[])},!0}function Q(s,r,t,e,o){let i=p[e];document.body.classList.add("focus-mode"),O(s,{title:`${i.emoji} ${i.name} \xB7 ${h(r)}`,questions:t[e],silent:!0,deadline:Date.now()+i.min*6e4,countText:(a,l)=>`${e+1}/${p.length} \xB7 ${a+1}/${l}`,onQuit:()=>{document.body.classList.remove("focus-mode"),location.hash=`epreuve-${r.id}`},onFinish:a=>{let l=[...o,a];if(e+1<p.length)return X(s,r,t,e+1,l);document.body.classList.remove("focus-mode"),B(s,r,l)}})}function X(s,r,t,e,o){let i=p[e],l=o[o.length-1].some(d=>d.timeout);s.innerHTML=`
  <section class="card blanc-intro ep-pause">
    <p class="eyebrow">Section ${e}/${p.length} termin\xE9e${l?" \xB7 temps \xE9coul\xE9":""}</p>
    <h1>${i.emoji} Section suivante : ${i.name}</h1>
    <p class="lead">${m} questions \xB7 ${i.min} minutes</p>
    <p class="muted small">Les r\xE9sultats seront affich\xE9s \xE0 la fin de l'\xE9preuve. Respirez un coup !</p>
    <button class="btn primary big" data-go>Commencer la section</button>
  </section>`,s.querySelector("[data-go]").onclick=()=>Q(s,r,t,e,o)}function B(s,r,t){let e=t.map(c=>Math.round(c.filter(u=>u.correct).length/Math.max(1,c.length)*100)),o=Math.round(e.reduce((c,u)=>c+u,0)/e.length),i=o>=g,a=t.flat(),l=a.filter(c=>c.correct).length,d=b.epreuve?.[r.id];j(c=>{c.epreuve={...c.epreuve||{},[r.id]:{best:Math.max(d?.best||0,o),last:o,date:Date.now()}}});let f=H({label:`\xC9preuve ${M()} ${h(r)}`,score:l,total:a.length,xpPer:3,key:`epreuve-${r.id}`}),n=p[e.indexOf(Math.min(...e))];s.innerHTML=`
  <section class="results ${i?"ok":"ko"}">
    <p class="eyebrow">\xC9preuve type ${M()} \xB7 ${v(h(r))}</p>
    ${E(o,150,12)}
    <h1>${o===100?"Note parfaite ! \u{1F3C6}":i?"\xC9preuve r\xE9ussie \u{1F389}":"Pas encore, mais vous y \xEAtes presque"}</h1>
    <p class="lead"><b>${o}/100</b>${d&&o>d.best?" \xB7 nouveau record !":""}</p>
    <div class="ep-scores">${p.map((c,u)=>`<div class="ep-score ${e[u]>=g?"ok":"ko"}"><span>${c.emoji}</span><b>${e[u]}</b><small>${c.name}</small></div>`).join("")}</div>
    ${!i||e.some(c=>c<g)?`<p class="muted">Point \xE0 travailler : <b>${n.name.toLowerCase()}</b>.</p>`:""}
    <div class="result-chips">${f.capped?`<span class="chip muted-chip">\u23F3 XP d\xE9j\xE0 gagn\xE9s aujourd'hui</span>`:`<span class="chip">\u26A1 +${f.xpGained} XP</span>`}</div>
    ${N(a,{open:!1})}
    <div class="result-actions">
      <a class="btn primary big" href="#epreuve-${r.id}" data-reload>Refaire une \xE9preuve</a>
      <a class="btn ghost" href="#entrainement">Retour \xE0 l'entra\xEEnement</a>
    </div>
  </section>`,i&&C()}export{g as PASS,U as buildSections,Y as renderEpreuve,W as renderEpreuveHub};

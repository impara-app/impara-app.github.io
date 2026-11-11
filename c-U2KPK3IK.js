import{a as B}from"./c-RYWBY65U.js";import{D as q,E as z,G as te,I as ae,J as ne,M as G,N as oe,O as M,P as le,R as re,V as X,a as w,b as k,c as F,g as R,s as se}from"./c-BBR4LS26.js";import{g as K}from"./c-BIAU6VNF.js";import{a as x,c as I,e as Q,g as ee,h as y}from"./c-3M6EEBJX.js";import{I as L,L as W,M as _,g as j,j as h,l as O,y as b}from"./c-HPXZTFFF.js";import"./c-427Z5ASM.js";var de=["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],U=["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],P=s=>`${s.getDate()} ${de[s.getMonth()]}`,D=(s,e)=>{let t=new Date(s);return t.setDate(t.getDate()+e),t},S=(s,e)=>`${s} ${e}${s>1?"s":""}`,pe=(s,e)=>e?Math.round(s/e*100):0,T=s=>s>=60?`${Math.floor(s/60)} h ${String(s%60).padStart(2,"0")}`:`${s} min`;function ue(s=0){let e=new Date(F()+"T12:00:00");return e.setDate(e.getDate()-7*s),Array.from({length:7},(t,n)=>D(e,n))}function A(s=0,e=7){let t=ue(s).slice(0,e),n=t.map(k),r=n[0],a=i=>{if(!i)return!1;let p=k(new Date(i));return p>=n[0]&&p<=n[n.length-1]},c=n.reduce((i,p)=>i+(h.dayLog?.[p]||0),0),l=n.reduce((i,p)=>i+R(p),0),d=Object.values(h.lessons||{}).filter(i=>i.passed&&a(i.date)).length,m=Object.values(h.vocab||{}).filter(i=>i.added>1e12&&a(i.added)).length,$=h.stats?.w?.[r]||{},o=Object.values($).reduce((i,p)=>i+p[0],0),u=Object.values($).reduce((i,p)=>i+p[1],0),v=n.filter(i=>(h.dayLog?.[i]||0)>0).length;return{xp:c,min:l,lessons:d,words:m,acc:u?pe(o,u):null,answers:u,reviews:h.stats?.rev?.[r]||0,days:v,keys:n}}function Le(s=6){let e=Object.keys(h.stats?.w||{}).sort().slice(-s),t={};return w.forEach(([n])=>t[n]=[0,0]),e.forEach(n=>Object.entries(h.stats.w[n]).forEach(([r,a])=>{t[r]&&(t[r][0]+=a[0],t[r][1]+=a[1])})),t}function E(s,e,t="%"){if(s==null||e==null)return"";if(t==="pts"){let r=s-e;return r?`<em class="${r>0?"up":"down"}">${r>0?"+":""}${r} pts</em>`:"<em>=</em>"}if(!e)return s?'<em class="up">nouveau</em>':"";let n=Math.round((s-e)/e*100);return n?`<em class="${n>0?"up":"down"}">${n>0?"+":""}${n} %</em>`:"<em>=</em>"}function me(){let s=(new Date().getDay()+6)%7+1,e=A(0),t=A(1,s),n=[["\u26A1",e.xp,"XP",E(e.xp,t.xp)],["\u23F1\uFE0F",T(e.min),"d'\xE9tude",E(e.min,t.min)],["\u2705",e.lessons,S(e.lessons,"le\xE7on").replace(/^\d+ /,""),E(e.lessons,t.lessons)],["\u{1F4D2}",e.words,e.words>1?"nouveaux mots":"nouveau mot",E(e.words,t.words)],["\u{1F3AF}",e.acc==null?"\u2013":`${e.acc} %`,"de bonnes r\xE9ponses",E(e.acc,t.acc,"pts")],["\u{1F4C5}",`${e.days}/${s}`,e.days>1?"jours actifs":"jour actif",E(e.days,t.days)]],r=ue(0)[0];return`<section class="card dash-wide sv-week">
    <div class="dw-head"><h2 class="h3">\u{1F5D3}\uFE0F Bilan de la semaine</h2><span class="muted small">depuis lundi ${P(r)} \xB7 compar\xE9 aux m\xEAmes jours de la semaine derni\xE8re</span></div>
    <div class="sv-tiles">${n.map(([a,c,l,d])=>`<div class="sv-tile"><span>${a}</span><b>${c}</b><small>${l}</small>${d}</div>`).join("")}</div>
    <button type="button" class="btn ghost small" data-share-week>\u{1F4E4} Partager mon bilan en image</button>
  </section>`}async function Ce(){let s=A(0),e=A(1),t=document.createElement("canvas"),n=1080,r=1350;t.width=n,t.height=r;let a=t.getContext("2d"),c=j.code==="zh",l=a.createLinearGradient(0,0,n,r);l.addColorStop(0,c?"#c23b32":"#1e8e5a"),l.addColorStop(1,c?"#7a1f1a":"#0f5235"),a.fillStyle=l,a.fillRect(0,0,n,r),a.fillStyle="#fff",a.textAlign="center",a.font="800 64px system-ui, sans-serif",a.fillText(`Ma semaine sur ${j.brand}`,n/2,150),a.font="500 38px system-ui, sans-serif",a.globalAlpha=.85,a.fillText(`${j.label} \xB7 ${y(M())} \xB7 ${h.profile?.pseudo||""}`,n/2,215),a.globalAlpha=1,[["\u26A1",`${s.xp}`,"XP",e.xp],["\u23F1\uFE0F",T(s.min),"d'\xE9tude",e.min],["\u2705",`${s.lessons}`,"le\xE7ons",e.lessons],["\u{1F4D2}",`${s.words}`,"nouveaux mots",e.words],["\u{1F3AF}",s.acc==null?"\u2013":`${s.acc} %`,"de r\xE9ussite",null],["\u{1F525}",`${X()}`,"jours de s\xE9rie",null]].forEach(([u,v,i],p)=>{let f=90+p%2*470,g=300+Math.floor(p/2)*300;a.fillStyle="rgba(255,255,255,.14)",a.beginPath(),a.roundRect?.(f,g,430,250,36)??a.rect(f,g,430,250),a.fill(),a.fillStyle="#fff",a.textAlign="left",a.font="64px system-ui, sans-serif",a.fillText(u,f+36,g+95),a.font="800 84px system-ui, sans-serif",a.fillText(v,f+36,g+190),a.font="500 36px system-ui, sans-serif",a.globalAlpha=.85,a.fillText(i,f+36,g+232),a.globalAlpha=1}),a.textAlign="center",a.font="600 34px system-ui, sans-serif",a.globalAlpha=.8,a.fillText("impara-app.github.io",n/2,r-70);let m=await new Promise(u=>t.toBlob(u,"image/png")),$=new File([m],"ma-semaine.png",{type:"image/png"});if(navigator.canShare?.({files:[$]}))try{await navigator.share({files:[$],title:"Ma semaine"});return}catch(u){if(u?.name==="AbortError")return}let o=document.createElement("a");o.href=URL.createObjectURL(m),o.download="ma-semaine.png",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),4e3),L("Image enregistr\xE9e : vous pouvez l'envoyer \xE0 vos amis \u{1F4E4}","ok")}var ie={lessons:["\u2705","le\xE7ons",[3,5,8]],xp:["\u26A1","XP",[300,600,1e3]],reviews:["\u{1F0CF}","cartes r\xE9vis\xE9es",[50,100,200]],min:["\u23F1\uFE0F","minutes d'\xE9tude",[60,120,180]]},Oe=s=>{let e=A(0);return s==="lessons"?e.lessons:s==="xp"?e.xp:s==="reviews"?e.reviews:e.min};function $e(){let s=h.weekGoal,e=F();if(!s||s.week!==e||s.edit)return`<section class="card sv-wgoal">
      <h2 class="h3">\u{1F3C1} Objectif de la semaine</h2>
      <p class="small muted">Choisissez un d\xE9fi jusqu'\xE0 dimanche soir :</p>
      <div class="sv-goal-pick">${Object.entries(ie).map(([l,[d,m,$]])=>`<div class="sv-gp-row"><span>${d} ${m}</span>${$.map((o,u)=>`<button type="button" class="chip-btn" data-wgoal="${l}:${o}">${["Facile","Moyen","Ambitieux"][u]} \xB7 ${o}</button>`).join("")}</div>`).join("")}</div>
    </section>`;let[t,n]=ie[s.kind],r=Oe(s.kind),a=Math.min(100,pe(r,s.target)),c=7-(new Date().getDay()+6)%7-1;return a>=100&&!s.done&&(setTimeout(()=>{W(),L("\u{1F3C1} Objectif de la semaine atteint, bravo !","ok")},600),O(l=>{l.weekGoal={...l.weekGoal,done:!0}})),`<section class="card sv-wgoal">
    <div class="dw-head"><h2 class="h3">\u{1F3C1} Objectif de la semaine</h2><button type="button" class="link-btn small" data-wgoal-edit>Changer</button></div>
    <p class="sv-wg-big">${t} <b>${Math.min(r,s.target)}</b> / ${s.target} ${n}</p>
    <div class="sv-bar"><i style="width:${a}%"></i></div>
    <p class="small muted">${a>=100?"\u{1F389} Objectif atteint ! Rendez-vous lundi pour un nouveau d\xE9fi.":c>0?`Encore ${s.target-r} en ${S(c,"jour")} (${Math.ceil((s.target-r)/(c+1))} par jour).`:`Dernier jour : encore ${s.target-r} !`}</p>
  </section>`}function he(){let s=-1,e=-1,t=!1,n=!1;x.forEach((m,$)=>{let o=h.epreuve?.[m.id],u=o?.bestSec||(o?[o.best,o.best,o.best]:[0,0,0]),v=z(m.id);v||(u[0]+u[1])/2>=60?s=$:$===s+1&&(u[0]+u[1])/2>=40&&(t=!0),v||u[2]>=60?e=$:$===e+1&&u[2]>=40&&(n=!0)});let r=x.indexOf(M()),a=G(r).pct;a>=50&&s===r-1&&(t=!0),a>=50&&e===r-1&&(n=!0);let c=(m,$)=>m<0?$?`${y(x[0])} en cours`:"D\xE9butant":`${y(x[m])}${$?"+":""}`,l=x[Math.min(x.length-1,Math.max(s,e)+1)],d=Object.keys(h.epreuve||{}).length;return`<section class="card sv-level">
    <h2 class="h3">\u{1F9ED} Mon vrai niveau</h2>
    <div class="sv-lv-row"><div><small>Compr\xE9hension</small><b>${c(s,t)}</b><span class="muted small">\xE9couter, lire</span></div>
      <div><small>Production</small><b>${c(e,n)}</b><span class="muted small">\xE9crire, construire</span></div></div>
    <p class="small muted">${[["vos examens r\xE9ussis"],d?["vos \xE9preuves type "+(j.code==="zh"?"HSK":"CELI")]:[],h.placement?["votre test de niveau"]:[]].flat().reduce((m,$,o,u)=>m+(o?o===u.length-1?" et ":", ":"D'apr\xE8s ")+$,"")}. Votre parcours en est au palier ${y(M())}.</p>
    <a class="btn ghost small" href="#epreuve-${l.id}">\u23F1\uFE0F Passer l'\xE9preuve ${b(y(l))} pour affiner</a>
  </section>`}function ve(){let s=Le(6),e=w.length,t=92,n=120,r=8,a=i=>s[i][1]>=r?s[i][0]/s[i][1]:null,c=(i,p)=>{let f=-Math.PI/2+i*2*Math.PI/e;return[n+p*Math.cos(f),n+p*Math.sin(f)]},l=[.25,.5,.75,1].map(i=>`<polygon points="${w.map((p,f)=>c(f,t*i).map(g=>g.toFixed(1)).join(",")).join(" ")}" class="rd-grid"/>`).join(""),d=w.map((i,p)=>`<line x1="${n}" y1="${n}" x2="${c(p,t)[0].toFixed(1)}" y2="${c(p,t)[1].toFixed(1)}" class="rd-axis"/>`).join(""),m=w.map(([i],p)=>c(p,t*Math.max(.06,a(i)??0)).map(f=>f.toFixed(1)).join(",")).join(" "),$=w.map(([i,p,f],g)=>{let[C,Pe]=c(g,t+22),J=a(i);return`<text x="${C.toFixed(1)}" y="${Pe.toFixed(1)}" class="rd-l" text-anchor="${C<n-5?"end":C>n+5?"start":"middle"}">${f} ${p}<tspan x="${C.toFixed(1)}" dy="15" class="rd-v">${J==null?"?":Math.round(J*100)+" %"}</tspan></text>`}).join(""),u=w.filter(([i])=>a(i)!=null).sort((i,p)=>a(i[0])-a(p[0]))[0],v=w.filter(([i])=>a(i)==null).map(([,i])=>i.toLowerCase());return`<section class="card sv-radar">
    <h2 class="h3">\u{1F578}\uFE0F Mes comp\xE9tences</h2>
    <svg viewBox="-60 -20 360 290" class="rd" role="img" aria-label="Radar de comp\xE9tences">${l}${d}<polygon points="${m}" class="rd-shape"/>${$}</svg>
    <p class="small muted">Taux de bonnes r\xE9ponses sur les 6 derni\xE8res semaines.${v.length?` Pas encore assez de r\xE9ponses en ${v.join(", ")} (\xAB ? \xBB).`:""}</p>
    ${u?`<a class="btn primary small" href="${u[3]}">${u[2]} S'entra\xEEner : ${u[1].toLowerCase()} (${Math.round(a(u[0])*100)} %)</a>`:""}
  </section>`}function fe(){let s=M(),e=x.indexOf(s),t=Date.now()-14*864e5,n=Object.values(h.lessons||{}).filter(o=>o.passed&&!o.placed&&Date.parse(o.date)>t).length,r=s.lessons.filter(o=>!q(o.id)).length+(te(s)?0:1)+(z(s.id)?0:1),a=Array.from({length:14},(o,u)=>R(k(D(new Date,-u)))).reduce((o,u)=>o+u,0),c=n&&a>20?Math.max(6,Math.min(30,a/n)):12,l=n/14,d=10/c,m=x[e+1],$;if(!r)$=`<p>Palier ${b(y(s))} termin\xE9 \u{1F389}${m?` Prochaine \xE9tape : ${b(y(m))}.`:""}</p>`;else if(!l)$="<p>Terminez une le\xE7on pour lancer la pr\xE9vision : l'appli calcule votre rythme sur les 14 derniers jours.</p>";else{let o=Math.ceil(r/l),u=Math.ceil(r/(l+d)),v=o-u,i=m?`le niveau ${b(y(m))}`:`la fin du palier ${b(y(s))}`,p=x.slice(e+1).reduce((f,g)=>f+g.lessons.length+2,r);$=`<p class="sv-fc-big">\xC0 votre rythme, vous atteindrez ${i} vers le <b>${P(D(new Date,o))}</b></p>
      <p class="small">\u{1F4C8} Rythme actuel : ${(l*7).toFixed(1).replace(".",",")} le\xE7on${l*7>=2?"s":""} par semaine \xB7 ${S(r,"\xE9tape")} restante${r>1?"s":""}.</p>
      ${v>0?`<p class="small sv-fc-tip">\u{1F4A1} Avec <b>10 minutes de plus par jour</b>, ce serait le ${P(D(new Date,u))} : ${S(v,"jour")} gagn\xE9${v>1?"s":""}.</p>`:""}
      ${e+1<x.length-1?`<p class="small muted">Tout le parcours jusqu'\xE0 ${b(y(x[x.length-1]))} : vers ${de[D(new Date,Math.ceil(p/l)).getMonth()]} ${D(new Date,Math.ceil(p/l)).getFullYear()}.</p>`:""}`}return`<section class="card sv-fc"><h2 class="h3">\u{1F52E} Pr\xE9vision</h2>${$}</section>`}function ge(){let e=Object.keys(h.stats?.w||{}).sort().slice(-10).map(o=>{let u=Object.values(h.stats.w[o]),v=u.reduce((p,f)=>p+f[0],0),i=u.reduce((p,f)=>p+f[1],0);return{wk:o,t:i,a:i?v/i:0}}).filter(o=>o.t>=5);if(e.length<2)return`<section class="card sv-prec"><h2 class="h3">\u{1F3AF} Ma pr\xE9cision</h2><p class="small muted">${e.length?`Cette semaine : <b>${Math.round(e[0].a*100)} %</b> de bonnes r\xE9ponses. `:""}La courbe appara\xEEtra apr\xE8s deux semaines de quiz : elle montre vos progr\xE8s m\xEAme quand vous ne les sentez pas.</p></section>`;let t=Math.max(0,Math.floor((Math.min(...e.map(o=>o.a))-.12)*10)/10),n=Math.min(1,Math.ceil((Math.max(...e.map(o=>o.a))+.08)*10)/10),r=300,a=110,c=14,l=o=>c+o*(r-2*c)/(e.length-1),d=o=>a-c-(o-t)/(n-t||1)*(a-2*c),m=e.map((o,u)=>`${u?"L":"M"}${l(u).toFixed(1)},${d(o.a).toFixed(1)}`).join(" "),$=Math.round((e[e.length-1].a-e[0].a)*100);return`<section class="card sv-prec">
    <div class="dw-head"><h2 class="h3">\u{1F3AF} Ma pr\xE9cision</h2><span class="small ${$>=0?"sv-up":"sv-down"}">${$>=0?"+":""}${$} pts en ${S(e.length-1,"semaine")}</span></div>
    <svg viewBox="0 0 ${r} ${a}" class="sv-line" aria-hidden="true">
      ${[t,(t+n)/2,n].map(o=>`<line x1="0" x2="${r}" y1="${d(o)}" y2="${d(o)}" class="sv-gl"/><text x="${r-2}" y="${d(o)-3}" text-anchor="end" class="sv-gt">${Math.round(o*100)} %</text>`).join("")}
      <path d="${m}" class="sv-pl"/>${e.map((o,u)=>`<circle cx="${l(u).toFixed(1)}" cy="${d(o.a).toFixed(1)}" r="3.5" class="sv-pd"><title>Semaine du ${P(new Date(o.wk+"T12:00"))} : ${Math.round(o.a*100)} % (${o.t} r\xE9ponses)</title></circle>`).join("")}
    </svg>
    <p class="small muted">Bonnes r\xE9ponses par semaine. Cette semaine : <b>${Math.round(e[e.length-1].a*100)} %</b>.</p>
  </section>`}function be(){let s=Array.from({length:14},(l,d)=>D(new Date,d-13)),e=s.map(l=>R(k(l))),t=Math.max(15,...e),n=e[13],r=A(0).min,a=Object.entries(h.studyTime||{}).filter(([l])=>l.slice(0,7)===k().slice(0,7)).reduce((l,[,d])=>l+Math.round(d/60),0),c=Object.keys(h.studyTime||{}).sort()[0];return`<section class="card sv-time">
    <h2 class="h3">\u23F1\uFE0F Temps d'\xE9tude</h2>
    <div class="sv-t3"><div><b>${T(n)}</b><small>aujourd'hui</small></div><div><b>${T(r)}</b><small>cette semaine</small></div><div><b>${T(a)}</b><small>ce mois-ci</small></div></div>
    <div class="sv-bars">${s.map((l,d)=>`<span title="${P(l)} : ${e[d]} min"><i style="height:${Math.max(e[d]?6:0,e[d]/t*100)}%"></i><small>${d%2?"":U[l.getDay()][0].toUpperCase()}</small></span>`).join("")}</div>
    <p class="small muted">${c?`Temps actif dans l'appli (sans les pauses), mesur\xE9 depuis le ${P(new Date(c+"T12:00"))}`:"Le temps pass\xE9 \xE0 apprendre (sans les pauses) s'affichera ici d\xE8s aujourd'hui."}</p>
  </section>`}var ce=[["\u{1F305} Matin",5,12,"le matin"],["\u2600\uFE0F Midi",12,14,"\xE0 midi"],["\u{1F324}\uFE0F Apr\xE8s-midi",14,18,"l'apr\xE8s-midi"],["\u{1F306} Soir",18,22,"le soir"],["\u{1F319} Nuit",22,29,"la nuit"]];function xe(){let s=h.stats?.h||{},e=ce.map(([c,l,d,m])=>{let $=0,o=0,u=[];for(let v=l;v<d;v++){let i=s[v%24]||[0,0];$+=i[0],o+=i[1],u.push([v%24,i[1]])}return{lab:c,when:m,ok:$,t:o,acc:o?$/o:0,hour:u.sort((v,i)=>i[1]-v[1])[0][0]}}),t=e.reduce((c,l)=>c+l.t,0),n=e.filter(c=>c.t>=15),r=n.sort((c,l)=>l.acc-c.acc)[0],a=h.settings.remindHour||20;return`<section class="card sv-moment">
    <h2 class="h3">\u{1F557} Mon moment id\xE9al</h2>
    ${t<30?`<p class="small muted">Encore quelques quiz \xE0 diff\xE9rents moments de la journ\xE9e et l'appli vous dira quand vous r\xE9ussissez le mieux.</p>`:`
    <ul class="sv-slots">${ce.map(([c])=>{let l=e.find(d=>d.lab===c);return`<li class="${l===r?"best":""}"><span>${c}</span><span class="sv-sbar"><i style="width:${l.t?Math.round(l.acc*100):0}%"></i></span><b>${l.t?Math.round(l.acc*100)+" %":"\u2013"}</b><small>${l.t}</small></li>`}).join("")}</ul>
    ${r?`<p class="small">\u2728 Vous r\xE9ussissez le mieux <b>${r.when}</b> (${Math.round(r.acc*100)} % de bonnes r\xE9ponses), surtout vers ${r.hour} h.</p>
      ${r.hour!==a?`<button type="button" class="btn ghost small" data-remind="${r.hour}">\u23F0 R\xE9gler mon rappel de s\xE9rie \xE0 ${r.hour} h</button>`:`<p class="small muted">Votre rappel de s\xE9rie est d\xE9j\xE0 r\xE9gl\xE9 \xE0 ${a} h \u{1F44D}</p>`}`:""}`}
  </section>`}var V=[[100,"les premiers \xE9changes"],[250,"se d\xE9brouiller en voyage"],[500,"une conversation simple"],[1e3,"la vie de tous les jours"],[2e3,"lire des textes simples"],[4e3,"\xEAtre autonome"]];function ye(){let s=Object.values(h.vocab||{}),e=s.length,t=12,r=Array.from({length:t},(p,f)=>{let g=new Date(F()+"T23:59:59");return g.setDate(g.getDate()-7*(t-1-f)+6),g}).map(p=>s.filter(f=>(f.added||0)<=p.getTime()).length);r[t-1]=e;let a=V.find(([p])=>p>e),c=[...V].reverse().find(([p])=>p<=e),l=Math.max(a?a[0]:e,...r,10),d=300,m=110,$=8,o=p=>$+p*(d-2*$)/(t-1),u=p=>m-$-p/l*(m-2*$),v=r.map((p,f)=>`${f?"L":"M"}${o(f).toFixed(1)},${u(p).toFixed(1)}`).join(" "),i=e-r[t-5>=0?t-5:0];return`<section class="card sv-vocab">
    <div class="dw-head"><h2 class="h3">\u{1F4DA} Mon vocabulaire</h2><span class="muted small">${S(e,"mot")}${i>0?` \xB7 +${i} en 4 semaines`:""}</span></div>
    <svg viewBox="0 0 ${d} ${m}" class="sv-line" aria-hidden="true">
      ${V.filter(([p])=>p<=l).map(([p])=>`<line x1="0" x2="${d}" y1="${u(p)}" y2="${u(p)}" class="sv-gl"/><text x="2" y="${u(p)-3}" class="sv-gt">${p}</text>`).join("")}
      <path d="${v} L${o(t-1)},${m-$} L${o(0)},${m-$} Z" class="sv-area"/><path d="${v}" class="sv-pl"/>
    </svg>
    <p class="small">${c?`\u2705 <b>${c[0]} mots</b> : ${c[1]}. `:""}${a?`Prochain cap : <b>${a[0]} mots</b> (${a[1]}), encore ${a[0]-e}.`:"Vous avez d\xE9pass\xE9 tous les caps \u{1F3C6}"}</p>
  </section>`}function we(){let s=k(),e=Array.from({length:7},(c,l)=>D(new Date,l)),t=e.map(()=>0);Object.values(h.srs||{}).forEach(c=>{if(!c.due)return;if(c.due<=s){t[0]++;return}let l=e.findIndex(d=>k(d)===c.due);l>0&&t[l]++});let n=Math.max(5,...t),r=t.reduce((c,l)=>c+l,0),a=t.indexOf(Math.max(...t));return`<section class="card sv-up">
    <div class="dw-head"><h2 class="h3">\u{1F0CF} R\xE9visions \xE0 venir</h2><span class="muted small">${S(r,"carte")} sur 7 jours</span></div>
    <div class="sv-bars sv-bars7">${e.map((c,l)=>`<span title="${P(c)} : ${t[l]} cartes"><b>${t[l]||""}</b><i style="height:${Math.max(t[l]?8:0,t[l]/n*100)}%" class="${l===0?"today":""}"></i><small>${l?U[c.getDay()]:"auj."}</small></span>`).join("")}</div>
    ${t[0]?`<a class="btn primary small" href="#reviser">R\xE9viser les ${t[0]} cartes du jour</a>`:`<p class="small muted">Rien \xE0 r\xE9viser aujourd'hui \u{1F44D}</p>`}
    ${a>0&&t[a]>=20?`<p class="small muted">Grosse journ\xE9e ${U[e[a].getDay()]} (${t[a]} cartes) : en r\xE9viser un peu avant all\xE8ge la charge.</p>`:""}
  </section>`}function Ee(){let s=h.dayLog||{},e=Object.keys(s).filter(m=>s[m]>0).sort(),t={xp:0,k:null};e.forEach(m=>{s[m]>t.xp&&(t={xp:s[m],k:m})});let n={n:0,k:null},r=0,a=null;e.forEach(m=>{let $=new Date(m+"T12:00");r=a&&Math.round(($-a)/864e5)===1?r+1:1,a=$,r>=n.n&&(n={n:r,k:m})}),n.n=Math.max(n.n,X());let c=Object.values(h.studyTime||{}).reduce((m,$)=>m+$,0)/60,d=Object.keys(h.studyTime||{}).reduce((m,$)=>Math.max(m,R($)),0);return{bestDay:t,bestStreak:n,perfect:h.records?.perfect||0,perfectAt:h.records?.perfectAt||0,run:h.stats?.best||0,runAt:h.stats?.bestAt||0,total:h.stats?.total||0,minutes:Math.round(c),bestMin:d,words:Object.keys(h.vocab||{}).length}}function je(){let s=Ee(),e=Date.now()-7*864e5,t=d=>d&&d>e,n=s.bestDay.k?Date.parse(s.bestDay.k+"T12:00"):0,r=s.bestStreak.k?Date.parse(s.bestStreak.k+"T12:00"):0,a=[["\u{1F3C5}",`${s.bestDay.xp} XP`,"meilleure journ\xE9e",s.bestDay.k?P(new Date(n)):"",t(n)],["\u{1F525}",`${s.bestStreak.n} j`,"plus longue s\xE9rie","",t(r)&&s.bestStreak.n>1],["\u{1F4AF}",s.perfect,S(s.perfect,"quiz parfait").replace(/^\d+ /,""),"",t(s.perfectAt)],["\u{1F3AF}",s.run,"bonnes r\xE9ponses d'affil\xE9e","",t(s.runAt)&&s.run>=5],["\u2753",s.total,"questions r\xE9pondues","",!1],["\u23F1\uFE0F",T(s.bestMin),"plus longue journ\xE9e d'\xE9tude","",!1]],c=h.records?.seen||0,l=[[n,`meilleure journ\xE9e : ${s.bestDay.xp} XP`],[s.runAt,`${s.run} bonnes r\xE9ponses d'affil\xE9e`],[s.perfectAt,`${s.perfect} quiz parfaits`]].filter(([d])=>d>c&&d>e&&d<Date.now()+1);return l.length&&c&&setTimeout(()=>{W({sound:"combo"}),L(`\u{1F3C6} Nouveau record : ${l[0][1]} !`,"ok")},500),(!c||l.length)&&O(d=>{d.records={...d.records||{},seen:Date.now()}}),`<section class="card dash-wide sv-rec">
    <h2 class="h3">\u{1F3C6} Mes records</h2>
    <div class="sv-rec-grid">${a.map(([d,m,$,o,u])=>`<div class="sv-rc ${u?"new":""}">${u?"<em>Nouveau !</em>":""}<span>${d}</span><b>${m}</b><small>${$}${o?` \xB7 ${o}`:""}</small></div>`).join("")}</div>
  </section>`}function ke(){let s=h.history||[];return`<section class="card history-card dash-wide">
    <h2 class="h3">\u{1F558} Activit\xE9 r\xE9cente</h2>
    ${s.length?`<ul class="history sv-hist">${s.slice(0,12).map((e,t)=>`
      <li><details>
        <summary><span class="h-dot ${e.passed?"ok":"ko"}"></span><span class="h-label">${b(e.label)}</span><span class="h-score">${e.score}/${e.total}</span><time>${new Date(e.date).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}</time></summary>
        <div class="sv-h-body">
          ${e.mistakes?.length?`<ol class="sv-h-mk">${e.mistakes.map(n=>`<li><p>${b(n.p)}</p>${n.g?`<p class="no"><s>${b(n.g)}</s></p>`:""}<p class="yes">\u2713 <b>${b(n.e)}</b></p>${n.w?`<p class="why">\u{1F50E} ${b(n.w)}</p>`:""}</li>`).join("")}</ol>`:e.mistakes?"":e.score===e.total?'<p class="small muted">Aucune erreur \u{1F389}</p>':`<p class="small muted">${e.href?"Le d\xE9tail des erreurs n'est pas disponible pour cette activit\xE9.":"Le d\xE9tail n'est disponible que pour les activit\xE9s faites depuis cette mise \xE0 jour."}</p>`}
          ${e.href?`<a class="btn ghost small" href="${b(e.href)}" data-reload>\u{1F501} Refaire</a>`:""}
        </div></details></li>`).join("")}</ul>`:`<p class="empty">Aucune activit\xE9 pour l'instant. <a href="#parcours">Commencez votre premi\xE8re le\xE7on</a> !</p>`}
  </section>`}function Me(s,e){s.querySelector("[data-share-week]")?.addEventListener("click",()=>Ce().catch(()=>L("Partage impossible sur cet appareil","warn"))),s.querySelectorAll("[data-wgoal]").forEach(t=>t.onclick=()=>{let[n,r]=t.dataset.wgoal.split(":");O(a=>{a.weekGoal={week:F(),kind:n,target:+r}}),L("Objectif de la semaine enregistr\xE9 \u{1F3C1}","ok"),e()}),s.querySelector("[data-wgoal-edit]")?.addEventListener("click",()=>{O(t=>{t.weekGoal={...t.weekGoal,edit:!0}}),e()}),s.querySelector("[data-remind]")?.addEventListener("click",t=>{let n=+t.currentTarget.dataset.remind;O(r=>{r.settings.remindHour=n}),L(`\u23F0 Rappel de s\xE9rie r\xE9gl\xE9 \xE0 ${n} h`,"ok"),e()})}var H=s=>se(s),Y=s=>h.dayLog?.[s]||0,De=["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."];function Ae(){let e=new Date;e.setHours(12,0,0,0);let t=new Date(e);t.setDate(e.getDate()-(e.getDay()+6)%7-112);let n=o=>o<=0?0:o<20?1:o<50?2:o<100?3:4,r="",a="",c=0,l=0,d=-1;for(let o=0;o<17;o++){let u="",v=new Date(t);v.setDate(t.getDate()+o*7),v.getMonth()!==d&&(a+=`<span style="grid-column:${o+1}">${De[v.getMonth()]}</span>`,d=v.getMonth());for(let i=0;i<7;i++){let p=new Date(t);p.setDate(t.getDate()+o*7+i);let f=H(p),g=Y(f),C=p>e;g>0&&(c++,l+=g),u+=`<i class="hm-c l${C?"x":n(g)} ${f===H(e)?"today":""}" title="${p.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})} : ${g} XP"></i>`}r+=`<div class="hm-col">${u}</div>`}let m=0,$=0;for(let o=119;o>=0;o--){let u=new Date(e);u.setDate(e.getDate()-o),Y(H(u))>0?m=Math.max(m,++$):$=0}return`<section class="card dash-wide">
    <div class="dw-head"><h2 class="h3">\u{1F4C5} Calendrier de pratique</h2><span class="muted small">${c} jour${c>1?"s":""} actif${c>1?"s":""} \xB7 meilleure s\xE9rie ${m} j</span></div>
    <div class="hm-wrap"><div class="hm-days"><span>L</span><span></span><span>M</span><span></span><span>V</span><span></span><span>D</span></div>
      <div class="hm"><div class="hm-months">${a}</div><div class="hm-grid">${r}</div></div></div>
    <div class="hm-legend"><span>Moins</span>${[0,1,2,3,4].map(o=>`<i class="hm-c l${o}"></i>`).join("")}<span>Plus</span></div>
  </section>`}function Fe(){let e=[];for(let i=29;i>=0;i--){let p=new Date;p.setDate(p.getDate()-i),e.push({d:p,x:Y(H(p))})}let t=Math.max(50,...e.map(i=>i.x)),n=320,r=120,a=6,c=i=>a+i*(n-2*a)/29,l=i=>r-a-i/t*(r-2*a-10),d=e.map((i,p)=>`${p?"L":"M"}${c(p).toFixed(1)},${l(i.x).toFixed(1)}`).join(" "),m=`${d} L${c(29).toFixed(1)},${r-a} L${c(0).toFixed(1)},${r-a} Z`,$=e.reduce((i,p)=>i+p.x,0),o=e.reduce((i,p)=>p.x>i.x?p:i,e[0]),u=h.profile?.dailyGoal||50,v=[0,7,14,21,29].map(i=>`<span style="left:${c(i)/n*100}%">${e[i].d.getDate()} ${De[e[i].d.getMonth()]}</span>`).join("");return`<section class="card dash-wide">
    <div class="dw-head"><h2 class="h3">\u{1F4C8} XP des 30 derniers jours</h2><span class="muted small">${$} XP \xB7 ${Math.round($/30)} / jour en moyenne</span></div>
    <div class="xc">
      <svg viewBox="0 0 ${n} ${r}" preserveAspectRatio="none" class="xc-svg" aria-hidden="true">
        <defs><linearGradient id="xcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--lvl-c)" stop-opacity=".35"/><stop offset="1" stop-color="var(--lvl-c)" stop-opacity="0"/></linearGradient></defs>
        <line x1="0" x2="${n}" y1="${l(u).toFixed(1)}" y2="${l(u).toFixed(1)}" class="xc-goal"/>
        <path d="${m}" fill="url(#xcg)"/><path d="${d}" class="xc-line" fill="none" vector-effect="non-scaling-stroke"/>
      </svg>
      ${e.map((i,p)=>i.x?`<i class="xc-dot ${i===o?"best":""}" style="left:${c(p)/n*100}%;top:${l(i.x)/r*100}%" title="${i.d.toLocaleDateString("fr-FR")} : ${i.x} XP"></i>`:"").join("")}
      <span class="xc-goal-l" style="top:${l(u)/r*100}%">objectif ${u}</span>
    </div>
    <div class="xc-ticks">${v}</div>
    ${o.x?`<p class="small muted">\u{1F3C5} Meilleur jour : <b>${o.x} XP</b> le ${o.d.toLocaleDateString("fr-FR",{day:"numeric",month:"long"})}</p>`:'<p class="small muted">Gagnez des XP pour voir votre courbe se dessiner.</p>'}
  </section>`}function Re(){let s=Object.values(h.vocab),e=0,t=0,n=0;s.forEach(l=>{let d=B(l);d?d.box>=4?e++:t++:n++});let r=Math.max(1,s.length),a=l=>Math.round(l/r*100),c=s.map(l=>({w:l,c:B(l)})).filter(({c:l})=>l&&(l.lapses||0)>0&&l.box<4).sort((l,d)=>(d.c.lapses||0)-(l.c.lapses||0)||l.c.box-d.c.box).slice(0,6);return`<section class="card">
    <h2 class="h3">\u{1F4D2} Mes mots</h2>
    <div class="wm-bar"><span class="k" style="width:${a(e)}%"></span><span class="l" style="width:${a(t)}%"></span><span class="n" style="width:${a(n)}%"></span></div>
    <div class="wm-legend"><span><i class="k"></i>${e} ma\xEEtris\xE9${e>1?"s":""}</span><span><i class="l"></i>${t} en cours</span><span><i class="n"></i>${n} jamais r\xE9vis\xE9${n>1?"s":""}</span></div>
    <h3 class="wm-h">\u26A0\uFE0F Mots fragiles</h3>
    ${c.length?`<ul class="wm-list">${c.map(({w:l,c:d})=>`<li><b class="${j.wordClass}">${b(l.zh)}</b>${l.py?`<small class="py">${b(l.py)}</small>`:""}<span>${b(String(l.fr).split(" \u2014 ")[0])}</span><em>${d.lapses}\xD7</em></li>`).join("")}</ul>
      <a class="btn ghost small" href="#reviser">\u{1F0CF} Les r\xE9viser en flashcards</a>`:`<p class="small muted">${s.length?"Aucun mot oubli\xE9 r\xE9cemment \u{1F44D} Les mots rat\xE9s en flashcards appara\xEEtront ici.":"Terminez une le\xE7on pour ajouter vos premiers mots."}</p>`}
  </section>`}function ze(){let s={};Object.values(h.errors).forEach(n=>{let r=String(n.ref).split(":")[0];s[r]=(s[r]||0)+(n.count||1)});let e=Object.entries(s).sort((n,r)=>r[1]-n[1]).slice(0,5),t=Math.max(1,...e.map(n=>n[1]));return`<section class="card">
    <h2 class="h3">\u{1F3AF} Points faibles</h2>
    ${e.length?`<ul class="wk-list">${e.map(([n,r])=>{let a=Q(n),c=a?`${a.emoji} ${a.title}`:ee(n+":0");return`<li><a href="${a?`#lecon-${a.id}`:"#erreurs"}"><span class="wk-l">${K(a?.levelId||"",c)}</span><span class="wk-bar"><i style="width:${r/t*100}%"></i></span><b>${r}</b></a></li>`}).join("")}</ul><a class="btn primary small" href="#revision">\u{1F501} R\xE9viser mes erreurs</a>`:`<p class="small muted">Aucune erreur en attente : bravo ! Vos erreurs de quiz s'afficheront ici, regroup\xE9es par le\xE7on.</p>`}
  </section>`}function Xe(s){let e=oe(),t=h.profile?.dailyGoal||50,n=re(),r=Math.min(100,Math.round(n/t*100)),a=I.filter(o=>q(o.id)).length,c=Object.keys(h.vocab).length,l=Object.keys(h.errors).length,d=le(),m=h.history.filter(o=>o.kind!=="review"),$=m.length?Math.round(m.reduce((o,u)=>o+u.score/u.total,0)/m.length*100):0;s.innerHTML=`
  <header class="page-head">
    <p class="eyebrow">Tableau de bord</p>
    <h1>${b(h.profile?.avatar||"")} ${b(h.profile?.pseudo||"")}, voici votre progression</h1>
  </header>

  <div class="dash-grid">
    <section class="card dash-main">
      ${_(e.pct,168,14)}
      <div>
        <p class="eyebrow">Progression globale ${y(x[0])} \u2192 ${y(x[x.length-1])}</p>
        <h2>${e.done} / ${e.total} \xE9tapes</h2>
        <p class="muted">Niveau actuel : <b>${y(M())} \xB7 ${M().name}</b></p>
        ${d?`<a class="btn primary dash-resume" href="#${ae(d)}">
          <span class="dr-txt">${d.kind==="lesson"?"Reprendre : "+K(d.lesson.levelId,d.lesson.title):d.kind==="checkpoint"?"Test de mi-palier "+y(d.level):"Passer l'examen "+y(d.level)}</span><span class="dr-arrow" aria-hidden="true">\u2192</span></a>`:""}
      </div>
    </section>

    <section class="card goal">
      ${_(r,96,9,`${n}`)}
      <div>
        <p class="eyebrow">Objectif du jour</p>
        <h3>${n} / ${t} XP</h3>
        <p class="small muted">${r>=100?`Objectif atteint, ${j.goalDone} ! \u{1F389}`:`Encore ${t-n} XP aujourd'hui.`}</p>
      </div>
    </section>

    <section class="stats">
      ${N("\u{1F525}",X(),"jour(s) de s\xE9rie")}
      ${N("\u26A1",h.xp,"XP au total")}
      ${N("\u2705",a,`le\xE7on(s) sur ${I.length}`)}
      ${N("\u{1F3AF}",$+"%","r\xE9ussite moyenne")}
      <a class="stat link" href="#carnet">${Z("\u{1F4D2}",c,"mots appris")}</a>
      <a class="stat link ${l?"warn":""}" href="#erreurs">${Z("\u{1F501}",l,"erreur(s) \xE0 revoir")}</a>
    </section>

    ${me()}
    ${$e()}
    ${he()}
    ${ve()}
    ${fe()}
    ${ge()}
    ${be()}
    ${xe()}
    ${ye()}
    ${we()}
    ${je()}
    ${Ae()}
    ${Fe()}
    ${Re()}
    ${ze()}

    <section class="card levels-card">
      <h2 class="h3">Progression par palier</h2>
      <ul class="level-bars">
        ${x.map((o,u)=>{let v=G(u),i=ne(u);return`<li class="${i?"":"locked"}" style="--lvl:${o.color}">
            <span class="lb-id">${y(o)}</span>
            <span class="lb-name">${o.name}${o.hsk&&!o.label?` \xB7 ${o.hsk}`:""}${z(o.id)?" \u{1F3C6}":""}</span>
            <span class="lb-bar"><i style="width:${v.pct}%"></i></span>
            <span class="lb-pct">${i?v.pct+"%":"\u{1F512}"}</span>
          </li>`}).join("")}
      </ul>
    </section>

    ${ke()}
  </div>`,Me(s,()=>{let o=scrollY;Xe(s),scrollTo(0,o)})}var Z=(s,e,t)=>`<span class="stat-icon">${s}</span><b>${e}</b><small>${t}</small>`,N=(s,e,t)=>`<div class="stat">${Z(s,e,t)}</div>`;export{Xe as renderDashboard};

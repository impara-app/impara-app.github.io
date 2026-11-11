import{b as v}from"./c-SOVZPZMM.js";import{V as b}from"./c-BBR4LS26.js";import{a as i,h as t,i as c}from"./c-3M6EEBJX.js";import{I as p,L as u,g as l,j as d,y as a}from"./c-HPXZTFFF.js";import"./c-427Z5ASM.js";function C($){let r=i.findIndex(n=>n.id===$);if(r<0)return;let o=i[r],e=i[r+1],h=Object.keys(d.vocab).length,g=o.lessons.length,s=document.createElement("div");s.className="levelup",s.setAttribute("role","dialog"),s.style.setProperty("--lv",(e||o).color||"#1e8e5a"),s.innerHTML=`
    <div class="lu-rays" aria-hidden="true"></div>
    <div class="lu-inner">
      <p class="lu-kicker">Palier ${a(t(o))} valid\xE9</p>
      <div class="lu-badge"><span class="lu-ring"></span><b>${e?c(e):c(o)}</b></div>
      <h1>${e?`Bienvenue en ${a(t(e))} !`:"Parcours termin\xE9 !"}</h1>
      <p class="lu-sub">${e?`${a(e.name)} \xB7 ${a(e.title)}`:a(l.finished||"Vous avez termin\xE9 tous les paliers.")}</p>
      <div class="lu-stats">
        <span><b>${g}</b><small>le\xE7ons</small></span>
        <span><b>${h}</b><small>mots appris</small></span>
        <span><b>${b()}</b><small>jours de s\xE9rie</small></span>
      </div>
      <span class="lu-mascot">${v("cheer",{size:110})}</span>
      <div class="lu-actions">
        <button type="button" class="btn big lu-share" data-share>Partager \xE0 mes amis</button>
        <button type="button" class="btn big lu-go" data-close>${e?`Commencer ${a(t(e))}`:"Continuer"} \u2192</button>
      </div>
    </div>`,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("in")),setTimeout(()=>u({sound:"win"}),250),setTimeout(()=>u({sound:null}),1300);let f=()=>{s.classList.remove("in"),setTimeout(()=>s.remove(),300)};s.querySelector("[data-close]").onclick=()=>{f(),location.hash="parcours"},s.querySelector("[data-share]").onclick=async()=>{let n=`\u{1F393} J'ai valid\xE9 le palier ${t(o)} en ${l.label.toLowerCase()} sur ${l.brand||"Impara"} ! ${e?`Prochaine \xE9tape : ${t(e)}.`:""}`,m=location.origin+location.pathname;try{if(navigator.share){await navigator.share({title:l.brand||"Impara",text:n,url:m});return}await navigator.clipboard.writeText(`${n} ${m}`),p("Message copi\xE9 : collez-le \xE0 vos amis \u2713","ok")}catch{}}}export{C as showLevelUp};

import{c as g,d as u,g as f,h,i as b,j as v,k as y,l as w}from"./c-MQKQRSKL.js";import{I as l,K as m,g as p,j as r,y as i}from"./c-HPXZTFFF.js";import"./c-427Z5ASM.js";var s="login",C={off:["\u26AA","Mode local"],guest:["\u26AA","Non connect\xE9"],syncing:["\u{1F504}","Synchronisation\u2026"],synced:["\u2705","Synchronis\xE9"],offline:["\u{1F4F4}","Hors ligne \u2014 les changements partiront au retour du r\xE9seau"],error:["\u26A0\uFE0F","Probl\xE8me de synchronisation"]};function q(a){let t=u();if(!g()){a.innerHTML=`
    <header class="page-head"><p class="eyebrow">Compte</p><h1>\u2601\uFE0F Comptes et synchronisation</h1></header>
    <section class="card account-card">
      <p>Ce site fonctionne en <b>mode local</b> : la progression est enregistr\xE9e dans ce navigateur uniquement.</p>
      <p class="muted small">Pour activer les comptes (une sauvegarde en ligne par personne, sur tous ses appareils), l'administrateur du site doit renseigner <code>js/config.js</code> avec les cl\xE9s de son projet Supabase \u2014 voir <code>GUIDE-MISE-EN-LIGNE.md</code>.</p>
      <a class="btn ghost" href="#${r.profile?"reglages":"parcours"}">\u2190 Retour</a>
    </section>`;return}if(t.recovery){a.innerHTML=`
    <header class="page-head"><p class="eyebrow">Compte</p><h1>\u{1F511} Nouveau mot de passe</h1></header>
    <form class="card account-card auth-form" data-form="recovery">
      <label class="field"><span>Nouveau mot de passe</span><input name="password" type="password" minlength="6" required autocomplete="new-password"></label>
      <p class="form-msg" role="alert"></p>
      <button class="btn primary big" type="submit">Enregistrer</button>
    </form>`,S(a,async e=>{await y(e.password.value),l("Mot de passe modifi\xE9 \u2713","ok"),location.hash="parcours"});return}if(t.user){let[e,o]=C[t.status]||C.synced;a.innerHTML=`
    <header class="page-head"><p class="eyebrow">Compte</p><h1>\u2601\uFE0F Mon compte</h1></header>
    <section class="card account-card">
      <div class="acc-row"><span class="acc-avatar">${i(r.profile?.avatar||"\u{1F464}")}</span>
        <div><b>${i(r.profile?.pseudo||"")}</b><p class="muted small">${i(t.user.email)}</p></div></div>
      <div class="sync-box sync-${t.status}">
        <span class="sync-icon">${e}</span>
        <div><b>${o}</b>
          <p class="small muted">${t.lastSync?`Derni\xE8re synchronisation : ${new Date(t.lastSync).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`:""}
          ${t.message?`<br>${i(t.message)}`:""}</p></div>
      </div>
      <p class="small muted">Votre progression en <b>${p.label.toLowerCase()}</b> est sauvegard\xE9e en ligne et vous suit sur tous vos appareils : connectez-vous avec le m\xEAme e-mail.
      Chaque langue a sa propre sauvegarde ; votre profil est partag\xE9.</p>
      <div class="btn-row">
        <button class="btn ghost" data-sync>\u{1F504} Synchroniser maintenant</button>
        <button class="btn danger" data-logout>Se d\xE9connecter</button>
      </div>
    </section>`,a.querySelector("[data-sync]").onclick=async()=>{await w(),l(u().status==="synced"?"Synchronis\xE9 \u2713":u().message,u().status==="synced"?"ok":"warn")},a.querySelector("[data-logout]").onclick=async()=>{await m({title:"Se d\xE9connecter ?",body:"<p>Votre progression est sauvegard\xE9e en ligne. Elle sera retir\xE9e de cet appareil et vous la retrouverez en vous reconnectant.</p>",actions:[{label:"Annuler",value:"no"},{label:"Se d\xE9connecter",value:"yes",kind:"danger"}]})==="yes"&&(await b(),l("D\xE9connect\xE9","ok"),location.hash="parcours",window.dispatchEvent(new HashChangeEvent("hashchange")))};return}let n=Object.keys(r.lessons).length;a.innerHTML=`
  <header class="page-head">
    <p class="eyebrow">Compte</p>
    <h1>\u2601\uFE0F ${s==="signup"?"Cr\xE9er mon compte":s==="forgot"?"Mot de passe oubli\xE9":"Se connecter"}</h1>
    <p class="muted">Un compte gratuit sauvegarde votre progression en ligne et la retrouve sur tous vos appareils.</p>
  </header>
  <form class="card account-card auth-form" data-form="${s}">
    ${s!=="forgot"?`<div class="seg wide">
      <button type="button" data-mode="login" class="${s==="login"?"on":""}">Connexion</button>
      <button type="button" data-mode="signup" class="${s==="signup"?"on":""}">Inscription</button>
    </div>`:""}
    <label class="field"><span>E-mail</span><input name="email" type="email" required autocomplete="email" placeholder="vous@exemple.com"></label>
    ${s!=="forgot"?`<label class="field"><span>Mot de passe</span>
      <input name="password" type="password" minlength="6" required autocomplete="${s==="signup"?"new-password":"current-password"}" placeholder="6 caract\xE8res minimum"></label>`:""}
    ${s==="signup"&&n?`<p class="small hint-ok">\u2713 Votre progression actuelle (${n} le\xE7on${n>1?"s":""}) sera rattach\xE9e \xE0 votre nouveau compte.</p>`:""}
    <p class="form-msg" role="alert"></p>
    <button class="btn primary big" type="submit">${s==="signup"?"Cr\xE9er mon compte":s==="forgot"?"Recevoir le lien":"Se connecter"}</button>
    <p class="small center">
      ${s==="login"?'<a href="#compte" data-mode="forgot">Mot de passe oubli\xE9 ?</a>':'<a href="#compte" data-mode="login">\u2190 Retour \xE0 la connexion</a>'}
    </p>
    ${r.profile?"":'<p class="small center"><a href="#parcours">Continuer sans compte</a></p>'}
  </form>`,a.querySelectorAll("[data-mode]").forEach(e=>e.onclick=o=>{o.preventDefault(),s=e.dataset.mode,q(a)}),S(a,async e=>{let o=e.email.value.trim();if(s==="forgot")return await v(o),"\u{1F4E7} Si un compte existe, un lien de r\xE9initialisation vient d'\xEAtre envoy\xE9.";if(s==="signup"){if((await f(o,e.password.value)).needsConfirmation)return"\u{1F4E7} Compte cr\xE9\xE9 ! Cliquez sur le lien de confirmation re\xE7u par e-mail, puis connectez-vous."}else await h(o,e.password.value);l("Connect\xE9 \u2713","ok"),s="login",location.hash=r.profile?"tableau":"parcours",window.dispatchEvent(new HashChangeEvent("hashchange"))})}function S(a,t){let n=a.querySelector("form[data-form]"),e=n.querySelector(".form-msg"),o=n.querySelector("button[type=submit]");n.onsubmit=async d=>{d.preventDefault(),e.className="form-msg",e.textContent="",o.disabled=!0;let $=o.textContent;o.textContent="Patientez\u2026";try{let c=await t(n);c&&(e.className="form-msg ok",e.textContent=c)}catch(c){e.className="form-msg error",e.textContent=c.message||String(c)}finally{o.disabled=!1,o.textContent=$}},setTimeout(()=>n.querySelector("input")?.focus(),50)}export{q as renderCompte};

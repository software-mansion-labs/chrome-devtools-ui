import"../../../ui/components/chrome_link/chrome_link.js";import"../../../ui/components/settings/settings.js";import*as e from"../../../core/i18n/i18n.js";import*as n from"../../../ui/components/helpers/helpers.js";import*as s from"../../../ui/lit-html/lit-html.js";const t=new CSSStyleSheet;t.replaceSync(":host{break-inside:avoid;display:block;padding-bottom:9px;width:288px}fieldset{border:0;padding:0}.link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}img{border:0;border-radius:var(--sys-shape-corner-full);display:block;height:var(--sys-size-9);width:var(--sys-size-9)}.warning{display:block}.account-info{display:flex;align-items:center;margin-top:12px}.account-email{display:flex;flex-direction:column;margin-left:8px}\n/*# sourceURL=syncSection.css */\n");const{html:i}=s,o={syncDisabled:"To turn this setting on, you must enable Chrome sync.",preferencesSyncDisabled:"To turn this setting on, you must first enable settings sync in Chrome.",settings:"Go to Settings",signedIn:"Signed into Chrome as:"},c=e.i18n.registerUIStrings("panels/settings/components/SyncSection.ts",o),r=e.i18n.getLocalizedString.bind(void 0,c);class a extends HTMLElement{#e=this.attachShadow({mode:"open"});#n={isSyncActive:!1};#s;#t=this.#i.bind(this);connectedCallback(){this.#e.adoptedStyleSheets=[t]}set data(e){this.#n=e.syncInfo,this.#s=e.syncSetting,n.ScheduledRender.scheduleRender(this,this.#t)}#i(){if(!this.#s)throw new Error("SyncSection not properly initialized");const e=!this.#n.isSyncActive||!this.#n.arePreferencesSynced;this.#s?.setDisabled(e),s.render(i`
      <fieldset>
        ${function(e){if(!e.isSyncActive){const e="chrome://settings/syncSetup";return i`
      <span class="warning">
        ${r(o.syncDisabled)}
        <devtools-chrome-link .href=${e}>${r(o.settings)}</devtools-chrome-link>
      </span>`}if(!e.arePreferencesSynced){const e="chrome://settings/syncSetup/advanced";return i`
      <span class="warning">
        ${r(o.preferencesSyncDisabled)}
        <devtools-chrome-link .href=${e}>${r(o.settings)}</devtools-chrome-link>
      </span>`}return i`
    <div class="account-info">
      <img src="data:image/png;base64, ${e.accountImage}" alt="Account avatar" />
      <div class="account-email">
        <span>${r(o.signedIn)}</span>
        <span>${e.accountEmail}</span>
      </div>
    </div>`}(this.#n)}
        <setting-checkbox .data=${{setting:this.#s}}>
        </setting-checkbox>
      </fieldset>
    `,this.#e,{host:this})}}customElements.define("devtools-sync-section",a);var d=Object.freeze({__proto__:null,SyncSection:a});export{d as SyncSection};

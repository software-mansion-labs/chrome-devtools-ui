import"../icon_button/icon_button.js";import*as e from"../../../core/common/common.js";import*as t from"../../lit-html/lit-html.js";import*as i from"../../../core/host/host.js";import*as n from"../../../core/i18n/i18n.js";import*as s from"../../visual_logging/visual_logging.js";import"../buttons/buttons.js";import*as o from"../input/input.js";const r=new CSSStyleSheet;r.replaceSync(".clickable{cursor:pointer}devtools-icon{vertical-align:text-bottom;padding-left:2px}\n/*# sourceURL=settingDeprecationWarning.css */\n");const{html:a}=t;class c extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[r]}set data(e){this.#t(e)}#t({disabled:i,warning:n,experiment:s}){const o={clickable:!1};let r;i&&s&&(o.clickable=!0,r=()=>{e.Revealer.reveal(s)}),t.render(a`<devtools-icon class=${t.Directives.classMap(o)} .data=${{iconName:"info",color:"var(--icon-default)",width:"16px"}} title=${n} @click=${r}></devtools-icon>`,this.#e,{host:this})}}customElements.define("devtools-setting-deprecation-warning",c);var l=Object.freeze({__proto__:null,SettingDeprecationWarning:c});const h=new CSSStyleSheet;h.replaceSync(":host{padding:0;margin:0}input{height:12px;width:12px;min-height:12px;min-width:12px;margin:6px}label{display:inline-flex;align-items:center;overflow:hidden;text-overflow:ellipsis}p{margin:6px 0}.disabled-reason{box-sizing:border-box;margin-left:var(--sys-size-2);width:var(--sys-size-9);height:var(--sys-size-9)}.learn-more{cursor:pointer;position:relative;margin-left:var(--sys-size-2);top:var(--sys-size-2);width:var(--sys-size-9);height:var(--sys-size-9)}\n/*# sourceURL=settingCheckbox.css */\n");const{html:d,Directives:{ifDefined:g}}=t,p={learnMore:"Learn more"},m=n.i18n.registerUIStrings("ui/components/settings/SettingCheckbox.ts",p),b=n.i18n.getLocalizedString.bind(void 0,m);class v extends HTMLElement{#e=this.attachShadow({mode:"open"});#i;#n;#s;connectedCallback(){this.#e.adoptedStyleSheets=[o.checkboxStyles,h]}set data(e){this.#n&&this.#i&&this.#i.removeChangeListener(this.#n.listener),this.#i=e.setting,this.#s=e.textOverride,this.#n=this.#i.addChangeListener((()=>{this.#t()})),this.#t()}icon(){if(!this.#i)return;if(this.#i.deprecation)return d`<devtools-setting-deprecation-warning .data=${this.#i.deprecation}></devtools-setting-deprecation-warning>`;const e=this.#i.learnMore();if(e&&e.url){const t=e.url,n={iconName:"help",variant:"icon",size:"SMALL",jslogContext:`${this.#i.name}-documentation`,title:b(p.learnMore)};return d`<devtools-button
                    class=learn-more
                    @click=${e=>{i.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(t),e.consume()}}
                    .data=${n}></devtools-button>`}}#t(){if(!this.#i)throw new Error('No "Setting" object provided for rendering');const e=this.icon(),i=`${this.#i.learnMore()?this.#i.learnMore()?.tooltip():""}`,n=this.#i.disabledReasons(),o=n.length?d`
      <devtools-button class="disabled-reason" .iconName=${"info"} .variant=${"icon"} .size=${"SMALL"} title=${g(n.join("\n"))} @click=${onclick}></devtools-button>
    `:t.nothing;t.render(d`
      <p>
        <label title=${i}>
          <input
            type="checkbox"
            .checked=${!n.length&&this.#i.get()}
            ?disabled=${this.#i.disabled()}
            @change=${this.#o}
            jslog=${s.toggle().track({click:!0}).context(this.#i.name)}
            aria-label=${this.#i.title()}
          />
          ${this.#s||this.#i.title()}${o}
        </label>
        ${e}
      </p>`,this.#e,{host:this})}#o(e){this.#i?.set(e.target.checked),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!1}))}}customElements.define("setting-checkbox",v);var u=Object.freeze({__proto__:null,SettingCheckbox:v});export{u as SettingCheckbox,l as SettingDeprecationWarning};

import*as e from"../../../core/host/host.js";import*as t from"../../../core/i18n/i18n.js";import*as i from"../../../core/platform/platform.js";import*as n from"../helpers/helpers.js";import*as r from"../../lit-html/lit-html.js";import"../buttons/buttons.js";import"../../legacy/legacy.js";import*as o from"../../visual_logging/visual_logging.js";import*as s from"../../../core/root/root.js";import*as a from"../input/input.js";const{html:l}=r,d={feedback:"Feedback"},c=t.i18n.registerUIStrings("ui/components/panel_feedback/FeedbackButton.ts",d),h=t.i18n.getLocalizedString.bind(void 0,c),p=new URL("../../../Images/review.svg",import.meta.url).toString();let k=class extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#n={feedbackUrl:i.DevToolsPath.EmptyUrlString};set data(e){this.#n=e,n.ScheduledRender.scheduleRender(this,this.#t)}#r(){e.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(this.#n.feedbackUrl)}#i(){if(!n.ScheduledRender.isScheduledRender(this))throw new Error("FeedbackButton render was not scheduled");r.render(l`
      <devtools-button
          @click=${this.#r}
          .iconUrl=${p}
          .variant=${"outlined"}
          .jslogContext=${"feedback"}
      >${h(d.feedback)}</devtools-button>
      `,this.#e,{host:this})}};customElements.define("devtools-feedback-button",k);var m=Object.freeze({__proto__:null,FeedbackButton:k});const x=new CSSStyleSheet;x.replaceSync(":host{display:block}.preview{padding:12px 16px;border:1px solid var(--sys-color-divider);color:var(--sys-color-on-surface);font-size:13px;line-height:20px;border-radius:12px;margin:42px 0;letter-spacing:0.01em}h2{color:var(--sys-color-primary);font-size:13px;line-height:20px;letter-spacing:0.01em;margin:9px 0 14px;display:flex;align-items:center;gap:5px;font-weight:normal}h3{font-size:13px;line-height:20px;letter-spacing:0.04em;color:var(--sys-color-on-surface);margin-bottom:2px;font-weight:normal}.preview p{margin-bottom:24px}.thumbnail{height:92px}.video{display:flex;flex-flow:row wrap;gap:20px}x-link{color:var(--sys-color-primary);text-decoration-line:underline}x-link.quick-start-link{font-size:14px;line-height:22px;letter-spacing:0.04em}.video-description{min-width:min-content;flex-basis:min-content;flex-grow:1}@media (forced-colors: active){x-link{color:linktext}}\n/*# sourceURL=panelFeedback.css */\n");const{html:b}=r,v={previewText:"Our team is actively working on this feature and we would love to know what you think.",previewTextFeedbackLink:"Send us your feedback.",previewFeature:"Preview feature",videoAndDocumentation:"Video and documentation"},g=t.i18n.registerUIStrings("ui/components/panel_feedback/PanelFeedback.ts",v),u=t.i18n.getLocalizedString.bind(void 0,g),f=new URL("../../../Images/experiment.svg",import.meta.url).toString(),w=new URL("../../../Images/preview_feature_video_thumbnail.svg",import.meta.url).toString();let S=class extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#n={feedbackUrl:i.DevToolsPath.EmptyUrlString,quickStartUrl:i.DevToolsPath.EmptyUrlString,quickStartLinkText:""};connectedCallback(){this.#e.adoptedStyleSheets=[x]}set data(e){this.#n=e,n.ScheduledRender.scheduleRender(this,this.#t)}#i(){if(!n.ScheduledRender.isScheduledRender(this))throw new Error("PanelFeedback render was not scheduled");r.render(b`
      <div class="preview">
        <h2 class="flex">
          <devtools-icon .data=${{iconPath:f,width:"20px",height:"20px",color:"var(--icon-primary)"}}></devtools-icon> ${u(v.previewFeature)}
        </h2>
        <p>${u(v.previewText)} <x-link href=${this.#n.feedbackUrl} jslog=${o.link("feedback").track({click:!0})}>${u(v.previewTextFeedbackLink)}</x-link></p>
        <div class="video">
          <div class="thumbnail">
            <img src=${w} role="presentation" />
          </div>
          <div class="video-description">
            <h3>${u(v.videoAndDocumentation)}</h3>
            <x-link class="quick-start-link" href=${this.#n.quickStartUrl} jslog=${o.link("css-overview.quick-start").track({click:!0})}>${this.#n.quickStartLinkText}</x-link>
          </div>
        </div>
      </div>
      `,this.#e,{host:this})}};customElements.define("devtools-panel-feedback",S);var y=Object.freeze({__proto__:null,PanelFeedback:S});const L=new CSSStyleSheet;L.replaceSync(":host{display:block}.container{display:flex;flex-wrap:wrap;padding:4px}.experiment-preview,\n.feedback,\n.learn-more{display:flex;align-items:center}.helper{flex-basis:100%;text-align:center;font-style:italic}.spacer{flex:1}.x-link{color:var(--sys-color-primary);text-decoration-line:underline;margin:0 4px}.feedback .x-link{color:var(--sys-color-token-subtle)}\n/*# sourceURL=previewToggle.css */\n");const{render:R,html:$,nothing:U}=r,T={previewTextFeedbackLink:"Send us your feedback.",shortFeedbackLink:"Send feedback",learnMoreLink:"Learn More"},F=t.i18n.registerUIStrings("ui/components/panel_feedback/PreviewToggle.ts",T),_=t.i18n.getLocalizedString.bind(void 0,F);let C=class extends HTMLElement{#e=this.attachShadow({mode:"open"});#o="";#s=null;#a=null;#l;#d="";#c;connectedCallback(){this.#e.adoptedStyleSheets=[a.checkboxStyles,L]}set data(e){this.#o=e.name,this.#s=e.helperText,this.#a=e.feedbackURL,this.#l=e.learnMoreURL,this.#d=e.experiment,this.#c=e.onChangeCallback,this.#i()}#i(){const e=s.Runtime.experiments.isEnabled(this.#d);R($`
      <div class="container">
        <label class="experiment-preview">
          <input type="checkbox" ?checked=${e} @change=${this.#h} aria-label=${this.#o} />
          <devtools-icon .data=${{iconName:"experiment",width:"16px",height:"16px",color:"var(--icon-default)"}}>
          </devtools-icon>${this.#o}
        </label>
        <div class="spacer"></div>
        ${this.#a&&!this.#s?$`<div class="feedback"><x-link class="x-link" href=${this.#a}>${_(T.shortFeedbackLink)}</x-link></div>`:U}
        ${this.#l?$`<div class="learn-more"><x-link class="x-link" href=${this.#l}>${_(T.learnMoreLink)}</x-link></div>`:U}
        <div class="helper">
          ${this.#s&&this.#a?$`<p>${this.#s} <x-link class="x-link" href=${this.#a}>${_(T.previewTextFeedbackLink)}</x-link></p>`:U}
        </div>
      </div>`,this.#e,{host:this})}#h(e){const t=e.target.checked;s.Runtime.experiments.setEnabled(this.#d,t),this.#c?.(t)}};customElements.define("devtools-preview-toggle",C);var j=Object.freeze({__proto__:null,PreviewToggle:C});export{m as FeedbackButton,y as PanelFeedback,j as PreviewToggle};

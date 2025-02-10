import*as e from"../../../ui/components/helpers/helpers.js";import*as t from"../../../ui/lit-html/lit-html.js";import*as r from"../../../ui/visual_logging/visual_logging.js";import*as s from"../../../ui/legacy/legacy.js";import*as o from"../../../core/host/host.js";import*as i from"../../../core/i18n/i18n.js";import*as a from"../../../core/platform/platform.js";import*as n from"../../../core/sdk/sdk.js";import*as d from"../../../third_party/chromium/client-variations/client-variations.js";import"../../../ui/components/buttons/buttons.js";import"../forward/forward.js";import*as l from"../../../core/common/common.js";import*as h from"../../../models/persistence/persistence.js";import*as c from"../../../models/workspace/workspace.js";import*as u from"../../../ui/components/input/input.js";import*as p from"../../../ui/components/legacy_wrapper/legacy_wrapper.js";import*as v from"../../../ui/components/render_coordinator/render_coordinator.js";import*as m from"../../sources/sources.js";import*as g from"../../../models/issues_manager/issues_manager.js";import"../../../ui/components/report_view/report_view.js";import"../../../ui/components/icon_button/icon_button.js";import"../../../ui/components/data_grid/data_grid.js";import{PanelUtils as f}from"../../utils/utils.js";const w=new CSSStyleSheet;w.replaceSync(":host{display:inline}.editable{cursor:text;overflow-wrap:anywhere;min-height:18px;line-height:18px;min-width:0.5em;background:transparent;border:none;border-radius:4px;outline:none;display:inline-block;font-family:var(--monospace-font-family);font-size:var(--monospace-font-size);&:hover{border:1px solid var(--sys-color-neutral-outline)}&:focus{border:1px solid var(--sys-color-state-focus-ring)}}.editable::selection{color:var(--sys-color-on-tonal-container);background-color:var(--sys-color-tonal-container)}\n/*# sourceURL=EditableSpan.css */\n");const{render:y,html:b}=t;class k extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#r.bind(this);#s="";connectedCallback(){this.#e.adoptedStyleSheets=[w],this.#e.addEventListener("focusin",this.#o.bind(this)),this.#e.addEventListener("keydown",this.#i.bind(this)),this.#e.addEventListener("input",this.#a.bind(this))}set data(t){this.#s=t.value,e.ScheduledRender.scheduleRender(this,this.#t)}get value(){return this.#e.querySelector("span")?.innerText||""}set value(e){this.#s=e;const t=this.#e.querySelector("span");t&&(t.innerText=e)}#i(e){"Enter"===e.key&&(e.preventDefault(),e.target?.blur())}#a(e){this.#s=e.target.innerText}#o(e){const t=e.target,r=window.getSelection(),s=document.createRange();s.selectNodeContents(t),r?.removeAllRanges(),r?.addRange(s)}#r(){if(!e.ScheduledRender.isScheduledRender(this))throw new Error("HeaderSectionRow render was not scheduled");y(b`<span
        contenteditable="plaintext-only"
        class="editable"
        tabindex="0"
        .innerText=${this.#s}
        jslog=${r.value("header-editor").track({change:!0,keydown:"Enter|Escape"})}
    </span>`,this.#e,{host:this})}focus(){requestAnimationFrame((()=>{const e=this.#e.querySelector(".editable");e?.focus()}))}}customElements.define("devtools-editable-span",k);var S=Object.freeze({__proto__:null,EditableSpan:k});const x=new CSSStyleSheet;x.replaceSync(':host{display:block}.row{display:flex;line-height:20px;padding-left:8px;gap:12px;user-select:text}.row.header-editable{font-family:var(--monospace-font-family);font-size:var(--monospace-font-size)}.header-name{color:var(--sys-color-on-surface);font-weight:400;width:30%;min-width:160px;max-width:240px;flex-shrink:0;text-transform:capitalize;overflow-wrap:break-word}.header-name,\n.header-value{&::selection{color:var(--sys-color-on-tonal-container);background-color:var(--sys-color-tonal-container)}}.header-name.pseudo-header{text-transform:none}.header-editable .header-name{color:var(--sys-color-token-property-special)}.row.header-deleted .header-name{color:var(--sys-color-token-subtle)}.header-value{display:flex;overflow-wrap:anywhere;margin-inline-end:14px}.header-badge-text{font-variant:small-caps;font-weight:500;white-space:pre-wrap;word-break:break-all;text-transform:none}.header-badge{display:inline;background-color:var(--sys-color-error);color:var(--sys-color-on-error);border-radius:100vh;padding-left:6px;padding-right:6px}.call-to-action{background-color:var(--sys-color-neutral-container);padding:8px;border-radius:5px;margin:4px}.call-to-action-body{padding:6px 0;margin-left:9.5px;border-left:2px solid var(--issue-color-yellow);padding-left:18px;line-height:20px}.call-to-action .explanation{font-weight:bold}.call-to-action code{font-size:90%}.call-to-action .example .comment::before{content:" — "}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.explanation .link{font-weight:normal}.inline-icon{vertical-align:middle}.row-flex-icon{margin:2px 5px 0}.header-value code{display:block;white-space:pre-wrap;font-size:90%;color:var(--sys-color-token-subtle)}x-link .inline-icon{padding-right:3px}.header-highlight{background-color:var(--sys-color-yellow-container)}.header-warning{color:var(--sys-color-error)}.header-overridden{background-color:var(--sys-color-tertiary-container);border-left:3px solid var(--sys-color-tertiary);padding-left:5px}.header-deleted{background-color:var(--sys-color-surface-error);border-left:3px solid var(--sys-color-error-bright);color:var(--sys-color-token-subtle);text-decoration:line-through}.header-highlight.header-overridden{background-color:var(--sys-color-yellow-container);border-left:3px solid var(--sys-color-tertiary);padding-left:5px}.inline-button{vertical-align:middle}.row .inline-button{opacity:0%;visibility:hidden;transition:opacity 200ms;padding-left:2px}.row.header-overridden:focus-within .inline-button,\n.row.header-overridden:hover .inline-button{opacity:100%;visibility:visible}.row:hover .inline-button.enable-editing{opacity:100%;visibility:visible}.flex-right{margin-left:auto}.flex-columns{flex-direction:column}\n/*# sourceURL=HeaderSectionRow.css */\n');const{render:R,html:E}=t,H={activeClientExperimentVariation:"Active `client experiment variation IDs`.",activeClientExperimentVariationIds:"Active `client experiment variation IDs` that trigger server-side behavior.",decoded:"Decoded:",editHeader:"Override header",headerNamesOnlyLetters:"Header names should contain only letters, digits, hyphens or underscores",learnMore:"Learn more",learnMoreInTheIssuesTab:"Learn more in the issues tab",reloadPrompt:"Refresh the page/request for these changes to take effect",removeOverride:"Remove this header override"},q=i.i18n.registerUIStrings("panels/network/components/HeaderSectionRow.ts",H),$=i.i18n.getLocalizedString.bind(void 0,q),C=new URL("../../../Images/bin.svg",import.meta.url).toString(),T=new URL("../../../Images/edit.svg",import.meta.url).toString(),O=e=>/^[a-z0-9_\-]+$/i.test(e),N=(e,t)=>e?.replaceAll(/\s/g," ")===t?.replaceAll(/\s/g," ");class A extends Event{static eventName="headeredited";headerName;headerValue;constructor(e,t){super(A.eventName,{}),this.headerName=e,this.headerValue=t}}class D extends Event{static eventName="headerremoved";headerName;headerValue;constructor(e,t){super(D.eventName,{}),this.headerName=e,this.headerValue=t}}class L extends Event{static eventName="enableheaderediting";constructor(){super(L.eventName,{})}}class I extends HTMLElement{#e=this.attachShadow({mode:"open"});#n=null;#t=this.#r.bind(this);#d=!1;#l=!0;connectedCallback(){this.#e.adoptedStyleSheets=[x]}set data(t){this.#n=t.header,this.#d=void 0!==this.#n.originalValue&&this.#n.value!==this.#n.originalValue,this.#l=O(this.#n.name),e.ScheduledRender.scheduleRender(this,this.#t)}#r(){if(!e.ScheduledRender.isScheduledRender(this))throw new Error("HeaderSectionRow render was not scheduled");if(!this.#n)return;const r=t.Directives.classMap({row:!0,"header-highlight":Boolean(this.#n.highlight),"header-overridden":Boolean(this.#n.isOverride)||this.#d,"header-editable":1===this.#n.valueEditable,"header-deleted":Boolean(this.#n.isDeleted)}),s=t.Directives.classMap({"header-name":!0,"pseudo-header":this.#n.name.startsWith(":")}),a=t.Directives.classMap({"header-value":!0,"header-warning":Boolean(this.#n.headerValueIncorrect),"flex-columns":"x-client-data"===this.#n.name&&!this.#n.isResponseHeader}),n=this.#n.nameEditable&&1===this.#n.valueEditable,d=this.#n.nameEditable||this.#n.isDeleted||this.#d;R(E`
      <div class=${r}>
        <div class=${s}>
          ${this.#n.headerNotSet?E`<div class="header-badge header-badge-text">${i.i18n.lockedString("not-set")}</div> `:t.nothing}
          ${n&&!this.#l?E`<devtools-icon class="inline-icon disallowed-characters" title=${H.headerNamesOnlyLetters} .data=${{iconName:"cross-circle-filled",width:"16px",height:"16px",color:"var(--icon-error)"}}>
            </devtools-icon>`:t.nothing}
          ${n&&!this.#n.isDeleted?E`<devtools-editable-span
              @focusout=${this.#h}
              @keydown=${this.#i}
              @input=${this.#c}
              @paste=${this.#u}
              .data=${{value:this.#n.name}}
            ></devtools-editable-span>`:this.#n.name}:
        </div>
        <div
          class=${a}
          @copy=${()=>o.userMetrics.actionTaken(o.UserMetrics.Action.NetworkPanelCopyValue)}
        >
          ${this.#p()}
        </div>
        ${d?E`<devtools-icon class="row-flex-icon flex-right" title=${H.reloadPrompt} .data=${{iconName:"info",width:"16px",height:"16px",color:"var(--icon-default)"}}>
          </devtools-icon>`:t.nothing}
      </div>
      ${this.#v(this.#n.blockedDetails)}
    `,this.#e,{host:this}),this.#n.highlight&&this.scrollIntoView({behavior:"auto"})}#p(){if(!this.#n)return t.nothing;if("x-client-data"===this.#n.name&&!this.#n.isResponseHeader)return this.#m(this.#n);if(this.#n.isDeleted||1!==this.#n.valueEditable){const e=this.#n.isResponseHeader&&!this.#n.isDeleted&&2!==this.#n.valueEditable;return E`
      ${this.#n.value||""}
      ${this.#g(this.#n)}
      ${e?E`
        <devtools-button
          title=${$(H.editHeader)}
          .size=${"SMALL"}
          .iconUrl=${T}
          .variant=${"icon"}
          @click=${()=>{this.dispatchEvent(new L)}}
          jslog=${r.action("enable-header-overrides").track({click:!0})}
          class="enable-editing inline-button"
        ></devtools-button>
      `:t.nothing}
    `}return E`
      <devtools-editable-span
        @focusout=${this.#f}
        @input=${this.#w}
        @paste=${this.#w}
        @keydown=${this.#i}
        .data=${{value:this.#n.value||""}}
      ></devtools-editable-span>
      ${this.#g(this.#n)}
      <devtools-button
        title=${$(H.removeOverride)}
        .size=${"SMALL"}
        .iconUrl=${C}
        .variant=${"icon"}
        class="remove-header inline-button"
        @click=${this.#y}
        jslog=${r.action("remove-header-override").track({click:!0})}
      ></devtools-button>
    `}#m(e){const t=d.parseClientVariations(e.value||""),r=d.formatClientVariations(t,$(H.activeClientExperimentVariation),$(H.activeClientExperimentVariationIds));return E`
      <div>${e.value||""}</div>
      <div>${$(H.decoded)}</div>
      <code>${r}</code>
    `}focus(){requestAnimationFrame((()=>{const e=this.#e.querySelector(".header-name devtools-editable-span");e?.focus()}))}#g(e){if("set-cookie"===e.name&&e.setCookieBlockedReasons){const t=e.setCookieBlockedReasons.map(n.NetworkRequest.setCookieBlockedReasonToUiString).join("\n");return E`
        <devtools-icon class="row-flex-icon" title=${t} .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
        </devtools-icon>
      `}return t.nothing}#v(e){return e?E`
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation">${e.explanation()}</div>
          ${e.examples.map((e=>E`
            <div class="example">
              <code>${e.codeSnippet}</code>
              ${e.comment?E`
                <span class="comment">${e.comment()}</span>
              `:""}
            </div>
          `))}
          ${this.#b(e)}
        </div>
      </div>
    `:t.nothing}#b(e){return e?.reveal?E`
        <div class="devtools-link" @click=${e.reveal}>
          <devtools-icon class="inline-icon" .data=${{iconName:"issue-exclamation-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
          </devtools-icon
          >${$(H.learnMoreInTheIssuesTab)}
        </div>
      `:e?.link?E`
        <x-link href=${e.link.url} class="link">
          <devtools-icon class="inline-icon" .data=${{iconName:"open-externally",color:"var(--icon-link)",width:"20px",height:"20px"}}>
          </devtools-icon
          >${$(H.learnMore)}
        </x-link>
      `:t.nothing}#f(t){const r=t.target;if(!this.#n)return;const s=r.value.trim();N(s,this.#n.value?.trim())||(this.#n.value=s,this.dispatchEvent(new A(this.#n.name,s)),e.ScheduledRender.scheduleRender(this,this.#t));const o=window.getSelection();o?.removeAllRanges(),this.#n.originalName=""}#h(t){const r=t.target;if(!this.#n)return;const s=a.StringUtilities.toLowerCaseString(r.value.trim());""===s?r.value=this.#n.name:N(s,this.#n.name.trim())||(this.#n.name=s,this.dispatchEvent(new A(s,this.#n.value||"")),e.ScheduledRender.scheduleRender(this,this.#t));const o=window.getSelection();o?.removeAllRanges()}#y(){if(!this.#n)return;const e=this.#e.querySelector(".header-value devtools-editable-span");this.#n.originalValue&&(e.value=this.#n?.originalValue),this.dispatchEvent(new D(this.#n.name,this.#n.value||""))}#i(e){const t=e,r=e.target;if("Escape"===t.key){if(e.consume(),r.matches(".header-name devtools-editable-span"))r.value=this.#n?.name||"",this.#c(e);else if(r.matches(".header-value devtools-editable-span")&&(r.value=this.#n?.value||"",this.#w(e),this.#n?.originalName)){const e=this.#e.querySelector(".header-name devtools-editable-span");return e.value=this.#n.originalName,this.#n.originalName="",e.dispatchEvent(new Event("input")),void e.focus()}r.blur()}}#c(t){const r=t.target,s=O(r.value);this.#l!==s&&(this.#l=s,e.ScheduledRender.scheduleRender(this,this.#t))}#w(t){const r=t.target,s=void 0!==this.#n?.originalValue&&!N(this.#n?.originalValue||"",r.value);this.#d!==s&&(this.#d=s,this.#n&&(this.#n.highlight=!1),e.ScheduledRender.scheduleRender(this,this.#t))}#u(e){if(!e.clipboardData)return;const t=e.target,r=e.clipboardData.getData("text/plain")||"",s=r.indexOf(":");if(s<1)return t.value=r,e.preventDefault(),void t.dispatchEvent(new Event("input",{bubbles:!0}));this.#n&&(this.#n.originalName=this.#n.name);const o=r.substring(s+1,r.length).trim(),i=r.substring(0,s);t.value=i,t.dispatchEvent(new Event("input"));const a=this.#e.querySelector(".header-value devtools-editable-span");a&&(a.focus(),a.value=o,a.dispatchEvent(new Event("input"))),e.preventDefault()}}customElements.define("devtools-header-section-row",I);var U=Object.freeze({__proto__:null,EnableHeaderEditingEvent:L,HeaderEditedEvent:A,HeaderRemovedEvent:D,HeaderSectionRow:I,compareHeaders:N,isValidHeaderName:O});const V=new CSSStyleSheet;V.replaceSync(':host{display:block}devtools-header-section-row:last-of-type{margin-bottom:10px}devtools-header-section-row:first-of-type{margin-top:2px}.call-to-action{background-color:var(--sys-color-neutral-container);padding:8px;border-radius:5px;margin:4px}.call-to-action-body{padding:6px 0;margin-left:9.5px;border-left:2px solid var(--issue-color-yellow);padding-left:18px;line-height:20px}.call-to-action .explanation{font-weight:bold}.call-to-action code{font-size:90%}.call-to-action .example .comment::before{content:" — "}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.explanation .link{font-weight:normal}.inline-icon{vertical-align:middle}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=RequestHeaderSection.css */\n');const{render:F,html:_}=t,M={learnMore:"Learn more",provisionalHeadersAreShownDisableCache:"Provisional headers are shown. Disable cache to see full headers.",onlyProvisionalHeadersAre:"Only provisional headers are available because this request was not sent over the network and instead was served from a local cache, which doesn’t store the original request headers. Disable cache to see full request headers.",provisionalHeadersAreShown:"Provisional headers are shown."},P=i.i18n.registerUIStrings("panels/network/components/RequestHeaderSection.ts",M),j=i.i18n.getLocalizedString.bind(void 0,P);class z extends HTMLElement{#e=this.attachShadow({mode:"open"});#k;#S=[];connectedCallback(){this.#e.adoptedStyleSheets=[V]}set data(e){this.#k=e.request,this.#S=this.#k.requestHeaders().map((e=>({name:a.StringUtilities.toLowerCaseString(e.name),value:e.value,valueEditable:2}))),this.#S.sort(((e,t)=>a.StringUtilities.compare(e.name,t.name))),"Request"===e.toReveal?.section&&this.#S.filter((t=>t.name===e.toReveal?.header?.toLowerCase())).forEach((e=>{e.highlight=!0})),this.#r()}#r(){this.#k&&F(_`
      ${this.#x()}
      ${this.#S.map((e=>_`
        <devtools-header-section-row
          .data=${{header:e}}
          jslog=${r.item("request-header")}
        ></devtools-header-section-row>
      `))}
    `,this.#e,{host:this})}#x(){if(!this.#k||void 0!==this.#k.requestHeadersText())return t.nothing;let e,r="";return this.#k.cachedInMemory()||this.#k.cached()?(e=j(M.provisionalHeadersAreShownDisableCache),r=j(M.onlyProvisionalHeadersAre)):e=j(M.provisionalHeadersAreShown),_`
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation" title=${r}>
            <devtools-icon class="inline-icon" .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
            </devtools-icon>
            ${e} <x-link href="https://developer.chrome.com/docs/devtools/network/reference/#provisional-headers" class="link">${j(M.learnMore)}</x-link>
          </div>
        </div>
      </div>
    `}}customElements.define("devtools-request-header-section",z);var W=Object.freeze({__proto__:null,RequestHeaderSection:z});const B=new CSSStyleSheet;B.replaceSync('.header{background-color:var(--sys-color-surface1);border-bottom:1px solid var(--sys-color-divider);border-top:1px solid var(--sys-color-divider);line-height:25px;padding:0 5px}.header::marker{font-size:11px;line-height:1}.header:focus{background-color:var(--sys-color-state-header-hover)}details[open] .header-count{display:none}details .hide-when-closed{display:none}details[open] .hide-when-closed{display:block}details summary input{vertical-align:middle}.row{display:flex;line-height:20px;padding-left:8px;gap:12px;user-select:text}div.raw-headers-row{display:block}.row:first-of-type{margin-top:2px}.row:last-child{margin-bottom:10px}.header-name{color:var(--sys-color-on-surface);font-weight:400;width:30%;min-width:160px;max-width:240px;flex-shrink:0;text-transform:capitalize}.header-value{word-break:break-all;display:flex;align-items:center;gap:2px}.header-name,\n.header-value{&::selection{color:var(--sys-color-on-tonal-container);background-color:var(--sys-color-tonal-container)}}.green-circle::before,\n.red-circle::before,\n.yellow-circle::before{content:"";display:inline-block;width:12px;height:12px;border-radius:6px;vertical-align:text-top;margin-right:2px}.green-circle::before{background-color:var(--sys-color-green-bright)}.red-circle::before{background-color:var(--sys-color-error-bright)}.yellow-circle::before{background-color:var(--issue-color-yellow)}.status-with-comment{color:var(--sys-color-token-subtle)}.raw-headers{font-family:var(--source-code-font-family);font-size:var(--source-code-font-size);white-space:pre-wrap;word-break:break-all}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.inline-icon{vertical-align:middle}.header-grid-container{display:inline-grid;grid-template-columns:156px 50px 1fr;grid-gap:4px;width:calc(100% - 15px)}.header-grid-container div:last-child{text-align:right}.header .devtools-link{color:var(--sys-color-on-surface)}x-link{position:relative}x-link .inline-icon{padding-right:3px}.purple.dot::before{background-color:var(--sys-color-purple-bright);content:var(--image-file-empty);width:6px;height:6px;border-radius:50%;outline:1px solid var(--icon-gap-toolbar);left:9px;position:absolute;top:11px;z-index:1}summary label{display:inline-flex;align-items:center;vertical-align:middle;gap:var(--sys-size-3)}summary label input[type="checkbox"]{margin-top:1px}\n/*# sourceURL=RequestHeadersView.css */\n');const G=new CSSStyleSheet;G.replaceSync(":host{display:block}devtools-header-section-row:last-of-type{margin-bottom:10px}devtools-header-section-row:first-of-type{margin-top:2px}.add-header-button{margin:-4px 0 10px 5px}\n/*# sourceURL=ResponseHeaderSection.css */\n");const{render:K,html:Y}=t,J={addHeader:"Add header",chooseThisOptionIfTheResourceAnd:"Choose this option if the resource and the document are served from the same site.",onlyChooseThisOptionIfAn:"Only choose this option if an arbitrary website including this resource does not impose a security risk.",thisDocumentWasBlockedFrom:"The document was blocked from loading in a popup opened by a sandboxed iframe because this document specified a cross-origin opener policy.",toEmbedThisFrameInYourDocument:"To embed this frame in your document, the response needs to enable the cross-origin embedder policy by specifying the following response header:",toUseThisResourceFromADifferent:"To use this resource from a different origin, the server needs to specify a cross-origin resource policy in the response headers:",toUseThisResourceFromADifferentOrigin:"To use this resource from a different origin, the server may relax the cross-origin resource policy response header:",toUseThisResourceFromADifferentSite:"To use this resource from a different site, the server may relax the cross-origin resource policy response header:"},Q=i.i18n.registerUIStrings("panels/network/components/ResponseHeaderSection.ts",J),X=i.i18n.getLocalizedString.bind(void 0,Q),Z=i.i18n.getLazilyComputedLocalizedString.bind(void 0,Q),ee=new URL("../../../Images/plus.svg",import.meta.url).toString(),te="ResponseHeaderSection";class re extends HTMLElement{shadow=this.attachShadow({mode:"open"});headerDetails=[];connectedCallback(){this.shadow.adoptedStyleSheets=[G]}setHeaders(e){e.sort((function(e,t){return a.StringUtilities.compare(e.name.toLowerCase(),t.name.toLowerCase())})),this.headerDetails=e.map((e=>({name:a.StringUtilities.toLowerCaseString(e.name),value:e.value.replace(/\s/g," ")})))}highlightHeaders(e){"Response"===e.toReveal?.section&&this.headerDetails.filter((t=>N(t.name,e.toReveal?.header?.toLowerCase()))).forEach((e=>{e.highlight=!0}))}}class se extends re{#k;set data(e){this.#k=e.request,this.setHeaders(this.#k.earlyHintsHeaders),this.highlightHeaders(e),this.#r()}#r(){this.#k&&K(Y`
      ${this.headerDetails.map((e=>Y`
        <devtools-header-section-row .data=${{header:e}}></devtools-header-section-row>
      `))}
    `,this.shadow,{host:this})}}customElements.define("devtools-early-hints-header-section",se);class oe extends re{#k;#R=[];#E=null;#H=[];#q=0;set data(e){this.#k=e.request,this.#q=h.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl(this.#k.url())?2:0;const t=this.#k.sortedResponseHeaders.concat(this.#k.setCookieHeaders);this.setHeaders(t);const r=[];if(this.#k.wasBlocked()){const e=ie.get(this.#k.blockedReason());if(e){if(g.RelatedIssue.hasIssueOfCategory(this.#k,"CrossOriginEmbedderPolicy")){const t=()=>{o.userMetrics.issuesPanelOpenedFrom(1),this.#k&&g.RelatedIssue.reveal(this.#k,"CrossOriginEmbedderPolicy")};e.blockedDetails&&(e.blockedDetails.reveal=t)}r.push(e)}}this.headerDetails=function(e,t){let r=0,s=0;const o=[];for(;r<e.length&&s<t.length;)e[r].name<t[s].name?o.push({...e[r++],headerNotSet:!1}):e[r].name>t[s].name?o.push({...t[s++],headerNotSet:!0}):o.push({...t[s++],...e[r++],headerNotSet:!1});for(;r<e.length;)o.push({...e[r++],headerNotSet:!1});for(;s<t.length;)o.push({...t[s++],headerNotSet:!0});return o}(this.headerDetails,r);const s=this.#k.blockedResponseCookies(),i=new Map(s?.map((e=>[e.cookieLine.replace(/\s/g," "),e.blockedReasons])));for(const e of this.headerDetails)if("set-cookie"===e.name&&e.value){const t=i.get(e.value);t&&(e.setCookieBlockedReasons=t)}this.highlightHeaders(e);const a=this.#k.getAssociatedData(te);a?this.#R=a:(this.#R=this.headerDetails.map((e=>({name:e.name,value:e.value,originalValue:e.value,valueEditable:this.#q}))),this.#$()),this.#C(),this.#k.setAssociatedData(te,this.#R),this.#r()}#T(){this.#k&&(this.#q=h.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl(this.#k.url())?2:0,this.#R=this.headerDetails.map((e=>({name:e.name,value:e.value,originalValue:e.value,valueEditable:this.#q}))),this.#$(),this.#k.setAssociatedData(te,this.#R))}async#C(){if(this.#k){if(this.#E=h.NetworkPersistenceManager.NetworkPersistenceManager.instance().getHeadersUISourceCodeFromUrl(this.#k.url()),!this.#E)return this.#T(),void this.#r();try{const e=await this.#E.requestContent();if(this.#H=JSON.parse(e.content||"[]"),!this.#H.every(h.NetworkPersistenceManager.isHeaderOverride))throw"Type mismatch after parsing";l.Settings.Settings.instance().moduleSetting("persistence-network-overrides-enabled").get()&&0===this.#q&&(this.#q=1);for(const e of this.#R)e.valueEditable=this.#q}catch(e){console.error("Failed to parse",this.#E?.url()||"source code file","for locally overriding headers."),this.#T()}finally{this.#r()}}}#$(){if(!this.#k||0===this.#k.originalResponseHeaders.length)return;const e=this.#k.originalResponseHeaders.map((e=>({name:a.StringUtilities.toLowerCaseString(e.name),value:e.value.replace(/\s/g," ")})));e.sort((function(e,t){return a.StringUtilities.compare(e.name,t.name)}));let t=0,r=0;for(;t<this.headerDetails.length;){const s=this.headerDetails[t].name;let o=this.headerDetails[t].value||"";const i=this.headerDetails[t].headerNotSet;for(;t<this.headerDetails.length-1&&this.headerDetails[t+1].name===s;)t++,o+=`, ${this.headerDetails[t].value}`;for(;r<e.length&&e[r].name<s;)r++;if(r<e.length&&e[r].name===s){let t=e[r].value;for(;r<e.length-1&&e[r+1].name===s;)r++,t+=`, ${e[r].value}`;r++,"set-cookie"===s||i||N(o,t)||this.#R.filter((e=>N(e.name,s))).forEach((e=>{e.isOverride=!0}))}else"set-cookie"===s||i||this.#R.filter((e=>N(e.name,s))).forEach((e=>{e.isOverride=!0}));t++}this.#R.filter((e=>"set-cookie"===e.name)).forEach((e=>{void 0===this.#k?.originalResponseHeaders.find((t=>"set-cookie"===a.StringUtilities.toLowerCaseString(t.name)&&N(t.value,e.value)))&&(e.isOverride=!0)}))}#O(e){const t=e.target;if(void 0===t.dataset.index)return;const r=Number(t.dataset.index);O(e.headerName)&&(this.#N(e.headerName,e.headerValue,r),o.userMetrics.actionTaken(o.UserMetrics.Action.HeaderOverrideHeaderEdited))}#A(e){const t=h.NetworkPersistenceManager.NetworkPersistenceManager.instance().rawPathFromUrl(e,!0),r=t.lastIndexOf("/");return l.ParsedURL.ParsedURL.substring(t,r+1)}#D(){this.#E?.setWorkingCopy(JSON.stringify(this.#H,null,2)),this.#E?.commitWorkingCopy()}#L(e,t,r){for(let s=this.#H.length-1;s>=0;s--){const o=this.#H[s];if(o.applyTo!==e)continue;const i=o.headers.findIndex((e=>N(e.name,t)&&N(e.value,r)));if(!(i<0))return o.headers.splice(i,1),void(0===o.headers.length&&this.#H.splice(s,1))}}#I(e){const t=e.target;if(void 0===t.dataset.index||!this.#k)return;const r=Number(t.dataset.index),s=this.#A(this.#k.url());this.#L(s,e.headerName,e.headerValue),this.#D(),this.#R[r].isDeleted=!0,this.#r(),o.userMetrics.actionTaken(o.UserMetrics.Action.HeaderOverrideHeaderRemoved)}#N(e,t,r){if(!this.#k)return;0===this.#k.originalResponseHeaders.length&&(this.#k.originalResponseHeaders=this.#k.sortedResponseHeaders.map((e=>({...e}))));const s=this.#R[r].name,o=this.#R[r].value;this.#R[r].name=e,this.#R[r].value=t;let i=[];"set-cookie"===e?i.push({name:e,value:t,valueEditable:this.#q}):i=this.#R.filter((t=>N(t.name,e)&&(!N(t.value,t.originalValue)||t.isOverride)));const a=this.#A(this.#k.url());let n=null;const[d]=this.#H.slice(-1);if(d?.applyTo===a?n=d:(n={applyTo:a,headers:[]},this.#H.push(n)),"set-cookie"===e){const e=n.headers.findIndex((e=>N(e.name,s)&&N(e.value,o)));e>=0&&n.headers.splice(e,1)}else n.headers=n.headers.filter((t=>!N(t.name,e)));if(!N(this.#R[r].name,s))for(let e=0;e<n.headers.length;++e)if(N(n.headers[e].name,s)&&N(n.headers[e].value,o)){n.headers.splice(e,1);break}for(const e of i)n.headers.push({name:e.name,value:e.value||""});0===n.headers.length&&this.#H.pop(),this.#D()}#U(){this.#R.push({name:a.StringUtilities.toLowerCaseString(i.i18n.lockedString("header-name")),value:i.i18n.lockedString("header value"),isOverride:!0,nameEditable:!0,valueEditable:1});const e=this.#R.length-1;this.#N(this.#R[e].name,this.#R[e].value||"",e),this.#r();const t=this.shadow.querySelectorAll("devtools-header-section-row"),[r]=Array.from(t).slice(-1);r?.focus(),o.userMetrics.actionTaken(o.UserMetrics.Action.HeaderOverrideHeaderAdded)}#r(){if(!this.#k)return;const e=this.#R.map(((e,t)=>({...this.headerDetails[t],...e,isResponseHeader:!0})));K(Y`
      ${e.map(((e,t)=>Y`
        <devtools-header-section-row
            .data=${{header:e}}
            @headeredited=${this.#O}
            @headerremoved=${this.#I}
            @enableheaderediting=${this.#V}
            data-index=${t}
            jslog=${r.item("response-header")}
        ></devtools-header-section-row>
      `))}
      ${1===this.#q?Y`
        <devtools-button
          class="add-header-button"
          .variant=${"outlined"}
          .iconUrl=${ee}
          @click=${this.#U}
          jslog=${r.action("add-header").track({click:!0})}>
          ${X(J.addHeader)}
        </devtools-button>
      `:t.nothing}
    `,this.shadow,{host:this})}async#V(){if(!this.#k)return;o.userMetrics.actionTaken(o.UserMetrics.Action.HeaderOverrideEnableEditingClicked);const e=this.#k.url(),t=h.NetworkPersistenceManager.NetworkPersistenceManager.instance();t.project()?(l.Settings.Settings.instance().moduleSetting("persistence-network-overrides-enabled").set(!0),await t.getOrCreateHeadersUISourceCodeFromUrl(e)):s.InspectorView.InspectorView.instance().displaySelectOverrideFolderInfobar((async()=>{await m.SourcesNavigator.OverridesNavigatorView.instance().setupNewWorkspace(),await t.getOrCreateHeadersUISourceCodeFromUrl(e)}))}}customElements.define("devtools-response-header-section",oe);const ie=new Map([["coep-frame-resource-needs-coep-header",{name:a.StringUtilities.toLowerCaseString("cross-origin-embedder-policy"),value:null,blockedDetails:{explanation:Z(J.toEmbedThisFrameInYourDocument),examples:[{codeSnippet:"Cross-Origin-Embedder-Policy: require-corp",comment:void 0}],link:{url:"https://web.dev/coop-coep/"}}}],["corp-not-same-origin-after-defaulted-to-same-origin-by-coep",{name:a.StringUtilities.toLowerCaseString("cross-origin-resource-policy"),value:null,blockedDetails:{explanation:Z(J.toUseThisResourceFromADifferent),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: same-site",comment:Z(J.chooseThisOptionIfTheResourceAnd)},{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:Z(J.onlyChooseThisOptionIfAn)}],link:{url:"https://web.dev/coop-coep/"}}}],["coop-sandboxed-iframe-cannot-navigate-to-coop-page",{name:a.StringUtilities.toLowerCaseString("cross-origin-opener-policy"),value:null,headerValueIncorrect:!1,blockedDetails:{explanation:Z(J.thisDocumentWasBlockedFrom),examples:[],link:{url:"https://web.dev/coop-coep/"}}}],["corp-not-same-site",{name:a.StringUtilities.toLowerCaseString("cross-origin-resource-policy"),value:null,headerValueIncorrect:!0,blockedDetails:{explanation:Z(J.toUseThisResourceFromADifferentSite),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:Z(J.onlyChooseThisOptionIfAn)}],link:null}}],["corp-not-same-origin",{name:a.StringUtilities.toLowerCaseString("cross-origin-resource-policy"),value:null,headerValueIncorrect:!0,blockedDetails:{explanation:Z(J.toUseThisResourceFromADifferentOrigin),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: same-site",comment:Z(J.chooseThisOptionIfTheResourceAnd)},{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:Z(J.onlyChooseThisOptionIfAn)}],link:null}}]]);var ae=Object.freeze({__proto__:null,EarlyHintsHeaderSection:se,RESPONSE_HEADER_SECTION_DATA_KEY:te,ResponseHeaderSection:oe});const{render:ne,html:de}=t,le={fromDiskCache:"(from disk cache)",fromMemoryCache:"(from memory cache)",fromEarlyHints:"(from early hints)",fromPrefetchCache:"(from prefetch cache)",fromServiceWorker:"(from `service worker`)",fromSignedexchange:"(from signed-exchange)",fromWebBundle:"(from Web Bundle)",general:"General",raw:"Raw",referrerPolicy:"Referrer Policy",remoteAddress:"Remote Address",requestHeaders:"Request Headers",requestMethod:"Request Method",requestUrl:"Request URL",responseHeaders:"Response Headers",earlyHintsHeaders:"Early Hints Headers",revealHeaderOverrides:"Reveal header override definitions",showMore:"Show more",statusCode:"Status Code"},he=i.i18n.registerUIStrings("panels/network/components/RequestHeadersView.ts",le),ce=i.i18n.getLocalizedString.bind(void 0,he),ue=v.RenderCoordinator.RenderCoordinator.instance();class pe extends p.LegacyWrapper.WrappableComponent{#k;#e=this.attachShadow({mode:"open"});#F=!1;#_=!1;#M=!1;#P=!1;#j=void 0;#z=c.Workspace.WorkspaceImpl.instance();constructor(e){super(),this.#k=e,this.setAttribute("jslog",`${r.pane("headers").track({resize:!0})}`)}wasShown(){this.#k.addEventListener(n.NetworkRequest.Events.REMOTE_ADDRESS_CHANGED,this.#W,this),this.#k.addEventListener(n.NetworkRequest.Events.FINISHED_LOADING,this.#W,this),this.#k.addEventListener(n.NetworkRequest.Events.REQUEST_HEADERS_CHANGED,this.#W,this),this.#k.addEventListener(n.NetworkRequest.Events.RESPONSE_HEADERS_CHANGED,this.#B,this),this.#j=void 0,this.#W()}willHide(){this.#k.removeEventListener(n.NetworkRequest.Events.REMOTE_ADDRESS_CHANGED,this.#W,this),this.#k.removeEventListener(n.NetworkRequest.Events.FINISHED_LOADING,this.#W,this),this.#k.removeEventListener(n.NetworkRequest.Events.REQUEST_HEADERS_CHANGED,this.#W,this),this.#k.removeEventListener(n.NetworkRequest.Events.RESPONSE_HEADERS_CHANGED,this.#B,this)}#B(){this.#k.deleteAssociatedData(te),this.render()}#W(){this.render()}revealHeader(e,t){this.#j={section:e,header:t},this.render()}connectedCallback(){this.#e.adoptedStyleSheets=[B],this.#z.addEventListener(c.Workspace.Events.UISourceCodeAdded,this.#G,this),this.#z.addEventListener(c.Workspace.Events.UISourceCodeRemoved,this.#G,this),l.Settings.Settings.instance().moduleSetting("persistence-network-overrides-enabled").addChangeListener(this.render,this)}disconnectedCallback(){this.#z.removeEventListener(c.Workspace.Events.UISourceCodeAdded,this.#G,this),this.#z.removeEventListener(c.Workspace.Events.UISourceCodeRemoved,this.#G,this),l.Settings.Settings.instance().moduleSetting("persistence-network-overrides-enabled").removeChangeListener(this.render,this)}#G(e){this.#K()===e.data.url()&&this.render()}async render(){if(this.#k)return ue.write((()=>{ne(de`
        ${this.#Y()}
        ${this.#J()}
        ${this.#Q()}
        ${this.#X()}
      `,this.#e,{host:this})}))}#J(){if(!this.#k||!this.#k.earlyHintsHeaders||0===this.#k.earlyHintsHeaders.length)return t.nothing;return de`
      <devtools-request-headers-category
        @togglerawevent=${()=>{this.#F=!this.#F,this.render()}}
        .data=${{name:"early-hints-headers",title:ce(le.earlyHintsHeaders),headerCount:this.#k.earlyHintsHeaders.length,checked:void 0,additionalContent:void 0,forceOpen:"EarlyHints"===this.#j?.section,loggingContext:"early-hints-headers"}}
        aria-label=${ce(le.earlyHintsHeaders)}
      >
        ${this.#F?this.#Z(this.#k.responseHeadersText,!0):de`
          <devtools-early-hints-header-section .data=${{request:this.#k,toReveal:this.#j}}></devtools-early-hints-header-section>
        `}
      </devtools-request-headers-category>
    `}#Q(){if(!this.#k)return t.nothing;return de`
      <devtools-request-headers-category
        @togglerawevent=${()=>{this.#F=!this.#F,this.render()}}
        .data=${{name:"response-headers",title:ce(le.responseHeaders),headerCount:this.#k.sortedResponseHeaders.length,checked:this.#k.responseHeadersText?this.#F:void 0,additionalContent:this.#ee(),forceOpen:"Response"===this.#j?.section,loggingContext:"response-headers"}}
        aria-label=${ce(le.responseHeaders)}
      >
        ${this.#F?this.#Z(this.#k.responseHeadersText,!0):de`
          <devtools-response-header-section .data=${{request:this.#k,toReveal:this.#j}} jslog=${r.section("response-headers")}></devtools-response-header-section>
        `}
      </devtools-request-headers-category>
    `}#ee(){if(!this.#z.uiSourceCodeForURL(this.#K()))return t.nothing;const e=l.Settings.Settings.instance().moduleSetting("persistence-network-overrides-enabled"),s=de`
      <devtools-icon class=${e.get()?"inline-icon dot purple":"inline-icon"} .data=${{iconName:"document",width:"16px",height:"16px"}}>
      </devtools-icon>`;return de`
      <x-link
          href="https://goo.gle/devtools-override"
          class="link devtools-link"
          jslog=${r.link("devtools-override").track({click:!0})}
      >
        <devtools-icon class="inline-icon" .data=${{iconName:"help",width:"16px",height:"16px"}}>
        </devtools-icon
      ></x-link>
      <x-link
          @click=${e=>{e.preventDefault();const t=this.#z.uiSourceCodeForURL(this.#K());t&&(m.SourcesPanel.SourcesPanel.instance().showUISourceCode(t),m.SourcesPanel.SourcesPanel.instance().revealInNavigator(t))}}
          class="link devtools-link"
          title=${le.revealHeaderOverrides}
          jslog=${r.link("reveal-header-overrides").track({click:!0})}
      >
        ${s}${h.NetworkPersistenceManager.HEADERS_FILENAME}
      </x-link>
    `}#K(){if(!this.#k)return a.DevToolsPath.EmptyUrlString;const e=h.NetworkPersistenceManager.NetworkPersistenceManager.instance().fileUrlFromNetworkUrl(this.#k.url(),!0);return e.substring(0,e.lastIndexOf("/"))+"/"+h.NetworkPersistenceManager.HEADERS_FILENAME}#X(){if(!this.#k)return t.nothing;const e=this.#k.requestHeadersText();return de`
      <devtools-request-headers-category
        @togglerawevent=${()=>{this.#_=!this.#_,this.render()}}
        .data=${{name:"request-headers",title:ce(le.requestHeaders),headerCount:this.#k.requestHeaders().length,checked:e?this.#_:void 0,forceOpen:"Request"===this.#j?.section,loggingContext:"request-headers"}}
        aria-label=${ce(le.requestHeaders)}
      >
        ${this.#_&&e?this.#Z(e,!1):de`
          <devtools-request-header-section .data=${{request:this.#k,toReveal:this.#j}} jslog=${r.section("request-headers")}></devtools-request-header-section>
        `}
      </devtools-request-headers-category>
    `}#Z(o,i){const a=o.trim(),n=!(i?this.#M:this.#P)&&a.length>3e3,d=()=>{i?this.#M=!0:this.#P=!0,this.render()},l=e=>{if(!(i?this.#M:this.#P)){const t=new s.ContextMenu.ContextMenu(e);t.newSection().appendItem(ce(le.showMore),d,{jslogContext:"show-more"}),t.show()}};return de`
      <div class="row raw-headers-row" on-render=${e.Directives.nodeRenderedCallback((e=>{n&&e.addEventListener("contextmenu",l)}))}>
        <div class="raw-headers">${n?a.substring(0,3e3):a}</div>
        ${n?de`
          <devtools-button
            .size=${"SMALL"}
            .variant=${"outlined"}
            @click=${d}
            jslog=${r.action("raw-headers-show-more").track({click:!0})}
          >${ce(le.showMore)}</devtools-button>
        `:t.nothing}
      </div>
    `}#Y(){if(!this.#k)return t.nothing;const e=["status"];this.#k.statusCode<300||304===this.#k.statusCode?e.push("green-circle"):this.#k.statusCode<400?e.push("yellow-circle"):e.push("red-circle");let s="";this.#k.cachedInMemory()?s=ce(le.fromMemoryCache):this.#k.fromEarlyHints()?s=ce(le.fromEarlyHints):this.#k.fetchedViaServiceWorker?s=ce(le.fromServiceWorker):this.#k.redirectSourceSignedExchangeInfoHasNoErrors()?s=ce(le.fromSignedexchange):this.#k.webBundleInnerRequestInfo()?s=ce(le.fromWebBundle):this.#k.fromPrefetchCache()?s=ce(le.fromPrefetchCache):this.#k.cached()&&(s=ce(le.fromDiskCache)),s&&e.push("status-with-comment");const o=[this.#k.statusCode,this.#k.getInferredStatusText(),s].join(" ");return de`
      <devtools-request-headers-category
        .data=${{name:"general",title:ce(le.general),forceOpen:"General"===this.#j?.section,loggingContext:"general"}}
        aria-label=${ce(le.general)}
      >
      <div jslog=${r.section("general")}>
        ${this.#te(ce(le.requestUrl),this.#k.url())}
        ${this.#k.statusCode?this.#te(ce(le.requestMethod),this.#k.requestMethod):t.nothing}
        ${this.#k.statusCode?this.#te(ce(le.statusCode),o,e):t.nothing}
        ${this.#k.remoteAddress()?this.#te(ce(le.remoteAddress),this.#k.remoteAddress()):t.nothing}
        ${this.#k.referrerPolicy()?this.#te(ce(le.referrerPolicy),String(this.#k.referrerPolicy())):t.nothing}
      </div>
      </devtools-request-headers-category>
    `}#te(e,t,r){const s="General"===this.#j?.section&&e.toLowerCase()===this.#j?.header?.toLowerCase();return de`
      <div class="row ${s?"header-highlight":""}">
        <div class="header-name">${e}:</div>
        <div
          class="header-value ${r?.join(" ")}"
          @copy=${()=>o.userMetrics.actionTaken(o.UserMetrics.Action.NetworkPanelCopyValue)}
        >${t}</div>
      </div>
    `}}class ve extends Event{static eventName="togglerawevent";constructor(){super(ve.eventName,{})}}class me extends HTMLElement{#e=this.attachShadow({mode:"open"});#re;#se=l.UIString.LocalizedEmptyString;#oe=void 0;#ie=void 0;#ae=void 0;#ne=void 0;#de="";connectedCallback(){this.#e.adoptedStyleSheets=[B,u.checkboxStyles]}set data(e){this.#se=e.title,this.#re=l.Settings.Settings.instance().createSetting("request-info-"+e.name+"-category-expanded",!0),this.#oe=e.headerCount,this.#ie=e.checked,this.#ae=e.additionalContent,this.#ne=e.forceOpen,this.#de=e.loggingContext,this.#r()}#le(){this.dispatchEvent(new ve)}#r(){const e=!this.#re||this.#re.get()||this.#ne;ne(de`
      <details ?open=${e} @toggle=${this.#he}>
        <summary
          class="header"
          @keydown=${this.#ce}
          jslog=${r.sectionHeader().track({click:!0}).context(this.#de)}
        >
          <div class="header-grid-container">
            <div>
              ${this.#se}${void 0!==this.#oe?de`<span class="header-count"> (${this.#oe})</span>`:t.nothing}
            </div>
            <div class="hide-when-closed">
              ${void 0!==this.#ie?de`
                <label><input
                    type="checkbox"
                    .checked=${this.#ie}
                    @change=${this.#le}
                    jslog=${r.toggle("raw-headers").track({change:!0})}
                />${ce(le.raw)}</label>
              `:t.nothing}
            </div>
            <div class="hide-when-closed">${this.#ae}</div>
          </div>
        </summary>
        <slot></slot>
      </details>
    `,this.#e,{host:this})}#ce(e){if(!e.target)return;const t=e.target.parentElement;if(!t)throw new Error("<details> element is not found for a <summary> element");switch(e.key){case"ArrowLeft":t.open=!1;break;case"ArrowRight":t.open=!0}}#he(e){this.#re?.set(e.target.open)}}customElements.define("devtools-request-headers",pe),customElements.define("devtools-request-headers-category",me);var ge=Object.freeze({__proto__:null,Category:me,RequestHeadersView:pe,ToggleRawHeadersEvent:ve});const fe=new CSSStyleSheet;fe.replaceSync(".code{font-family:var(--monospace-font-family);font-size:var(--monospace-font-size)}.issuers-list{display:flex;flex-direction:column;list-style-type:none;padding:0;margin:0}.status-icon{margin:0 0.3em 2px 0;vertical-align:middle}\n/*# sourceURL=RequestTrustTokensView.css */\n");const{html:we}=t,ye={parameters:"Parameters",type:"Type",refreshPolicy:"Refresh policy",issuers:"Issuers",topLevelOrigin:"Top level origin",issuer:"Issuer",result:"Result",status:"Status",numberOfIssuedTokens:"Number of issued tokens",success:"Success",failure:"Failure",theOperationsResultWasServedFrom:"The operations result was served from cache.",theOperationWasFulfilledLocally:"The operation was fulfilled locally, no request was sent.",theKeysForThisPSTIssuerAreUnavailable:"The keys for this PST issuer are unavailable. The issuer may need to be registered via the Chrome registration process.",aClientprovidedArgumentWas:"A client-provided argument was malformed or otherwise invalid.",eitherNoInputsForThisOperation:"Either no inputs for this operation are available or the output exceeds the operations quota.",theServersResponseWasMalformedOr:"The servers response was malformed or otherwise invalid.",theOperationFailedForAnUnknown:"The operation failed for an unknown reason."},be=i.i18n.registerUIStrings("panels/network/components/RequestTrustTokensView.ts",ye),ke=i.i18n.getLocalizedString.bind(void 0,be);class Se extends p.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#k;constructor(e){super(),this.#k=e}wasShown(){this.#k.addEventListener(n.NetworkRequest.Events.TRUST_TOKEN_RESULT_ADDED,this.render,this),this.render()}willHide(){this.#k.removeEventListener(n.NetworkRequest.Events.TRUST_TOKEN_RESULT_ADDED,this.render,this)}connectedCallback(){this.#e.adoptedStyleSheets=[fe]}async render(){if(!this.#k)throw new Error("Trying to render a Trust Token report without providing data");t.render(we`<devtools-report>
        ${this.#ue()}
        ${this.#pe()}
      </devtools-report>
    `,this.#e,{host:this})}#ue(){const e=this.#k.trustTokenParams();return e?we`
      <devtools-report-section-header jslog=${r.pane("trust-tokens").track({resize:!0})}>${ke(ye.parameters)}</devtools-report-section-header>
      ${qe(ke(ye.type),e.operation.toString())}
      ${this.#ve(e)}
      ${this.#me(e)}
      ${this.#ge()}
      <devtools-report-divider></devtools-report-divider>
    `:t.nothing}#ve(e){return"Redemption"!==e.operation?t.nothing:qe(ke(ye.refreshPolicy),e.refreshPolicy.toString())}#me(e){return e.issuers&&0!==e.issuers.length?we`
      <devtools-report-key>${ke(ye.issuers)}</devtools-report-key>
      <devtools-report-value>
        <ul class="issuers-list">
          ${e.issuers.map((e=>we`<li>${e}</li>`))}
        </ul>
      </devtools-report-value>
    `:t.nothing}#ge(){const e=this.#k.trustTokenOperationDoneEvent();return e?we`
      ${He(ke(ye.topLevelOrigin),e.topLevelOrigin)}
      ${He(ke(ye.issuer),e.issuerOrigin)}`:t.nothing}#pe(){const e=this.#k.trustTokenOperationDoneEvent();return e?we`
      <devtools-report-section-header>${ke(ye.result)}</devtools-report-section-header>
      <devtools-report-key>${ke(ye.status)}</devtools-report-key>
      <devtools-report-value>
        <span>
          <devtools-icon class="status-icon"
            .data=${r=e.status,Ee(r)?xe:Re}>
          </devtools-icon>
          <strong>${function(e){return Ee(e)?ke(ye.success):ke(ye.failure)}(e.status)}</strong>
          ${function(e){switch(e){case"Ok":return null;case"AlreadyExists":return ke(ye.theOperationsResultWasServedFrom);case"FulfilledLocally":return ke(ye.theOperationWasFulfilledLocally);case"InvalidArgument":return ke(ye.aClientprovidedArgumentWas);case"ResourceExhausted":return ke(ye.eitherNoInputsForThisOperation);case"BadResponse":return ke(ye.theServersResponseWasMalformedOr);case"MissingIssuerKeys":return ke(ye.theKeysForThisPSTIssuerAreUnavailable);case"FailedPrecondition":case"ResourceLimited":case"InternalError":case"Unauthorized":case"UnknownError":return ke(ye.theOperationFailedForAnUnknown)}}(e.status)}
        </span>
      </devtools-report-value>
      ${this.#fe(e)}
      <devtools-report-divider></devtools-report-divider>
      `:t.nothing;var r}#fe(e){return"Issuance"!==e.type?t.nothing:He(ke(ye.numberOfIssuedTokens),e.issuedTokenCount)}}const xe={color:"var(--icon-checkmark-green)",iconName:"check-circle",width:"16px",height:"16px"},Re={color:"var(--icon-error)",iconName:"cross-circle-filled",width:"16px",height:"16px"};function Ee(e){return"Ok"===e||"AlreadyExists"===e||"FulfilledLocally"===e}function He(e,r){return void 0===r?t.nothing:we`
    <devtools-report-key>${e}</devtools-report-key>
    <devtools-report-value>${r}</devtools-report-value>
  `}function qe(e,t){return we`
    <devtools-report-key>${e}</devtools-report-key>
    <devtools-report-value class="code">${t}</devtools-report-value>
  `}customElements.define("devtools-trust-token-report",Se);var $e=Object.freeze({__proto__:null,RequestTrustTokensView:Se,statusConsideredSuccess:Ee});const Ce=new CSSStyleSheet;Ce.replaceSync(":host{--icon-padding:4px}.header{display:flex;font-weight:bold;padding:calc(2 * var(--icon-padding)) var(--icon-padding);line-height:20px}.icon{margin:0 var(--icon-padding)}\n/*# sourceURL=WebBundleInfoView.css */\n");const{render:Te,html:Oe}=t,Ne={bundledResource:"Bundled resource"},Ae=i.i18n.registerUIStrings("panels/network/components/WebBundleInfoView.ts",Ne),De=i.i18n.getLocalizedString.bind(void 0,Ae);class Le extends p.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#we;#ye;constructor(e){super();const t=e.webBundleInfo();if(!t)throw new Error("Trying to render a Web Bundle info without providing data");this.#we=t,this.#ye=e.parsedURL.lastPathComponent,this.setAttribute("jslog",`${r.pane("webbundle").track({resize:!0})}`)}connectedCallback(){this.#e.adoptedStyleSheets=[Ce]}async render(){const e=this.#we.resourceUrls?.map((e=>{const t=l.ResourceType.ResourceType.mimeFromURL(e)||null,r=l.ResourceType.ResourceType.fromMimeTypeOverride(t)||l.ResourceType.ResourceType.fromMimeType(t),s=f.iconDataForResourceType(r);return{cells:[{columnId:"url",value:null,renderer:()=>Oe`
                <div style="display: flex;">
                  <devtools-icon class="icon"
                    .data=${{...s,width:"20px"}}>
                  </devtools-icon>
                  <span>${e}</span>
                </div>`}]}}));Te(Oe`
      <div class="header">
        <devtools-icon class="icon"
          .data=${{color:"var(--icon-default)",iconName:"bundle",width:"20px"}}>
        </devtools-icon>
        <span>${this.#ye}</span>
        <x-link href="https://web.dev/web-bundles/#explaining-web-bundles"
          jslog=${r.link("webbundle-explainer").track({click:!0})}>
          <devtools-icon class="icon"
            .data=${{color:"var(--icon-default)",iconName:"help",width:"16px"}}>
          </devtools-icon>
        </x-link>
      </div>
      <div>
        <devtools-data-grid
          .data=${{columns:[{id:"url",title:De(Ne.bundledResource),widthWeighting:1,visible:!0,hideable:!1}],rows:e,activeSort:null}}>
        </devtools-data-grid>
      </div>`,this.#e,{host:this})}}customElements.define("devtools-web-bundle-info",Le);var Ie=Object.freeze({__proto__:null,WebBundleInfoView:Le});export{S as EditableSpan,U as HeaderSectionRow,W as RequestHeaderSection,ge as RequestHeadersView,$e as RequestTrustTokensView,ae as ResponseHeaderSection,Ie as WebBundleInfoView};

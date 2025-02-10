import*as e from"../../../ui/lit-html/lit-html.js";import*as t from"../../../ui/legacy/legacy.js";import"../../../ui/components/icon_button/icon_button.js";import*as s from"../../../core/i18n/i18n.js";import*as i from"../../../ui/components/buttons/buttons.js";import*as o from"../../../ui/components/input/input.js";import*as r from"../../../ui/visual_logging/visual_logging.js";import*as n from"../models/models.js";import*as a from"../../../ui/components/helpers/helpers.js";import"../../../ui/components/split_view/split_view.js";import*as l from"../extensions/extensions.js";import*as c from"../../../core/host/host.js";import*as d from"../../../core/platform/platform.js";import*as p from"../../../core/sdk/sdk.js";import*as u from"../../../third_party/codemirror.next/codemirror.next.js";import*as h from"../../../ui/components/code_highlighter/code_highlighter.js";import"../../../ui/components/dialogs/dialogs.js";import*as v from"../../../ui/components/text_editor/text_editor.js";import*as g from"../../../ui/components/menus/menus.js";import"../../../ui/components/panel_feedback/panel_feedback.js";import"../../../ui/components/panel_introduction_steps/panel_introduction_steps.js";import*as m from"../../../ui/components/suggestion_input/suggestion_input.js";import*as b from"../controllers/controllers.js";import*as f from"../util/util.js";const w=new CSSStyleSheet;w.replaceSync('*{margin:0;padding:0;box-sizing:border-box;font-size:inherit}.control{background:none;border:none;display:flex;flex-direction:column;align-items:center}.control[disabled]{filter:grayscale(100%);cursor:auto}.icon{display:flex;width:40px;height:40px;border-radius:50%;background:var(--sys-color-error-bright);margin-bottom:8px;position:relative;transition:background 200ms;justify-content:center;align-content:center;align-items:center}.icon::before{--override-white:#fff;box-sizing:border-box;content:"";display:block;width:14px;height:14px;border:1px solid var(--override-white);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:var(--override-white)}.icon.square::before{border-radius:0}.icon.circle::before{border-radius:50%}.icon:hover{background:color-mix(in sRGB,var(--sys-color-error-bright),var(--sys-color-state-hover-on-prominent) 10%)}.icon:active{background:color-mix(in sRGB,var(--sys-color-error-bright),var(--sys-color-state-ripple-neutral-on-prominent) 16%)}.control[disabled] .icon:hover{background:var(--sys-color-error)}.label{font-size:12px;line-height:16px;text-align:center;letter-spacing:0.02em;color:var(--sys-color-on-surface)}\n/*# sourceURL=controlButton.css */\n');var y=self&&self.__decorate||function(e,t,s,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,s,n):o(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};const{html:S,Decorators:x,LitElement:$}=e,{customElement:k,property:E}=x;let R=class extends ${static styles=[w];constructor(){super(),this.label="",this.shape="square",this.disabled=!1}#e=e=>{this.disabled&&(e.stopPropagation(),e.preventDefault())};render(){return S`
            <button
                @click=${this.#e}
                .disabled=${this.disabled}
                class="control"
            >
                <div class="icon ${this.shape}"></div>
                <div class="label">${this.label}</div>
            </button>
        `}};y([E()],R.prototype,"label",void 0),y([E()],R.prototype,"shape",void 0),y([E({type:Boolean})],R.prototype,"disabled",void 0),R=y([k("devtools-control-button")],R);var C=Object.freeze({__proto__:null,get ControlButton(){return R}});const T=new CSSStyleSheet;T.replaceSync('*{margin:0;padding:0;outline:none;box-sizing:border-box;font-size:inherit}.wrapper{padding:24px;flex:1}h1{font-size:18px;line-height:24px;letter-spacing:0.02em;color:var(--sys-color-on-surface);margin:0;font-weight:normal}.row-label{font-weight:500;font-size:11px;line-height:16px;letter-spacing:0.8px;text-transform:uppercase;color:var(--sys-color-secondary);margin-bottom:8px;margin-top:32px;display:flex;align-items:center;gap:3px}.footer{display:flex;justify-content:center;border-top:1px solid var(--sys-color-divider);padding:12px;background:var(--sys-color-cdt-base-container)}.controls{display:flex}.error{margin:16px 0 0;padding:8px;background:var(--sys-color-error-container);color:var(--sys-color-error)}.row-label .link:focus-visible{outline:var(--sys-color-state-focus-ring) auto 1px}.header-wrapper{display:flex;align-items:baseline;justify-content:space-between}.checkbox-label{display:inline-flex;align-items:center;overflow:hidden;text-overflow:ellipsis;gap:4px;line-height:1.1;padding:4px}.checkbox-container{display:flex;flex-flow:row wrap;gap:10px}input[type="checkbox"]:focus-visible{outline:var(--sys-color-state-focus-ring) auto 1px}devtools-icon[name="help"]{width:16px;height:16px}\n/*# sourceURL=createRecordingView.css */\n');const{html:I,Directives:{ifDefined:N}}=e,j={recordingName:"Recording name",startRecording:"Start recording",createRecording:"Create a new recording",recordingNameIsRequired:"Recording name is required",selectorAttribute:"Selector attribute",cancelRecording:"Cancel recording",selectorTypeCSS:"CSS",selectorTypePierce:"Pierce",selectorTypeARIA:"ARIA",selectorTypeText:"Text",selectorTypeXPath:"XPath",selectorTypes:"Selector types to record",includeNecessarySelectors:"You must choose CSS, Pierce, or XPath as one of your options. Only these selectors are guaranteed to be recorded since ARIA and text selectors may not be unique.",learnMore:"Learn more"},A=s.i18n.registerUIStrings("panels/recorder/components/CreateRecordingView.ts",j),M=s.i18n.getLocalizedString.bind(void 0,A);class P extends Event{static eventName="recordingstarted";name;selectorAttribute;selectorTypesToRecord;constructor(e,t,s){super(P.eventName,{}),this.name=e,this.selectorAttribute=s||void 0,this.selectorTypesToRecord=t}}class B extends Event{static eventName="recordingcancelled";constructor(){super(B.eventName)}}class L extends HTMLElement{#t=this.attachShadow({mode:"open"});#s="";#i;#o;constructor(){super(),this.setAttribute("jslog",`${r.section("create-recording-view")}`)}connectedCallback(){this.#t.adoptedStyleSheets=[T,o.textInputStyles,o.checkboxStyles],this.#r(),this.#t.querySelector("input")?.focus()}set data(e){this.#o=e.recorderSettings,this.#s=this.#o.defaultTitle}#n(e){this.#i&&(this.#i=void 0,this.#r());"Enter"===e.key&&(this.startRecording(),e.stopPropagation(),e.preventDefault())}startRecording(){const e=this.#t.querySelector("#user-flow-name");if(!e)throw new Error("input#user-flow-name not found");if(!this.#o)throw new Error("settings not set");if(!e.value.trim())return this.#i=new Error(M(j.recordingNameIsRequired)),void this.#r();const t=this.#t.querySelectorAll(".selector-type input[type=checkbox]"),s=[];for(const e of t){const t=e,i=t.value;t.checked&&s.push(i)}if(!s.includes(n.Schema.SelectorType.CSS)&&!s.includes(n.Schema.SelectorType.XPath)&&!s.includes(n.Schema.SelectorType.Pierce))return this.#i=new Error(M(j.includeNecessarySelectors)),void this.#r();for(const e of Object.values(n.Schema.SelectorType))this.#o.setSelectorByType(e,s.includes(e));const i=this.#t.querySelector("#selector-attribute").value.trim();this.#o.selectorAttribute=i,this.dispatchEvent(new P(e.value.trim(),s,i))}#a(){this.dispatchEvent(new B)}#l=()=>{this.#t.querySelector("#user-flow-name")?.select()};#r(){const t=new Map([[n.Schema.SelectorType.ARIA,M(j.selectorTypeARIA)],[n.Schema.SelectorType.CSS,M(j.selectorTypeCSS)],[n.Schema.SelectorType.Text,M(j.selectorTypeText)],[n.Schema.SelectorType.XPath,M(j.selectorTypeXPath)],[n.Schema.SelectorType.Pierce,M(j.selectorTypePierce)]]);e.render(I`
        <div class="wrapper">
          <div class="header-wrapper">
            <h1>${M(j.createRecording)}</h1>
            <devtools-button
              title=${M(j.cancelRecording)}
              jslog=${r.close().track({click:!0})}
              .data=${{variant:"icon",size:"SMALL",iconName:"cross"}}
              @click=${this.#a}
            ></devtools-button>
          </div>
          <label class="row-label" for="user-flow-name">${M(j.recordingName)}</label>
          <input
            value=${this.#s}
            @focus=${this.#l}
            @keydown=${this.#n}
            jslog=${r.textField("user-flow-name").track({change:!0})}
            class="devtools-text-input"
            id="user-flow-name"
          />
          <label class="row-label" for="selector-attribute">
            <span>${M(j.selectorAttribute)}</span>
            <x-link
              class="link" href="https://g.co/devtools/recorder#selector"
              title=${M(j.learnMore)}
              jslog=${r.link("recorder-selector-help").track({click:!0})}>
              <devtools-icon name="help">
              </devtools-icon>
            </x-link>
          </label>
          <input
            value=${N(this.#o?.selectorAttribute)}
            placeholder="data-testid"
            @keydown=${this.#n}
            jslog=${r.textField("selector-attribute").track({change:!0})}
            class="devtools-text-input"
            id="selector-attribute"
          />
          <label class="row-label">
            <span>${M(j.selectorTypes)}</span>
            <x-link
              class="link" href="https://g.co/devtools/recorder#selector"
              title=${M(j.learnMore)}
              jslog=${r.link("recorder-selector-help").track({click:!0})}>
              <devtools-icon name="help">
              </devtools-icon>
            </x-link>
          </label>
          <div class="checkbox-container">
            ${Object.values(n.Schema.SelectorType).map((e=>{const s=this.#o?.getSelectorByType(e);return I`
                  <label class="checkbox-label selector-type">
                    <input
                      @keydown=${this.#n}
                      .value=${e}
                      jslog=${r.toggle().track({click:!0}).context(`selector-${e}`)}
                      ?checked=${s}
                      type="checkbox"
                    />
                    ${t.get(e)||e}
                  </label>
                `}))}
          </div>

          ${this.#i&&I`
          <div class="error" role="alert">
            ${this.#i.message}
          </div>
        `}
        </div>
        <div class="footer">
          <div class="controls">
            <devtools-control-button
              @click=${this.startRecording}
              .label=${M(j.startRecording)}
              .shape=${"circle"}
              jslog=${r.action("chrome-recorder.start-recording").track({click:!0})}
              title=${n.Tooltip.getTooltipForActions(M(j.startRecording),"chrome-recorder.start-recording")}
            ></devtools-control-button>
          </div>
        </div>
      `,this.#t,{host:this})}}customElements.define("devtools-create-recording-view",L);var O=Object.freeze({__proto__:null,CreateRecordingView:L,RecordingCancelledEvent:B,RecordingStartedEvent:P});const F=new CSSStyleSheet;F.replaceSync("*{margin:0;padding:0;box-sizing:border-box;font-size:inherit}*:focus,\n*:focus-visible{outline:none}.wrapper{padding:24px}.header{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}h1{font-size:16px;line-height:19px;color:var(--sys-color-on-surface);font-weight:normal}.icon,\n.icon devtools-icon{width:20px;height:20px;color:var(--sys-color-primary)}.table{margin-top:35px}.title{font-size:13px;color:var(--sys-color-on-surface);margin-left:10px;flex:1;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.row{display:flex;align-items:center;padding-right:5px;height:28px;border-bottom:1px solid var(--sys-color-divider)}.row:focus-within,\n.row:hover{background-color:var(--sys-color-state-hover-on-subtle)}.row:last-child{border-bottom:none}.actions{display:flex;align-items:center}.actions button{border:none;background-color:transparent;width:24px;height:24px;border-radius:50%}.actions .divider{width:1px;height:17px;background-color:var(--sys-color-divider);margin:0 6px}\n/*# sourceURL=recordingListView.css */\n");const{html:D}=e,z={savedRecordings:"Saved recordings",createRecording:"Create a new recording",playRecording:"Play recording",deleteRecording:"Delete recording",openRecording:"Open recording"},_=s.i18n.registerUIStrings("panels/recorder/components/RecordingListView.ts",z),V=s.i18n.getLocalizedString.bind(void 0,_);let U=class e extends Event{static eventName="createrecording";constructor(){super(e.eventName)}};class K extends Event{storageName;static eventName="deleterecording";constructor(e){super(K.eventName),this.storageName=e}}class q extends Event{storageName;static eventName="openrecording";constructor(e){super(q.eventName),this.storageName=e}}let G=class e extends Event{storageName;static eventName="playrecording";constructor(t){super(e.eventName),this.storageName=t}};class H extends HTMLElement{#t=this.attachShadow({mode:"open"});#c={recordings:[],replayAllowed:!0};constructor(){super()}connectedCallback(){this.#t.adoptedStyleSheets=[F],a.ScheduledRender.scheduleRender(this,this.#r)}set recordings(e){this.#c.recordings=e,a.ScheduledRender.scheduleRender(this,this.#r)}set replayAllowed(e){this.#c.replayAllowed=e,a.ScheduledRender.scheduleRender(this,this.#r)}#d(){this.dispatchEvent(new U)}#p(e,t){t.stopPropagation(),this.dispatchEvent(new K(e))}#u(e,t){t.stopPropagation(),this.dispatchEvent(new q(e))}#h(e,t){t.stopPropagation(),this.dispatchEvent(new G(e))}#n(e,t){"Enter"===t.key&&this.#u(e,t)}#v(e){e.stopPropagation()}#r=()=>{e.render(D`
        <div class="wrapper">
          <div class="header">
            <h1>${V(z.savedRecordings)}</h1>
            <devtools-button
              .variant=${"primary"}
              @click=${this.#d}
              title=${n.Tooltip.getTooltipForActions(V(z.createRecording),"chrome-recorder.create-recording")}
              .jslogContext=${"create-recording"}
            >
              ${V(z.createRecording)}
            </devtools-button>
          </div>
          <div class="table">
            ${this.#c.recordings.map((e=>D`
                  <div
                    role="button"
                    tabindex="0"
                    aria-label=${V(z.openRecording)}
                    class="row"
                    @keydown=${this.#n.bind(this,e.storageName)}
                    @click=${this.#u.bind(this,e.storageName)}
                    jslog=${r.item().track({click:!0}).context("recording")}>
                    <div class="icon">
                      <devtools-icon name="flow">
                      </devtools-icon>
                    </div>
                    <div class="title">${e.name}</div>
                    <div class="actions">
                      ${this.#c.replayAllowed?D`
                              <devtools-button
                                title=${V(z.playRecording)}
                                .data=${{variant:"icon",iconName:"play",jslogContext:"play-recording"}}
                                @click=${this.#h.bind(this,e.storageName)}
                                @keydown=${this.#v}
                              ></devtools-button>
                              <div class="divider"></div>`:""}
                      <devtools-button
                        class="delete-recording-button"
                        title=${V(z.deleteRecording)}
                        .data=${{variant:"icon",iconName:"bin",jslogContext:"delete-recording"}}
                        @click=${this.#p.bind(this,e.storageName)}
                        @keydown=${this.#v}
                      ></devtools-button>
                    </div>
                  </div>
                `))}
          </div>
        </div>
      `,this.#t,{host:this})}}customElements.define("devtools-recording-list-view",H);var W=Object.freeze({__proto__:null,CreateRecordingEvent:U,DeleteRecordingEvent:K,OpenRecordingEvent:q,PlayRecordingEvent:G,RecordingListView:H});const X=new CSSStyleSheet;X.replaceSync("*{margin:0;padding:0;outline:none;box-sizing:border-box;font-size:inherit}.extension-view{display:flex;flex-direction:column;height:100%}main{flex:1}iframe{border:none;height:100%;width:100%}header{display:flex;padding:3px 8px;justify-content:space-between;border-bottom:1px solid var(--sys-color-divider)}header > div{align-self:center}.icon{display:block;width:16px;height:16px;color:var(--sys-color-secondary)}.title{display:flex;flex-direction:row;gap:6px;color:var(--sys-color-secondary);align-items:center;font-weight:500}\n/*# sourceURL=extensionView.css */\n");const{html:Y}=e,J={closeView:"Close",extension:"Content provided by a browser extension"},Q=s.i18n.registerUIStrings("panels/recorder/components/ExtensionView.ts",J),Z=s.i18n.getLocalizedString.bind(void 0,Q);class ee extends Event{static eventName="recorderextensionviewclosed";constructor(){super(ee.eventName,{bubbles:!0,composed:!0})}}class te extends HTMLElement{#t=this.attachShadow({mode:"open"});#g;constructor(){super(),this.setAttribute("jslog",`${r.section("extension-view")}`)}connectedCallback(){this.#t.adoptedStyleSheets=[X],this.#r()}disconnectedCallback(){this.#g&&l.ExtensionManager.ExtensionManager.instance().getView(this.#g.id).hide()}set descriptor(e){this.#g=e,this.#r(),l.ExtensionManager.ExtensionManager.instance().getView(e.id).show()}#m(){this.dispatchEvent(new ee)}#r(){if(!this.#g)return;const t=l.ExtensionManager.ExtensionManager.instance().getView(this.#g.id).frame();e.render(Y`
        <div class="extension-view">
          <header>
            <div class="title">
              <devtools-icon
                class="icon"
                title=${Z(J.extension)}
                name="extension">
              </devtools-icon>
              ${this.#g.title}
            </div>
            <devtools-button
              title=${Z(J.closeView)}
              jslog=${r.close().track({click:!0})}
              .data=${{variant:"icon",size:"SMALL",iconName:"cross"}}
              @click=${this.#m}
            ></devtools-button>
          </header>
          <main>
            ${t}
          </main>
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-recorder-extension-view",te);const{html:se}=e,ie={Replay:"Replay",ReplayNormalButtonLabel:"Normal speed",ReplayNormalItemLabel:"Normal (Default)",ReplaySlowButtonLabel:"Slow speed",ReplaySlowItemLabel:"Slow",ReplayVerySlowButtonLabel:"Very slow speed",ReplayVerySlowItemLabel:"Very slow",ReplayExtremelySlowButtonLabel:"Extremely slow speed",ReplayExtremelySlowItemLabel:"Extremely slow",speedGroup:"Speed",extensionGroup:"Extensions"},oe=[{value:"normal",buttonIconName:"play",buttonLabel:()=>ae(ie.ReplayNormalButtonLabel),label:()=>ae(ie.ReplayNormalItemLabel)},{value:"slow",buttonIconName:"play",buttonLabel:()=>ae(ie.ReplaySlowButtonLabel),label:()=>ae(ie.ReplaySlowItemLabel)},{value:"very_slow",buttonIconName:"play",buttonLabel:()=>ae(ie.ReplayVerySlowButtonLabel),label:()=>ae(ie.ReplayVerySlowItemLabel)},{value:"extremely_slow",buttonIconName:"play",buttonLabel:()=>ae(ie.ReplayExtremelySlowButtonLabel),label:()=>ae(ie.ReplayExtremelySlowItemLabel)}],re={normal:1,slow:2,very_slow:3,extremely_slow:4},ne=s.i18n.registerUIStrings("panels/recorder/components/ReplaySection.ts",ie),ae=s.i18n.getLocalizedString.bind(void 0,ne);class le extends Event{speed;extension;static eventName="startreplay";constructor(e,t){super(le.eventName,{bubbles:!0,composed:!0}),this.speed=e,this.extension=t}}const ce="extension";class de extends HTMLElement{#t=this.attachShadow({mode:"open"});#b=this.#r.bind(this);#c={disabled:!1};#f;#w=[];set data(e){this.#f=e.settings,this.#w=e.replayExtensions}get disabled(){return this.#c.disabled}set disabled(e){this.#c.disabled=e,a.ScheduledRender.scheduleRender(this,this.#b)}connectedCallback(){a.ScheduledRender.scheduleRender(this,this.#b)}#y(e){const t=e.value;this.#f&&e.value&&(this.#f.speed=t,this.#f.replayExtension=""),c.userMetrics.recordingReplaySpeed(re[t]),a.ScheduledRender.scheduleRender(this,this.#b)}#S(e){if(e.stopPropagation(),e.value&&e.value.startsWith(ce)){this.#f&&(this.#f.replayExtension=e.value);const t=Number(e.value.substring(9));return this.dispatchEvent(new le("normal",this.#w[t])),void a.ScheduledRender.scheduleRender(this,this.#b)}this.dispatchEvent(new le(this.#f?this.#f.speed:"normal")),a.ScheduledRender.scheduleRender(this,this.#b)}#r(){const t=[{name:ae(ie.speedGroup),items:oe}];this.#w.length&&t.push({name:ae(ie.extensionGroup),items:this.#w.map(((e,t)=>({value:ce+t,buttonIconName:"play",buttonLabel:()=>e.getName(),label:()=>e.getName()})))}),e.render(se`
    <devtools-select-button
      @selectmenuselected=${this.#y}
      @selectbuttonclick=${this.#S}
      .variant=${"primary"}
      .showItemDivider=${!1}
      .disabled=${this.#c.disabled}
      .action=${"chrome-recorder.replay-recording"}
      .value=${this.#f?.replayExtension||this.#f?.speed||""}
      .buttonLabel=${ae(ie.Replay)}
      .groups=${t}
      jslog=${r.action("chrome-recorder.replay-recording").track({click:!0})}>
    </devtools-select-button>`,this.#t,{host:this})}}customElements.define("devtools-replay-section",de);var pe=Object.freeze({__proto__:null,ReplaySection:de,StartReplayEvent:le});const ue=new CSSStyleSheet;ue.replaceSync('*{padding:0;margin:0;box-sizing:border-box;font-size:inherit}.wrapper{display:flex;flex-direction:row;flex:1;height:100%}.main{overflow:hidden;display:flex;flex-direction:column;flex:1}.sections{flex:1;min-height:0;overflow:hidden auto;background-color:var(--sys-color-cdt-base-container);z-index:0;position:relative;container:sections/inline-size}.section{display:flex;padding:0 16px;gap:8px;position:relative}.section::after{content:"";border-bottom:1px solid var(--sys-color-divider);position:absolute;left:0;right:0;bottom:0;z-index:-1}.section:last-child{margin-bottom:70px}.section:last-child::after{content:none}.screenshot-wrapper{flex:0 0 80px;padding-top:32px;z-index:2}@container sections (max-width: 400px){.screenshot-wrapper{display:none}}.screenshot{object-fit:cover;object-position:top center;max-width:100%;width:200px;height:auto;border:1px solid var(--sys-color-divider);border-radius:1px}.content{flex:1;min-width:0}.steps{flex:1;position:relative;align-self:flex-start;overflow:visible}.step{position:relative;padding-left:40px;margin:16px 0}.step .action{font-size:13px;line-height:16px;letter-spacing:0.03em}.recording{color:var(--sys-color-primary);font-style:italic;margin-top:8px;margin-bottom:0}.add-assertion-button{margin-top:8px}.details{max-width:240px;display:flex;flex-direction:column;align-items:flex-end}.url{font-size:12px;line-height:16px;letter-spacing:0.03em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sys-color-secondary);max-width:100%;margin-bottom:16px}.header{align-items:center;border-bottom:1px solid var(--sys-color-divider);display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;padding:16px}.header-title-wrapper{max-width:100%}.header-title{align-items:center;display:flex;flex:1;max-width:100%}.header-title::before{content:"";min-width:12px;height:12px;display:inline-block;background:var(--sys-color-primary);border-radius:50%;margin-right:7px}#title-input{box-sizing:content-box;font-family:inherit;font-size:18px;line-height:22px;letter-spacing:0.02em;padding:1px 4px;border:1px solid transparent;border-radius:1px;word-break:break-all}#title-input:hover{border-color:var(--input-outline)}#title-input.has-error{border-color:var(--sys-color-error)}#title-input.disabled{color:var(--sys-color-state-disabled)}.title-input-error-text{margin-top:4px;margin-left:19px;color:var(--sys-color-error)}.title-button-bar{padding-left:2px;display:flex}#title-input:focus + .title-button-bar{display:none}.settings-row{padding:16px 28px;border-bottom:1px solid var(--sys-color-divider);display:flex;flex-flow:row wrap;justify-content:space-between}.settings-title{font-size:14px;line-height:24px;letter-spacing:0.03em;color:var(--sys-color-on-surface);display:flex;align-items:center;align-content:center;gap:5px;width:fit-content}.settings{margin-top:4px;display:flex;font-size:12px;line-height:20px;letter-spacing:0.03em;color:var(--sys-color-on-surface-subtle)}.settings.expanded{gap:10px}.settings .separator{width:1px;height:20px;background-color:var(--sys-color-divider);margin:0 5px}.actions{display:flex;align-items:center;flex-wrap:wrap;gap:12px}.actions .separator{width:1px;height:24px;background-color:var(--sys-color-divider)}.is-recording .header-title::before{background:var(--sys-color-error-bright)}.footer{display:flex;justify-content:center;border-top:1px solid var(--sys-color-divider);padding:12px;background:var(--sys-color-cdt-base-container);z-index:1}.controls{align-items:center;display:flex;justify-content:center;position:relative;width:100%}.chevron{width:14px;height:14px;transform:rotate(-90deg);color:var(--sys-color-on-surface)}.expanded .chevron{transform:rotate(0)}.editable-setting{display:flex;flex-direction:row;gap:12px;align-items:center}.editable-setting .devtools-text-input{width:fit-content;height:var(--sys-size-9)}.wrapping-label{display:inline-flex;align-items:center;gap:12px}.text-editor{height:100%;overflow:auto}.section-toolbar{display:flex;align-items:center;padding:3px 5px;justify-content:space-between;gap:3px}.section-toolbar > devtools-select-menu{height:24px;min-width:50px}.sections .section-toolbar{justify-content:flex-end}devtools-split-view{flex:1 1 0%;min-height:0}[slot="sidebar"]{display:flex;flex-direction:column;overflow:auto;height:100%;width:100%}[slot="sidebar"] .section-toolbar{border-bottom:1px solid var(--sys-color-divider)}.show-code{margin-right:14px;margin-top:8px}devtools-recorder-extension-view{flex:1}\n/*# sourceURL=recordingView.css */\n');const{html:he}=e,ve={mobile:"Mobile",desktop:"Desktop",latency:"Latency: {value} ms",upload:"Upload: {value}",download:"Download: {value}",editReplaySettings:"Edit replay settings",replaySettings:"Replay settings",default:"Default",environment:"Environment",screenshotForSection:"Screenshot for this section",editTitle:"Edit title",requiredTitleError:"Title is required",recording:"Recording…",endRecording:"End recording",recordingIsBeingStopped:"Stopping recording…",timeout:"Timeout: {value} ms",network:"Network",timeoutLabel:"Timeout",timeoutExplanation:"The timeout setting (in milliseconds) applies to every action when replaying the recording. For example, if a DOM element identified by a CSS selector does not appear on the page within the specified timeout, the replay fails with an error.",cancelReplay:"Cancel replay",showCode:"Show code",hideCode:"Hide code",addAssertion:"Add assertion",performancePanel:"Performance panel"},ge=s.i18n.registerUIStrings("panels/recorder/components/RecordingView.ts",ve),me=s.i18n.getLocalizedString.bind(void 0,ge);class be extends Event{static eventName="recordingfinished";constructor(){super(be.eventName)}}class fe extends Event{static eventName="playrecording";data;constructor(e={targetPanel:"chrome-recorder",speed:"normal"}){super(fe.eventName),this.data=e}}class we extends Event{static eventName="abortreplay";constructor(){super(we.eventName)}}class ye extends Event{static eventName="recordingchanged";data;constructor(e,t){super(ye.eventName),this.data={currentStep:e,newStep:t}}}class Se extends Event{static eventName="addassertion";constructor(){super(Se.eventName)}}class xe extends Event{static eventName="recordingtitlechanged";title;constructor(e){super(xe.eventName,{}),this.title=e}}class $e extends Event{static eventName="networkconditionschanged";data;constructor(e){super($e.eventName,{composed:!0,bubbles:!0}),this.data=e}}class ke extends Event{static eventName="timeoutchanged";data;constructor(e){super(ke.eventName,{composed:!0,bubbles:!0}),this.data=e}}const Ee=[p.NetworkManager.NoThrottlingConditions,p.NetworkManager.OfflineConditions,p.NetworkManager.Slow3GConditions,p.NetworkManager.Slow4GConditions,p.NetworkManager.Fast4GConditions];class Re extends HTMLElement{#t=this.attachShadow({mode:"open"});#x={isPlaying:!1,isPausedOnBreakpoint:!1};#$=null;#k=!1;#E=!1;#R=!1;#C;#T=[];#I;#N=[];#f;#o;#j;#A=new Set;#M;#P=!1;#B=!0;#L=[];#O=[];#w;#F=!1;#D="";#z="";#_;#V;#U;#K=this.#q.bind(this);constructor(){super()}set data(e){this.#k=e.isRecording,this.#x=e.replayState,this.#E=e.recordingTogglingInProgress,this.#C=e.currentStep,this.#$=e.recording,this.#T=this.#$.steps,this.#N=e.sections,this.#f=e.settings,this.#o=e.recorderSettings,this.#I=e.currentError,this.#j=e.lastReplayResult,this.#B=e.replayAllowed,this.#R=!1,this.#A=e.breakpointIndexes,this.#L=e.builtInConverters,this.#O=e.extensionConverters,this.#w=e.replayExtensions,this.#U=e.extensionDescriptor,this.#z=this.#o?.preferredCopyFormat??e.builtInConverters[0]?.getId(),this.#G(),this.#r()}connectedCallback(){this.#t.adoptedStyleSheets=[ue,o.textInputStyles],document.addEventListener("copy",this.#K),this.#r()}disconnectedCallback(){document.removeEventListener("copy",this.#K)}scrollToBottom(){const e=this.shadowRoot?.querySelector(".sections");e&&(e.scrollTop=e.scrollHeight)}#H(){this.dispatchEvent(new Se)}#W(){this.dispatchEvent(new be)}#X(){this.dispatchEvent(new we)}#Y(e){this.dispatchEvent(new fe({targetPanel:"chrome-recorder",speed:e.speed,extension:e.extension}))}#J(e){if(!this.#C)return"default";if(e===this.#C)return this.#I?"error":this.#x.isPlaying?this.#x.isPausedOnBreakpoint?"stopped":"current":"success";const t=this.#T.indexOf(this.#C);if(-1===t)return"default";return this.#T.indexOf(e)<t?"success":"outstanding"}#Q(e){const t=this.#C;if(!t)return"default";const s=this.#N.find((e=>e.steps.includes(t)));if(!s&&this.#I)return"error";if(e===s)return"success";return this.#N.indexOf(s)>=this.#N.indexOf(e)?"success":"outstanding"}#Z(e,t,s){const i=this.#T.indexOf(t);return he`
      <devtools-step-view
      @click=${this.#ee}
      @mouseover=${this.#te}
      @copystep=${this.#se}
      .data=${{step:t,state:this.#J(t),error:this.#C===t?this.#I:void 0,isFirstSection:!1,isLastSection:s&&this.#T[this.#T.length-1]===t,isStartOfGroup:!1,isEndOfGroup:e.steps[e.steps.length-1]===t,stepIndex:i,hasBreakpoint:this.#A.has(i),sectionIndex:-1,isRecording:this.#k,isPlaying:this.#x.isPlaying,removable:this.#T.length>1,builtInConverters:this.#L,extensionConverters:this.#O,isSelected:this.#M===t,recorderSettings:this.#o}}
      jslog=${r.section("step").track({click:!0})}
      ></devtools-step-view>
    `}#te=e=>{const t=e.target,s=t.step||t.section?.causingStep;s&&!this.#M&&this.#ie(s)};#ee(e){e.stopPropagation();const t=e.target,s=t.step||t.section?.causingStep||null;this.#M!==s&&(this.#M=s,this.#r(),s&&this.#ie(s,!0))}#oe(){void 0!==this.#M&&(this.#M=void 0,this.#r())}#re(e){"Enter"===e.key&&(e.preventDefault(),this.#ne(e))}#ne(e){e.stopPropagation(),this.#P=!this.#P,this.#r()}#ae(e){const t=Ee.find((t=>t.i18nTitleKey===e.itemValue));this.dispatchEvent(new $e(t?.i18nTitleKey===p.NetworkManager.NoThrottlingConditions.i18nTitleKey?void 0:t))}#le(e){const t=e.target;t.checkValidity()?this.dispatchEvent(new ke(Number(t.value))):t.reportValidity()}#ce=e=>{const t=e.target.innerText.trim();if(!t)return this.#R=!0,void this.#r();this.dispatchEvent(new xe(t))};#de=e=>{switch(e.code){case"Escape":case"Enter":e.target.blur(),e.stopPropagation()}};#pe=()=>{const e=this.#t.getElementById("title-input");e.focus();const t=document.createRange();t.selectNodeContents(e),t.collapse(!1);const s=window.getSelection();s?.removeAllRanges(),s?.addRange(t)};#ue=e=>{const t=e.target;t.matches(".wrapping-label")&&t.querySelector("devtools-select-menu")?.click()};async#he(e){let t=[...this.#L,...this.#O].find((e=>e.getId()===this.#o?.preferredCopyFormat));if(t||(t=this.#L[0]),!t)throw new Error("No default converter found");let s="";e?s=await t.stringifyStep(e):this.#$&&([s]=await t.stringify(this.#$)),c.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(s);const i=e?function(e){switch(e){case"puppeteer":case"puppeteer-firefox":return 5;case"json":return 6;case"@puppeteer/replay":return 7;default:return 8}}(t.getId()):function(e){switch(e){case"puppeteer":case"puppeteer-firefox":return 1;case"json":return 2;case"@puppeteer/replay":return 3;default:return 4}}(t.getId());c.userMetrics.recordingCopiedToClipboard(i)}#se(e){e.stopPropagation(),this.#he(e.step)}async#q(e){e.target===document.body&&(e.preventDefault(),await this.#he(this.#M),c.userMetrics.keyboardShortcutFired("chrome-recorder.copy-recording-or-step"))}#ve(){if(!this.#f)return he``;const t=[];this.#f.viewportSettings&&(t.push(he`<div>${this.#f.viewportSettings.isMobile?me(ve.mobile):me(ve.desktop)}</div>`),t.push(he`<div class="separator"></div>`),t.push(he`<div>${this.#f.viewportSettings.width}×${this.#f.viewportSettings.height} px</div>`));const i=[];if(this.#P){const e=this.#f.networkConditionsSettings?.i18nTitleKey||p.NetworkManager.NoThrottlingConditions.i18nTitleKey,t=Ee.find((t=>t.i18nTitleKey===e));let s="";t&&(s=t.title instanceof Function?t.title():t.title),i.push(he`<div class="editable-setting">
        <label class="wrapping-label" @click=${this.#ue}>
          ${me(ve.network)}
          <devtools-select-menu
            @selectmenuselected=${this.#ae}
            .disabled=${!this.#T.find((e=>"navigate"===e.type))}
            .showDivider=${!0}
            .showArrow=${!0}
            .sideButton=${!1}
            .showSelectedItem=${!0}
            .jslogContext=${"network-conditions"}
            .position=${"bottom"}
            .buttonTitle=${s}
          >
            ${Ee.map((t=>he`<devtools-menu-item
                .value=${t.i18nTitleKey||""}
                .selected=${e===t.i18nTitleKey}
                jslog=${r.item(d.StringUtilities.toKebabCase(t.i18nTitleKey||""))}
              >
                ${t.title instanceof Function?t.title():t.title}
              </devtools-menu-item>`))}
          </devtools-select-menu>
        </label>
      </div>`),i.push(he`<div class="editable-setting">
        <label class="wrapping-label" title=${me(ve.timeoutExplanation)}>
          ${me(ve.timeoutLabel)}
          <input
            @input=${this.#le}
            required
            min=${n.SchemaUtils.minTimeout}
            max=${n.SchemaUtils.maxTimeout}
            value=${this.#f.timeout||n.RecordingPlayer.defaultTimeout}
            jslog=${r.textField("timeout").track({change:!0})}
            class="devtools-text-input"
            type="number">
        </label>
      </div>`)}else this.#f.networkConditionsSettings?this.#f.networkConditionsSettings.title?i.push(he`<div>${this.#f.networkConditionsSettings.title}</div>`):i.push(he`<div>
            ${me(ve.download,{value:s.ByteUtilities.bytesToString(this.#f.networkConditionsSettings.download)})},
            ${me(ve.upload,{value:s.ByteUtilities.bytesToString(this.#f.networkConditionsSettings.upload)})},
            ${me(ve.latency,{value:this.#f.networkConditionsSettings.latency})}
          </div>`):i.push(he`<div>${p.NetworkManager.NoThrottlingConditions.title instanceof Function?p.NetworkManager.NoThrottlingConditions.title():p.NetworkManager.NoThrottlingConditions.title}</div>`),i.push(he`<div class="separator"></div>`),i.push(he`<div>${me(ve.timeout,{value:this.#f.timeout||n.RecordingPlayer.defaultTimeout})}</div>`);const o=!this.#k&&!this.#x.isPlaying,a={"settings-title":!0,expanded:this.#P},l={expanded:this.#P,settings:!0};return he`
      <div class="settings-row">
        <div class="settings-container">
          <div
            class=${e.Directives.classMap(a)}
            @keydown=${o&&this.#re}
            @click=${o&&this.#ne}
            tabindex="0"
            role="button"
            jslog=${r.action("replay-settings").track({click:!0})}
            aria-label=${me(ve.editReplaySettings)}>
            <span>${me(ve.replaySettings)}</span>
            ${o?he`<devtools-icon
                    class="chevron"
                    name="triangle-down">
                  </devtools-icon>`:""}
          </div>
          <div class=${e.Directives.classMap(l)}>
            ${i.length?i:he`<div>${me(ve.default)}</div>`}
          </div>
        </div>
        <div class="settings-container">
          <div class="settings-title">${me(ve.environment)}</div>
          <div class="settings">
            ${t.length?t:he`<div>${me(ve.default)}</div>`}
          </div>
        </div>
      </div>
    `}#ge(){const e=[...this.#L||[],...this.#O||[]].find((e=>e.getId()===this.#z));return e||this.#L[0]}#me(){if(this.#U)return he`
        <devtools-recorder-extension-view .descriptor=${this.#U}>
        </devtools-recorder-extension-view>
      `;const e=this.#ge(),t=e?.getFormatName();return this.#F?he`
        <devtools-split-view>
          <div slot="main">
            ${this.#be()}
          </div>
          <div slot="sidebar" jslog=${r.pane("source-code").track({resize:!0})}>
            <div class="section-toolbar" jslog=${r.toolbar()}>
              <devtools-select-menu
                @selectmenuselected=${this.#fe}
                .showDivider=${!0}
                .showArrow=${!0}
                .sideButton=${!1}
                .showSelectedItem=${!0}
                .position=${"bottom"}
                .buttonTitle=${t||""}
                .jslogContext=${"code-format"}
              >
                ${this.#L.map((e=>he`<devtools-menu-item
                    .value=${e.getId()}
                    .selected=${this.#z===e.getId()}
                    jslog=${r.action().track({click:!0}).context(`converter-${d.StringUtilities.toKebabCase(e.getId())}`)}
                  >
                    ${e.getFormatName()}
                  </devtools-menu-item>`))}
                ${this.#O.map((e=>he`<devtools-menu-item
                    .value=${e.getId()}
                    .selected=${this.#z===e.getId()}
                    jslog=${r.action().track({click:!0}).context("converter-extension")}
                  >
                    ${e.getFormatName()}
                  </devtools-menu-item>`))}
              </devtools-select-menu>
              <devtools-button
                title=${n.Tooltip.getTooltipForActions(me(ve.hideCode),"chrome-recorder.toggle-code-view")}
                .data=${{variant:"icon",size:"SMALL",iconName:"cross"}}
                @click=${this.showCodeToggle}
                jslog=${r.close().track({click:!0})}
              ></devtools-button>
            </div>
            ${this.#we()}
          </div>
        </devtools-split-view>
      `:this.#be()}#we(){if(!this.#_)throw new Error("Unexpected: trying to render the text editor without editorState");return he`
      <div class="text-editor" jslog=${r.textField().track({change:!0})}>
        <devtools-text-editor .state=${this.#_}></devtools-text-editor>
      </div>
    `}#ye(e){return e.screenshot?he`
      <img class="screenshot" src=${e.screenshot} alt=${me(ve.screenshotForSection)} />
    `:null}#Se(){return this.#x.isPlaying?he`
        <devtools-button .jslogContext=${"abort-replay"} @click=${this.#X} .iconName=${"pause"} .variant=${"outlined"}>
          ${me(ve.cancelReplay)}
        </devtools-button>`:he`<devtools-replay-section
        .data=${{settings:this.#o,replayExtensions:this.#w}}
        .disabled=${this.#x.isPlaying}
        @startreplay=${this.#Y}
        >
      </devtools-replay-section>`}#xe(e){e.stopPropagation(),this.dispatchEvent(new fe({targetPanel:"timeline",speed:"normal"}))}showCodeToggle=()=>{this.#F=!this.#F,c.userMetrics.recordingCodeToggled(this.#F?1:2),this.#G()};#G=async()=>{if(!this.#$)return;const e=this.#ge();if(!e)return;const[t,s]=await e.stringify(this.#$);this.#D=t,this.#V=s,this.#V?.shift();const i=e.getMediaType(),o=i?await h.CodeHighlighter.languageFromMIME(i):null;this.#_=u.EditorState.create({doc:this.#D,extensions:[v.Config.baseConfiguration(this.#D),u.EditorState.readOnly.of(!0),u.EditorView.lineWrapping,o||[]]}),this.#r(),this.dispatchEvent(new Event("code-generated"))};#ie=(e,t=!1)=>{if(!this.#V)return;const s=this.#T.indexOf(e);if(-1===s)return;const i=this.#t.querySelector("devtools-text-editor");if(!i)return;const o=i.editor;if(!o)return;const r=this.#V[2*s],n=this.#V[2*s+1];let a=i.createSelection({lineNumber:r+n,columnNumber:0},{lineNumber:r,columnNumber:0});const l=i.state.doc.lineAt(a.main.anchor);a=i.createSelection({lineNumber:r+n-1,columnNumber:l.length+1},{lineNumber:r,columnNumber:0}),o.dispatch({selection:a,effects:t?[u.EditorView.scrollIntoView(a.main,{y:"nearest"})]:void 0})};#fe=e=>{this.#z=e.itemValue,this.#o&&(this.#o.preferredCopyFormat=e.itemValue),this.#G()};#be(){return he`
      <div class="sections">
      ${this.#F?"":he`<div class="section-toolbar">
        <devtools-button
          @click=${this.showCodeToggle}
          class="show-code"
          .data=${{variant:"outlined",title:n.Tooltip.getTooltipForActions(me(ve.showCode),"chrome-recorder.toggle-code-view")}}
          jslog=${r.toggleSubpane("chrome-recorder.toggle-code-view").track({click:!0})}
        >
          ${me(ve.showCode)}
        </devtools-button>
      </div>`}
      ${this.#N.map(((e,t)=>he`
            <div class="section">
              <div class="screenshot-wrapper">
                ${this.#ye(e)}
              </div>
              <div class="content">
                <div class="steps">
                  <devtools-step-view
                    @click=${this.#ee}
                    @mouseover=${this.#te}
                    .data=${{section:e,state:this.#Q(e),isStartOfGroup:!0,isEndOfGroup:0===e.steps.length,isFirstSection:0===t,isLastSection:t===this.#N.length-1&&0===e.steps.length,isSelected:this.#M===(e.causingStep||null),sectionIndex:t,isRecording:this.#k,isPlaying:this.#x.isPlaying,error:"error"===this.#Q(e)?this.#I:void 0,hasBreakpoint:!1,removable:this.#T.length>1&&e.causingStep}}
                  >
                  </devtools-step-view>
                  ${e.steps.map((s=>this.#Z(e,s,t===this.#N.length-1)))}
                  ${!this.#E&&this.#k&&t===this.#N.length-1?he`<devtools-button
                    class="step add-assertion-button"
                    .data=${{variant:"outlined",title:me(ve.addAssertion),jslogContext:"add-assertion"}}
                    @click=${this.#H}
                  >${me(ve.addAssertion)}</devtools-button>`:void 0}
                  ${this.#k&&t===this.#N.length-1?he`<div class="step recording">${me(ve.recording)}</div>`:null}
                </div>
              </div>
            </div>
      `))}
      </div>
    `}#$e(){if(!this.#$)return"";const{title:t}=this.#$,s=!this.#x.isPlaying&&!this.#k;return he`
      <div class="header">
        <div class="header-title-wrapper">
          <div class="header-title">
            <span @blur=${this.#ce}
                  @keydown=${this.#de}
                  id="title-input"
                  .contentEditable=${s?"true":"false"}
                  jslog=${r.value("title").track({change:!0})}
                  class=${e.Directives.classMap({"has-error":this.#R,disabled:!s})}
                  .innerText=${e.Directives.live(t)}></span>
            <div class="title-button-bar">
              <devtools-button
                @click=${this.#pe}
                .data=${{disabled:!s,variant:"toolbar",iconName:"edit",title:me(ve.editTitle),jslogContext:"edit-title"}}
              ></devtools-button>
            </div>
          </div>
          ${this.#R?he`<div class="title-input-error-text">
            ${me(ve.requiredTitleError)}
          </div>`:""}
        </div>
        ${!this.#k&&this.#B?he`<div class="actions">
                <devtools-button
                  @click=${this.#xe}
                  .data=${{disabled:this.#x.isPlaying,variant:"outlined",iconName:"performance",title:me(ve.performancePanel),jslogContext:"measure-performance"}}
                >
                  ${me(ve.performancePanel)}
                </devtools-button>
                <div class="separator"></div>
                ${this.#Se()}
              </div>`:""}
      </div>`}#ke(){if(!this.#k)return"";const e=this.#E?me(ve.recordingIsBeingStopped):me(ve.endRecording);return he`
      <div class="footer">
        <div class="controls">
          <devtools-control-button
            jslog=${r.toggle("toggle-recording").track({click:!0})}
            @click=${this.#W}
            .disabled=${this.#E}
            .shape=${"square"}
            .label=${e}
            title=${n.Tooltip.getTooltipForActions(e,"chrome-recorder.start-recording")}
          >
          </devtools-control-button>
        </div>
      </div>
    `}#r(){const t={wrapper:!0,"is-recording":this.#k,"is-playing":this.#x.isPlaying,"was-successful":"Success"===this.#j,"was-failure":"Failure"===this.#j};e.render(he`
      <div @click=${this.#oe} class=${e.Directives.classMap(t)}>
        <div class="main">
          ${this.#$e()}
          ${this.#U?he`
            <devtools-recorder-extension-view .descriptor=${this.#U}>
            </devtools-recorder-extension-view>
          `:he`
            ${this.#ve()}
            ${this.#me()}
          `}
          ${this.#ke()}
        </div>
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-recording-view",Re);var Ce=Object.freeze({__proto__:null,AbortReplayEvent:we,AddAssertionEvent:Se,NetworkConditionsChanged:$e,PlayRecordingEvent:fe,RecordingChangedEvent:ye,RecordingFinishedEvent:be,RecordingTitleChangedEvent:xe,RecordingView:Re,TimeoutChanged:ke});const Te=new CSSStyleSheet;Te.replaceSync(".select-button{display:flex;gap:12px}.select-button devtools-button{position:relative}.select-button devtools-select-menu{position:relative;top:var(--sys-size-1);height:var(--sys-size-9)}.select-menu-item-content-with-icon{display:flex;align-items:center}\n/*# sourceURL=selectButton.css */\n");const{html:Ie,Directives:{ifDefined:Ne,classMap:je}}=e;class Ae extends Event{value;static eventName="selectbuttonclick";constructor(e){super(Ae.eventName,{bubbles:!0,composed:!0}),this.value=e}}class Me extends Event{value;static eventName="selectmenuselected";constructor(e){super(Me.eventName,{bubbles:!0,composed:!0}),this.value=e}}class Pe extends HTMLElement{#t=this.attachShadow({mode:"open"});#c={disabled:!1,value:"",items:[],buttonLabel:"",groups:[],variant:"primary"};connectedCallback(){this.#t.adoptedStyleSheets=[Te],a.ScheduledRender.scheduleRender(this,this.#r)}get disabled(){return this.#c.disabled}set disabled(e){this.#c.disabled=e,a.ScheduledRender.scheduleRender(this,this.#r)}get items(){return this.#c.items}set items(e){this.#c.items=e,a.ScheduledRender.scheduleRender(this,this.#r)}set buttonLabel(e){this.#c.buttonLabel=e}set groups(e){this.#c.groups=e,a.ScheduledRender.scheduleRender(this,this.#r)}get value(){return this.#c.value}set value(e){this.#c.value=e,a.ScheduledRender.scheduleRender(this,this.#r)}get variant(){return this.#c.variant}set variant(e){this.#c.variant=e,a.ScheduledRender.scheduleRender(this,this.#r)}set action(e){this.#c.action=e,a.ScheduledRender.scheduleRender(this,this.#r)}#Ee(e){e.stopPropagation(),this.dispatchEvent(new Ae(this.#c.value))}#Re(e){this.dispatchEvent(new Me(e.itemValue)),a.ScheduledRender.scheduleRender(this,this.#r)}#Ce(e,t){return Ie`
      <devtools-menu-item .value=${e.value} .selected=${e.value===t.value} jslog=${r.item(d.StringUtilities.toKebabCase(e.value)).track({click:!0})}>
        ${e.label()}
      </devtools-menu-item>
    `}#Te(e,t){return Ie`
      <devtools-menu-group .name=${e.name}>
        ${e.items.map((e=>this.#Ce(e,t)))}
      </devtools-menu-group>
    `}#Ie(e){return this.#c.action?n.Tooltip.getTooltipForActions(e,this.#c.action):""}#r=()=>{const t=Boolean(this.#c.groups.length),s=t?this.#c.groups.flatMap((e=>e.items)):this.#c.items,i=s.find((e=>e.value===this.#c.value))||s[0];if(!i)return;const o={primary:"primary"===this.#c.variant,secondary:"outlined"===this.#c.variant},r="outlined"===this.#c.variant?"outlined":"primary",n=i.buttonLabel?i.buttonLabel():i.label();e.render(Ie`
      <div class="select-button" title=${Ne(this.#Ie(n))}>
      <devtools-select-menu
          class=${je(o)}
          @selectmenuselected=${this.#Re}
          ?disabled=${this.#c.disabled}
          .showArrow=${!0}
          .sideButton=${!1}
          .showSelectedItem=${!0}
          .disabled=${this.#c.disabled}
          .buttonTitle=${()=>Ie`${n}`}
          .position=${"bottom"}
          .horizontalAlignment=${"right"}
        >
          ${t?this.#c.groups.map((e=>this.#Te(e,i))):this.#c.items.map((e=>this.#Ce(e,i)))}
        </devtools-select-menu>
        ${i?Ie`
        <devtools-button
            .disabled=${this.#c.disabled}
            .variant=${r}
            .iconName=${i.buttonIconName}
            @click=${this.#Ee}>
            ${this.#c.buttonLabel}
        </devtools-button>`:""}
      </div>`,this.#t,{host:this})}}customElements.define("devtools-select-button",Pe);var Be=Object.freeze({__proto__:null,SelectButton:Pe,SelectButtonClickEvent:Ae,SelectMenuSelectedEvent:Me});const Le=new CSSStyleSheet;Le.replaceSync("*{margin:0;padding:0;box-sizing:border-box;font-weight:normal;font-size:inherit}:host{flex:1;display:block;overflow:auto}.wrapper{padding:24px;background-color:var(--sys-color-cdt-base-container);height:100%;display:flex;flex-direction:column}.fit-content{width:fit-content}.align-right{width:auto;display:flex;flex-direction:row;justify-content:flex-end}\n/*# sourceURL=startView.css */\n");const{html:Oe}=e,Fe={header:"Measure performance across an entire user journey",step1:"Record a common user journey on your website or app",step2:"Replay the recording to check if the flow is working",step3:"Generate a detailed performance trace or export a Puppeteer script for testing",createRecording:"Create a new recording",quickStart:"Quick start: learn the new Recorder panel in DevTools"},De=s.i18n.registerUIStrings("panels/recorder/components/StartView.ts",Fe),ze=s.i18n.getLocalizedString.bind(void 0,De),_e="https://goo.gle/recorder-feedback";class Ve extends Event{static eventName="createrecording";constructor(){super(Ve.eventName)}}class Ue extends HTMLElement{#t=this.attachShadow({mode:"open"});constructor(){super(),this.setAttribute("jslog",`${r.section("start-view")}`)}connectedCallback(){this.#t.adoptedStyleSheets=[Le],a.ScheduledRender.scheduleRender(this,this.#r)}#Ne(){this.dispatchEvent(new Ve)}#r=()=>{e.render(Oe`
        <div class="wrapper">
          <devtools-panel-introduction-steps>
            <span slot="title">${ze(Fe.header)}</span>
            <span slot="step-1">${ze(Fe.step1)}</span>
            <span slot="step-2">${ze(Fe.step2)}</span>
            <span slot="step-3">${ze(Fe.step3)}</span>
          </devtools-panel-introduction-steps>
          <div class="fit-content">
            <devtools-button .variant=${"primary"} @click=${this.#Ne}
              .jslogContext=${"chrome-recorder.create-recording"}>
              ${ze(Fe.createRecording)}
            </devtools-button>
          </div>
          <devtools-panel-feedback .data=${{feedbackUrl:_e,quickStartUrl:"https://developer.chrome.com/docs/devtools/recorder",quickStartLinkText:ze(Fe.quickStart)}}>
          </devtools-panel-feedback>
          <div class="align-right">
            <devtools-feedback-button .data=${{feedbackUrl:_e}}>
            </devtools-feedback-button>
          </div>
        </div>
      `,this.#t,{host:this})}}customElements.define("devtools-start-view",Ue);var Ke=Object.freeze({__proto__:null,CreateRecordingEvent:Ve,FEEDBACK_URL:_e,StartView:Ue});const qe=new CSSStyleSheet;qe.replaceSync("*{box-sizing:border-box;padding:0;margin:0;font-size:inherit}:host{display:block}.row{display:flex;flex-direction:row;color:var(--sys-color-token-property-special);font-family:var(--monospace-font-family);font-size:var(--monospace-font-size);align-items:center;line-height:18px;margin-top:3px}.row devtools-button{line-height:1;margin-left:0.5em}.separator{margin-right:0.5em;color:var(--sys-color-on-surface)}.padded{margin-left:2em}.padded.double{margin-left:4em}.selector-picker{width:18px;height:18px}.inline-button{width:18px;height:18px;opacity:0%;visibility:hidden;transition:opacity 200ms;flex-shrink:0}.row:focus-within .inline-button,\n.row:hover .inline-button{opacity:100%;visibility:visible}.wrapped.row{flex-wrap:wrap}.gap.row{gap:5px}.gap.row devtools-button{margin-left:0}.regular-font{font-family:inherit;font-size:inherit}.no-margin{margin:0}.row-buttons{margin-top:3px}.error{margin:3px 0 6px;padding:8px 12px;background:var(--sys-color-error-container);color:var(--sys-color-error)}\n/*# sourceURL=stepEditor.css */\n");function Ge(e,t="Assertion failed!"){if(!e)throw new Error(t)}const He=e=>{for(const t of Reflect.ownKeys(e)){const s=e[t];(s&&"object"==typeof s||"function"==typeof s)&&He(s)}return Object.freeze(e)};class We{value;constructor(e){this.value=e}}class Xe{value;constructor(e){this.value=e}}const Ye=(e,t)=>{if(t instanceof Xe){Ge(Array.isArray(e),`Expected an array. Got ${typeof e}.`);const s=[...e],i=Object.keys(t.value).sort(((e,t)=>Number(t)-Number(e)));for(const e of i){const i=t.value[Number(e)];void 0===i?s.splice(Number(e),1):i instanceof We?s.splice(Number(e),0,i.value):s[Number(e)]=Ye(s[e],i)}return Object.freeze(s)}if("object"==typeof t&&!Array.isArray(t)){Ge(!Array.isArray(e),"Expected an object. Got an array.");const s={...e},i=Object.keys(t);for(const e of i){const i=t[e];void 0===i?delete s[e]:s[e]=Ye(s[e],i)}return Object.freeze(s)}return t};var Je=self&&self.__decorate||function(e,t,s,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,s,n):o(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};const{html:Qe,Decorators:Ze,Directives:et,LitElement:tt}=e,{customElement:st,property:it,state:ot}=Ze,{live:rt}=et,nt=Object.freeze({string:e=>e.trim(),number:e=>{const t=parseFloat(e);return Number.isNaN(t)?0:t},boolean:e=>"true"===e.toLowerCase()}),at=Object.freeze({selectors:"string",offsetX:"number",offsetY:"number",target:"string",frame:"number",assertedEvents:"string",value:"string",key:"string",operator:"string",count:"number",expression:"string",x:"number",y:"number",url:"string",type:"string",timeout:"number",duration:"number",button:"string",deviceType:"string",width:"number",height:"number",deviceScaleFactor:"number",isMobile:"boolean",hasTouch:"boolean",isLandscape:"boolean",download:"number",upload:"number",latency:"number",name:"string",parameters:"string",visible:"boolean",properties:"string",attributes:"string"}),lt=He({selectors:[[".cls"]],offsetX:1,offsetY:1,target:"main",frame:[0],assertedEvents:[{type:"navigation",url:"https://example.com",title:"Title"}],value:"Value",key:"Enter",operator:">=",count:1,expression:"true",x:0,y:0,url:"https://example.com",timeout:5e3,duration:50,deviceType:"mouse",button:"primary",type:"click",width:800,height:600,deviceScaleFactor:1,isMobile:!1,hasTouch:!1,isLandscape:!0,download:1e3,upload:1e3,latency:25,name:"customParam",parameters:"{}",properties:"{}",attributes:[{name:"attribute",value:"value"}],visible:!0}),ct=He({[n.Schema.StepType.Click]:{required:["selectors","offsetX","offsetY"],optional:["assertedEvents","button","deviceType","duration","frame","target","timeout"]},[n.Schema.StepType.DoubleClick]:{required:["offsetX","offsetY","selectors"],optional:["assertedEvents","button","deviceType","frame","target","timeout"]},[n.Schema.StepType.Hover]:{required:["selectors"],optional:["assertedEvents","frame","target","timeout"]},[n.Schema.StepType.Change]:{required:["selectors","value"],optional:["assertedEvents","frame","target","timeout"]},[n.Schema.StepType.KeyDown]:{required:["key"],optional:["assertedEvents","target","timeout"]},[n.Schema.StepType.KeyUp]:{required:["key"],optional:["assertedEvents","target","timeout"]},[n.Schema.StepType.Scroll]:{required:[],optional:["assertedEvents","frame","target","timeout","x","y"]},[n.Schema.StepType.Close]:{required:[],optional:["assertedEvents","target","timeout"]},[n.Schema.StepType.Navigate]:{required:["url"],optional:["assertedEvents","target","timeout"]},[n.Schema.StepType.WaitForElement]:{required:["selectors"],optional:["assertedEvents","attributes","count","frame","operator","properties","target","timeout","visible"]},[n.Schema.StepType.WaitForExpression]:{required:["expression"],optional:["assertedEvents","frame","target","timeout"]},[n.Schema.StepType.CustomStep]:{required:["name","parameters"],optional:["assertedEvents","target","timeout"]},[n.Schema.StepType.EmulateNetworkConditions]:{required:["download","latency","upload"],optional:["assertedEvents","target","timeout"]},[n.Schema.StepType.SetViewport]:{required:["deviceScaleFactor","hasTouch","height","isLandscape","isMobile","width"],optional:["assertedEvents","target","timeout"]}}),dt={notSaved:"Not saved: {error}",addAttribute:"Add {attributeName}",deleteRow:"Delete row",selectorPicker:"Select an element in the page to update selectors",addFrameIndex:"Add frame index within the frame tree",removeFrameIndex:"Remove frame index",addSelectorPart:"Add a selector part",removeSelectorPart:"Remove a selector part",addSelector:"Add a selector",removeSelector:"Remove a selector",unknownActionType:"Unknown action type."},pt=s.i18n.registerUIStrings("panels/recorder/components/StepEditor.ts",dt),ut=s.i18n.getLocalizedString.bind(void 0,pt);class ht extends Event{static eventName="stepedited";data;constructor(e){super(ht.eventName,{bubbles:!0,composed:!0}),this.data=e}}class vt{static#je=new f.SharedObject.SharedObject((()=>n.RecordingPlayer.RecordingPlayer.connectPuppeteer()),(({browser:e})=>n.RecordingPlayer.RecordingPlayer.disconnectPuppeteer(e)));static async default(e){const t={type:e},s=ct[t.type];let i=Promise.resolve();for(const e of s.required)i=Promise.all([i,(async()=>Object.assign(t,{[e]:await this.defaultByAttribute(t,e)}))()]);return await i,Object.freeze(t)}static async defaultByAttribute(e,t){return this.#je.run((e=>{switch(t){case"assertedEvents":return Ye(lt.assertedEvents,new Xe({0:{url:e.page.url()||lt.assertedEvents[0].url}}));case"url":return e.page.url()||lt.url;case"height":return e.page.evaluate((()=>visualViewport.height))||lt.height;case"width":return e.page.evaluate((()=>visualViewport.width))||lt.width;default:return lt[t]}}))}static fromStep(e){const t=structuredClone(e);for(const s of["parameters","properties"])s in e&&void 0!==e[s]&&(t[s]=JSON.stringify(e[s]));if("attributes"in e&&e.attributes){t.attributes=[];for(const[s,i]of Object.entries(e.attributes))t.attributes.push({name:s,value:i})}return"selectors"in e&&(t.selectors=e.selectors.map((e=>"string"==typeof e?[e]:[...e]))),He(t)}static toStep(e){const t=structuredClone(e);for(const s of["parameters","properties"]){const i=e[s];i&&Object.assign(t,{[s]:JSON.parse(i)})}if(e.attributes)if(0!==e.attributes.length){const s={};for(const{name:t,value:i}of e.attributes)Object.assign(s,{[t]:i});Object.assign(t,{attributes:s})}else"attributes"in t&&delete t.attributes;if(e.selectors){const s=e.selectors.filter((e=>e.length>0)).map((e=>1===e.length?e[0]:[...e]));0!==s.length?Object.assign(t,{selectors:s}):"selectors"in t&&delete t.selectors}return e.frame&&0===e.frame.length&&"frame"in t&&delete t.frame,s=n.SchemaUtils.parseStep(t),JSON.parse(JSON.stringify(s));var s}}let gt=class extends tt{static styles=[qe];#Ae=new b.SelectorPicker.SelectorPicker(this);constructor(){super(),this.disabled=!1}#e=e=>{e.preventDefault(),e.stopPropagation(),this.#Ae.toggle()};disconnectedCallback(){super.disconnectedCallback(),this.#Ae.stop()}render(){if(!this.disabled)return Qe`<devtools-button
      @click=${this.#e}
      .title=${ut(dt.selectorPicker)}
      class="selector-picker"
      .size=${"SMALL"}
      .iconName=${"select-element"}
      .active=${this.#Ae.active}
      .variant=${"icon"}
      jslog=${r.toggle("selector-picker").track({click:!0})}
    ></devtools-button>`}};Je([it({type:Boolean})],gt.prototype,"disabled",void 0),gt=Je([st("devtools-recorder-selector-picker-button")],gt);let mt=class extends tt{static styles=[qe];#Me=new Set;constructor(){super(),this.state={type:n.Schema.StepType.WaitForElement},this.isTypeEditable=!0,this.disabled=!1}createRenderRoot(){const e=super.createRenderRoot();return e.addEventListener("keydown",this.#Pe),e}set step(e){this.state=He(vt.fromStep(e)),this.error=void 0}#Be(e){try{this.dispatchEvent(new ht(vt.toStep(e))),this.state=e}catch(e){this.error=e.message}}#Le=e=>{e.preventDefault(),e.stopPropagation(),this.#Be(Ye(this.state,{target:e.data.target,frame:e.data.frame,selectors:e.data.selectors.map((e=>"string"==typeof e?[e]:e)),offsetX:e.data.offsetX,offsetY:e.data.offsetY}))};#Oe=(e,t,s)=>i=>{i.preventDefault(),i.stopPropagation(),this.#Be(Ye(this.state,e)),this.#Fe(t),s&&c.userMetrics.recordingEdited(s)};#Pe=e=>{if(Ge(e instanceof KeyboardEvent),e.target instanceof m.SuggestionInput.SuggestionInput&&"Enter"===e.key){e.preventDefault(),e.stopPropagation();const t=this.renderRoot.querySelectorAll("devtools-suggestion-input"),s=[...t].findIndex((t=>t===e.target));s>=0&&s+1<t.length?t[s+1].focus():e.target.blur()}};#De=e=>t=>{if(Ge(t.target instanceof m.SuggestionInput.SuggestionInput),t.target.disabled)return;const s=at[e.attribute],i=nt[s](t.target.value),o=e.from.bind(this)(i);o&&(this.#Be(Ye(this.state,o)),e.metric&&c.userMetrics.recordingEdited(e.metric))};#ze=async e=>{if(Ge(e.target instanceof m.SuggestionInput.SuggestionInput),e.target.disabled)return;const t=e.target.value;t!==this.state.type&&(Object.values(n.Schema.StepType).includes(t)?(this.#Be(await vt.default(t)),c.userMetrics.recordingEdited(9)):this.error=ut(dt.unknownActionType))};#_e=async e=>{e.preventDefault(),e.stopPropagation();const t=e.target.dataset.attribute;this.#Be(Ye(this.state,{[t]:await vt.defaultByAttribute(this.state,t)})),this.#Fe(`[data-attribute=${t}].attribute devtools-suggestion-input`)};#Ve(e){if(!this.disabled)return Qe`
      <devtools-button
        title=${e.title}
        .size=${"SMALL"}
        .iconName=${e.iconName}
        .variant=${"icon"}
        jslog=${r.action(e.class).track({click:!0})}
        class="inline-button ${e.class}"
        @click=${e.onClick}
      ></devtools-button>
    `}#Ue(e){if(this.disabled)return;return[...ct[this.state.type].optional].includes(e)&&!this.disabled?Qe`<devtools-button
      .size=${"SMALL"}
      .iconName=${"bin"}
      .variant=${"icon"}
      .title=${ut(dt.deleteRow)}
      class="inline-button delete-row"
      data-attribute=${e}
      jslog=${r.action("delete").track({click:!0})}
      @click=${t=>{t.preventDefault(),t.stopPropagation(),this.#Be(Ye(this.state,{[e]:void 0}))}}
    ></devtools-button>`:void 0}#Ke(e){return this.#Me.add("type"),Qe`<div class="row attribute" data-attribute="type" jslog=${r.treeItem("type")}>
      <div>type<span class="separator">:</span></div>
      <devtools-suggestion-input
        .disabled=${!e||this.disabled}
        .options=${Object.values(n.Schema.StepType)}
        .placeholder=${lt.type}
        .value=${rt(this.state.type)}
        @blur=${this.#ze}
      ></devtools-suggestion-input>
    </div>`}#qe(e){this.#Me.add(e);const t=this.state[e]?.toString();if(void 0!==t)return Qe`<div class="row attribute" data-attribute=${e} jslog=${r.treeItem(d.StringUtilities.toKebabCase(e))}>
      <div>${e}<span class="separator">:</span></div>
      <devtools-suggestion-input
        .disabled=${this.disabled}
        .placeholder=${lt[e].toString()}
        .value=${rt(t)}
        .mimeType=${(()=>{switch(e){case"expression":return"text/javascript";case"properties":return"application/json";default:return""}})()}
        @blur=${this.#De({attribute:e,from(t){if(void 0!==this.state[e]){if("properties"===e)c.userMetrics.recordingAssertion(2);return{[e]:t}}},metric:10})}
      ></devtools-suggestion-input>
      ${this.#Ue(e)}
    </div>`}#Ge(){if(this.#Me.add("frame"),void 0!==this.state.frame)return Qe`
      <div class="attribute" data-attribute="frame" jslog=${r.treeItem("frame")}>
        <div class="row">
          <div>frame<span class="separator">:</span></div>
          ${this.#Ue("frame")}
        </div>
        ${this.state.frame.map(((e,t,s)=>Qe`
            <div class="padded row">
              <devtools-suggestion-input
                .disabled=${this.disabled}
                .placeholder=${lt.frame[0].toString()}
                .value=${rt(e.toString())}
                data-path=${`frame.${t}`}
                @blur=${this.#De({attribute:"frame",from(e){if(void 0!==this.state.frame?.[t])return{frame:new Xe({[t]:e})}},metric:10})}
              ></devtools-suggestion-input>
              ${this.#Ve({class:"add-frame",title:ut(dt.addFrameIndex),iconName:"plus",onClick:this.#Oe({frame:new Xe({[t+1]:new We(lt.frame[0])})},`devtools-suggestion-input[data-path="frame.${t+1}"]`,10)})}
              ${this.#Ve({class:"remove-frame",title:ut(dt.removeFrameIndex),iconName:"minus",onClick:this.#Oe({frame:new Xe({[t]:void 0})},`devtools-suggestion-input[data-path="frame.${Math.min(t,s.length-2)}"]`,10)})}
            </div>
          `))}
      </div>
    `}#He(){if(this.#Me.add("selectors"),void 0!==this.state.selectors)return Qe`<div class="attribute" data-attribute="selectors" jslog=${r.treeItem("selectors")}>
      <div class="row">
        <div>selectors<span class="separator">:</span></div>
        <devtools-recorder-selector-picker-button
          @selectorpicked=${this.#Le}
          .disabled=${this.disabled}
        ></devtools-recorder-selector-picker-button>
        ${this.#Ue("selectors")}
      </div>
      ${this.state.selectors.map(((e,t,s)=>Qe`<div class="padded row" data-selector-path=${t}>
            <div>selector #${t+1}<span class="separator">:</span></div>
            ${this.#Ve({class:"add-selector",title:ut(dt.addSelector),iconName:"plus",onClick:this.#Oe({selectors:new Xe({[t+1]:new We(structuredClone(lt.selectors[0]))})},`devtools-suggestion-input[data-path="selectors.${t+1}.0"]`,4)})}
            ${this.#Ve({class:"remove-selector",title:ut(dt.removeSelector),iconName:"minus",onClick:this.#Oe({selectors:new Xe({[t]:void 0})},`devtools-suggestion-input[data-path="selectors.${Math.min(t,s.length-2)}.0"]`,5)})}
          </div>
          ${e.map(((e,s,i)=>Qe`<div
              class="double padded row"
              data-selector-path="${t}.${s}"
            >
              <devtools-suggestion-input
                .disabled=${this.disabled}
                .placeholder=${lt.selectors[0][0]}
                .value=${rt(e)}
                data-path=${`selectors.${t}.${s}`}
                @blur=${this.#De({attribute:"selectors",from(e){if(void 0!==this.state.selectors?.[t]?.[s])return{selectors:new Xe({[t]:new Xe({[s]:e})})}},metric:7})}
              ></devtools-suggestion-input>
              ${this.#Ve({class:"add-selector-part",title:ut(dt.addSelectorPart),iconName:"plus",onClick:this.#Oe({selectors:new Xe({[t]:new Xe({[s+1]:new We(lt.selectors[0][0])})})},`devtools-suggestion-input[data-path="selectors.${t}.${s+1}"]`,6)})}
              ${this.#Ve({class:"remove-selector-part",title:ut(dt.removeSelectorPart),iconName:"minus",onClick:this.#Oe({selectors:new Xe({[t]:new Xe({[s]:void 0})})},`devtools-suggestion-input[data-path="selectors.${t}.${Math.min(s,i.length-2)}"]`,8)})}
            </div>`))}`))}
    </div>`}#We(){if(this.#Me.add("assertedEvents"),void 0!==this.state.assertedEvents)return Qe`<div class="attribute" data-attribute="assertedEvents" jslog=${r.treeItem("asserted-events")}>
      <div class="row">
        <div>asserted events<span class="separator">:</span></div>
        ${this.#Ue("assertedEvents")}
      </div>
      ${this.state.assertedEvents.map(((e,t)=>Qe` <div class="padded row" jslog=${r.treeItem("event-type")}>
            <div>type<span class="separator">:</span></div>
            <div>${e.type}</div>
          </div>
          <div class="padded row" jslog=${r.treeItem("event-title")}>
            <div>title<span class="separator">:</span></div>
            <devtools-suggestion-input
              .disabled=${this.disabled}
              .placeholder=${lt.assertedEvents[0].title}
              .value=${rt(e.title??"")}
              @blur=${this.#De({attribute:"assertedEvents",from(e){if(void 0!==this.state.assertedEvents?.[t]?.title)return{assertedEvents:new Xe({[t]:{title:e}})}},metric:10})}
            ></devtools-suggestion-input>
          </div>
          <div class="padded row" jslog=${r.treeItem("event-url")}>
            <div>url<span class="separator">:</span></div>
            <devtools-suggestion-input
              .disabled=${this.disabled}
              .placeholder=${lt.assertedEvents[0].url}
              .value=${rt(e.url??"")}
              @blur=${this.#De({attribute:"url",from(e){if(void 0!==this.state.assertedEvents?.[t]?.url)return{assertedEvents:new Xe({[t]:{url:e}})}},metric:10})}
            ></devtools-suggestion-input>
          </div>`))}
    </div> `}#Xe(){if(this.#Me.add("attributes"),void 0!==this.state.attributes)return Qe`<div class="attribute" data-attribute="attributes" jslog=${r.treeItem("attributes")}>
      <div class="row">
        <div>attributes<span class="separator">:</span></div>
        ${this.#Ue("attributes")}
      </div>
      ${this.state.attributes.map((({name:e,value:t},s,i)=>Qe`<div class="padded row" jslog=${r.treeItem("attribute")}>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${lt.attributes[0].name}
            .value=${rt(e)}
            data-path=${`attributes.${s}.name`}
            jslog=${r.key().track({change:!0})}
            @blur=${this.#De({attribute:"attributes",from(e){if(void 0!==this.state.attributes?.[s]?.name)return c.userMetrics.recordingAssertion(3),{attributes:new Xe({[s]:{name:e}})}},metric:10})}
          ></devtools-suggestion-input>
          <span class="separator">:</span>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${lt.attributes[0].value}
            .value=${rt(t)}
            data-path=${`attributes.${s}.value`}
            @blur=${this.#De({attribute:"attributes",from(e){if(void 0!==this.state.attributes?.[s]?.value)return c.userMetrics.recordingAssertion(3),{attributes:new Xe({[s]:{value:e}})}},metric:10})}
          ></devtools-suggestion-input>
          ${this.#Ve({class:"add-attribute-assertion",title:ut(dt.addSelectorPart),iconName:"plus",onClick:this.#Oe({attributes:new Xe({[s+1]:new We((()=>{{const e=new Set(i.map((({name:e})=>e))),t=lt.attributes[0];let s=t.name,o=0;for(;e.has(s);)++o,s=`${t.name}-${o}`;return{...t,name:s}}})())})},`devtools-suggestion-input[data-path="attributes.${s+1}.name"]`,10)})}
          ${this.#Ve({class:"remove-attribute-assertion",title:ut(dt.removeSelectorPart),iconName:"minus",onClick:this.#Oe({attributes:new Xe({[s]:void 0})},`devtools-suggestion-input[data-path="attributes.${Math.min(s,i.length-2)}.value"]`,10)})}
        </div>`))}
    </div>`}#Ye(){return[...ct[this.state.type].optional].filter((e=>void 0===this.state[e])).map((e=>Qe`<devtools-button
          .variant=${"outlined"}
          class="add-row"
          data-attribute=${e}
          jslog=${r.action(`add-${d.StringUtilities.toKebabCase(e)}`)}
          @click=${this.#_e}
        >
          ${ut(dt.addAttribute,{attributeName:e})}
        </devtools-button>`))}#Fe=e=>{this.updateComplete.then((()=>{const t=this.renderRoot.querySelector(e);t?.focus()}))};render(){this.#Me=new Set;const e=Qe`
      <div class="wrapper" jslog=${r.tree("step-editor")}>
        ${this.#Ke(this.isTypeEditable)} ${this.#qe("target")}
        ${this.#Ge()} ${this.#He()}
        ${this.#qe("deviceType")} ${this.#qe("button")}
        ${this.#qe("url")} ${this.#qe("x")}
        ${this.#qe("y")} ${this.#qe("offsetX")}
        ${this.#qe("offsetY")} ${this.#qe("value")}
        ${this.#qe("key")} ${this.#qe("operator")}
        ${this.#qe("count")} ${this.#qe("expression")}
        ${this.#qe("duration")} ${this.#We()}
        ${this.#qe("timeout")} ${this.#qe("width")}
        ${this.#qe("height")} ${this.#qe("deviceScaleFactor")}
        ${this.#qe("isMobile")} ${this.#qe("hasTouch")}
        ${this.#qe("isLandscape")} ${this.#qe("download")}
        ${this.#qe("upload")} ${this.#qe("latency")}
        ${this.#qe("name")} ${this.#qe("parameters")}
        ${this.#qe("visible")} ${this.#qe("properties")}
        ${this.#Xe()}
        ${this.error?Qe`
              <div class="error">
                ${ut(dt.notSaved,{error:this.error})}
              </div>
            `:void 0}
        ${this.disabled?void 0:Qe`<div
              class="row-buttons wrapped gap row regular-font no-margin"
            >
              ${this.#Ye()}
            </div>`}
      </div>
    `;for(const e of Object.keys(at))if(!this.#Me.has(e))throw new Error(`The editable attribute ${e} does not have UI`);return e}};Je([ot()],mt.prototype,"state",void 0),Je([ot()],mt.prototype,"error",void 0),Je([it({type:Boolean})],mt.prototype,"isTypeEditable",void 0),Je([it({type:Boolean})],mt.prototype,"disabled",void 0),mt=Je([st("devtools-recorder-step-editor")],mt);var bt=Object.freeze({__proto__:null,EditorState:vt,StepEditedEvent:ht,get StepEditor(){return mt}});const ft=new CSSStyleSheet;ft.replaceSync("*{margin:0;padding:0;box-sizing:border-box;font-size:inherit}.timeline-section{position:relative;padding:16px 0 16px 40px;margin-left:8px;--override-color-recording-successful-text:#36a854;--override-color-recording-successful-background:#e6f4ea}.overlay{position:absolute;width:100vw;height:100%;left:calc(-32px - 80px);top:0;z-index:-1;pointer-events:none}@container (max-width: 400px){.overlay{left:-32px}}:hover .overlay{background:var(--sys-color-state-hover-on-subtle)}.is-selected .overlay{background:var(--sys-color-tonal-container)}:host-context(.is-stopped) .overlay{background:var(--sys-color-state-ripple-primary);outline:1px solid var(--sys-color-state-focus-ring);z-index:4}.is-start-of-group{padding-top:28px}.is-end-of-group{padding-bottom:24px}.icon{position:absolute;left:4px;transform:translateX(-50%);z-index:2}.bar{position:absolute;left:4px;display:block;transform:translateX(-50%);top:18px;height:calc(100% + 8px);z-index:1}.bar .background{fill:var(--sys-color-state-hover-on-subtle)}.bar .line{fill:var(--sys-color-primary)}.is-first-section .bar{top:32px;height:calc(100% - 8px);display:none}.is-first-section:not(.is-last-section) .bar{display:block}.is-last-section .bar .line{display:none}.is-last-section .bar .background{display:none}:host-context(.is-error) .bar .line{fill:var(--sys-color-error)}:host-context(.is-error) .bar .background{fill:var(--sys-color-error-container)}:host-context(.was-successful) .bar .background{animation:flash-background 2s}:host-context(.was-successful) .bar .line{animation:flash-line 2s}@keyframes flash-background{25%{fill:var(--override-color-recording-successful-background)}75%{fill:var(--override-color-recording-successful-background)}}@keyframes flash-line{25%{fill:var(--override-color-recording-successful-text)}75%{fill:var(--override-color-recording-successful-text)}}\n/*# sourceURL=timelineSection.css */\n");const{html:wt}=e;class yt extends HTMLElement{#Je=!1;#Qe=!1;#Ze=!1;#et=!1;#tt=!1;constructor(){super();this.attachShadow({mode:"open"}).adoptedStyleSheets=[ft]}set data(e){this.#Ze=e.isFirstSection,this.#et=e.isLastSection,this.#Je=e.isEndOfGroup,this.#Qe=e.isStartOfGroup,this.#tt=e.isSelected,this.#r()}connectedCallback(){this.#r()}#r(){const t={"timeline-section":!0,"is-end-of-group":this.#Je,"is-start-of-group":this.#Qe,"is-first-section":this.#Ze,"is-last-section":this.#et,"is-selected":this.#tt};e.render(wt`
      <div class=${e.Directives.classMap(t)}>
        <div class="overlay"></div>
        <div class="icon"><slot name="icon"></slot></div>
        <svg width="24" height="100%" class="bar">
          <rect class="line" x="7" y="0" width="2" height="100%" />
        </svg>
        <slot></slot>
      </div>
    `,this.shadowRoot,{host:this})}}customElements.define("devtools-timeline-section",yt);var St=Object.freeze({__proto__:null,TimelineSection:yt});const xt=new CSSStyleSheet;xt.replaceSync("*{margin:0;padding:0;box-sizing:border-box;font-size:inherit}.title-container{max-width:calc(100% - 18px);font-size:13px;line-height:16px;letter-spacing:0.03em;display:flex;flex-direction:row;gap:3px;outline-offset:3px}.action{display:flex;align-items:flex-start}.title{flex:1;min-width:0}.is-start-of-group .title{font-weight:bold}.error-icon{display:none}.breakpoint-icon{visibility:hidden;cursor:pointer;opacity:0%;fill:var(--sys-color-primary);stroke:#1a73e8;transform:translate(-1.92px,-3px)}.circle-icon{fill:var(--sys-color-primary);stroke:var(--sys-color-cdt-base-container);stroke-width:4px;r:5px;cx:8px;cy:8px}.is-start-of-group .circle-icon{r:7px;fill:var(--sys-color-cdt-base-container);stroke:var(--sys-color-primary);stroke-width:2px}.step.is-success .circle-icon{fill:var(--sys-color-primary);stroke:var(--sys-color-primary)}.step.is-current .circle-icon{stroke-dasharray:24 10;animation:rotate 1s linear infinite;fill:var(--sys-color-cdt-base-container);stroke:var(--sys-color-primary);stroke-width:2px}.error{margin:16px 0 0;padding:8px;background:var(--sys-color-error-container);color:var(--sys-color-error);position:relative}@keyframes rotate{0%{transform:translate(8px,8px) rotate(0) translate(-8px,-8px)}100%{transform:translate(8px,8px) rotate(360deg) translate(-8px,-8px)}}.step.is-error .circle-icon{fill:var(--sys-color-error);stroke:var(--sys-color-error)}.step.is-error .error-icon{display:block;transform:translate(4px,4px)}:host-context(.was-successful) .circle-icon{animation:flash-circle 2s}:host-context(.was-successful) .breakpoint-icon{animation:flash-breakpoint-icon 2s}@keyframes flash-circle{25%{fill:var(--override-color-recording-successful-text);stroke:var(--override-color-recording-successful-text)}75%{fill:var(--override-color-recording-successful-text);stroke:var(--override-color-recording-successful-text)}}@keyframes flash-breakpoint-icon{25%{fill:var(--override-color-recording-successful-text);stroke:var(--override-color-recording-successful-text)}75%{fill:var(--override-color-recording-successful-text);stroke:var(--override-color-recording-successful-text)}}.chevron{width:14px;height:14px;transition:200ms;position:absolute;top:18px;left:24px;transform:rotate(-90deg);color:var(--sys-color-on-surface)}.expanded .chevron{transform:rotate(0deg)}.is-start-of-group .chevron{top:34px}.details{display:none;margin-top:8px;position:relative}.expanded .details{display:block}.step-details{overflow:auto}devtools-recorder-step-editor{border:1px solid var(--sys-color-neutral-outline);padding:3px 6px 6px;margin-left:-6px;border-radius:3px}devtools-recorder-step-editor:hover{border:1px solid var(--sys-color-neutral-outline)}devtools-recorder-step-editor.is-selected{background-color:color-mix(in sRGB,var(--sys-color-tonal-container),var(--sys-color-cdt-base-container) 50%);border:1px solid var(--sys-color-tonal-outline)}.summary{display:flex;flex-flow:row nowrap}.filler{flex-grow:1}.subtitle{font-weight:normal;color:var(--sys-color-on-surface-subtle);word-break:break-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.main-title{word-break:break-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.step-actions{border:none;border-radius:0;height:24px;--override-select-menu-show-button-border-radius:0;--override-select-menu-show-button-outline:none;--override-select-menu-show-button-padding:0}.step.has-breakpoint .circle-icon{visibility:hidden}.step:not(.is-start-of-group).has-breakpoint .breakpoint-icon{visibility:visible;opacity:100%}.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .circle-icon{transition:opacity 0.2s;opacity:0%}.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .error-icon{visibility:hidden}.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .breakpoint-icon{transition:opacity 0.2s;visibility:visible;opacity:50%}\n/*# sourceURL=stepView.css */\n");const{html:$t}=e,kt={setViewportClickTitle:"Set viewport",customStepTitle:"Custom step",clickStepTitle:"Click",doubleClickStepTitle:"Double click",hoverStepTitle:"Hover",emulateNetworkConditionsStepTitle:"Emulate network conditions",changeStepTitle:"Change",closeStepTitle:"Close",scrollStepTitle:"Scroll",keyUpStepTitle:"Key up",navigateStepTitle:"Navigate",keyDownStepTitle:"Key down",waitForElementStepTitle:"Wait for element",waitForExpressionStepTitle:"Wait for expression",elementRoleButton:"Button",elementRoleInput:"Input",elementRoleFallback:"Element",addStepBefore:"Add step before",addStepAfter:"Add step after",removeStep:"Remove step",openStepActions:"Open step actions",addBreakpoint:"Add breakpoint",removeBreakpoint:"Remove breakpoint",copyAs:"Copy as",stepManagement:"Manage steps",breakpoints:"Breakpoints"},Et=s.i18n.registerUIStrings("panels/recorder/components/StepView.ts",kt),Rt=s.i18n.getLocalizedString.bind(void 0,Et);class Ct extends Event{static eventName="captureselectors";data;constructor(e){super(Ct.eventName,{bubbles:!0,composed:!0}),this.data=e}}class Tt extends Event{static eventName="stopselectorscapture";constructor(){super(Tt.eventName,{bubbles:!0,composed:!0})}}class It extends Event{static eventName="copystep";step;constructor(e){super(It.eventName,{bubbles:!0,composed:!0}),this.step=e}}class Nt extends Event{static eventName="stepchanged";currentStep;newStep;constructor(e,t){super(Nt.eventName,{bubbles:!0,composed:!0}),this.currentStep=e,this.newStep=t}}class jt extends Event{static eventName="addstep";position;stepOrSection;constructor(e,t){super(jt.eventName,{bubbles:!0,composed:!0}),this.stepOrSection=e,this.position=t}}class At extends Event{static eventName="removestep";step;constructor(e){super(At.eventName,{bubbles:!0,composed:!0}),this.step=e}}class Mt extends Event{static eventName="addbreakpoint";index;constructor(e){super(Mt.eventName,{bubbles:!0,composed:!0}),this.index=e}}class Pt extends Event{static eventName="removebreakpoint";index;constructor(e){super(Pt.eventName,{bubbles:!0,composed:!0}),this.index=e}}const Bt="copy-step-as-";function Lt(e){if(!("selectors"in e))return"";const t=e.selectors.flat().find((e=>e.startsWith("aria/")));if(!t)return"";const s=t.match(/^aria\/(.+?)(\[role="(.+)"\])?$/);return s?`${function(e){switch(e){case"button":return Rt(kt.elementRoleButton);case"input":return Rt(kt.elementRoleInput);default:return Rt(kt.elementRoleFallback)}}(s[3])} "${s[1]}"`:""}function Ot(t,s,i){if(!t.step&&!t.section)return;const o={step:!0,expanded:t.showDetails,"is-success":"success"===t.state,"is-current":"current"===t.state,"is-outstanding":"outstanding"===t.state,"is-error":"error"===t.state,"is-stopped":"stopped"===t.state,"is-start-of-group":t.isStartOfGroup,"is-first-section":t.isFirstSection,"has-breakpoint":t.hasBreakpoint},a=Boolean(t.step),l=function(e){if(e.section)return e.section.title?e.section.title:$t`<span class="fallback">(No Title)</span>`;if(!e.step)throw new Error("Missing both step and section");switch(e.step.type){case n.Schema.StepType.CustomStep:return Rt(kt.customStepTitle);case n.Schema.StepType.SetViewport:return Rt(kt.setViewportClickTitle);case n.Schema.StepType.Click:return Rt(kt.clickStepTitle);case n.Schema.StepType.DoubleClick:return Rt(kt.doubleClickStepTitle);case n.Schema.StepType.Hover:return Rt(kt.hoverStepTitle);case n.Schema.StepType.EmulateNetworkConditions:return Rt(kt.emulateNetworkConditionsStepTitle);case n.Schema.StepType.Change:return Rt(kt.changeStepTitle);case n.Schema.StepType.Close:return Rt(kt.closeStepTitle);case n.Schema.StepType.Scroll:return Rt(kt.scrollStepTitle);case n.Schema.StepType.KeyUp:return Rt(kt.keyUpStepTitle);case n.Schema.StepType.KeyDown:return Rt(kt.keyDownStepTitle);case n.Schema.StepType.WaitForElement:return Rt(kt.waitForElementStepTitle);case n.Schema.StepType.WaitForExpression:return Rt(kt.waitForExpressionStepTitle);case n.Schema.StepType.Navigate:return Rt(kt.navigateStepTitle)}}({step:t.step,section:t.section}),c=t.step?Lt(t.step):d?d.url:"";var d;e.render($t`
    <devtools-timeline-section .data=${{isFirstSection:t.isFirstSection,isLastSection:t.isLastSection,isStartOfGroup:t.isStartOfGroup,isEndOfGroup:t.isEndOfGroup,isSelected:t.isSelected}} @contextmenu=${t.onStepContextMenu} data-step-index=${t.stepIndex} data-section-index=${t.sectionIndex} class=${e.Directives.classMap(o)}>
      <svg slot="icon" width="24" height="24" height="100%" class="icon">
        <circle class="circle-icon"/>
        <g class="error-icon">
          <path d="M1.5 1.5L6.5 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.5 6.5L6.5 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <path @click=${t.onBreakpointClick} jslog=${r.action("breakpoint").track({click:!0})} class="breakpoint-icon" d="M2.5 5.5H17.7098L21.4241 12L17.7098 18.5H2.5V5.5Z"/>
      </svg>
      <div class="summary">
        <div class="title-container ${a?"action":""}"
          @click=${a&&t.toggleShowDetails}
          @keydown=${a&&t.onToggleShowDetailsKeydown}
          tabindex="0"
          jslog=${r.sectionHeader().track({click:!0})}
          aria-role=${a?"button":""}
          aria-label=${a?"Show details for step":""}
        >
          ${a?$t`<devtools-icon
                  class="chevron"
                  jslog=${r.expand().track({click:!0})}
                  name="triangle-down">
                </devtools-icon>`:""}
          <div class="title">
            <div class="main-title" title=${l}>${l}</div>
            <div class="subtitle" title=${c}>${c}</div>
          </div>
        </div>
        <div class="filler"></div>
        ${function(e){return $t`
    <devtools-button
      class="step-actions"
      title=${Rt(kt.openStepActions)}
      aria-label=${Rt(kt.openStepActions)}
      @click=${e.onStepContextMenu}
      @keydown=${e=>{e.stopPropagation()}}
      jslog=${r.dropDown("step-actions").track({click:!0})}
      .data=${{variant:"icon",iconName:"dots-vertical",title:Rt(kt.openStepActions)}}
    ></devtools-button>
  `}(t)}
      </div>
      <div class="details">
        ${t.step&&$t`<devtools-recorder-step-editor
          class=${t.isSelected?"is-selected":""}
          .step=${t.step}
          .disabled=${t.isPlaying}
          @stepedited=${t.stepEdited}>
        </devtools-recorder-step-editor>`}
        ${t.section?.causingStep&&$t`<devtools-recorder-step-editor
          .step=${t.section.causingStep}
          .isTypeEditable=${!1}
          .disabled=${t.isPlaying}
          @stepedited=${t.stepEdited}>
        </devtools-recorder-step-editor>`}
      </div>
      ${t.error&&$t`
        <div class="error" role="alert">
          ${t.error.message}
        </div>
      `}
    </devtools-timeline-section>
  `,i)}class Ft extends HTMLElement{#t=this.attachShadow({mode:"open"});#st=new IntersectionObserver((e=>{this.#it.isVisible=e[0].isIntersecting}));#it={state:"default",showDetails:!1,isEndOfGroup:!1,isStartOfGroup:!1,stepIndex:0,sectionIndex:0,isFirstSection:!1,isLastSection:!1,isRecording:!1,isPlaying:!1,isVisible:!1,hasBreakpoint:!1,removable:!0,builtInConverters:[],extensionConverters:[],isSelected:!1,recorderSettings:void 0,actions:[],stepEdited:this.#ot.bind(this),onBreakpointClick:this.#rt.bind(this),handleStepAction:this.#nt.bind(this),toggleShowDetails:this.#at.bind(this),onToggleShowDetailsKeydown:this.#lt.bind(this),onStepContextMenu:this.#ct.bind(this)};#dt=Ot;constructor(e){super(),e&&(this.#dt=e),this.setAttribute("jslog",`${r.section("step-view")}`)}set data(e){const t=this.#it.state;this.#it.step=e.step,this.#it.section=e.section,this.#it.state=e.state,this.#it.error=e.error,this.#it.isEndOfGroup=e.isEndOfGroup,this.#it.isStartOfGroup=e.isStartOfGroup,this.#it.stepIndex=e.stepIndex,this.#it.sectionIndex=e.sectionIndex,this.#it.isFirstSection=e.isFirstSection,this.#it.isLastSection=e.isLastSection,this.#it.isRecording=e.isRecording,this.#it.isPlaying=e.isPlaying,this.#it.hasBreakpoint=e.hasBreakpoint,this.#it.removable=e.removable,this.#it.builtInConverters=e.builtInConverters,this.#it.extensionConverters=e.extensionConverters,this.#it.isSelected=e.isSelected,this.#it.recorderSettings=e.recorderSettings,this.#it.actions=this.#pt(),this.#r(),this.#it.state===t||"current"!==this.#it.state||this.#it.isVisible||this.scrollIntoView()}get step(){return this.#it.step}get section(){return this.#it.section}connectedCallback(){this.#t.adoptedStyleSheets=[xt],this.#st.observe(this),this.#r()}disconnectedCallback(){this.#st.unobserve(this)}#at(){this.#it.showDetails=!this.#it.showDetails,this.#r()}#lt(e){const t=e;"Enter"!==t.key&&" "!==t.key||(this.#at(),e.stopPropagation(),e.preventDefault())}#ot(e){const t=this.#it.step||this.#it.section?.causingStep;if(!t)throw new Error("Expected step.");this.dispatchEvent(new Nt(t,e.data))}#nt(e){switch(e.itemValue){case"add-step-before":{const e=this.#it.step||this.#it.section;if(!e)throw new Error("Expected step or section.");this.dispatchEvent(new jt(e,"before"));break}case"add-step-after":{const e=this.#it.step||this.#it.section;if(!e)throw new Error("Expected step or section.");this.dispatchEvent(new jt(e,"after"));break}case"remove-step":{const e=this.#it.section?.causingStep;if(!this.#it.step&&!e)throw new Error("Expected step.");this.dispatchEvent(new At(this.#it.step||e));break}case"add-breakpoint":if(!this.#it.step)throw new Error("Expected step");this.dispatchEvent(new Mt(this.#it.stepIndex));break;case"remove-breakpoint":if(!this.#it.step)throw new Error("Expected step");this.dispatchEvent(new Pt(this.#it.stepIndex));break;default:{const t=e.itemValue;if(!t.startsWith(Bt))throw new Error("Unknown step action.");const s=this.#it.step||this.#it.section?.causingStep;if(!s)throw new Error("Step not found.");const i=t.substring(13);this.#it.recorderSettings&&(this.#it.recorderSettings.preferredCopyFormat=i),this.dispatchEvent(new It(structuredClone(s)))}}}#rt(){this.#it.hasBreakpoint?this.dispatchEvent(new Pt(this.#it.stepIndex)):this.dispatchEvent(new Mt(this.#it.stepIndex)),this.#r()}#pt=()=>{const e=[];if(this.#it.isPlaying||(this.#it.step&&e.push({id:"add-step-before",label:Rt(kt.addStepBefore),group:"stepManagement",groupTitle:Rt(kt.stepManagement)}),e.push({id:"add-step-after",label:Rt(kt.addStepAfter),group:"stepManagement",groupTitle:Rt(kt.stepManagement)}),this.#it.removable&&e.push({id:"remove-step",group:"stepManagement",groupTitle:Rt(kt.stepManagement),label:Rt(kt.removeStep)})),this.#it.step&&!this.#it.isRecording&&(this.#it.hasBreakpoint?e.push({id:"remove-breakpoint",label:Rt(kt.removeBreakpoint),group:"breakPointManagement",groupTitle:Rt(kt.breakpoints)}):e.push({id:"add-breakpoint",label:Rt(kt.addBreakpoint),group:"breakPointManagement",groupTitle:Rt(kt.breakpoints)})),this.#it.step){for(const t of this.#it.builtInConverters||[])e.push({id:Bt+d.StringUtilities.toKebabCase(t.getId()),label:t.getFormatName(),group:"copy",groupTitle:Rt(kt.copyAs)});for(const t of this.#it.extensionConverters||[])e.push({id:Bt+d.StringUtilities.toKebabCase(t.getId()),label:t.getFormatName(),group:"copy",groupTitle:Rt(kt.copyAs),jslogContext:Bt+"extension"})}return e};#ct(e){const s=e.target instanceof i.Button.Button?e.target:void 0,o=new t.ContextMenu.ContextMenu(e,{x:s?.getBoundingClientRect().left,y:s?.getBoundingClientRect().bottom}),r=this.#pt(),n=r.filter((e=>e.id.startsWith(Bt))),a=r.filter((e=>!e.id.startsWith(Bt)));for(const e of a){o.section(e.group).appendItem(e.label,(()=>{this.#nt(new g.Menu.MenuItemSelectedEvent(e.id))}),{jslogContext:e.id})}const l=n.find((e=>e.id===Bt+this.#it.recorderSettings?.preferredCopyFormat));if(l&&o.section("copy").appendItem(l.label,(()=>{this.#nt(new g.Menu.MenuItemSelectedEvent(l.id))}),{jslogContext:l.id}),n.length){const e=o.section("copy").appendSubMenuItem(Rt(kt.copyAs),!1,"copy");for(const t of n)t!==l&&e.section(t.group).appendItem(t.label,(()=>{this.#nt(new g.Menu.MenuItemSelectedEvent(t.id))}),{jslogContext:t.id})}o.show()}#r(){this.#dt(this.#it,{},this.#t)}}customElements.define("devtools-step-view",Ft);var Dt=Object.freeze({__proto__:null,AddBreakpointEvent:Mt,AddStep:jt,CaptureSelectorsEvent:Ct,CopyStepEvent:It,RemoveBreakpointEvent:Pt,RemoveStep:At,StepChanged:Nt,StepView:Ft,StopSelectorsCaptureEvent:Tt});export{C as ControlButton,O as CreateRecordingView,W as RecordingListView,Ce as RecordingView,pe as ReplaySection,Be as SelectButton,Ke as StartView,bt as StepEditor,Dt as StepView,St as TimelineSection};

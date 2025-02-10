import*as e from"../../../services/trace_bounds/trace_bounds.js";import*as t from"../../../core/i18n/i18n.js";import*as i from"../../../models/trace/trace.js";import*as n from"../../../ui/components/helpers/helpers.js";import*as r from"../../../ui/legacy/legacy.js";import*as s from"../../../ui/lit-html/lit-html.js";import*as o from"../../../ui/visual_logging/visual_logging.js";import"../../../ui/components/menus/menus.js";import*as a from"../../../core/sdk/sdk.js";import"../../../ui/components/buttons/buttons.js";import*as l from"../../mobile_throttling/mobile_throttling.js";import*as d from"../../../core/platform/platform.js";import"../../../ui/components/data_grid/data_grid.js";import"../../../ui/components/icon_button/icon_button.js";import*as c from"../../../models/crux-manager/crux-manager.js";import*as h from"../../../ui/components/render_coordinator/render_coordinator.js";import"../../../ui/components/dialogs/dialogs.js";import*as g from"../../../ui/components/input/input.js";import*as u from"../../../core/common/common.js";import*as p from"../../../models/bindings/bindings.js";import*as m from"../../../models/trace/helpers/helpers.js";import*as v from"../../../ui/legacy/components/utils/utils.js";import*as b from"../utils/utils.js";import*as y from"./insights/insights.js";import*as f from"../../../core/host/host.js";import*as w from"../../../ui/legacy/theme_support/theme_support.js";import*as S from"../../../models/emulation/emulation.js";import*as x from"../../../models/live-metrics/live-metrics.js";import*as k from"../../../ui/components/legacy_wrapper/legacy_wrapper.js";import"../../../ui/components/markdown_view/markdown_view.js";import*as C from"../../../third_party/marked/marked.js";import"../../../ui/components/request_link_icon/request_link_icon.js";import*as $ from"../../../ui/legacy/components/perf_ui/perf_ui.js";import*as R from"../../../ui/components/adorners/adorners.js";import*as T from"../../../core/root/root.js";function P(e){const t=[e];let i=e;for(;null!==i.child;){const e=i.child;null!==e&&(t.push(e),i=e)}return t}var L=Object.freeze({__proto__:null,Breadcrumbs:class{initialBreadcrumb;activeBreadcrumb;constructor(e){this.initialBreadcrumb={window:e,child:null};let t=this.initialBreadcrumb;for(;null!==t.child;)t=t.child;this.activeBreadcrumb=t}add(e){if(!this.isTraceWindowWithinTraceWindow(e,this.activeBreadcrumb.window))throw new Error("Can not add a breadcrumb that is equal to or is outside of the parent breadcrumb TimeWindow");const t={window:e,child:null};return this.activeBreadcrumb.child=t,this.setActiveBreadcrumb(t,{removeChildBreadcrumbs:!1,updateVisibleWindow:!0}),t}isTraceWindowWithinTraceWindow(e,t){return e.min>=t.min&&e.max<=t.max&&!(e.min===t.min&&e.max===t.max)}setInitialBreadcrumbFromLoadedModifications(e){this.initialBreadcrumb=e;let t=e;for(;null!==t.child;)t=t.child;this.setActiveBreadcrumb(t,{removeChildBreadcrumbs:!1,updateVisibleWindow:!0})}setActiveBreadcrumb(t,i){i.removeChildBreadcrumbs&&(t.child=null),this.activeBreadcrumb=t,e.TraceBounds.BoundsManager.instance().setMiniMapBounds(t.window),i.updateVisibleWindow&&e.TraceBounds.BoundsManager.instance().setTimelineVisibleWindow(t.window)}},flattenBreadcrumbs:P});const I=new CSSStyleSheet;I.replaceSync(".breadcrumbs{display:none;align-items:center;height:29px;padding:3px;overflow-y:hidden;overflow-x:scroll}.breadcrumbs::-webkit-scrollbar{display:none}.breadcrumb{padding:2px 6px;border-radius:4px}.breadcrumb:hover{background-color:var(--sys-color-state-hover-on-subtle)}.range{font-size:12px;white-space:nowrap}.active-breadcrumb{font-weight:bold;color:var(--app-color-active-breadcrumb)}\n/*# sourceURL=breadcrumbsUI.css */\n");const{render:E,html:M}=s,D={activateBreadcrumb:"Activate breadcrumb",removeChildBreadcrumbs:"Remove child breadcrumbs"},H=t.i18n.registerUIStrings("panels/timeline/components/BreadcrumbsUI.ts",D),F=t.i18n.getLocalizedString.bind(void 0,H);class N extends Event{breadcrumb;childBreadcrumbsRemoved;static eventName="breadcrumbactivated";constructor(e,t){super(N.eventName),this.breadcrumb=e,this.childBreadcrumbsRemoved=t}}class z extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#n=null;#r=null;connectedCallback(){this.#e.adoptedStyleSheets=[I]}set data(e){this.#n=e.initialBreadcrumb,this.#r=e.activeBreadcrumb,n.ScheduledRender.scheduleRender(this,this.#t)}#s(e){this.#r=e,this.dispatchEvent(new N(e))}#o(){const e=this.#e.querySelector(".breadcrumbs");e&&(e.style.display="flex",requestAnimationFrame((()=>{e.scrollWidth-e.clientWidth>0&&requestAnimationFrame((()=>{e.scrollLeft=e.scrollWidth-e.clientWidth}))})))}#a(e,t){const i=new r.ContextMenu.ContextMenu(e);i.defaultSection().appendItem(F(D.activateBreadcrumb),(()=>{this.dispatchEvent(new N(t))})),i.defaultSection().appendItem(F(D.removeChildBreadcrumbs),(()=>{this.dispatchEvent(new N(t,!0))})),i.show()}#l(e,n){const r=i.Helpers.Timing.microSecondsToMilliseconds(e.window.range);return M`
          <div class="breadcrumb" @contextmenu=${t=>this.#a(t,e)} @click=${()=>this.#s(e)}
          jslog=${o.item("timeline.breadcrumb-select").track({click:!0})}>
           <span class="${e===this.#r?"active-breadcrumb":""} range">
            ${0===n?`Full range (${t.TimeUtilities.preciseMillisToString(r,2)})`:`${t.TimeUtilities.preciseMillisToString(r,2)}`}
            </span>
          </div>
          ${null!==e.child?M`
            <devtools-icon .data=${{iconName:"chevron-right",color:"var(--icon-default)",width:"16px",height:"16px"}}>`:""}
      `}#i(){const e=M`
      ${null===this.#n?s.nothing:M`<div class="breadcrumbs" jslog=${o.section("breadcrumbs")}>
        ${P(this.#n).map(((e,t)=>this.#l(e,t)))}
      </div>`}
    `;E(e,this.#e,{host:this}),this.#n?.child&&this.#o()}}customElements.define("devtools-breadcrumbs-ui",z);var A=Object.freeze({__proto__:null,BreadcrumbActivatedEvent:N,BreadcrumbsUI:z});const O=new CSSStyleSheet;O.replaceSync(":host{display:flex;align-items:center;max-width:100%;height:20px}devtools-select-menu{min-width:160px;max-width:100%;height:20px}\n/*# sourceURL=cpuThrottlingSelector.css */\n");const{html:U}=s,_={cpu:"CPU: {PH1}",cpuThrottling:"CPU throttling: {PH1}",noThrottling:"No throttling",dSlowdown:"{PH1}× slowdown",recommendedThrottling:"{PH1} - recommended",recommendedThrottlingReason:"Consider changing setting to simulate real user environments"},B=t.i18n.registerUIStrings("panels/timeline/components/CPUThrottlingSelector.ts",_),V=t.i18n.getLocalizedString.bind(void 0,B);class q extends HTMLElement{#e=this.attachShadow({mode:"open"});#d;#c=null;constructor(){super(),this.#d=a.CPUThrottlingManager.CPUThrottlingManager.instance().cpuThrottlingRate(),this.#i()}set recommendedRate(e){this.#c=e,n.ScheduledRender.scheduleRender(this,this.#i)}connectedCallback(){this.#e.adoptedStyleSheets=[O],a.CPUThrottlingManager.CPUThrottlingManager.instance().addEventListener("RateChanged",this.#h,this),this.#h()}disconnectedCallback(){a.CPUThrottlingManager.CPUThrottlingManager.instance().removeEventListener("RateChanged",this.#h,this)}#h(){this.#d=a.CPUThrottlingManager.CPUThrottlingManager.instance().cpuThrottlingRate(),n.ScheduledRender.scheduleRender(this,this.#i)}#g(e){l.ThrottlingManager.throttlingManager().setCPUThrottlingRate(Number(e.itemValue))}#i=()=>{let e;this.#c&&1===this.#d&&(e=U`<devtools-button
        title=${V(_.recommendedThrottlingReason)}
        .iconName=${"info"}
        .variant=${"icon"}
      ></devtools-button>`);const t=1===this.#d?V(_.noThrottling):V(_.dSlowdown,{PH1:this.#d}),i=U`
      <devtools-select-menu
            @selectmenuselected=${this.#g}
            .showDivider=${!0}
            .showArrow=${!0}
            .sideButton=${!1}
            .showSelectedItem=${!0}
            .jslogContext=${"cpu-throttling"}
            .buttonTitle=${V(_.cpu,{PH1:t})}
            .title=${V(_.cpuThrottling,{PH1:t})}
          >
          ${l.ThrottlingPresets.ThrottlingPresets.cpuThrottlingPresets.map((e=>{let t=1===e?V(_.noThrottling):V(_.dSlowdown,{PH1:e});e===this.#c&&(t=V(_.recommendedThrottling,{PH1:t}));const i=1===e?"cpu-no-throttling":`cpu-throttled-${e}`;return U`
              <devtools-menu-item
                .value=${e}
                .selected=${this.#d===e}
                .title=${t}
                jslog=${o.item(i).track({click:!0})}
              >
                ${t}
              </devtools-menu-item>
            `}))}
      </devtools-select-menu>
      ${e}
    `;s.render(i,this.#e,{host:this})}}customElements.define("devtools-cpu-throttling-selector",q);var W=Object.freeze({__proto__:null,CPUThrottlingSelector:q});const j={forcedReflow:"Forced reflow",sIsALikelyPerformanceBottleneck:"{PH1} is a likely performance bottleneck.",idleCallbackExecutionExtended:"Idle callback execution extended beyond deadline by {PH1}",sTookS:"{PH1} took {PH2}.",longTask:"Long task",longInteractionINP:"Long interaction",sIsLikelyPoorPageResponsiveness:"{PH1} is indicating poor page responsiveness.",websocketProtocol:"WebSocket protocol",webSocketBytes:"{PH1} byte(s)",webSocketDataLength:"Data length"},K=t.i18n.registerUIStrings("panels/timeline/components/DetailsView.ts",j),Y=t.i18n.getLocalizedString.bind(void 0,K);var G=Object.freeze({__proto__:null,buildRowsForWebSocketEvent:function(e,n){const r=[],s=n.Initiators.eventToInitiator.get(e);return s&&i.Types.Events.isWebSocketCreate(s)?(r.push({key:t.i18n.lockedString("URL"),value:s.args.data.url}),s.args.data.websocketProtocol&&r.push({key:Y(j.websocketProtocol),value:s.args.data.websocketProtocol})):i.Types.Events.isWebSocketCreate(e)&&(r.push({key:t.i18n.lockedString("URL"),value:e.args.data.url}),e.args.data.websocketProtocol&&r.push({key:Y(j.websocketProtocol),value:e.args.data.websocketProtocol})),i.Types.Events.isWebSocketTransfer(e)&&e.args.data.dataLength&&r.push({key:Y(j.webSocketDataLength),value:`${Y(j.webSocketBytes,{PH1:e.args.data.dataLength})}`}),r},buildWarningElementsForEvent:function(e,n){const s=n.Warnings.perEvent.get(e),o=[];if(!s)return o;for(const n of s){const s=i.Helpers.Timing.microSecondsToMilliseconds(i.Types.Timing.MicroSeconds(e.dur||0)),a=document.createElement("span");switch(n){case"FORCED_REFLOW":{const e=r.XLink.XLink.create("https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts",Y(j.forcedReflow),void 0,void 0,"forced-reflow");a.appendChild(t.i18n.getFormatLocalizedString(K,j.sIsALikelyPerformanceBottleneck,{PH1:e}));break}case"IDLE_CALLBACK_OVER_TIME":{if(!i.Types.Events.isFireIdleCallback(e))break;const n=t.TimeUtilities.millisToString((s||0)-e.args.data.allottedMilliseconds,!0);a.textContent=Y(j.idleCallbackExecutionExtended,{PH1:n});break}case"LONG_TASK":{const e=r.XLink.XLink.create("https://web.dev/optimize-long-tasks/",Y(j.longTask),void 0,void 0,"long-tasks");a.appendChild(t.i18n.getFormatLocalizedString(K,j.sTookS,{PH1:e,PH2:t.TimeUtilities.millisToString(s||0,!0)}));break}case"LONG_INTERACTION":{const e=r.XLink.XLink.create("https://web.dev/inp",Y(j.longInteractionINP),void 0,void 0,"long-interaction");a.appendChild(t.i18n.getFormatLocalizedString(K,j.sIsLikelyPoorPageResponsiveness,{PH1:e}));break}default:d.assertNever(n,`Unhandled warning type ${n}`)}o.push(a)}return o},generateInvalidationsList:function(e){const t={},n=new Set;for(const r of e){n.add(r.args.data.nodeId);let e=r.args.data.reason||"unknown";if("unknown"===e&&i.Types.Events.isScheduleStyleInvalidationTracking(r)&&r.args.data.invalidatedSelectorId)switch(r.args.data.invalidatedSelectorId){case"attribute":e="Attribute",r.args.data.changedAttribute&&(e+=` (${r.args.data.changedAttribute})`);break;case"class":e="Class",r.args.data.changedClass&&(e+=` (${r.args.data.changedClass})`);break;case"id":e="Id",r.args.data.changedId&&(e+=` (${r.args.data.changedId})`)}if("PseudoClass"===e&&i.Types.Events.isStyleRecalcInvalidationTracking(r)&&r.args.data.extraData&&(e+=r.args.data.extraData),"Attribute"===e&&i.Types.Events.isStyleRecalcInvalidationTracking(r)&&r.args.data.extraData&&(e+=` (${r.args.data.extraData})`),"StyleInvalidator"===e)continue;const s=t[e]||[];s.push(r),t[e]=s}return{groupedByReason:t,backendNodeIds:n}}});const X=new CSSStyleSheet;X.replaceSync(".list{max-height:200px}.list-item:has(.origin-mapping-row.header){position:sticky;top:0;z-index:1;background-color:var(--sys-color-cdt-base-container)}.origin-mapping-row{display:flex;flex-direction:row;width:100%;height:30px}.origin-mapping-row.header{font-weight:var(--ref-typeface-weight-medium);border-bottom:1px solid var(--sys-color-divider)}.origin-mapping-cell{flex:1;display:flex;align-items:center;padding:4px;border-right:1px solid var(--sys-color-divider)}.origin-warning-icon{width:16px;height:16px;margin-right:4px;color:var(--icon-warning)}.origin{text-overflow:ellipsis;overflow-x:hidden}.origin-mapping-cell:last-child{border:none}.origin-mapping-editor{display:flex;flex-direction:row;width:100%;padding:12px 8px;gap:12px}.origin-mapping-editor label{flex:1;font-weight:var(--ref-typeface-weight-medium)}.origin-mapping-editor input{margin-top:4px;width:100%}\n/*# sourceURL=originMap.css */\n");const{html:J}=s,Z=h.RenderCoordinator.RenderCoordinator.instance(),Q={developmentOrigin:"Development origin",productionOrigin:"Production origin",invalidOrigin:'"{PH1}" is not a valid origin or URL.',alreadyMapped:'"{PH1}" is already mapped to a production origin.',pageHasNoData:"The Chrome UX Report does not have sufficient real user data for this page."},ee=t.i18n.registerUIStrings("panels/timeline/components/OriginMap.ts",Q),te=t.i18n.getLocalizedString.bind(void 0,ee),ie="developmentOrigin",ne="productionOrigin";class re extends r.Widget.WidgetElement{#u;#p;constructor(){super(),this.#u=new r.ListWidget.ListWidget(this,!1,!0),c.CrUXManager.instance().getConfigSetting().addChangeListener(this.#m,this),this.#m()}createWidget(){const e=new r.Widget.Widget(!1,!1,this);return this.#u.registerCSSFiles([X]),this.#u.show(e.contentElement),e}#v(){return c.CrUXManager.instance().getConfigSetting().get().originMappings||[]}#b(e){const t=c.CrUXManager.instance().getConfigSetting(),i={...t.get()};i.originMappings=e,t.set(i)}#m(){const e=this.#v();this.#u.clear(),this.#u.appendItem({developmentOrigin:te(Q.developmentOrigin),productionOrigin:te(Q.productionOrigin),isTitleRow:!0},!1);for(const t of e)this.#u.appendItem(t,!0)}#y(e){try{return new URL(e).origin}catch{return null}}#f(e){return Z.write((async()=>{if(!c.CrUXManager.instance().isEnabled())return s.nothing;const t=c.CrUXManager.instance(),i=await t.getFieldDataForPage(e);return Object.entries(i).some((([e,t])=>"warnings"!==e&&Boolean(t)))?s.nothing:J`
        <devtools-icon
          class="origin-warning-icon"
          name="warning-filled"
          title=${te(Q.pageHasNoData)}
        ></devtools-icon>
      `}))}startCreation(){const e=a.TargetManager.TargetManager.instance().inspectedURL(),t=this.#y(e)||"";this.#u.addNewItem(-1,{developmentOrigin:t,productionOrigin:""})}renderItem(e){const t=document.createElement("div");let i,n;return t.classList.add("origin-mapping-row"),t.role="row",e.isTitleRow?(t.classList.add("header"),i="columnheader",n=s.nothing):(i="cell",n=s.Directives.until(this.#f(e.productionOrigin))),s.render(J`
      <div class="origin-mapping-cell development-origin" role=${i}>
        <div class="origin" title=${e.developmentOrigin}>${e.developmentOrigin}</div>
      </div>
      <div class="origin-mapping-cell production-origin" role=${i}>
        ${n}
        <div class="origin" title=${e.productionOrigin}>${e.productionOrigin}</div>
      </div>
    `,t,{host:this}),t}removeItemRequested(e,t){const i=this.#v();i.splice(t-1,1),this.#b(i)}commitEdit(e,t,i){e.developmentOrigin=this.#y(t.control(ie).value)||"",e.productionOrigin=this.#y(t.control(ne).value)||"";const n=this.#v();i&&n.push(e),this.#b(n)}beginEdit(e){const t=this.#w();return t.control(ie).value=e.developmentOrigin,t.control(ne).value=e.productionOrigin,t}#S(e,t,i){const n=this.#y(i.value);if(!n)return{valid:!1,errorMessage:te(Q.invalidOrigin,{PH1:i.value})};const r=this.#v();for(let e=0;e<r.length;++e){if(e===t-1)continue;if(r[e].developmentOrigin===n)return{valid:!0,errorMessage:te(Q.alreadyMapped,{PH1:n})}}return{valid:!0}}#x(e,t,i){return this.#y(i.value)?{valid:!0}:{valid:!1,errorMessage:te(Q.invalidOrigin,{PH1:i.value})}}#w(){if(this.#p)return this.#p;const e=new r.ListWidget.Editor;this.#p=e;const t=e.contentElement().createChild("div","origin-mapping-editor"),i=e.createInput(ie,"text",te(Q.developmentOrigin),this.#S.bind(this)),n=e.createInput(ne,"text",te(Q.productionOrigin),this.#x.bind(this));return s.render(J`
      <label class="development-origin-input">
        ${te(Q.developmentOrigin)}
        ${i}
      </label>
      <label class="production-origin-input">
        ${te(Q.productionOrigin)}
        ${n}
      </label>
    `,t,{host:this}),e}}customElements.define("devtools-origin-map",re);var se=Object.freeze({__proto__:null,OriginMap:re});const oe=new CSSStyleSheet;oe.replaceSync(':host{display:block}:host *{box-sizing:border-box}devtools-dialog{--override-transparent:color-mix(in sRGB,var(--color-background) 80%,transparent)}.section-title{font-size:var(--sys-typescale-headline5-size);line-height:var(--sys-typescale-headline5-line-height);font-weight:var(--ref-typeface-weight-medium);margin:0}.privacy-disclosure{margin:8px 0}.url-override{margin:8px 0;display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;max-width:max-content}details > summary{font-size:var(--sys-typescale-body4-size);line-height:var(--sys-typescale-body4-line-height);font-weight:var(--ref-typeface-weight-medium)}.content{max-width:360px;padding:0 var(--sys-size-8) var(--sys-size-2);box-sizing:border-box}.open-button-section{display:flex;flex-direction:row}.origin-mapping-grid{border:1px solid var(--sys-color-divider);margin-top:8px}.origin-mapping-description{margin-bottom:8px}.origin-mapping-button-section{display:flex;flex-direction:column;align-items:center;margin-top:var(--sys-size-6)}.config-button{margin-left:auto}.advanced-section-contents{margin:4px 0 14px}.buttons-section{display:flex;justify-content:flex-end;margin-top:6px;gap:8px}input[type="checkbox"]{height:12px;width:12px;min-height:12px;min-width:12px;margin:6px}input[type="text"][disabled]{color:var(--sys-color-state-disabled)}.warning{margin:2px 8px;color:var(--color-error-text)}x-link{color:var(--sys-color-primary);text-decoration-line:underline}.divider{margin:10px 0;border:none;border-top:1px solid var(--sys-color-divider)}\n/*# sourceURL=fieldSettingsDialog.css */\n');const ae={setUp:"Set up",configure:"Configure",ok:"Ok",optOut:"Opt out",cancel:"Cancel",onlyFetchFieldData:"Always show field data for the below URL",url:"URL",doesNotHaveSufficientData:"The Chrome UX Report does not have sufficient real-world speed data for this page.",configureFieldData:"Configure field data fetching",fetchAggregated:"Fetch aggregated field data from the {PH1} to help you contextualize local measurements with what real users experience on the site.",privacyDisclosure:"Privacy disclosure",whenPerformanceIsShown:"When DevTools is open, the URLs you visit will be sent to Google to query field data. These requests are not tied to your Google account.",advanced:"Advanced",mapDevelopmentOrigins:"Set a development origin to automatically get relevant field data for its production origin.",new:"New",invalidOrigin:'"{PH1}" is not a valid origin or URL.'},le=t.i18n.registerUIStrings("panels/timeline/components/FieldSettingsDialog.ts",ae),de=t.i18n.getLocalizedString.bind(void 0,le),{html:ce,nothing:he,Directives:{ifDefined:ge}}=s;class ue extends Event{static eventName="showdialog";constructor(){super(ue.eventName)}}class pe extends HTMLElement{#e=this.attachShadow({mode:"open"});#k;#C=c.CrUXManager.instance().getConfigSetting();#$="";#R=!1;#T="";#P;constructor(){super();const e=c.CrUXManager.instance();this.#C=e.getConfigSetting(),this.#L(),this.#i()}#L(){const e=this.#C.get();this.#$=e.override||"",this.#R=e.overrideEnabled||!1,this.#T=""}#I(e){const t=this.#C.get();this.#C.set({...t,enabled:e,override:this.#$,overrideEnabled:this.#R})}#E(){n.ScheduledRender.scheduleRender(this,this.#i)}async#M(e){const t=c.CrUXManager.instance(),i=await t.getFieldDataForPage(e);return Object.entries(i).some((([e,t])=>"warnings"!==e&&Boolean(t)))}async#D(e){if(e&&this.#R){if(!this.#y(this.#$))return this.#T=de(ae.invalidOrigin,{PH1:this.#$}),void n.ScheduledRender.scheduleRender(this,this.#i);if(!await this.#M(this.#$))return this.#T=de(ae.doesNotHaveSufficientData),void n.ScheduledRender.scheduleRender(this,this.#i)}this.#I(e),this.#H()}#F(){if(!this.#k)throw new Error("Dialog not found");this.#L(),this.#k.setDialogVisible(!0),n.ScheduledRender.scheduleRender(this,this.#i),this.dispatchEvent(new ue)}#H(e){if(!this.#k)throw new Error("Dialog not found");this.#k.setDialogVisible(!1),e&&e.stopImmediatePropagation(),n.ScheduledRender.scheduleRender(this,this.#i)}connectedCallback(){this.#e.adoptedStyleSheets=[oe,g.textInputStyles,g.checkboxStyles],this.#C.addChangeListener(this.#E,this),n.ScheduledRender.scheduleRender(this,this.#i)}disconnectedCallback(){this.#C.removeChangeListener(this.#E,this)}#N(){return this.#C.get().enabled?ce`
        <devtools-button
          class="config-button"
          @click=${this.#F}
          .data=${{variant:"outlined",title:de(ae.configure)}}
        jslog=${o.action("timeline.field-data.configure").track({click:!0})}
        >${de(ae.configure)}</devtools-button>
      `:ce`
      <devtools-button
        class="setup-button"
        @click=${this.#F}
        .data=${{variant:"primary",title:de(ae.setUp)}}
        jslog=${o.action("timeline.field-data.setup").track({click:!0})}
        data-field-data-setup
      >${de(ae.setUp)}</devtools-button>
    `}#z(){return ce`
      <devtools-button
        @click=${()=>{this.#D(!0)}}
        .data=${{variant:"primary",title:de(ae.ok)}}
        jslog=${o.action("timeline.field-data.enable").track({click:!0})}
        data-field-data-enable
      >${de(ae.ok)}</devtools-button>
    `}#A(){const e=this.#C.get().enabled?de(ae.optOut):de(ae.cancel);return ce`
      <devtools-button
        @click=${()=>{this.#D(!1)}}
        .data=${{variant:"outlined",title:e}}
        jslog=${o.action("timeline.field-data.disable").track({click:!0})}
        data-field-data-disable
      >${e}</devtools-button>
    `}#O(e){e.stopPropagation();const t=e.target;this.#$=t.value,this.#T="",n.ScheduledRender.scheduleRender(this,this.#i)}#U(e){e.stopPropagation();const t=e.target;this.#R=t.checked,this.#T="",n.ScheduledRender.scheduleRender(this,this.#i)}#y(e){try{return new URL(e).origin}catch{return null}}#_(){return ce`
      <div class="origin-mapping-description">${de(ae.mapDevelopmentOrigins)}</div>
      <devtools-origin-map
        on-render=${n.Directives.nodeRenderedCallback((e=>{this.#P=e}))}
      ></devtools-origin-map>
      <div class="origin-mapping-button-section">
        <devtools-button
          @click=${()=>this.#P?.startCreation()}
          .data=${{variant:"text",title:de(ae.new),iconName:"plus"}}
          jslogContext=${"new-origin-mapping"}
        >${de(ae.new)}</devtools-button>
      </div>
    `}#i=()=>{const e=r.XLink.XLink.create("https://developer.chrome.com/docs/crux",t.i18n.lockedString("Chrome UX Report")),i=t.i18n.getFormatLocalizedString(le,ae.fetchAggregated,{PH1:e}),a=ce`
      <div class="open-button-section">${this.#N()}</div>
      <devtools-dialog
        @clickoutsidedialog=${this.#H}
        .position=${"auto"}
        .horizontalAlignment=${"center"}
        .jslogContext=${"timeline.field-data.settings"}
        .dialogTitle=${de(ae.configureFieldData)}
        on-render=${n.Directives.nodeRenderedCallback((e=>{this.#k=e}))}
      >
        <div class="content">
          <div>${i}</div>
          <div class="privacy-disclosure">
            <h3 class="section-title">${de(ae.privacyDisclosure)}</h3>
            <div>${de(ae.whenPerformanceIsShown)}</div>
          </div>
          <details aria-label=${de(ae.advanced)}>
            <summary>${de(ae.advanced)}</summary>
            <div class="advanced-section-contents">
              ${this.#_()}
              <hr class="divider">
              <label class="url-override">
                <input
                  type="checkbox"
                  .checked=${this.#R}
                  @change=${this.#U}
                  aria-label=${de(ae.onlyFetchFieldData)}
                  jslog=${o.toggle().track({click:!0}).context("field-url-override-enabled")}
                />
                ${de(ae.onlyFetchFieldData)}
              </label>
              <input
                type="text"
                @keyup=${this.#O}
                @change=${this.#O}
                class="devtools-text-input"
                .disabled=${!this.#R}
                .value=${this.#$}
                placeholder=${ge(this.#R?de(ae.url):void 0)}
              />
              ${this.#T?ce`<div class="warning" role="alert" aria-label=${this.#T}>${this.#T}</div>`:he}
            </div>
          </details>
          <div class="buttons-section">
            ${this.#A()}
            ${this.#z()}
          </div>
        </div>
      </devtools-dialog>
    `;s.render(a,this.#e,{host:this})}}customElements.define("devtools-field-settings-dialog",pe);var me=Object.freeze({__proto__:null,FieldSettingsDialog:pe,ShowDialog:ue});const ve=new CSSStyleSheet;ve.replaceSync('.ignore-list-setting-content{padding:0 var(--sys-size-8);width:280px}.ignore-list-setting-description{margin-bottom:5px}.regex-row{display:flex;dt-checkbox{flex:auto}devtools-button{height:24px}&:not(:hover) devtools-button{display:none}}.new-regex-row{display:flex;.new-regex-text-input{flex:auto}.harmony-input[type="text"]{border:1px solid var(--sys-color-neutral-outline);border-radius:4px;outline:none;&.error-input,\n    &:invalid{border-color:var(--sys-color-error)}&:not(.error-input):not(:invalid):focus{border-color:var(--sys-color-state-focus-ring)}&:not(.error-input):not(:invalid):hover:not(:focus){background:var(--sys-color-state-hover-on-subtle)}}}.input-validation{margin:5px 0 5px 24px;&.input-validation-error{color:var(--sys-color-error)}}\n/*# sourceURL=ignoreListSetting.css */\n');const{html:be}=s,ye={showIgnoreListSettingDialog:"Show ignore list setting dialog",ignoreList:"Ignore list",ignoreListDescription:"Add regular expression rules to remove matching scripts from the flame chart.",ignoreScriptsWhoseNamesMatchS:"Ignore scripts whose names match ''{regex}''",removeRegex:"Remove the regex: ''{regex}''",addNewRegex:"Add a regular expression rule for the script's URL",ignoreScriptsWhoseNamesMatchNewRegex:"Ignore scripts whose names match the new regex",patternCannotBeEmpty:"Rule can't be empty",patternAlreadyExists:"Rule already exists",patternMustBeAValidRegular:"Rule must be a valid regular expression",patternAlreadyExistsWillBeEnables:"This rule already exists but is disabled. Saving this value will re-enable the rule"},fe=t.i18n.registerUIStrings("panels/timeline/components/IgnoreListSetting.ts",ye),we=t.i18n.getLocalizedString.bind(void 0,fe);class Se extends HTMLElement{#e=this.attachShadow({mode:"open"});#B=this.#i.bind(this);#V=u.Settings.Settings.instance().moduleSetting("enable-ignore-listing");#q=this.#W().getAsArray();#j=r.UIUtils.CheckboxLabel.create(void 0,!1,void 0,"timeline.ignore-list-new-regex.checkbox");#K=r.UIUtils.createInput("new-regex-text-input","text","timeline.ignore-list-new-regex.text");#Y=!0;#G;#X=null;constructor(){super(),this.#J(),u.Settings.Settings.instance().moduleSetting("skip-stack-frames-pattern").addChangeListener(this.#Z.bind(this)),u.Settings.Settings.instance().moduleSetting("enable-ignore-listing").addChangeListener(this.#Z.bind(this))}connectedCallback(){this.#e.adoptedStyleSheets=[ve],this.#Z()}#Z(){n.ScheduledRender.scheduleRender(this,this.#B)}#W(){return u.Settings.Settings.instance().moduleSetting("skip-stack-frames-pattern")}#Q(){this.#X={pattern:this.#K.value,disabled:!1,disabledForUrl:void 0},this.#q.push(this.#X)}#ee(){if(!this.#X)return;const e=this.#q.pop();e&&e!==this.#X&&(console.warn("The last regex is not the editing one."),this.#q.push(e)),this.#X=null,this.#W().setAsArray(this.#q)}#te(){this.#j.checkboxElement.checked=!1,this.#K.value=""}#ie(){const e=this.#K.value.trim();this.#ee();const{valid:t}=xe(this.#ne(),e);t&&(p.IgnoreListManager.IgnoreListManager.instance().addRegexToIgnoreList(e),this.#te())}#re(e){if(e.key===d.KeyboardUtilities.ENTER_KEY)return this.#ie(),void this.#Q();e.key===d.KeyboardUtilities.ESCAPE_KEY&&(e.stopImmediatePropagation(),this.#ee(),this.#te(),this.#K.blur())}#ne(){if(this.#X){const e=this.#q[this.#q.length-1];if(e&&e===this.#X)return this.#q.slice(0,-1)}return this.#q}#se(){const e=this.#K.value.trim(),t=Boolean(e);this.#j.checkboxElement.checked=t;const{valid:i,message:n}=xe(this.#ne(),e);this.#K.classList.toggle("error-input",!i),r.ARIAUtils.setInvalid(this.#K,!i),this.#Y=i,this.#G=n,this.#X&&(this.#X.pattern=this.#K.value.trim(),this.#X.disabled=!t,this.#W().setAsArray(this.#q))}#J(){this.#K.placeholder="/framework\\.js$";const e=we(ye.ignoreScriptsWhoseNamesMatchNewRegex),t=we(ye.addNewRegex);r.Tooltip.Tooltip.install(this.#j,e),r.Tooltip.Tooltip.install(this.#K,t),this.#K.addEventListener("blur",this.#ie.bind(this),!1),this.#K.addEventListener("keydown",this.#re.bind(this),!1),this.#K.addEventListener("input",this.#se.bind(this),!1),this.#K.addEventListener("focus",this.#Q.bind(this),!1)}#oe(){const e=s.Directives.classMap({"input-validation":!0,"input-validation-error":!this.#Y});return be`
      <div class='new-regex-row'>${this.#j}${this.#K}</div>
      ${this.#G?be`<div class=${e}>${this.#G}</div>`:s.nothing}
    `}#ae(e,t){e.disabled=!t.checkboxElement.checked,this.#W().setAsArray(this.#q)}#le(e){this.#q.splice(e,1),this.#W().setAsArray(this.#q)}#de(e,t){const i=r.UIUtils.CheckboxLabel.createWithStringLiteral(e.pattern,!e.disabled,void 0,"timeline.ignore-list-pattern"),n=we(ye.ignoreScriptsWhoseNamesMatchS,{regex:e.pattern});return r.Tooltip.Tooltip.install(i,n),i.checkboxElement.ariaLabel=n,i.checkboxElement.addEventListener("change",this.#ae.bind(this,e,i),!1),be`
      <div class='regex-row'>
        ${i}
        <devtools-button
            @click=${this.#le.bind(this,t)}
            .data=${{variant:"icon",iconName:"bin",title:we(ye.removeRegex,{regex:e.pattern}),jslogContext:"timeline.ignore-list-pattern.remove"}}></devtools-button>
      </div>
    `}#i(){if(!n.ScheduledRender.isScheduledRender(this))throw new Error("Ignore List setting dialog render was not scheduled");const e=be`
      <devtools-button-dialog .data=${{openOnRender:!1,jslogContext:"timeline.ignore-list",variant:"toolbar",iconName:"compress",disabled:!this.#V.get(),iconTitle:we(ye.showIgnoreListSettingDialog),horizontalAlignment:"auto",closeButton:!0,dialogTitle:we(ye.ignoreList)}}>
        <div class='ignore-list-setting-content'>
          <div class='ignore-list-setting-description'>${we(ye.ignoreListDescription)}</div>
          ${this.#ne().map(this.#de.bind(this))}
          ${this.#oe()}
        </div>
      </devtools-button-dialog>
    `;s.render(e,this.#e,{host:this})}}function xe(e,t){const i=t.trim();if(!i.length)return{valid:!1,message:we(ye.patternCannotBeEmpty)};for(let t=0;t<e.length;++t){const n=e[t];if(n.pattern===i)return n.disabled||n.disabledForUrl?{valid:!0,message:we(ye.patternAlreadyExistsWillBeEnables)}:{valid:!1,message:we(ye.patternAlreadyExists)}}let n;try{n=new RegExp(i)}catch(e){}return n?{valid:!0}:{valid:!1,message:we(ye.patternMustBeAValidRegular)}}customElements.define("devtools-perf-ignore-list-setting",Se);var ke=Object.freeze({__proto__:null,IgnoreListSetting:Se,patternValidator:xe});const Ce=new CSSStyleSheet;Ce.replaceSync(":host{display:block}.breakdown{margin:0;padding:0;list-style:none;color:var(--sys-color-token-subtle)}.value{display:inline-block;padding:0 5px;color:var(--sys-color-on-surface)}\n/*# sourceURL=interactionBreakdown.css */\n");const{html:$e}=s,Re={inputDelay:"Input delay",processingDuration:"Processing duration",presentationDelay:"Presentation delay"},Te=t.i18n.registerUIStrings("panels/timeline/components/InteractionBreakdown.ts",Re),Pe=t.i18n.getLocalizedString.bind(void 0,Te);class Le extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#ce=null;connectedCallback(){this.#e.adoptedStyleSheets=[Ce]}set entry(e){e!==this.#ce&&(this.#ce=e,n.ScheduledRender.scheduleRender(this,this.#t))}#i(){if(!this.#ce)return;const e=t.TimeUtilities.formatMicroSecondsAsMillisFixed(this.#ce.inputDelay),i=t.TimeUtilities.formatMicroSecondsAsMillisFixed(this.#ce.mainThreadHandling),n=t.TimeUtilities.formatMicroSecondsAsMillisFixed(this.#ce.presentationDelay);s.render($e`<ul class="breakdown">
                     <li data-entry="input-delay">${Pe(Re.inputDelay)}<span class="value">${e}</span></li>
                     <li data-entry="processing-duration">${Pe(Re.processingDuration)}<span class="value">${i}</span></li>
                     <li data-entry="presentation-delay">${Pe(Re.presentationDelay)}<span class="value">${n}</span></li>
                   </ul>
                   `,this.#e,{host:this})}}customElements.define("devtools-interaction-breakdown",Le);var Ie=Object.freeze({__proto__:null,InteractionBreakdown:Le});const Ee=new CSSStyleSheet;Ee.replaceSync(".layout-shift-details-title,\n.cluster-details-title{padding-bottom:var(--sys-size-5);display:flex;align-items:center;.layout-shift-event-title,\n  .cluster-event-title{background-color:var(--app-color-rendering);width:var(--sys-size-6);height:var(--sys-size-6);border:var(--sys-size-1) solid var(--sys-color-divider);display:inline-block;margin-right:var(--sys-size-3)}}.layout-shift-details-table{font:var(--sys-typescale-body4-regular);margin-bottom:var(--sys-size-4);text-align:left;border-block:var(--sys-size-1) solid var(--sys-color-divider);border-collapse:collapse;font-variant-numeric:tabular-nums;th,\n  td{padding-right:var(--sys-size-4);min-width:var(--sys-size-20);max-width:var(--sys-size-28)}}.table-title{th{font:var(--sys-typescale-body4-medium)}tr{border-bottom:var(--sys-size-1) solid var(--sys-color-divider)}}.timeline-link{cursor:pointer;text-decoration:underline;color:var(--sys-color-primary);background:none;border:none;padding:0;font:inherit}.timeline-link.invalid-link{color:var(--sys-color-state-disabled)}.details-row{display:flex;min-height:var(--sys-size-9)}.title{color:var(--sys-color-token-subtle);overflow:hidden;padding-right:var(--sys-size-5);display:inline-block;vertical-align:top}.culprit{display:inline-flex;flex-direction:row;gap:var(--sys-size-3)}.value{display:inline-block;user-select:text;text-overflow:ellipsis;overflow:hidden;padding:0 var(--sys-size-3)}.layout-shift-summary-details,\n.layout-shift-cluster-summary-details{font:var(--sys-typescale-body4-regular);display:flex;flex-direction:column;column-gap:var(--sys-size-4);padding:var(--sys-size-6) var(--sys-size-6) 0 var(--sys-size-6)}.culprits{display:flex;flex-direction:column}.shift-row:not(:last-child){border-bottom:var(--sys-size-1) solid var(--sys-color-divider)}.total-row{font:var(--sys-typescale-body4-medium)}\n/*# sourceURL=layoutShiftDetails.css */\n");const{html:Me}=s,De={startTime:"Start time",shiftScore:"Shift score",elementsShifted:"Elements shifted",culprit:"Culprit",injectedIframe:"Injected iframe",fontRequest:"Font request",nonCompositedAnimation:"Non-composited animation",animation:"Animation",parentCluster:"Parent cluster",cluster:"Layout shift cluster @ {PH1}",layoutShift:"Layout shift @ {PH1}",total:"Total",unsizedImage:"Unsized image"},He=t.i18n.registerUIStrings("panels/timeline/components/LayoutShiftDetails.ts",De),Fe=t.i18n.getLocalizedString.bind(void 0,He);class Ne extends HTMLElement{#e=this.attachShadow({mode:"open"});#he=null;#ge=null;#ue=null;#pe=!1;connectedCallback(){this.#e.adoptedStyleSheets=[Ee],r.UIUtils.injectTextButtonStyles(this.#e),this.#i()}setData(e,t,i,n){this.#he!==e&&(this.#he=e,this.#ge=t,this.#ue=i,this.#pe=n,this.#i())}#me(e){const t=b.EntryName.nameForEntry(e);return Me`
      <div class="layout-shift-details-title">
        <div class="layout-shift-event-title"></div>
        ${t}
      </div>
    `}#ve(e){return Me`
      ${e?.map((e=>void 0!==e.node_id?Me`
            <devtools-performance-node-link .data=${{backendNodeId:e.node_id}}>
            </devtools-performance-node-link>`:s.nothing))}`}#be(e){const t=e;if(!t)return null;const i=a.FrameManager.FrameManager.instance().getFrame(t);if(!i)return null;const n=v.Linkifier.Linkifier.linkifyRevealable(i,i.displayName());return Me`
    <span class="culprit"><span class="culprit-type">${Fe(De.injectedIframe)}: </span><span class="culprit-value">${n}</span></span>`}#ye(e){const t={tabStop:!0,showColumnNumber:!1,inlineFrameIndex:0,maxLength:20},i=v.Linkifier.Linkifier.linkifyURL(e.args.data.url,t);return Me`
    <span class="culprit"><span class="culprit-type">${Fe(De.fontRequest)}: </span><span class="culprit-value">${i}</span></span>`}#fe(e){this.dispatchEvent(new y.EventRef.EventReferenceClick(e))}#we(e){const t=e.animation;return t?Me`
        <span class="culprit">
        <span class="culprit-type">${Fe(De.nonCompositedAnimation)}: </span>
        <button type="button" class="culprit-value timeline-link" @click=${()=>this.#fe(t)}>${Fe(De.animation)}</button>
      </span>`:null}#Se(e){const t=Me`
      <devtools-performance-node-link
        .data=${{backendNodeId:e}}>
      </devtools-performance-node-link>`;return Me`
    <span class="culprit"><span class="culprit-type">${Fe(De.unsizedImage)}: </span><span class="culprit-value">${t}</span></span>`}#xe(e){return Me`
      ${e?.fontRequests.map((e=>this.#ye(e)))}
      ${e?.iframeIds.map((e=>this.#be(e)))}
      ${e?.nonCompositedAnimations.map((e=>this.#we(e)))}
      ${e?.unsizedImages.map((e=>this.#Se(e)))}
    `}#ke(e,n){const r=i.Types.Timing.MicroSeconds(e.ts-n.Meta.traceBounds.min);if(e===this.#he)return Me`${t.TimeUtilities.preciseMillisToString(m.Timing.microSecondsToMilliseconds(r))}`;const s=t.TimeUtilities.formatMicroSecondsTime(r);return Me`
         <button type="button" class="timeline-link" @click=${()=>this.#fe(e)}>${Fe(De.layoutShift,{PH1:s})}</button>`}#Ce(e,t,i,n){const r=e.args.data?.weighted_score_delta;if(!r)return null;const o=Boolean(n&&(n.fontRequests.length||n.iframeIds.length||n.nonCompositedAnimations.length||n.unsizedImages.length));return Me`
      <tr class="shift-row" data-ts=${e.ts}>
        <td>${this.#ke(e,t)}</td>
        <td>${r.toFixed(4)}</td>
        ${this.#pe?Me`
          <td>
            <div class="elements-shifted">
              ${this.#ve(i)}
            </div>
          </td>`:s.nothing}
        ${o&&this.#pe?Me`
          <td class="culprits">
            ${this.#xe(n)}
          </td>`:s.nothing}
      </tr>`}#$e(e,n){if(!e)return null;const r=i.Types.Timing.MicroSeconds(e.ts-(n?.Meta.traceBounds.min??0)),s=t.TimeUtilities.formatMicroSecondsTime(r);return Me`
      <span class="parent-cluster">${Fe(De.parentCluster)}:
         <button type="button" class="timeline-link" @click=${()=>this.#fe(e)}>${Fe(De.cluster,{PH1:s})}</button>
      </span>`}#Re(e){return Me`
      <td class="total-row">${Fe(De.total)}</td>
      <td class="total-row">${e.clusterCumulativeScore.toFixed(4)}</td>`}#Te(e,t,n){if(!t)return null;const r=e.args.data?.navigationId??i.Types.Events.NO_NAVIGATION,o=t.get(r)?.model.CLSCulprits;if(!o||o instanceof Error)return null;const a=o.shifts.get(e),l=e.args.data?.impacted_nodes??[],d=a&&(a.fontRequests.length||a.iframeIds.length||a.nonCompositedAnimations.length||a.unsizedImages.length),c=l?.length,h=o.clusters.find((t=>t.events.find((t=>t===e))));return Me`
      <table class="layout-shift-details-table">
        <thead class="table-title">
          <tr>
            <th>${Fe(De.startTime)}</th>
            <th>${Fe(De.shiftScore)}</th>
            ${c&&this.#pe?Me`
              <th>${Fe(De.elementsShifted)}</th>`:s.nothing}
            ${d&&this.#pe?Me`
              <th>${Fe(De.culprit)}</th> `:s.nothing}
          </tr>
        </thead>
        <tbody>
          ${this.#Ce(e,n,l,a)}
        </tbody>
      </table>
      ${this.#$e(h,n)}
    `}#Pe(e,t,n){if(!t)return null;const r=e.navigationId??i.Types.Events.NO_NAVIGATION,o=t.get(r)?.model.CLSCulprits;if(!o||o instanceof Error)return null;const a=Array.from(o.shifts.entries()).filter((([t])=>e.events.includes(t))).map((([,e])=>e)).flatMap((e=>Object.values(e))).flat(),l=Boolean(a.length);return Me`
          <table class="layout-shift-details-table">
            <thead class="table-title">
              <tr>
                <th>${Fe(De.startTime)}</th>
                <th>${Fe(De.shiftScore)}</th>
                ${this.#pe?Me`
                  <th>${Fe(De.elementsShifted)}</th>`:s.nothing}
                ${l&&this.#pe?Me`
                  <th>${Fe(De.culprit)}</th> `:s.nothing}
              </tr>
            </thead>
            <tbody>
              ${e.events.map((e=>{const t=o.shifts.get(e),i=e.args.data?.impacted_nodes??[];return this.#Ce(e,n,i,t)}))}
              ${this.#Re(e)}
            </tbody>
          </table>
        `}#i(){if(!this.#he||!this.#ue)return;const e=Me`
      <div class="layout-shift-summary-details">
        <div
          class="event-details"
          @mouseover=${this.#Le}
          @mouseleave=${this.#Le}
        >
          ${this.#me(this.#he)}
          ${i.Types.Events.isSyntheticLayoutShift(this.#he)?this.#Te(this.#he,this.#ge,this.#ue):this.#Pe(this.#he,this.#ge,this.#ue)}
        </div>
      </div>
    `;s.render(e,this.#e,{host:this})}#Le(e){const t="mouseover"===e.type;if("mouseleave"===e.type&&this.dispatchEvent(new CustomEvent("toggle-popover",{detail:{show:t},bubbles:!0,composed:!0})),!(e.target instanceof HTMLElement&&this.#he))return;const n=e.target.closest("tbody tr");if(!n||!n.parentElement)return;const r=i.Types.Events.isSyntheticLayoutShift(this.#he)?this.#he:this.#he.events.find((e=>e.ts===parseInt(n.getAttribute("data-ts")??"",10)));this.dispatchEvent(new CustomEvent("toggle-popover",{detail:{event:r,show:t},bubbles:!0,composed:!0}))}}customElements.define("devtools-performance-layout-shift-details",Ne);var ze=Object.freeze({__proto__:null,LayoutShiftDetails:Ne});const Ae=new CSSStyleSheet;Ae.replaceSync(":host{display:flex;align-items:center;max-width:100%;height:20px}devtools-select-menu{min-width:160px;max-width:100%;height:20px}\n/*# sourceURL=networkThrottlingSelector.css */\n");const{html:Oe,nothing:Ue}=s,_e={network:"Network: {PH1}",networkThrottling:"Network throttling: {PH1}",recommendedThrottling:"{PH1} - recommended",recommendedThrottlingReason:"Consider changing setting to simulate real user environments",disabled:"Disabled",presets:"Presets",custom:"Custom",add:"Add…"},Be=t.i18n.registerUIStrings("panels/timeline/components/NetworkThrottlingSelector.ts",_e),Ve=t.i18n.getLocalizedString.bind(void 0,Be);class qe extends HTMLElement{#e=this.attachShadow({mode:"open"});#Ie;#Ee=[];#Me;#De=null;constructor(){super(),this.#Ie=u.Settings.Settings.instance().moduleSetting("custom-network-conditions"),this.#He(),this.#Me=a.NetworkManager.MultitargetNetworkManager.instance().networkConditions(),this.#i()}set recommendedConditions(e){this.#De=e,n.ScheduledRender.scheduleRender(this,this.#i)}connectedCallback(){this.#e.adoptedStyleSheets=[Ae],a.NetworkManager.MultitargetNetworkManager.instance().addEventListener("ConditionsChanged",this.#Fe,this),this.#Fe(),this.#Ie.addChangeListener(this.#Ne,this)}disconnectedCallback(){a.NetworkManager.MultitargetNetworkManager.instance().removeEventListener("ConditionsChanged",this.#Fe,this),this.#Ie.removeChangeListener(this.#Ne,this)}#He(){this.#Ee=[{name:Ve(_e.disabled),items:[a.NetworkManager.NoThrottlingConditions]},{name:Ve(_e.presets),items:l.ThrottlingPresets.ThrottlingPresets.networkPresets},{name:Ve(_e.custom),items:this.#Ie.get(),showCustomAddOption:!0,jslogContext:"custom-network-throttling-item"}]}#Fe(){this.#Me=a.NetworkManager.MultitargetNetworkManager.instance().networkConditions(),n.ScheduledRender.scheduleRender(this,this.#i)}#g(e){const t=this.#Ee.flatMap((e=>e.items)).find((t=>this.#ze(t)===e.itemValue));t&&a.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(t)}#Ne(){this.#He(),n.ScheduledRender.scheduleRender(this,this.#i)}#Ae(e){return e.title instanceof Function?e.title():e.title}#Oe(){u.Revealer.reveal(this.#Ie)}#ze(e){return e.i18nTitleKey||this.#Ae(e)}#i=()=>{const e=this.#Ae(this.#Me),t=this.#ze(this.#Me);let i;this.#De&&this.#Me===a.NetworkManager.NoThrottlingConditions&&(i=Oe`<devtools-button
        title=${Ve(_e.recommendedThrottlingReason)}
        .iconName=${"info"}
        .variant=${"icon"}
      ></devtools-button>`);const n=Oe`
      <devtools-select-menu
        @selectmenuselected=${this.#g}
        .showDivider=${!0}
        .showArrow=${!0}
        .sideButton=${!1}
        .showSelectedItem=${!0}
        .jslogContext=${"network-conditions"}
        .buttonTitle=${Ve(_e.network,{PH1:e})}
        .title=${Ve(_e.networkThrottling,{PH1:e})}
      >
        ${this.#Ee.map((e=>Oe`
            <devtools-menu-group .name=${e.name} .title=${e.name}>
              ${e.items.map((i=>{let n=this.#Ae(i);i===this.#De&&(n=Ve(_e.recommendedThrottling,{PH1:n}));const r=this.#ze(i),s=e.jslogContext||d.StringUtilities.toKebabCase(i.i18nTitleKey||n);return Oe`
                  <devtools-menu-item
                    .value=${r}
                    .selected=${t===r}
                    .title=${n}
                    jslog=${o.item(s).track({click:!0})}
                  >
                    ${n}
                  </devtools-menu-item>
                `}))}
              ${e.showCustomAddOption?Oe`
                <devtools-menu-item
                  .value=${1}
                  .title=${Ve(_e.add)}
                  jslog=${o.action("add").track({click:!0})}
                  @click=${this.#Oe}
                >
                  ${Ve(_e.add)}
                </devtools-menu-item>
              `:Ue}
            </devtools-menu-group>
          `))}
      </devtools-select-menu>
      ${i}
    `;s.render(n,this.#e,{host:this})}}customElements.define("devtools-network-throttling-selector",qe);var We=Object.freeze({__proto__:null,NetworkThrottlingSelector:qe});const je=new CSSStyleSheet;je.replaceSync('.metric-card{border-radius:var(--sys-shape-corner-small);padding:14px 16px;background-color:var(--sys-color-surface3);height:100%;box-sizing:border-box;&:not(:hover) .title-help{visibility:hidden}}.title{display:flex;justify-content:space-between;font-size:var(--sys-typescale-headline5-size);line-height:var(--sys-typescale-headline5-line-height);font-weight:var(--ref-typeface-weight-medium);margin:0;margin-bottom:6px}.title-help{height:var(--sys-typescale-headline5-line-height);margin-left:4px}.metric-values-section{position:relative;display:flex;column-gap:8px;margin-bottom:8px}.metric-values-section:focus-visible{outline:2px solid -webkit-focus-ring-color}.metric-source-block{flex:1}.metric-source-value{font-size:32px;line-height:36px;font-weight:var(--ref-typeface-weight-regular)}.metric-source-label{font-weight:var(--ref-typeface-weight-medium)}.warning{margin-top:4px;color:var(--sys-color-error);font-size:var(--sys-typescale-body4-size);line-height:var(--sys-typescale-body4-line-height);display:flex;&::before{content:" ";width:var(--sys-typescale-body4-line-height);height:var(--sys-typescale-body4-line-height);mask-size:var(--sys-typescale-body4-line-height);mask-image:var(--image-file-warning);background-color:var(--sys-color-error);margin-right:4px;flex-shrink:0}}.good-bg{background-color:var(--app-color-performance-good)}.needs-improvement-bg{background-color:var(--app-color-performance-ok)}.poor-bg{background-color:var(--app-color-performance-bad)}.divider{width:100%;border:0;border-bottom:1px solid var(--sys-color-divider);margin:8px 0;box-sizing:border-box}.compare-text{margin-top:8px}.environment-recs-intro{margin-top:8px}.environment-recs{margin:9px 0}.environment-recs > summary{font-weight:var(--ref-typeface-weight-medium);margin-bottom:4px;font-size:var(--sys-typescale-body4-size);line-height:var(--sys-typescale-body4-line-height);display:flex;&::before{content:" ";width:var(--sys-typescale-body4-line-height);height:var(--sys-typescale-body4-line-height);mask-size:var(--sys-typescale-body4-line-height);mask-image:var(--image-file-triangle-right);background-color:var(--icon-default);margin-right:4px;flex-shrink:0}}details.environment-recs[open] > summary::before{mask-image:var(--image-file-triangle-down)}.environment-recs-list{margin:0}.detailed-compare-text{margin-bottom:8px}.bucket-summaries{margin-top:8px;overflow-x:auto}.bucket-summaries.histogram{display:grid;grid-template-columns:minmax(min-content,auto) minmax(20px,50px) max-content;grid-auto-rows:1fr;column-gap:8px;justify-items:flex-end;align-items:center}.bucket-label{justify-self:start;font-weight:var(--ref-typeface-weight-medium)}.bucket-range{color:var(--sys-color-token-subtle)}.histogram-bar{height:6px}.histogram-percent{color:var(--sys-color-token-subtle);font-weight:var(--ref-typeface-weight-medium)}.tooltip{display:none;visibility:hidden;transition-property:visibility;width:min(var(--tooltip-container-width,350px),350px);max-width:max-content;position:absolute;top:100%;left:50%;transform:translateX(-50%);z-index:1;box-sizing:border-box;padding:var(--sys-size-5) var(--sys-size-6);border-radius:var(--sys-shape-corner-small);background-color:var(--sys-color-cdt-base-container);box-shadow:var(--drop-shadow-depth-3)}.phase-table-row{display:flex;justify-content:space-between}.phase-table-header-row{font-weight:var(--ref-typeface-weight-medium)}\n/*# sourceURL=metricCard.css */\n');const Ke={goodBetterCompare:"Your local {PH1} value of {PH2} is good, but is significantly better than your users’ experience.",goodWorseCompare:"Your local {PH1} value of {PH2} is good, but is significantly worse than your users’ experience.",goodSimilarCompare:"Your local {PH1} value of {PH2} is good, and is similar to your users’ experience.",goodSummarized:"Your local {PH1} value of {PH2} is good.",needsImprovementBetterCompare:"Your local {PH1} value of {PH2} needs improvement, but is significantly better than your users’ experience.",needsImprovementWorseCompare:"Your local {PH1} value of {PH2} needs improvement, but is significantly worse than your users’ experience.",needsImprovementSimilarCompare:"Your local {PH1} value of {PH2} needs improvement, and is similar to your users’ experience.",needsImprovementSummarized:"Your local {PH1} value of {PH2} needs improvement.",poorBetterCompare:"Your local {PH1} value of {PH2} is poor, but is significantly better than your users’ experience.",poorWorseCompare:"Your local {PH1} value of {PH2} is poor, but is significantly worse than your users’ experience.",poorSimilarCompare:"Your local {PH1} value of {PH2} is poor, and is similar to your users’ experience.",poorSummarized:"Your local {PH1} value of {PH2} is poor.",goodGoodDetailedCompare:"Your local {PH1} value of {PH2} is good and is rated the same as {PH4} of real-user {PH1} experiences. Additionally, the field data 75th percentile {PH1} value of {PH3} is good.",goodNeedsImprovementDetailedCompare:"Your local {PH1} value of {PH2} is good and is rated the same as {PH4} of real-user {PH1} experiences. However, the field data 75th percentile {PH1} value of {PH3} needs improvement.",goodPoorDetailedCompare:"Your local {PH1} value of {PH2} is good and is rated the same as {PH4} of real-user {PH1} experiences. However, the field data 75th percentile {PH1} value of {PH3} is poor.",needsImprovementGoodDetailedCompare:"Your local {PH1} value of {PH2} needs improvement and is rated the same as {PH4} of real-user {PH1} experiences. However, the field data 75th percentile {PH1} value of {PH3} is good.",needsImprovementNeedsImprovementDetailedCompare:"Your local {PH1} value of {PH2} needs improvement and is rated the same as {PH4} of real-user {PH1} experiences. Additionally, the field data 75th percentile {PH1} value of {PH3} needs improvement.",needsImprovementPoorDetailedCompare:"Your local {PH1} value of {PH2} needs improvement and is rated the same as {PH4} of real-user {PH1} experiences. However, the field data 75th percentile {PH1} value of {PH3} is poor.",poorGoodDetailedCompare:"Your local {PH1} value of {PH2} is poor and is rated the same as {PH4} of real-user {PH1} experiences. However, the field data 75th percentile {PH1} value of {PH3} is good.",poorNeedsImprovementDetailedCompare:"Your local {PH1} value of {PH2} is poor and is rated the same as {PH4} of real-user {PH1} experiences. However, the field data 75th percentile {PH1} value of {PH3} needs improvement.",poorPoorDetailedCompare:"Your local {PH1} value of {PH2} is poor and is rated the same as {PH4} of real-user {PH1} experiences. Additionally, the field data 75th percentile {PH1} value of {PH3} is poor."},Ye=t.i18n.registerUIStrings("panels/timeline/components/MetricCompareStrings.ts",Ke);const Ge=new CSSStyleSheet;Ge.replaceSync(".metric-value{text-wrap:nowrap}.metric-value.dim{font-weight:var(--ref-typeface-weight-medium)}.metric-value.waiting{color:var(--sys-color-token-subtle)}.metric-value.good{color:var(--app-color-performance-good)}.metric-value.needs-improvement{color:var(--app-color-performance-ok)}.metric-value.poor{color:var(--app-color-performance-bad)}.metric-value.good.dim{color:var(--app-color-performance-good-dim)}.metric-value.needs-improvement.dim{color:var(--app-color-performance-ok-dim)}.metric-value.poor.dim{color:var(--app-color-performance-bad-dim)}\n/*# sourceURL=metricValueStyles.css */\n");const Xe={fms:"{PH1}[ms]()",fs:"{PH1}[s]()"},Je=t.i18n.registerUIStrings("panels/timeline/components/Utils.ts",Xe),Ze=t.i18n.getLocalizedString.bind(void 0,Je);var Qe;function et(e){const{mimeType:t}=e.args.data;switch(e.args.data.resourceType){case"Document":return Qe.DOC;case"Stylesheet":return Qe.CSS;case"Image":return Qe.IMG;case"Media":return Qe.MEDIA;case"Font":return Qe.FONT;case"Script":case"WebSocket":return Qe.JS;default:return t.endsWith("/css")?Qe.CSS:t.endsWith("javascript")?Qe.JS:t.startsWith("image/")?Qe.IMG:t.startsWith("audio/")||t.startsWith("video/")?Qe.MEDIA:t.startsWith("font/")||t.includes("font-")?Qe.FONT:"application/wasm"===t?Qe.WASM:t.startsWith("text/")?Qe.DOC:Qe.OTHER}}function tt(e){let t="--app-color-system";switch(e){case Qe.DOC:t="--app-color-doc";break;case Qe.JS:t="--app-color-scripting";break;case Qe.CSS:t="--app-color-css";break;case Qe.IMG:t="--app-color-image";break;case Qe.MEDIA:t="--app-color-media";break;case Qe.FONT:t="--app-color-font";break;case Qe.WASM:t="--app-color-wasm";break;case Qe.OTHER:default:t="--app-color-system"}return w.ThemeSupport.instance().getComputedValue(t)}function it(e){return tt(et(e))}!function(e){e.DOC="Doc",e.CSS="CSS",e.JS="JS",e.FONT="Font",e.IMG="Img",e.MEDIA="Media",e.WASM="Wasm",e.OTHER="Other"}(Qe||(Qe={}));const nt=[2500,4e3],rt=[.1,.25],st=[200,500];function ot(e,t){return e<=t[0]?"good":e<=t[1]?"needs-improvement":"poor"}function at(e,t,i,n,r){const s=document.createElement("span");if(s.classList.add("metric-value"),void 0===t)return s.classList.add("waiting"),s.textContent="-",s;s.textContent=n(t);const a=ot(t,i);return s.classList.add(a),s.setAttribute("jslog",`${o.section(e)}`),r?.dim&&s.classList.add("dim"),s}var lt;!function(e){function i(e){const t=e.indexOf("["),i=-1!==t&&e.indexOf("]",t),n=i&&e.indexOf("(",i),r=n&&e.indexOf(")",n);if(!r||-1===r)return null;return{firstPart:e.substring(0,t),unitPart:e.substring(t+1,i),lastPart:e.substring(r+1)}}e.parse=i,e.formatMicroSecondsAsSeconds=function(e){const n=document.createElement("span");n.classList.add("number-with-unit");const r=d.Timing.microSecondsToMilliSeconds(e),s=d.Timing.milliSecondsToSeconds(r),o=Ze(Xe.fs,{PH1:s.toFixed(2)}),a=i(o);if(!a)return n.textContent=t.TimeUtilities.formatMicroSecondsAsSeconds(e),{text:o,element:n};const{firstPart:l,unitPart:c,lastPart:h}=a;return l&&n.append(l),n.createChild("span","unit").textContent=c,h&&n.append(h),{text:n.textContent??"",element:n}},e.formatMicroSecondsAsMillisFixed=function(e,n=0){const r=document.createElement("span");r.classList.add("number-with-unit");const s=d.Timing.microSecondsToMilliSeconds(e),o=Ze(Xe.fms,{PH1:s.toFixed(n)}),a=i(o);if(!a)return r.textContent=t.TimeUtilities.formatMicroSecondsAsMillisFixed(e),{text:o,element:r};const{firstPart:l,unitPart:c,lastPart:h}=a;return l&&r.append(l),r.createChild("span","unit").textContent=c,h&&r.append(h),{text:r.textContent??"",element:r}}}(lt||(lt={}));var dt=Object.freeze({__proto__:null,CLS_THRESHOLDS:rt,INP_THRESHOLDS:st,LCP_THRESHOLDS:nt,get NetworkCategory(){return Qe},get NumberWithUnit(){return lt},colorForNetworkCategory:tt,colorForNetworkRequest:it,networkResourceCategory:et,rateMetric:ot,renderMetricValue:at});const{html:ct,nothing:ht}=s,gt={localValue:"Local",field75thPercentile:"Field 75th percentile",good:"Good",needsImprovement:"Needs improvement",poor:"Poor",leqRange:"(≤{PH1})",betweenRange:"({PH1}-{PH2})",gtRange:"(>{PH1})",percentage:"{PH1}%",interactToMeasure:"Interact with the page to measure INP.",viewCardDetails:"View card details",considerTesting:"Consider your local test conditions",recThrottlingLCP:"Real users may experience longer page loads due to slower network conditions. Increasing network throttling will simulate slower network conditions.",recThrottlingINP:"Real users may experience longer interactions due to slower CPU speeds. Increasing CPU throttling will simulate a slower device.",recViewportLCP:"Screen size can influence what the LCP element is. Ensure you are testing common viewport sizes.",recViewportCLS:"Screen size can influence what layout shifts happen. Ensure you are testing common viewport sizes.",recJourneyCLS:"How a user interacts with the page can influence layout shifts. Ensure you are testing common interactions like scrolling the page.",recJourneyINP:"How a user interacts with the page influences interaction delays. Ensure you are testing common interactions.",recDynamicContentLCP:"The LCP element can vary between page loads if content is dynamic.",recDynamicContentCLS:"Dynamic content can influence what layout shifts happen.",phase:"Phase",duration:"Local duration (ms)",lcpHelpTooltip:"LCP reports the render time of the largest image, text block, or video visible in the viewport. Click here to learn more about LCP.",clsHelpTooltip:"CLS measures the amount of unexpected shifted content. Click here to learn more about CLS.",inpHelpTooltip:"INP measures the overall responsiveness to all click, tap, and keyboard interactions. Click here to learn more about INP."},ut=t.i18n.registerUIStrings("panels/timeline/components/MetricCard.ts",gt),pt=t.i18n.getLocalizedString.bind(void 0,ut);class mt extends HTMLElement{#e=this.attachShadow({mode:"open"});constructor(){super(),this.#i()}#Ue;#_e={metric:"LCP"};set data(e){this.#_e=e,n.ScheduledRender.scheduleRender(this,this.#i)}connectedCallback(){this.#e.adoptedStyleSheets=[je,Ge],n.ScheduledRender.scheduleRender(this,this.#i)}#Be=e=>{d.KeyboardUtilities.isEscKey(e)&&(e.stopPropagation(),this.#Ve())};#qe(e){const t=e.target;t?.hasFocus()||this.#Ve()}#We(e){const t=e.target;if(t?.hasFocus())return;const i=e.relatedTarget;i instanceof Node&&t.contains(i)||this.#Ve()}#Ve(){const e=this.#Ue;e&&(document.body.removeEventListener("keydown",this.#Be),e.style.removeProperty("left"),e.style.removeProperty("visibility"),e.style.removeProperty("display"),e.style.removeProperty("transition-delay"))}#je(e=0){const t=this.#Ue;if(!t||t.style.visibility||t.style.display)return;document.body.addEventListener("keydown",this.#Be),t.style.display="block",t.style.transitionDelay=`${Math.round(e)}ms`;const i=this.#_e.tooltipContainer;if(!i)return;const n=i.getBoundingClientRect();t.style.setProperty("--tooltip-container-width",`${Math.round(n.width)}px`),requestAnimationFrame((()=>{let e=0;const i=t.getBoundingClientRect(),r=i.right-n.right,s=i.left-n.left;s<0?e=Math.round(s):r>0&&(e=Math.round(r)),t.style.left=`calc(50% - ${e}px)`,t.style.visibility="visible"}))}#Ke(){switch(this.#_e.metric){case"LCP":return 1e3;case"CLS":return.1;case"INP":return 200}}#Ye(){switch(this.#_e.metric){case"LCP":return t.i18n.lockedString("Largest Contentful Paint (LCP)");case"CLS":return t.i18n.lockedString("Cumulative Layout Shift (CLS)");case"INP":return t.i18n.lockedString("Interaction to Next Paint (INP)")}}#Ge(){switch(this.#_e.metric){case"LCP":return nt;case"CLS":return rt;case"INP":return st}}#Xe(){switch(this.#_e.metric){case"LCP":return e=>{const i=1e3*e;return t.TimeUtilities.formatMicroSecondsAsSeconds(i)};case"CLS":return e=>0===e?"0":e.toFixed(2);case"INP":return e=>t.TimeUtilities.preciseMillisToString(e)}}#Je(){switch(this.#_e.metric){case"LCP":return"https://web.dev/articles/lcp";case"CLS":return"https://web.dev/articles/cls";case"INP":return"https://web.dev/articles/inp"}}#Ze(){switch(this.#_e.metric){case"LCP":return pt(gt.lcpHelpTooltip);case"CLS":return pt(gt.clsHelpTooltip);case"INP":return pt(gt.inpHelpTooltip)}}#Qe(){const{localValue:e}=this.#_e;if(void 0!==e)return e}#et(){let{fieldValue:e}=this.#_e;if(void 0!==e&&("string"==typeof e&&(e=Number(e)),Number.isFinite(e)))return e}#tt(){const e=this.#Qe(),t=this.#et();if(void 0===e||void 0===t)return;const i=this.#Ge(),n=ot(e,i),r=ot(t,i);if("good"===n&&"good"===r)return"similar";const s=this.#Ke();return e-t>s?"worse":t-e>s?"better":"similar"}#it(){const e=this.#Qe();if(void 0===e)return"INP"===this.#_e.metric?ct`
          <div class="compare-text">${pt(gt.interactToMeasure)}</div>
        `:s.nothing;const i=this.#tt(),n=ot(e,this.#Ge()),r=at(this.#nt(!0),e,this.#Ge(),this.#Xe(),{dim:!0});return ct`
      <div class="compare-text">
        ${function(e){const{rating:i,compare:n}=e,r={PH1:e.metric,PH2:e.localValue};if("good"===i&&"better"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodBetterCompare,r);if("good"===i&&"worse"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodWorseCompare,r);if("good"===i&&"similar"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodSimilarCompare,r);if("good"===i&&!n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodSummarized,r);if("needs-improvement"===i&&"better"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementBetterCompare,r);if("needs-improvement"===i&&"worse"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementWorseCompare,r);if("needs-improvement"===i&&"similar"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementSimilarCompare,r);if("needs-improvement"===i&&!n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementSummarized,r);if("poor"===i&&"better"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorBetterCompare,r);if("poor"===i&&"worse"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorWorseCompare,r);if("poor"===i&&"similar"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorSimilarCompare,r);if("poor"===i&&!n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorSummarized,r);throw new Error("Compare string not found")}({metric:t.i18n.lockedString(this.#_e.metric),rating:n,compare:i,localValue:r})}
      </div>
    `}#rt(){const e=this.#tt();if(!e||"similar"===e)return s.nothing;const t=[],i=this.#_e.metric;return"LCP"===i&&"better"===e?t.push(pt(gt.recThrottlingLCP)):"INP"===i&&"better"===e&&t.push(pt(gt.recThrottlingINP)),"LCP"===i?t.push(pt(gt.recViewportLCP)):"CLS"===i&&t.push(pt(gt.recViewportCLS)),"CLS"===i?t.push(pt(gt.recJourneyCLS)):"INP"===i&&t.push(pt(gt.recJourneyINP)),"LCP"===i?t.push(pt(gt.recDynamicContentLCP)):"CLS"===i&&t.push(pt(gt.recDynamicContentCLS)),t.length?ct`
      <details class="environment-recs">
        <summary>${pt(gt.considerTesting)}</summary>
        <ul class="environment-recs-list">${t.map((e=>ct`<li>${e}</li>`))}</ul>
      </details>
    `:s.nothing}#nt(e){return`timeline.landing.${e?"local":"field"}-${this.#_e.metric.toLowerCase()}`}#st(){const e=this.#Qe();if(void 0===e)return"INP"===this.#_e.metric?ct`
          <div class="detailed-compare-text">${pt(gt.interactToMeasure)}</div>
        `:s.nothing;const i=ot(e,this.#Ge()),n=this.#et(),r=void 0!==n?ot(n,this.#Ge()):void 0,o=at(this.#nt(!0),e,this.#Ge(),this.#Xe(),{dim:!0}),a=at(this.#nt(!1),n,this.#Ge(),this.#Xe(),{dim:!0});return ct`
      <div class="detailed-compare-text">${function(e){const{localRating:i,fieldRating:n}=e,r={PH1:e.metric,PH2:e.localValue,PH3:e.fieldValue,PH4:e.percent};if("good"===i&&"good"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodGoodDetailedCompare,r);if("good"===i&&"needs-improvement"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodNeedsImprovementDetailedCompare,r);if("good"===i&&"poor"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodPoorDetailedCompare,r);if("good"===i&&!n)return t.i18n.getFormatLocalizedString(Ye,Ke.goodSummarized,r);if("needs-improvement"===i&&"good"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementGoodDetailedCompare,r);if("needs-improvement"===i&&"needs-improvement"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementNeedsImprovementDetailedCompare,r);if("needs-improvement"===i&&"poor"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementPoorDetailedCompare,r);if("needs-improvement"===i&&!n)return t.i18n.getFormatLocalizedString(Ye,Ke.needsImprovementSummarized,r);if("poor"===i&&"good"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorGoodDetailedCompare,r);if("poor"===i&&"needs-improvement"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorNeedsImprovementDetailedCompare,r);if("poor"===i&&"poor"===n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorPoorDetailedCompare,r);if("poor"===i&&!n)return t.i18n.getFormatLocalizedString(Ye,Ke.poorSummarized,r);throw new Error("Detailed compare string not found")}({metric:t.i18n.lockedString(this.#_e.metric),localRating:i,fieldRating:r,localValue:o,fieldValue:a,percent:this.#ot(i)})}</div>
    `}#at(e){switch(e){case"good":return 0;case"needs-improvement":return 1;case"poor":return 2}}#lt(e){const t=this.#_e.histogram,i=t?.[this.#at(e)].density||0;return`${Math.round(100*i)}%`}#ot(e){const t=this.#_e.histogram;if(void 0===t)return"-";const i=t[this.#at(e)].density||0,n=Math.round(100*i);return pt(gt.percentage,{PH1:n})}#dt(){const e=c.CrUXManager.instance().getConfigSetting().get().enabled,t=this.#Xe(),i=this.#Ge(),n=ct`
      <div class="bucket-label">
        <span>${pt(gt.good)}</span>
        <span class="bucket-range">${pt(gt.leqRange,{PH1:t(i[0])})}</span>
      </div>
    `,r=ct`
      <div class="bucket-label">
        <span>${pt(gt.needsImprovement)}</span>
        <span class="bucket-range">${pt(gt.betweenRange,{PH1:t(i[0]),PH2:t(i[1])})}</span>
      </div>
    `,s=ct`
      <div class="bucket-label">
        <span>${pt(gt.poor)}</span>
        <span class="bucket-range">${pt(gt.gtRange,{PH1:t(i[1])})}</span>
      </div>
    `;return e?ct`
      <div class="bucket-summaries histogram">
        ${n}
        <div class="histogram-bar good-bg" style="width: ${this.#lt("good")}"></div>
        <div class="histogram-percent">${this.#ot("good")}</div>
        ${r}
        <div class="histogram-bar needs-improvement-bg" style="width: ${this.#lt("needs-improvement")}"></div>
        <div class="histogram-percent">${this.#ot("needs-improvement")}</div>
        ${s}
        <div class="histogram-bar poor-bg" style="width: ${this.#lt("poor")}"></div>
        <div class="histogram-percent">${this.#ot("poor")}</div>
      </div>
    `:ct`
        <div class="bucket-summaries">
          ${n}
          ${r}
          ${s}
        </div>
      `}#ct(){const e=this.#Qe(),t=this.#_e.phases;return t&&e?ct`
      <hr class="divider">
      <div class="phase-table" role="table">
        <div class="phase-table-row phase-table-header-row" role="row">
          <div role="columnheader">${pt(gt.phase)}</div>
          <div role="columnheader">${pt(gt.duration)}</div>
        </div>
        ${t.map((e=>ct`
          <div class="phase-table-row" role="row">
            <div role="cell">${e[0]}</div>
            <div role="cell">${Math.round(e[1])}</div>
          </div>
        `))}
      </div>
    `:s.nothing}#i=()=>{const e=c.CrUXManager.instance().getConfigSetting().get().enabled,t=this.#Je(),i=ct`
      <div class="metric-card">
        <h3 class="title">
          ${this.#Ye()}
          <devtools-button
            class="title-help"
            title=${this.#Ze()}
            .iconName=${"help"}
            .variant=${"icon"}
            @click=${()=>f.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(t)}
          ></devtools-button>
        </h3>
        <div tabindex="0" class="metric-values-section"
          @mouseenter=${()=>this.#je(500)}
          @mouseleave=${this.#qe}
          @focusin=${this.#je}
          @focusout=${this.#We}
          aria-describedby="tooltip"
        >
          <div class="metric-source-block">
            <div class="metric-source-value" id="local-value">${at(this.#nt(!0),this.#Qe(),this.#Ge(),this.#Xe())}</div>
            ${e?ct`<div class="metric-source-label">${pt(gt.localValue)}</div>`:ht}
          </div>
          ${e?ct`
            <div class="metric-source-block">
              <div class="metric-source-value" id="field-value">${at(this.#nt(!1),this.#et(),this.#Ge(),this.#Xe())}</div>
              <div class="metric-source-label">${pt(gt.field75thPercentile)}</div>
            </div>
          `:ht}
          <div
            id="tooltip"
            class="tooltip"
            role="tooltip"
            aria-label=${pt(gt.viewCardDetails)}
            on-render=${n.Directives.nodeRenderedCallback((e=>{this.#Ue=e}))}
          >
            ${this.#st()}
            <hr class="divider">
            ${this.#dt()}
            ${this.#ct()}
          </div>
        </div>
        ${e?ct`<hr class="divider">`:ht}
        ${this.#it()}
        ${this.#_e.warnings?.map((e=>ct`
          <div class="warning">${e}</div>
        `))}
        ${this.#rt()}
        <slot name="extra-info"></slot>
      </div>
    `;s.render(i,this.#e,{host:this})}}customElements.define("devtools-metric-card",mt);var vt=Object.freeze({__proto__:null,MetricCard:mt});const{html:bt}=s;const yt=new CSSStyleSheet;yt.replaceSync('.container{container-type:inline-size;height:100%;font-size:var(--sys-typescale-body4-size);line-height:var(--sys-typescale-body4-line-height);font-weight:var(--ref-typeface-weight-regular);user-select:text}.live-metrics-view{--min-main-area-size:60%;background-color:var(--sys-color-cdt-base-container);display:flex;flex-direction:row;width:100%;height:100%}.live-metrics,\n.next-steps{padding:16px;height:100%;overflow-y:auto;box-sizing:border-box}.live-metrics{flex:1;display:flex;flex-direction:column}.next-steps{flex:0 0 336px;box-sizing:border-box;border:none;border-left:1px solid var(--sys-color-divider)}@container (max-width: 650px){.live-metrics-view{flex-direction:column}.next-steps{flex-basis:40%;border:none;border-top:1px solid var(--sys-color-divider)}}.metric-cards{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));width:100%}.section-title{font-size:var(--sys-typescale-headline4-size);line-height:var(--sys-typescale-headline4-line-height);font-weight:var(--ref-typeface-weight-medium);margin:0;margin-bottom:10px}.settings-card{border-radius:var(--sys-shape-corner-small);padding:14px 16px 16px;background-color:var(--sys-color-surface3);margin-bottom:16px}.record-action-card{border-radius:var(--sys-shape-corner-small);padding:12px 16px 12px 12px;background-color:var(--sys-color-surface3);margin-bottom:16px}.card-title{font-size:var(--sys-typescale-headline5-size);line-height:var(--sys-typescale-headline5-line-height);font-weight:var(--ref-typeface-weight-medium);margin:0}.settings-card .card-title{margin-bottom:4px}.device-toolbar-description{margin-bottom:12px;display:flex}.network-cache-setting{display:inline-block;max-width:max-content}.throttling-recommendation-value{font-weight:var(--ref-typeface-weight-medium)}.related-info{text-wrap:nowrap;margin-top:8px;display:flex}.related-info-label{font-weight:var(--ref-typeface-weight-medium);margin-right:4px}.related-info-link{background-color:var(--sys-color-cdt-base-container);border-radius:2px;padding:0 2px;min-width:0}.local-field-link{margin-top:8px}.logs-section{margin-top:24px;display:flex;flex-direction:column;flex:1 0 300px;overflow:auto;max-height:max-content;--app-color-toolbar-background:transparent}.logs-section-header{display:flex;align-items:center}.interactions-clear{margin-left:4px;vertical-align:sub}.log{padding:0;margin:0;overflow:auto}.log-item{border:none;border-bottom:1px solid var(--sys-color-divider);&.highlight{animation:highlight-fadeout 2s}}.interaction{--phase-table-margin:120px;--details-indicator-width:18px;summary{display:flex;align-items:center;padding:7px 4px;&::before{content:" ";height:14px;width:var(--details-indicator-width);mask-image:var(--image-file-triangle-right);background-color:var(--icon-default);flex-shrink:0}}details[open] summary::before{mask-image:var(--image-file-triangle-down)}}.interaction-type{font-weight:var(--ref-typeface-weight-medium);width:calc(var(--phase-table-margin) - var(--details-indicator-width));flex-shrink:0}.interaction-inp-chip{background-color:var(--sys-color-yellow-bright);color:var(--sys-color-on-yellow);padding:0 2px}.interaction-node{flex-grow:1;margin-right:32px;min-width:0}.interaction-info{width:var(--sys-typescale-body4-line-height);height:var(--sys-typescale-body4-line-height);margin-right:6px}.interaction-duration{text-align:end;width:max-content;flex-shrink:0;font-weight:var(--ref-typeface-weight-medium)}.layout-shift{display:flex;align-items:flex-start}.layout-shift-score{margin-right:16px;padding:7px 0;width:150px;box-sizing:border-box}.layout-shift-nodes{flex:1;min-width:0}.layout-shift-node{border-bottom:1px solid var(--sys-color-divider);padding:7px 0;&:last-child{border:none}}.record-action{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:8px}.shortcut-label{width:max-content;flex-shrink:0}.field-data-option{margin:8px 0;max-width:100%}.field-setup-buttons{margin-top:14px}.field-data-message{margin-bottom:12px}.field-data-warning{margin-top:4px;color:var(--sys-color-error);font-size:var(--sys-typescale-body4-size);line-height:var(--sys-typescale-body4-line-height);display:flex;&::before{content:" ";width:var(--sys-typescale-body4-line-height);height:var(--sys-typescale-body4-line-height);mask-size:var(--sys-typescale-body4-line-height);mask-image:var(--image-file-warning);background-color:var(--sys-color-error);margin-right:4px;flex-shrink:0}}.collection-period-range{font-weight:var(--ref-typeface-weight-medium)}x-link{color:var(--sys-color-primary);text-decoration-line:underline}.environment-option{display:flex;align-items:center;margin-top:8px}.environment-recs-list{margin:0;padding-left:20px}.environment-rec{font-weight:var(--ref-typeface-weight-medium)}.link-to-log{padding:unset;background:unset;border:unset;font:inherit;color:var(--sys-color-primary);text-decoration:underline;cursor:pointer}@keyframes highlight-fadeout{from{background-color:var(--sys-color-yellow-container)}to{background-color:transparent}}.phase-table{border-top:1px solid var(--sys-color-divider);padding:7px 4px;margin-left:var(--phase-table-margin)}.phase-table-row{display:flex;justify-content:space-between}.phase-table-header-row{font-weight:var(--ref-typeface-weight-medium);margin-bottom:4px}.log-extra-details-button{padding:unset;background:unset;border:unset;font:inherit;color:var(--sys-color-primary);text-decoration:underline;cursor:pointer}.node-view{display:flex;align-items:center;justify-content:center;height:100%;font-size:var(--sys-typescale-body4-size);line-height:var(--sys-typescale-body4-line-height);font-weight:var(--ref-typeface-weight-regular);user-select:text;main{width:300px;max-width:100%;text-align:center;.section-title{margin-bottom:4px}}}.node-description{margin-bottom:12px}\n/*# sourceURL=liveMetricsView.css */\n');const{html:ft,nothing:wt}=s,St=h.RenderCoordinator.RenderCoordinator.instance(),xt=["AUTO",...c.DEVICE_SCOPE_LIST],kt={localAndFieldMetrics:"Local and field metrics",localMetrics:"Local metrics",eventLogs:"Interaction and layout shift logs section",interactions:"Interactions",layoutShifts:"Layout shifts",nextSteps:"Next steps",fieldData:"Field data",environmentSettings:"Environment settings",showFieldDataForDevice:"Show field data for device type: {PH1}",notEnoughData:"Not enough data",network:"Network: {PH1}",device:"Device: {PH1}",allDevices:"All devices",desktop:"Desktop",mobile:"Mobile",tablet:"Tablet",auto:"Auto ({PH1})",loadingOption:"{PH1} - Loading…",needsDataOption:"{PH1} - No data",urlOption:"URL",originOption:"Origin",urlOptionWithKey:"URL: {PH1}",originOptionWithKey:"Origin: {PH1}",showFieldDataForPage:"Show field data for {PH1}",tryDisablingThrottling:"75th percentile is too fast to simulate with throttling",tryUsingThrottling:"75th percentile is similar to {PH1} throttling",percentDevices:"{PH1}% mobile, {PH2}% desktop",useDeviceToolbar:"Use the [device toolbar](https://developer.chrome.com/docs/devtools/device-mode) and configure throttling to simulate real user environments and identify more performance issues.",disableNetworkCache:"Disable network cache",lcpElement:"LCP element",inpInteractionLink:"INP interaction",worstCluster:"Worst cluster",numShifts:"{shiftCount, plural,\n    =1 {{shiftCount} shift}\n    other {{shiftCount} shifts}\n  }",collectionPeriod:"Collection period: {PH1}",dateRange:"{PH1} - {PH2}",seeHowYourLocalMetricsCompare:"See how your local metrics compare to real user data in the {PH1}.",localFieldLearnMoreLink:"Learn more about local and field data",localFieldLearnMoreTooltip:"Local metrics are captured from the current page using your network connection and device. Field data is measured by real users using many different network connections and devices.",interactionExcluded:"INP is calculated using the 98th percentile of interaction delays, so some interaction delays may be larger than the INP value.",clearCurrentLog:"Clear the current log",timeToFirstByte:"Time to first byte",resourceLoadDelay:"Resource load delay",resourceLoadDuration:"Resource load duration",elementRenderDelay:"Element render delay",inputDelay:"Input delay",processingDuration:"Processing duration",presentationDelay:"Presentation delay",inpInteraction:"The INP interaction is at the 98th percentile of interaction delays.",showInpInteraction:"Go to the INP interaction.",showClsCluster:"Go to worst layout shift cluster.",phase:"Phase",duration:"Local duration (ms)",logToConsole:"Log additional interaction data to the console",nodePerformanceTimeline:"Node performance",nodeClickToRecord:"Record a performance timeline of the connected Node process."},Ct=t.i18n.registerUIStrings("panels/timeline/components/LiveMetricsView.ts",kt),$t=t.i18n.getLocalizedString.bind(void 0,Ct);class Rt extends k.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#ht=!1;#gt;#ut;#pt;#mt=new Map;#vt=[];#bt=c.CrUXManager.instance();#yt;#ft;#wt;#St;#xt;#kt;#Ct=!1;#$t=S.DeviceModeModel.DeviceModeModel.tryInstance();constructor(){super(),this.#yt=r.ActionRegistry.ActionRegistry.instance().getAction("timeline.toggle-recording"),this.#ft=r.ActionRegistry.ActionRegistry.instance().getAction("timeline.record-reload")}set isNode(e){this.#ht=e,n.ScheduledRender.scheduleRender(this,this.#i)}#Rt(e){this.#gt=e.data.lcp,this.#ut=e.data.cls,this.#pt=e.data.inp;const t=this.#vt.length<e.data.layoutShifts.length;this.#vt=[...e.data.layoutShifts];const i=this.#mt.size<e.data.interactions.size;this.#mt=new Map(e.data.interactions);const r=n.ScheduledRender.scheduleRender(this,this.#i);i&&this.#xt&&this.#Tt(r,this.#xt),t&&this.#kt&&this.#Tt(r,this.#kt)}#Tt(e,t){if(!t.checkVisibility())return;(Math.abs(t.scrollHeight-t.clientHeight-t.scrollTop)<=1||this.#Ct)&&e.then((()=>{requestAnimationFrame((()=>{this.#Ct=!0,t.addEventListener("scrollend",(()=>{this.#Ct=!1}),{once:!0}),t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}))}))}#Pt(){n.ScheduledRender.scheduleRender(this,this.#i)}#Lt(){n.ScheduledRender.scheduleRender(this,this.#i)}async#It(){await this.#bt.refresh(),n.ScheduledRender.scheduleRender(this,this.#i)}connectedCallback(){this.#e.adoptedStyleSheets=[yt,Ge];const e=x.LiveMetrics.instance();e.addEventListener("status",this.#Rt,this);const t=c.CrUXManager.instance();t.addEventListener("field-data-changed",this.#Pt,this),this.#$t?.addEventListener("Updated",this.#Lt,this),t.getConfigSetting().get().enabled&&this.#It(),this.#gt=e.lcpValue,this.#ut=e.clsValue,this.#pt=e.inpValue,this.#mt=e.interactions,this.#vt=e.layoutShifts,n.ScheduledRender.scheduleRender(this,this.#i)}disconnectedCallback(){x.LiveMetrics.instance().removeEventListener("status",this.#Rt,this);c.CrUXManager.instance().removeEventListener("field-data-changed",this.#Pt,this),this.#$t?.removeEventListener("Updated",this.#Lt,this)}#Et(){const e=this.#bt.getSelectedFieldMetricData("largest_contentful_paint"),t=this.#gt?.nodeRef?.link,i=this.#gt?.phases;return ft`
      <devtools-metric-card .data=${{metric:"LCP",localValue:this.#gt?.value,fieldValue:e?.percentiles?.p75,histogram:e?.histogram,tooltipContainer:this.#St,warnings:this.#gt?.warnings,phases:i&&[[$t(kt.timeToFirstByte),i.timeToFirstByte],[$t(kt.resourceLoadDelay),i.resourceLoadDelay],[$t(kt.resourceLoadDuration),i.resourceLoadTime],[$t(kt.elementRenderDelay),i.elementRenderDelay]]}}>
        ${t?ft`
            <div class="related-info" slot="extra-info">
              <span class="related-info-label">${$t(kt.lcpElement)}</span>
              <span class="related-info-link">${t}</span>
            </div>
          `:wt}
      </devtools-metric-card>
    `}#Mt(){const e=this.#bt.getSelectedFieldMetricData("cumulative_layout_shift"),t=new Set(this.#ut?.clusterShiftIds||[]),i=t.size>0&&this.#vt.some((e=>t.has(e.uniqueLayoutShiftId)));return ft`
      <devtools-metric-card .data=${{metric:"CLS",localValue:this.#ut?.value,fieldValue:e?.percentiles?.p75,histogram:e?.histogram,tooltipContainer:this.#St,warnings:this.#ut?.warnings}}>
        ${i?ft`
          <div class="related-info" slot="extra-info">
            <span class="related-info-label">${$t(kt.worstCluster)}</span>
            <button
              class="link-to-log"
              title=${$t(kt.showClsCluster)}
              @click=${()=>this.#Dt(t)}
              jslog=${o.action("timeline.landing.show-cls-cluster").track({click:!0})}
            >${$t(kt.numShifts,{shiftCount:t.size})}</button>
          </div>
        `:wt}
      </devtools-metric-card>
    `}#Ht(){const e=this.#bt.getSelectedFieldMetricData("interaction_to_next_paint"),t=this.#pt?.phases,i=this.#pt&&this.#mt.get(this.#pt.interactionId);return ft`
      <devtools-metric-card .data=${{metric:"INP",localValue:this.#pt?.value,fieldValue:e?.percentiles?.p75,histogram:e?.histogram,tooltipContainer:this.#St,warnings:this.#pt?.warnings,phases:t&&[[$t(kt.inputDelay),t.inputDelay],[$t(kt.processingDuration),t.processingDuration],[$t(kt.presentationDelay),t.presentationDelay]]}}>
        ${i?ft`
          <div class="related-info" slot="extra-info">
            <span class="related-info-label">${$t(kt.inpInteractionLink)}</span>
            <button
              class="link-to-log"
              title=${$t(kt.showInpInteraction)}
              @click=${()=>this.#Ft(i)}
              jslog=${o.action("timeline.landing.show-inp-interaction").track({click:!0})}
            >${i.interactionType}</button>
          </div>
        `:wt}
      </devtools-metric-card>
    `}#Nt(e){return ft`
      <div class="record-action">
        <devtools-button @click=${function(){e.execute()}} .data=${{variant:"text",size:"REGULAR",iconName:e.icon(),title:e.title(),jslogContext:e.id()}}>
          ${e.title()}
        </devtools-button>
        <span class="shortcut-label">${r.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction(e.id())}</span>
      </div>
    `}#zt(){const e=this.#bt.getSelectedFieldMetricData("round_trip_time");if(!e?.percentiles)return null;const t=Number(e.percentiles.p75);if(!Number.isFinite(t))return null;if(t<60)return $t(kt.tryDisablingThrottling);const i=l.ThrottlingPresets.ThrottlingPresets.getRecommendedNetworkPreset(t);if(!i)return null;const n="function"==typeof i.title?i.title():i.title;return $t(kt.tryUsingThrottling,{PH1:n})}#At(){const e=this.#bt.getFieldResponse(this.#bt.fieldPageScope,"ALL")?.record.metrics.form_factors?.fractions;return e?$t(kt.percentDevices,{PH1:Math.round(100*e.phone),PH2:Math.round(100*e.desktop)}):null}#Ot(){const e=this.#bt.getConfigSetting().get().enabled,i=document.createElement("span");i.classList.add("environment-rec"),i.textContent=this.#At()||$t(kt.notEnoughData);const n=document.createElement("span");n.classList.add("environment-rec"),n.textContent=this.#zt()||$t(kt.notEnoughData);const r=function(){let e=null;const t=c.CrUXManager.instance().getSelectedFieldMetricData("round_trip_time");if(t?.percentiles){const i=Number(t.percentiles.p75);e=l.ThrottlingPresets.ThrottlingPresets.getRecommendedNetworkPreset(i)}return{cpuRate:4,networkConditions:e}}();return ft`
      <h3 class="card-title">${$t(kt.environmentSettings)}</h3>
      <div class="device-toolbar-description">${function(e){const t=C.Marked.lexer(e);return bt`<devtools-markdown-view .data=${{tokens:t}}></devtools-markdown-view>`}($t(kt.useDeviceToolbar))}</div>
      ${e?ft`
        <ul class="environment-recs-list">
          <li>${t.i18n.getFormatLocalizedString(Ct,kt.device,{PH1:i})}</li>
          <li>${t.i18n.getFormatLocalizedString(Ct,kt.network,{PH1:n})}</li>
        </ul>
      `:wt}
      <div class="environment-option">
        <devtools-cpu-throttling-selector .recommendedRate=${r.cpuRate}></devtools-cpu-throttling-selector>
      </div>
      <div class="environment-option">
        <devtools-network-throttling-selector .recommendedConditions=${r.networkConditions}></devtools-network-throttling-selector>
      </div>
      <div class="environment-option">
        <setting-checkbox
          class="network-cache-setting"
          .data=${{setting:u.Settings.Settings.instance().moduleSetting("cache-disabled"),textOverride:$t(kt.disableNetworkCache)}}
        ></setting-checkbox>
      </div>
    `}#Ut(e){const t=this.#bt.pageResult?.[`${e}-ALL`]?.record.key[e];if(t)return $t("url"===e?kt.urlOptionWithKey:kt.originOptionWithKey,{PH1:t});const i=$t("url"===e?kt.urlOption:kt.originOption);return $t(kt.needsDataOption,{PH1:i})}#_t(e){"url"===e.itemValue?this.#bt.fieldPageScope="url":this.#bt.fieldPageScope="origin",n.ScheduledRender.scheduleRender(this,this.#i)}#Bt(){if(!this.#bt.getConfigSetting().get().enabled)return s.nothing;const e=this.#Ut("url"),t=this.#Ut("origin"),i="url"===this.#bt.fieldPageScope?e:t,n=$t(kt.showFieldDataForPage,{PH1:i}),r=!this.#bt.pageResult?.["url-ALL"]&&!this.#bt.pageResult?.["origin-ALL"];return ft`
      <devtools-select-menu
        id="page-scope-select"
        class="field-data-option"
        @selectmenuselected=${this.#_t}
        .showDivider=${!0}
        .showArrow=${!0}
        .sideButton=${!1}
        .showSelectedItem=${!0}
        .buttonTitle=${i}
        .disabled=${r}
        title=${n}
      >
        <devtools-menu-item
          .value=${"url"}
          .selected=${"url"===this.#bt.fieldPageScope}
        >
          ${e}
        </devtools-menu-item>
        <devtools-menu-item
          .value=${"origin"}
          .selected=${"origin"===this.#bt.fieldPageScope}
        >
          ${t}
        </devtools-menu-item>
      </devtools-select-menu>
    `}#Vt(e){switch(e){case"ALL":return $t(kt.allDevices);case"DESKTOP":return $t(kt.desktop);case"PHONE":return $t(kt.mobile);case"TABLET":return $t(kt.tablet)}}#qt(e){let t;if("AUTO"===e){const e=this.#bt.getSelectedDeviceScope(),i=this.#Vt(e);t=$t(kt.auto,{PH1:i})}else t=this.#Vt(e);if(!this.#bt.pageResult)return $t(kt.loadingOption,{PH1:t});return this.#bt.getSelectedFieldResponse()?t:$t(kt.needsDataOption,{PH1:t})}#Wt(e){this.#bt.fieldDeviceOption=e.itemValue,n.ScheduledRender.scheduleRender(this,this.#i)}#jt(){if(!this.#bt.getConfigSetting().get().enabled)return s.nothing;const e=!this.#bt.getFieldResponse(this.#bt.fieldPageScope,"ALL"),t=this.#qt(this.#bt.fieldDeviceOption);return ft`
      <devtools-select-menu
        id="device-scope-select"
        class="field-data-option"
        @selectmenuselected=${this.#Wt}
        .showDivider=${!0}
        .showArrow=${!0}
        .sideButton=${!1}
        .showSelectedItem=${!0}
        .buttonTitle=${$t(kt.device,{PH1:t})}
        .disabled=${e}
        title=${$t(kt.showFieldDataForDevice,{PH1:t})}
      >
        ${xt.map((e=>ft`
            <devtools-menu-item
              .value=${e}
              .selected=${this.#bt.fieldDeviceOption===e}
            >
              ${this.#qt(e)}
            </devtools-menu-item>
          `))}
      </devtools-select-menu>
    `}#Kt(){const e=this.#bt.getSelectedFieldResponse();if(!e)return null;const{firstDate:t,lastDate:i}=e.record.collectionPeriod,n=new Date(t.year,t.month-1,t.day),r=new Date(i.year,i.month-1,i.day),s={year:"numeric",month:"short",day:"numeric"};return $t(kt.dateRange,{PH1:n.toLocaleDateString(void 0,s),PH2:r.toLocaleDateString(void 0,s)})}#Yt(){const e=this.#Kt(),i=document.createElement("span");i.classList.add("collection-period-range"),i.textContent=e||$t(kt.notEnoughData);const n=t.i18n.getFormatLocalizedString(Ct,kt.collectionPeriod,{PH1:i}),r=this.#bt.pageResult?.warnings||[];return ft`
      <div class="field-data-message">
        <div>${n}</div>
        ${r.map((e=>ft`
          <div class="field-data-warning">${e}</div>
        `))}
      </div>
    `}#Gt(){if(this.#bt.getConfigSetting().get().enabled)return this.#Yt();const e=r.XLink.XLink.create("https://developer.chrome.com/docs/crux",t.i18n.lockedString("Chrome UX Report")),i=t.i18n.getFormatLocalizedString(Ct,kt.seeHowYourLocalMetricsCompare,{PH1:e});return ft`
      <div class="field-data-message">${i}</div>
    `}#Xt(){return ft`
      <section class="logs-section" aria-label=${$t(kt.eventLogs)}>
        <devtools-live-metrics-logs
          on-render=${n.Directives.nodeRenderedCallback((e=>{this.#wt=e}))}
        >
          ${this.#Jt()}
          ${this.#Zt()}
        </devtools-live-metrics-logs>
      </section>
    `}async#Ft(e){const t=this.#e.getElementById(e.interactionId);if(!t||!this.#wt)return;this.#wt.selectTab("interactions")&&await St.write((()=>{t.scrollIntoView({block:"center"}),t.focus(),r.UIUtils.runCSSAnimationOnce(t,"highlight")}))}async#Qt(e){await x.LiveMetrics.instance().logInteractionScripts(e)&&await u.Console.Console.instance().showPromise()}#Jt(){return this.#mt.size?ft`
      <ol class="log"
        slot="interactions-log-content"
        on-render=${n.Directives.nodeRenderedCallback((e=>{this.#xt=e}))}
      >
        ${this.#mt.values().map((e=>{const i=at("timeline.landing.interaction-event-timing",e.duration,st,(e=>t.TimeUtilities.preciseMillisToString(e)),{dim:!0}),n=this.#pt&&this.#pt.value<e.duration,r=this.#pt?.interactionId===e.interactionId;return ft`
            <li id=${e.interactionId} class="log-item interaction" tabindex="-1">
              <details>
                <summary>
                  <span class="interaction-type">
                    ${e.interactionType}
                    ${r?ft`<span class="interaction-inp-chip" title=${$t(kt.inpInteraction)}>INP</span>`:wt}
                  </span>
                  <span class="interaction-node">${e.nodeRef?.link}</span>
                  ${n?ft`<devtools-icon
                    class="interaction-info"
                    name="info"
                    title=${$t(kt.interactionExcluded)}
                  ></devtools-icon>`:wt}
                  <span class="interaction-duration">${i}</span>
                </summary>
                <div class="phase-table" role="table">
                  <div class="phase-table-row phase-table-header-row" role="row">
                    <div role="columnheader">${$t(kt.phase)}</div>
                    <div role="columnheader">
                      ${e.longAnimationFrameTimings.length?ft`
                        <button
                          class="log-extra-details-button"
                          title=${$t(kt.logToConsole)}
                          @click=${()=>this.#Qt(e)}
                        >${$t(kt.duration)}</button>
                      `:$t(kt.duration)}
                    </div>
                  </div>
                  <div class="phase-table-row" role="row">
                    <div role="cell">${$t(kt.inputDelay)}</div>
                    <div role="cell">${Math.round(e.phases.inputDelay)}</div>
                  </div>
                  <div class="phase-table-row" role="row">
                    <div role="cell">${$t(kt.processingDuration)}</div>
                    <div role="cell">${Math.round(e.phases.processingDuration)}</div>
                  </div>
                  <div class="phase-table-row" role="row">
                    <div role="cell">${$t(kt.presentationDelay)}</div>
                    <div role="cell">${Math.round(e.phases.presentationDelay)}</div>
                  </div>
                </div>
              </details>
            </li>
          `}))}
      </ol>
    `:s.nothing}async#Dt(e){if(!this.#wt)return;const t=[];for(const i of e){const e=this.#e.getElementById(i);e&&t.push(e)}if(!t.length)return;this.#wt.selectTab("layout-shifts")&&await St.write((()=>{t[0].scrollIntoView({block:"start"}),t[0].focus();for(const e of t)r.UIUtils.runCSSAnimationOnce(e,"highlight")}))}#Zt(){return this.#vt.length?ft`
      <ol class="log"
        slot="layout-shifts-log-content"
        on-render=${n.Directives.nodeRenderedCallback((e=>{this.#kt=e}))}
      >
        ${this.#vt.map((e=>{const t=at("timeline.landing.layout-shift-event-score",e.score,rt,(e=>e.toFixed(4)),{dim:!0});return ft`
            <li id=${e.uniqueLayoutShiftId} class="log-item layout-shift" tabindex="-1">
              <div class="layout-shift-score">Layout shift score: ${t}</div>
              <div class="layout-shift-nodes">
                ${e.affectedNodeRefs.map((({link:e})=>ft`
                  <div class="layout-shift-node">${e}</div>
                `))}
              </div>
            </li>
          `}))}
      </ol>
    `:s.nothing}#ei(){return ft`
      <div class="node-view">
        <main>
          <h2 class="section-title">${$t(kt.nodePerformanceTimeline)}</h2>
          <div class="node-description">${$t(kt.nodeClickToRecord)}</div>
          <div class="record-action-card">${this.#Nt(this.#yt)}</div>
        </main>
      </div>
    `}#i=()=>{if(this.#ht)return void s.render(this.#ei(),this.#e,{host:this});const e=this.#bt.getConfigSetting().get().enabled,t=$t(e?kt.localAndFieldMetrics:kt.localMetrics),i=ft`
      <div class="container">
        <div class="live-metrics-view">
          <main class="live-metrics">
            <h2 class="section-title">${t}</h2>
            <div class="metric-cards"
              on-render=${n.Directives.nodeRenderedCallback((e=>{this.#St=e}))}
            >
              <div id="lcp">
                ${this.#Et()}
              </div>
              <div id="cls">
                ${this.#Mt()}
              </div>
              <div id="inp">
                ${this.#Ht()}
              </div>
            </div>
            <x-link
              href=${"https://web.dev/articles/lab-and-field-data-differences#lab_data_versus_field_data"}
              class="local-field-link"
              title=${$t(kt.localFieldLearnMoreTooltip)}
            >${$t(kt.localFieldLearnMoreLink)}</x-link>
            ${this.#Xt()}
          </main>
          <aside class="next-steps" aria-labelledby="next-steps-section-title">
            <h2 id="next-steps-section-title" class="section-title">${$t(kt.nextSteps)}</h2>
            <div id="field-setup" class="settings-card">
              <h3 class="card-title">${$t(kt.fieldData)}</h3>
              ${this.#Gt()}
              ${this.#Bt()}
              ${this.#jt()}
              <div class="field-setup-buttons">
                <devtools-field-settings-dialog></devtools-field-settings-dialog>
              </div>
            </div>
            <div id="recording-settings" class="settings-card">
              ${this.#Ot()}
            </div>
            <div id="record" class="record-action-card">
              ${this.#Nt(this.#yt)}
            </div>
            <div id="record-page-load" class="record-action-card">
              ${this.#Nt(this.#ft)}
            </div>
          </aside>
        </div>
      </div>
    `;s.render(i,this.#e,{host:this})}}class Tt extends r.Widget.WidgetElement{#ti;constructor(){super(),this.style.display="contents"}selectTab(e){return!!this.#ti&&this.#ti.selectTab(e)}#ii(){const e=x.LiveMetrics.instance();switch(this.#ti?.selectedTabId){case"interactions":e.clearInteractions();break;case"layout-shifts":e.clearLayoutShifts()}}createWidget(){const e=new r.Widget.Widget(!0,void 0,this);e.contentElement.style.display="contents",this.#ti=new r.TabbedPane.TabbedPane;const t=document.createElement("slot");t.name="interactions-log-content";const i=r.Widget.Widget.getOrCreateWidget(t);this.#ti.appendTab("interactions",$t(kt.interactions),i,void 0,void 0,void 0,void 0,void 0,"timeline.landing.interactions-log");const n=document.createElement("slot");n.name="layout-shifts-log-content";const s=r.Widget.Widget.getOrCreateWidget(n);this.#ti.appendTab("layout-shifts",$t(kt.layoutShifts),s,void 0,void 0,void 0,void 0,void 0,"timeline.landing.layout-shifts-log");const o=new r.Toolbar.ToolbarButton($t(kt.clearCurrentLog),"clear",void 0,"timeline.landing.clear-log");return o.addEventListener("Click",this.#ii,this),this.#ti.rightToolbar().appendToolbarItem(o),this.#ti.show(e.contentElement),e}}customElements.define("devtools-live-metrics-view",Rt),customElements.define("devtools-live-metrics-logs",Tt);var Pt=Object.freeze({__proto__:null,LiveMetricsView:Rt});const Lt=new CSSStyleSheet;Lt.replaceSync(".network-request-details-title{font-size:13px;padding:8px;display:flex;align-items:center}.network-request-details-title > div{box-sizing:border-box;width:12px;height:12px;border:1px solid var(--sys-color-divider);display:inline-block;margin-right:4px}.network-request-details-cols{display:flex}:host{border-bottom:1px solid var(--sys-color-divider);display:block;padding-bottom:5px}.network-request-details-col{flex:1}.network-request-details-row{padding:0 10px;min-height:20px}.title{color:var(--sys-color-token-subtle);overflow:hidden;padding-right:10px;display:inline-block;vertical-align:top}.value{display:inline-block;user-select:text;text-overflow:ellipsis;overflow:hidden;padding:0 3px}.devtools-link,\n.timeline-link{color:var(--text-link);text-decoration:underline;outline-offset:2px;padding:0;text-align:left;.elements-disclosure &{color:var(--text-link)}devtools-icon{vertical-align:baseline;color:var(--sys-color-primary)}:focus .selected & devtools-icon{color:var(--sys-color-tonal-container)}&:focus-visible{outline-width:unset}&.invalid-link{color:var(--text-disabled);text-decoration:none}&:not(.devtools-link-prevent-click, .invalid-link){cursor:pointer}@media (forced-colors: active){&:not(.devtools-link-prevent-click){forced-color-adjust:none;color:linktext}&:focus-visible{background:Highlight;color:HighlightText}}}.text-button.link-style,\n.text-button.link-style:hover,\n.text-button.link-style:active{background:none;border:none;font:inherit}.timing-rows{width:fit-content}\n/*# sourceURL=networkRequestDetails.css */\n");const It=new CSSStyleSheet;It.replaceSync(".bold{font-weight:bold}.url{margin-left:15px;margin-right:5px}.url--host{color:var(--sys-color-token-subtle)}.priority-row{margin-left:15px}.network-category-chip{box-sizing:border-box;width:10px;height:10px;border:1px solid var(--sys-color-divider);display:inline-block;margin-right:4px}devtools-icon.priority{height:13px;width:13px;color:var(--sys-color-on-surface-subtle)}.render-blocking{margin-left:15px;color:var(--sys-color-error)}.divider{border-top:1px solid var(--sys-color-divider);margin:5px 0}.timings-row{align-self:start;display:flex;align-items:center;width:100%}.indicator{display:inline-block;width:10px;height:4px;margin-right:5px;border:1px solid var(--sys-color-on-surface-subtle)}.whisker-left{align-self:center;display:inline-flex;width:10px;height:6px;margin-right:5px;border-left:1px solid var(--sys-color-on-surface-subtle)}.whisker-right{align-self:center;display:inline-flex;width:10px;height:6px;margin-right:5px;border-right:1px solid var(--sys-color-on-surface-subtle)}.horizontal{background-color:var(--sys-color-on-surface-subtle);height:1px;width:10px;align-self:center}.time{margin-left:auto;display:inline-block;padding-left:10px}.timings-row--duration{.indicator{border-color:transparent}.time{font-weight:var(--ref-typeface-weight-medium)}}\n/*# sourceURL=networkRequestTooltip.css */\n");const{html:Et}=s,Mt={priority:"Priority",duration:"Duration",queuingAndConnecting:"Queuing and connecting",requestSentAndWaiting:"Request sent and waiting",contentDownloading:"Content downloading",waitingOnMainThread:"Waiting on main thread",renderBlocking:"Render blocking"},Dt=t.i18n.registerUIStrings("panels/timeline/components/NetworkRequestTooltip.ts",Mt),Ht=t.i18n.getLocalizedString.bind(void 0,Dt);class Ft extends HTMLElement{#e=this.attachShadow({mode:"open"});#ni;connectedCallback(){this.#e.adoptedStyleSheets=[It],this.#i()}set networkRequest(e){this.#ni!==e&&(this.#ni=e,this.#i())}static renderPriorityValue(e){return e.args.data.priority===e.args.data.initialPriority?Et`${$.NetworkPriorities.uiLabelForNetworkPriority(e.args.data.priority)}`:Et`${$.NetworkPriorities.uiLabelForNetworkPriority(e.args.data.initialPriority)}
        <devtools-icon name=${"arrow-forward"} class="priority"></devtools-icon>
        ${$.NetworkPriorities.uiLabelForNetworkPriority(e.args.data.priority)}`}static renderTimings(e){const i=e.args.data.syntheticData,n=i.sendStartTime-e.ts,r=i.downloadStart-i.sendStartTime,o=i.finishTime-i.downloadStart,a=e.ts+e.dur-i.finishTime,l=it(e),d={backgroundColor:`color-mix(in srgb, ${l}, hsla(0, 100%, 100%, 0.8))`},c={backgroundColor:l},h=Et`<span class="whisker-left"> <span class="horizontal"></span> </span>`,g=Et`<span class="whisker-right"> <span class="horizontal"></span> </span>`;return Et`
      <div class="timings-row timings-row--duration">
        <span class="indicator"></span>
        ${Ht(Mt.duration)}
         <span class="time">${t.TimeUtilities.formatMicroSecondsTime(e.dur)}</span>
      </div>
      <div class="timings-row">
        ${h}
        ${Ht(Mt.queuingAndConnecting)}
        <span class="time">${t.TimeUtilities.formatMicroSecondsTime(n)}</span>
      </div>
      <div class="timings-row">
        <span class="indicator" style=${s.Directives.styleMap(d)}></span>
        ${Ht(Mt.requestSentAndWaiting)}
        <span class="time">${t.TimeUtilities.formatMicroSecondsTime(r)}</span>
      </div>
      <div class="timings-row">
        <span class="indicator" style=${s.Directives.styleMap(c)}></span>
        ${Ht(Mt.contentDownloading)}
        <span class="time">${t.TimeUtilities.formatMicroSecondsTime(o)}</span>
      </div>
      <div class="timings-row">
        ${g}
        ${Ht(Mt.waitingOnMainThread)}
        <span class="time">${t.TimeUtilities.formatMicroSecondsTime(a)}</span>
      </div>
    `}#i(){if(!this.#ni)return;const e={backgroundColor:`${it(this.#ni)}`},t=new URL(this.#ni.args.data.url),n=Et`
      <div class="performance-card">
        <div class="url">${d.StringUtilities.trimMiddle(t.href.replace(t.origin,""),60)}</div>
        <div class="url url--host">${t.origin.replace("https://","")}</div>

        <div class="divider"></div>
        <div class="network-category"><span class="network-category-chip" style=${s.Directives.styleMap(e)}></span>${et(this.#ni)}</div>
        <div class="priority-row">${Ht(Mt.priority)}: ${Ft.renderPriorityValue(this.#ni)}</div>
        ${i.Helpers.Network.isSyntheticNetworkRequestEventRenderBlocking(this.#ni)?Et`<div class="render-blocking"> ${Ht(Mt.renderBlocking)} </div>`:s.nothing}
        <div class="divider"></div>

        ${Ft.renderTimings(this.#ni)}
      </div>
    `;s.render(n,this.#e,{host:this})}}customElements.define("devtools-performance-network-request-tooltip",Ft);var Nt=Object.freeze({__proto__:null,NetworkRequestTooltip:Ft});const{html:zt}=s,At={requestMethod:"Request method",priority:"Priority",encodedData:"Encoded data",decodedBody:"Decoded body",yes:"Yes",no:"No",networkRequest:"Network request",fromCache:"From cache",mimeType:"MIME type",FromMemoryCache:" (from memory cache)",FromCache:" (from cache)",FromPush:" (from push)",FromServiceWorker:" (from `service worker`)",initiatedBy:"Initiated by",blocking:"Blocking",inBodyParserBlocking:"In-body parser blocking",renderBlocking:"Render blocking"},Ot=t.i18n.registerUIStrings("panels/timeline/components/NetworkRequestDetails.ts",At),Ut=t.i18n.getLocalizedString.bind(void 0,Ot);class _t extends HTMLElement{#e=this.attachShadow({mode:"open"});#ni=null;#ri=null;#si=new WeakMap;#oi;#ue=null;constructor(e){super(),this.#oi=e}connectedCallback(){this.#e.adoptedStyleSheets=[Lt,It]}async setData(e,t,i){this.#ni===t&&e===this.#ue||(this.#ue=e,this.#ni=t,this.#ri=i,await this.#i())}#me(){if(!this.#ni)return null;const e={backgroundColor:`${it(this.#ni)}`};return zt`
      <div class="network-request-details-title">
        <div style=${s.Directives.styleMap(e)}></div>
        ${Ut(At.networkRequest)}
      </div>
    `}#ai(e,t){return t?zt`
      <div class="network-request-details-row"><div class="title">${e}</div><div class="value">${t}</div></div>
    `:null}#li(){if(!this.#ni)return null;const e={tabStop:!0,showColumnNumber:!1,inlineFrameIndex:0,maxLength:100},t=v.Linkifier.Linkifier.linkifyURL(this.#ni.args.data.url,e),i=b.NetworkRequest.getNetworkRequest(this.#ni);if(i){t.addEventListener("contextmenu",(e=>{if(!this.#ni)return;const t=new r.ContextMenu.ContextMenu(e);t.appendApplicableItems(new b.NetworkRequest.TimelineNetworkRequest(i)),t.show()}));const e=zt`
        ${t}
        <devtools-request-link-icon .data=${{request:i}}>
        </devtools-request-link-icon>
      `;return zt`<div class="network-request-details-row">${e}</div>`}return zt`<div class="network-request-details-row">${t}</div>`}#di(){if(!this.#ni)return null;const e=this.#ni.args.data.syntheticData.isMemoryCached||this.#ni.args.data.syntheticData.isDiskCached;return this.#ai(Ut(At.fromCache),Ut(e?At.yes:At.no))}#ci(){if(!this.#ni)return null;let e="";return this.#ni.args.data.syntheticData.isMemoryCached?e+=Ut(At.FromMemoryCache):this.#ni.args.data.syntheticData.isDiskCached?e+=Ut(At.FromCache):this.#ni.args.data.timing?.pushStart&&(e+=Ut(At.FromPush)),this.#ni.args.data.fromServiceWorker&&(e+=Ut(At.FromServiceWorker)),!this.#ni.args.data.encodedDataLength&&e||(e=`${t.ByteUtilities.bytesToString(this.#ni.args.data.encodedDataLength)}${e}`),this.#ai(Ut(At.encodedData),e)}#hi(){if(!this.#ni)return null;if(null!==i.Helpers.Trace.stackTraceInEvent(this.#ni)){const e=i.Helpers.Trace.getZeroIndexedStackTraceForEvent(this.#ni)?.at(0)??null;if(e){const t=this.#oi.maybeLinkifyConsoleCallFrame(this.#ri,e,{tabStop:!0,inlineFrameIndex:0,showColumnNumber:!0});if(t)return this.#ai(Ut(At.initiatedBy),t)}}const e=this.#ue?.NetworkRequests.eventToInitiator.get(this.#ni);if(e){const t=this.#oi.maybeLinkifyScriptLocation(this.#ri,null,e.args.data.url,void 0);if(t)return this.#ai(Ut(At.initiatedBy),t)}return null}#gi(){if(!this.#ni||!m.Network.isSyntheticNetworkRequestEventRenderBlocking(this.#ni))return null;let e;switch(this.#ni.args.data.renderBlocking){case"blocking":e=At.renderBlocking;break;case"in_body_parser_blocking":e=At.inBodyParserBlocking;break;default:return null}return this.#ai(Ut(At.blocking),e)}async#ui(){if(!this.#ni)return null;if(!this.#si.get(this.#ni)&&this.#ni.args.data.url&&this.#ri){const e=await v.ImagePreview.ImagePreview.build(this.#ri,this.#ni.args.data.url,!1,{imageAltText:v.ImagePreview.ImagePreview.defaultAltTextForImageURL(this.#ni.args.data.url),precomputedFeatures:void 0,align:"start",hideFileData:!0});this.#si.set(this.#ni,e)}const e=this.#si.get(this.#ni);return e?zt`<div class="network-request-details-row">${e}</div>`:null}async#i(){if(!this.#ni)return;const e=this.#ni.args.data,i=zt`
      ${this.#me()}
      ${this.#li()}
      ${await this.#ui()}
      <div class="network-request-details-cols">
        <div class="network-request-details-col">
          ${this.#ai(Ut(At.requestMethod),e.requestMethod)}
          ${this.#ai(Ut(At.priority),Ft.renderPriorityValue(this.#ni))}
          ${this.#ai(Ut(At.mimeType),e.mimeType)}
          ${this.#ci()}
          ${this.#ai(Ut(At.decodedBody),t.ByteUtilities.bytesToString(this.#ni.args.data.decodedBodyLength))}
          ${this.#gi()}
          ${this.#di()}
        </div>
        <div class="network-request-details-col">
          <div class="timing-rows">
            ${Ft.renderTimings(this.#ni)}
          </div>
        </div>
      </div>
      ${this.#hi()}
    `;s.render(i,this.#e,{host:this})}}customElements.define("devtools-performance-network-request-details",_t);var Bt=Object.freeze({__proto__:null,NetworkRequestDetails:_t});const Vt=new CSSStyleSheet;Vt.replaceSync(":host{display:block;padding:var(--sys-size-4)}ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:var(--sys-size-5);justify-content:flex-start;align-items:center}.insight-chip button{background:none;user-select:none;font:var(--sys-typescale-body4-regular);border:var(--sys-size-1) solid var(--sys-color-primary);border-radius:var(--sys-shape-corner-extra-small);display:flex;margin-top:var(--sys-size-4);padding:var(--sys-size-2) var(--sys-size-4) var(--sys-size-2) var(--sys-size-4);width:max-content;white-space:pre;.keyword{color:var(--sys-color-primary);padding-right:var(--sys-size-3)}}.insight-chip button:hover{background-color:var(--sys-color-state-hover-on-subtle);cursor:pointer;transition:opacity 0.2s ease}.insight-message-box{background:var(--sys-color-surface-yellow);border-radius:var(--sys-shape-corner-extra-small);font:var(--sys-typescale-body4-regular);button{color:var(--sys-color-on-surface-yellow);border:none;text-align:left;background:none;padding:var(--sys-size-4) var(--sys-size-5);width:100%;max-width:500px;.insight-label{color:var(--sys-color-orange-bright);padding-right:var(--sys-size-3);font-weight:var(--ref-typeface-weight-medium);margin-bottom:var(--sys-size-2)}&:hover{background-color:var(--sys-color-state-hover-on-subtle);cursor:pointer;transition:opacity 0.2s ease}}}\n/*# sourceURL=relatedInsightChips.css */\n");const{html:qt}=s,Wt={insightKeyword:"Insight",insightWithName:"Insight: {PH1}"},jt=t.i18n.registerUIStrings("panels/timeline/components/RelatedInsightChips.ts",Wt),Kt=t.i18n.getLocalizedString.bind(void 0,jt);class Yt extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#_e={eventToRelatedInsightsMap:new Map,activeEvent:null};connectedCallback(){this.#e.adoptedStyleSheets=[Vt],this.#i()}set activeEvent(e){e!==this.#_e.activeEvent&&(this.#_e.activeEvent=e,n.ScheduledRender.scheduleRender(this,this.#t))}set eventToRelatedInsightsMap(e){this.#_e.eventToRelatedInsightsMap=e,n.ScheduledRender.scheduleRender(this,this.#t)}#pi(e){return t=>{t.preventDefault(),e.activateInsight()}}#i(){const{activeEvent:e,eventToRelatedInsightsMap:t}=this.#_e,i=e?t.get(e)??[]:[];if(!e||0===t.size||0===i.length)return void s.render(qt``,this.#e,{host:this});const n=i.flatMap((e=>e.messages.map((t=>qt`
        <li class="insight-message-box">
          <button type="button" @click=${this.#pi(e)}>
            <div class="insight-label">${Kt(Wt.insightWithName,{PH1:e.insightLabel})}</div>
            <div class="insight-message">${t}</div>
          </button>
        </li>
      `)))),r=i.flatMap((e=>[qt`
        <li class="insight-chip">
          <button type="button" @click=${this.#pi(e)}>
            <span class="keyword">${Kt(Wt.insightKeyword)}</span>
            <span class="insight-label">${e.insightLabel}</span>
          </button>
        </li>
      `]));s.render(qt`
      <ul>${n}</ul>
      <ul>${r}</ul>
    `,this.#e,{host:this})}}customElements.define("devtools-related-insight-chips",Yt);var Gt=Object.freeze({__proto__:null,RelatedInsightChips:Yt});const Xt=new CSSStyleSheet;Xt.replaceSync(":host{display:block;height:100%}.annotations{display:flex;flex-direction:column;height:100%;padding:0}.visibility-setting{margin-top:auto}.annotation-container{display:flex;justify-content:space-between;align-items:center;padding:0 10px;.delete-button{visibility:hidden;border:none;background:none}&:hover,\n  &:focus-within{background-color:var(--sys-color-neutral-container);button.delete-button{visibility:visible}}}.annotation{display:flex;flex-direction:column;align-items:flex-start;word-break:break-word;padding:var(--sys-size-8) 0;gap:6px}.annotation-identifier{padding:4px 8px;border-radius:10px;font-weight:bold;&.time-range{background-color:var(--app-color-performance-sidebar-time-range);color:var(--app-color-performance-sidebar-label-text-light)}}.entries-link{display:flex;flex-wrap:wrap;row-gap:2px;align-items:center}.label{font-size:larger}.annotation-tutorial-container{padding:10px}.tutorial-card{display:block;position:relative;margin:10px 0;padding:10px;border-radius:var(--sys-shape-corner-extra-small);overflow:hidden;border:1px solid var(--sys-color-divider);background-color:var(--sys-color-base)}.tutorial-image{display:flex;justify-content:center;& > img{max-width:100%;height:auto}}.tutorial-title,\n.tutorial-description{margin:5px 0}\n/*# sourceURL=sidebarAnnotationsTab.css */\n");const{html:Jt}=s,Zt=new URL("../../../Images/performance-panel-diagram.svg",import.meta.url).toString(),Qt=new URL("../../../Images/performance-panel-entry-label.svg",import.meta.url).toString(),ei=new URL("../../../Images/performance-panel-time-range.svg",import.meta.url).toString(),ti=new URL("../../../Images/performance-panel-delete-annotation.svg",import.meta.url).toString(),ii={annotationGetStarted:"Annotate a trace for yourself and others",entryLabelTutorialTitle:"Label an item",entryLabelTutorialDescription:"Double-click on an item and type to create an item label.",entryLinkTutorialTitle:"Connect two items",entryLinkTutorialDescription:"Double-click on an item, click on the adjacent rightward arrow, then select the destination item.",timeRangeTutorialTitle:"Define a time range",timeRangeTutorialDescription:"Shift-drag in the flamechart then type to create a time range annotation.",deleteAnnotationTutorialTitle:"Delete an annotation",deleteAnnotationTutorialDescription:"Hover over the list in the sidebar with Annotations tab selected to access the delete function.",deleteButton:"Delete annotation: {PH1}",entryLabelDescriptionLabel:'A "{PH1}" event annotated with the text "{PH2}"',timeRangeDescriptionLabel:"A time range starting at {PH1} and ending at {PH2}",entryLinkDescriptionLabel:'A link between a "{PH1}" event and a "{PH2}" event'},ni=t.i18n.registerUIStrings("panels/timeline/components/SidebarAnnotationsTab.ts",ii),ri=t.i18n.getLocalizedString.bind(void 0,ni);class si extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#mi=[];#vi=new Map;#bi;constructor(){super(),this.#bi=u.Settings.Settings.instance().moduleSetting("annotations-hidden")}set annotations(e){this.#mi=this.#yi(e),n.ScheduledRender.scheduleRender(this,this.#t)}set annotationEntryToColorMap(e){this.#vi=e}#yi(e){const t=new Set,i=e.filter((e=>{if(this.#fi(e))return!0;if("ENTRIES_LINK"===e.type||"ENTRY_LABEL"===e.type){const i="ENTRIES_LINK"===e.type?e.entryFrom:e.entry;if(t.has(i))return!1;t.add(i)}return!0}));return i.sort(((e,t)=>this.#wi(e)-this.#wi(t))),i}#wi(e){switch(e.type){case"ENTRY_LABEL":return e.entry.ts;case"ENTRIES_LINK":return e.entryFrom.ts;case"TIME_RANGE":return e.bounds.min;default:d.assertNever(e,`Invalid annotation type ${e}`)}}#fi(e){switch(e.type){case"ENTRY_LABEL":return e.label.length>0;case"ENTRIES_LINK":return Boolean(e.entryTo);case"TIME_RANGE":return e.bounds.range>0}}connectedCallback(){this.#e.adoptedStyleSheets=[Xt],n.ScheduledRender.scheduleRender(this,this.#t)}#Si(e){if(e.entryTo){const t=b.EntryName.nameForEntry(e.entryTo),i=this.#vi.get(e.entryTo)??"",n={backgroundColor:i,color:oi(i)};return Jt`
        <span class="annotation-identifier" style=${s.Directives.styleMap(n)}>
          ${t}
        </span>`}return s.nothing}#xi(t){switch(t.type){case"ENTRY_LABEL":{const e=b.EntryName.nameForEntry(t.entry),i=this.#vi.get(t.entry)??"",n={backgroundColor:i,color:oi(i)};return Jt`
              <span class="annotation-identifier" style=${s.Directives.styleMap(n)}>
                ${e}
              </span>
        `}case"TIME_RANGE":{const n=e.TraceBounds.BoundsManager.instance().state()?.milli.entireTraceBounds.min??0,r=Math.round(i.Helpers.Timing.microSecondsToMilliseconds(t.bounds.min)-n),s=Math.round(i.Helpers.Timing.microSecondsToMilliseconds(t.bounds.max)-n);return Jt`
              <span class="annotation-identifier time-range">
                ${r} - ${s} ms
              </span>
        `}case"ENTRIES_LINK":{const e=b.EntryName.nameForEntry(t.entryFrom),i=this.#vi.get(t.entryFrom)??"",n={backgroundColor:i,color:oi(i)};return Jt`
          <div class="entries-link">
            <span class="annotation-identifier" style=${s.Directives.styleMap(n)}>
              ${e}
            </span>
            <devtools-icon class="inline-icon" .data=${{iconName:"arrow-forward",color:"var(--icon-default)",width:"18px",height:"18px"}}>
            </devtools-icon>
            ${this.#Si(t)}
          </div>
      `}default:d.assertNever(t,"Unsupported annotation type")}}#ki(e){this.dispatchEvent(new $i(e))}#Ci(){return Jt`
      <div class="annotation-tutorial-container">
      ${ri(ii.annotationGetStarted)}
        <div class="tutorial-card">
          <div class="tutorial-image"> <img src=${Qt}></img></div>
          <div class="tutorial-title">${ri(ii.entryLabelTutorialTitle)}</div>
          <div class="tutorial-description">${ri(ii.entryLabelTutorialDescription)}</div>
        </div>
        <div class="tutorial-card">
          <div class="tutorial-image"> <img src=${Zt}></img></div>
          <div class="tutorial-title">${ri(ii.entryLinkTutorialTitle)}</div>
          <div class="tutorial-description">${ri(ii.entryLinkTutorialDescription)}</div>
        </div>
        <div class="tutorial-card">
          <div class="tutorial-image"> <img src=${ei}></img></div>
          <div class="tutorial-title">${ri(ii.timeRangeTutorialTitle)}</div>
          <div class="tutorial-description">${ri(ii.timeRangeTutorialDescription)}</div>
        </div>
        <div class="tutorial-card">
          <div class="tutorial-image"> <img src=${ti}></img></div>
          <div class="tutorial-title">${ri(ii.deleteAnnotationTutorialTitle)}</div>
          <div class="tutorial-description">${ri(ii.deleteAnnotationTutorialDescription)}</div>
        </div>
      </div>
    `}#$i(e){switch(e.type){case"ENTRY_LABEL":return"entry-label";case"TIME_RANGE":return"time-range";case"ENTRIES_LINK":return"entries-link";default:d.assertNever(e,"unknown annotation type")}}#i(){s.render(Jt`
        <span class="annotations">
          ${0===this.#mi.length?this.#Ci():Jt`
              ${this.#mi.map((e=>{const i=function(e){switch(e.type){case"ENTRY_LABEL":{const t=b.EntryName.nameForEntry(e.entry);return ri(ii.entryLabelDescriptionLabel,{PH1:t,PH2:e.label})}case"TIME_RANGE":{const i=t.TimeUtilities.formatMicroSecondsAsMillisFixedExpanded(e.bounds.min),n=t.TimeUtilities.formatMicroSecondsAsMillisFixedExpanded(e.bounds.max);return ri(ii.timeRangeDescriptionLabel,{PH1:i,PH2:n})}case"ENTRIES_LINK":{if(!e.entryTo)return"";const t=b.EntryName.nameForEntry(e.entryFrom),i=b.EntryName.nameForEntry(e.entryTo);return ri(ii.entryLinkDescriptionLabel,{PH1:t,PH2:i})}default:d.assertNever(e,"Unsupported annotation")}}(e);return Jt`
                  <div class="annotation-container"
                    @click=${()=>this.#ki(e)}
                    aria-label=${i}
                    tabindex="0"
                    jslog=${o.item(`timeline.annotation-sidebar.annotation-${this.#$i(e)}`).track({click:!0})}
                  >
                    <div class="annotation">
                      ${this.#xi(e)}
                      <span class="label">
                        ${"ENTRY_LABEL"===e.type||"TIME_RANGE"===e.type?e.label:""}
                      </span>
                    </div>
                    <button class="delete-button" aria-label=${ri(ii.deleteButton,{PH1:i})} @click=${t=>{t.stopPropagation(),this.dispatchEvent(new Ci(e))}} jslog=${o.action("timeline.annotation-sidebar.delete").track({click:!0})}>
                      <devtools-icon
                        class="bin-icon"
                        .data=${{iconName:"bin",color:"var(--icon-default)",width:"20px",height:"20px"}}
                      ></devtools-icon>
                    </button>
                  </div>`}))}
              <setting-checkbox class="visibility-setting" .data=${{setting:this.#bi,textOverride:"Hide annotations"}}>
              </setting-checkbox>`}
      </span>`,this.#e,{host:this})}}function oi(e){const t=u.Color.parse(e)?.asLegacyColor(),i="--app-color-performance-sidebar-label-text-dark",n=u.Color.parse(w.ThemeSupport.instance().getComputedValue(i))?.asLegacyColor();if(!t||!n)return`var(${i})`;return u.ColorUtils.contrastRatio(t.rgba(),n.rgba())>=4.5?`var(${i})`:"var(--app-color-performance-sidebar-label-text-light)"}customElements.define("devtools-performance-sidebar-annotations",si);var ai=Object.freeze({__proto__:null,SidebarAnnotationsTab:si});const li=new CSSStyleSheet;li.replaceSync(":host{display:block;padding:5px 10px}.metrics-row{display:flex;flex-direction:row}.metric{flex:1;user-select:text;cursor:pointer;background:none;border:none;padding:0;display:block;text-align:left}.metric-value{font-size:var(--sys-size-11)}.metric-value-bad{color:var(--app-color-performance-bad)}.metric-value-ok{color:var(--app-color-performance-ok)}.metric-value-good{color:var(--app-color-performance-good)}.metric-score-unclassified{color:var(--sys-color-token-subtle)}.metric-label{font:var(--sys-typescale-body4-medium)}.number-with-unit{white-space:nowrap;.unit{font-size:14px;padding:0 1px}}.passed-insights-section{margin-top:var(--sys-size-5);summary{font-weight:var(--ref-typeface-weight-medium)}}\n/*# sourceURL=sidebarSingleInsightSet.css */\n");const{html:di}=s,ci={metricScore:"{PH1}: {PH2} {PH3} score",passedInsights:"Passed insights ({PH1})"},hi=t.i18n.registerUIStrings("panels/timeline/components/SidebarSingleInsightSet.ts",ci),gi=t.i18n.getLocalizedString.bind(void 0,hi),ui=new Set(["FontDisplay","DOMSize"]),pi={CLSCulprits:y.CLSCulprits.CLSCulprits,DOMSize:y.DOMSize.DOMSize,DocumentLatency:y.DocumentLatency.DocumentLatency,FontDisplay:y.FontDisplay.FontDisplay,ImageDelivery:y.ImageDelivery.ImageDelivery,InteractionToNextPaint:y.InteractionToNextPaint.InteractionToNextPaint,LCPDiscovery:y.LCPDiscovery.LCPDiscovery,LCPPhases:y.LCPPhases.LCPPhases,RenderBlocking:y.RenderBlocking.RenderBlocking,SlowCSSSelector:y.SlowCSSSelector.SlowCSSSelector,ThirdParties:y.ThirdParties.ThirdParties,Viewport:y.Viewport.Viewport};class mi extends HTMLElement{#e=this.attachShadow({mode:"open"});#B=this.#i.bind(this);#_e={insights:null,insightSetKey:null,activeCategory:i.Insights.Types.InsightCategory.ALL,activeInsight:null};set data(e){this.#_e=e,n.ScheduledRender.scheduleRender(this,this.#B)}connectedCallback(){this.#e.adoptedStyleSheets=[li],this.#i()}#Ri(e){return this.#_e.activeCategory===i.Insights.Types.InsightCategory.ALL||e===this.#_e.activeCategory}#Ti(e){this.dispatchEvent(new y.EventRef.EventReferenceClick(e))}#Pi(e,t,i,n){const r="string"==typeof t?t:t.text,o="string"==typeof t?t:t.element,a=gi(ci.metricScore,{PH1:e,PH2:r,PH3:i});return this.#Ri(e)?di`
      <button class="metric"
        @click=${n?this.#Ti.bind(this,n):null}
        title=${a}
        aria-label=${a}
      >
        <div class="metric-value metric-value-${i}">${o}</div>
        <div class="metric-label">${e}</div>
      </button>
    `:s.nothing}#Li(e){const t=i.Insights.Common.getLCP(this.#_e.insights,e),n=i.Insights.Common.getCLS(this.#_e.insights,e),r=i.Insights.Common.getINP(this.#_e.insights,e);return di`
    <div class="metrics-row">
    ${t?this.#Pi("LCP",lt.formatMicroSecondsAsSeconds(t.value),i.Handlers.ModelHandlers.PageLoadMetrics.scoreClassificationForLargestContentfulPaint(t.value),t.event??null):s.nothing}
    ${r?this.#Pi("INP",lt.formatMicroSecondsAsMillisFixed(r.value),i.Handlers.ModelHandlers.UserInteractions.scoreClassificationForInteractionToNextPaint(r.value),r.event):s.nothing}
    ${this.#Pi("CLS",n.value?n.value.toFixed(2):"0",i.Handlers.ModelHandlers.LayoutShifts.scoreClassificationForLayoutShift(n.value),n.worstShiftEvent)}
    </div>
    `}#Ii(e,t){const n=T.Runtime.experiments.isEnabled("timeline-experimental-insights"),r=e?.get(t);if(!r)return s.nothing;const o=r.model,a=[],l=[];for(const[e,s]of Object.entries(o)){const o=pi[e];if(!o)continue;if(!n&&ui.has(e))continue;if(!s||(d={activeCategory:this.#_e.activeCategory,insightCategory:s.category}).activeCategory!==i.Insights.Types.InsightCategory.ALL&&d.activeCategory!==d.insightCategory)continue;const c=di`<div>
        <${o.litTagName}
          .selected=${this.#_e.activeInsight?.model===s}
          .model=${s}
          .bounds=${r.bounds}
          .insightSetKey=${t}
        </${o.litTagName}>
      </div>`;s.shouldShow?a.push(c):l.push(c)}var d;return di`
      ${a}
      ${l.length?di`
        <details class="passed-insights-section">
          <summary>${gi(ci.passedInsights,{PH1:l.length})}</summary>
          ${l}
        </details>
      `:s.nothing}
    `}#i(){const{insights:e,insightSetKey:t}=this.#_e;e&&t?s.render(di`
      <div class="navigation">
        ${this.#Li(t)}
        ${this.#Ii(e,t)}
        </div>
      `,this.#e,{host:this}):s.render(di``,this.#e,{host:this})}}customElements.define("devtools-performance-sidebar-single-navigation",mi);var vi=Object.freeze({__proto__:null,SidebarSingleInsightSet:mi});const bi=new CSSStyleSheet;bi.replaceSync(":host{display:flex;flex-flow:column nowrap;flex-grow:1}.insight-sets-wrapper{display:flex;flex-flow:column nowrap;flex-grow:1;details{flex-grow:0}details[open]{flex-grow:1;border-bottom:1px solid var(--sys-color-divider)}summary{background-color:var(--sys-color-surface2);border-bottom:1px solid var(--sys-color-divider);overflow:hidden;padding:2px 5px;text-overflow:ellipsis;white-space:nowrap;font:var(--sys-typescale-body4-medium);display:flex;align-items:center;&:focus{background-color:var(--sys-color-tonal-container)}&::marker{color:var(--sys-color-on-surface-subtle);font-size:11px;line-height:1}details:first-child &{border-top:1px solid var(--sys-color-divider)}}}.zoom-button{margin-left:auto}.zoom-icon{visibility:hidden;&.active devtools-button{visibility:visible}}.dropdown-icon{&.active devtools-button{transform:rotate(90deg)}}.feedback-wrapper{position:relative;padding:var(--sys-size-6);.tooltip{visibility:hidden;transition-property:visibility;position:absolute;bottom:35px;width:90%;max-width:300px;left:var(--sys-size-6);z-index:1;box-sizing:border-box;padding:var(--sys-size-5) var(--sys-size-6);border-radius:var(--sys-shape-corner-small);background-color:var(--sys-color-cdt-base-container);box-shadow:var(--drop-shadow-depth-3)}devtools-button:hover + .tooltip{visibility:visible}}\n/*# sourceURL=sidebarInsightsTab.css */\n");const{html:yi}=s,fi={feedbackButton:"Feedback",feedbackTooltip:"Insights is an experimental feature. Your feedback will help us improve it."},wi=t.i18n.registerUIStrings("panels/timeline/components/SidebarInsightsTab.ts",fi),Si=t.i18n.getLocalizedString.bind(void 0,wi);class xi extends HTMLElement{#t=this.#i.bind(this);#e=this.attachShadow({mode:"open"});#ue=null;#Ei=null;#Mi=null;#Di=i.Insights.Types.InsightCategory.ALL;#Hi=null;connectedCallback(){this.#e.adoptedStyleSheets=[bi]}set parsedTrace(e){e!==this.#ue&&(this.#ue=e,this.#Hi=null,n.ScheduledRender.scheduleRender(this,this.#t))}set insights(e){if(e===this.#Ei)return;if(this.#Ei=e,this.#Hi=null,!this.#Ei||!this.#ue)return;const t=i.Helpers.Timing.millisecondsToMicroseconds(i.Types.Timing.MilliSeconds(5e3)),r=[...this.#Ei.values()];this.#Hi=r.find((e=>e.navigation||e.bounds.range>t))?.id??r[0]?.id??null,n.ScheduledRender.scheduleRender(this,this.#t)}set activeInsight(e){e!==this.#Mi&&(this.#Mi=e,this.#Mi&&(this.#Hi=this.#Mi.insightSetKey),n.ScheduledRender.scheduleRender(this,this.#t))}#Fi(e){this.#Hi=this.#Hi===e?null:e,this.#Hi!==this.#Mi?.insightSetKey&&this.dispatchEvent(new y.SidebarInsight.InsightDeactivated),n.ScheduledRender.scheduleRender(this,this.#t)}#Ni(e){const t=this.#Ei?.get(e);t&&this.dispatchEvent(new y.SidebarInsight.InsightSetHovered(t.bounds))}#zi(){this.dispatchEvent(new y.SidebarInsight.InsightSetHovered)}#Ai(){f.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab("https://crbug.com/371170842")}#Oi(e,t){e.stopPropagation();const i=this.#Ei?.get(t);i&&this.dispatchEvent(new y.SidebarInsight.InsightSetZoom(i.bounds))}#Ui(e){const t=s.Directives.classMap({"zoom-icon":!0,active:e});return yi`
    <div class=${t}>
        <devtools-button .data=${{variant:"icon",iconName:"center-focus-weak",size:"SMALL"}}
      ></devtools-button></div>`}#_i(e){const t=s.Directives.classMap({"dropdown-icon":!0,active:e});return yi`
      <div class=${t}>
        <devtools-button .data=${{variant:"icon",iconName:"chevron-right",size:"SMALL"}}
      ></devtools-button></div>
    `}#i(){if(!this.#ue||!this.#Ei)return void s.render(s.nothing,this.#e,{host:this});const e=this.#Ei.size>1,t=b.Helpers.createUrlLabels([...this.#Ei.values()].map((({url:e})=>e))),i=yi`
      <div class="insight-sets-wrapper">
        ${[...this.#Ei.values()].map((({id:i,url:n},r)=>{const s={insights:this.#Ei,insightSetKey:i,activeCategory:this.#Di,activeInsight:this.#Mi},o=yi`
            <devtools-performance-sidebar-single-navigation
              .data=${s}>
            </devtools-performance-sidebar-single-navigation>
          `;return e?yi`<details
              ?open=${i===this.#Hi}
            >
              <summary
                @click=${()=>this.#Fi(i)}
                @mouseenter=${()=>this.#Ni(i)}
                @mouseleave=${()=>this.#zi()}
                title=${n.href}>
                ${this.#_i(i===this.#Hi)}
                <span>${t[r]}</span>
                <span class='zoom-button' @click=${e=>this.#Oi(e,i)}>${this.#Ui(i===this.#Hi)}</span>
              </summary>
              ${o}
            </details>`:o}))}
      </div>

      <div class="feedback-wrapper">
        <devtools-button .variant=${"outlined"} .iconName=${"experiment"} @click=${this.#Ai}>
          ${Si(fi.feedbackButton)}
        </devtools-button>

        <p class="tooltip">${Si(fi.feedbackTooltip)}</p>
      </div>
    `,n=s.Directives.repeat([i],(()=>this.#ue),(e=>e));s.render(n,this.#e,{host:this})}}customElements.define("devtools-performance-sidebar-insights",xi);var ki=Object.freeze({__proto__:null,SidebarInsightsTab:xi});class Ci extends Event{removedAnnotation;static eventName="removeannotation";constructor(e){super(Ci.eventName,{bubbles:!0,composed:!0}),this.removedAnnotation=e}}class $i extends Event{annotation;static eventName="revealannotation";constructor(e){super($i.eventName,{bubbles:!0,composed:!0}),this.annotation=e}}class Ri extends r.Widget.VBox{#ti=new r.TabbedPane.TabbedPane;#Bi=new Ti;#Vi=new Pi;#qi=0;#Wi=u.Settings.Settings.instance().createSetting("timeline-user-has-opened-sidebar-once",!1);userHasOpenedSidebarOnce(){return this.#Wi.get()}constructor(){super(),this.setMinimumSize(170,0),this.#ti.appendTab("insights","Insights",this.#Bi,void 0,void 0,!1,!1,0,"timeline.insights-tab"),this.#ti.appendTab("annotations","Annotations",this.#Vi,void 0,void 0,!1,!1,1,"timeline.annotations-tab"),this.#ti.selectTab("insights")}wasShown(){this.#Wi.set(!0),this.#ti.show(this.element),this.#ji(),"insights"===this.#ti.selectedTabId&&this.#ti.tabIsDisabled("insights")&&this.#ti.hasTab("annotations")&&this.#ti.selectTab("annotations")}setAnnotations(e,t){this.#Vi.setAnnotations(e,t),this.#qi=e.length,this.#ji()}#ji(){let e=null;if(this.#qi>0){e=new R.Adorner.Adorner;const t=document.createElement("span");t.textContent=this.#qi.toString(),e.data={name:"countWrapper",content:t},e.classList.add("annotations-count")}this.#ti.setSuffixElement("annotations",e)}setParsedTrace(e){this.#Bi.setParsedTrace(e)}setInsights(e){this.#Bi.setInsights(e),this.#ti.setTabEnabled("insights",null!==e)}setActiveInsight(e){this.#Bi.setActiveInsight(e),e&&this.#ti.selectTab("insights")}}class Ti extends r.Widget.VBox{#Ki=new xi;constructor(){super(),this.element.classList.add("sidebar-insights"),this.element.appendChild(this.#Ki)}setParsedTrace(e){this.#Ki.parsedTrace=e}setInsights(e){this.#Ki.insights=e}setActiveInsight(e){this.#Ki.activeInsight=e}}class Pi extends r.Widget.VBox{#Ki=new si;constructor(){super(),this.element.classList.add("sidebar-annotations"),this.element.appendChild(this.#Ki)}setAnnotations(e,t){this.#Ki.annotationEntryToColorMap=t,this.#Ki.annotations=e}}var Li=Object.freeze({__proto__:null,DEFAULT_SIDEBAR_TAB:"insights",DEFAULT_SIDEBAR_WIDTH_PX:240,RemoveAnnotation:Ci,RevealAnnotation:$i,SidebarWidget:Ri});const Ii=new CSSStyleSheet;Ii.replaceSync(".timeline-summary{font-size:var(--sys-typescale-body4-size);display:flex;flex-direction:column;padding:var(--sys-size-4) var(--sys-size-8) var(--sys-size-4);gap:var(--sys-size-5);float:left}.summary-range{font-weight:var(--ref-typeface-weight-medium)}.category-summary{gap:var(--sys-size-3);display:flex;flex-direction:column}.category-row{display:inline-block}.category-swatch{display:inline-block;width:var(--sys-size-6);height:var(--sys-size-6);margin-right:var(--sys-size-4);top:var(--sys-size-1);position:relative;border:var(--sys-size-1) solid var(--sys-color-neutral-outline)}.category-name{display:inline-block}.category-value{text-align:right;position:relative;float:right;z-index:0;width:var(--sys-size-19)}.background-bar-container{position:absolute;left:var(--sys-size-3);right:0;top:0;bottom:0;z-index:-1}.background-bar{width:100%;float:right;height:var(--sys-size-8);background-color:var(--sys-color-surface-yellow);border-bottom:var(--sys-size-1) solid var(--sys-color-yellow-outline)}\n/*# sourceURL=timelineSummary.css */\n");const{render:Ei,html:Mi}=s,Di={total:"Total",rangeSS:"Range:  {PH1} – {PH2}"},Hi=t.i18n.registerUIStrings("panels/timeline/components/TimelineSummary.ts",Di),Fi=t.i18n.getLocalizedString.bind(void 0,Hi);class Ni extends HTMLElement{#e=this.attachShadow({mode:"open"});#Yi=0;#Gi=0;#Xi=0;#Ji=[];connectedCallback(){this.#e.adoptedStyleSheets=[Ii]}set data(e){this.#Xi=e.total,this.#Ji=e.categories,this.#Yi=e.rangeStart,this.#Gi=e.rangeEnd,this.#i()}#i(){const e=Mi`
        <div class="timeline-summary">
            <div class="summary-range">${Fi(Di.rangeSS,{PH1:t.TimeUtilities.millisToString(this.#Yi),PH2:t.TimeUtilities.millisToString(this.#Gi)})}</div>
            <div class="category-summary">
                ${this.#Ji.map((e=>Mi`
                        <div class="category-row">
                        <div class="category-swatch" style="background-color: ${e.color};"></div>
                        <div class="category-name">${e.title}</div>
                        <div class="category-value">
                            ${t.TimeUtilities.preciseMillisToString(e.value)}
                            <div class="background-bar-container">
                                <div class="background-bar" style='width: ${(100*e.value/this.#Xi).toFixed(1)}%;'></div>
                            </div>
                        </div>
                        </div>`))}
                <div class="category-row">
                    <div class="category-swatch"></div>
                    <div class="category-name">${Fi(Di.total)}</div>
                    <div class="category-value">
                        ${t.TimeUtilities.preciseMillisToString(this.#Xi)}
                        <div class="background-bar-container">
                            <div class="background-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;Ei(e,this.#e,{host:this})}}customElements.define("devtools-performance-timeline-summary",Ni);var zi=Object.freeze({__proto__:null,TimelineSummary:Ni});export{L as Breadcrumbs,A as BreadcrumbsUI,W as CPUThrottlingSelector,G as DetailsView,me as FieldSettingsDialog,ke as IgnoreListSetting,Ie as InteractionBreakdown,ze as LayoutShiftDetails,Pt as LiveMetricsView,vt as MetricCard,Bt as NetworkRequestDetails,Nt as NetworkRequestTooltip,We as NetworkThrottlingSelector,se as OriginMap,Gt as RelatedInsightChips,Li as Sidebar,ai as SidebarAnnotationsTab,ki as SidebarInsightsTab,vi as SidebarSingleInsightSet,zi as TimelineSummary,dt as Utils};

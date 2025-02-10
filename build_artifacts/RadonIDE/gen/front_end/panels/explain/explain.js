import"../../ui/components/spinners/spinners.js";import*as e from"../../core/common/common.js";import*as t from"../../core/host/host.js";import*as s from"../../core/i18n/i18n.js";import*as n from"../../third_party/marked/marked.js";import"../../ui/components/buttons/buttons.js";import*as i from"../../ui/components/input/input.js";import*as o from"../../ui/components/markdown_view/markdown_view.js";import*as r from"../../ui/legacy/legacy.js";import*as a from"../../ui/lit-html/lit-html.js";import*as l from"../../ui/visual_logging/visual_logging.js";import*as c from"../../core/sdk/sdk.js";import*as d from"../../models/bindings/bindings.js";import*as g from"../../models/formatter/formatter.js";import*as h from"../../models/logs/logs.js";import*as u from"../../ui/legacy/components/utils/utils.js";import*as m from"../console/console.js";const p=1e3;var v;!function(e){e.MESSAGE="message",e.STACKTRACE="stacktrace",e.NETWORK_REQUEST="networkRequest",e.RELATED_CODE="relatedCode"}(v||(v={}));class y{#e;constructor(e){this.#e=e}async getNetworkRequest(){const e=this.#e.consoleMessage().getAffectedResources()?.requestId;if(!e)return;return h.NetworkLog.NetworkLog.instance().requestsForId(e)[0]}async getMessageSourceCode(){const e=this.#e.consoleMessage().stackTrace?.callFrames[0],t=this.#e.consoleMessage().runtimeModel(),s=t?.debuggerModel();if(!s||!t||!e)return{text:"",columnNumber:0,lineNumber:0};const n=new c.DebuggerModel.Location(s,e.scriptId,e.lineNumber,e.columnNumber),i=await d.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(n),o=await(i?.uiSourceCode.requestContent()),r=!o?.isEncoded&&o?.content?o.content:"",a=r.indexOf("\n");if(r.length>p&&(a<0||a>p)){const{formattedContent:e,formattedMapping:t}=await g.ScriptFormatter.formatScriptContent(i?.uiSourceCode.mimeType()??"text/javascript",r),[s,n]=t.originalToFormatted(i?.lineNumber??0,i?.columnNumber??0);return{text:e,columnNumber:n,lineNumber:s}}return{text:r,columnNumber:i?.columnNumber??0,lineNumber:i?.lineNumber??0}}async buildPrompt(e=Object.values(v)){const[t,s]=await Promise.all([e.includes(v.RELATED_CODE)?this.getMessageSourceCode():void 0,e.includes(v.NETWORK_REQUEST)?this.getNetworkRequest():void 0]),n=t?.text?k(t):"",i=s?x(s):"",o=e.includes(v.STACKTRACE)?S(this.#e):"",r=C(this.#e),a=this.formatPrompt({message:[r,o].join("\n").trim(),relatedCode:n,relatedRequest:i}),l=[{type:v.MESSAGE,value:r}];return o&&l.push({type:v.STACKTRACE,value:o}),n&&l.push({type:v.RELATED_CODE,value:n}),i&&l.push({type:v.NETWORK_REQUEST,value:i}),{prompt:a,sources:l,isPageReloadRecommended:e.includes(v.NETWORK_REQUEST)&&Boolean(this.#e.consoleMessage().getAffectedResources()?.requestId)&&!i}}formatPrompt({message:e,relatedCode:t,relatedRequest:s}){let n=`Why does browser show an error\n${e}`;return t&&(n+=`\nFor the following code in my web app\n\n\`\`\`\n${t}\n\`\`\``),s&&(n+=`\nFor the following network request in my web app\n\n\`\`\`\n${s}\n\`\`\``),n}getSearchQuery(){let e=this.#e.toMessageTextString();return e&&(e=e.split("\n")[0]),e}}function f(e){const t=e.name.toLowerCase().trim();return!t.startsWith("x-")&&("cookie"!==t&&"set-cookie"!==t&&"authorization"!==t)}function b(e){const t=/^\s*/.exec(e);if(!t||!t.length)return null;const s=t[0];return s===e?null:s}function k({text:e,columnNumber:t,lineNumber:s},n=1e3){const i=e.split("\n");if(i[s].length>=n/2){const e=Math.max(t-n/2,0),o=Math.min(t+n/2,i[s].length);return i[s].substring(e,o)}let o=0,r=s,a=b(i[s]);const l=new Map;for(;void 0!==i[r]&&o+i[r].length<=n/2;){const e=b(i[r]);null===e||null===a||e!==a&&e.startsWith(a)||(/^\s*[\}\)\]]/.exec(i[r])||l.set(e,r),a=e),o+=i[r].length+1,r--}r=s+1;let c=s,d=s;for(a=b(i[s]);void 0!==i[r]&&o+i[r].length<=n;){o+=i[r].length;const e=b(i[r]);if(null!==e&&null!==a&&(e===a||!e.startsWith(a))){const t=i[r+1],s=t?b(t):null;s&&s!==e&&s.startsWith(e)||l.has(e)&&(c=l.get(e)??0,d=r),a=e}r++}return i.slice(c,d+1).join("\n")}function w(e,t,s){let n="";for(const e of t){if(n.length+e.length>s)break;n+=e}return n=n.trim(),n&&e?e+"\n"+n:n}function x(e){const t=(e,t)=>w(e,t.filter(f).map((e=>e.name+": "+e.value+"\n")),1e3);return`Request: ${e.url()}\n\n${t("Request headers:",e.requestHeaders())}\n\n${t("Response headers:",e.responseHeaders)}\n\nResponse status: ${e.statusCode} ${e.statusText}`}function C(e){return e.toMessageTextString().substr(0,1e3)}function S(e){const t=e.contentElement().querySelector(".stack-preview-container");if(!t)return"";const s=t.shadowRoot?.querySelector(".stack-preview-container");return w("",s.childTextNodes().filter((e=>!e.parentElement?.closest(".show-all-link,.show-less-link,.hidden-row"))).map(u.Linkifier.Linkifier.untruncatedNodeText),1e3)}const I=new CSSStyleSheet;I.replaceSync('*{padding:0;margin:0;box-sizing:border-box}:host{font-family:var(--default-font-family);font-size:inherit;display:block}.wrapper{background-color:var(--sys-color-cdt-base-container);border-radius:16px;container-type:inline-size;display:grid;animation:expand var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized) forwards}:host-context(.closing) .wrapper{animation:collapse var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized) forwards}@keyframes expand{from{grid-template-rows:0fr}to{grid-template-rows:1fr}}@keyframes collapse{from{grid-template-rows:1fr}to{grid-template-rows:0fr;padding-top:0;padding-bottom:0}}.animation-wrapper{overflow:hidden;padding:var(--sys-size-6) var(--sys-size-8)}.wrapper.top{border-radius:16px 16px 4px 4px}.wrapper.bottom{margin-top:5px;border-radius:4px 4px 16px 16px}header{display:flex;flex-direction:row;gap:6px;color:var(--sys-color-on-surface);font-size:13px;font-style:normal;font-weight:500;margin-bottom:var(--sys-size-6);align-items:center}header:focus-visible{outline:none}header > .filler{display:flex;flex-direction:row;gap:var(--sys-size-5);align-items:center;flex:1}.reminder-container{border-radius:var(--sys-size-5);background-color:var(--sys-color-surface4);padding:var(--sys-size-8);font-weight:var(--ref-typeface-weight-medium);h3{font:inherit}}.reminder-items{display:grid;grid-template-columns:var(--sys-size-8) auto;gap:var(--sys-size-5) var(--sys-size-6);margin-top:var(--sys-size-6);line-height:var(--sys-size-8);font-weight:var(--ref-typeface-weight-regular)}main{--override-markdown-view-message-color:var(--sys-color-on-surface);color:var(--sys-color-on-surface);font-size:12px;font-style:normal;font-weight:400;line-height:20px;p{margin-block-start:1em;margin-block-end:1em}ul{list-style-type:none;list-style-position:inside;padding-inline-start:0.2em;li{display:list-item;list-style-type:disc;list-style-position:outside;margin-inline-start:1em}li::marker{font-size:11px;line-height:1}}label{display:inline-flex;flex-direction:row;gap:0.5em;input,\n    span{vertical-align:middle}input[type="checkbox"]{margin-top:0.3em}}}.opt-in-teaser{display:flex;gap:var(--sys-size-5)}devtools-markdown-view{margin-bottom:12px}footer{display:flex;flex-direction:row;align-items:center;color:var(--sys-color-on-surface);font-style:normal;font-weight:400;line-height:normal;margin-top:14px;gap:32px}@container (max-width: 600px){footer{gap:8px}}footer > .filler{flex:1}footer .rating{display:flex;flex-direction:row;gap:8px}textarea{height:84px;padding:10px;border-radius:8px;border:1px solid var(--sys-color-neutral-outline);width:100%;font-family:var(--default-font-family);font-size:inherit}.buttons{display:flex;gap:5px}@media (max-width: 500px){.buttons{flex-wrap:wrap}}main .buttons{margin-top:12px}.disclaimer{display:flex;gap:2px;color:var(--sys-color-on-surface-subtle);font-size:11px;align-items:flex-start;flex-direction:column}.link{color:var(--sys-color-primary);text-decoration-line:underline;devtools-icon{color:var(--sys-color-primary);width:14px;height:14px}}button.link{border:none;background:none;cursor:pointer;font:inherit}.loader{background:linear-gradient(130deg,transparent 0%,var(--sys-color-gradient-tertiary) 20%,var(--sys-color-gradient-primary) 40%,transparent 60%,var(--sys-color-gradient-tertiary) 80%,var(--sys-color-gradient-primary) 100%);background-position:0% 0%;background-size:250% 250%;animation:gradient 5s infinite linear}@keyframes gradient{0%{background-position:0 0}100%{background-position:100% 100%}}summary{font-size:12px;font-style:normal;font-weight:400;line-height:20px}details{overflow:hidden;margin-top:10px}::details-content{height:0;transition:height var(--sys-motion-duration-short4) var(--sys-motion-easing-emphasized),content-visibility var(--sys-motion-duration-short4) var(--sys-motion-easing-emphasized) allow-discrete}[open]::details-content{height:auto}h2{display:block;font-size:var(--sys-size-7);margin:0;font-weight:var(--ref-typeface-weight-medium);line-height:var(--sys-size-9)}h2:focus-visible{outline:none}.info{width:20px;height:20px}.badge{background:linear-gradient(135deg,var(--sys-color-gradient-primary),var(--sys-color-gradient-tertiary));border-radius:var(--sys-size-3);height:var(--sys-size-9);devtools-icon{margin:var(--sys-size-2)}}.header-icon-container{background:linear-gradient(135deg,var(--sys-color-gradient-primary),var(--sys-color-gradient-tertiary));border-radius:var(--sys-size-4);height:36px;width:36px;display:flex;align-items:center;justify-content:center}.close-button{align-self:flex-start}\n/*# sourceURL=./components/consoleInsight.css */\n');const R=new CSSStyleSheet;R.replaceSync('*{padding:0;margin:0;box-sizing:border-box}:host{display:block}ul{color:var(--sys-color-primary);font-size:12px;font-style:normal;font-weight:400;line-height:18px;margin-top:8px}li{list-style-type:none}ul .link{color:var(--sys-color-primary);display:inline-flex!important;align-items:center;gap:4px;text-decoration-line:underline}devtools-icon{height:16px;width:16px}devtools-icon[name="open-externally"]{color:var(--icon-link)}.source-disclaimer{color:var(--sys-color-on-surface-subtle)}\n/*# sourceURL=./components/consoleInsightSourcesList.css */\n');const M={consoleMessage:"Console message",stackTrace:"Stacktrace",networkRequest:"Network request",relatedCode:"Related code",generating:"Generating explanation…",insight:"Explanation",closeInsight:"Close explanation",inputData:"Data used to understand this message",goodResponse:"Good response",badResponse:"Bad response",report:"Report legal issue",error:"DevTools has encountered an error",errorBody:"Something went wrong. Try again.",opensInNewTab:"(opens in a new tab)",learnMore:"Learn more",notLoggedIn:"This feature is only available when you sign into Chrome with your Google account.",signIn:"Sign in",offlineHeader:"DevTools can’t reach the internet",offline:"Check your internet connection and try again.",signInToUse:"Sign in to use this feature",search:"Use search instead",reloadRecommendation:"Reload the page to capture related network request data for this message in order to create a better insight.",turnOnInSettings:"Turn on {PH1} to receive AI assistance for understanding and addressing console warnings and errors.",settingsLink:"`Console insights` in Settings",references:"Sources and related content"},A=s.i18n.registerUIStrings("panels/explain/components/ConsoleInsight.ts",M),T=s.i18n.getLocalizedString.bind(void 0,A),{render:$,html:E,Directives:N}=a;class L extends Event{static eventName="close";constructor(){super(L.eventName,{composed:!0,bubbles:!0})}}function j(e){switch(e){case v.MESSAGE:return T(M.consoleMessage);case v.STACKTRACE:return T(M.stackTrace);case v.NETWORK_REQUEST:return T(M.networkRequest);case v.RELATED_CODE:return T(M.relatedCode)}}const z="https://goo.gle/devtools-console-messages-ai";class U extends HTMLElement{static async create(e,s){const n=await t.AidaClient.AidaClient.checkAccessPreconditions();return new U(e,s,n)}#t=this.attachShadow({mode:"open"});#s;#n;#i=new o.MarkdownView.MarkdownInsightRenderer;#o;#r;#a;#l;#c;constructor(e,t,s){super(),this.#s=e,this.#n=t,this.#l=s,this.#a=this.#d(),this.#o=this.#g(),this.#c=this.#h.bind(this),this.#u(),this.addEventListener("keydown",(e=>{e.stopPropagation()})),this.addEventListener("keyup",(e=>{e.stopPropagation()})),this.addEventListener("keypress",(e=>{e.stopPropagation()})),this.addEventListener("click",(e=>{e.stopPropagation()})),this.focus()}#g(){switch(this.#l){case"available":{const t=e.Settings.Settings.instance().createSetting("console-insights-skip-reminder",!1,"Session").get();return{type:"loading",consentOnboardingCompleted:this.#m().get()||t}}case"no-account-email":return{type:"not-logged-in"};case"sync-is-paused":return{type:"sync-is-paused"};case"no-internet":return{type:"offline"}}}#d(){try{return e.Settings.moduleSetting("console-insights-enabled")}catch{return}}#m(){return e.Settings.Settings.instance().createLocalSetting("console-insights-onboarding-finished",!1)}connectedCallback(){this.#t.adoptedStyleSheets=[I,i.checkboxStyles],this.classList.add("opening"),this.#a?.addChangeListener(this.#p,this);const s=!0===e.Settings.Settings.instance().getHostConfig().aidaAvailability?.blockedByAge;"loading"===this.#o.type&&!0===this.#a?.getIfNotDisabled()&&!s&&this.#o.consentOnboardingCompleted&&t.userMetrics.actionTaken(t.UserMetrics.Action.GeneratingInsightWithoutDisclaimer),t.AidaClient.HostConfigTracker.instance().addEventListener("aidaAvailabilityChanged",this.#c),this.#h(),"insight"!==this.#o.type&&"error"!==this.#o.type&&(this.#o=this.#g()),this.#v()}disconnectedCallback(){this.#a?.removeChangeListener(this.#p,this),t.AidaClient.HostConfigTracker.instance().removeEventListener("aidaAvailabilityChanged",this.#c)}async#h(){const e=await t.AidaClient.AidaClient.checkAccessPreconditions();e!==this.#l&&(this.#l=e,this.#o=this.#g(),this.#v())}#p(){!0===this.#a?.getIfNotDisabled()&&this.#m().set(!0),"setting-is-not-true"===this.#o.type&&!0===this.#a?.getIfNotDisabled()&&(this.#y({type:"loading",consentOnboardingCompleted:!0}),t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsOptInTeaserConfirmedInSettings),this.#v()),"consent-reminder"===this.#o.type&&!1===this.#a?.getIfNotDisabled()&&(this.#y({type:"loading",consentOnboardingCompleted:!1}),t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsReminderTeaserAbortedInSettings),this.#v())}#y(e){const t=this.#o;this.#o=e,this.#u(),e.type!==t.type&&this.#f()}async#v(){if("loading"!==this.#o.type)return;const s=!0===e.Settings.Settings.instance().getHostConfig().aidaAvailability?.blockedByAge;if(!0!==this.#a?.getIfNotDisabled()||s)return this.#y({type:"setting-is-not-true"}),void t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsOptInTeaserShown);if(!this.#o.consentOnboardingCompleted){const{sources:e,isPageReloadRecommended:s}=await this.#s.buildPrompt();return this.#y({type:"consent-reminder",sources:e,isPageReloadRecommended:s}),void t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsReminderTeaserShown)}await this.#b()}#k(){"consent-reminder"===this.#o.type&&t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsReminderTeaserCanceled),this.shadowRoot?.addEventListener("animationend",(()=>{this.dispatchEvent(new L)}),{once:!0}),this.classList.add("closing")}#w(s){if("insight"!==this.#o.type)throw new Error("Unexpected state");if(void 0===this.#o.metadata?.rpcGlobalId)throw new Error("RPC Id not in metadata");if(void 0!==this.#r)return;this.#r="true"===s.target.dataset.rating,this.#u(),this.#r?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightRatedPositive):t.userMetrics.actionTaken(t.UserMetrics.Action.InsightRatedNegative);const n=e.Settings.Settings.instance().getHostConfig().aidaAvailability?.disallowLogging??!0;this.#n.registerClientEvent({corresponding_aida_rpc_global_id:this.#o.metadata.rpcGlobalId,disable_user_content_logging:n,do_conversation_client_event:{user_feedback:{sentiment:this.#r?"POSITIVE":"NEGATIVE"}}})}#x(){t.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab("https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504")}#C(){const e=this.#s.getSearchQuery();t.InspectorFrontendHost.InspectorFrontendHostInstance.openSearchResultsInNewTab(e)}async#S(){this.#m().set(!0),this.#y({type:"loading",consentOnboardingCompleted:!0}),t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsReminderTeaserConfirmed),await this.#b()}async#b(){try{for await(const{sources:e,isPageReloadRecommended:t,explanation:s,metadata:n,completed:i}of this.#I()){const o=this.#R(s),r=!1!==o;this.#y({type:"insight",tokens:r?o:[],validMarkdown:r,explanation:s,sources:e,metadata:n,isPageReloadRecommended:t,completed:i})}t.userMetrics.actionTaken(t.UserMetrics.Action.InsightGenerated)}catch(e){t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErrored),this.#y({type:"error",error:e.message})}}#R(e){try{const t=n.Marked.lexer(e);for(const e of t)this.#i.renderToken(e);return t}catch{return t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredMarkdown),!1}}async*#I(){const{prompt:e,sources:s,isPageReloadRecommended:n}=await this.#s.buildPrompt();try{for await(const i of this.#n.fetch(t.AidaClient.AidaClient.buildConsoleInsightsRequest(e)))yield{sources:s,isPageReloadRecommended:n,...i}}catch(e){throw"Server responded: permission denied"===e.message?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredPermissionDenied):e.message.startsWith("Cannot send request:")?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredCannotSend):e.message.startsWith("Request failed:")?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredRequestFailed):e.message.startsWith("Cannot parse chunk:")?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredCannotParseChunk):"Unknown chunk result"===e.message?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredUnknownChunk):e.message.startsWith("Server responded:")?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredApi):t.userMetrics.actionTaken(t.UserMetrics.Action.InsightErroredOther),e}}#M(){t.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab("https://accounts.google.com")}#f(){this.addEventListener("animationend",(()=>{this.#t.querySelector("header h2")?.focus()}),{once:!0})}#A(){return E`<devtools-button
      @click=${this.#C}
      class="search-button"
      .data=${{variant:"outlined",jslogContext:"search"}}
    >
      ${T(M.search)}
    </devtools-button>`}#T(){return E`<x-link href=${z} class="link" jslog=${l.link("learn-more").track({click:!0})}>
      ${T(M.learnMore)}
    </x-link>`}#$(){return"insight"===this.#o.type&&this.#o.metadata.factualityMetadata?.facts.length?E`
      <details jslog=${l.expand("references").track({click:!0})}>
        <summary>${T(M.references)}</summary>
        <ul>
          ${this.#o.metadata?.factualityMetadata?.facts.map((e=>e.sourceUri?E`
              <li>
                <x-link
                  href=${e.sourceUri}
                  class="link"
                  jslog=${l.link("references.console-insights").track({click:!0})}
                >
                  ${e.sourceUri}
                </x-link>
              </li>
            `:a.nothing))}
        </ul>
      </details>
    `:a.nothing}#E(){const e=`${l.section(this.#o.type).track({resize:!0})}`;switch(this.#o.type){case"loading":return E`<main jslog=${e}>
            <div role="presentation" aria-label="Loading" class="loader" style="clip-path: url('#clipPath');">
              <svg width="100%" height="64">
                <clipPath id="clipPath">
                  <rect x="0" y="0" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="24" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="48" width="100%" height="16" rx="8"></rect>
                </clipPath>
              </svg>
            </div>
          </main>`;case"insight":return E`
        <main jslog=${e}>
          ${this.#o.validMarkdown?E`<devtools-markdown-view
              .data=${{tokens:this.#o.tokens,renderer:this.#i,animationEnabled:!0}}>
            </devtools-markdown-view>`:this.#o.explanation}
          ${this.#$()}
          <details jslog=${l.expand("sources").track({click:!0})}>
            <summary>${T(M.inputData)}</summary>
            <devtools-console-insight-sources-list .sources=${this.#o.sources} .isPageReloadRecommended=${this.#o.isPageReloadRecommended}>
            </devtools-console-insight-sources-list>
          </details>
          <div class="buttons">
            ${this.#A()}
          </div>
        </main>`;case"error":return E`
        <main jslog=${e}>
          <div class="error">${T(M.errorBody)}</div>
        </main>`;case"consent-reminder":return E`
          <main class="reminder-container" jslog=${e}>
            <h3>Things to consider</h3>
            <div class="reminder-items">
              <div>
                <devtools-icon .data=${{iconName:"google",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
                </devtools-icon>
              </div>
              <div>The console message, associated stack trace, related source code, and the associated network headers are sent to Google to generate explanations. This data may be seen by human reviewers to improve this feature. Avoid sharing sensitive or personal information.</div>
              <div>
                <devtools-icon .data=${{iconName:"policy",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
                </devtools-icon>
              </div>
              <div>Use of this feature is subject to the
                <x-link
                  href=${"https://policies.google.com/terms"}
                  class="link"
                  jslog=${l.link("terms-of-service.console-insights").track({click:!0})}
                >Google Terms of Service</x-link>
                and
                <x-link
                  href=${"https://policies.google.com/privacy"}
                  class="link"
                  jslog=${l.link("privacy-policy.console-insights").track({click:!0})}
                >Google Privacy Policy</x-link>
              </div>
              <div>
                <devtools-icon .data=${{iconName:"warning",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
                </devtools-icon>
              </div>
              <div>
                <x-link
                  href=${"https://support.google.com/legal/answer/13505487"}
                  class="link"
                  jslog=${l.link("code-snippets-explainer.console-insights").track({click:!0})}
                >Use generated code snippets with caution</x-link>
              </div>
            </div>
          </main>
        `;case"setting-is-not-true":{const n=document.createElement("button");return n.textContent=T(M.settingsLink),n.classList.add("link"),r.ARIAUtils.markAsLink(n),n.addEventListener("click",(()=>{t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsOptInTeaserSettingsLinkClicked),r.ViewManager.ViewManager.instance().showView("chrome-ai")})),n.setAttribute("jslog",`${l.action("open-ai-settings").track({click:!0})}`),E`<main class="opt-in-teaser" jslog=${e}>
          <div class="badge">
            <devtools-icon .data=${{iconName:"lightbulb-spark",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
            </devtools-icon>
          </div>
          <div>
            ${s.i18n.getFormatLocalizedString(A,M.turnOnInSettings,{PH1:n})}
            ${this.#T()}
          </div>
        </main>`}case"not-logged-in":case"sync-is-paused":return E`
          <main jslog=${e}>
            <div class="error">${T(M.notLoggedIn)}</div>
          </main>`;case"offline":return E`
          <main jslog=${e}>
            <div class="error">${T(M.offline)}</div>
          </main>`}}#N(){return E`<span>
      AI tools may generate inaccurate info that doesn't represent Google's views. Data sent to Google may be seen by human reviewers to improve this feature.
      <button class="link" role="link" @click=${()=>r.ViewManager.ViewManager.instance().showView("chrome-ai")}
        jslog=${l.action("open-ai-settings").track({click:!0})}
      >Open settings</button>
      or
      <x-link href=${z} class="link" jslog=${l.link("learn-more").track({click:!0})}>learn more</x-link>
    </span>`}#L(){const s=!(e.Settings.Settings.instance().getHostConfig().aidaAvailability?.disallowLogging??1),n=this.#N();switch(this.#o.type){case"loading":case"setting-is-not-true":return a.nothing;case"error":case"offline":return E`<footer jslog=${l.section("footer")}>
          <div class="disclaimer">
            ${n}
          </div>
        </footer>`;case"not-logged-in":case"sync-is-paused":return E`<footer jslog=${l.section("footer")}>
        <div class="filler"></div>
        <div>
          <devtools-button
            @click=${this.#M}
            .data=${{variant:"primary",jslogContext:"update-settings"}}
          >
            ${M.signIn}
          </devtools-button>
        </div>
      </footer>`;case"consent-reminder":return E`<footer jslog=${l.section("footer")}>
          <div class="filler"></div>
          <div class="buttons">
            <devtools-button
              @click=${()=>{t.userMetrics.actionTaken(t.UserMetrics.Action.InsightsReminderTeaserSettingsLinkClicked),r.ViewManager.ViewManager.instance().showView("chrome-ai")}}
              .data=${{variant:"tonal",jslogContext:"settings",title:"Settings"}}
            >
              Settings
            </devtools-button>
            <devtools-button
              class='continue-button'
              @click=${this.#S}
              .data=${{variant:"primary",jslogContext:"continue",title:"continue"}}
              >
              Continue
            </devtools-button>
          </div>
        </footer>`;case"insight":return E`<footer jslog=${l.section("footer")}>
        <div class="disclaimer">
          ${n}
        </div>
        <div class="filler"></div>
        <div class="rating">
          ${s?E`
            <devtools-button
              data-rating=${"true"}
              .data=${{variant:"icon_toggle",size:"SMALL",iconName:"thumb-up",toggledIconName:"thumb-up",toggleOnClick:!1,toggleType:"primary-toggle",disabled:void 0!==this.#r,toggled:!0===this.#r,title:T(M.goodResponse),jslogContext:"thumbs-up"}}
              @click=${this.#w}
            ></devtools-button>
            <devtools-button
              data-rating=${"false"}
              .data=${{variant:"icon_toggle",size:"SMALL",iconName:"thumb-down",toggledIconName:"thumb-down",toggleOnClick:!1,toggleType:"primary-toggle",disabled:void 0!==this.#r,toggled:!1===this.#r,title:T(M.badResponse),jslogContext:"thumbs-down"}}
              @click=${this.#w}
            ></devtools-button>
          `:a.nothing}
          <devtools-button
            .data=${{variant:"icon",size:"SMALL",iconName:"report",title:T(M.report),jslogContext:"report"}}
            @click=${this.#x}
          ></devtools-button>
        </div>

      </footer>`}}#j(){switch(this.#o.type){case"not-logged-in":case"sync-is-paused":return T(M.signInToUse);case"offline":return T(M.offlineHeader);case"loading":return T(M.generating);case"insight":return T(M.insight);case"error":return T(M.error);case"consent-reminder":return"Understand console messages with AI";case"setting-is-not-true":return""}}#z(){return"insight"!==this.#o.type||this.#o.completed?a.nothing:E`<devtools-spinner></devtools-spinner>`}#U(){if("setting-is-not-true"===this.#o.type)return a.nothing;const e="consent-reminder"===this.#o.type;return E`
      <header>
        ${e?E`
          <div class="header-icon-container">
            <devtools-icon .data=${{iconName:"lightbulb-spark",width:"18px",height:"18px"}}>
            </devtools-icon>
          </div>`:a.nothing}
        <div class="filler">
          <h2 tabindex="-1">
            ${this.#j()}
          </h2>
          ${this.#z()}
        </div>
        <div class="close-button">
          <devtools-button
            .data=${{variant:"icon",size:"SMALL",iconName:"cross",title:T(M.closeInsight)}}
            jslog=${l.close().track({click:!0})}
            @click=${this.#k}
          ></devtools-button>
        </div>
      </header>
    `}#u(){$(E`
      <div class="wrapper" jslog=${l.pane("console-insights").track({resize:!0})}>
        <div class="animation-wrapper">
          ${this.#U()}
          ${this.#E()}
          ${this.#L()}
        </div>
      </div>
    `,this.#t,{host:this})}}class P extends HTMLElement{#t=this.attachShadow({mode:"open"});#P=[];#O=!1;constructor(){super(),this.#t.adoptedStyleSheets=[R,i.checkboxStyles]}#u(){$(E`
      <ul>
        ${N.repeat(this.#P,(e=>e.value),(e=>E`<li><x-link class="link" title="${j(e.type)} ${T(M.opensInNewTab)}" href="data:text/plain,${encodeURIComponent(e.value)}" jslog=${l.link("source-"+e.type).track({click:!0})}>
            <devtools-icon name="open-externally"></devtools-icon>
            ${j(e.type)}
          </x-link></li>`))}
        ${this.#O?E`<li class="source-disclaimer">
          <devtools-icon name="warning"></devtools-icon>
          ${T(M.reloadRecommendation)}</li>`:a.nothing}
      </ul>
    `,this.#t,{host:this})}set sources(e){this.#P=e,this.#u()}set isPageReloadRecommended(e){this.#O=e,this.#u()}}customElements.define("devtools-console-insight",U),customElements.define("devtools-console-insight-sources-list",P);class O{handleAction(e,s){switch(s){case"explain.console-message.context":case"explain.console-message.context.error":case"explain.console-message.context.warning":case"explain.console-message.context.other":case"explain.console-message.hover":{const n=e.flavor(m.ConsoleViewMessage.ConsoleViewMessage);if(n){s.startsWith("explain.console-message.context")?t.userMetrics.actionTaken(t.UserMetrics.Action.InsightRequestedViaContextMenu):"explain.console-message.hover"===s&&t.userMetrics.actionTaken(t.UserMetrics.Action.InsightRequestedViaHoverButton);const e=new y(n),i=new t.AidaClient.AidaClient;return U.create(e,i).then((e=>{n.setInsight(e)})),!0}return!1}}return!1}}export{O as ActionDelegate,L as CloseEvent,U as ConsoleInsight,y as PromptBuilder,v as SourceType,f as allowHeader,C as formatConsoleMessage,x as formatNetworkRequest,k as formatRelatedCode,S as formatStackTrace,b as lineWhitespace};

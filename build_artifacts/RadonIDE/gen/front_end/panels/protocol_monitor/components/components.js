import"../../../ui/components/icon_button/icon_button.js";import"../../../ui/components/menus/menus.js";import*as e from"../../../core/host/host.js";import*as t from"../../../core/i18n/i18n.js";import"../../../ui/components/buttons/buttons.js";import*as a from"../../../ui/lit-html/lit-html.js";import*as r from"../../../ui/visual_logging/visual_logging.js";import*as o from"../../../core/sdk/sdk.js";import"../../../ui/components/dialogs/dialogs.js";import*as n from"../../../ui/components/suggestion_input/suggestion_input.js";import*as s from"../../../ui/legacy/legacy.js";import*as i from"../../elements/components/components.js";const l=new CSSStyleSheet;l.replaceSync("*{box-sizing:border-box;padding:0;margin:0;font-size:inherit}:host{display:block}.toolbar{align-items:center;display:flex;justify-content:space-between;padding-left:5px;padding-right:6px;padding-top:1px;height:27px;background-color:var(--sys-color-cdt-base-container);position:absolute;bottom:0;width:100%;border-top:1px solid var(--sys-color-divider)}\n/*# sourceURL=toolbar.css */\n");var p=self&&self.__decorate||function(e,t,a,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(n<3?o(s):n>3?o(t,a,s):o(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};const{html:d,Decorators:c,LitElement:m}=a,{customElement:u}=c,h={sendCommandCtrlEnter:"Send command - Ctrl+Enter",sendCommandCmdEnter:"Send command - ⌘+Enter",copyCommand:"Copy command"},g=t.i18n.registerUIStrings("panels/protocol_monitor/components/Toolbar.ts",h),y=t.i18n.getLocalizedString.bind(void 0,g),v=new URL("../../../Images/copy.svg",import.meta.url).toString(),f=new URL("../../../Images/send.svg",import.meta.url).toString();class b extends Event{static eventName="copycommand";constructor(){super(b.eventName,{bubbles:!0,composed:!0})}}class $ extends Event{static eventName="commandsent";constructor(){super($.eventName,{bubbles:!0,composed:!0})}}let C=class extends m{static styles=[l];#e=()=>{this.dispatchEvent(new b)};#t=()=>{this.dispatchEvent(new $)};render(){return d`
        <div class="toolbar">
          <devtools-button
          title=${y(h.copyCommand)}
          .size=${"SMALL"}
          .iconUrl=${v}
          .variant=${"toolbar"}
          @click=${this.#e}
          jslog=${r.action("protocol-monitor.copy-command").track({click:!0})}
        ></devtools-button>
        <devtools-button
          .size=${"REGULAR"}
          title=${e.Platform.isMac()?y(h.sendCommandCmdEnter):y(h.sendCommandCtrlEnter)}
          .iconUrl=${f}
          .variant=${"primary_toolbar"}
          @click=${this.#t}
          jslog=${r.action("protocol-monitor.send-command").track({click:!0})}
        ></devtools-button>
      </div>
    `}};C=p([u("devtools-pm-toolbar")],C);var w=Object.freeze({__proto__:null,CopyCommandEvent:b,SendCommandEvent:$,get Toolbar(){return C}});const P=new CSSStyleSheet;P.replaceSync("*{box-sizing:border-box;padding:0;margin:0;font-size:inherit}:host{display:block;height:100%}.target-select-menu{max-width:180px}.warning-icon{margin-left:-18px;margin-right:4px}.row{flex-wrap:wrap}.row,\n.row-icons{display:flex;flex-direction:row;color:var(--sys-color-token-property-special);font-family:var(--monospace-font-family);font-size:var(--monospace-font-size);align-items:center;line-height:18px;margin-top:3px}.separator{margin-right:0.5em;color:var(--sys-color-on-surface)}ul{padding-left:2em}.optional-parameter{color:var(--sys-color-token-attribute-value);--override-color-recorder-input:var(--sys-color-on-surface)}.undefined-parameter{color:var(--sys-color-state-disabled)}.wrapper{padding-left:1em;overflow-x:hidden;height:100%;width:100%;padding-bottom:50px;padding-top:0.5em}.clear-button,\n.add-button,\n.delete-button{opacity:0%;transition:opacity 0.3s ease-in-out}.clear-button,\n.delete-button{margin-left:5px}.row:focus-within .delete-button,\n.row:focus-within .add-button,\n.row:focus-within .clear-button,\n.row:hover .delete-button,\n.row:hover .add-button,\n.row:hover .clear-button{opacity:100%}\n/*# sourceURL=JSONEditor.css */\n");var j=self&&self.__decorate||function(e,t,a,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(n<3?o(s):n>3?o(t,a,s):o(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};const{html:T,Decorators:I,LitElement:S,Directives:k,nothing:x}=a,{customElement:E,property:R,state:N}=I,{live:B,classMap:D,repeat:A}=k,O={deleteParameter:"Delete parameter",addParameter:"Add a parameter",resetDefaultValue:"Reset to default value",addCustomProperty:"Add custom property"},L=t.i18n.registerUIStrings("panels/protocol_monitor/components/JSONEditor.ts",O),M=t.i18n.getLocalizedString.bind(void 0,L);class _ extends Event{static eventName="submiteditor";data;constructor(e){super(_.eventName),this.data=e}}const V=new Map([["string",""],["number",0],["boolean",!1]]),U="dummy",H="<empty_string>";function z(e,t){return e.toLowerCase().includes(t.toLowerCase())}let K=class extends S{static styles=[P];command="";targetId;#a;constructor(){super(),this.parameters=[],this.targets=[],this.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(this.#r(e),this.dispatchEvent(new _({command:this.command,parameters:this.getParameters(),targetId:this.targetId})))}))}connectedCallback(){super.connectedCallback(),this.#a=new s.PopoverHelper.PopoverHelper(this,(e=>this.#o(e)),"protocol-monitor.hint"),this.#a.setDisableOnClick(!0),this.#a.setTimeout(300),this.#a.setHasPadding(!0);o.TargetManager.TargetManager.instance().addEventListener("AvailableTargetsChanged",this.#n,this),this.#n()}disconnectedCallback(){super.disconnectedCallback(),this.#a?.hidePopover(),this.#a?.dispose();o.TargetManager.TargetManager.instance().removeEventListener("AvailableTargetsChanged",this.#n,this)}#n(){this.targets=o.TargetManager.TargetManager.instance().targets(),this.targets.length&&void 0===this.targetId&&(this.targetId=this.targets[0].id())}getParameters(){const e=t=>{if(void 0!==t.value)switch(t.type){case"number":return Number(t.value);case"boolean":return Boolean(t.value);case"object":{const a={};for(const r of t.value){void 0!==e(r)&&(a[r.name]=e(r))}if(0===Object.keys(a).length)return;return a}case"array":{const a=[];for(const r of t.value)a.push(e(r));return 0===a.length?[]:a}default:return t.value}},t={};for(const a of this.parameters)t[a.name]=e(a);return e({type:"object",name:U,optional:!0,value:this.parameters,description:""})}displayCommand(e,t,a){this.targetId=a,this.command=e;const r=this.metadataByCommand.get(this.command);if(!r?.parameters)return;this.populateParametersForCommandWithDefaultValues();const o=this.#s("",t,{typeRef:U,type:"object",name:"",description:"",optional:!0,value:[]},r.parameters).value,n=new Map(this.parameters.map((e=>[e.name,e])));for(const e of o){const t=n.get(e.name);t&&(t.value=e.value)}this.requestUpdate()}#s(e,t,a,r){const o=a?.type||typeof t,n=a?.description??"",s=a?.optional??!0;switch(o){case"string":case"boolean":case"number":return this.#i(e,t,a);case"object":return this.#l(e,t,a,r);case"array":return this.#p(e,t,a)}return{type:o,name:e,optional:s,typeRef:a?.typeRef,value:t,description:n}}#i(e,t,a){const r=a?.type||typeof t,o=a?.description??"";return{type:r,name:e,optional:a?.optional??!0,typeRef:a?.typeRef,value:t,description:o,isCorrectType:!a||this.#d(a,String(t))}}#l(e,t,a,r){const o=a?.description??"";if("object"!=typeof t||null===t)throw Error("The value is not an object");const n=a?.typeRef;if(!n)throw Error("Every object parameters should have a type ref");const s=n===U?r:this.typesByName.get(n);if(!s)throw Error("No nested type for keys were found");const i=[];for(const e of Object.keys(t)){const a=s.find((t=>t.name===e));i.push(this.#s(e,t[e],a))}return{type:"object",name:e,optional:a.optional,typeRef:a.typeRef,value:i,description:o,isCorrectType:!0}}#p(e,t,a){const r=a?.description??"",o=a?.optional??!0,n=a?.typeRef;if(!n)throw Error("Every array parameters should have a type ref");if(!Array.isArray(t))throw Error("The value is not an array");const s=this.#c(n)?void 0:{optional:!0,type:"object",value:[],typeRef:n,description:"",name:""},i=[];for(let e=0;e<t.length;e++){const a=this.#s(`${e}`,t[e],s);i.push(a)}return{type:"array",name:e,optional:o,typeRef:a?.typeRef,value:i,description:r,isCorrectType:!0}}#o(e){const t=e.composedPath()[0],a=this.#m(t);if(!a?.description)return null;const[r,o]=(e=>{if(e.length>150){const[t,a]=e.split(".");return[t,a]}return[e,""]})(a.description),n=a.type,s=a.replyArgs;let l="";return l=s?o+`Returns: ${s}<br>`:n?o+`<br>Type: ${n}<br>`:o,{box:t.boxInWindow(),show:async e=>{const t=new i.CSSHintDetailsView.CSSHintDetailsView({getMessage:()=>`<code><span>${r}</span></code>`,getPossibleFixMessage:()=>l,getLearnMoreLink:()=>`https://chromedevtools.github.io/devtools-protocol/tot/${this.command.split(".")[0]}/`});return e.contentElement.appendChild(t),!0}}}#m(e){if(e.matches(".command")){const e=this.metadataByCommand.get(this.command);if(e)return{description:e.description,replyArgs:e.replyArgs}}if(e.matches(".parameter")){const t=e.dataset.paramid;if(!t)return;const a=t.split("."),{parameter:r}=this.#u(a);if(!r.description)return;return{description:r.description,type:r.type}}}getCommandJson(){return""!==this.command?JSON.stringify({command:this.command,parameters:this.getParameters()}):""}#h(){const t=this.getCommandJson();e.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(t)}#g(){this.dispatchEvent(new _({command:this.command,parameters:this.getParameters(),targetId:this.targetId}))}populateParametersForCommandWithDefaultValues(){const e=this.metadataByCommand.get(this.command)?.parameters;e&&(this.parameters=e.map((e=>this.#y(e))))}#y(e){if("object"===e.type){let t=e.typeRef;t||(t=U);const a=(this.typesByName.get(t)??[]).map((e=>this.#y(e)));return{...e,value:e.optional?void 0:a,isCorrectType:!0}}return"array"===e.type?{...e,value:e?.optional?void 0:e.value?.map((e=>this.#y(e)))||[],isCorrectType:!0}:{...e,value:e.optional?void 0:V.get(e.type),isCorrectType:!0}}#u(e){let t,a=this.parameters;for(let r=0;r<e.length;r++){const o=e[r],n=a.find((e=>e.name===o));if(r===e.length-1)return{parameter:n,parentParameter:t};if("array"!==n?.type&&"object"!==n?.type)throw new Error("Parameter on the path in not an object or an array");n.value&&(a=n.value),t=n}throw new Error("Not found")}#d(e,t){if("number"===e.type&&isNaN(Number(t)))return!1;const a=this.#v(e);return!(0!==a.length&&!a.includes(t))}#f=e=>{if(!(e.target instanceof n.SuggestionInput.SuggestionInput))return;let t;if(e instanceof KeyboardEvent){const a=e.target.renderRoot.querySelector("devtools-editable-content");if(!a)return;t=a.innerText}else t=e.target.value;const a=e.target.getAttribute("data-paramid");if(!a)return;const r=a.split("."),o=this.#u(r).parameter;""===t?o.value=V.get(o.type):(o.value=t,o.isCorrectType=this.#d(o,t)),this.requestUpdate()};#b=e=>{if(!(e.target instanceof n.SuggestionInput.SuggestionInput))return;const t=e.target.value,a=e.target.getAttribute("data-paramid");if(!a)return;const r=a.split("."),{parameter:o}=this.#u(r);o.name=t,this.requestUpdate()};#r=e=>{e.target instanceof n.SuggestionInput.SuggestionInput&&"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&this.#f(e)};#$(e){if(!(e.target instanceof n.SuggestionInput.SuggestionInput))return;const t=e.target.getAttribute("data-paramid");if(!t)return;const a=t.split(".");this.#u(a).parameter.isCorrectType=!0,this.requestUpdate()}#C=async e=>{e.target instanceof n.SuggestionInput.SuggestionInput&&(this.command=e.target.value),this.populateParametersForCommandWithDefaultValues()};#w(e){if(e)return`${e.name()} (${e.inspectedURL()})`}#c(e){return"string"===e||"boolean"===e||"number"===e}#P(e,t){if("object"===e.type){let a=e.typeRef;a||(a=U);const r=(this.typesByName.get(a)??[]).map((e=>this.#P(e,e.name)));return{type:"object",name:t,optional:e.optional,typeRef:a,value:r,isCorrectType:!0,description:e.description}}return{type:e.type,name:t,optional:e.optional,isCorrectType:!0,typeRef:e.typeRef,value:e.optional?void 0:V.get(e.type),description:e.description}}#j(e){const t=e.split("."),{parameter:a,parentParameter:r}=this.#u(t);if(a){switch(a.type){case"array":{const e=a.typeRef;if(!e)throw Error("Every array parameter must have a typeRef");const t=this.typesByName.get(e)??[],r=t.map((e=>this.#P(e,e.name)));let o=this.#c(e)?e:"object";0===t.length&&this.enumsByName.get(e)&&(o="string"),a.value||(a.value=[]),a.value.push({type:o,name:String(a.value.length),optional:!0,typeRef:e,value:0!==r.length?r:"",description:"",isCorrectType:!0});break}case"object":{let e=a.typeRef;if(e||(e=U),a.value||(a.value=[]),!this.typesByName.get(e)){a.value.push({type:"string",name:"",optional:!0,value:"",isCorrectType:!0,description:"",isKeyEditable:!0});break}const t=this.typesByName.get(e)??[],o=t.map((e=>this.#P(e,e.name))),n=t.map((e=>this.#y(e)));r?a.value.push({type:"object",name:"",optional:!0,typeRef:e,value:o,isCorrectType:!0,description:""}):a.value=n;break}default:a.value=V.get(a.type)}this.requestUpdate()}}#T(e,t){if(e&&void 0!==e.value){switch(e.type){case"object":if(e.optional&&!t){e.value=void 0;break}e.typeRef&&this.typesByName.get(e.typeRef)?e.value.forEach((e=>this.#T(e,t))):e.value=[];break;case"array":e.value=e.optional?void 0:[];break;default:e.value=e.optional?void 0:V.get(e.type),e.isCorrectType=!0}this.requestUpdate()}}#I(e,t){if(e&&Array.isArray(t.value)){if(t.value.splice(t.value.findIndex((t=>t===e)),1),"array"===t.type)for(let e=0;e<t.value.length;e++)t.value[e].name=String(e);this.requestUpdate()}}#S(){const e=this.targets.find((e=>e.id()===this.targetId)),t=e?this.#w(e):this.#w(this.targets[0]);return T`
    <div class="row attribute padded">
      <div>target<span class="separator">:</span></div>
      <devtools-select-menu
            class="target-select-menu"
            @selectmenuselected=${this.#k}
            .showDivider=${!0}
            .showArrow=${!0}
            .sideButton=${!1}
            .showSelectedItem=${!0}
            .position=${"bottom"}
            .buttonTitle=${t||""}
            jslog=${r.dropDown("targets").track({click:!0})}
          >
          ${A(this.targets,(e=>T`
                <devtools-menu-item
                  .value=${e.id()}>
                    ${this.#w(e)}
                </devtools-menu-item>
              `))}
          </devtools-select-menu>
    </div>
  `}#k(e){this.targetId=e.itemValue,this.requestUpdate()}#v(e){if("string"===e.type){const t=this.enumsByName.get(`${e.typeRef}`)??{};return Object.values(t)}return"boolean"===e.type?["true","false"]:[]}#x(e){return T`
          <devtools-button
            title=${e.title}
            .size=${"SMALL"}
            .iconName=${e.iconName}
            .variant=${"icon"}
            class=${D(e.classMap)}
            @click=${e.onClick}
            .jslogContext=${e.jslogContext}
          ></devtools-button>
        `}#E(){return T`<devtools-icon
    .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"14px",height:"14px"}}
    class=${D({"warning-icon":!0})}
  >
  </devtools-icon>`}#R(e,t,a,r){return e.sort(((e,t)=>Number(e.optional)-Number(t.optional))),T`
      <ul>
        ${A(e,(e=>{const o=a?`${r}.${e.name}`:e.name,n="array"===e.type||"object"===e.type?e.value??[]:[],s=e=>{this.#f(e)},i=e=>{this.#r(e)},l=e=>{this.#$(e)},p=this.#c(e.type),d="array"===e.type,c=a&&"array"===a.type,m=a&&"object"===a.type,u="object"===e.type,h=void 0===e.value,g=e.optional,y=u&&e.typeRef&&void 0!==this.typesByName.get(e.typeRef),v=e.isKeyEditable,f=u&&!y,b="string"===e.type||"boolean"===e.type,$=d&&!h&&0!==e.value?.length||u&&!h,C={"optional-parameter":e.optional,parameter:!0,"undefined-parameter":void 0===e.value&&e.optional};return T`
                <li class="row">
                  <div class="row-icons">
                      ${e.isCorrectType?x:T`${this.#E()}`}

                      <!-- If an object parameter has no predefined keys, show an input to enter the key, otherwise show the name of the parameter -->
                      <div class=${D(C)} data-paramId=${o}>
                          ${v?T`<devtools-suggestion-input
                              data-paramId=${o}
                              isKey=${!0}
                              .isCorrectInput=${B(e.isCorrectType)}
                              .options=${b?this.#v(e):[]}
                              .autocomplete=${!1}
                              .value=${B(e.name??"")}
                              .placeholder=${""===e.value?H:`<${V.get(e.type)}>`}
                              @blur=${e=>{this.#b(e)}}
                              @focus=${l}
                              @keydown=${i}
                            ></devtools-suggestion-input>`:T`${e.name}`} <span class="separator">:</span>
                      </div>

                      <!-- Render button to add values inside an array parameter -->
                      ${d?T`
                        ${this.#x({title:M(O.addParameter),iconName:"plus",onClick:()=>this.#j(o),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-parameter"})}
                      `:x}

                      <!-- Render button to complete reset an array parameter or an object parameter-->
                      ${$?this.#x({title:M(O.resetDefaultValue),iconName:"clear",onClick:()=>this.#T(e,c),classMap:{"clear-button":!0},jslogContext:"protocol-monitor.reset-to-default-value"}):x}

                      <!-- Render the buttons to change the value from undefined to empty string for optional primitive parameters -->
                      ${p&&!c&&g&&h?T`  ${this.#x({title:M(O.addParameter),iconName:"plus",onClick:()=>this.#j(o),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-parameter"})}`:x}

                      <!-- Render the buttons to change the value from undefined to populate the values inside object with their default values -->
                      ${u&&g&&h&&y?T`  ${this.#x({title:M(O.addParameter),iconName:"plus",onClick:()=>this.#j(o),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-parameter"})}`:x}
                  </div>

                  <div class="row-icons">
                      <!-- If an object has no predefined keys, show an input to enter the value, and a delete icon to delete the whole key/value pair -->
                      ${v&&m?T`
                      <!-- @ts-ignore -->
                      <devtools-suggestion-input
                          data-paramId=${o}
                          .isCorrectInput=${B(e.isCorrectType)}
                          .options=${b?this.#v(e):[]}
                          .autocomplete=${!1}
                          .value=${B(e.value??"")}
                          .placeholder=${""===e.value?H:`<${V.get(e.type)}>`}
                          .jslogContext=${"parameter-value"}
                          @blur=${s}
                          @focus=${l}
                          @keydown=${i}
                        ></devtools-suggestion-input>

                        ${this.#x({title:M(O.deleteParameter),iconName:"bin",onClick:()=>this.#I(e,a),classMap:{deleteButton:!0,deleteIcon:!0},jslogContext:"protocol-monitor.delete-parameter"})}`:x}

                    <!-- In case  the parameter is not optional or its value is not undefined render the input -->
                    ${!p||v||h&&g||c?x:T`
                        <!-- @ts-ignore -->
                        <devtools-suggestion-input
                          data-paramId=${o}
                          .strikethrough=${B(e.isCorrectType)}
                          .options=${b?this.#v(e):[]}
                          .autocomplete=${!1}
                          .value=${B(e.value??"")}
                          .placeholder=${""===e.value?H:`<${V.get(e.type)}>`}
                          .jslogContext=${"parameter-value"}
                          @blur=${s}
                          @focus=${l}
                          @keydown=${i}
                        ></devtools-suggestion-input>`}

                    <!-- Render the buttons to change the value from empty string to undefined for optional primitive parameters -->
                    ${!p||v||c||!g||h?x:T`  ${this.#x({title:M(O.resetDefaultValue),iconName:"clear",onClick:()=>this.#T(e),classMap:{"clear-button":!0},jslogContext:"protocol-monitor.reset-to-default-value"})}`}

                    <!-- If the parameter is an object with no predefined keys, renders a button to add key/value pairs to it's value -->
                    ${f?T`
                      ${this.#x({title:M(O.addCustomProperty),iconName:"plus",onClick:()=>this.#j(o),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-custom-property"})}
                    `:x}

                    <!-- In case the parameter is nested inside an array we render the input field as well as a delete button -->
                    ${c?T`
                    <!-- If the parameter is an object we don't want to display the input field we just want the delete button-->
                    ${u?x:T`
                    <!-- @ts-ignore -->
                    <devtools-suggestion-input
                      data-paramId=${o}
                      .options=${b?this.#v(e):[]}
                      .autocomplete=${!1}
                      .value=${B(e.value??"")}
                      .placeholder=${""===e.value?H:`<${V.get(e.type)}>`}
                      .jslogContext=${"parameter"}
                      @blur=${s}
                      @keydown=${i}
                      class=${D({"json-input":!0})}
                    ></devtools-suggestion-input>`}

                    ${this.#x({title:M(O.deleteParameter),iconName:"bin",onClick:()=>this.#I(e,a),classMap:{"delete-button":!0},jslogContext:"protocol-monitor.delete-parameter"})}`:x}
                  </div>
                </li>
                ${this.#R(n,t,e,o)}
              `}))}
      </ul>
    `}render(){return T`
    <div class="wrapper">
      ${this.#S()}
      <div class="row attribute padded">
        <div class="command">command<span class="separator">:</span></div>
        <devtools-suggestion-input
          .options=${[...this.metadataByCommand.keys()]}
          .value=${this.command}
          .placeholder=${"Enter your command..."}
          .suggestionFilter=${z}
          .jslogContext=${"command"}
          @blur=${this.#C}
          class=${D({"json-input":!0})}
        ></devtools-suggestion-input>
      </div>
      ${this.parameters.length?T`
      <div class="row attribute padded">
        <div>parameters<span class="separator">:</span></div>
      </div>
        ${this.#R(this.parameters)}
      `:x}
    </div>
    <devtools-pm-toolbar @copycommand=${this.#h} @commandsent=${this.#g}></devtools-pm-toolbar>`}};j([R({attribute:!1})],K.prototype,"metadataByCommand",void 0),j([R({attribute:!1})],K.prototype,"typesByName",void 0),j([R({attribute:!1})],K.prototype,"enumsByName",void 0),j([N()],K.prototype,"parameters",void 0),j([N()],K.prototype,"targets",void 0),j([N()],K.prototype,"command",void 0),j([N()],K.prototype,"targetId",void 0),K=j([E("devtools-json-editor")],K);var F=Object.freeze({__proto__:null,get JSONEditor(){return K},SubmitEditorEvent:_,suggestionFilter:z});export{F as JSONEditor,w as Toolbar};

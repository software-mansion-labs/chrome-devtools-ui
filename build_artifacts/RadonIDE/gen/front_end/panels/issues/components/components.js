import*as e from"../../../ui/lit-html/lit-html.js";import*as t from"../../../ui/visual_logging/visual_logging.js";import*as n from"../../../core/common/common.js";import*as o from"../../../core/i18n/i18n.js";import"../../../ui/components/buttons/buttons.js";import*as s from"../../../ui/legacy/legacy.js";const i=new CSSStyleSheet;i.replaceSync(".element-reveal-icon{display:inline-block;width:20px;height:20px;mask-image:var(--image-file-select-element);background-color:var(--icon-default)}\n/*# sourceURL=./elementsPanelLink.css */\n");const{html:l}=e;class a extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=()=>{};#n=()=>{};#o=()=>{};set data(e){this.#t=e.onElementRevealIconClick,this.#n=e.onElementRevealIconMouseEnter,this.#o=e.onElementRevealIconMouseLeave,this.#s()}#s(){this.#i()}connectedCallback(){this.#e.adoptedStyleSheets=[i]}#i(){e.render(l`
      <span
        class="element-reveal-icon"
        jslog=${t.link("elements-panel").track({click:!0})}
        @click=${this.#t}
        @mouseenter=${this.#n}
        @mouseleave=${this.#o}></span>
      `,this.#e,{host:this})}}customElements.define("devtools-elements-panel-link",a);var c=Object.freeze({__proto__:null,ElementsPanelLink:a});const m=new CSSStyleSheet;m.replaceSync(".hide-issues-menu-btn{position:relative;display:flex;background-color:transparent;flex:none;align-items:center;justify-content:center;padding:0;margin:0 -2px 0 4px;overflow:hidden;border-radius:0;border:none;&:hover > devtools-icon{color:var(--icon-default-hover)}}\n/*# sourceURL=./hideIssuesMenu.css */\n");const{html:r}=e,d={tooltipTitle:"Hide issues"},u=o.i18n.registerUIStrings("panels/issues/components/HideIssuesMenu.ts",d),h=o.i18n.getLocalizedString.bind(void 0,u);class p extends HTMLElement{#e=this.attachShadow({mode:"open"});#l=n.UIString.LocalizedEmptyString;#a=()=>{};set data(e){this.#l=e.menuItemLabel,this.#a=e.menuItemAction,this.#i()}connectedCallback(){this.#e.adoptedStyleSheets=[m]}onMenuOpen(e){e.stopPropagation();const t=this.#e.querySelector("devtools-button"),n=new s.ContextMenu.ContextMenu(e,{x:t?.getBoundingClientRect().left,y:t?.getBoundingClientRect().bottom});n.headerSection().appendItem(this.#l,(()=>this.#a()),{jslogContext:"toggle-similar-issues"}),n.show()}#i(){e.render(r`
    <devtools-button
      .data=${{variant:"icon",iconName:"dots-vertical",title:h(d.tooltipTitle)}}
      .jslogContext=${"hide-issues"}
      class="hide-issues-menu-btn"
      @click=${this.onMenuOpen}></devtools-button>
    `,this.#e,{host:this})}}customElements.define("devtools-hide-issues-menu",p);var v=Object.freeze({__proto__:null,HideIssuesMenu:p});export{c as ElementsPanelLink,v as HideIssuesMenu};

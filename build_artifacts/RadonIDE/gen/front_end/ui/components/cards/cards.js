import"../icon_button/icon_button.js";import*as e from"../../lit-html/lit-html.js";const s=new CSSStyleSheet;s.replaceSync(':host{display:flex;max-width:var(--sys-size-35);width:100%}.card{break-inside:avoid;min-width:var(--sys-size-31);max-width:var(--sys-size-35);margin:var(--sys-size-3) var(--sys-size-6) var(--sys-size-5) var(--sys-size-5);flex:1}.heading-wrapper{display:flex;white-space:nowrap;margin-bottom:var(--sys-size-5)}.heading{color:var(--sys-color-on-surface);font:var(--sys-typescale-body2-medium)}.heading-icon{margin-right:var(--sys-size-3)}slot[name="heading-suffix"]::slotted(*){margin-left:auto}.content-container{border-radius:var(--sys-shape-corner-small);box-shadow:var(--sys-elevation-level2);display:flex;flex-direction:column;background:var(--app-color-card-background)}slot[name="content"]::slotted(*){padding:var(--sys-size-4) var(--sys-size-6)}slot[name="content"]::slotted(*:not(:first-child)){border-top:var(--sys-size-1) solid var(--app-color-card-divider)}\n/*# sourceURL=card.css */\n');const{html:a}=e;class i extends HTMLElement{#e;#s;#a;#i=[];#n=this.attachShadow({mode:"open"});set data(e){this.#e=e.heading,this.#s=e.headingIconName,this.#i.forEach((e=>e.remove())),e.content.forEach((e=>{e.slot="content",this.append(e)})),this.#i=e.content,this.#a?.remove(),e.headingSuffix&&(this.#a=e.headingSuffix,e.headingSuffix.slot="heading-suffix",this.append(e.headingSuffix)),this.#t()}connectedCallback(){this.#n.adoptedStyleSheets=[s],this.#t()}#t(){e.render(a`
    <div class="card">
      <div class="heading-wrapper">
        ${this.#s?a`<devtools-icon class="heading-icon" name=${this.#s}></devtools-icon>`:e.nothing}
        <div role="heading" aria-level="2" class="heading">${this.#e}</div>
        <slot name="heading-suffix"></slot>
      </div>
      <slot name="content" class='content-container'></slot>
    </div>
    `,this.#n,{host:this})}}customElements.define("devtools-card",i);var n=Object.freeze({__proto__:null,Card:i});export{n as Card};

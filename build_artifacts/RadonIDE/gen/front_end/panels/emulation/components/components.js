import*as e from"../../../models/emulation/emulation.js";import*as t from"../../../ui/legacy/legacy.js";import*as i from"../../../ui/lit-html/lit-html.js";import*as s from"../../../ui/visual_logging/visual_logging.js";const{html:n}=i;class l extends Event{size;static eventName="sizechanged";constructor(e){super(l.eventName),this.size=e}}function o(e){return Number(e.target.value)}class a extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=!1;#i="0";#s="";#n;#l;constructor(e,{jslogContext:t}){super(),this.#n=e,this.#l=t}connectedCallback(){this.render()}set disabled(e){this.#t=e,this.render()}set size(e){this.#i=e,this.render()}set placeholder(e){this.#s=e,this.render()}render(){i.render(n`
      <style>
        input {
          /*
           * 4 characters for the maximum size of the value,
           * 2 characters for the width of the step-buttons,
           * 2 pixels padding between the characters and the
           * step-buttons.
           */
          width: calc(4ch + 2ch + 2px);
          max-height: 18px;
          border: var(--sys-color-neutral-outline);
          border-radius: 4px;
          margin: 0 2px;
          text-align: center;
          font-size: inherit;
          font-family: inherit;
        }

        input:disabled {
          user-select: none;
        }

        input:focus::-webkit-input-placeholder {
          color: transparent;
        }
      </style>
      <input type="number"
             max=${e.DeviceModeModel.MaxDeviceSize}
             min=${e.DeviceModeModel.MinDeviceSize}
             jslog=${s.textField().track({change:!0}).context(this.#l)}
             maxlength="4"
             title=${this.#n}
             placeholder=${this.#s}
             ?disabled=${this.#t}
             .value=${this.#i}
             @change=${this.#o}
             @keydown=${this.#a} />
    `,this.#e,{host:this})}#o(e){this.dispatchEvent(new l(o(e)))}#a(i){let s=t.UIUtils.modifiedFloatNumber(o(i),i);null!==s&&(s=Math.min(s,e.DeviceModeModel.MaxDeviceSize),s=Math.max(s,e.DeviceModeModel.MinDeviceSize),i.preventDefault(),i.target.value=String(s),this.dispatchEvent(new l(s)))}}customElements.define("device-mode-emulation-size-input",a);var r=Object.freeze({__proto__:null,SizeInputElement:a});export{r as DeviceSizeInputElement};

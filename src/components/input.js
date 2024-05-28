import { LitElement, html } from "lit";

export class FormInput extends LitElement {
    static get properties() {
        return {
            inputType : {},
            inputId : {},
            inputText : {}
        }
    }

    constructor() {
        super();
        this.inputType = "text";
        this.inputId = "";
        this.inputText = "Acá va el texto";
    }

    render() {
        return html`
        <label for=${this.inputId}>${this.inputText}</label>
        <input type=${this.inputType} id=${this.inputId} name=${this.inputId} required><br><br>
        
        `
    }
}

customElements.define('form-input', FormInput)
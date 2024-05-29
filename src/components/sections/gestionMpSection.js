import { LitElement, html, css } from "lit";
import '../materiaPrimaForm'

export class gestionMpSection extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        #gestionar-mp-container {
            display: none;
        }
    `

    render() {
        return html`
        <div id="gestionar-mp-container">
            <h1>Gestionar materia prima</h1>
            <p>Seleccione la opción que desea realizar</p>

            <div class="botones-container">
                <materia-form></materia-form>
            
            </div>
        </div>
        `
    }
}

customElements.define('gestion-section', gestionMpSection)
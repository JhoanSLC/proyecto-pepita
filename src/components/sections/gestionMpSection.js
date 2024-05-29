import { LitElement, html, css } from "lit";
import '../materiaPrimaForm'

export class gestionMpSection extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <div class="gestionar-mp-container">
        <h1>Gestionar materia prima</h1>
        <p>Seleccione la opción que desea realizar</p>

        <div class="botones-container">
            <materia-form></materia-form>
            <materia-form></materia-form>
            <materia-form></materia-form>
            <materia-form></materia-form>
        </div>
    </div>
        `
    }
}

customElements.define('gestion-section', gestionMpSection)
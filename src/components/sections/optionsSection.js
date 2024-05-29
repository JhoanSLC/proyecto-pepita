import { LitElement, html, css } from "lit";

export class optionSection extends LitElement {
    constructor() {
        super()
    }

    static styles = css`
        .options-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            gap: 20rem;
            
        }

        .botones-container {
            justify-self: center;
            display: flex;
            gap: 10px;
            
        }

        button {
            padding: 10px 15px;
            background-color: bisque;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: all ease-in 140ms;
        }

        button:hover {
            transform: scale(1.1)
        }
    `

    render() {
        return html`
            <div class="options-container">
                <h1>¿A qué sección deseas acceder?</h1>
                
                <div class="botones-container">
                    <button type="button" id="gestionMp">Gestionar materia prima</button>
                    <button type="button" id="calcularCostos">Calcular costos</button>
                    <button type="button" id="costosIndirectos">Costos indirectos</button>
                    <button type="button" id="informes">Informes detallados</button>
                </div>
            </div>
        `
    }
}

customElements.define('options-section', optionSection)
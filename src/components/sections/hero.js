import {LitElement, html, css} from 'lit';

export class HeroSection extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #boton-empezar {
            font-size: 20px;
            padding: 8px 20px;
            background-color: cyan;
            border: black solid 2px;
            border-radius: 10px;
            cursor: pointer;
        }

        .hero-titulo {
            font-size: 50px;
        }
    `

    render() {
        return html`
        <div class="hero-container">
            <h1 class="hero-titulo">Confecciones PEPITA</h1>
            <button @clicktype="button" id="boton-empezar">EMPEZAR</button>
        </div>
        `
    }

}

customElements.define('hero-section', HeroSection)
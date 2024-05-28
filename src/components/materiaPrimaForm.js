import { LitElement, html, css } from "lit";
import './input'

export class MateriaPrimaFormulario extends LitElement {
    static properties = {

    }

    constructor() {
        super();

    }

    static styles = css`
    .modal {
        display: none; /* Ocultar modal por defecto */
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        animation-name: modalopen;
        animation-duration: 0.4s;
    }
    @keyframes modalopen {
        from {opacity: 0}
        to {opacity: 1}
    }
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    `
    changeColor(e) {
        let button = this.shadowRoot.getElementById('openModalBtn');
        button.style.color = "red"
    }
    

    render() {
        return html`
        <button @click=${this.changeColor} id="openModalBtn">Abrir Modal</button>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>
                    <h2>Formulario Básico</h2>
                        <form action="https://665630689f970b3b36c49525.mockapi.io/materiaPrima" method="POST" onsubmit="target">

                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>
                            <form-input inputId="" inputText=""></form-input>

                            <input type="submit" value="Enviar">
                        </form>
                    </h2>
                </p>
            </div>
        </div>     
        `
    }

}

customElements.define('materia-form', MateriaPrimaFormulario)



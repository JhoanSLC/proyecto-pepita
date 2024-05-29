import '../mockapi/addToMockapi'
import { enviarDatos } from '../mockapi/addToMockapi';

const URL = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima"


document.addEventListener('DOMContentLoaded', () => {
    const mpFormElement = document.querySelector('materia-form');
    const shadowRoot = mpFormElement.shadowRoot;
    const mpForm = shadowRoot.getElementById('mpForm')
    

    mpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let materiaPrima = {
            "idMateriaPrima" : shadowRoot.getElementById('idmateria').value,
            "nombre" : shadowRoot.getElementById('nombre').value,
            "descripcion" : shadowRoot.getElementById('descripcion').value,
            "categoria" : shadowRoot.getElementById('categoria').value,
            "proveedor" : shadowRoot.getElementById('proveedor').value,
            "costoUnidad" : shadowRoot.getElementById('costoUnidad').value,
            "unidadDeMedida" : shadowRoot.getElementById('medida').value,
            "stock" : shadowRoot.getElementById('stock').value,
            "fechaIngreso" : shadowRoot.getElementById('fechaIngreso').value,
            "fechaVencimiento" : shadowRoot.getElementById('vencimiento').value,
            "ubicacion" : shadowRoot.getElementById('ubicacion').value,
            "adicional" : shadowRoot.getElementById('adicional').value,
        }

        enviarDatos(URL, materiaPrima)
    })
})
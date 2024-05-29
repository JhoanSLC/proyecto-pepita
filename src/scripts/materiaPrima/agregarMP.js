import '../mockapi/addToMockapi'
import { enviarDatos } from '../mockapi/addToMockapi';

const URL = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima"


document.addEventListener('DOMContentLoaded', () => {
    const gestionSecElement = document.querySelector('gestion-section');
    const shadowRoot = gestionSecElement.shadowRoot;
    const mpFormElement = shadowRoot.querySelector('materia-form');
    const mpFormShadow = mpFormElement.shadowRoot;
    const mpForm = mpFormShadow.getElementById('mpForm')
    

    mpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let materiaPrima = {
            "idMateriaPrima" : mpFormShadow.getElementById('idmateria').value,
            "nombre" : mpFormShadow.getElementById('nombre').value,
            "descripcion" : mpFormShadow.getElementById('descripcion').value,
            "categoria" : mpFormShadow.getElementById('categoria').value,
            "proveedor" : mpFormShadow.getElementById('proveedor').value,
            "costoUnidad" : mpFormShadow.getElementById('costoUnidad').value,
            "unidadDeMedida" : mpFormShadow.getElementById('medida').value,
            "stock" : mpFormShadow.getElementById('stock').value,
            "fechaIngreso" : mpFormShadow.getElementById('fechaIngreso').value,
            "fechaVencimiento" : mpFormShadow.getElementById('vencimiento').value,
            "ubicacion" : mpFormShadow.getElementById('ubicacion').value,
            "adicional" : mpFormShadow.getElementById('adicional').value,
        }

        enviarDatos(URL, materiaPrima)
    })
})
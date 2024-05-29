document.addEventListener('DOMContentLoaded', () => {

    const gestionSecElement = document.querySelector('gestion-section');
    const shadowRoot = gestionSecElement.shadowRoot;
    const mpFormElement = shadowRoot.querySelector('materia-form');
    const mpFormShadow = mpFormElement.shadowRoot;
    const button = mpFormShadow.getElementById('closeModalBtn');
    const modal = mpFormShadow.getElementById('myModal')

    button.addEventListener('click', () => {
       modal.style.display = "none";
    })

})
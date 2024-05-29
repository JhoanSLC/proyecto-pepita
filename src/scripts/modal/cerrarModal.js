document.addEventListener('DOMContentLoaded', () => {

    const mpForm = document.querySelector('materia-form');
    const mpFormShadow = mpForm.shadowRoot;
    const button = mpFormShadow.getElementById('closeModalBtn');
    const modal = mpFormShadow.getElementById('myModal')
    
    button.addEventListener('click', (e) => {
       modal.style.display = "none";
    })

})
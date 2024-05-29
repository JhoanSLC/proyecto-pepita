document.addEventListener('DOMContentLoaded', () => {
    const heroLit = document.querySelector('hero-section');
    const heroRoot = heroLit.shadowRoot;
    const EMPEZAR = heroRoot.getElementById('boton-empezar');
    const heroSect = heroRoot.getElementById('hero-container');
    const optionSection = document.querySelector('options-section');
    const optionRoot = optionSection.shadowRoot;
    const optionSect = optionRoot.getElementById('options-container');

    EMPEZAR.addEventListener('click', () => {
        heroSect.style.display = "none";
        optionSect.style.display = "flex";
    })
})
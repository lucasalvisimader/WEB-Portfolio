// Gira a carta quando clicada
const flipCard = (card) => {
    card.classList.toggle("flip")
}

// Executa o código quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    const innerElements = document.querySelectorAll(".animate-item");
    
    // Define a animação da seção e dos itens da seção
    function animateOnScroll() {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            // Faz a animação da seção somente quando estiver sendo mostrada na tela
            if (sectionPosition < screenPosition) {
                section.classList.add("animate");

                // Ativar os elementos internos
                innerElements.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add("fade-in");
                    }, i * 400); // Delay entre elementos
                });
            }
        });
    }

    // Quando der scroll na página, a função é chamada novamente
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});


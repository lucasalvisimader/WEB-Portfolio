const flipCard = (card) => {
    card.classList.toggle("flip")
}

// Executa o código quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        // Define se a seção virá da esquerda ou da direita
        const directionClass = index % 2 === 0 ? "from-left" : "from-right";
        section.classList.add(directionClass);

        // Adiciona a mesma classe nos elementos internos
        const innerElements = section.querySelectorAll(".animate-item");
        innerElements.forEach((item) => {
            item.classList.add("hidden", directionClass);
        });
    });

    function animateOnScroll() {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add("animate");

                // Ativar os elementos internos
                const innerElements = section.querySelectorAll(".animate-item");
                innerElements.forEach((item, i) => {
                    setTimeout(() => {
                        item.classList.add("fade-in");
                    }, i * 500); // Delay entre elementos
                });
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});


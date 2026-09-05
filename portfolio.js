
const container = document.querySelector(".projects-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const cardWidth = 380; // Card width + gap

nextBtn.addEventListener("click", () => {
    container.scrollBy({
        left: cardWidth,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    container.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
    });
});

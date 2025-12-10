window.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot-wrapper");

    dots.forEach(dot => dot.classList.add("show-tooltip"));
    const second = 1000;
    setTimeout(() => {
        dots.forEach(dot => dot.classList.remove("show-tooltip"));
    }, 20 * second);

    const cardDotMap = {
        rakshi: document.querySelector(".dot.pink").closest(".dot-wrapper"),
        gnani: document.querySelector(".dot.blue").closest(".dot-wrapper")
    };

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            if (card.classList.contains("rakshi")) {
                cardDotMap.rakshi.classList.add("show-tooltip");
            }
            if (card.classList.contains("gnani")) {
                cardDotMap.gnani.classList.add("show-tooltip");
            }
        });

        card.addEventListener("mouseleave", () => {
            if (card.classList.contains("rakshi")) {
                cardDotMap.rakshi.classList.remove("show-tooltip");
            }
            if (card.classList.contains("gnani")) {
                cardDotMap.gnani.classList.remove("show-tooltip");
            }
        });
    });
});

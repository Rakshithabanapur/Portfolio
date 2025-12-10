   window.addEventListener("DOMContentLoaded", () => {
        const dots = document.querySelectorAll(".dot-wrapper");

        dots.forEach(dot => dot.classList.add("show-tooltip"));

        setTimeout(() => {
            dots.forEach(dot => dot.classList.remove("show-tooltip"));
        }, 60000);
    });


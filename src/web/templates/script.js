document.addEventListener("DOMContentLoaded", function () {
    console.log("Strona załadowana!");

    const sections = document.querySelectorAll(".scroll-reveal");
    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();

    const form = document.querySelector("#registration-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Dziękujemy za rejestrację! Otrzymasz potwierdzenie na e-mail.");
            form.reset();
        });
    }

    const szkolenia = [
        { tytul: "Programowanie w Python", data: "10-12 Marca 2024" },
        { tytul: "UX/UI Design", data: "5-7 Kwietnia 2024" },
        { tytul: "Marketing Cyfrowy", data: "15-17 Maja 2024" },
    ];

    const szkoleniaContainer = document.querySelector("#szkolenia-container");
    if (szkoleniaContainer) {
        szkolenia.forEach((szkolenie) => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <h3>${szkolenie.tytul}</h3>
                <p><strong>Data:</strong> ${szkolenie.data}</p>
                <button class="btn btn-primary">Zapisz się</button>
            `;
            szkoleniaContainer.appendChild(div);
        });
    }
});

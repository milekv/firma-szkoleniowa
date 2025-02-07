document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const imie = document.getElementById("imie").value.trim();
        const nazwisko = document.getElementById("nazwisko").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefon = document.getElementById("numer_telefonu").value.trim();
        const szkolenie = document.getElementById("szkolenie").value;

        if (imie === "" || nazwisko === "" || email === "" || telefon === "") {
            alert("Wszystkie pola są wymagane!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Podaj poprawny adres email!");
            return;
        }

        alert(`Dziękujemy za rejestrację, ${imie} ${nazwisko}!`);
        form.reset(); 
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});

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
    { 
        tytul: "Zarządzanie Czasem i Produktywność", 
        data: "25-27 Marca 2025", 
        opis: "Poznaj skuteczne techniki zarządzania czasem, które pomogą Ci zwiększyć produktywność w pracy i życiu osobistym." 
    },{ 
        tytul: "Komunikacja i Rozwiązywanie Konfliktów", 
        data: "10-12 Kwietnia 2025", 
        opis: "Rozwijaj umiejętności komunikacyjne i ucz się, jak efektywnie rozwiązywać konflikty w różnych środowiskach." 
    },{ 
        tytul: "Motywacja i Rozwój Osobisty", 
        data: "1-3 Maja 2025", 
        opis: "Zdobądź narzędzia i techniki, które pomogą Ci utrzymać wysoką motywację oraz rozwijać się w różnych aspektach życia." 
    },
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

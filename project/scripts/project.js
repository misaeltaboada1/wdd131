// ==== FECHA Y FOOTER ====
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// ==== MENU RESPONSIVE ====
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            menuBtn.textContent = "☰";
        } else {
            menu.style.display = "block";
            menuBtn.textContent = "✖";
        }
    });
}

// ==== BARÇA PRODUCTS PARA FORM ====
const barcaProducts = [
    { id: "messi-10", name: "Lionel Messi Jersey" },
    { id: "stadium-tour", name: "Camp Nou Tour" },
    { id: "barca-flag", name: "Barça Flag" },
    { id: "training-kit", name: "Training Kit 2025" },
    { id: "retro-shirt", name: "Retro 1992 Shirt" }
];

const selectBarca = document.getElementById("product-select");
if (selectBarca) {
    barcaProducts.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectBarca.appendChild(option);
    });
}

// ==== GUARDAR FORM EN LOCALSTORAGE ====
const barcaForm = document.getElementById("barcaForm");

if (barcaForm) {
    barcaForm.addEventListener("submit", (e) => {
        e.preventDefault(); // evita reload

        // recoger datos del formulario
        const reviewData = {
            product: selectBarca.value,
            rating: barcaForm.rating.value,
            features: Array.from(barcaForm.features)
                .filter(f => f.checked)
                .map(f => f.value),
            reviewText: barcaForm.reviewText.value,
            userName: barcaForm.userName.value,
            date: new Date().toISOString()
        };

        // recuperar contador de reviews desde localStorage
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCount++; // sumar uno por la nueva review
        localStorage.setItem("reviewCount", reviewCount);

        // guardar la review completa en un array
        const storedReviews = JSON.parse(localStorage.getItem("barcaReviews")) || [];
        storedReviews.push(reviewData);
        localStorage.setItem("barcaReviews", JSON.stringify(storedReviews));

        // redirigir a página de confirmación
        window.location.href = "form-fcb.html";
    });
}

// ==== MOSTRAR CANTIDAD DE REVIEWS EN CONFIRMACION ====
const reviewCountSpan = document.getElementById("reviewCount");
if (reviewCountSpan) {
    const reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCountSpan.textContent = reviewCount;
}

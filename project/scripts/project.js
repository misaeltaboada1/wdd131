const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const menuBtn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
    if (menu.style.display === "block") {
    menu.style.display = "none"
        menuBtn.textContent = "☰"
    } else {
        menu.style.display = "block"
        menuBtn.textContent = "✖"
    }
});

// Barça Fan Review Form
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

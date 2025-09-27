const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`

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

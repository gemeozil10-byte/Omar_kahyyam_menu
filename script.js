alert("JavaScript يعمل");

const searchInput = document.getElementById("searchInput");
const menuItems = document.querySelectorAll(".menu-item");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        menuItems.forEach(item => {
            const text = item.textContent.toLowerCase();

            item.style.display = text.includes(value) ? "flex" : "none";
        });
    });
}

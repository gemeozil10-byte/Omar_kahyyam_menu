const searchInput = document.getElementById("searchInput");
const menuItems = document.querySelectorAll(".menu-item");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        menuItems.forEach(item => {
            const text = item.textContent.toLowerCase();

            if (text.includes(value)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
}

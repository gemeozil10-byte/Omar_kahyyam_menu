const searchInput = document.getElementById("searchInput");
const menuItems = document.querySelectorAll(".menu-item");

searchInput.addEventListener("keyup", function () {
    const search = searchInput.value.trim().toLowerCase();

    menuItems.forEach(item => {
        const name = item.querySelector("span").textContent.toLowerCase();

        if (name.includes(search)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});

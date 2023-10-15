document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn");
    const navbar = document.getElementById("navbar");

    let isOpen = false;

    toggleBtn.addEventListener("click", function() {
        if (isOpen) {
            navbar.style.display = "none";
            toggleBtn.style.transform = "rotate(0deg)";
        } else {
            navbar.style.display = "flex";
            toggleBtn.style.transform = "rotate(180deg)";
        }

        isOpen = !isOpen;
    });
});

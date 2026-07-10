const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});
const imageInput = document.getElementById("imageInput");
const profilePic = document.getElementById("profile-pic");

imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        profilePic.src = URL.createObjectURL(file);
    }
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
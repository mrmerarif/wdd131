document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkmode-toggle");

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        toggle.textContent = 
            document.body.classList.contains("dark-mode") 
            ? "☀️ Light Mode" 
            : "🌙 Dark Mode";
    });
});

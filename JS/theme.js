let currentTheme = "White";

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    currentTheme = document.body.classList.contains("dark-theme") ? "Black" : "White";
    const themeIcon = document.getElementById('theme-icon');

    if (currentTheme == "Black") {
        themeIcon.src = "FILES/sun.png";
        document.body.style.color = "white !important";
        document.querySelectorAll('*').forEach(el => {
            el.style.color = "black !important";
        });
    } else {
        themeIcon.src = "FILES/moon.png";
        document.body.style.color = "black !important";
        document.querySelectorAll('*').forEach(el => {
            el.style.color = "black !important";
        });
    }
}
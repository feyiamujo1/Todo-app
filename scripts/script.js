const currentTheme = localStorage.getItem('theme');
var theme_icon = document.getElementById("theme_toggle_icon");

switch (currentTheme) {
    case "light-theme":
        document.body.classList.toggle(currentTheme);
        theme_icon.src = "../images/icon-moon.svg";
        document.body.style.backgroundImage = "url('../images/bg-desktop-light.jpg')";
        break;
    default:
        document.body.classList.toggle(currentTheme);
        theme_icon.src = "../images/icon-sun.svg";
        document.body.style.backgroundImage = "url('../images/bg-desktop-dark.jpg')";
        break;
}
switchTheme = () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        theme_icon.src = "../images/icon-moon.svg";
        document.body.style.backgroundImage = "url('../images/bg-desktop-light.jpg')";
        localStorage.setItem('theme', 'light-theme');
    } else {
        theme_icon.src = "../images/icon-sun.svg";
        document.body.style.backgroundImage = "url('../images/bg-desktop-dark.jpg')";
        localStorage.setItem('theme', 'dark-theme');
    }
}


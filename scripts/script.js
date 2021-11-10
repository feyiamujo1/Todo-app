const currentTheme = localStorage.getItem('theme');
var theme_icon = document.getElementById("theme_toggle_icon");

var light_background;
var dark_background;



if (window.innerWidth<=768) {
    light_background = "url('./images/bg-mobile-light.jpg')";
    dark_background = "url('./images/bg-mobile-dark.jpg')";
} else {
    light_background = "url('./images/bg-desktop-light.jpg')";
    dark_background = "url('./images/bg-desktop-dark.jpg')";
}

switch (currentTheme) {
    case "light-theme":
        document.body.classList.toggle(currentTheme);
        theme_icon.src = "./images/icon-moon.svg";
        document.body.style.backgroundImage = light_background;
        break;
    default:
        document.body.classList.toggle(currentTheme);
        theme_icon.src = "./images/icon-sun.svg";
        document.body.style.backgroundImage = dark_background;
        break;
}
switchTheme = () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        theme_icon.src = "./images/icon-moon.svg";
        document.body.style.backgroundImage = light_background;
        localStorage.setItem('theme', 'light-theme');
    } else {
        theme_icon.src = "./images/icon-sun.svg";
        document.body.style.backgroundImage = dark_background;
        localStorage.setItem('theme', 'dark-theme');
    }
}


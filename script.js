let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let ptag = document.querySelector(".ptag");

function setgradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    setCookie("Color1", color1.value, 3);
    setCookie("Color2", color2.value, 3);
    ptagColor(color1.value);
}

function ptagColor(color) {
    ptag.style.color = `#${reverseString(color)}`;
}

function reverseString(str) {
    if (str == "#000000") {
        return "FFFFFF";
    }
    return str.split("").reverse().join("").replace('#', '');
}



function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

function setgradientOnReady() {
    color1.value = getCookie("Color1");
    color2.value = getCookie("Color2");
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

window.onload = setgradientOnReady();
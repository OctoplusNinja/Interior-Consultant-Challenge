function closeNav() {
    document.querySelector(".overlay").style.width = "0";
    document.querySelector("body").classList.remove("D-scroll");
}

function openNav() {
    document.querySelector(".overlay").style.width = "100%"
    document.querySelector("body").classList.add("D-scroll");
}
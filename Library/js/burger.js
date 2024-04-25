document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function()
    {
        document.querySelector(".header").classList.toggle("open")
    })
});

document.getElementById("nav-content").addEventListener('click', event => {
    event._isClickWithInNavContent = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInNavContent = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInNavContent) return;
    document.querySelector(".header").classList.remove("open");
});

document.querySelectorAll(".nav-content-list-item").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".header").classList.remove("open")
    });
});
// Open Burger-menu

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

//Open Dop Menu no Auth

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("acount-header-btn").addEventListener("click", function()
    {
        document.querySelector(".acount-header").classList.toggle("open")
    })
});

document.getElementById("dop-menu-noauth").addEventListener('click', event => {
    event._isClickWithInHeaderIcon = true;
});
document.getElementById("acount-header-btn").addEventListener('click', event => {
    event._isClickWithInHeaderIcon = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInHeaderIcon) return;
    document.querySelector(".acount-header").classList.remove("open");
});

document.querySelectorAll(".dop-menu-noauth-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".acount-header").classList.remove("open")
    });
});

// Open POPUP 1 Login

document.getElementById('dop-menu-noauth-btn').addEventListener("click", function() {
    document.getElementById('popup1').classList.add('open')
});

document.getElementById('modal_register_type').addEventListener("click", function() {
    document.getElementById('popup2').classList.add('open')
    document.getElementById('popup1').classList.remove('open')
});

document.getElementById('popup_close_btn_login').addEventListener("click", function() {
    document.getElementById('popup1').classList.remove('open')
});

document.querySelector('#popup1 .popup_login_main').addEventListener("click", event => {
    event._isClickWithInPopup1 = true;
});
document.getElementById('popup1').addEventListener('click', event => {
    if (event._isClickWithInPopup1) return;
    event.currentTarget.classList.remove('open');
});
// Close popup1 Escape
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('popup1').classList.remove('open')
    }
});

// Open POPUP 2 Register

document.getElementById('dop-menu-noauth-btn1').addEventListener("click", function() {
    document.getElementById('popup2').classList.add('open')
});

document.getElementById('modal_login_type').addEventListener("click", function() {
    document.getElementById('popup1').classList.add('open')
    document.getElementById('popup2').classList.remove('open')
});

document.getElementById('popup_register_close_btn').addEventListener("click", function() {
    document.getElementById('popup2').classList.remove('open')
});

document.querySelector('#popup2 .popup_register_main').addEventListener("click", event => {
    event._isClickWithInPopup2 = true;
});
document.getElementById('popup2').addEventListener("click", event => {
    if (event._isClickWithInPopup2) return;
    event.currentTarget.classList.remove('open');
});
// Close popup2 Escape
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('popup2').classList.remove('open')
    }
});

// Open POPUP1/2 - Digital

// Login
document.getElementById('get-a-card-button').addEventListener("click", function() {
    document.getElementById('popup1').classList.add('open')
});
// Register Sign in
 document.getElementById('get-a-card-button1').addEventListener("click", function() {
    document.getElementById('popup2').classList.add('open')
});
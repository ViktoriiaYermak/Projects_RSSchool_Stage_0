const radioBtn = document.querySelectorAll(".input, .input1");
const winter = document.querySelector(".favorites-items-winter");
const spring = document.querySelector(".favorites-items-spring");
const summer = document.querySelector(".favorites-items-summer");
const autumn = document.querySelector(".favorites-items-autumn");



radioBtn.forEach(radioBtn => {
    radioBtn.addEventListener("change", event => {
        switch(event.target.value) {
        case "winter":
            winter.classList.remove("open");
            setTimeout(() => {winter.classList.remove("open-care");}, 150);
            spring.classList.add("open-care");
            spring.classList.add("open");
            summer.classList.add("open-care");
            summer.classList.add("open");
            autumn.classList.add("open-care");
            autumn.classList.add("open");
            break;
        case "spring":
            spring.classList.remove("open");
            setTimeout(() => {spring.classList.remove("open-care");}, 150);
            summer.classList.add("open");
            summer.classList.add("open-care");
            winter.classList.add("open");
            winter.classList.remove("fade-in");
            winter.classList.add("open-care");
            autumn.classList.add("open");
            autumn.classList.add("open-care");
            break;
        case "summer":
            summer.classList.remove("open");
            setTimeout(() => {summer.classList.remove("open-care");}, 150);
            spring.classList.add("open");
            spring.classList.add("open-care");
            winter.classList.add("open");
            winter.classList.add("open-care");
            autumn.classList.add("open");
            autumn.classList.add("open-care");
            break;
        case "autumn":
            autumn.classList.remove("open");
            setTimeout(() => {autumn.classList.remove("open-care");}, 150);
            summer.classList.add("open-care");
            summer.classList.add("open");
            winter.classList.add("open-care");
            winter.classList.add("open");
            spring.classList.add("open-care");
            spring.classList.add("open");
        }
    })
});
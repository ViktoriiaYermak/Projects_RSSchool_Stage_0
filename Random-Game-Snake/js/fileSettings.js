const openSettingsBtn = document.querySelector(".buttonSettings");
const modalSettings = document.querySelector(".modallSettings");
const closeSettingsBtn = document.querySelector(".cross-settings");
const openScoreBtn = document.querySelector('.buttonScore');
const modalScore = document.querySelector('.modallScore');
const closeScoreBtn = document.querySelector('.cross-score');

openSettingsBtn.addEventListener("click", function () {
    modalSettings.classList.add("open");
    modalScore.classList.remove("open");
    buttonPlay.disabled = true;
});

openScoreBtn.addEventListener("click", function () {
    modalScore.classList.add("open");
    modalSettings.classList.remove("open");
    buttonPlay.disabled = true;
});

closeSettingsBtn.addEventListener("click", function () {
    modalSettings.classList.remove("open");
    buttonPlay.disabled = false;
    location.reload();
});

closeScoreBtn.addEventListener("click", function () {
    modalScore.classList.remove("open");
    buttonPlay.disabled = false;
    location.reload();
});

document.addEventListener("DOMContentLoaded", function () {
    const standardRadio = document.querySelector('input[value="standard"]');
    const halloweenRadio = document.querySelector('input[value="halloween"]');
    const halloweenStyleLink = document.createElement("link");
    halloweenStyleLink.rel = "stylesheet";
    halloweenStyleLink.href = "css/halloweenStyle.css";
    halloweenStyleLink.id = "halloween-style-link";
    const halloweenStyleScript = document.createElement("script");
    halloweenStyleScript.src = "./js/hallooween.js";
    halloweenStyleScript.id = "halloween-style-script";

    const selectedStyle = localStorage.getItem("gamesStyle");

    if (selectedStyle === "halloween") {
        halloweenRadio.checked = true;
        document.head.appendChild(halloweenStyleLink);
        document.body.appendChild(halloweenStyleScript);
        gridSize = 25;
        gridSizeX = gameCanvas.width / gridSize;
        gridSizeY = gameCanvas.height / gridSize;
        snake = [{ x: 5, y: 5 }];
        food = { x: Math.floor(Math.random() * gridSizeX), y: Math.floor(Math.random() * gridSizeY) };
        speedX = 1;
        speedY = 0;
        score = 0;
        collectedFood = 0;
    } else {
        standardRadio.checked = true;
    }

    standardRadio.addEventListener('change', function () {
        if (standardRadio.checked) {
            const halloweenStyleLinkElement = document.getElementById("halloween-style-link");
            const halloweenStyleScriptElement = document.getElementById("halloween-style-script");
            if (halloweenStyleLinkElement) {
                halloweenStyleLinkElement.remove();
            }

            if (halloweenStyleScriptElement) {
                halloweenStyleScriptElement.remove();
            }

            localStorage.setItem("gamesStyle", "standard");
        }
    });

    halloweenRadio.addEventListener('change', function () {
        if (halloweenRadio.checked) {
            const halloweenStyleLinkElement = document.getElementById("halloween-style-link");
            const halloweenStyleScriptElement = document.getElementById("halloween-style-script");
            if (!halloweenStyleLinkElement) {
                document.head.appendChild(halloweenStyleLink);
            }

            if (!halloweenStyleScriptElement) {
                document.body.appendChild(halloweenStyleScript);
            }

            localStorage.setItem("gamesStyle", "halloween");
        }
    });
});
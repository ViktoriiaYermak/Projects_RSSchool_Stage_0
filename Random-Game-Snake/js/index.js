const buttonPlay = document.querySelector('.buttonPlay');
const buttonScore = document.querySelector('.buttonScore');
const container = document.getElementById('container');
const gameCanvas = document.getElementById("gameCanvas");
const game = gameCanvas.getContext("2d");
let gridSize = 15;
let gridSizeX = gameCanvas.width / gridSize;
let gridSizeY = gameCanvas.height / gridSize;
let isPlaying = false;
let snake = [{ x: 5, y: 5 }];
let food = { x: Math.floor(Math.random() * gridSizeX), y: Math.floor(Math.random() * gridSizeY) };
let speedX = 1;
let speedY = 0;
let score = 0;
let collectedFood = 0;

// Save Games
let gamesTable = [];

function saveGame() {
    const gameScore = {
        score
    };
    gamesTable.push(gameScore);
    localStorage.setItem('gamesTable', JSON.stringify(gamesTable));
    displayGames();
}

function loadGamesData() {
    const games = localStorage.getItem('gamesTable');
    if (games) {
        gamesTable = JSON.parse(games);
    }
}

function displayGames() {
    const gamesList = document.getElementById('gamesList');
    gamesList.innerHTML = '';
    const games = JSON.parse(localStorage.getItem('gamesTable'));
  
    if (games) {
      for (const game of games) {
            const listScore = document.createElement('li');
            const spanElementScore = document.createElement('span');
            spanElementScore.className = 'score-number';
            spanElementScore.textContent = game.score;
            listScore.classList.add('text-score-list-table');
            listScore.textContent = 'Snake length: ';
            listScore.appendChild(spanElementScore);

            gamesList.appendChild(listScore);
        }
    }
}

displayGames();
  
function startNewGame() {
    score = 0;
    saveGame();
    gameLoop();
}

loadGamesData();

// Кнопка Play
buttonPlay.addEventListener('click', handleClick);

function handleClick() {
    if (!isPlaying) {
        document.querySelector('html').classList.add('no-scroll');
        buttonPlay.disabled = true;
        buttonPlay.style.opacity = '0.7';
        buttonPlay.style.transform = 'none';
        openSettingsBtn.disabled = true;
        openScoreBtn.disabled = true;
        gameLoop();
    } 
}

// При нажатии на кнопку Play- закрытие окна GAme Start- открытие окна игры
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttonPlay").addEventListener("click", function()
    {
        document.querySelector(".container-text").classList.toggle("active");
    })
});

// Обновление стр при нажатии на Enter и на изображение после проигрыша
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        location.reload();
    }
});

const reloadIcon = document.querySelector('.container-icon');

reloadIcon.addEventListener('click', () => {
    location.reload();
});

function drawSnake() {
    snake.forEach(segment => {
        game.fillStyle = "rgb(49, 3, 53)";
        game.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawFood() {
    const foodColor = getRandomColor();
    game.fillStyle = foodColor;
    game.shadowColor = foodColor;
    game.shadowBlur = 5;
    game.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
    const head = { x: snake[0].x + speedX, y: snake[0].y + speedY };
    if (head.x < 0) {
        head.x = gridSizeX - 1;
    } else if (head.x >= gridSizeX) {
        head.x = 0;
    }
    if (head.y < 0) {
        head.y = gridSizeY - 1;
    } else if (head.y >= gridSizeY) {
        head.y = 0;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        collectedFood++;
        score++;
        food = { x: Math.floor(Math.random() * gridSizeX), y: Math.floor(Math.random() * gridSizeY) };
        
        const buttonScore = document.querySelector('.buttonScore');
        const btnText = buttonScore.querySelector('.btn-text');
        btnText.textContent = `Score - ${score.toString().padStart(3, '0')}`;

        if (collectedFood === 899) {
            displayWin();
        }
    } else {
        snake.pop();
    }
}

function displayWin() {
    const containerTextStart = document.querySelector('.container-text-start');
    const winText = document.querySelector('.container-text-win');
    const loadedIcon = document.querySelector('.container-icon');
    containerTextStart.style.display = 'none';
    winText.style.display = 'block';
    loadedIcon.style.display = 'block';
    gameStop();
}

function gameStop() {
    clearInterval(gameInterval);
    isPlaying = false;
    isPaused = true;
    saveGame();
}

function checkCollision() {
    const head = snake[0];
    if (
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        return true;
    }
    return false;
}

function gameLoop() {
    if (checkCollision()) {
        displayGameOver();
        return;
    }
    
    game.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawSnake();
    drawFood();
    moveSnake();

    setTimeout(gameLoop, 100);
}

function displayGameOver() {
    const containerTextStart = document.querySelector('.container-text-start');
    const gameOverText = document.querySelector('.container-text-over');
    const scoreText = document.querySelector('.container-text-score');
    const loadedIcon = document.querySelector('.container-icon');
    const scoreValue = document.querySelector('.score');
    containerTextStart.style.display = 'none';
    gameOverText.style.display = 'block';
    scoreText.style.display = 'block';
    loadedIcon.style.display = 'block';
    scoreValue.textContent = `Score - ${score.toString().padStart(3, '0')}`;
    openSettingsBtn.disabled = false;
    openScoreBtn.disabled = false;
    document.querySelector('html').classList.remove('no-scroll');
    saveGame();
}

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (speedY !== 1) {
                speedX = 0;
                speedY = -1;
            }
        break;
        case "ArrowDown":
            if (speedY !== -1) {
                speedX = 0;
                speedY = 1;
            }
        break;
        case "ArrowLeft":
            if (speedX !== 1) {
                speedX = -1;
                speedY = 0;
            }
        break;
        case "ArrowRight":
            if (speedX !== -1) {
                speedX = 1;
                speedY = 0;
            }
        break;
    }
});

// Controls Game

const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

upBtn.addEventListener('click', () => {
  if (speedY !== 1) {
      speedX = 0;
      speedY = -1;
    }
});

upBtn.addEventListener('touchstart', () => {
  if (speedY !== 1) {
      speedX = 0;
      speedY = -1;
    }
});

downBtn.addEventListener('click', () => {
  if (speedY !== -1) {
      speedX = 0;
      speedY = 1;
    }
});

downBtn.addEventListener('touchstart', () => {
  if (speedY !== -1) {
      speedX = 0;
      speedY = 1;
    }
});

leftBtn.addEventListener('click', () => {
  if (speedX !== 1) {
      speedX = -1;
      speedY = 0;
    }
});

leftBtn.addEventListener('touchstart', () => {
  if (speedX !== 1) {
      speedX = -1;
      speedY = 0;
    }
});

rightBtn.addEventListener('click', () => {
  if (speedX !== -1) {
      speedX = 1;
      speedY = 0;
    }
});

rightBtn.addEventListener('touchstart', () => {
  if (speedX !== -1) {
      speedX = 1;
      speedY = 0;
    }
});
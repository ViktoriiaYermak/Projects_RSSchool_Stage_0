// Дополнение к Halloween Style

function drawSnake() {
    snake.forEach(segment => {
        game.fillStyle = "rgb(207, 89, 20)";
        const radius = gridSize / 2;
        const x = (segment.x * gridSize) + radius;
        const y = (segment.y * gridSize) + radius;
        game.beginPath();
        game.arc(x, y, radius, 0, Math.PI * 2);
        game.fill();
    });
}

const pumpkinImage = new Image();
pumpkinImage.src = 'assets/img/foodHalloween.png';

function drawFood() {
    const foodColor = getRandomColor();
    game.fillStyle = foodColor;
    game.shadowColor = foodColor;
    game.shadowBlur = 5;
    game.drawImage(pumpkinImage, food.x * gridSize, food.y * gridSize, gridSize, gridSize);
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

        if (collectedFood === 323) {
            displayWin();
        }
    } else {
        snake.pop();
    }
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

    setTimeout(gameLoop, 150);
}
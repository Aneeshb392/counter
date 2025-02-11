let count = 0;

function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.innerText = count;
    counterElement.classList.add("bounce");
    setTimeout(() => counterElement.classList.remove("bounce"), 300);
}

const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#F5FF33'
];

function generateRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function applyBackgroundShades() {
    document.body.style.background = `linear-gradient(${generateRandomColor()}, ${generateRandomColor()})`;
}

function applyTextShadow() {
    document.getElementById("counter").style.textShadow = `2px 2px 5px ${generateRandomColor()}`;
}

function playClickSound() {
    const audio = new Audio('');
    audio.play();
}

document.getElementById("increment").addEventListener("click", function () {
    count++;
    updateCounter();
    applyBackgroundShades();
    applyTextShadow();
    playClickSound();
});

document.getElementById("decrement").addEventListener("click", function () {
    count--;
    updateCounter();
    applyBackgroundShades();
    applyTextShadow();
    playClickSound();
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    updateCounter();
    applyBackgroundShades();
    applyTextShadow();
    playClickSound();
});

document.addEventListener("keydown", function () {
    document.getElementById("head").style.color = generateRandomColor();
    applyBackgroundShades();
    applyTextShadow();
});

let lastMove = 0;
document.getElementById("color").addEventListener("click", function (event) {
    const now = Date.now();
    if (now - lastMove > 500) { // Throttle the event to fire every 500ms
        document.getElementById("color").style.backgroundColor = generateRandomColor();
        applyBackgroundShades();
        applyTextShadow();
        playClickSound();
        lastMove = now;
    }
});

// Initial background shade
applyBackgroundShades();
applyTextShadow();

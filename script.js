const timeDelay = 600;

document.addEventListener('DOMContentLoaded', () => {
    const blowCandleButton = document.querySelector('.blowCandle');
});

console.log(blowCandleButton);
if (blowCandleButton) {
    blowCandleButton.addEventListener('click', () => {
        turnOffFuego();
        startBubbles();

        const shoot = setInterval(() => {
            shootConfetti();
        }, timeDelay);

        setTimeout(() => {
            clearInterval(shoot);
            shootConfetti(200);
        }, 3 * timeDelay);

        console.log("shoot confetti");
    });
} else {
    console.error("Button with class 'blowCandle' not found.");
}

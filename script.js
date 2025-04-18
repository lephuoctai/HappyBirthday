
document.addEventListener('DOMContentLoaded', () => {
    const timeDelay = 600; 
    const blowCandleButton = document.querySelector('.blowCandle');

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

        });
    } else {
        console.error("Button with class 'blowCandle' not found.");
    }
});
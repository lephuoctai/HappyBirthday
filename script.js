
function run() {
    const timeDelay = 600;
    const blowCandleButton = document.querySelector('.blowCandle');
    
    blowCandleButton.addEventListener('click', () => {
        console.log(blowCandleButton);
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
}

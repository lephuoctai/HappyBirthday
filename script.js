const timeDelay = 600;

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('blowCandle')) {
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
        }
    });
});
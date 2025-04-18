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

            addText(2);
            event.target.style.transform = 'translateY(100px)';
            event.target.style.opacity = '0';

            document.querySelector('.frame1').style.opacity = '1';
            document.querySelector('.frame2').style.opacity = '1';
            document.querySelector('.frame3').style.opacity = '1';
        }
    });
});
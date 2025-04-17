
document.addEventListener('DOMContentLoaded', () => {
    const blowCandleButton = document.querySelector('.blowCandle');

    if (blowCandleButton) {
        blowCandleButton.addEventListener('click', () => {         console.log("checked");turnOffFuego(); startBubbles(); });
    } else {
        console.error("Button with class 'blowCandle' not found.");
    }
});
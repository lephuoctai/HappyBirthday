function turnOffFuego() {
    document.querySelectorAll('.fuego').forEach((element) => {
        // Add the blow-out class to trigger the animation
        element.classList.add('blow-out');

        // After animation completes, hide the element
        setTimeout(() => {
            element.style.display = 'none';// Clean up
        }, 800); // Total animation time
        element.classList.remove('blow-out');
    });
}

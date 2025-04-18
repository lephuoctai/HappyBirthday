function turnOffFuego() {
    document.querySelectorAll('.fuego').forEach((element) => {
        element.classList.add('blow-out');
        element.classList.remove('fuego');
        const e = document.querySelector('blow-out');

        // After animation completes, hide the element
        setTimeout(() => {
            e.classList.remove('blow-out');
        }, 500);
    });
}

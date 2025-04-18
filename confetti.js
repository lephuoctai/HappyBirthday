function shootConfetti(confettiCount = 100) {
    // Create canvas element
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    // Set canvas size to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');

    // Confetti settings
    const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7',
        '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
        '#009688', '#4caf50', '#8bc34a', '#cddc39',
        '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
    ];
    const confetti = [];

    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        // Left side confetti
        confetti.push({
            x: Math.random() * (canvas.width * 0.2), // Left 20% of screen
            y: canvas.height + Math.random() * 20,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.random() * 8 + 5,
            speedY: -Math.random() * 15 - 10,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            shape: Math.random() > 0.5 ? 'rect' : 'circle'
        });

        // Right side confetti
        confetti.push({
            x: canvas.width - Math.random() * (canvas.width * 0.2), // Right 20% of screen
            y: canvas.height + Math.random() * 20,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: -(Math.random() * 8 + 5),
            speedY: -Math.random() * 15 - 10,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            shape: Math.random() > 0.5 ? 'rect' : 'circle'
        });
    }

    let animationActive = true;
    let gravity = 0.2;
    let resistance = 0.98;
    let startTime = Date.now();
    let duration = 5000; // 5 seconds

    function animate() {
        if (!animationActive) {
            canvas.remove();
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let allConfettiGone = true;

        for (let i = 0; i < confetti.length; i++) {
            const c = confetti[i];

            // Update position
            c.x += c.speedX;
            c.y += c.speedY;

            // Apply physics
            c.speedY += gravity;
            c.speedX *= resistance;
            c.speedY *= resistance;

            // Update rotation
            c.rotation += c.rotationSpeed;

            // Check if confetti is still visible
            if (c.y < canvas.height + 100 &&
                c.x > -100 &&
                c.x < canvas.width + 100) {
                allConfettiGone = false;

                // Draw confetti
                ctx.save();
                ctx.translate(c.x, c.y);
                ctx.rotate((c.rotation * Math.PI) / 180);
                ctx.fillStyle = c.color;

                if (c.shape === 'rect') {
                    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size / 2);
                } else {
                    ctx.beginPath();
                    ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
            }
        }

        // Check if animation should end
        if (allConfettiGone || Date.now() - startTime > duration) {
            animationActive = false;
        }

        requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Automatic cleanup after duration
    setTimeout(() => {
        animationActive = false;
    }, duration);
}

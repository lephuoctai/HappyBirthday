  // Create bubbles function
  function createBubble() {
    const bubble = document.body.appendChild(document.createElement('div'));
    bubble.classList.add('bubble');

    // Random size between 10px and 50px
    const size = Math.random() * 40 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random horizontal position
    const posX = Math.random() * 100;
    bubble.style.left = `${posX}vw`;

    // Random horizontal movement
    const moveX = (Math.random() - 0.5) * 100;
    bubble.style.setProperty('--move-x', `${moveX}px`);

    // Random animation duration between 4 and 12 seconds
    const duration = Math.random() * 8 + 4;
    bubble.style.animationDuration = `${duration}s`;

    // Add random colors to some bubbles
    if (Math.random() > 0.6) {
      const hue = Math.floor(Math.random() * 360);
      bubble.style.background = `hsla(${hue}, 100%, 70%, 0.3)`;
      bubble.style.boxShadow = `0 0 10px hsla(${hue}, 100%, 70%, 0.5), inset 0 0 10px hsla(${hue}, 100%, 70%, 0.5)`;
    }

    document.body.appendChild(bubble);

    // Remove bubble after animation completes
    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  //_____________________________________________________________ 
  // Create bubbles at random intervals
  function startBubbles() {
    if(!document.querySelector('.bubble')) 
    {// Create initial bubbles
    for (let i = 0; i < 1; i++) {
      setTimeout(createBubble, Math.random() * 30000);
    }

    // Continue creating bubbles at a faster rate
    setInterval(() => {
      createBubble();
    }, 30);}
  }


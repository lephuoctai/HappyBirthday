document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.querySelector('.envelope');
  
  envelope.addEventListener('click', function() {
    this.classList.toggle('open');
  });

  // Optional: Add animated sparkles around the envelope when opened
  function createSparkles() {
    if (!envelope.classList.contains('open')) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    const size = Math.random() * 10 + 5;
    const posX = Math.random() * 300 - 50;
    const posY = Math.random() * 200 - 50;
    
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${posX}px`;
    sparkle.style.top = `${posY}px`;
    
    envelope.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
  
  // Create sparkles periodically when envelope is open
  setInterval(createSparkles, 200);
  
  // Add this style for sparkles
  const style = document.createElement('style');
  style.textContent = `
    .sparkle {
      position: absolute;
      background-color: gold;
      border-radius: 50%;
      opacity: 0;
      animation: sparkleAnimation 1s forwards;
      z-index: 5;
    }
    
    @keyframes sparkleAnimation {
      0% { transform: scale(0); opacity: 0; }
      20% { opacity: 1; }
      100% { transform: scale(1.5); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});

import React, { useEffect, useRef } from 'react';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="particles-canvas"></canvas>
      <div className="hero-content">
        <h1>Darsh Parikh</h1>
        <p className="hero-subtitle">AI/ML Enthusiast | Computer Science Engineer</p>
        <div className="hero-links">
          <a href="mailto:parikh.darsh@outlook.com" className="hero-link">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://linkedin.com/in/darsh-parikh-ai/" className="hero-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/NamiSwwaan/" className="hero-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

/**
 * High-Performance Cinematic Gold Dust & Bokeh Particle Engine
 * Uses pre-rendered offscreen sprite textures and IntersectionObserver
 * to ensure 60-120 FPS with minimal CPU/GPU overhead.
 */
export class CinematicParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.particles = [];
    this.particleCount = 50;
    this.mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    this.scrollY = window.scrollY;
    this.isActive = true;
    this.isInViewport = false;
    this.isRendering = false;

    // Cache pre-rendered offscreen sprites for ultra-fast drawImage blitting
    this.sprites = {};

    this.init();
  }

  init() {
    this.generateSprites();
    this.resize();
    this.createParticles();
    this.setupObserver();
    this.addEventListeners();
  }

  generateSprites() {
    const createDisc = (size, innerColor, outerColor) => {
      const oc = document.createElement('canvas');
      oc.width = size;
      oc.height = size;
      const octx = oc.getContext('2d');
      const r = size / 2;
      const grad = octx.createRadialGradient(r, r, 0, r, r, r);
      grad.addColorStop(0, innerColor);
      grad.addColorStop(0.6, outerColor);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      octx.fillStyle = grad;
      octx.fillRect(0, 0, size, size);
      return oc;
    };

    // Pre-render soft bokeh discs
    this.sprites.goldBokeh = createDisc(64, 'rgba(245, 197, 66, 0.9)', 'rgba(212, 160, 23, 0.2)');
    this.sprites.brightBokeh = createDisc(64, 'rgba(255, 245, 200, 0.95)', 'rgba(245, 197, 66, 0.2)');
    this.sprites.orangeBokeh = createDisc(64, 'rgba(232, 132, 43, 0.85)', 'rgba(180, 80, 20, 0.15)');

    // Pre-render sharp dust points
    this.sprites.goldDot = createDisc(16, '#F5C542', 'rgba(212, 160, 23, 0.4)');
    this.sprites.brightDot = createDisc(16, '#FFFFFF', 'rgba(245, 197, 66, 0.4)');
    this.sprites.orangeDot = createDisc(16, '#E8842B', 'rgba(232, 132, 43, 0.3)');
  }

  setupObserver() {
    if (!('IntersectionObserver' in window)) {
      this.isInViewport = true;
      this.startLoop();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isInViewport = entry.isIntersecting;
        if (this.isInViewport && !this.isRendering) {
          this.startLoop();
        }
      });
    }, { threshold: 0.01 });

    this.observer.observe(this.canvas);
  }

  startLoop() {
    if (this.isRendering) return;
    this.isRendering = true;
    this.render();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.width = this.canvas.parentElement.clientWidth || window.innerWidth;
    this.height = this.canvas.parentElement.clientHeight || window.innerHeight;
    this.canvas.width = Math.floor(this.width * dpr);
    this.canvas.height = Math.floor(this.height * dpr);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
  }

  createParticles() {
    this.particles = [];
    const count = this.width < 768 ? 25 : this.particleCount;

    for (let i = 0; i < count; i++) {
      const isBokeh = Math.random() > 0.65;
      const colorType = Math.random() > 0.3 ? 'gold' : (Math.random() > 0.5 ? 'bright' : 'orange');
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: isBokeh ? Math.random() * 8 + 4 : Math.random() * 2 + 0.8,
        isBokeh: isBokeh,
        colorType: colorType,
        sprite: isBokeh ? this.sprites[`${colorType}Bokeh`] : this.sprites[`${colorType}Dot`],
        alpha: Math.random() * 0.5 + 0.25,
        baseAlpha: Math.random() * 0.4 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.45) * 0.35,
        vy: -(Math.random() * 0.4 + 0.15),
        depth: Math.random() * 0.8 + 0.2,
      });
    }
  }

  addEventListeners() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.resize(), 150);
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      if (!this.isInViewport) return;
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.targetX = e.clientX - rect.left;
      this.mouse.targetY = e.clientY - rect.top;
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      this.isActive = !document.hidden;
      if (this.isActive && this.isInViewport && !this.isRendering) {
        this.startLoop();
      }
    });
  }

  render() {
    if (!this.isActive || !this.isInViewport) {
      this.isRendering = false;
      return;
    }

    // Smooth mouse follow
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.pulseVal += p.pulseSpeed;
      p.y += p.vy;
      p.x += p.vx + Math.sin(p.pulseVal * 0.5) * 0.15;

      // Mouse gentle repulsion
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const distSq = dx * dx + dy * dy;
      if (distSq < 16900) { // 130px
        const dist = Math.sqrt(distSq);
        const force = (1 - dist / 130) * 0.6 * p.depth;
        p.x -= (dx / dist) * force;
        p.y -= (dy / dist) * force;
      }

      // Seamless wrap
      if (p.y < -30) {
        p.y = this.height + 30;
        p.x = Math.random() * this.width;
      }
      if (p.x < -30) p.x = this.width + 30;
      if (p.x > this.width + 30) p.x = -30;

      const currentAlpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.2;
      const alpha = Math.max(0.05, Math.min(0.85, currentAlpha));

      // Ultra-fast sprite blitting
      this.ctx.globalAlpha = alpha;
      const d = p.radius * 2;
      this.ctx.drawImage(p.sprite, p.x - p.radius, p.y - p.radius, d, d);
    }

    this.ctx.globalAlpha = 1.0;
    requestAnimationFrame(() => this.render());
  }
}

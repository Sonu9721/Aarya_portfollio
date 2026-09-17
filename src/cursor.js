/**
 * Custom Cinematic Cursor
 * Small gold dot with a faint burnt-orange glow trail & context-aware expansion.
 */
export function initCustomCursor() {
  // Disable on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';
  document.body.appendChild(dot);

  const ring = document.createElement('div');
  ring.className = 'custom-cursor-ring';
  const text = document.createElement('span');
  text.className = 'custom-cursor-text';
  text.innerText = '';
  ring.appendChild(text);
  document.body.appendChild(ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    isVisible = true;
  });

  // Smooth lerp loop for the trailing ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Attach hover triggers dynamically
  function attachHoverListeners() {
    const interactables = document.querySelectorAll('[data-cursor]');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const action = el.getAttribute('data-cursor') || '';
        ring.classList.add('hover-active');
        text.innerText = action;
        dot.style.transform = 'translate(-50%, -50%) scale(0.4)';
      });

      el.addEventListener('mouseleave', () => {
        ring.classList.remove('hover-active');
        text.innerText = '';
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  }

  attachHoverListeners();

  // Re-attach if DOM changes
  const observer = new MutationObserver(() => {
    attachHoverListeners();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

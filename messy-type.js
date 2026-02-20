document.addEventListener('DOMContentLoaded', () => {

  const labeurDiv = document.querySelector('.labeur');
  if (!labeurDiv) return;

  const fullText = labeurDiv.innerText.trim();

  labeurDiv.innerHTML = '';

  fullText.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.dataset.vx = 0;
    span.dataset.vy = 0;
    span.dataset.offsetX = 0;
    span.dataset.offsetY = 0;
    span.dataset.fragmented = 'false';
    span.dataset.returnDelay = 0;
    labeurDiv.appendChild(span);
  });

  const spans = labeurDiv.querySelectorAll('span');
  const repulseRadius = 15;

  document.addEventListener('mousemove', (e) => {
    spans.forEach(span => {
      const rect = span.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < repulseRadius) {
        const force = (repulseRadius - dist) / repulseRadius;
        const angle = Math.atan2(dy, dx);
        let vx = parseFloat(span.dataset.vx) - Math.cos(angle) * force * 15;
        let vy = parseFloat(span.dataset.vy) - Math.sin(angle) * force * 15;
        let offsetX = parseFloat(span.dataset.offsetX) + vx;
        let offsetY = parseFloat(span.dataset.offsetY) + vy;

        span.dataset.vx = vx;
        span.dataset.vy = vy;
        span.dataset.offsetX = offsetX;
        span.dataset.offsetY = offsetY;
        span.dataset.fragmented = 'true';
        span.dataset.returnDelay = 90;

        span.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    });
  });


  animate();
});
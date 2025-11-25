// Simple carousel initializer for every [data-carousel] container.
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-carousel-track]');
  const slides = Array.from(track.children);
  const total = slides.length;
  if (!total) return;

  let index = 0;
  const dotsContainer = carousel.querySelector('[data-carousel-dots]');
  const prevBtn = carousel.querySelector('[data-carousel-prev]');
  const nextBtn = carousel.querySelector('[data-carousel-next]');

  // create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'w-2 h-2 rounded-full bg-gray-500';
    dot.addEventListener('click', () => { index = i; update(); });
    dotsContainer.appendChild(dot);
  });

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    Array.from(dotsContainer.children).forEach((d, i) => {
      d.classList.toggle('bg-neutral-50', i === index);
      d.classList.toggle('bg-neutral-600', i !== index);
    });
  }

  prevBtn?.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    update();
  });

  nextBtn?.addEventListener('click', () => {
    index = (index + 1) % total;
    update();
  });

  // initial state
  update();
});
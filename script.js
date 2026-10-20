const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const carouselTrack = document.getElementById('carouselTrack');
if (carouselTrack) {
  const slides = carouselTrack.querySelectorAll('.carousel-slide');
  const dotsWrap = document.getElementById('carouselDots');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Aller à la photo ${i + 1}`);
    dot.addEventListener('click', () => {
      slides[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.carousel-dot');

  const setActive = (index) => {
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  };

  const currentIndex = () => {
    const trackCenter = carouselTrack.scrollLeft + carouselTrack.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - trackCenter);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    return closest;
  };

  carouselTrack.addEventListener('scroll', () => setActive(currentIndex()), { passive: true });

  prevBtn.addEventListener('click', () => {
    const i = Math.max(0, currentIndex() - 1);
    slides[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });
  nextBtn.addEventListener('click', () => {
    const i = Math.min(slides.length - 1, currentIndex() + 1);
    slides[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });

  setActive(0);
}

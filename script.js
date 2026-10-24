const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const calendarEvents = document.querySelectorAll('.calendar-event');
calendarEvents.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetCard = document.getElementById(targetId);
    if (!targetCard) return;

    document.querySelectorAll('.upcoming-card.is-selected').forEach((card) => {
      card.classList.remove('is-selected');
    });
    targetCard.classList.add('is-selected');

    calendarEvents.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

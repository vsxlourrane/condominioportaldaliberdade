// Menu responsivo
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// Lazy load do mapa
document.getElementById('mapButton').addEventListener('click', () => {
  const mapContainer = document.getElementById('mapContainer');
  mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.437969233685!2d-35.260!3d-5.911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2556f43c5a9c7%3A0xabcdef!2sLiberdade%2C%20Parnamirim%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="350" style="border:0;" allowfullscreen loading="lazy"></iframe>';
});

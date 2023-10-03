document.addEventListener("DOMContentLoaded", function () {
    const gradienteScroll = document.querySelector(".scrolling-image");
    const body = document.body;
    
    window.addEventListener("scroll", function () {
      // Calcula la opacidad del gradiente basada en la posición del scroll
      const scrollPercentage = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
      const opacity = 1 - (scrollPercentage / 100);
      
      // Aplica la opacidad al gradiente
      gradienteScroll.style.opacity = opacity.toFixed(2);
    });
  });

 // Detectar el desplazamiento hacia abajo
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
      document.body.classList.add('scroll-down');
  } else {
      document.body.classList.remove('scroll-down');
  }
});


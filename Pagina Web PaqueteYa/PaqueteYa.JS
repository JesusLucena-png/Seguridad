document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // 🔹 CARRUSEL AUTOMÁTICO
  // ===============================
  let index = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("carousel_active"));
    slides[i].classList.add("carousel_active");
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }

  // Inicializar carrusel
  if (totalSlides > 0) {
    showSlide(index);
    setInterval(nextSlide, 3000); // cambia cada 3 segundos
  }

  // ===============================
  // 🔹 ANIMACIÓN MISION / VISION
  // ===============================
  const tituloMision = document.querySelector('.Titulo_MISSION');
  const tituloVision = document.querySelector('.Titulo_VISION');
  const contenedor = document.querySelector('.MISSIONVISION');

  if (tituloMision && tituloVision && contenedor) {
    tituloMision.addEventListener('click', () => {
      contenedor.style.transform = 'translateX(0)'; // vuelve a Misión
    });

    tituloVision.addEventListener('click', () => {
      contenedor.style.transform = 'translateX(-100vw)'; // muestra Visión
    });
  } 
});
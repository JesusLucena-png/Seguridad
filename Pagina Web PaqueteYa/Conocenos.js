// =============================== 
// 🔹 CONTROL DE TARJETAS
// =============================== 
function controlarActivos() { 
  const cards = document.querySelectorAll('.Targeta, .Targeta2'); 
  // 👉 En pantallas menores o iguales a 700px, desactiva todas 
  if (window.innerWidth <= 700) { 
    cards.forEach(card => card.classList.remove('activo')); 
  } 
} // Ejecutar al cargar 

controlarActivos(); 

// Escuchar resize con debounce 
let resizeTimeout; 
window.addEventListener('resize', () => { 
  clearTimeout(resizeTimeout); 
  resizeTimeout = setTimeout(controlarActivos, 150); 
}); 

// 🔹 Evento clic en tarjetas (solo escritorio, una activa a la vez) 

document.querySelectorAll('.Targeta, .Targeta2').forEach(card => { card.addEventListener('click', () => { 
  if (window.innerWidth > 700) { 
    // Quitar "activo" de todas 
    document.querySelectorAll('.Targeta, .Targeta2').forEach(c => c.classList.remove('activo')); 
    // Activar solo la que se clicó 
    card.classList.add('activo'); } }); });

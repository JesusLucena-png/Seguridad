// --------------------
// Selección de elementos
// --------------------
const Boton_Menu = document.getElementById("Boton_Menu");
const Cerrar_Menu = document.getElementById("Cerrar_Menu");
const Gradient = document.getElementById("Gradient");
const nav = document.getElementById("Nav");
const Header = document.getElementById("Header");

// --------------------
// Función para cerrar menú y submenús
// --------------------
function cerrarMenuCompleto() {
    nav.classList.remove("activo");
    Cerrar_Menu.classList.remove("activo");
    Boton_Menu.classList.remove("oculto");
    Gradient.classList.remove("active");
    Header.classList.remove("expandido");

    document.querySelectorAll('.Option-Menu').forEach(menu => {
        menu.classList.remove("Desplegar");
        menu.classList.remove("Hover");
    });
}

// --------------------
// Abrir menú hamburguesa
// --------------------
Boton_Menu.addEventListener("click", () => {
    nav.classList.add("activo");
    Cerrar_Menu.classList.add("activo");
    Boton_Menu.classList.add("oculto");
    Gradient.classList.add("active");
    Header.classList.add("expandido");

    // Cierra submenús activos
    document.querySelectorAll('.Option-Menu.Desplegar').forEach(menu => {
        menu.classList.remove("Desplegar");
    });
});

// --------------------
// Cerrar menú (clic en fondo o botón cerrar)
// --------------------
[Gradient, Cerrar_Menu].forEach(element => {
    element.addEventListener("click", cerrarMenuCompleto);
});

// --------------------
// Submenús: hover en PC / toggle en móvil
// --------------------
document.querySelectorAll('.Option-Menu').forEach(menuItem => {
    // Hover en PC
    menuItem.addEventListener('mouseenter', () => {
        if (window.innerWidth > 730) {
            menuItem.classList.add('Hover');
        }
    });

    menuItem.addEventListener('mouseleave', () => {
        if (window.innerWidth > 730) {
            menuItem.classList.remove('Hover');
        }
    });

    // Click en móviles: abrir/cerrar submenú
    menuItem.addEventListener('click', (e) => {
        if (window.innerWidth <= 730) {
            e.stopPropagation();

            const yaHover = menuItem.classList.contains('Hover');
            const yaActivo = menuItem.classList.contains("Desplegar");

            // Cierra todos
            document.querySelectorAll('.Option-Menu').forEach(el => {
                el.classList.remove('Hover', 'Desplegar');
            });

            // Aplica si no estaba activo
            if (!yaHover) menuItem.classList.add('Hover');
            if (!yaActivo) menuItem.classList.add('Desplegar');
        }
    });
});

// --------------------
// Redimensionar ventana: cerrar todo si pasa a vista PC
// --------------------
window.addEventListener('resize', () => {
    cerrarMenuCompleto();
});

// --------------------
// DOM cargado: comportamiento opcional adicional
// --------------------
document.addEventListener('DOMContentLoaded', () => {
    Boton_Menu.addEventListener('click', () => {

    });

    Cerrar_Menu.addEventListener('click', () => {
        
        
    });
});

const scrollBtn = document.getElementById('scrollToTop');

// Mostrar botón cuando el usuario baja cierto tramo
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

// Volver al inicio con desplazamiento suave
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




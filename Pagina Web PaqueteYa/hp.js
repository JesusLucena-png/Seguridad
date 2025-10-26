(function(){
  const DEBUG = true;         // pon false cuando todo funcione
  const THRESHOLD = 700;

  function log(...args){
    if (DEBUG) console.log('[cards]','\u00BB', ...args);
  }

  // Protección: arranca solo cuando DOM listo
  function init(){
    try {
      log('init');

      // función que quita activos si el ancho ≤ threshold
      function controlarActivos() {
        if (window.innerWidth <= THRESHOLD) {
          document.querySelectorAll('.Targeta, .Targeta2')
            .forEach(card => card.classList.remove('activo'));
          log('se quitaron .activo porque width <=', window.innerWidth);
        }
      }

      // Debounce simple para resize
      let resizeTimeout = null;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(controlarActivos, 150);
      });

      // Delegación de eventos: funciona aunque las tarjetas se inserten dinámicamente
      document.addEventListener('click', function(e){
        // si la pantalla no supera el umbral, no hacemos nada (pero dejamos el log si debug)
        if (window.innerWidth <= THRESHOLD) {
          if (DEBUG) log('click ignorado por width ≤', window.innerWidth);
          return;
        }

        const card = e.target.closest('.Targeta, .Targeta2');
        if (!card) return; // clic fuera de tarjetas

        // Prevención: si hay un overlay que captura clicks, esto seguirá ejecutándose
        document.querySelectorAll('.Targeta, .Targeta2').forEach(c => c.classList.remove('activo'));
        card.classList.add('activo');
        log('activada tarjeta:', card);
      }, true); // usar capture true ayuda a que nuestro handler corra antes si algo hace stopPropagation

      // Ejecutar la primera vez
      controlarActivos();

      // Informar cuántas tarjetas detectó
      log('tarjetas detectadas:', document.querySelectorAll('.Targeta, .Targeta2').length);
    } catch (err) {
      console.error('[cards] error en init:', err);
    }
  }

  // Si ya estamos listos, iniciar; si no, esperar DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Opcional: atrapar errores globales para ver si otro script está fallando
  window.addEventListener('error', function(ev){
    console.error('[cards] error global detectado:', ev.message, 'en', ev.filename, 'línea', ev.lineno);
  });
})();

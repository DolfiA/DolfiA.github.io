// CUENTA REGRESIVA

// Establecer la fecha y hora del evento
const eventDate = new Date('2025-08-09T09:00:00').getTime();

function countdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const countdownElement = document.getElementById("countdown");

  if (!countdownElement) return;

  if (timeLeft <= 0) {
    countdownElement.innerHTML = "<strong>¡El evento ha comenzado!</strong>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Ejecutar y actualizar cada segundo
setInterval(countdown, 1000);
countdown(); // Ejecutar inmediatamente



// ALERTA POLITICAS DE PRIVACIDAD
window.addEventListener('load', function () {
  const alertBox = document.getElementById('customAlert');
  const btnAceptar = alertBox.querySelector('button.btn-primary'); // botón "Aceptar"
  const btnLeerPoliticas = alertBox.querySelector('a.btn-primary'); // botón "Leer políticas"
  const overlay = document.getElementById('overlayBlur');

  // Mostrar alerta y overlay al cargar la página
  alertBox.style.display = 'block';
  overlay.style.display = 'block';

  // Función para ocultar alerta y overlay
  function hideAlert() {
    alertBox.style.display = 'none';
    overlay.style.display = 'none';
  }

  // Al aceptar: ocultar alerta y overlay para que usuario pueda leer el contenido
  btnAceptar.addEventListener('click', () => {
    hideAlert();
  });

  // Al leer políticas: ocultar alerta y overlay y hacer scroll a la sección
  btnLeerPoliticas.addEventListener('click', (e) => {
    e.preventDefault();
    hideAlert();
    const seccionPoliticas = document.getElementById('politicas');
    if (seccionPoliticas) {
      seccionPoliticas.scrollIntoView({ behavior: 'smooth' });
    }
  });

});
document.getElementById("enlaceTerminos").addEventListener("click", function (e) {
  e.preventDefault(); // evita que recargue la página
  const modal = new bootstrap.Modal(document.getElementById("modalTerminos"));
  modal.show();
});



// MODO OSCURO 

// Función para alternar el modo oscuro
function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');

  // Guardar la preferencia en localStorage
  localStorage.setItem('darkMode', isDarkMode);

  // Actualizar el texto del botón
  const button = document.getElementById('dark-mode-toggle');
  button.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
}

// Aplicar el modo oscuro al cargar la página si está guardado
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = 'Modo Claro';
  }
});
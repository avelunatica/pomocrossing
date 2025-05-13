const playPauseBtn = document.getElementById('playPauseBtn');
const musicBtn = document.getElementById('musicBtn');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const overlay = document.getElementById('overlay');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const modeButtons = document.querySelectorAll('.mode');
const themeSelect = document.getElementById('themeSelect');
const bgVideo = document.getElementById('bgVideo');

let isPlaying = false;
let musicOn = true;

// Toggle de reproducción
playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playPauseBtn.querySelector('img').src = isPlaying
    ? 'assets/icons/pause.svg'
    : 'assets/icons/play.svg';
});

// Toggle de música
musicBtn.addEventListener('click', () => {
  musicOn = !musicOn;
  musicBtn.querySelector('img').src = musicOn
    ? 'assets/icons/musicon.svg'
    : 'assets/icons/musicoff.svg';
});

// Mostrar panel de configuración
settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Cerrar el panel con la X
closeSettings.addEventListener('click', () => {
  settingsPanel.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Cerrar el panel al hacer clic fuera
overlay.addEventListener('click', () => {
  settingsPanel.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Gestión de pestañas
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const selected = tab.getAttribute('data-tab');
    tabContents.forEach(content => {
      content.classList.toggle('hidden', content.id !== selected);
    });
  });
});

// Activar botón Pomodoro / Descanso
modeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Cambiar video de fondo según el tema seleccionado
themeSelect.addEventListener('change', () => {
  const theme = themeSelect.value;
  switch (theme) {
    case 'leaf':
      bgVideo.src = 'assets/backgrounds/Leaf.mp4';
      break;
    case 'countryside':
      bgVideo.src = 'assets/backgrounds/Countryside.mp4';
      break;
    case 'space':
      bgVideo.src = 'assets/backgrounds/SpaceBackground.mp4';
      break;
    default:
      bgVideo.src = '';
  }
});

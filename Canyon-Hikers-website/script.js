// Audio: play only after the visitor presses the button.
const audio = document.querySelector('#ambience');
const audioButton = document.querySelector('#audio-toggle');
const player = document.querySelector('.audio-player');
const status = document.querySelector('#audio-status');
function updateAudio() {
  const playing = !audio.paused;
  player.classList.toggle('playing', playing);
  audioButton.setAttribute('aria-pressed', String(playing));
  audioButton.setAttribute('aria-label', playing ? 'Pause canyon ambience' : 'Play canyon ambience');
}
audioButton.addEventListener('click', async () => {
  if (!audio.paused) audio.pause();
  else {
    try { audio.volume = 0.5; await audio.play(); status.textContent = ''; }
    catch { status.textContent = 'Audio could not be played.'; }
  }
});
audio.addEventListener('play', updateAudio);
audio.addEventListener('pause', updateAudio);
// Responsive navigation.
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
  link.classList.add('active'); closeMenu();
}));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
// Image credits dialog.
const credits = document.querySelector('#credits');
document.querySelector('#credits-button').addEventListener('click', () => credits.showModal());

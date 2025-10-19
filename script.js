const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const bgMusic = document.getElementById('bgMusic');

envelope.addEventListener('click', () => {
  envelope.classList.add('hidden');

  card.classList.remove('hidden');

  bgMusic.play().catch(() => {
    alert("Hãy bấm cho phép trình duyệt phát nhạc 🎵");
  });

  startConfetti();
});

function startConfetti() {
  const colors = ['#ff6699', '#ffd700', '#87ceeb', '#98fb98'];
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
.confetti {
  position: fixed;
  width: 8px;
  height: 8px;
  top: -10px;
  animation: fall linear forwards;
  z-index: 999;
  border-radius: 50%;
}
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

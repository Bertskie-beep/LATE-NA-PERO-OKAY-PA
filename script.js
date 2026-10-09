const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");
const symbols = ["✦", "✿", "♡", "❀", "✧", "☘"];
let surpriseOpened = false;

surpriseButton.addEventListener("click", () => {
  surpriseOpened = !surpriseOpened;
  surprise.hidden = !surpriseOpened;
  surpriseButton.setAttribute("aria-expanded", String(surpriseOpened));
  surpriseButton.innerHTML = surpriseOpened
    ? '<span>♡</span> Close the little surprise <span>♡</span>'
    : '<span>✦</span> Open a little birthday surprise <span>✦</span>';

  if (surpriseOpened) {
    sprinkleConfetti();
    surprise.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

function sprinkleConfetti() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  for (let i = 0; i < 28; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.animationDuration = `${1.8 + Math.random() * 1.5}s`;
    piece.style.color = ["#76549a", "#a6b77b", "#bca6d5", "#8e9b70"][i % 4];
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  }
}

// Character counter + prompt cap (Regular 450 by default)
const promptInput = document.getElementById("promptInput");
const charCount   = document.getElementById("charCount");

if (promptInput && charCount) {
  const MAX = 450; // change to 1000 when Max Mode toggled
  const updateCount = () => {
    if (promptInput.value.length > MAX) {
      promptInput.value = promptInput.value.slice(0, MAX);
    }
    charCount.textContent = `${promptInput.value.length} / ${MAX}`;
  };
  promptInput.addEventListener("input", updateCount);
  updateCount();
}

// Loading overlay simulation + percentage tick
function generateVideo() {
  const overlay = document.getElementById("loadingScreen");
  const pct     = document.getElementById("loaderPct");
  const ring    = document.querySelector(".ring");

  if (!overlay) return;
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");

  let progress = 0;
  const timer = setInterval(() => {
    progress = Math.min(100, progress + Math.floor(Math.random() * 7) + 2);
    pct.textContent = progress + "%";
    // ring spins via CSS; we just tick %
    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        overlay.classList.add("hidden");
        overlay.setAttribute("aria-hidden", "true");
        alert("Video ready! Fading into ‘ByBenji’ now.");
      }, 400);
    }
  }, 120);
}

// Spin wheel (25% win)
function spinWheel() {
  const wheel  = document.getElementById("wheel");
  const result = document.getElementById("wheelResult");
  if (!wheel || !result) return;

  // Random spin angle 3–6 full turns plus 0–360
  const baseTurns = Math.floor(Math.random() * 3) + 3;
  const extra     = Math.floor(Math.random() * 360);
  const angle     = baseTurns * 360 + extra;

  wheel.style.transition = "transform 1.2s cubic-bezier(.17,.67,.32,1.3)";
  wheel.style.transform  = `rotate(${angle}deg)`;

  // Decide win/lose
  const win = Math.random() < 0.25;
  setTimeout(() => {
    result.textContent = win ? "🎉 You won a Free Prompt Video!" : "🙁 Try Again Later.";
  }, 1250);
}
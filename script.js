// CHARACTER COUNTER
const input = document.getElementById("promptInput");
const charCount = document.getElementById("charCount");

input.addEventListener("input", () => {
  charCount.textContent = `${input.value.length} / 450`;
});

// VIDEO GENERATION LOADING SIMULATION
function generateVideo() {
  document.getElementById("loadingScreen").style.display = "block";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    document.getElementById("progressCircle").style.transform = `rotate(${progress * 3.6}deg)`;
    
    if (progress >= 100) {
      clearInterval(interval);
      alert("✅ Video ready! Fading into 'ByBenji' now.");
      document.getElementById("loadingScreen").style.display = "none";
    }
  }, 100);
}

// SPIN WHEEL FEATURE (25% CHANCE)
function spinWheel() {
  const outcome = Math.random();
  const result = document.getElementById("wheelResult");

  if (outcome < 0.25) {
    result.textContent = "🎉 You won a Free Prompt Video!";
  } else {
    result.textContent = "🙁 Try Again Later.";
  }
}
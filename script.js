document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generate-btn");
  const statusText = document.getElementById("status-text");
  const progressCircle = document.querySelector(".progress-circle");

  generateBtn.addEventListener("click", function () {
    let percent = 0;
    statusText.textContent = "BenjiBot is creating your video...";

    const interval = setInterval(() => {
      percent += 1;
      progressCircle.style.background = `conic-gradient(#00ffcc ${percent * 3.6}deg, #222 0deg)`;
      if (percent >= 100) {
        clearInterval(interval);
        statusText.textContent = "Video is ready! 🎬";
        // Optional: Redirect or display sample.mp4
        setTimeout(() => {
          window.location.href = "sample.mp4"; // Replace this with actual video result later
        }, 1000);
      }
    }, 50);
  });
});
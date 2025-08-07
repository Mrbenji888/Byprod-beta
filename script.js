/* GLOBAL STYLES */
body {
  margin: 0;
  padding: 0;
  background-color: #000;
  color: white;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

/* HEADER */
header {
  padding: 40px 20px 20px;
}

h1 {
  font-size: 2.5em;
  background: linear-gradient(90deg, #ff0040, #00f0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1em;
  color: #ccc;
}

/* MAIN CONTENT */
main {
  padding: 20px;
}

.prompt-section input {
  width: 90%;
  max-width: 400px;
  padding: 15px;
  border-radius: 10px;
  background: #111;
  color: white;
  border: 1px solid #333;
  font-size: 1em;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  margin-bottom: 10px;
}

.prompt-section button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff0040, #00f0ff);
  color: white;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
}

#charCount {
  margin-top: 5px;
  font-size: 0.9em;
  color: #aaa;
}

/* LOADING SCREEN */
#loadingScreen {
  display: none;
  margin-top: 30px;
}

.progress-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #222;
  border-top: 5px solid #00f0ff;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* SPIN WHEEL */
.spin-wheel-section {
  margin-top: 40px;
}

.spin-wheel-section button {
  margin-top: 10px;
  padding: 10px 20px;
  background: #222;
  color: #0ff;
  border: 1px solid #0ff;
  border-radius: 6px;
}

#wheelResult {
  margin-top: 10px;
  font-size: 1.2em;
}

/* VIDEO PREVIEW */
.video-preview {
  margin-top: 40px;
}

.video-preview img {
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 0, 100, 0.3);
  margin-bottom: 10px;
}

.watermark {
  font-size: 12px;
  color: #aaa;
  text-align: right;
  margin-right: 10px;
}

/* CREDIT SECTION */
.credits {
  margin-top: 30px;
}

.buy-btn,
.compare-btn {
  margin-top: 10px;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 1em;
  border: none;
  cursor: pointer;
}

.buy-btn {
  background: #ff0040;
  color: white;
  margin-right: 10px;
}

.compare-btn {
  background: transparent;
  border: 1px solid white;
  color: white;
}

/* FOOTER */
footer {
  margin-top: 60px;
  font-size: 0.8em;
  color: #777;
}

.fine-print {
  margin-top: 5px;
  font-size: 0.7em;
  color: #555;
}
body {
  margin: 0;
  background-color: #000;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

.container {
  padding: 20px;
  text-align: center;
}

textarea {
  width: 90%;
  height: 120px;
  background-color: #111;
  border: 1px solid #444;
  color: white;
  padding: 10px;
  resize: none;
  font-size: 16px;
  border-radius: 6px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

#loadingScreen {
  display: none;
  margin-top: 40px;
  text-align: center;
}

.progress-circle {
  width: 60px;
  height: 60px;
  border: 6px solid #00f;
  border-top: 6px solid red;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
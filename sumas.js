let num1, num2;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  document.getElementById("question").textContent = `¿Cuánto es ${num1} + ${num2}?`;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === num1 + num2) {
    document.getElementById("result").textContent = "✅ ¡Correcto!";
    score++;
  } else {
    document.getElementById("result").textContent = "❌ Incorrecto. Intenta otra.";
  }
  document.getElementById("score").textContent = score;
  generateQuestion();
}

// Iniciar el juego
generateQuestion();

let num1, num2;
let score = 0;

function getDifficultyRange(score) {
  if (score < 5) {
    return [1, 9]; // 1 dígito
  } else if (score < 10) {
    return [10, 99]; // 2 dígitos bajos
  } else {
    return [100, 999]; // 3 dígitos
  }
}

function generateQuestion() {
  const [min, max] = getDifficultyRange(score);
  num1 = getRandomInt(min, max);
  num2 = getRandomInt(min, max);

  document.getElementById("question").textContent = `¿Cuánto es ${num1} + ${num2}?`;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = num1 + num2;

  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "✅ ¡Correcto!";
    score++;
  } else {
    document.getElementById("result").textContent = `❌ Incorrecto. La respuesta correcta era ${correctAnswer}.`;
  }

  document.getElementById("score").textContent = score;

  setTimeout(generateQuestion, 1500);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Iniciar el juego
generateQuestion();

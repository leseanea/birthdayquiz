function startQuiz() {
  window.location.href = "mission1.html"; // Redirect to the first mission page
}

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  const interval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      alert("Время вышло! Переходим к следующей миссии.");
      window.location.href = "mission2.html";
    }
  }, 1000);
}

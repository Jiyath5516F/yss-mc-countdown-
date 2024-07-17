function startCountdown(endTime) {
  function updateCountdown() {
    let now = new Date().getTime();
    let distance = endTime - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = "EXPIRED";
      return;
    }

    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateCountdown();
  let countdownInterval = setInterval(updateCountdown, 1000);
}

let endDate = new Date("2024-07-17T22:08:00+05:30");
window.onload = function () {
  startCountdown(endDate.getTime());
};

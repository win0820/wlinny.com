// Assuming you have a function to update the countdown dynamically
function updateCountdown(days, hours, minutes, seconds) {
  document.querySelector('.daysCountdown').textContent = days < 10 ? '0' + days : days;
  document.querySelector('.hoursCountdown').textContent = hours < 10 ? '0' + hours : hours;
  document.querySelector('.minutesCountdown').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.querySelector('.secondsCountdown').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Example usage:
setInterval(function() {
  // Call your function or countdown logic here
  const now = new Date().getTime();
  const eventDate = new Date("2024-10-01").getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateCountdown(days, hours, minutes, seconds);
}, 1000); // Update every second

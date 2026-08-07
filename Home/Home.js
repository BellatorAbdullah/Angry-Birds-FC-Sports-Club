document.addEventListener("DOMContentLoaded", function() {

  // 1. HOME PAGE CATALOG LOGIC
  // Wrapped in an 'if' check so it doesn't crash on other pages!
  const track = document.querySelector('.catalog-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  // 2. SIGNUP FORM LOGIC
  const signupForm = document.getElementById("Signup");
  if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents page reload
      alert("Welcome to the club!");
      signupForm.reset();
    });
  }

  // 3. LOGIN FORM LOGIC
  const loginForm = document.getElementById("Login");
  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents page reload
      alert("Welcome back!");
      loginForm.reset();
    });
  }

});

// Match date: August 15, 2026 at 15:00
const matchDate = new Date("August 15, 2026 15:00:00").getTime();

function startTimer() {
  const now = new Date().getTime();
  const timeDiff = matchDate - now;

  // Calculate days, hours, mins, secs
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Update HTML text
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

// Update timer every 1 second
setInterval(startTimer, 1000);
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

  // grabbing the bits we need
  var heroVideo = document.getElementById('heroVideo');
  var heroSection = document.getElementById('heroSection')

  // if theres no actual video file sitting next to the html, the browser fires an error event
  // on the video tag. when that happens just add a class so the CSS gradient shows instead
  heroVideo.addEventListener('error', function() {
    heroSection.classList.add('no-video');
    console.log('no hero video found, using the gradient fallback instead');
  });

  // TODO: maybe pause the video when the hero scrolls off screen so it's not
  // just running in the background forever, dont think its a big deal for now tho

  // Grabs both forms on the page
  const enquiryForm = document.querySelector('.enquiry-section:nth-of-type(1) form');
  const feedbackForm = document.querySelector('.enquiry-section:nth-of-type(2) form');

  // Enquiry form
  enquiryForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stops the page from actually reloading/submitting to "#"
    alert('Thank you for your enquiry! We\'ll get back to you soon.');
    enquiryForm.reset(); // clears the form after submitting
  });

  // Feedback form
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your feedback! We really appreciate it.');
    feedbackForm.reset();
  });
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll (optional if using anchors)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Handle Get Started button (redirect to login/signup/detect)
  const getStartedBtn = document.querySelector(".btn-primary");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "login.html"; // or 'signup.html' or 'detect

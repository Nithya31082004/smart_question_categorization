document.addEventListener("DOMContentLoaded", () => {
  // Navigation Button Highlight (if needed in future)
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Handle Detect Module button
  const detectBtn = document.querySelector(".detect-module-btn");
  if (detectBtn) {
    detectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "detect.html"; // Update to actual detection page
    });
  }

  // Optional: Scroll animation if using internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

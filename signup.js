document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const userIdInput = document.getElementById("userId");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("remember");

  // Load remembered user ID
  const savedUserId = localStorage.getItem("rememberedUserId");
  if (savedUserId) {
    userIdInput.value = savedUserId;
    rememberCheckbox.checked = true;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userId = userIdInput.value.trim();
    const password = passwordInput.value;

    // Basic validation
    if (!userId || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (rememberCheckbox.checked) {
      localStorage.setItem("rememberedUserId", userId);
    } else {
      localStorage.removeItem("rememberedUserId");
    }

    // Fake submit logic (replace with real backend logic)
    console.log("User ID:", userId);
    console.log("Password:", password);

    alert("Sign-up successful! 🎉");

    form.reset();
  });
});

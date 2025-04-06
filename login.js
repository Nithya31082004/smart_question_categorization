document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const userIdInput = document.getElementById("userId");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("remember");

  // Load remembered user ID
  const savedUserId = localStorage.getItem("rememberedLoginId");
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
      alert("Please enter both User ID and Password.");
      return;
    }

    if (rememberCheckbox.checked) {
      localStorage.setItem("rememberedLoginId", userId);
    } else {
      localStorage.removeItem("rememberedLoginId");
    }

    // Placeholder logic for login (replace with actual login handling)
    console.log("Login User ID:", userId);
    console.log("Login Password:", password);

    alert("Login successful! ✅");
    form.reset();
  });
});

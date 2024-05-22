document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = "/protected-content";
        } else {
          errorMessage.style.display = "block";
          errorMessage.textContent = data.message;
        }
      })
      .catch((error) => {
        errorMessage.style.display = "block";
        errorMessage.textContent = "An error occurred. Please try again.";
      });
  });

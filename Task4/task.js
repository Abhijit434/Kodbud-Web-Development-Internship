document.getElementById("jobForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let result = document.getElementById("result");

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phonePattern = /^[0-9]{10}$/;

  if (!name || !email || !phone || !message) {
    result.textContent = "Please fill in all fields.";
    result.className = "error";
  } else if (!emailPattern.test(email)) {
    result.textContent = "Please enter a valid email.";
    result.className = "error";
  } else if (!phonePattern.test(phone)) {
    result.textContent = "Enter a valid 10-digit phone number.";
    result.className = "error";
  } else {
    result.textContent = "Application submitted successfully!";
    result.className = "success";
    document.getElementById("jobForm").reset();
  }
});


const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const password1Input = document.getElementById("password1");
const password2Input = document.getElementById("password2");
const errorMessage = document.getElementById("message");
const successMessage = document.getElementById("success");
const phoneNumberPattern = /^[0-9]{10}$/;


function formValid() {
    let valid = true;
    if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim() || !password1Input.value.trim() || !password2Input.value.trim()) {
        valid = false;
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please fill in all fields.";
    } else if (password1Input.value !== password2Input.value) {
        valid = false;
        errorMessage.style.display = "block";
        errorMessage.innerText = "Passwords do not match.";
    } else {
        errorMessage.style.display = "none";
    }
    return valid
    
}
phoneInput.addEventListener("input", function() {
  if (phoneNumberPattern.test(phoneInput.value)) {
      phoneInput.setCustomValidity("");
  } else {
      phoneInput.setCustomValidity("Please enter a valid 10-digit phone number");
  }
});


// Password strength meter

  password1Input.addEventListener("input", () => {
    const password = password1Input.value;
    const strengthMeter = document.getElementById("password-strength-meter");
    const strengthText = document.getElementById("password-strength-text");
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/;
    
    if (strongRegex.test(password)) {
        strengthMeter.value = 4;
        strengthText.innerText = "Strong";
        strengthText.style.color = "green";

    } else if (mediumRegex.test(password)) {
        strengthMeter.value = 2;
        strengthText.innerText = "Medium";
        strengthText.style.color = "orange";
        
    } else {
        strengthMeter.value = 1;
        strengthText.innerText = "Weak";
        strengthText.style.color = "red";
       
    }
});

function getStrength(password) {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const mediumRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/;

  if (strongRegex.test(password)) {
      return "strong";
  } else if (mediumRegex.test(password)) {
      return "medium";
  } else {
      return "weak";
  }
}


// Clear password 
form.addEventListener("reset", () => {
    const strengthMeter = document.getElementById("password-strength-meter");
    const strengthText = document.getElementById("password-strength-text");
    strengthMeter.value = 0;
    strengthText.innerText = "";
    strengthText.style.color = "";
});
document.addEventListener("DOMContentLoaded", function() {
  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const password = password1Input.value; // Get the password value
      const passwordStrength = getStrength(password); // Pass the password to the function
      console.log(passwordStrength);

      if (passwordStrength === "weak") {
          errorMessage.style.display = "block";
          errorMessage.innerText = "Please choose a stronger password.";
          return 0;
      }

      if (formValid()) {
          window.location.href = "success.html";
          return;
      }
  });
});

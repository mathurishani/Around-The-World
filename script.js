// Handle Toggle Menu
// Get the navigation links element
var navLinks = document.getElementById("navLinks");

// Function to show the navigation menu
function showMenu() {
  navLinks.style.right = "0";
}

// Function to hide the navigation menu
function hideMenu() {
  navLinks.style.right = "-200px";
}


// Handle card click event to navigate to the target page
function cardClick(event) {
  const card = event.target.closest(".card");

  if (card) {
    const targetPage = card.dataset.targetPage;
    if (targetPage) {
      window.location.href = targetPage;
    }
  }
}


// Validate the contact form
function validate() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  // Clear previous validation messages
  ["nvalidate", "evalidate", "svalidate", "mvalidate"].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });

  let isError = false;

  if (name === "") {
    document.getElementById("nvalidate").innerHTML = "Please enter your name";
    isError = true;
  }

  if (email === "") {
    document.getElementById("evalidate").innerHTML = "Please enter your email";
    isError = true;
  } else if (!emailPattern.test(email)) {
    document.getElementById("evalidate").innerHTML = "Invalid email format.";
    isError = true;
  }

  if (subject === "") {
    document.getElementById("svalidate").innerHTML = "Please enter subject";
    isError = true;
  }

  if (message === "") {
    document.getElementById("mvalidate").innerHTML = "Please enter your message";
    isError = true;
  }

  if (!isError) {
    alert("Your message has been submitted");
  }
}


// Validate login credentials
function validateLogin() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  // Clear previous validation messages
  ["loginUsernameValidate", "loginPasswordValidate"].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });

  let isError = false;

  if (username === "") {
    document.getElementById("loginUsernameValidate").innerHTML = "Please enter user name";
    isError = true;
  }

  if (password === "") {
    document.getElementById("loginPasswordValidate").innerHTML = "Please enter password";
    isError = true;
  }

  if (!isError) {
    alert("LOGIN SUCCESSFUL. WELCOME " + username);
  }
}

// Validate registration details
function validateRegistration() {
  let username = document.getElementById("registerUsername").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("registerPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Clear previous validation messages
  [
    "registerUsernameValidate",
    "registerEmailValidate",
    "registerPasswordValidate",
    "registerCPasswordValidate",
  ].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });

  let isError = false;

  if (username === "") {
    document.getElementById("registerUsernameValidate").innerHTML = "Please enter user name";
    isError = true;
  }

  if (email === "") {
    document.getElementById("registerEmailValidate").innerHTML = "Please enter email";
    isError = true;
  } else if (!emailPattern.test(email)) {
    document.getElementById("registerEmailValidate").innerHTML = "Invalid email format.";
    isError = true;
  }

  if (password === "") {
    document.getElementById("registerPasswordValidate").innerHTML = "Please enter password";
    isError = true;
  }

  if (confirmPassword === "") {
    document.getElementById("registerCPasswordValidate").innerHTML = "Please enter password again";
    isError = true;
  } else if (password !== confirmPassword) {
    document.getElementById("registerCPasswordValidate").innerHTML = "Passwords do not match";
    isError = true;
  }

  if (!isError) {
    alert("Registration Successful");
  }
}


// Toggle between register and login forms
function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "flex";
}

function showLoginForm() {
  document.getElementById("loginForm").style.display = "flex";
  document.getElementById("registerForm").style.display = "none";
}


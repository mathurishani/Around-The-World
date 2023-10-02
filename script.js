const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

function cardClick(event) {
  const card = event.target.closest(".card");

  if (card) {
    const targetPage = card.dataset.targetPage;
    if (targetPage) {
      window.location.href = targetPage;
    }
  }
}

function validate() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let s = document.getElementById("subject").value;
  let m = document.getElementById("message").value;
  let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  ["nvalidate", "evalidate", "svalidate", "mvalidate"].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });
  let isError = false;
  if (n == "") {
    document.getElementById("nvalidate").innerHTML = "Please enter your name";
    isError = true;
  }
  if (e == "") {
    document.getElementById("evalidate").innerHTML = "Please enter your email";
    isError = true;
  } else if (!pattern.test(e)) {
    document.getElementById("evalidate").innerHTML = "Invalid email format.";
    isError = true;
  }
  if (s == "") {
    document.getElementById("svalidate").innerHTML = "Please enter subject";
    isError = true;
  }
  if (m == "") {
    document.getElementById("mvalidate").innerHTML =
      "Please enter your message";
    isError = true;
  }

  if (!isError) {
    alert("Your message has been submitted");
  }
}

function validateLogin() {
  let u = document.getElementById("loginUsername").value;
  let p = document.getElementById("loginPassword").value;
  ["loginUsernameValidate", "loginPasswordValidate"].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });
  let isError = false;
  if (u == "") {
    document.getElementById("loginUsernameValidate").innerHTML =
      "Please enter user name";
    isError = true;
  }
  if (p == "") {
    document.getElementById("loginPasswordValidate").innerHTML =
      "Please enter password";
    isError = true;
  }

  if (!isError) {
    alert("LOGIN SUCCESSFUL. WELCOME " + u);
  }
}

function validateRegistration() {
  let u = document.getElementById("registerUsername").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("registerPassword").value;
  let c = document.getElementById("confirmPassword").value;
  let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  [
    "registerUsernameValidate",
    "registerEmailValidate",
    "registerPasswordValidate",
    "registerCPasswordValidate",
  ].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });
  let isError = false;
  if (u == "") {
    document.getElementById("registerUsernameValidate").innerHTML =
      "Please enter user name";
    isError = true;
  }
  if (e == "") {
    document.getElementById("registerEmailValidate").innerHTML =
      "Please enter email";
    isError = true;
  } else if (!pattern.test(e)) {
    document.getElementById("registerEmailValidate").innerHTML =
      "Invalid email format.";
    isError = true;
  }
  if (p == "") {
    document.getElementById("registerPasswordValidate").innerHTML =
      "Please enter password";
    isError = true;
  }
  if (c == "") {
    document.getElementById("registerCPasswordValidate").innerHTML =
      "Please enter password again";
    isError = true;
  } else if (p !== c) {
    document.getElementById("registerCPasswordValidate").innerHTML =
      "Passwords do not match";
    isError = true;
  }
  if (!isError) {
    alert("Registration Successful");
  }
}
function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "flex";
}
function showLoginForm() {
  document.getElementById("loginForm").style.display = "flex";
  document.getElementById("registerForm").style.display = "none";
}

function filterContent() {
  const searchInput = document.getElementById("searchInput");
  const filter = searchInput.value.toLowerCase();
  const contentList = document.getElementById("contentList");
  const items = contentList.getElementsByTagName("li");

  for (const item of items) {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}

function performSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== "") {
    // For demonstration purposes, an alert is shown with the search term
    alert(`Performing search for: ${searchTerm}`);
  } else {
    alert("Please enter a search term.");
  }
}

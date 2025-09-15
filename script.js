// ----------------------------
// Part 1: Event Handling
// ----------------------------

// Theme toggle button
const themeToggleBtn = document.getElementById("themeToggleBtn");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ----------------------------
// Part 2: Interactive Features
// ----------------------------

// 1. FAQ collapsible (implemented above)
// 2. Dynamic message on form focus
const nameInput = document.getElementById("name");
nameInput.addEventListener("focus", () => {
  console.log("User is typing their name");
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------

const regForm = document.getElementById("regForm");
const formMessage = document.getElementById("formMessage");

regForm.addEventListener("submit", function(e){
  e.preventDefault(); // prevent form submission

  // Clear previous message
  formMessage.textContent = "";
  formMessage.style.color = "red";

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation flags
  let isValid = true;

  // Name validation
  if(name.length < 3){
    formMessage.textContent += "Name must be at least 3 characters. ";
    isValid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailPattern.test(email)){
    formMessage.textContent += "Invalid email format. ";
    isValid = false;
  }

  // Password validation
  if(password.length < 6){
    formMessage.textContent += "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success message
  if(isValid){
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully! Welcome, " + name + "!";
    regForm.reset();
  }
});

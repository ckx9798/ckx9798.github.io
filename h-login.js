const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector("#id");
const pwInput = document.querySelector("#pw");
const hiddenTodo = document.querySelector("#todo_form");
const HelloUser = document.querySelector("#login__success");

const HIDDEN_CLASNAME = "hidden";

// function paintGreeting(userName) {
//   hiddenH1.innerText = `Hello, ${userName}`;
//   hiddenH1.classList.remove(HIDDEN_CLASNAME);
// }

// const userId = localStorage.getItem("id");
// if (userId === null) {
//   loginForm.classList.remove(HIDDEN_CLASNAME);
// } else {
//   hiddenH1.classList.remove(HIDDEN_CLASNAME);
//   paintGreeting(userId);
// }

function handleLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASNAME);
  const userName = loginInput.value;
  localStorage.setItem("id", userName);
  hiddenTodo.classList.remove(HIDDEN_CLASNAME);
  HelloUser.innerText = `Hello ${userName}!!`;
  // paintGreeting(userName);
}

loginForm.addEventListener("submit", handleLoginSubmit);

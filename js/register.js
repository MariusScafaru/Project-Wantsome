// Register Section
let register_user = document.getElementById("register_user");
let login = document.getElementById("login");
let registerUser = JSON.parse(localStorage.getItem("registerUser"));

function change() {
  window.localStorage.removeItem("registerUser");
  location.href = "../landPage.html";
}

function register() {
  if (localStorage.getItem("registerUser")) {
    register_user.textContent = "Hello, " + " " + registerUser.firstName + " !";
    register_user.removeAttribute("href");
    register_user.style.cursor = "default";
    login.textContent = "Logout";
    login.setAttribute("href", "../landPage.html");
    login.addEventListener("click", change);
  } else {
    register_user.textContent = "Register";
    register_user.setAttribute("href", "../sign_up.html");
    login.textContent = "Login";
    register_user.style.cursor = "pointer";
    login.setAttribute("href", "../sign_in.html");
    localStorage.removeItem("cart");
  }
}
register();

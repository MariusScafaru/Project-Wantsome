let form = document.querySelector("form");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let city = document.getElementById("city");
let country = document.getElementById("country");
let email = document.getElementById("email");
let password = document.getElementById("password");

function logIn(event) {
  let users = JSON.parse(localStorage.getItem("userDetails")) || [];
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    city: city.value,
    country: country.value,
    email: email.value,
    password: password.value,
    id: users.length,
  };
  const emailRegex =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
  let exist =
    users.length &&
    JSON.parse(localStorage.getItem("userDetails")).some(
      (data) => data.email === user.email
    );
  if (!exist) {
    if (!user.email.match(emailRegex)) {
      alert("Invalid email!");
      event.preventDefault();
    } else if (user.password.length < 4) {
      alert("At least 4 characters needed!");
      event.preventDefault();
    } else {
      users.push(user);
      localStorage.setItem("userDetails", JSON.stringify(users));
      form.reset();
    }
  } else {
    alert("Email address already in use!");
    event.preventDefault();
  }
}

form.addEventListener("submit", logIn);

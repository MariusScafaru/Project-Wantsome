let form = document.querySelector("form");
let users = JSON.parse(localStorage.getItem("userDetails"));

function signIn(event) {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let userId = -1;

  if (localStorage.getItem("userDetails")) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        userId = users[i].id;
        localStorage.setItem("registerUser", JSON.stringify(users[i]));
        break;
      }
    }

    if (userId === -1) {
      alert("Wrong credentials");
      event.preventDefault();
    }
  } else {
    alert("Wrong credentials");
    event.preventDefault();
  }
}

form.addEventListener("submit", signIn);

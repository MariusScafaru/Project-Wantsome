function validlogin(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
}
var entriesJSON = localStorage.getItem("allEntries");
if (!entriesJSON) {
  alert("Nothing stored!");
  event.preventDefault();
  return;
}
var allEntries = JSON.parse(entriesJSON);
for (var i = 0; i < allEntries.length; i++) {
  var entry = allEntries[i];
  var storedUserName = entry.user;
  var storedPassWord = entry.pass;
  if (username == storedUserName && password == storedPassWord) {
    alert("Successfully logged in!");
    return;
  }
  alert("Invalid Username or Password! Please try again.");
  event.preventDefault();
  window.location = "Login.html";
}

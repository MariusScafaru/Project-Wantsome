const input = document.getElementById("myInput");
const btn = document.getElementById("myButton");
const deleteBtn = document.getElementById("delete");

const btnClick = () => {
  sessionStorage.setItem("key1", input.value);
};

btn.addEventListener("click", btnClick);

deleteBtn.addEventListener("click", () => {
  sessionStorage.clear();
});

if (sessionStorage.getItem("key1")) {
  alert(sessionStorage.getItem("key1"));
}

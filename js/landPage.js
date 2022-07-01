// Search Here Option

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

// Remove Search when scroll

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

// Exclusive Products Filter

let filterBtn = document.querySelectorAll(".filter-buttons .buttons");
let filterItem = document.querySelectorAll(".products .box-container .box");

filterBtn.forEach((button) => {
  button.onclick = () => {
    filterBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-filter");

    filterItem.forEach((item) => {
      item.classList.remove("active");
      item.classList.add("hide");

      if (item.getAttribute("data-item") == dataFilter || dataFilter == "all") {
        item.classList.remove("hide");
        item.classList.add("active");
      }
    });
  };
});

var burger = document.getElementById("bars");
var mobile = document.getElementById("mobile");

burger.addEventListener("click", function () {
  if (mobile.style.display === "block") {
    mobile.style.display = "none";
  } else {
    mobile.style.display = "block";
  }
});
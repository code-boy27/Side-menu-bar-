var side_bar = document.getElementById("side_bar");
var btn = document.getElementById("logo");

btn.addEventListener("click", function () {
  if (side_bar.classList.contains("show")) {
    side_bar.classList.add("hide");
    side_bar.classList.remove("show");
  } else {
    side_bar.classList.remove("hide");
    side_bar.classList.add("show");
  }
});

var input = document.querySelector("input");
var button = document.querySelector("button");
var error = document.querySelector(".error");
var errorMsg = document.querySelector(".errorMsg");
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener("click", function (e) {
  if (
    (error.style.display === "none",
    (errorMsg.style.display = "none"),
    input.value === "",
    !input.value.match(mailformat))
  ) {
    (input.style.display.css = ("color", "red")),
      (error.style.display = "block"),
      (errorMsg.style.display = "block");
  } else if (input.value.match(mailformat)) {
    alert("Whoop whoop, you're in");
  } else {
    (error.style.display = "none"), (errorMsg.style.display = "none");
  }
});

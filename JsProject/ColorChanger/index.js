var colors = [
  "white",
  "green",
  "yellow",
  "orange",
  "blue",
  "pink",
  "red",
  "Magenta",
  "BlueViolet",
];

var len = colors.length - 1;
var buttonControl = document.getElementById("btn");
var spanControl = document.querySelector(".color");

buttonControl.addEventListener("click", () => {
  var index = generateRandomnumber();
  document.body.style.backgroundColor = colors[index];
  spanControl.textContent = colors[index];
});

function generateRandomnumber() {
  return Math.round(Math.random() * len);
}

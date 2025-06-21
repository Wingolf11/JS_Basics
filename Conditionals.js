let number = 7;
const outputEl = document.getElementById("output_Conditionals");

if (number > 0) {
  outputEl.innerHTML = "Positive";
  // console.log("Positive");
} else if (number < 0) {
  outputEl.innerHTML = "Negative";
  // console.log("Negative");
} else {
  outputEl.innerHTML = "Zero";
  // console.log("Zero");
}

let a = 10;
let b = 5;

let output_variables = "";
output_variables += "Sum: " + (a + b) + "<br>";
output_variables += "Difference: " + (a - b) + "<br>";
output_variables += "Product: " + (a * b) + "<br>";
output_variables += "Quotient: " + (a / b) + "<br>";

document.getElementById("output_Variables").innerHTML = output_variables;

//Quelque calculs simple sur des variables
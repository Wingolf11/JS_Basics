let numbers = [1, 2, 3, 4, 5];
let output = "";

for (let i = 0; i < numbers.length; i++) {
  output += numbers[i] * 2 + "<br>";
}

document.getElementById("output_arrays").innerHTML = output;

//Multiplie chaque chiffre par 2 puis l'affiche

const sidesInput = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#hypotenuse-btn");
const Output = document.querySelector("#output");

// calculate sum of Square
// sum = a^2 + b^2
function calculateSumOfSquare(a, b) {
  const sumOfSquare = a * a + b * b;
  //   console.log(sumOfSquare);
  return sumOfSquare;
}
function calculateHypotenuse() {
  // console.log("hi");
  const sumOfSquare = calculateSumOfSquare(
    Number(sidesInput[0].value),
    Number(sidesInput[1].value)
  );
  //   console.log(sumOfSquare);
  const lengthOfHypotenuse = Math.floor(Math.sqrt(sumOfSquare));
  //   console.log(lengthOfHypotenuse);
  message(`The Length Of Hypotenuse is ${lengthOfHypotenuse}`);
}

function message(msg) {
  Output.innerText = msg;
}
hypoBtn.addEventListener("click", calculateHypotenuse);

const inputs = document.querySelectorAll(".angle-input");
const isTraingleBtn = document.querySelector("#is-traingle-btn");
const outputs = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
function isTraingle() {
  //   console.log("hi");
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    // console.log("Yeh, Angle form a Traingle");
    output("Yeh, Angle from a traningle");
  } else {
    // console.log("Oh! Oh! the Angle doesn't form a traingle");
    output("Oh! Oh! the Angle doesn't form a traingle");
  }
}
// output message
function output(msg) {
  outputs.innerText = msg;
}
isTraingleBtn.addEventListener("click", isTraingle);

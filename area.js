const Input = document.querySelectorAll(".areaInput");
const AreaBtn = document.querySelector("#areaBtn");
const Output = document.querySelector("#output");

function areaOfTraingle(base, height) {
  const areaOfTraingle = (base * height) / 2;
  return areaOfTraingle;
}

function calculateAreaOfTraingle() {
  //   console.log("hi");
  const areaOfTraingles = areaOfTraingle(
    Number(Input[0].value),
    Number(Input[1].value)
  );
  //   console.log(areaOfTraingles);
  message(` Area of Traingle is ${areaOfTraingles}`);
}

function message(msg) {
  Output.innerText = msg;
}
AreaBtn.addEventListener("click", calculateAreaOfTraingle);

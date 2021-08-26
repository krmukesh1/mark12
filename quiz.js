const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const Output = document.querySelector("#output");

const correctAnswers = ["90", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;

  const formData = new FormData(quizForm);
  //   console.log(formData);
  for (let value of formData.values()) {
    // console.log(value);
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  message(`Your Score is ${score}`);
}
function message(msg) {
  Output.innerText = msg;
}
submitAnswerBtn.addEventListener("click", calculateScore);

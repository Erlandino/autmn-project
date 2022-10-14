/*
 *   this file contains code specific to
 *   fetching the users name and
 *   putting it in localstorage
 *
 * * * */

console.log("Welcome to Solar Quiz");

const nameInputHtml = document.querySelector("#nameInput");

function sendToQuizPage() {
  console.log(nameInputHtml.value);
  if (nameInputHtml.value) {
    localStorage.setItem("name", nameInputHtml.value);

    localStorage.setItem("score", "0%");

    window.location.href = "quiz-page/quiz.html";
  }
}

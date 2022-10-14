/*
 *   this file contains code specific to
 *   fetching the users name and
 *   putting it in localstorage
 *
 * * * */
const nameInputHtml = document.querySelector("#nameInput");
const errorNameHtml = document.querySelector("#errorName");

// adds local storage name if there is any to the name input
nameInputHtml.value = localStorage.getItem("name");

// sends player to quiz page, adds name to local storage, reset score for local storage, adds a erorr message to html if nameInputHtml.value is empty
function sendToQuizPage() {
  if (nameInputHtml.value) {
    localStorage.setItem("name", nameInputHtml.value);

    localStorage.setItem("score", "0%");

    window.location.href = "quiz-page/quiz.html";
  } else {
    errorNameHtml.textContent = "You need to enter a name to continue";
  }
}

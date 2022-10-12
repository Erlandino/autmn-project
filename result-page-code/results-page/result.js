// js code to extract winners name and winners core from local storage. commented out until connected to quiz page which sends local storage
// let winnerName = localStorage.getItem("winnerName");
// let score = localStorage.getItem("score");

// winners name and score stored in variables
const winnerName = "Carl Sagan";
const score = 89 + "%";

// html textcontent for 2 divs are replaced with winnerName and score variable
document.querySelector(".name").textContent = winnerName;
document.querySelector(".score").textContent = score;

// js code to extract winners name and winners core from local storage. commented out until connected to quiz page which sends local storage

// const score = localStorage.getItem("score");

// winners name and score stored in variables
const playerName = localStorage.getItem("name");
const score = 89 + "%";

// html textcontent for 2 divs are replaced with winnerName and score variable
document.querySelector(".playerName").textContent = playerName;
document.querySelector(".score").textContent = score;

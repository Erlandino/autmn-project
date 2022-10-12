/*
 *   This file contains styling specific to the result page
 *
 * * * */

console.log("welcome to the result page");

// let winnerName = localStorage.getItem("winnerName");
// let score = localStorage.getItem("score");

let winnerName = "Carl Sagan";
let score = 89 + "%";

document.querySelector(".name").textContent = winnerName;
document.querySelector(".score").textContent = score;

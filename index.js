/*
 *   this file contains code specific to
 *   fetching the users name and
 *   putting it in localstorage
 *
 * * * */

console.log("Welcome to Solar Quiz");

// let winnerName = localStorage.getItem("winnerName");
// let score = localStorage.getItem("score");

let winnerName = "Carl Sagan";
let score = 89 + "%";

document.querySelector(".name").textContent = winnerName;
document.querySelector(".score").textContent = score;

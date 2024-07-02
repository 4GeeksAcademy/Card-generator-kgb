/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["♥", "♠", "♣", "♦"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const topSuitElement = document.getElementById("top-suit");
  const valueElement = document.getElementById("value");
  const bottomSuitElement = document.getElementById("bottom-suit");

  topSuitElement.textContent = randomSuit;
  valueElement.textContent = randomValue;
  bottomSuitElement.textContent = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuitElement.style.color = "red";
    valueElement.style.color = "red";
    bottomSuitElement.style.color = "red";
  }
};

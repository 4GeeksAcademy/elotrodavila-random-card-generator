/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const cardSuit = ["♥", "♠", "♣", "♦"];
  const cardValue = [
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
    "K",
    "A"
  ];

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateRandomCard() {
    let suit = getRandomElement(cardSuit);
    let value = getRandomElement(cardValue);

    document.getElementById("suit-top").textContent = suit;
    document.getElementById("suit-bottom").textContent = suit;
    document.getElementById("number").textContent = value;

    const color = suit == "♥" || suit == "♦" ? "red" : "black";
    document.getElementById("suit-top").style.color = color;
    document.getElementById("suit-bottom").style.color = color;
    document.getElementById("number").style.color = color;
  }

  generateRandomCard();
};

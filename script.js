"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelector(".show-modal");
const btnsOpenModal1 = document.querySelector(".show-modal1");
const convert = document.querySelector(".convert");
const swit = document.querySelector(".switch");
console.log(btnsOpenModal1);
let fara = 0;
let cel = 0;
let kel = 0;
let temp;
let sw = 0;
btnsOpenModal1.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".conv").textContent = "Temp-celcius";
  document.querySelector(".convto").textContent = "Temp-Kelvin = ";
  document.querySelector(".val").textContent = "0";
  document.querySelector(".guess").value = 0;
  temp = "kel";
});

btnsOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".conv").textContent = "Temp-celcius";
  document.querySelector(".convto").textContent = "Temp-farenheit = ";
  document.querySelector(".val").textContent = "0";
  document.querySelector(".guess").value = 0;
  temp = "far";
});

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
convert.addEventListener("click", function () {
  if (temp === "far") {
    cel = Number(document.querySelector(".guess").value);
    fara = (9 / 5) * cel + 32;
    document.querySelector(".val").textContent = fara;
  } else if (temp === "kel") {
    cel = Number(document.querySelector(".guess").value);
    kel = cel + 273.15;
    document.querySelector(".val").textContent = kel;
  } else if (temp === "cel") {
    if (sw === 0) {
      fara = Number(document.querySelector(".guess").value);
      cel = (fara - 32) * (5 / 9);
      document.querySelector(".val").textContent = cel;
    } else {
      kel = Number(document.querySelector(".guess").value);
      cel = kel - 273.15;
      document.querySelector(".val").textContent = cel;
    }
  }
});
swit.addEventListener("click", function () {
  if (temp === "far") {
    document.querySelector(".conv").textContent = "Temp-farenheit = ";
    document.querySelector(".convto").textContent = "Temp-celcius";
    temp = "cel";
    sw = 0;
  } else if (temp === "kel") {
    document.querySelector(".conv").textContent = "Temp-Kelvin = ";
    document.querySelector(".convto").textContent = "Temp-celcius";
    temp = "cel";
    sw = 1;
  } else if (temp === "cel") {
    if (sw === 0) {
      document.querySelector(".conv").textContent = "Temp-celcius";
      document.querySelector(".convto").textContent = "Temp-farenheit = ";
      temp = "far";
    } else {
      document.querySelector(".conv").textContent = "Temp-celcius";
      document.querySelector(".convto").textContent = "Temp-Kelvin = ";
      temp = "kel";
    }
  }
});

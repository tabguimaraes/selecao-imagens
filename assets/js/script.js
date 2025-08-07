"use strict";

const classes = ["img1", "img2", "img3", "img4", "img5"];
const btnImagem = document.querySelector("#btn-imagem");
const slider = document.querySelectorAll(".slider");
const fade = document.querySelector(".fade");
const inputFoto = document.querySelector("#inputFoto");
const imgContainer = document.querySelectorAll(".imgContainer");
let entrada = "";

btnImagem.addEventListener("click", function (evento) {
  evento.preventDefault();
  fade.classList.add("fade");
  imgContainer.forEach((element) => {
    element.classList.add("slider");
    element.classList.add("imgContainer");
  });
});

inputFoto.addEventListener("change", function (evento) {
  entrada = String(evento.target.value).toLowerCase();

  console.log(entrada);

  switch (entrada) {
    case "01":
    case "1":
    case "cidade":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[0]);
      });

      break;
    case "02":
    case "2":
    case "deck":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[1]);
      });
      break;
    case "03":
    case "3":
    case "floresta":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[2]);
      });
      break;
    case "04":
    case "4":
    case "lago":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[3]);
      });
      break;
    case "05":
    case "5":
    case "montanha":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[4]);
      });
      break;

    default:
      break;
  }
});

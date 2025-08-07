"use strict";

const classes = ["img1", "img2", "img3", "img4", "img5"];
const locais = ["Cidade", "Deck", "Floresta", "Lago", "Montanha"];
const btnImagem = document.querySelector("#btn-imagem");
const slider = document.querySelectorAll(".slider");
const fade = document.querySelector(".fade");
const inputFoto = document.querySelector("#inputFoto");
const imgContainer = document.querySelectorAll(".imgContainer");
let entrada = "";
const localP = document.querySelector("#local-p");

btnImagem.addEventListener("click", function (evento) {
  evento.preventDefault();
  inputFoto.setAttribute("placeholder", "");
  fade.classList.add("fade");
  imgContainer.forEach((element) => {
    element.classList.add("slider");
    element.classList.add("imgContainer");
  });
});

inputFoto.addEventListener("change", function (evento) {
  entrada = String(evento.target.value).toLowerCase();

  switch (entrada) {
    case "01":
    case "1":
    case "cidade":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[0]);
        localP.innerHTML = locais[0];
      });

      break;
    case "02":
    case "2":
    case "deck":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[1]);
        localP.innerHTML = locais[1];
      });
      break;
    case "03":
    case "3":
    case "floresta":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[2]);
        localP.innerHTML = locais[2];
      });
      break;
    case "04":
    case "4":
    case "lago":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[3]);
        localP.innerHTML = locais[3];
      });
      break;
    case "05":
    case "5":
    case "montanha":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "slider");
        fade.classList.remove("fade");
        element.classList.add(classes[4]);
        localP.innerHTML = locais[4];
      });
      break;

    default:
      inputFoto.value = "";
      inputFoto.setAttribute("placeholder", "Não encontrado");

      break;
  }
});

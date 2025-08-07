"use strict";

const classes = ["img1", "img2", "img3", "img4", "img5"];
const locais = ["Cidade", "Deck", "Floresta", "Lago", "Montanha"];
const btnImagem = document.querySelector("#btnImagem");
const sliderEffect = document.querySelectorAll(".sliderEffect");
const fadeEffect = document.querySelector(".fadeEffect");
const textInputField = document.querySelector("#textInputField");
const imgContainer = document.querySelectorAll(".imgContainer");
let entrada = "";
const tituloCidade = document.querySelector("#tituloCidade");

btnImagem.addEventListener("click", function (evento) {
  evento.preventDefault();
  textInputField.setAttribute("placeholder", "");
  fadeEffect.classList.add("fadeEffect");
  imgContainer.forEach((element) => {
    element.classList.add("sliderEffect");
    element.classList.add("imgContainer");
  });
});

textInputField.addEventListener("change", function (evento) {
  entrada = String(evento.target.value).toLowerCase();

  switch (entrada) {
    case "01":
    case "1":
    case "cidade":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classes[0]);
        tituloCidade.innerHTML = locais[0];
      });

      break;
    case "02":
    case "2":
    case "deck":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classes[1]);
        tituloCidade.innerHTML = locais[1];
      });
      break;
    case "03":
    case "3":
    case "floresta":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classes[2]);
        tituloCidade.innerHTML = locais[2];
      });
      break;
    case "04":
    case "4":
    case "lago":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classes[3]);
        tituloCidade.innerHTML = locais[3];
      });
      break;
    case "05":
    case "5":
    case "montanha":
      imgContainer.forEach((element) => {
        element.classList.remove(...classes, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classes[4]);
        tituloCidade.innerHTML = locais[4];
      });
      break;

    default:
      textInputField.value = "";
      textInputField.setAttribute("placeholder", "Não encontrado");

      break;
  }
});

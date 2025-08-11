"use strict";

let entrada = "";
const classesIMG = ["img1", "img2", "img3", "img4", "img5"];
const locaisIMG = ["Cidade", "Deck", "Floresta", "Lago", "Montanha"];
const btnImagem = document.querySelector("#btnImagem");
const sliderEffect = document.querySelectorAll(".sliderEffect");
const fadeEffect = document.querySelector(".fadeEffect");
const textInputField = document.querySelector("#textInputField");
const imgContainer = document.querySelectorAll(".imgContainer");
const tituloCidade = document.querySelector("#tituloCidade");

btnImagem.addEventListener("click", function (evento) {
  evento.preventDefault();
  textInputField.value = "";
  setPlaceHolder();
  fadeEffect.classList.add("fadeEffect");

  imgContainer.forEach((element) => {
    tituloCidade.innerText = "";
    element.classList.remove(...classesIMG);

    element.classList.add("sliderEffect");
  });
});

textInputField.addEventListener("change", function (evento) {
  entrada = String(evento.target.value).toLowerCase().trim();

  switch (entrada) {
    case "01":
    case "1":
    case "cidade":
      setPlaceHolder();
      imgContainer.forEach((element) => {
        element.classList.remove(...classesIMG, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classesIMG[0]);
        tituloCidade.innerHTML = locaisIMG[0];
      });

      break;
    case "02":
    case "2":
    case "deck":
      setPlaceHolder();
      imgContainer.forEach((element) => {
        element.classList.remove(...classesIMG, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classesIMG[1]);
        tituloCidade.innerHTML = locaisIMG[1];
      });
      break;
    case "03":
    case "3":
    case "floresta":
      setPlaceHolder();
      imgContainer.forEach((element) => {
        element.classList.remove(...classesIMG, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classesIMG[2]);
        tituloCidade.innerHTML = locaisIMG[2];
      });
      break;
    case "04":
    case "4":
    case "lago":
      setPlaceHolder();
      imgContainer.forEach((element) => {
        element.classList.remove(...classesIMG, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classesIMG[3]);
        tituloCidade.innerHTML = locaisIMG[3];
      });
      break;
    case "05":
    case "5":
    case "montanha":
      setPlaceHolder();
      imgContainer.forEach((element) => {
        element.classList.remove(...classesIMG, "sliderEffect");
        fadeEffect.classList.remove("fadeEffect");
        element.classList.add(classesIMG[4]);
        tituloCidade.innerHTML = locaisIMG[4];
      });
      break;

    default:
      textInputField.value = "";
      setPlaceHolder("notFind");
      tituloCidade.innerHTML = "";
      break;
  }
  textInputField.value = "";
});

function setPlaceHolder(value) {
  if (value === "notFind") {
    textInputField.setAttribute("placeholder", "Não encontrado");
    setTimeout(() => {
      textInputField.setAttribute("placeholder", "");
    }, 2000);
  } else {
    textInputField.setAttribute("placeholder", "");
  }
}

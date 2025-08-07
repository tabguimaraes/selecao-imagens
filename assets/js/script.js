"use strict";

const btnImagem = document.querySelector("#btn-imagem");
const slider = document.querySelectorAll(".slider");
const nomeFoto = document.querySelector("#nome-foto");

btnImagem.addEventListener("click", function (evento) {
  slider.forEach((element) => {
    element.classList.toggle("slider");

    //Verificar funcionamento
    // element.setAttribute("style", "background-image: url(`./assets/img/cidade.jpg`)");
    // element.setAttribute("style", `background-size: cover`);
  });
});

nomeFoto.addEventListener("change", function (evento) {
  console.log(evento.target.value);
});

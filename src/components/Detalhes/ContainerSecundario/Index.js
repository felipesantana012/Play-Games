import "./ContainerSecundario.css";
import React, { useEffect, useState } from "react";

const ContainerSecundario = ({pacoteImagensJogo}) => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const selecionadasImagens = document.querySelectorAll(".img-slide");
    setImagens(Array.from(selecionadasImagens)); // Converte NodeList para Array e armazena no estado
  }, []);

  useEffect(() => {
    // Inicia o ciclo de slides apenas quando imagens estiver definido
    if (imagens.length > 0) {
      let tempo = 3000;
      let indexImagemMomento = 0;
      let maxImagens = imagens.length;

      function proximaImagem() {
        imagens[indexImagemMomento].classList.remove("selecionada");

        indexImagemMomento++;

        if (indexImagemMomento >= maxImagens) {
          indexImagemMomento = 0;
        }

        imagens[indexImagemMomento].classList.add("selecionada");
      }

      function start() {
        setInterval(() => {
          proximaImagem();
        }, tempo);
      }

      start(); // Inicia o ciclo de slides
    }
  }, [imagens]);

  return (
    <div className="container-secundario">
      <h2 className="container-secundario-titulo">Imagens Reais do Game</h2>
      <div className="container-secundario-imgs">
        <img
          src={pacoteImagensJogo[0]}
          alt=""
          className="img-slide selecionada"
        ></img>

        <img
          src={pacoteImagensJogo[1]}
          alt=""
          className="img-slide"
        ></img>

        <img
          src={pacoteImagensJogo[2]}
          alt=""
          className="img-slide"
        ></img>

        <img
          src={pacoteImagensJogo[3]}
          alt=""
          className="img-slide"
        ></img>

        <img
          src={pacoteImagensJogo[4]}
          alt=""
          className="img-slide"
        ></img>
      </div>
    </div>
  );
};

export default ContainerSecundario;

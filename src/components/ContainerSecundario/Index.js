import "./ContainerSecundario.css";
import React, { useEffect, useState } from "react";

const ContainerSecundario = () => {
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
          src="https://i.pinimg.com/564x/ca/dc/92/cadc92cafb53cad4209b3f4721f6f1c7.jpg"
          alt=""
          className="img-slide selecionada"
        ></img>
        <img
          src="https://i.pinimg.com/564x/55/34/66/5534661372dee30cfd344cd3bc92d6c2.jpg"
          alt=""
          className="img-slide"
        ></img>
        <img
          src="https://i.pinimg.com/564x/36/93/dc/3693dcf79a136cf3c10efd1dad4d83cb.jpg"
          alt=""
          className="img-slide"
        ></img>
        <img
          src="https://i.pinimg.com/564x/56/27/25/5627254daea1bbc71360b68e25196227.jpg"
          alt=""
          className="img-slide"
        ></img>
         <img
          src="https://i.pinimg.com/564x/a7/40/9a/a7409a2ed0cf5ed2dc0bbb7b6140f840.jpg"
          alt=""
          className="img-slide"
        ></img>
      </div>
    </div>
  );
};

export default ContainerSecundario;

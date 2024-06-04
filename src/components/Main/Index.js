import "./Main.css";
import ContainerPrincipal from "../ContainerPrincipal/Index";
import ContainerSecundario from "../ContainerSecundario/Index";
import React from 'react';


const Main = () => {
  let listaGame = {
    id: "123456",
    nome: "Homem Aranha 3",
    imagemPrincipal:
      "https://i.ibb.co/Kj5jzQ1/img-clara-homem-aranha-principal.png",
    pacoteImagensJogo: [
      "https://i.pinimg.com/564x/fb/b0/6c/fbb06c2b69d311108ea04f77ab656752.jpg",
      "https://i.pinimg.com/564x/a7/7a/1c/a77a1cd40f391ded41cb35600ab39b78.jpg",
      "https://i.pinimg.com/564x/93/64/bc/9364bc296d62af80be0c0adac34a3b76.jpg",
    ],
    descricao:
      "Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel's Spider-Man para PS5.",
    preco: 219.9,
    dataLancamento: "12/04/1998",
    vercao: "xbox360",
    quantidadeJogadores: 2,
    estiloJogo: "Modo historia e multiplayer",
    compatibilidade: "Compatível com a ajuda do jogo",
  };

  return (

    <div className="main">
      <ContainerPrincipal
        id={listaGame.id}
        nome={listaGame.nome}
        imagemPrincipal={listaGame.imagemPrincipal}
        descricao={listaGame.descricao}
        preco={listaGame.preco}
        dataLancamento={listaGame.dataLancamento}
        vercao={listaGame.vercao}
        quantidadeJogadores={listaGame.quantidadeJogadores}
        estiloJogo={listaGame.estiloJogo}
        compatibilidade={listaGame.compatibilidade}
      />
      <ContainerSecundario />
    </div>

  );
};

export default Main;

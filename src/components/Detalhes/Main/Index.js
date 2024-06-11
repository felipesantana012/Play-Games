import "./Main.css";
import ContainerPrincipal from "../ContainerPrincipal/Index";
import ContainerSecundario from "../ContainerSecundario/Index";
import React from "react";
import { useParams } from "react-router-dom";
import listaGames from "../../../service/Listagames";

const Main = () => {
  
  const { id } = useParams();

  const listaGame = listaGames.find(g => g.id === parseInt(id, 10));

  if (!listaGame) {
    return <div>Jogo não encontrado</div>;
  }

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
      <ContainerSecundario pacoteImagensJogo={listaGame.pacoteImagensJogo}/>
    </div>
  );
};

export default Main;

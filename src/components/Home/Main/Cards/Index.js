import "./Cards.css";

import React from "react";

import Card from "./Card/Index";

import listaGames from "../../../../service/Listagames";


const Cards = () => {
  return (
    <ul className="container-cards">
      {listaGames.map((game) => (
        <li className="container-cards-item" key={game.id}>
          <Card
            id={game.id}
            nome={game.nome}
            imagemPrincipal = {game.imagemPrincipal}
            preco = {game.preco}
            dataLancamento={game.dataLancamento}
            vercao={game.vercao}
          />
        </li>
      ))}
    </ul>
  );
};

export default Cards;

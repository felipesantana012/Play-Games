import "./Main.css";
import imgCoracao from "../../assets/imgs/img-logos-pequenos/coracao.png";
import caledario from "../../assets/imgs/img-logos-pequenos/calendario.png";
import ponto from "../../assets/imgs/img-logos-pequenos/ponto.png";
import controles from "../../assets/imgs/img-logos-pequenos/controles.png";
import lampada from "../../assets/imgs/img-logos-pequenos/lampada.png";
import BotaoPrincipal from "../BotaoPrincipal/Index";
import BotaoIcon from "../BotaoIcone/Index";

const Main = () => {
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__content__texto">
          <div className="main__content__text__titulo">
            <h1>Marvel's Spider-Man 2</h1>
            <p>
              Os Spiders Peter Parker e Miles Morales estão de volta em mais uma
              aventura eletrizante da famosa franquia Marvel's Spider-Man para
              PS5.
            </p>
          </div>
          <div className="main__content__text__preco">
            <h2>R$ 349,90</h2>
            <div className="main__content__text__preco-btns">
              <BotaoPrincipal>Adicionar Carrinho</BotaoPrincipal>
              <BotaoIcon>{imgCoracao}</BotaoIcon>
            </div>
          </div>
        </div>

        <ul className="main__conent__description">
          <li>
            <img src={caledario} alt="Img calendario"></img>
            <p>Lançado 20/10/2023</p>
            <img src={ponto} alt="img ponto"></img>
            <p>Versão para PS5</p>
          </li>

          <li>
            <img src={controles} alt="Img Controle"></img>
            <p>1 jogador</p>
            <img src={ponto} alt="img ponto"></img>
            <p>Compatível com função de vibração e efeito gatilho </p>
          </li>

          <li>
            <img src={lampada} alt="Img Controle"></img>
            <p>Compatível com a ajuda do jogo</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

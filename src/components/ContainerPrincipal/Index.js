import "./ContainerPrincipal.css";
import imgCoracao from "../../assets/imgs/img-logos-pequenos/coracao.png";
import caledario from "../../assets/imgs/img-logos-pequenos/calendario.png";
import ponto from "../../assets/imgs/img-logos-pequenos/ponto.png";
import controles from "../../assets/imgs/img-logos-pequenos/controles.png";
import lampada from "../../assets/imgs/img-logos-pequenos/lampada.png";
import BotaoPrincipal from "../BotaoPrincipal/Index";
import BotaoIcon from "../BotaoIcone/Index";

const ContainerPrincipal = ({
  id,
  nome,
  imagemPrincipal,
  descricao,
  preco,
  dataLancamento,
  vercao,
  quantidadeJogadores,
  estiloJogo,
  compatibilidade,
}) => {
  const ImgStyle = {
    backgroundImg: `linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.089) 70%,
      rgba(255, 255, 255, 0.062)
    ), url(${imagemPrincipal})`,
  };

  return (
    <div
      className="container-principal"
      style={{
        background: ImgStyle.backgroundImg,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
      }}
    >
      <div className="container-principal__content" key={id}>
        <div className="container-principal__content__texto">
          <div className="container-principal__content__text__titulo">
            <h1>{nome}</h1>
            <p>{descricao}</p>
          </div>
          <div className="container-principal__content__text__preco">
            <h2>RS$ {preco.toFixed(2)}</h2>
            <div className="container-principal__content__text__preco-btns">
              <BotaoPrincipal>Adicionar Carrinho</BotaoPrincipal>
              <BotaoIcon>{imgCoracao}</BotaoIcon>
            </div>
          </div>
        </div>

        <ul className="container-principal__conent__description">
          <li>
            <img src={caledario} alt="Img calendario"></img>
            <p>Lançado {dataLancamento}</p>
            <img src={ponto} alt="img ponto"></img>
            <p> Versão para {vercao}</p>
          </li>

          <li>
            <img src={controles} alt="Img Controle"></img>
            <p>{quantidadeJogadores} jogadores</p>
            <img src={ponto} alt="img ponto"></img>
            <p>{estiloJogo} </p>
          </li>

          <li>
            <img src={lampada} alt="Img Controle"></img>
            <p>{compatibilidade}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContainerPrincipal;

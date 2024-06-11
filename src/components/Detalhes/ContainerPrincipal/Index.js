import "./ContainerPrincipal.css";
import caledario from "../../../assets/imgs/img-logos-pequenos/calendario.png";
import ponto from "../../../assets/imgs/img-logos-pequenos/ponto.png";
import controles from "../../../assets/imgs/img-logos-pequenos/controles.png";
import lampada from "../../../assets/imgs/img-logos-pequenos/lampada.png";
import BotaoPrincipal from "../BotaoPrincipal/Index";

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
        backgroundPosition: `top center`,
        backgroundSize: `100% 100%`,
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
              <BotaoPrincipal text={"Adicionar Carrinho"} />
            </div>
          </div>
        </div>

        <ul className="container-principal__conent__description">
          <li>
            <div className="description-esquerdo">
              <img src={caledario} alt="Img calendario"></img>
              <p>Lançado {dataLancamento}</p>
            </div>

            <div className="description-direito">
              <img src={ponto} alt="img ponto"></img>
              <p> Versão para {vercao}</p>
            </div>
          </li>

          <li>
            <div className="description-esquerdo">
              <img src={controles} alt="Img Controle"></img>
              <p>{quantidadeJogadores} jogadores</p>
            </div>

            <div className="description-direito">
              <img src={ponto} alt="img ponto"></img>
              <p>{estiloJogo} </p>
            </div>
          </li>

          <li>
            <div className="description-esquerdo">
              <img src={lampada} alt="Img Controle"></img>
              <p>{compatibilidade}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContainerPrincipal;

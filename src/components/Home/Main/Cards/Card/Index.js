import BotaoCard from "./BotaoCard/Index";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ id, nome, imagemPrincipal, preco, dataLancamento, vercao }) => {
  const navigate = useNavigate();

  const CardClick = (id) => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="card-item">
      <div className="card-item-img">
        <img src={imagemPrincipal} alt={nome}></img>
      </div>

      <ul className="card-item-descricao">
        <li className="card-item-descricao-nome">
          <h2>{nome}</h2>
        </li>

        <li className="card-item-descricao-lancamento">
          <p>
            Lancamento:
            <span>{dataLancamento}</span>
          </p>
        </li>

        <li className="card-item-descricao-vercao">
          <p>
            Verçao: <span>{vercao}</span>
          </p>
        </li>
        <li className="card-item-descricao-precos">
          <p>
            Preço: <span>{preco.toFixed(2)}</span>
          </p>
        </li>

        <BotaoCard onClick={() => CardClick(id)} />
      </ul>
    </div>
  );
};

export default Card;

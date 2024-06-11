import "./BotaoCard.css";

const BotaoCard = ({ onClick }) => {
  return (
    <button onClick={onClick} className="botao-card">
      Ver Mais
    </button>
  );
};

export default BotaoCard;

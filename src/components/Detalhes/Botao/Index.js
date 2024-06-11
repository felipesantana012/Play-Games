import "./Botao.css";

const Botao = ({ text }) => {
  return (
    <div className="btn">
      <button className="btn-transparente-header">{text}</button>
    </div>
  );
};

export default Botao;

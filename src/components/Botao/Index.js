import "./Botao.css";

const Botao = (props) => {
  return (
    <>
      <button
        className="btn-principal">
        {props.children}
      </button>
    </>
  );
};

export default Botao;

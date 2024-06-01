import "./BotaoPrincipal.css";

const BotaoPrincipal = (props) => {

    return(
        <>
        <button
          className="btn btn-principal">
          {props.children}
        </button>
      </>
    )
}

export default BotaoPrincipal;
import "./BotaoIcone.css";

const BotaoIcone = (props) => {
    return(
        <>
        <button
          className="btn btn-icone">
            <img src={props.children} alt=""></img>
        </button>
      </>
    )
}


export default BotaoIcone;
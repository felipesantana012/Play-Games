
import Cards from "./Cards/Index";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-home">
      <h1>Todos Os Games</h1>
      <div className="main-home-cards"> 
       <Cards />
      </div>
    </div>
  );
};

export default Main;

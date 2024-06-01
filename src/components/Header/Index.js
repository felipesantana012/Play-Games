import "./Header.css";
import logo from "../../assets/imgs/img-header/logo_controle_gamer.png";
import Botao from "../Botao/Index";

const Header = () => {
  return (
    <header>
      <a className="header__logo" href="/">
        <img
          src={logo}
          alt="Logo do site Play Games"
          title="Logo Play Games"
        ></img>
      </a>

      <ul className="header__lista-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>

           <Botao>Adicionar ao Carrinho</Botao>
    </header>
  );
};

export default Header;

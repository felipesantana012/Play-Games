import "./Header.css";
import Botao from "../Botao/Index";
import NavLinks from "./NavLinks/Index";
import Logo from "./Logo/Index";


const Header = () => {
  return (
    <header>
      <Logo />
      <NavLinks />
      <Botao>Meu Carrinho</Botao>
    </header>
  );
};

export default Header;

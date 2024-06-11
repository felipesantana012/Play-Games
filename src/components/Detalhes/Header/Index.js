import "./Header.css";
import Botao from "../Botao/Index";
import NavLinks from "./NavLinks/Index";
import Logo from "./Logo/Index";

const Header = () => {
  return (
    <header>
      <Logo />
      <NavLinks />
      <Botao className="btn-header" text={"Carrinho"} />
    </header>
  );
};

export default Header;

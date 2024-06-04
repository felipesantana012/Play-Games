import Botao from "../../Botao/Index";
import "./NavMobile.css";

const NavMobile = () => {
  return (
    <div className="nav-mobile">
      <div className="nav-mobile__icone-buguer">
        <i class="fa-solid fa-bars icone"></i>
      </div>
      <nav className="nav-mobile__links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
        <li>
          <a href="/">Sobre</a>
        </li>
        <li>
          <a href="/">Ajuda</a>
        </li>
        <li>
         <Botao>Carrinho</Botao>
        </li>
      </nav>
    </div>
  );
};

export default NavMobile;

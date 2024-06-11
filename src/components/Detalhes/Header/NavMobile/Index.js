import { Link } from "react-router-dom";
import BotaoPrincipal from "../../BotaoPrincipal/Index";
import "./NavMobile.css";
import React, { useState } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-mobile">
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? "X" : "☰"}
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Contato</Link>
          </li>
          <li>
            <Link to="#">Sobre</Link>
          </li>
          <li>
            <Link to="#">Ajuda</Link>
          </li>
          <li>
          <Link to="#"><BotaoPrincipal text={"Carrinho"} /></Link>       
          </li>
        </ul>
      </div>
    </div>
  );

  // return (
  //   <div className="nav-mobile">
  //     <div className="nav-mobile__icone-buguer">
  //       <i className="fa-solid fa-bars icone" ></i>
  //     </div>
  //     <nav className="nav-mobile__links" >
  //       <li>
  //         <a href="/">Home</a>
  //       </li>
  //       <li>
  //         <a href="/">Contato</a>
  //       </li>
  //       <li>
  //         <a href="/">Sobre</a>
  //       </li>
  //       <li>
  //         <a href="/">Ajuda</a>
  //       </li>
  //       <li>
  //         <Botao>Carrinho</Botao>
  //       </li>
  //     </nav>
  //   </div>
  // );
};

export default NavMobile;

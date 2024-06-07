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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Contato</a>
          </li>
          <li>
            <a href="#services">Sobre</a>
          </li>
          <li>
            <a href="#contact">Ajuda</a>
          </li>
          <li>
            <a href="#/">
              <BotaoPrincipal text={"Carrinho"}/>
            </a>
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

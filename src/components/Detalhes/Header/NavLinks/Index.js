import { Link } from "react-router-dom";
import NavMobile from "../NavMobile/Index";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <>
      <div className="nav">
        <ul className="nav-links">
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
        </ul>
        <NavMobile />
      </div>
    </>
  );
};

export default NavLinks;

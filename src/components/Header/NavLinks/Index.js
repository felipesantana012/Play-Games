import NavMobile from "../NavMobile/Index";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <>
      <div className="nav">
        <ul className="nav-links">
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
        <NavMobile />
      </div>
    </>
  );
};

export default NavLinks;

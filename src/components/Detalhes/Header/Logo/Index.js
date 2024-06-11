import "./Logo.css";
import logo from "../../../../assets/imgs/img-header/logo_controle_gamer.png";

const Logo = () => {
  return (
    <a className="logo" href="/">
      <img
        src={logo}
        alt="Logo do site Play Games"
        title="Logo Play Games"
      ></img>
    </a>
  );
};

export default Logo;

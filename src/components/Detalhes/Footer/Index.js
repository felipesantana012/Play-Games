import "./Footer.css";
import imgRodape from "../../../assets/imgs/img-grandes/img-rodape.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img">
        <img src={imgRodape} alt="imagem de divisao do rodape"></img>
      </div>

      <div className="footer-conteudo">
        <div className="footer-texto">
          <h4>©FelipeSantana2024</h4>
          <p>
            Este é meu primeiro projeto React de forma autônoma, feito do
            absoluto 0. Estou aprimorando os conhecimentos, caso tenha alguma
            sugestão e criticas construtivas pode enviar uma mensagem nos botoes
            ao lado, agradeço desde já.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://wa.me/5581988742454?text=Ola%20Felipe!"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://github.com/felipesantana012"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/felipesantana012/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

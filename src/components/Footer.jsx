import logo from "../assets/logo/kasa-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

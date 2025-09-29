import { NavLink } from "react-router-dom";
import logo from "../assets/logo/kasa-logo-red.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

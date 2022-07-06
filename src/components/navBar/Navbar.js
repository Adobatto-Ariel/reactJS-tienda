import logo from "../../assets/logo.png";
import user from "../../assets/icons/person.svg";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="headerNav">
        <Link to="home" className="containerLogo">
          <img src={logo} alt="Logo Mv Kydex" />
          <div className="container-LogoText">
            <h1>MV KYDEX®</h1>
            <span className="holster">HOLSTERS</span>
          </div>
        </Link>
        <div className="userCart">
          <img src={user} title="Login" alt="user" />
          <CartWidget />
        </div>
      </div>
      <nav className="containerNav">
        <ul>
          <li className="li">
            <NavLink activeclassname="active" to="home">
              Home
            </NavLink>
          </li>
          <li className="li">
            <NavLink activeclassname="active" to="tienda">
              Tienda
            </NavLink>
          </li>
          <li className="li">
            <NavLink activeclassname="active" to="nosotros">
              Nosotros
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

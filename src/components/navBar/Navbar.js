import logo from "../../assets/logo.png";
import user from "../../assets/icons/person.svg";
import "./Navbar.css";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <header className="header">
      <div className="headerNav">
        <div className="containerLogo">
          <img src={logo} />
          <h1>MV Kydex® ARG</h1>
        </div>
        <div className="userCart">
          <img src={user} title="Login" />
          <CartWidget />
        </div>
      </div>
      <nav className="containerNav">
        <ul>
          <li>
            <a className="home" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

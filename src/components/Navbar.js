import logo from "../assets/logo.png";
import "./Navbar.css";
import user from "../assets/icons/person.svg";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <header className="headerNav">
      <div className="containerLogo">
        <img src={logo} />
        <h1>MV Kydex® ARG</h1>
      </div>
      <nav>
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
          <div className="userCart">
            <i className="bi bi-person-circle"></i>
            <img src={user} title="Usuario" />
            <CartWidget />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

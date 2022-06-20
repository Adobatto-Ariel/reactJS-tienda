import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="headerNav">
      <div className="containerLogo">
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
        </ul>
      </nav>
      <i class="fa-solid fa-user"></i>
    </header>
  );
}

export default Navbar;

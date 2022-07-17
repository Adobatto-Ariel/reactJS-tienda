import logo from "../../assets/logo.png";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="header">
            <div className="headerNav">
                <div className="containerLogoIcon">
                    <Link to="home" className="containerLogo">
                        <img src={logo} alt="Logo Mv Kydex" />
                        <div className="container-LogoText">
                            <h1>MV KYDEX®</h1>
                            <span className="holster">HOLSTERS</span>
                        </div>
                    </Link>
                    <div className="userCart">
                        <div className="container-icon" title="Login">
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
                        <Link to={`/cart`}>
                            <CartWidget />
                        </Link>
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
            </div>
        </header>
    );
}

export default Navbar;

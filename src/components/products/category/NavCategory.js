import { NavLink } from "react-router-dom";
import "./NavCategory.css";

function NavCategory() {
    return (
        <nav className="NavList">
            <span>categorías »</span>
            <ul className="ulCategory">
                <li className="liNav">
                    <NavLink
                        className="liCategory"
                        activeclassname="activeNavCat"
                        to="/categorias/pistoleras"
                    >
                        Pistoleras
                    </NavLink>
                </li>
                <li className="liNav">
                    <NavLink
                        className="liCategory combos"
                        activeclassname="activeNavCat"
                        to="/categorias/combos"
                    >
                        Combos
                    </NavLink>
                </li>
                <li className="liNav">
                    <NavLink
                        className="liCategory"
                        activeclassname="activeNavCat"
                        to="/categorias/torniquetes"
                    >
                        Torniquetes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavCategory;

import "./NotFound.css";
import not from "../../assets/not.png";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notFound">
            <img src={not} alt="NOT FOUND" />
            <Link to={`/tienda`}>
                <button className="volver btn btn-primary">Volver</button>
            </Link>
        </div>
    );
}

export default NotFound;

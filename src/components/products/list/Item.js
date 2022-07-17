import "./Item.css";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../detail/ItemDetailContainer";

function Item({ id, title, subtitle, alt, src, price }) {
    return (
        <div className="card">
            <div className="container-img">
                <img src={src} className="img" alt={alt} />
            </div>
            <div className="card-body">
                <p className="sinDescuento">
                    $
                    {price >= 13000
                        ? `${(price * 1.1).toFixed()}`
                        : `${(price * 1.05).toFixed()}`}
                </p>
                <h3 className="price">${price}</h3>
                <span className="descuento">
                    {price >= 13000 ? `10% OFF` : `5% OFF`}
                </span>
                <h4 className="card-title">{title}</h4>
                <h6 className="subtitleItem">{subtitle}</h6>
                <Link to={`/detalles/${id}`} key={id}>
                    <button
                        className="detalles p-1 border-3"
                        onClick={ItemDetailContainer}
                    >
                        COMPRAR »
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Item;

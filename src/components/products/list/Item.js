import "./Item.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../detail/ItemDetailContainer";

function Item({ id, title, subtitle, alt, src, price, stock }) {
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
        <Link to={`/detalles/${id}`}>
          <button className="detalles" onClick={<ItemDetailContainer />}>
            Ver detalles del producto »
          </button>
        </Link>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
}

export default Item;

import "./Item.css";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'
import ItemDetailContainer from "../detail/ItemDetailContainer";

function Item({ id, title, subtitle, alt, src, price, stock }) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <p>★ ★ ★ ★ ★</p>
        <span>Id: {id}</span>
        <h3 className="price">${price}</h3>
        <h4 className="card-title">{title}</h4>
        <h6 className="subtitle">{subtitle}</h6>
        <Link to={`/detalles/${id}`}>
          <button className="detalles" onClick={<ItemDetailContainer/>}>Ver detalles del producto »</button>
        </Link>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
}

export default Item;

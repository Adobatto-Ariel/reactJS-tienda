import "./Item.css";
import ItemCount from "./ItemCount";

function Item({ title, subtitle, alt, src, price, stock }) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <p>★ ★ ★ ★ ★</p>
        <h3 className="price">${price}</h3>
        <h4 className="card-title">{title}</h4>
        <h6 className="subtitle">{subtitle}</h6>
        <button className="detalles">Ver detalles del producto »</button>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
}

export default Item;

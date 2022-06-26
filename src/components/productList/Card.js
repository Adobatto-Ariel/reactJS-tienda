import "./Card.css";
import ItemCount from "./ItemCount";

function Card({ title, alt, description, src, price, stock }) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h3 className="price">${price}</h3>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
}

export default Card;

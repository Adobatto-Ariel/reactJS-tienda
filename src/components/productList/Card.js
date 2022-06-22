import "./Card.css";

function Card({ title, alt, description, src, price }) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h3 className="price">${price}</h3>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <button className="boton" id="plus">
          +
        </button>
        <input className="counter" min="0" value="1" />
        <button className="boton" id="minus">
          -
        </button>
        <a href="#" className="btn btn-primary me-5 mb-2">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
}

export default Card;

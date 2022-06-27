import bag from "../../assets/icons/bag.svg";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="containerCart">
      <img className="cart" src={bag} title="Ir al carrito" />
      <div className="cartCounter"></div>
    </div>
  );
}

export default CartWidget;

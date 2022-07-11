import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="containerCart">
      <div className="container-icon" title="Ir al carrito">
        <ion-icon name="bag-outline"></ion-icon>
      </div>
      <div className="cartCounter"></div>
    </div>
  );
}

export default CartWidget;

import "./CartWidget.css";
import { cartContext } from "../context/cartContext";
import { useState, useEffect, useContext } from "react";

function CartWidget() {
    const { cart, getQuantity } = useContext(cartContext);
    const [counterProd, setCounterProd] = useState(false);
    useEffect(() => {
        cart.length > 0 ? setCounterProd(true) : setCounterProd(false);
    }, [cart.length]);

    return (
        <div className="containerCart">
            <div className="container-icon" title="Ir al carrito">
                <ion-icon name="cart-outline"></ion-icon>
                {counterProd && (
                    <span className="counterProduct">{getQuantity(cart)}</span>
                )}
            </div>
        </div>
    );
}

export default CartWidget;

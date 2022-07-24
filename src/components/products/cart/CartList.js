import "./CartList.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Order from "../orders/Order";

function CartList() {
    const { cart, removeFromCart, clearCart, getQuantity, getTotal } =
        useContext(cartContext);
    const [isLoading, setIsLoading] = useState(true);
    const [showOrder, setShowOrder] = useState(false);
    const [terminar, setTerminar] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        cart.length > 0 && setTerminar(true);
    }, [cart.length]);
    console.log(cart);
    if (cart.length > 0) {
        return (
            <main className="Cart">
                {isLoading && (
                    <div className="container_loader">
                        <div className="loader">
                            <p>MV Kydex® ARG</p>
                            <span>Loading ...</span>
                        </div>
                    </div>
                )}
                <div className="CartListContainer">
                    {!showOrder ? (
                        <div className="CartList">
                            {cart.map((element) => (
                                <div className="CartItemList">
                                    <img
                                        src={element.item.src}
                                        alt={element.item.alt}
                                    />
                                    <div>
                                        <p className="pCart">
                                            {element.item.title}
                                        </p>
                                        <span className="spanCart">
                                            Precio unitario: $
                                            {element.item.price}
                                        </span>
                                        <span className="spanCart">
                                            Cantidad: {element.quantity}
                                        </span>
                                    </div>
                                    <div className="subTotal">
                                        <p className="total">Subtotal</p>
                                        <span className="spanTotal">
                                            $
                                            {element.quantity *
                                                element.item.price}
                                        </span>
                                    </div>
                                    <button
                                        className="trash"
                                        onClick={() =>
                                            removeFromCart(element.item.id)
                                        }
                                    >
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Order />
                    )}
                </div>
                {terminar && (
                    <>
                        <div className="CantidadPrecioTotal">
                            <div>
                                <span>Cantidad total de productos: </span>
                                <span className="resultado">
                                    {getQuantity(cart)}
                                </span>
                            </div>
                            <div>
                                <span>Total a pagar: </span>
                                <span className="resultado">
                                    ${getTotal(cart)}
                                </span>
                            </div>
                        </div>

                        <div className="totalPrice">
                            <button
                                onClick={() => {
                                    setShowOrder(true);
                                    setTerminar(false);
                                }}
                                className="totalPrice-button"
                            >
                                Terminar compra
                            </button>
                            <button
                                onClick={clearCart}
                                className="clear-button"
                            >
                                Limpiar carrito
                            </button>
                        </div>
                    </>
                )}
            </main>
        );
    } else {
        return (
            <main className="CartVacio">
                <h2 className="vacio">Carrito vacío</h2>
                <span className="mb-4">nuestros productos te esperan</span>
                <Link to={`/tienda`}>
                    <button className="irAtienda btn btn-success border-2">
                        Ir a la tienda
                    </button>
                </Link>
            </main>
        );
    }
}

export default CartList;

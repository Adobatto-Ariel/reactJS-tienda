import { createContext, useState } from "react";
import CartWidget from "../navBar/CartWidget";
import mostrarError from "../products/alert";

export const cartContext = createContext({});

const { Provider } = cartContext;

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id);
    };

    const removeFromCart = (id) => {
        const newCart = [...cart].filter((element) => element.item.id !== id);
        setCart(newCart);
    };

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = [...cart];
            for (const element of newCart) {
                if (
                    element.item.id === item.id &&
                    element.item.stock < element.quantity + quantity
                ) {
                    mostrarError(
                        `Stock disponible de ${
                            element.item.stock - element.quantity
                        } unidades`
                    );
                }
            }
            for (const element of newCart) {
                if (
                    element.item.id === item.id &&
                    element.item.stock >= element.quantity + quantity
                ) {
                    element.quantity = element.quantity + quantity;
                }
            }
            setCart(newCart);
        } else {
            setCart([
                ...cart,
                {
                    item: item,
                    quantity: quantity,
                },
            ]);
        }
    };

    //cantidad total de items
    const getQuantity = (cart) => {
        let cantidad = 0;
        cart.forEach((element) => {
            cantidad = cantidad + element.quantity;
        });
        <CartWidget quantity={cantidad} />;
        return cantidad;
    };

    //total a pagar de la compra completa
    const getTotal = (cart) => {
        let total = 0;
        cart.forEach((element) => {
            total += element.quantity * element.item.price;
        });
        return total;
    };
    //exportamos
    const context = {
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        getQuantity,
        getTotal,
    };

    return <Provider value={context}>{children}</Provider>;
};

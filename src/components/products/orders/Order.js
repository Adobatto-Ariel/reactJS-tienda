import "./Order.css";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { cartContext } from "../../context/cartContext";

import { useContext, useState } from "react";

import success from "../success";

const Order = () => {
    const { cart, getQuantity, getTotal, clearCart } = useContext(cartContext);
    window.scrollTo(0, 0);
    const [form, setForm] = useState(true);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newAdress, setNewAdreess] = useState("");

    const nameHandler = (e) => {
        setNewName(e.target.value.toUpperCase());
    };

    const emailHandler = (e) => {
        setNewEmail(e.target.value);
    };
    const phoneHandler = (e) => {
        setNewPhone(e.target.value);
    };
    const adressHandler = (e) => {
        setNewAdreess(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const nowDate = Date.now();
        const date = new Date(nowDate);

        const newOrder = {
            buyer: {
                name: newName,
                email: newEmail,
                phone: newPhone,
                adress: newAdress,
            },
            items: cart.map((product) => ({
                id: product.item.id,
                quantity: product.quantity,
                price: product.item.price,
                title: product.item.title,
            })),
            date: date,
            total: getTotal(cart),
            quantity: getQuantity(cart),
        };

        setForm(false);
        addDoc(ordersCollection, newOrder).then((res) => {
            success(
                newName,
                getQuantity(cart),
                getTotal(cart),
                res.id,
                date.toLocaleDateString()
            );
            clearCart();
        });
    };

    /*  function successMsj(collectionRef, newOrder) {
        getDoc(collectionRef, newOrder).then((res) => {
            console.log(res);
            Swal.fire({
                icon: "success",
                title: `Compra exitosa!<br>Felicitaciones ${res.name}`,
                text: `Tu pedido llegara a ${res.adress} en 48 horas.<br>`,
                footer: `Nro de order<br>${res.id}`,
                showCloseButton: true,
            });
        });
    } */
    return (
        <div className="container-form">
            {form && (
                <form>
                    <fieldset>
                        <legend>Datos para el envío</legend>

                        <input
                            placeholder="Nombre"
                            onChange={nameHandler}
                            className="form-control"
                            type="text"
                            required
                        />

                        <input
                            placeholder="email"
                            onChange={emailHandler}
                            className="form-control"
                            type="email"
                            required
                        />

                        <input
                            placeholder="teléfono"
                            onChange={phoneHandler}
                            className="form-control"
                            type="number"
                            maxLength="10"
                            required
                        />

                        <input
                            onChange={adressHandler}
                            placeholder="Dirección (calle y nº)"
                            className="form-control"
                            type="text"
                            required
                        />

                        <input
                            className="form-control resetForm"
                            type="reset"
                            value="↻"
                        />
                        <input
                            className="btn-success form-control submit"
                            type="submit"
                            value="Confirmar"
                            onClick={submitHandler}
                        />
                    </fieldset>
                </form>
            )}
        </div>
    );
};

export default Order;

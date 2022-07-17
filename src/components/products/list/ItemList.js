import { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";
import mostrarError from "../alert";

function ItemList() {
    const [productos, setProductos] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [newError, setNewError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.npoint.io/a02bf179839164f8f769")
                .then((resp) => {
                    if (!resp.ok) {
                        throw new Error(
                            `Ocurrió un problema!<br>Inténtelo mas tarde`
                        );
                    } else {
                        return resp.json();
                    }
                })
                .catch((error) => {
                    setNewError(error.message);
                    setIsLoading(false);
                })
                .then((data) => setProductos(data))
                .catch((err) => console.log(err));
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <main className="ItemList">
            {newError && mostrarError(newError)}
            {isLoading && (
                <div className="container_loader">
                    <div className="loader">
                        <p>MV Kydex® ARG</p>
                        <span>Loading ...</span>
                    </div>
                </div>
            )}
            {productos &&
                productos.map((prod) => (
                    <Item
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        subtitle={prod.subtitle}
                        alt={prod.alt}
                        src={prod.src}
                        price={prod.price}
                        stock={prod.stock}
                    />
                ))}
        </main>
    );
}

export default ItemList;

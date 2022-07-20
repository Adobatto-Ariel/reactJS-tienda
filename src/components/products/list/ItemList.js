import { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";
import mostrarError from "../alert";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function ItemList() {
    const [productos, setProductos] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [newError, setNewError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore(); //db = data base - base de datos
            const prodRef = collection(db, "productos");
            getDocs(prodRef)
                .then((snapshot) => {
                    if (snapshot.size === 0) {
                        throw new Error(`No results`);
                    } else {
                        setProductos(
                            snapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }))
                        );
                    }
                })
                .catch((error) => {
                    setNewError(error.message);
                    setIsLoading(false);
                });
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../list/Item";
import {
    getFirestore,
    getDocs,
    collection,
    where,
    query,
} from "firebase/firestore";
import mostrarError from "../alert";

function ItemCategory() {
    const [CategoryFetch, setCategoryFetch] = useState([]);
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [newError, setNewError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore();
            const q = query(
                collection(db, "productos"),
                where("category", "==", `${params.category}`)
            );
            getDocs(q)
                .then((snapshot) => {
                    if (snapshot.size === 0) {
                        throw new Error(`No results`);
                    } else {
                        setCategoryFetch(
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
        }, 2000);
        setIsLoading(false);
    }, [params]);
    return (
        <>
            {isLoading && (
                <div className="container_loader">
                    <div className="loader">
                        <p>MV Kydex® ARG</p>
                        <span>Loading ...</span>
                    </div>
                </div>
            )}
            <main className="ItemList">
                {newError && mostrarError(newError)}
                {CategoryFetch &&
                    CategoryFetch.map((CategoryFetch) => (
                        <Item
                            id={CategoryFetch.id}
                            title={CategoryFetch.title}
                            subtitle={CategoryFetch.subtitle}
                            alt={CategoryFetch.alt}
                            src={CategoryFetch.src}
                            price={CategoryFetch.price}
                            stock={CategoryFetch.stock}
                        />
                    ))}
            </main>
        </>
    );
}

export default ItemCategory;

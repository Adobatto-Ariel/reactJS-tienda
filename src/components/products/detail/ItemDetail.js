import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../list/ItemCount";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import mostrarError from "../alert";
import { collection, getDoc, getFirestore, doc } from "firebase/firestore";

function ItemDetail() {
    const [newError, setNewError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [itemCount, setItemCount] = useState();
    const { addToCart } = useContext(cartContext);
    const [productos, setProductos] = useState([]);

    const params = useParams();
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            const db = getFirestore(); //db = data base - base de datos
            const allProduct = collection(db, "productos");
            const docRef = doc(allProduct, `${params.id}`);
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.size === 0) {
                        throw new Error(`No results`);
                    } else {
                        /* setProductos(snapshot.data()); */
                        setProductos({ id: snapshot.id, ...snapshot.data() });
                    }
                })
                .catch((error) => {
                    setNewError(error.message);
                    setIsLoading(false);
                });
        }, 2000);
    }, [params]);
    console.log(productos);
    console.log(params.id);
    const onAdd = (num) => {
        setItemCount(num);
        addToCart(productos, num);
    };
    return (
        <>
            {isLoading && (
                <div className="container_loader">
                    <div className="loader"></div>
                </div>
            )}
            {newError && mostrarError(newError)}
            {/*  {productos.length !== 0 && ( */}
            <div className="ItemDetail">
                <div className="containerImgBtn">
                    <img
                        src={productos.src}
                        className="card-img-top"
                        alt={productos.alt}
                    />
                    <div className="count">
                        {itemCount > 0 ? (
                            <div>
                                <Link to={`/cart`}>
                                    <button className="comprar btn btn-success">
                                        Ir al carrito
                                    </button>
                                </Link>
                                <Link to={`/tienda`}>
                                    <button className="irAtienda btn btn-secondary">
                                        Ir a la tienda
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <ItemCount stock={productos.stock} onAdd={onAdd} />
                        )}
                    </div>
                </div>
                <div className="card-body">
                    <p className="sinDescuento">
                        $
                        {productos.price >= 13000
                            ? `${(productos.price * 1.1).toFixed()}`
                            : `${(productos.price * 1.05).toFixed()}`}
                    </p>
                    <h3 className="priceDetail">${productos.price}</h3>
                    <span className="descuentoDetail">
                        {productos.price >= 13000 ? `10% OFF` : `5% OFF`}
                    </span>
                    <h4 className="card-title">{productos.title}</h4>
                    <h6 className="subtitle">Para: {productos.subtitle}</h6>
                    <p>★ ★ ★ ★ ★</p>
                    <span>Color:</span>
                    <div className="colorSelect">
                        <div className="negro color"></div>
                        <div className="verde color"></div>
                        <div className="arena color"></div>
                    </div>
                    <em>Descripción:</em>
                    <p className="description">{productos.description}</p>
                    <p className="description">
                        Nuestros holster estan fabricados con materiales
                        importados
                        <strong> de primera calidad.</strong> Utilizamos hojas
                        de kydex de 0.80 y 0.125 pulgadas, como materia prima
                        principal, y la combinación de herramientas y máquinas
                        de última generación, para su creación. Los holster
                        tienen una terminación artesanal, entregando a cada
                        cliente un producto de calidad, superando cualquier
                        espectativa operativa o estética.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;

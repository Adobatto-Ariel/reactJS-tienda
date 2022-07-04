import { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const [productos, setProductos] = useState();
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.npoint.io/12da0b198a1c538580f4/")
        .then(resp => resp.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err));
        setIsLoading(false)
    }, 3000);
  }, []);

  return (
    <main className="ItemList">
      {isLoading && 
      <div className="container_loader">
        <div className="loader">
          <p>MV Kydex® ARG</p>
          <span>Loading ...</span>
        </div>
      </div>}
      {productos &&
        productos.map(prod => (
          <Item
            id={prod.id}
            title={prod.title}
            subtitle={prod.subtitle}
            alt={prod.alt}
            /* description= */
            src={prod.src}
            price={prod.price}
            stock={prod.stock}
          />
        ))}
    </main>
  );
}

export default ItemList;

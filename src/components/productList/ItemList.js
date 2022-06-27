import { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const [productos, setProductos] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch("productos.json")
        .then(resp => resp.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err));
    }, 2000);
  }, []);

  return (
    <main className="ItemList">
      {productos &&
        productos.map(prod => (
          <Item
            title={prod.title}
            subtitle={prod.subtitle}
            alt={prod.alt}
            /* description= */
            src=""
            price={prod.price}
            stock={prod.stock}
          />
        ))}
    </main>
  );
}

export default ItemList;

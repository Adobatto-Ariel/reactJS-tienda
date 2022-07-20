import NavCategory from "../category/NavCategory";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
    return (
        <main className="ItemDetailContainer">
            <NavCategory />
            <ItemDetail />
        </main>
    );
}

export default ItemDetailContainer;

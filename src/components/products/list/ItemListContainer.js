import ItemList from "./ItemList";
import "./ItemListContainer.css";
import NavCategory from "../category/NavCategory";

function ItemListContainer() {
  return (
    <>
      <NavCategory />
      <main className="ItemListContainer">
        <ItemList />
      </main>
    </>
  );
}

export default ItemListContainer;

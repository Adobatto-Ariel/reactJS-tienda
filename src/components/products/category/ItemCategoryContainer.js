import ItemCategory from "./ItemCategory";
//import "./ItemCategoryContainer.css";
import NavCategory from "./NavCategory";

function ItemCategoryContainer() {
  return (
    <>
      <NavCategory />
      <main className="ItemCategoryContainer">
        <ItemCategory />
      </main>
    </>
  );
}

export default ItemCategoryContainer;

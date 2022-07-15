import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Tienda from "./pages/Tienda/Tienda";
import NotFound from "./pages/NotFound/NotFound";
import ItemDetailContainer from "./components/products/detail/ItemDetailContainer";
import ItemCategoryContainer from "./components/products/category/ItemCategoryContainer";
import Cart from "./components/products/list/Cart";
import { CartProvider } from "./components/context/cartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Tienda />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detalles/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/categorias/:category"
            element={<ItemCategoryContainer />}
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;

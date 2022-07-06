import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Tienda from "./pages/Tienda/Tienda";
import NotFound from "./pages/NotFound/NotFound";
import ItemDetailContainer from "./components/products/detail/ItemDetailContainer";
import ItemCategoryContainer from "./components/products/category/ItemCategoryContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Tienda />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
        <Route
          path="/categorias/:category"
          element={<ItemCategoryContainer />}
        />
      </Routes>
    </div>
  );
}

export default App;

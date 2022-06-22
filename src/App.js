import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/productList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;

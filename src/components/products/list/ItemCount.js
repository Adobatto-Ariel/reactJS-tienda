import "./ItemCount.css";
import { useState } from "react";
import mostrarError from "../alert";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function ItemCount({ stock, title, price }) {
  const [num, setNum] = useState(0);
  const [disBtnPlus, setDisBtnPlus] = useState(false);
  const [disBtnMinus, setDisBtnMinus] = useState(true);
  const [newStock, setNewStock] = useState(stock);
  const [counter, setCounter] = useState(true);
  const [comprar, setComprar] = useState(false);

  const sumar = () => {
    if (num < newStock) {
      setDisBtnMinus(false);
      setNum(num + 1);
    } else if (newStock !== 0) {
      mostrarError(`STOCK MÁXIMO:<br> ${newStock} unidades!`);
    } else {
      mostrarError(`PRODUCTO<br>SIN STOCK`);
    }
  };

  const restar = () => {
    num > 0 ? setNum(num - 1) : setDisBtnMinus(true);
  };

  const reset = () => {
    setNum(0);
  };

  const onAdd = (e) => {
    e.preventDefault();
    console.log(e);
    if (newStock > 0) {
      if (num > 0) {
        console.log(`Agregados al carrito ${num} productos`);
        setNewStock(Number(newStock) - num);
        setNum(0);
        setCounter(false);
        setComprar(true);
      }
    } else {
      setDisBtnPlus(true);
      mostrarError(`PRODUCTO SIN STOCK`);
    }
  };

  return (
    <>
      {counter && (
        <div className="itemCount">
          <p className="stock">
            {newStock > 0
              ? newStock < 6
                ? `Últimas ${newStock} unidades!!!`
                : `Stock disponible: ${newStock} unidades`
              : `Ya no quedan unidades!`}
          </p>
          <div className="botones">
            <div className="countContainer">
              <button
                className="boton"
                id="minus"
                onClick={restar}
                disabled={disBtnMinus}
              >
                -
              </button>
              <span className="counter">{num}</span>
              <button
                className="boton"
                id="plus"
                onClick={sumar}
                disabled={disBtnPlus}
              >
                +
              </button>
            </div>
            <button className="reset" onClick={reset}>
              ↻
            </button>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onAdd}>
            {stock > 0 ? `Agregar al carrito` : `Sin stock`}
          </button>
        </div>
      )}

      {comprar && (
        <Link to={`/cart`}>
          <button className="comprar btn btn-success" onClick={Cart}>
            Finalizar compra
          </button>
        </Link>
      )}
    </>
  );
}

export default ItemCount;

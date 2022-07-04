import "./ItemCount.css";
import { useState } from "react";
import mostrarError from "../alert";

function ItemCount({ stock }) {
  const [num, setNum] = useState(0);
  const [disBtnPlus, setDisBtnPlus] = useState(false);
  const [disBtnMinus, setDisBtnMinus] = useState(true);
  const [disBtnAdd, setDisBtnAdd] = useState(false);

  const sumar = () => {
    if (num < stock) {
      setDisBtnMinus(false);
      setNum(num + 1);
    } else if (stock !== 0) {
      mostrarError(`STOCK MÁXIMO:<br> ${stock} unidades!`);
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

  const onAdd = e => {
    e.preventDefault();
    if (stock > 0) {
      if (num > 0) {
        console.log(`Agregados al carrito ${num} productos`);
        setDisBtnAdd(true);
      }
    } else {
      setDisBtnPlus(true);
      mostrarError(`PRODUCTO SIN STOCK`);
    }
  };

  return (
    <div className="itemCount">
      <p className="stock">
        {stock > 0
          ? stock < 6
            ? `Últimas ${stock} unidades!!!`
            : `Stock disponible: ${stock} unidades`
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
      <a
        href="/"
        className="btn btn-primary"
        onClick={onAdd}
        disabled={disBtnAdd}
      >
        {stock > 0 ? `Agregar al carrito` : `Sin stock`}
      </a>
    </div>
  );
}

export default ItemCount;

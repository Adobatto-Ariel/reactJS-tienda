import "./ItemCount.css";
import { useState } from "react";
import mostrarError from "../alert";

function ItemCount({ stock, onAdd }) {
    const [num, setNum] = useState(0);
    const [disBtnPlus, setDisBtnPlus] = useState(false);
    const [disBtnMinus, setDisBtnMinus] = useState(true);
    let newStock = stock;
    console.log(newStock);
    console.log(typeof newStock);

    const sumar = () => {
        if (num < newStock) {
            setDisBtnMinus(false);
            setNum(num + 1);
        } else if (newStock !== 0 && num === newStock) {
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

    const addToCart = (e) => {
        e.preventDefault();
        console.log(e);
        if (newStock > 0) {
            if (num > 0) {
                console.log(`Agregados al carrito ${num} productos`);
                newStock = newStock - num;
                onAdd(num);
            }
        } else {
            setDisBtnPlus(true);
            mostrarError(`PRODUCTO SIN STOCK`);
        }
    };

    return (
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
            <button
                type="submit"
                className="btn btn-primary"
                onClick={addToCart}
            >
                {newStock > 0 ? `Agregar al carrito` : `Sin stock`}
            </button>
        </div>
    );
}

export default ItemCount;

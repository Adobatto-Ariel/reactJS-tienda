import Swal from "sweetalert2";

function success(name, quantity, total, id, fecha) {
    Swal.fire({
        position: "center",
        icon: "success",
        width: 400,
        title: `Gracias ${name} por tu compra.`,
        html: `
            <p>Detalle:</p>
            
            <span>Cantidad de productos: ${quantity}</span><br>
            <span>Total a pagar: $${total}</span><br>
            <span>Fecha de compra: ${fecha}</span>
            `,
        footer: `Orden nº: ${id}`,
        background: "rgb(255, 255, 255)",
        showConfirmButton: true,
    });
}

export default success;

import Swal from "sweetalert2";

function mostrarError(error) {
  Swal.fire({
    position: "center",
    icon: "warning",
    width: 350,
    title: `${error}`,
    background: "rgb(255, 255, 255)",
    showConfirmButton: true,
    timer: 3000
  });
}

export default mostrarError;

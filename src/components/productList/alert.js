import Swal from "sweetalert2";

function mostrarError(error) {
  Swal.fire({
    position: "center",
    icon: "warning",
    width: 350,
    title: `${error}`,
    background: "rgba(255, 255, 255, 0.9)",
    showConfirmButton: true,
    timer: 3000
  });
}

export default mostrarError;

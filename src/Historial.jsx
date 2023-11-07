import "./historial.css";
import { Link } from "react-router-dom";

function Historial() {
  return (
    <>
      <table>
        <tr>
          <th>Fecha de Cotización</th>
          <th>Propiedad</th>
          <th>Superficie</th>
          <th>Póliza Mensual</th>
        </tr>
      </table>
      <Link to="/"> VOLVER</Link>
    </>
  );
}

export default Historial;

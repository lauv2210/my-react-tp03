import "./historial.css";
import { Link } from "react-router-dom";

function Historial() {
  const objetosAlmacenados = [];
  const claves = Object.keys(localStorage);

  claves.forEach((clave) => {
    const valor = localStorage.getItem(clave);

    const objeto = JSON.parse(valor);
    objetosAlmacenados.push(objeto);
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Fecha de Cotización</th>
            <th>Propiedad</th>
            <th>Superficie</th>
            <th>Póliza Mensual</th>
          </tr>
        </thead>
        <tbody>
          {objetosAlmacenados.map((objeto) => (
            <tr>
              <td>{objeto.fecha}</td>
              <td>{objeto.propiedad}</td>
              <td>{objeto.superficie}</td>
              <td>{objeto.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/"> VOLVER</Link>
    </>
  );
}

export default Historial;

import Propiedad from "./Propiedad";
import Superficie from "./Superficie";
import Ubicacion from "./Ubicacion";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import "./form.css";

function Form() {
  const [resul, setResul] = useState(0);

  let id;

  if (localStorage.getItem("ultimaClave") != null) {
    id = localStorage.getItem("ultimaClave");
  } else {
    id = 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    id = parseInt(id) + 1;

    const valor1 = JSON.parse(sessionStorage.getItem("propiedad"));
    const valor2 = JSON.parse(sessionStorage.getItem("superficie"));
    const valor3 = JSON.parse(sessionStorage.getItem("factor"));
    const valor4 = JSON.parse(sessionStorage.getItem("barrio"));
    const valor5 = JSON.parse(sessionStorage.getItem("factor2"));

    const resul = valor2 * valor3 + valor5;

    let date = new Date();
    let dateArgentina = date.toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    });

    const localObj = {
      fecha: dateArgentina,
      propiedad: valor1,
      barrio: valor4,
      superficie: valor2,
      resultado: resul,
    };

    setResul(resul);

    localStorage.setItem(["objeto" + id], JSON.stringify(localObj));
    localStorage.setItem("ultimaClave", JSON.stringify(id));
  };

  return (
    <>
      <h1>Cotizador de Seguros de Hogar</h1>
      <Link to="/historial" className="estiloLink">
        Ver Historial
      </Link>
      <form onSubmit={handleSubmit}>
        <div id="divForm">
          <Propiedad />
          <Ubicacion />
          <Superficie />
          <button type="submit">CALCULAR</button>
        </div>
      </form>
      <p>RESULTADO = {resul}</p>
    </>
  );
}

export default Form;

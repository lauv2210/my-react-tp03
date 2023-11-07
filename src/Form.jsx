import Propiedad from "./Propiedad";
import Superficie from "./Superficie";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import "./form.css";

function Form() {
  const [resul, setResul] = useState(0);

  let id;

  if (sessionStorage.getItem("ultimaClave") != null) {
    id = sessionStorage.getItem("ultimaClave");
  } else {
    id = 0;
  }

  const handleClick = () => {
    id = parseInt(id) + 1;

    const valor1 = JSON.parse(sessionStorage.getItem("propiedad"));
    const valor2 = JSON.parse(sessionStorage.getItem("superficie"));
    const valor3 = JSON.parse(sessionStorage.getItem("factor"));

    const resul = valor2 * valor3;

    let date = new Date();
    let dateArgentina = date.toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    });

    const localObj = {
      fecha: dateArgentina,
      propiedad: valor1,
      superficie: valor2,
      resultado: resul,
    };

    setResul(resul);

    localStorage.setItem(["objeto" + id], JSON.stringify(localObj));
    sessionStorage.setItem("ultimaClave", JSON.stringify(id));
  };

  return (
    <>
      <h1>Cotizador de Seguros de Hogar</h1>
      <Link to="/historial" className="estiloLink">Ver Historial</Link>
      <form>
        <div id="divForm">
        <Propiedad />
        <Superficie />
        <button type="button" onClick={handleClick}>
          CALCULAR
        </button>
        </div>
      </form>
      <p>RESULTADO = {resul}</p>
    </>
  );
}

export default Form;

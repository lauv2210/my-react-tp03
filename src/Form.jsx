import Propiedad from "./Propiedad";
import Superficie from "./Superficie";
import { Link } from "react-router-dom";
import { useState } from "react";

function Form() {
  const [clave, setClave] = useState(0);
  const [resul, setResul] = useState(0);
  let id = 0;

  const handleClick = () => {
    id = clave + 1;
    setClave(id);
    const valor1 = JSON.parse(sessionStorage.getItem("propiedad"));
    const valor2 = JSON.parse(sessionStorage.getItem("superficie"));
    const valor3 = JSON.parse(sessionStorage.getItem("factor"));

    const resul = valor2 * valor3;

    let date = new Date().toJSON();

    const localObj = {
      fecha: date,
      propiedad: valor1,
      superficie: valor2,
      resultado: resul,
    };

    setResul(resul);

    localStorage.setItem(["objeto" + clave], JSON.stringify(localObj));
  };

  return (
    <>
      <h1>Cotizador de Seguros de Hogar</h1>
      <Link to="/historial">Ver Historial</Link>
      <form>
        <Propiedad />
        <Superficie />
        <button type="button" onClick={handleClick}>
          CALCULAR
        </button>
      </form>
      <p>{resul}:</p>
    </>
  );
}

export default Form;

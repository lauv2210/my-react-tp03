import Propiedad from "./Propiedad";
import Superficie from "./Superficie";
import { Link } from "react-router-dom";

function Form() {
  const handleClick = () => {
    const id = sessionStorage.getItem("id");
    const num1 = sessionStorage.getItem("superficie");
    const num2 = sessionStorage.getItem("factor");

    const obj1 = sessionStorage.getItem("propiedad");
    const obj2 = num1;
    const obj3 = num1 * num2;

    let date = new Date().toJSON();

    const localObj = {
      fecha: date,
      propiedad: obj1,
      superficie: num1,
      resultado: obj3,
    };

    localStorage.setItem(id, JSON.stringify(localObj));

    return <p>obj3</p>;
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
    </>
  );
}

export default Form;

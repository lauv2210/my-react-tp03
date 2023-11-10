import { useEffect, useState } from "react";

function Propiedad() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetch("https://654e2885cbc3253557427292.mockapi.io/propiedades")
      .then((res) => res.json())
      .then((datos) => setPropiedades(datos));
    sessionStorage.setItem("propiedad", JSON.stringify("Casa"));
    sessionStorage.setItem("factor", JSON.stringify("1.09"));
  }, []);

  const handleChange = (event) => {
    sessionStorage.setItem("propiedad", JSON.stringify(event.target.value));

    propiedades.forEach((elemento) => {
      if (elemento.tipo == event.target.value) {
        sessionStorage.setItem("id", JSON.stringify(elemento.id)); //este no utilizo despues (es de prueba)
        sessionStorage.setItem("factor", JSON.stringify(elemento.factor));
      }
    });
  };

  return (
    <>
      <div>
        <label htmlFor="propiedad">Tipo de Propiedad: </label>
        <select onChange={handleChange} name="propiedad" id="propiedad">
          {propiedades.map((elemento) => (
            <option value={elemento.tipo}>{elemento.tipo}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Propiedad;

import { useEffect, useState } from "react";

function Ubicacion() {
  const [barrios, setBarrios] = useState([]);

  useEffect(() => {
    fetch("https://654e2885cbc3253557427292.mockapi.io/barrios")
      .then((res) => res.json())
      .then((datos) => setBarrios(datos));
    sessionStorage.setItem("barrio", JSON.stringify("Palermo"));
    sessionStorage.setItem("factor2", JSON.stringify("25"));
  }, []);

  const handleChange = (event) => {
    sessionStorage.setItem("barrio", JSON.stringify(event.target.value));

    barrios.forEach((elemento) => {
      if (elemento.barrio == event.target.value) {
        sessionStorage.setItem("barrio", JSON.stringify(elemento.barrio));
        sessionStorage.setItem("factor2", JSON.stringify(elemento.factor2));
      }
    });
  };

  return (
    <>
      <div>
        <label htmlFor="barrio">Barrio: </label>
        <select onChange={handleChange} name="barrio" id="barrio">
          {barrios.map((elemento) => (
            <option value={elemento.barrio}>{elemento.barrio}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Ubicacion;

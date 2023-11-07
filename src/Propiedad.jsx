import { useEffect, useState } from "react";

function Propiedad() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((res) => res.json())
      .then((datos) => setPropiedades(datos));
  }, []);

  const handleChange = (event) => {
    sessionStorage.setItem("id", JSON.stringify(event.target.id));
    sessionStorage.setItem("propiedad", JSON.stringify(event.target.value));
    sessionStorage.setItem("factor", JSON.stringify(event.factor));
  };

  return (
    <>
      <div>
        <label htmlFor="propiedad">Tipo de Propiedad: </label>
        <select onChange={handleChange} name="propiedad" id="propiedad">
          {propiedades.map((propiedad) => (
            <option value={propiedad.tipo}>{propiedad.tipo}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Propiedad;

function Superficie() {
  const handleChange = (event) => {
    if (isNaN(event.target.value)) {
      alert("Ingresa un número sin puntos ni comas.");
      event.target.value = "";
    } else {
      sessionStorage.setItem("superficie", JSON.stringify(event.target.value));
    }
  };

  return (
    <>
      <div>
        <label htmlFor="superficie">Ingrese la superficie: </label>
        <input
          type="text"
          name="superficie"
          id="superficie"
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

export default Superficie;

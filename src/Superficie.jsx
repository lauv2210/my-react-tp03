function Superficie() {
  const handleChange = (event) => {
    sessionStorage.setItem("superficie", JSON.stringify(event.target.value));
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

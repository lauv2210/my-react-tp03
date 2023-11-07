import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Historial from "./Historial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Form} />
          <Route path="/historial" Component={Historial} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

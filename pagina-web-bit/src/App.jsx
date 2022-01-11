import "./App.css";
import Inicio from "./pages/Index";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import DeathNote from "./pages/DeathNoteBienvenida";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import "./styles/stylesPersonajesBuenos.css";
import "./styles/stylesPersonajesMalos.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Pagina1" element={<Pagina1 />} />
        <Route path="Pagina2" element={<Pagina2 />} />
        <Route path="DeathNote" element={<DeathNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

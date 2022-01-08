import "./App.css";
import Inicio from "./pages/Index";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Pagina1" element={<Pagina1 />} />
        <Route path="Pagina2" element={<Pagina2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

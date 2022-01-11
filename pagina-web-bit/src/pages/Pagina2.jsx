import React from "react";
import { Link } from "react-router-dom";
import Logo from "../media/logo.png";
import PersonajeMello from "../media/personajeMello.png";
import Personaje2Near from "../media/personaje4Near.png";
const Pagina2 = () => {
  return (
    <div>
      <header class="header">
        <ul class="navbar">
          <li>
            <img src={Logo} alt="Logo BIT" class="Logo" />
          </li>
          <li>
            <button class="button mainButton">
              <Link to="/">L</Link>
            </button>
          </li>
          <li>
            <button class="button ButtonLogin">
              <Link to="/Pagina1">Near </Link>
            </button>
          </li>
        </ul>
      </header>
      <main>
        <div className="note">
          <div className="Mello">
            <div>
              <Link to="/Pagina2">
                <img src={PersonajeMello} alt="Personaje Mello" />
              </Link>
            </div>
            <div className="texto">
              <h1>Mello </h1>
              <p>
                L pasó su infancia en La Casa de Wammy, el orfanato para niños
                superdotados fundado por Watari con el objetivo de encontrar a
                alguien capaz de ejercer el papel de "mejor detective del
                mundo".
              </p>
            </div>
          </div>
          <div className="Near">
            <div className="texto">
              <h1>Near Yagami </h1>
              <p>
                Near Yagami es un estudiante de 17 años con el mejor promedio
                académico de todo Japón. Es un hijo modelo y un buen estudiante,
                posee una gran genialidad, educado, correcto, narcisista y
                egocéntrico. No tiene mucha vida social, pues sacrifica todos
                sus ratos libres estudiando.
              </p>
            </div>
            <div>
              <Link to="/Pagina1">
                <img src={Personaje2Near} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer class="footer">
        <ul class="navbar">
          <li>
            <img src={Logo} alt="Logo BIT" class="Logo" />
          </li>
          <li>
            <button class="button mainButton">Contacto</button>
          </li>
          <li>Jose De Jesus Barajas</li>
        </ul>
      </footer>
    </div>
  );
};

export default Pagina2;

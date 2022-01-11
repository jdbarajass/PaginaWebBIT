import React from "react";
import Personaje1ELE from "../media/personaje1ELE.png";
import Personaje2light from "../media/personaje2light.png";
import { Link } from "react-router-dom";
import Logo from "../media/logo.png";

const DeathNoteBienvenida = () => {
  return (
    <body>
      <header class="header">
        <ul class="navbar">
          <li>
            <img src={Logo} alt="Logo BIT" class="Logo" />
          </li>
          <li>
            <button class="button mainButton">
              <Link to="/">Light Yagami</Link>
            </button>
          </li>
          <li>
            <button class="button ButtonLogin">
              <Link to="/Pagina2">ELE</Link>
            </button>
          </li>
        </ul>
      </header>
      <div class="fondo">
        <div class="img">
          <div class="imagen">
            <img src="../media/personaje1ELE.png" alt="" />
          </div>
        </div>
      </div>
      <div className="note">
        <div className="ELE">
          <div className="fondo_isla">
            <Link to="/Pagina2">
              <img src={Personaje1ELE} alt="" />
            </Link>
          </div>
          <div className="texto">
            <h1>ELE </h1>
            <p>
              L pasó su infancia en La Casa de Wammy, el orfanato para niños
              superdotados fundado por Watari con el objetivo de encontrar a
              alguien capaz de ejercer el papel de "mejor detective del mundo".
            </p>
          </div>
        </div>
        <div className="Light">
          <div className="texto">
            <h1>Light Yagami </h1>
            <p>
              Light Yagami es un estudiante de 17 años con el mejor promedio
              académico de todo Japón. Es un hijo modelo y un buen estudiante,
              posee una gran genialidad, educado, correcto, narcisista y
              egocéntrico. No tiene mucha vida social, pues sacrifica todos sus
              ratos libres estudiando.
            </p>
          </div>
          <div>
            <Link to="/Pagina1">
              <img src={Personaje2light} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <footer class="footer">
        <p>
          Jesus Barajas <br />
          BIT
        </p>
      </footer>
    </body>
  );
};

export default DeathNoteBienvenida;

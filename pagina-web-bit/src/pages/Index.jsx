import React from "react";
import { Link } from "react-router-dom";
import Logo from "../media/logo.png";
//import Eren from "../media/eren.jpg";

const Index = () => {
  return (
    <div>
      <header class="header">
        <ul class="navbar">
          <li>
            <img src={Logo} alt="Logo BIT" class="Logo" />
          </li>
          <li>
            <button class="button mainButton">
              Banda Británica Whitesnake
            </button>
          </li>
          <li>
            <button button class="button ButtonLogin">
              Historia de la Banda Británica
            </button>
          </li>
          <li>
            <button class="button ButtonLogin">
              Videos de la Banda Británica
            </button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <div class="TituloPagina">
            <h1>Banda Música Favorita</h1>
          </div>

          <ul class="contenedordetarjeta">
            <li class="tarjeta">
              <div class="ContenedorImagen">
                <Link to="/Pagina1">
                  <img src="" alt="Whitesnake" />
                </Link>
              </div>
              <span class="TituloTarjeta"> Galeria De Whitesnake </span>
            </li>
            <li class="tarjeta">
              <a href="videos.html">
                <div class="ContenedorImagen">
                  <img src="" alt="Whitesnake" />
                </div>
              </a>
              <span class="TituloTarjeta"> Videos De Whitesnake </span>
            </li>
          </ul>
        </section>
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

export default Index;

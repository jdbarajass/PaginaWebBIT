import React from "react";
import { Link } from "react-router-dom";
import Logo from "../media/logo.png";
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
              <Link to="/">Inicio</Link>
            </button>
          </li>
          <li>
            <button class="button ButtonLogin">
              <Link to="/Pagina1">Galeria de la Banda Británica</Link>
            </button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <div class="TituloPagina">
            <h1>Vídeos De La Banda Músical Whitesnake</h1>
          </div>

          <ul class="contenedordetarjeta">
            <li class="tarjeta">
              <div class="ContenedorImagen">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/u2VhwVLkQjY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <span class="TituloTarjeta">Video 1 </span>
            </li>
            <li class="tarjeta">
              <div class="ContenedorImagen">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/u2VhwVLkQjY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <span class="TituloTarjeta">Video 2 </span>
            </li>
            <li class="tarjeta">
              <div class="ContenedorImagen">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/u2VhwVLkQjY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <span class="TituloTarjeta">Video 3 </span>
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

export default Pagina2;

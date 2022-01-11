import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../media/logo.png";

const Pagina1 = () => {
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
                <Link to="/Pagina2">Videos de la Banda Británica</Link>
              </button>
            </li>
          </ul>
        </header>
        <main>
          <section>
            <div class="TituloPagina">
              <h1>Galeria De La Banda Músical Whitesnake</h1>
            </div>

            <ul class="contenedordetarjeta">
              <li class="tarjeta">
                <div class="ContenedorImagen">
                  <img src="media/WHITESNAKE6.jpg" alt="Whitesnake" />
                </div>
                <span class="TituloTarjeta">Whitesnake Album </span>
              </li>
              <li class="tarjeta">
                <div class="ContenedorImagen">
                  <img src="media/WHITESNAKE5.jpg" alt="Whitesnake" />
                </div>
                <span class="TituloTarjeta">Otra foto</span>
              </li>
              <li class="tarjeta">
                <div class="ContenedorImagen">
                  <img src="media/WHITESNAKE4.jpg" alt="Whitesnake" />
                </div>
                <span class="TituloTarjeta">Otra foto</span>
              </li>
            </ul>
            <ul class="contenedordetarjeta">
              <li class="tarjeta">
                <div class="ContenedorImagen">
                  <img src="media/WHITESNAKE3.jpg" alt="Whitesnake" />
                </div>
                <span class="TituloTarjeta">Whitesnake </span>
              </li>
              <li class="tarjeta">
                <div class="ContenedorImagen">
                  <img src="media/WHITESNAKE2.jpg" alt="Whitesnake" />
                </div>
                <span class="TituloTarjeta">Otra foto</span>
              </li>
              <li class="tarjeta">
                <div class="ContenedorImagen">
                  <img src="media/WHITESNAKE.jpg" alt="Whitesnake" />
                </div>
                <span class="TituloTarjeta">Otra foto</span>
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
}

export default Pagina1

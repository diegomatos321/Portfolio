import { useEffect } from "react";
import Aside from "./Aside";
import MetaDados from "../../../seo/asteroides";
import LoadJS from "../../../utils/loadJS";

export default function FlappyBird() {
  useEffect(function init() {
    window.scrollTo(0, 0);
    LoadJS({
      id: "asteroidesJS",
      src: "/assets/js/jogo-asteroides/index.js",
      defer: true,
      type: "module"
    });

    return function removeGameJSAndReloadPage() {
      let asteroidesJS = document.getElementById("asteroidesJS");
      asteroidesJS.remove();
      window.location.reload();
    }
  }, [])

  return (
    <>
      <MetaDados />
      <div id="container-trabalho" className="container-trabalho">
        <div className="title">
          <h1>Jogo Asteroides</h1>
          <hr />
        </div>
        <Aside />
        <main className="pagina-apresentacao">
          <div className="jogo jogo-asteroides game-screen">
            <div className="loading-txt" id="loading-txt"></div>
            <div id="game-screen" className="jogo-container game-screen"></div>
          </div>
          <div className="flex-container btn-container">
            <h3>Veja o código desse jogo</h3>
            <div className="btn widget-item">
              <a
                href="https://github.com/diegomatos321/Projetos/tree/main/Javascript/Introducao-ao-Desenvolvimento-de-Jogos"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github-square"></i>
                <p className="font-size-small">GitHub</p>
              </a>
            </div>
          </div>
          <br />
        </main>
      </div>
    </>
  );
}

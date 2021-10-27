import { useEffect } from "react";
import MetaDados from "../../../seo/super-mario";
import LoadJS from "../../../utils/loadJS";
import Aside from "./Aside";

export default function SuperMario() {
/*   useEffect(function init() {
    window.scrollTo(0, 0);
    LoadJS({
      src: "/assets/js/phaser.min.js",
      id: "phaser-framework",
      callback: function () {
        LoadJS({
          src: "/assets/js/super-mario/index.js",
          id: "jogo",
          defer: true,
          type: "module"
        })
      }
    });
    
    return function removeGameJSAndReloadPage() {
      let phaser = document.getElementById("phaser-framework");
      let jogo = document.getElementById("jogo");

      phaser.remove();
      jogo.remove();
      window.location.reload()
    }
  }, []) */

  return (
    <>
      <MetaDados />
      <div id="container-trabalho" className="container-trabalho">
        <div className="title">
          <h1 className="title">Jogo do Super Mario</h1>
          <hr />
        </div>
        <Aside />
        <main className="pagina-apresentacao">
          <div id="jogo" className="jogo">
            <iframe width="100%" height="100%" src="https://diegomatos321.github.io/Projetos/Phaser/Super-Mario-Bros/" allowFullScreen frameborder="0"></iframe>
          </div>
          <div className="flex-container btn-container">
            <h3>Veja o código desse jogo</h3>
            <div className="btn widget-item">
              <a
                href="https://github.com/diegomatos321/Projetos/tree/main/Phaser/Super-Mario-Bros"
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

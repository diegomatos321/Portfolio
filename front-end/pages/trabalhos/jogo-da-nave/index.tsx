import MetaDados from "../../../seo/jogo-da-nave";
import Aside from "./Aside";

export default function JogoDaNave() {
  return (
    <>
      <MetaDados />
      <div id="container-trabalho" className="container-trabalho">
        <div className="title">
          <h1 className="title">Jogo da Nave</h1>
          <hr />
        </div>
        <Aside />
        <main className="pagina-apresentacao">
          <div id="jogo" className="jogo">
            <iframe width="100%" height="100%" title="Jogo da Nave" src="https://diegomatos321.github.io/Projetos/Phaser/Jogo-Da-Nave-Phaser/" allowFullScreen frameBorder="0"></iframe>
          </div>
          <div className="flex-container btn-container">
            <h3>Veja o código desse jogo</h3>
            <div className="btn widget-item">
              <a
                href="https://github.com/diegomatos321/Projetos/tree/main/Phaser/Jogo-Da-Nave-Phaser"
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

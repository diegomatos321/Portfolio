import MetaDados from "../../../seo/super-mario";
import Aside from "./Aside";

export default function SuperMario() {
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
            <iframe width="100%" height="100%" title="Super Mario Bros" src="https://diegomatos321.github.io/Projetos/Phaser/Super-Mario-Bros/" allowFullScreen frameborder="0"></iframe>
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

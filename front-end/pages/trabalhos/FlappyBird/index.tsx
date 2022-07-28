import Aside from "./Aside";
import MetaDados from "../../../seo/flappybird";

export default function FlappyBird() {
  return (
    <>
      <MetaDados />
      <div id="container-trabalho" className="container-trabalho">
        <div className="title">
          <h1>FlappyBird</h1>
          <hr />
        </div>
        <Aside />
        <main className="pagina-apresentacao">
          <div id="jogo" className="jogo">
            <iframe width="100%" height="100%" title="Clone FlappyBird" src="https://clone-flappy-bird.herokuapp.com/" allowFullScreen frameBorder="0"></iframe>
          </div>
          <div className="flex-container btn-container">
            <h3>Veja o código desse jogo</h3>
            <div className="btn widget-item">
              <a
                href="https://github.com/diegomatos321/Projetos/tree/main/Node/Jogo-Flappy-Bird-COM-Banco-de-Dados"
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

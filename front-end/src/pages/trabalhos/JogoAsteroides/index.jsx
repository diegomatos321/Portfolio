import Aside from "./Aside";
import MetaDados from "../../../seo/asteroides";

export default function FlappyBird() {
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
          <div className="jogo">
            <iframe width="100%" height="100%" src="https://diegomatos321.github.io/Projetos/Javascript/Introducao-ao-Desenvolvimento-de-Jogos/" allowFullScreen frameborder="0"></iframe>
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

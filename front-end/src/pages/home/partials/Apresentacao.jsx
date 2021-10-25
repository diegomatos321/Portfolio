import { curriculo, fotoDePerfil } from "../../../asset-pack.json"

export default function Apresentacao() {
  return (
    <section id="home">
      <div className="container-apresentacao">
        <h1>Desenvolvedor Full Stack</h1>
        <picture>
          <source srcSet={fotoDePerfil.webp} type="image/webp" />
          <img src={fotoDePerfil.png} alt="Foto de Perfil" title="Foto de Perfil" />
          <p>Desenvolvedor Diego Matos</p>
        </picture>
        <div className="flex-container areas-trabalho">
          <div className="flex-item front-end">
            <h2>Front End</h2>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                  HTML5
                </li>
              <li>
                <i className="fas fa-check"> </i>
                  CSS 3
                </li>
              <li>
                <i className="fas fa-check"></i>
                  JavaScript
                </li>
              <li>
                <i className="fas fa-check"></i>
                  React
                </li>
              <li>
                <i className="fas fa-check"></i>
                  WordPress
              </li>
            </ul>
          </div>
          <div className="flex-item back-end">
            <h2>Back End</h2>
            <ul>
              <li>
                <i className="fas fa-check"> </i>
                  Node JS
              </li>
              <li>
                <i className="fas fa-check"></i>
                  Java
              </li>
              <li>
                <i className="fas fa-check"></i>
                  PHP
              </li>
            </ul>
          </div>
          <div className="flex-item">
            <h2>Análise / Gestão</h2>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                SEO
              </li>
            </ul>
          </div>
          <div className="flex-item">
            <h2>SGDB</h2>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                MySQL
              </li>
              <li>
                <i className="fas fa-check"></i>
                MongoDB
              </li>
            </ul>
          </div>
          <div className="flex-item">
            <h2>Des. Games</h2>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                Unity
              </li>
              <li>
                <i className="fas fa-check"></i>
                Godot
              </li>
              <li>
                <i className="fas fa-check"></i>
                Construct 2
              </li>
              <li>
                <i className="fas fa-check"></i>
                Web
              </li>
            </ul>
          </div>
          <div className="flex-item">
            <h2>Outras Linguagens</h2>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                GIT
              </li>
              <li>
                <i className="fas fa-check"></i>
                SQL
              </li>
              <li>
                <i className="fas fa-check"></i>
                C
              </li>
              <li>
                <i className="fas fa-check"></i>
                C++
              </li>
              <li>
                <i className="fas fa-check"></i>
                C#
              </li>
              <li>
                <i className="fas fa-check"></i>
                  Python
              </li>
              <li>
                <i className="fas fa-check"></i>
                GDScript
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons flex-container">
          <a
            className="flex-item btn"
            href={curriculo}
            target="_blank"
            rel="noreferrer"
          >
            Baixe o meu curriculum
            </a>
          <a
            className="flex-item btn"
            href="https://github.com/diegomatos321/Portfolio-React"
            rel="noopener noreferrer"
            target="_blank"
          >
            Veja esse site no GitHub
            </a>
        </div>
      </div>
    </section>
  );
}

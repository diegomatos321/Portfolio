import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../uploads/imagens/logo.webp";
import { logo } from "../asset-pack.json"

export default function Header() {
  return (
    <header id="header" className="header">
      <Link to="/">
        <picture className="img logo">
          <source srcSet={logo.webp} type="image/webp"/>
          <img src={logo.png} alt="Logo do site" title="Logo do Site" />
        </picture>
      </Link>
      <nav className="main-nav">
        <ul className="nav">
          <li className="nav-item item-home">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item item-about">
            <Link to={{
              pathname:"/",
              hash:"#about"
            }}>Sobre Mim</Link>
          </li>

          <ul className="nav-item sub-nav item-trabalhos">
            <li>
              <Link to="/trabalhos">Trabalhos</Link>
            </li>
            <ul className="drop-down">
              <li className="sub-nav-item">
                <a href="https://gdpufrj.itch.io/laje-4" target="_blank" rel="noopener noreferrer">Lia na Floresta Mágica</a>
              </li>
              <li className="sub-nav-item">
                <Link to="/trabalhos/flappybird">
                  FlappyBird
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link to="/trabalhos/jogo-da-nave">
                  Jogo da Nave
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link to="/trabalhos/super-mario">
                  Super Mario
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link to="/trabalhos/jogo-asteroides">
                  Asteroides
                </Link>
              </li>
            </ul>
          </ul>

          <li className="nav-item item-contato">
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

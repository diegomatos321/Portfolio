import React, { Component } from "react";
import {Link} from "react-router-dom";
import Masonry from "../utils/mansory-custom";

import { flappyBird, jogoDaNave, jogoAsteroides, superMario, liaNaFlorestaMagica } from "../asset-pack.json"

export default class Trabalhos extends Component {
  constructor(props){
    super(props);
    this.state = {
      imagensCarregadas: 0,
      totalDeImagens: 5,
    }
  }

  imageHandler = e =>{
    this.setState(prevState => {
      return {
        imagensCarregadas : prevState.imagensCarregadas + 1,
      }
    });
  }

  render() {
    const {imagensCarregadas, totalDeImagens} = this.state;
    if(imagensCarregadas === totalDeImagens){
      Masonry(document.getElementById("mansory-grid"))
    }
    
    return (
      <div id="mansory-grid" className="mansory-grid">
        <a href="https://gdpufrj.itch.io/laje-4" target="_blank" rel="noopener noreferrer" className="mansory-item">
          <article>
            <picture>
              <source srcSet={liaNaFlorestaMagica.webp} type="image/webp"/>
              <img
                className="img"
                id="liaNaFlorestaMagica"
                src={liaNaFlorestaMagica.png}
                alt="Imagem do jogo Lia na Floresta Mágica"
                title="Imagem do jogo Lia na floresta Mágica"
                onLoad={this.imageHandler}
              />
              <p>
                Lia na Floresta Mágica foi desenvolvido durante o LAJE 2021 - (Laboratório de Aprendizado de Jogos Eletrônicos)
              </p>
            </picture>
          </article>
        </a>
        <Link to= "/trabalhos/flappybird" className="mansory-item">
          <article>
            <picture>
              <source srcSet={flappyBird.webp} type="image/webp"/>
              <img
                className="img"
                id="flappybird"
                src={flappyBird.png}
                alt="Imagem do jogo FlappyBird"
                title="Imagem do jogo FlappyBird"
                onLoad={this.imageHandler}
              />
              <p>
                <strong>Clone</strong> do <strong>FlappyBird</strong> com <strong>banco de dados</strong>, usando <strong>Node JS</strong> e <strong>MongoDB</strong> no BackEnd.
              </p>
            </picture>
          </article>
        </Link>
        <Link to="/trabalhos/jogo-da-nave" className="mansory-item">
          <article>
            <picture>
              <source srcSet={jogoDaNave.webp} type="image/webp"/>
              <img
                className="img"
                id="jogoDaNave"
                src={jogoDaNave.png}
                alt="Imagem do jogo da Nave"
                title="Imagem do jogo da Nave"
                onLoad={this.imageHandler}
              />
              <p>
                <strong>Jogo da Nave</strong> usando o framework <strong>Phaser</strong>.
              </p>
            </picture>
          </article>
        </Link>
        <Link to="/trabalhos/super-mario" className="mansory-item">
          <article>
            <picture>
              <source srcSet={superMario.webp} type="image/webp"/>
              <img
                className="img"
                id="superMario"
                srcSet={superMario.png}
                alt="Imagem do jogo do Super Mario Bros"
                title="Imagem do jogo do Super Mario Bros"
                onLoad={this.imageHandler}
              />
              <p>
                <strong>Clone</strong> do <strong>Super Mario Bros</strong> desenvolvido usando o framework <strong>Phaser</strong>.
              </p>
            </picture>
          </article>
        </Link>
        <Link to="/trabalhos/jogo-asteroides" className="mansory-item">
          <article>
            <picture>
              <source srcSet={jogoAsteroides.webp} type="image/webp"/>
              <img
                className="img"
                id="jogoAsteroides"
                src={jogoAsteroides.png}
                alt="Imagem do jogo asteroides"
                title="Imagem do jogo asteroides"
                onLoad={this.imageHandler}
              />
              <p>
                <strong>Jogo Asteroides</strong> desenvolvido em JavaScript Puro.
              </p>
            </picture>
          </article>
        </Link>
      </div>
    );
  }
}

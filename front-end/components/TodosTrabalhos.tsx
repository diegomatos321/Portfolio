import Link from "next/link";

export default function TodosTrabalhos(): JSX.Element {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://gdpufrj.itch.io/laje-4" className="trabalho-item" target="_blank" rel="noopener noreferrer">
                <article>
                    <div className="img-portrait">
                        <picture>
                            <source srcSet="/assets/imagens/lia-na-floresta-magica.webp" type="image/webp" />
                            <img
                                className="img"
                                width="250px"
                                id="liaNaFlorestaMagica"
                                src="lia-na-floresta-magica.png"
                                alt="Imagem do jogo Lia na Floresta Mágica"
                                title="Imagem do jogo Lia na floresta Mágica"
                            />
                        </picture>
                    </div>
                    <p>
                        Lia na Floresta Mágica foi desenvolvido durante o LAJE 2021 - (Laboratório de Aprendizado de Jogos Eletrônicos)
                    </p>
                </article>
            </a>
            <Link href="/trabalhos/flappybird">
                <a className="trabalho-item">
                    <article>
                        <div className="img-portrait">
                            <picture>
                                <source srcSet="/assets/imagens/flappybird.webp" type="image/webp" />
                                <img
                                    className="img"
                                    id="flappybird"
                                    width="100%"
                                    src="/assets/imagens/flappybird.webp"
                                    alt="Imagem do jogo FlappyBird"
                                    title="Imagem do jogo FlappyBird"
                                />
                            </picture>
                        </div>
                        <p>
                            <strong>Clone</strong> do <strong>FlappyBird</strong> com <strong>banco de dados</strong>, usando <strong>Node JS</strong> e <strong>MongoDB</strong> no BackEnd.
                        </p>
                    </article>
                </a>
            </Link>
            <Link href="/trabalhos/jogo-da-nave">
                <a className="trabalho-item">
                    <article>
                        <div className="img-portrait">
                            <picture>
                                <source srcSet="/assets/imagens/jogo-da-nave.webp" type="image/webp" />
                                <img
                                    className="img"
                                    id="jogoDaNave"
                                    width="100%"
                                    src="/assets/imagens/jogo-da-nave.png"
                                    alt="Imagem do jogo da Nave"
                                    title="Imagem do jogo da Nave"
                                />
                            </picture>
                        </div>
                        <p>
                            <strong>Jogo da Nave</strong> usando o framework <strong>Phaser</strong>.
                        </p>
                    </article>
                </a>
            </Link>
            <Link href="/trabalhos/super-mario">
                <a className="trabalho-item">
                    <article>
                        <div className="img-portrait">
                            <picture>
                                <source srcSet="/assets/imagens/super-mario.webp" type="image/webp" />
                                <img
                                    className="img"
                                    id="superMario"
                                    width="100%"
                                    srcSet="/assets/imagens/super-mario.png"
                                    alt="Imagem do jogo do Super Mario Bros"
                                    title="Imagem do jogo do Super Mario Bros"
                                />
                            </picture>
                        </div>
                        <p>
                            <strong>Clone</strong> do <strong>Super Mario Bros</strong> desenvolvido usando o framework <strong>Phaser</strong>.
                        </p>
                    </article>
                </a>
            </Link>
            <Link href="/trabalhos/jogo-asteroides" className="mansory-item">
                <a className="trabalho-item">
                    <article>
                        <div className="img-portrait">
                            <picture>
                                <source srcSet="/assets/imagens/asteroides.webp" type="image/webp" />
                                <img
                                    className="img"
                                    id="jogoAsteroides"
                                    width="100%"
                                    src="/assets/imagens/asteroides.png"
                                    alt="Imagem do jogo asteroides"
                                    title="Imagem do jogo asteroides"
                                />
                            </picture>
                        </div>
                        <p>
                            <strong>Jogo Asteroides</strong> desenvolvido em JavaScript Puro.
                        </p>
                    </article>
                </a>
            </Link>
        </div>
    );
}

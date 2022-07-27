import Link from "next/link";

export default function TodosTrabalhos(): JSX.Element {
    return (
        <div>
            <a href="https://gdpufrj.itch.io/laje-4" target="_blank" rel="noopener noreferrer">
                <article>
                    <picture>
                        <source srcSet="/assets/imagens/lia-na-floresta-magica.webp" type="image/webp" />
                        <img
                            className="img"
                            id="liaNaFlorestaMagica"
                            src="lia-na-floresta-magica.png"
                            alt="Imagem do jogo Lia na Floresta Mágica"
                            title="Imagem do jogo Lia na floresta Mágica"
                        />
                        <p>
                            Lia na Floresta Mágica foi desenvolvido durante o LAJE 2021 - (Laboratório de Aprendizado de Jogos Eletrônicos)
                        </p>
                    </picture>
                </article>
            </a>
            <Link href="/trabalhos/flappybird">
                <article>
                    <picture>
                        <source srcSet="/assets/imagens/flappybird.webp" type="image/webp" />
                        <img
                            className="img"
                            id="flappybird"
                            src="/assets/imagens/flappybird.webp"
                            alt="Imagem do jogo FlappyBird"
                            title="Imagem do jogo FlappyBird"
                        />
                        <p>
                            <strong>Clone</strong> do <strong>FlappyBird</strong> com <strong>banco de dados</strong>, usando <strong>Node JS</strong> e <strong>MongoDB</strong> no BackEnd.
                        </p>
                    </picture>
                </article>
            </Link>
            <Link href="/trabalhos/jogo-da-nave">
                <article>
                    <picture>
                        <source srcSet="/assets/imagens/jogo-da-nave.webp" type="image/webp" />
                        <img
                            className="img"
                            id="jogoDaNave"
                            src="/assets/imagens/jogo-da-nave.png"
                            alt="Imagem do jogo da Nave"
                            title="Imagem do jogo da Nave"
                        />
                        <p>
                            <strong>Jogo da Nave</strong> usando o framework <strong>Phaser</strong>.
                        </p>
                    </picture>
                </article>
            </Link>
            <Link href="/trabalhos/super-mario">
                <article>
                    <picture>
                        <source srcSet="/assets/imagens/super-mario.webp" type="image/webp" />
                        <img
                            className="img"
                            id="superMario"
                            srcSet="/assets/imagens/super-mario.png"
                            alt="Imagem do jogo do Super Mario Bros"
                            title="Imagem do jogo do Super Mario Bros"
                        />
                        <p>
                            <strong>Clone</strong> do <strong>Super Mario Bros</strong> desenvolvido usando o framework <strong>Phaser</strong>.
                        </p>
                    </picture>
                </article>
            </Link>
            <Link href="/trabalhos/jogo-asteroides" className="mansory-item">
                <article>
                    <picture>
                        <source srcSet="/assets/imagens/asteroides.webp" type="image/webp" />
                        <img
                            className="img"
                            id="jogoAsteroides"
                            src="/assets/imagens/asteroides.png"
                            alt="Imagem do jogo asteroides"
                            title="Imagem do jogo asteroides"
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

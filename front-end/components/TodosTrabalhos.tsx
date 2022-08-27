import Link from "next/link";

export default function TodosTrabalhos(): JSX.Element {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://www.cuidadoeafeto.com.br" className="trabalho-item" target="_blank" rel="noopener noreferrer">
                <article>
                    <div className="img-portrait">
                        <img src="/assets/imagens/cuidado-e-afeto.svg" width='100%' alt="Logo da plataforma de Cuidadores Pessoais do Rio de Janeiro - Cuidado e Afeto" title="Logo da plataforma de Cuidadores Pessoais do Rio de Janeiro - Cuidado e Afeto" />
                    </div>
                    <p>
                        Plataforma de cuidadores pessoais no rio de janeiro encomendada em 2022
                    </p>
                </article>
            </a>
            <a href="https://gdpufrj.itch.io/laje-4" className="trabalho-item" target="_blank" rel="noopener noreferrer">
                <article>
                    <div className="img-portrait">
                        <picture>
                            <source srcSet="/assets/imagens/lia-na-floresta-magica.webp" type="image/webp" />
                            <img
                                className="img"
                                width="250px"
                                src="/assets/imagens/lia-na-floresta-magica.png"
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
        </div>
    );
}

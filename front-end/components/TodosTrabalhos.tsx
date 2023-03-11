export default function TodosTrabalhos(): JSX.Element {
    return (
        <section>
            <div className="container p-4 mx-auto">
                <header className="hidden">
                    <h2 className="text-4xl"><strong>Meus projetos</strong></h2>
                </header>

                <ul className="grid grid-cols-4 gap-4 items-end">
                    <li>
                        <a href="https://www.preparavestibular.com.br" target="_blank">
                            <div>
                                <img src="/assets/imagens/Prepara Vestibular - Assinatura Principal - Fundo Transparente_300_130.png" alt="Marca Prepara Vestibular" />
                                <div className="p-4">
                                    <p>Plataforma Gamificada de resolução de questões</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.cuidadoeafeto.com.br" target="_blank">
                            <div>
                                <img src="/assets/imagens/logo-cuidado-e-afeto.png" alt="Marca Cuidado e AFeto" />
                                <div className="p-4">
                                    <p>Plataforma de Cuidadores Pessoais no Rio de Janeiro</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://diegomatos321.github.io/escola-mozilla-verso/" target="_blank">
                            <div>
                                <img src="/assets/imagens/minijogos-imagem-principal_300_169.png" alt="Minijogos Imagem principal" />
                                <div className="p-4">
                                    <p>Coletânea de minijogos encomendados por uma escola.</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://estudioz.art.br/" target="_blank">
                            <div>
                                <img src="/assets/imagens/landing-page-estudio-z.png" alt="Marca EstudioZ" />
                                <div className="p-4">
                                    <p>Landing page para estudio Artístico do Rio de Janeiro.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>

                <div className="text-right">
                    <p>Acesse minha <a href="https://diegomatos321.github.io/Projetos/">página no Github</a> para ver projetos menores que foram usados para estudo e não estão em produção</p>
                </div>
            </div>
        </section>
    );
}

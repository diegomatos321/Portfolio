import TrabalhoCard from "./home/TrabalhoCard";

export default function TodosTrabalhos(): JSX.Element {
    return (
        <section>
            <div className="container px-4 py-8 mx-auto space-y-4">
                <header className="hidden">
                    <h2 className="text-4xl"><strong>Meus projetos</strong></h2>
                </header>

                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <li className="h-full">
                        <TrabalhoCard
                            title="Prepara Vestibular"
                            link="https://www.preparavestibular.com.br"
                            imgSrc="/assets/imagens/Prepara Vestibular - Assinatura Principal - Fundo Transparente_300_130.png"
                            imgAlt="Marca do Prepara Vestibular"
                        >
                            <p>Plataforma gamificada, gratuita, de resolução de questões para o vestibular.</p>
                        </TrabalhoCard>
                    </li>

                    <li>
                        <TrabalhoCard
                            title="Cuidado e Afeto"
                            link="https://www.cuidadoeafeto.com.br"
                            imgSrc="/assets/imagens/logo-cuidado-e-afeto.png"
                            imgAlt="Marca do Prepara Vestibular"
                        >
                            <p>Plataforma de Cuidadores Pessoais no Rio de Janeiro</p>
                        </TrabalhoCard>
                    </li>

                    <li>
                        <TrabalhoCard
                            title="Minijogos Educativos"
                            link="https://diegomatos321.github.io/escola-mozilla-verso/"
                            imgSrc="/assets/imagens/minijogos-imagem-principal_300_169.png"
                            imgAlt="Minijogos Imagem principal"
                        >
                            <p>Coletânea de minijogos encomendados por uma escola.</p>
                        </TrabalhoCard>
                    </li>

                    <li>
                        <TrabalhoCard
                            title="EstudioZ"
                            link="https://www.estudioz.art.br/"
                            imgSrc="/assets/imagens/landing-page-estudio-z.png"
                            imgAlt="Marca EstudioZ"
                        >
                            <p>Landing page para estudio Artístico do Rio de Janeiro.</p>
                        </TrabalhoCard>
                    </li>
                </ul>

                <div className="text-right">
                    <p>Acesse minha <a href="https://diegomatos321.github.io/Projetos/" target="_blank" className="underline">página no Github</a> para ver projetos menores que foram usados para estudo e não estão em produção</p>
                </div>
            </div>
        </section>
    );
}

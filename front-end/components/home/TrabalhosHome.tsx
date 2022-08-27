import Trabalhos from "../TodosTrabalhos"

export default function TrabalhosHome(): JSX.Element {
    return (
        <section id="trabalhos">
            <div className="container">
                <h2 className="title">Trabalhos</h2>
                <hr />
                <Trabalhos />
                <p>Acesse minha <a href="https://diegomatos321.github.io/Projetos/" target="_blank" rel="noopener noreferrer">página no Github</a> para ver projetos menores que foram usados para estudo e não estão em produção</p>
            </div>
        </section>
    );
}

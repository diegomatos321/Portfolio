import Trabalhos from "../TodosTrabalhos"

export default function TrabalhosHome(): JSX.Element {
    return (
        <section id="trabalhos">
            <div className="container">
                <h2 className="title">Trabalhos</h2>
                <hr />
                <p>
                    Veja alguns de meus <strong>trabalhos</strong>:
                </p>
                <Trabalhos />
            </div>
        </section>
    );
}

import TodosTrabalhos from "../../components/TodosTrabalhos"
import MetaDados from "../../seo/trabalhos"

export default function Trabalhos(): JSX.Element {
    return (
        <>
            <MetaDados />
            <main>
                <h1 className="title">Meus Trabalhos</h1>
                <hr />
                <section id="trabalhos">
                    <div className="container">
                        <TodosTrabalhos />
                    </div>
                </section>
            </main>
        </>
    )
}

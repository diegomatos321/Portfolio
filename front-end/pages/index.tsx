import MetaDados from "../seo/home"

import Apresentacao from "../components/home/Apresentacao";
import TodosTrabalhos from "../components/TodosTrabalhos";

export default function Home(): JSX.Element {
    return (
        <>
            <MetaDados />
            <main>
                <Apresentacao />
                <TodosTrabalhos />
                {/* <Sobre />
                <Contato /> */}
            </main>
        </>
    )
}
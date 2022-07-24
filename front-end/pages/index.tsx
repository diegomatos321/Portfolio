import MetaDados from "../seo/home"

import Apresentacao from "../components/home/Apresentacao"
import Sobre from "../components/home/Sobre"
import TodosTrabalhos from "../components/home/TrabalhosHome"
import Contato from "../components/home/Contato"

export default function Home(): JSX.Element {
    return (
        <>
            <MetaDados />
            <main>
                <Apresentacao />
                <TodosTrabalhos />
                <Sobre />
                <Contato />
            </main>
        </>
    )
}
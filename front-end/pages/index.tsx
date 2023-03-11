import MetaDados from "../seo/home"

import Apresentacao from "../components/home/Apresentacao";
import TodosTrabalhos from "../components/TodosTrabalhos";
import Contato from "../components/home/Contato";
import Footer from "../components/templates/Footer";

export default function Home(): JSX.Element {
    return (
        <>
            <MetaDados />
            <main>
                <Apresentacao />
                <TodosTrabalhos />
                <Contato />
            </main>
            <Footer />
        </>
    )
}
import MetaDados from "../../seo/contato"

export default function Contato(): JSX.Element {
    return (
        <>
            <MetaDados />
            <main>
                <section>
                    <div className="container">
                        <h1 className="title">Entre em contato</h1>
                        <hr />
                        <div className="container-formulario">
                            <form className="formulario" onSubmit={this.submitHandler}>
                                <p>Digite seu nome:</p>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    placeholder="Nome Completo"
                                    autoFocus
                                    minLength={5}
                                    maxLength={255}
                                    required
                                />
                                <p>Digite seu e-mail para contato:</p>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                                <p>Assunto:</p>
                                <input
                                    type="text"
                                    name="assunto"
                                    id="assunto"
                                    placeholder="Assunto"
                                    minLength={5}
                                    maxLength={50}
                                    required
                                />
                                <p>Mensagem:</p>
                                <textarea
                                    name="mensagem"
                                    id="mensagem"
                                    placeholder="Digite sua mensagem aqui"
                                    cols={30}
                                    rows={8}
                                    minLength={10}
                                    required
                                ></textarea>
                                <input type="submit" value="Enviar" className="btn" />
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

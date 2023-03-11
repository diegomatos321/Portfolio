import { ChangeEvent, FormEvent, useState } from "react";
import Alert from "../Alert";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const DEFAULT_SUBJECT_TEXT: string = "Olá Diego, venho pelo seu Portfolio e desejo falar com você!";

export default function Contato() {
    const [contactName, setContactName] = useState<string>("");
    const [contactEmail, setContactEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>(DEFAULT_SUBJECT_TEXT);
    const [messageBody, setMessageBody] = useState<string>("");

    const [serverMessage, setServerMessage] = useState<Array<any>>([]);
    const [messageType, setMessageType] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        setServerMessage(() => []);
        setMessageType(() => "");

        try {
            setIsLoading(() => true);

            const body = {
                contactName,
                contactEmail,
                subject,
                messageBody
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contato.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const responseBody = await response.json();

            setIsLoading(() => false);

            setServerMessage(() => responseBody);
            if (response.ok == false) {
                setMessageType(() => "error");

                console.error(responseBody);
                return;
            }

            console.log(responseBody);

            setMessageType(() => "sucesso");
            resetForm();
            window.scrollTo(0, 0);
        } catch (error: any) {
            console.error(error.message);

            setServerMessage(() => [
                "Ocorreu um problema ao realizar o pedido de contato",
                "Tente novamente mais tarde, se o problema persiste entre em contato diretamente por",
                process.env.NEXT_PUBLIC_EMAIL
            ]);
            setMessageType(() => "error");

            setIsLoading(() => false);
        }
    }

    const resetForm = () => {
        setContactName(() => "");
        setContactEmail(() => "");
        setSubject(() => DEFAULT_SUBJECT_TEXT);
        setMessageBody(() => "");

        setIsLoading(() => false);
    }

    return (
        <section className="bg-[#00AFEF] text-white">
            <div className="container mx-auto p-4">
                <Alert className={messageType} body={serverMessage} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="order-last sm:order-first space-y-4">
                        <h3 className="text-2xl text-center sm:text-left"><strong>Dados para contato</strong></h3>

                        <a href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`} className="flex items-center gap-2">
                            <MdEmail /> 
                            <span>{ process.env.NEXT_PUBLIC_EMAIL }</span>
                        </a>

                        <a href="https://www.linkedin.com/in/dev-diego-matos/" target="_blank" className="flex items-center gap-2">
                            <FaLinkedin /> 
                            <span>Linkedin</span>
                        </a>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl text-center sm:text-left"><strong>Entre em contato</strong></h2>

                        <div>
                            <form 
                            action={`${process.env.NEXT_PUBLIC_API_URL}/contato.php`} 
                            method="POST" 
                            onSubmit={handleSubmit} 
                            className="space-y-4"
                        >
                                <div>
                                    <label htmlFor="nome">Digite seu nome:</label>
                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        placeholder="Digite seu nome completo"
                                        className="block w-full text-black"
                                        autoFocus
                                        minLength={5}
                                        maxLength={255}
                                        required
                                        value={contactName}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setContactName(() => event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Digite seu e-mail:</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Digite seu e-mail para contato"
                                        className="block w-full text-black"
                                        required
                                        value={contactEmail}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setContactEmail(() => event.target.value)}
                                    />

                                </div>

                                <div>
                                    <label>Assunto:</label>
                                    <input
                                        id="assunto"
                                        name="assunto"
                                        type="text"
                                        placeholder="Assunto"
                                        className="block w-full text-black"
                                        minLength={5}
                                        maxLength={50}
                                        required
                                        value={subject}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setSubject(() => event.target.value)}
                                    />
                                </div>

                                <div>
                                    <p>Mensagem:</p>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        placeholder="Digite sua mensagem aqui"
                                        className="block w-full text-black"
                                        cols={30}
                                        rows={8}
                                        minLength={10}
                                        required
                                        value={messageBody}
                                        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessageBody(() => event.target.value)}
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full px-4 py-2 bg-white text-black" disabled={isLoading}>{isLoading ? 'Carregando' : 'Enviar'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

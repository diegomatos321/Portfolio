import { ChangeEvent, FormEvent, useState } from "react";
import Alert from "../../components/Alert";
import MetaDados from "../../seo/contato"

const DEFAULT_SUBJECT_TEXT: string = "Olá Diego, venho pelo seu Portfolio e desejo falar com você!";

export default function Contato(): JSX.Element {
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

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contato`, {
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

            setMessageType(() => "success");
            resetForm();
        } catch (error: any) {
            console.error(error.message);
            
            setServerMessage(() => error.message);
            setMessageType(() => "error");

            setIsLoading(() => false);
        }
    }

    const resetForm = () => {
        setContactName(() => "");
        setContactEmail(() => "");
        setSubject(() => DEFAULT_SUBJECT_TEXT);
        setMessageBody(() => "");

        setServerMessage(() => []);
        setMessageType(() => "");
        setIsLoading(() => false);
    }

    return (
        <>
            <MetaDados />
            <main>
                <Alert className={messageType} body={serverMessage} />
                <section>
                    <div className="container">
                        <h1 className="title">Entre em contato</h1>
                        <hr />
                        <div className="container-formulario">
                            <form className="formulario" onSubmit={handleSubmit}>
                                <p>Digite seu nome:</p>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome completo"
                                    autoFocus
                                    minLength={5}
                                    maxLength={255}
                                    required
                                    value={contactName}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setContactName(() => event.target.value)}
                                />
                                <p>Digite seu e-mail para contato:</p>
                                <input
                                    type="email"
                                    placeholder="Digite seu e-mail para contato"
                                    required
                                    value={contactEmail}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setContactEmail(() => event.target.value)}
                                />
                                <p>Assunto:</p>
                                <input
                                    type="text"
                                    placeholder="Assunto"
                                    minLength={5}
                                    maxLength={50}
                                    required
                                    value={subject}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setSubject(() => event.target.value)}
                                />
                                <p>Mensagem:</p>
                                <textarea
                                    placeholder="Digite sua mensagem aqui"
                                    cols={30}
                                    rows={8}
                                    minLength={10}
                                    required
                                    value={messageBody}
                                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessageBody(() => event.target.value)}
                                ></textarea>
                                <input type="submit" value="Enviar" className="btn" disabled={isLoading} />
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

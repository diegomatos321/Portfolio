import { useEffect, useState } from "react"

interface IMensagem {
    className: string,
    body: Array<any>
}

export default function Alert({ className, body }: IMensagem) {
    const [messages, setMessages] = useState<Array<string>>([]);

    useEffect(() => {
        if (body === undefined || body === null || body.length === 0) return;

        checkElementType(body);
    }, [body]);

    const checkElementType = (element) => {
        if (typeof element === "string") {
            try {
                const parsedString = JSON.parse(element);

                handleObject(parsedString);
            } catch (error) {
                setMessages((prevState: Array<string>) => {
                    return [
                        ...prevState,
                        element
                    ]
                });
            }
        } else if (Array.isArray(element)) {
            handleArray(element);
        } else {
            handleObject(element);
        }
    }

    const handleArray = (array) => {
        array.forEach(element => {
            checkElementType(element);
        });
    }

    const handleObject = (object) => {
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const element = object[key];
                
                checkElementType(element);
            }
        }
    }

    return (
        <div className={`mensagem ${className}`}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                {messages.map((message: string, index: number) => {
                    return <li key={index}>{message}</li>
                })}
            </ul>
        </div>
    )
}

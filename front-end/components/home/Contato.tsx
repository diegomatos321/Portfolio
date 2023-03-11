import Link from "next/link";
import { MdSend } from "react-icons/md";

export default function Contato() {
    return (
        <section>
            <div className="container p-4 mx-auto flex">
                <Link className="mx-auto" href="/contato">
                    <div className="px-4 py-2 bg-[#00AFEF] rounded text-white flex items-center gap-2">
                        <h2 className="text-2xl"><strong>Entre em contato comigo</strong></h2>
                        <MdSend style={{ fill: 'white' }} className="text-4xl" />
                    </div>
                </Link>
            </div>
        </section>
    );
}

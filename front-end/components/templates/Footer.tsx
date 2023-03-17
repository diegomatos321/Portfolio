import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer(): JSX.Element {
    return (
        <footer className='bg-[#00AFEF] text-white'>
            <div className="container mx-auto p-4 ">
                <a href="https://www.devdiegomatos.com.br">
                    <img
                        style={{ maxWidth: 450 }}
                        src="/assets/marca/logo-horizontal-monocromatica-450x450.png"
                        alt="Marca horizontal Desenvolvedor Diego Matos"
                        className='mx-auto w-full'
                    />
                </a>
                <ul className='w-full flex flex-wrap gap-4 justify-center items-center'>
                    <li>
                        <a href="https://github.com/diegomatos321" target="_blank"><FaGithub className='w-8 h-8' /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dev-diego-matos/" target="_blank"><FaLinkedin className='w-8 h-8' /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
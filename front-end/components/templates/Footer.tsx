import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer(): JSX.Element {
    return <footer className='footer' style={{ backgroundColor: 'black', borderTop: '1px solid yellow' }}>
        <div style={{ margin: 'auto', maxWidth: '350px', display: 'flex', flexFlow: 'column', flexWrap: 'nowrap' }}>
            <picture>
                <img src="/assets/imagens/logo-vertical-fundo-preto.png" width='100%' alt="" />
            </picture>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly', listStyle: 'none' }}>
                <li><a href="https://www.linkedin.com/in/dev-diego-matos/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} color='white' /></a></li>
                <li><a href="https://github.com/diegomatos321" target="_blank" rel="noopener noreferrer"><FaGithub size={32} color='white' /></a></li>
            </ul>
        </div>
    </footer>;
}
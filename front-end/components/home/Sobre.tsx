export default function Sobre() {
    return (
        <section id="about">
            <div className="container">
                <h2 className="title">Sobre Mim</h2>
                <hr />
                <p>
                    Olá, meu nome é <strong>Diego Vasconcelos Schardosim de Matos</strong>, sou estudante de <strong>Ciência da Computação</strong> na <strong>UFRJ</strong> e um entusiasta por jogos.
                </p>
                <p>
                    Sou <strong>autodidata</strong> e realizo serviços como autônomo no tempo livre. Atuo com desenvolvimento de jogos eletrônicos, de páginas para web (desde páginas simples até sistemas mais complexos) e de aplicativos.
                </p>
                <p>
                    Tenho experiência com liderança, gestão de processo, modelagem de sistema, entre outras práticas relacionadas a Engenharia de Software como Integração Contínua (CI) e Entrega Contínua (CD).
                </p>
                <h3 style={{ marginTop: '16px' }}>Habilidades</h3>
                <div className="flex-container areas-trabalho">
                    <ul className="flex-item">
                        <li><h4><strong>Front End</strong></h4></li>
                        <li>CSS</li>
                        <li>Bootstrap 5</li>
                        <li>Tailwind</li>
                        <li>React/NextJS</li>
                        <li>WordPress</li>
                    </ul>
                    <ul className="flex-item">
                        <li><h4><strong>Back End</strong></h4></li>
                        <li>PhP</li>
                        <li>NodeJS</li>
                        <li>Java</li>
                    </ul>
                    <ul className="flex-item">
                        <li><h4><strong>Banco de Dados</strong></h4></li>
                        <li>Modelagem UML</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    <ul className="flex-item">
                        <li><h4><strong>Des de Jogos</strong></h4></li>
                        <li>Unity</li>
                        <li>Godot</li>
                        <li>HTML5</li>
                        <li>Phaser</li>
                        <li>Construct 2 e 3</li>
                    </ul>
                    <ul className="flex-item">
                        <li><h4><strong>Outras Habilidades</strong></h4></li>
                        <li>Git</li>
                        <li>Github Actions</li>
                        <li>SEO</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default function Apresentacao(): JSX.Element {
    return (
        <section style={{ backgroundColor: '#00AFEF' }} >
            <div className="relative container mx-auto p-4 min-h-[30vw] grid grid-cols-1 sm:grid-cols-2 items-center">
                <header className="relative justify-self-end text-white text-right">
                    <h1 className="text-5xl"><strong>Prazer, eu sou Diego</strong></h1>
                    <p>Granduando em computação na Universidade Federal do Rio de Janeiro e um entusiasta por jogos, trabalho com desenvolvimento de sites, aplicativos e jogos.</p>
                </header>

                <picture>
                    <source srcSet="/assets/marca/logo-monocromatica-branca-300x300.webp" />
                    <img style={{ maxWidth: 300 }} className="w-full" src="/assets/marca/logo-monocromatica-branca-300x300.png" alt="Marca" />
                </picture>
            </div>
        </section>
    );
}

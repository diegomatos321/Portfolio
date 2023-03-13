export default function Apresentacao(): JSX.Element {
    return (
        <section className="bg-[#00AFEF] ">
            <div className="relative container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center">
                <header style={{ maxWidth: 450 }} className="relative text-white text-center space-y-4 sm:justify-self-end sm:text-right">
                    <h1 className="text-5xl mr-0"><strong>Prazer, eu sou Diego</strong></h1>
                    <p className="text-left sm:text-right">Bacharelando em Ciência da Computação na Universidade Federal do Rio de Janeiro e um entusiasta por jogos, trabalho com desenvolvimento de sites, aplicativos e jogos.</p>
                </header>

                <picture className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 sm:relative sm:top-0 sm:left-0 sm:-translate-x-0 sm:-translate-y-0 sm:opacity-100 sm:block sm:justify-self-start">
                    <source srcSet="/assets/marca/logo-monocromatica-branca-300x300.webp" />
                    <img style={{ maxWidth: 300 }} className="w-full" src="/assets/marca/logo-monocromatica-branca-300x300.png" alt="Marca" />
                </picture>
            </div>
        </section>
    );
}

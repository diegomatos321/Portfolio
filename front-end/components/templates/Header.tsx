import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header id="header" className="header">
      <Link href="/">
        <picture className="img logo">
          <source srcSet="/assets/imagens/logo.webp" type="image/webp"/>
          <img src="/assets/imagens/logo.png" alt="Logo do site" title="Logo do Site" />
        </picture>
      </Link>
      <nav className="main-nav">
        <ul className="nav">
          <li className="nav-item item-home">
            <Link href="/">Home</Link>
          </li>

          <li className="nav-item item-about">
            <Link href="/#about">Sobre Mim</Link>
          </li>

          <ul className="nav-item sub-nav item-trabalhos">
            <li>
              <Link href="/trabalhos">Trabalhos</Link>
            </li>
            <ul className="drop-down">
              <li className="sub-nav-item">
                <a href="https://gdpufrj.itch.io/laje-4" target="_blank" rel="noopener noreferrer">Lia na Floresta Mágica</a>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/flappybird">
                  FlappyBird
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/jogo-da-nave">
                  Jogo da Nave
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/super-mario">
                  Super Mario
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/jogo-asteroides">
                  Asteroides
                </Link>
              </li>
            </ul>
          </ul>

          <li className="nav-item item-contato">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header id="header" className="header">
      <Link href="/">
        <a>
            <picture className="img logo">
            <source srcSet="/assets/imagens/logo.webp" type="image/webp"/>
            <img src="/assets/imagens/logo.png" alt="Logo do site" title="Logo do Site" />
            </picture>
        </a>
      </Link>
      <nav className="main-nav">
        <ul className="nav">
          <li className="nav-item item-home">
            <Link href="/"><a>Home</a></Link>
          </li>

          <li className="nav-item item-about">
            <Link href="/#about"><a>Sobre Mim</a></Link>
          </li>

          <ul className="nav-item sub-nav item-trabalhos">
            <li>
              <Link href="/trabalhos"><a>Trabalhos</a></Link>
            </li>
            <ul className="drop-down">
              <li className="sub-nav-item">
                <a href="https://gdpufrj.itch.io/laje-4" target="_blank" rel="noopener noreferrer">Lia na Floresta Mágica</a>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/flappybird">
                  <a>FlappyBird</a>
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/jogo-da-nave">
                  <a>Jogo da Nave</a>
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/super-mario">
                  <a>Super Mario</a>
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link href="/trabalhos/jogo-asteroides">
                  <a>Asteroides</a>
                </Link>
              </li>
            </ul>
          </ul>

          <li className="nav-item item-contato">
            <Link href="/contato"><a>Contato</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

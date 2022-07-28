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
          <li className="nav-item item-about">
            <Link href="/#about"><a>Sobre Mim</a></Link>
          </li>

          <li className="nav-item item-trabalhos">
            <Link href="/#trabalhos"><a>Trabalhos</a></Link>
          </li>

          <li className="nav-item item-contato">
            <Link href="/contato"><a>Contato</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

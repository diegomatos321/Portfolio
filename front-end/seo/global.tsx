import Head from "next/head";
import Script from 'next/script';

export default function global(): JSX.Element {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
            <link rel="manifest" href="favicon/site.webmanifest"></link>

            {/* SEO Geral */}
            <title key="title">Diego Matos | Desenvolvedor Web</title>
            <meta key="description" name="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <link key="canonical" rel="canonical" href="https://www.devdiegomatos.com.br" />
            <meta name="author" content="Diego Matos" />
            <meta key='robots' name="robots" content="index,follow" />

            {/* Google+ / Schema.org */}
            <meta key="schemaTitle" itemProp="name" content="Diego Matos | Desenvolvedor Web" />
            <meta key="schemaDescription" itemProp="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta itemProp="image" content="/assets/imagens/foto-perfil.png" />
            {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

            {/* Open Graph Facebook */}
            <meta key="ogTitle" property="og:title" content="Diego Matos | Desenvolvedor Web" />
            <meta key="ogDescription" property="og:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br" />
            <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/assets/imagens/foto-perfil.png" />
            <meta property="og:image:alt" content="Foto do Desenvolvedor Diego Matos" />
            <meta property="og:locale" content="pt-BR" />

            {/* Twitter */}
            <meta key="twitterTitle" name="twitter:title" content="Diego Matos | Desenvolvedor Web" />
            <meta key="twitterDescription" name="twitter:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content="/assets/imagens/foto-perfil.png" />
            {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
            {/* <meta name="twitter:site" content="@empresa"/> */}
        </Head>
    )
}
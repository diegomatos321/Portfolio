import Head from "next/head";
import Script from 'next/script';

export default function global(): JSX.Element {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="57x57" href="https://www.devdiegomatos.com.br/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="https://www.devdiegomatos.com.br/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="https://www.devdiegomatos.com.br/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="https://www.devdiegomatos.com.br/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="https://www.devdiegomatos.com.br/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="https://www.devdiegomatos.com.br/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="https://www.devdiegomatos.com.br/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="https://www.devdiegomatos.com.br/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="https://www.devdiegomatos.com.br/favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="https://www.devdiegomatos.com.br/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://www.devdiegomatos.com.br/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="https://www.devdiegomatos.com.br/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://www.devdiegomatos.com.br/favicon/favicon-16x16.png" />
            <link rel="manifest" href="https://www.devdiegomatos.com.br/favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="https://www.devdiegomatos.com.br/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />

            <meta name="rating" content="General" />

            {/* SEO Geral */}
            <title key="title">Diego Matos | Desenvolvedor de Software</title>
            <meta key="description" name="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <link key="canonical" rel="canonical" href="https://www.devdiegomatos.com.br" />
            <meta name="author" content="Diego Matos" />
            <meta key='robots' name="robots" content="index,follow" />

            {/* Google+ / Schema.org */}
            <meta key="schemaTitle" itemProp="name" content="Diego Matos | Desenvolvedor de Software" />
            <meta key="schemaDescription" itemProp="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta itemProp="image" content="https://www.devdiegomatos.com.br/assets/imagens/logo-vertical-fundo-branco.png" />
            {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

            {/* Open Graph Facebook */}
            <meta key="ogTitle" property="og:title" content="Diego Matos | Desenvolvedor de Software" />
            <meta key="ogDescription" property="og:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br" />
            <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://www.devdiegomatos.com.br/assets/imagens/logo-vertical-fundo-branco.png" />
            <meta property="og:image:alt" content="Logo do desenvolvedor Diego Matos" />
            <meta property="og:locale" content="pt-BR" />

            {/* Twitter */}
            <meta key="twitterTitle" name="twitter:title" content="Diego Matos | Desenvolvedor de Software" />
            <meta key="twitterDescription" name="twitter:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content="https://www.devdiegomatos.com.br/assets/imagens/logo-vertical-fundo-branco.png" />
            {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
            {/* <meta name="twitter:site" content="@empresa"/> */}
        </Head>
    )
}
import Head from "next/head";

export default function global() {
    return (
        <Head>
            {/* SEO Geral */}
            <title key="title">Diego Matos | Desenvolvedor Web</title>
            <meta key="description" name="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <link rel="canonical" href="https://devdiegomatos.com.br/" />
            <meta name="author" content="Diego Matos" />
            <meta name="robots" content="index,follow" />

            {/* Google+ / Schema.org */}
            <meta key="schemaTitle" itemProp="name" content="Diego Matos | Desenvolvedor Web" />
            <meta key="schemaDescription" itemProp="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta itemProp="image" content="imagens/foto-perfil.png" />
            {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

            {/* Open Graph Facebook */}
            <meta key="ogTitle" property="og:title" content="Diego Matos | Desenvolvedor Web" />
            <meta key="ogDescription" property="og:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta property="og:url" content="https://devdiegomatos.com.br/" />
            <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="imagens/foto-perfil.png" />
            <meta property="og:image:alt" content="Foto do Desenvolvedor Diego Matos" />
            <meta property="og:locale" content="pt-BR" />

            {/* Twitter */}
            <meta key="twitterTitle" name="twitter:title" content="Diego Matos | Desenvolvedor Web" />
            <meta key="twitterDescription" name="twitter:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
            <meta name="twitter:url" content="https://devdiegomatos.com.br/" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content="imagens/foto-perfil.png" />
            {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
            {/* <meta name="twitter:site" content="@empresa"/> */}
        </Head>
    )
}
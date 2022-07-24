export default function HomeSEO(): JSX.Element {
    return <>
        {/* SEO Geral */}
        <title key="title">Diego Matos | Desenvolvedor Web</title>
        <meta key="description" name="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />

        {/* Google+ / Schema.org */}
        <meta key="schemaTitle" itemProp="name" content="Diego Matos | Desenvolvedor Web" />
        <meta key="schemaDescription" itemProp="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />

        {/* Open Graph Facebook */}
        <meta key="ogTitle" property="og:title" content="Diego Matos | Desenvolvedor Web" />
        <meta key="ogDescription" property="og:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />

        {/* Twitter */}
        <meta key="twitterTitle" name="twitter:title" content="Diego Matos | Desenvolvedor Web" />
        <meta key="twitterDescription" name="twitter:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub." />
    </>
}
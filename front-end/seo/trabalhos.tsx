import Head from "next/head";

export default function TrabalhosSEO() {
    return (
        <Head>
            {/* SEO Geral */}
            <title key="title">Trabalhos | Desenvolvedor Diego Matos</title>
            <meta key="description" name="description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos." />
            <link key="canonical" rel="canonical" href="https://www.devdiegomatos.com.br/trabalhos" />

            {/* Google+ / Schema.org */}
            <meta key="schemaTitle" itemProp="name" content="Trabalhos | Desenvolvedor Diego Matos" />
            <meta key="schemaDescription" itemProp="description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos." />

            {/* Open Graph Facebook */}
            <meta key="ogTitle" property="og:title" content="Trabalhos | Desenvolvedor Diego Matos" />
            <meta key="ogDescription" property="og:description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos." />
            <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br/trabalhos" />

            {/* Twitter */}
            <meta key="twitterTitle" name="twitter:title" content="Trabalhos | Desenvolvedor Diego Matos" />
            <meta key="twitterDescription" name="twitter:description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos." />
            <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br/trabalhos" />
        </Head>
    )
}
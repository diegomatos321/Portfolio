import Head from "next/head"

export default function ContatoSEO(): JSX.Element {
    return (
        <Head>
            {/* SEO Geral */}
            <title key="title">Contato | Desenvolvedor Diego Matos</title>
            <meta
                key="description"
                name="description"
                content="Página para entrar em contato com o desenvolvedor Diego Matos."
            />
            <link key="canonical" rel="canonical" href="https://www.devdiegomatos.com.br/contato" />

            {/* Google+ / Schema.org */}
            <meta key="schemaTitle" itemProp="name" content="Contato | Desenvolvedor Diego Matos" />
            <meta
                key="schemaDescription"
                itemProp="description"
                content="Página para entrar em contato com o desenvolvedor Diego Matos."
            />

            {/* Open Graph Facebook */}
            <meta key="ogTitle" property="og:title" content="Contato | Desenvolvedor Diego Matos" />
            <meta
                key="ogDescription"
                property="og:description"
                content="Página para entrar em contato com o desenvolvedor Diego Matos."
            />
            <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br/contato" />

            {/* Twitter */}
            <meta key="twitterTitle" name="twitter:title" content="Contato | Desenvolvedor Diego Matos" />
            <meta
                key="twitterDescription"
                name="twitter:description"
                content="Página para entrar em contato com o desenvolvedor Diego Matos."
            />
            <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br/contato" />

            <link rel="me" href="https://devdiegomatos.com.br" type="text/html" />
            <link rel="me" href="mailto:diegomatos@devdiegomatos.com.br" />
        </Head>
    );
}

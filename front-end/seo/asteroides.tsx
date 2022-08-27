import Head from "next/head";

export default function FlappyBirdSEO() {
  return (
        <Head>
          {/* SEO Geral */}
          <title key="title">Asteroides | Desenvolvedor Diego Matos</title>
          <meta key="description" name="description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>
          <link key="canonical" rel="canonical" href="https://www.devdiegomatos.com.br/trabalhos/jogo-asteroides"/>

          {/* Google+ / Schema.org */}
          <meta key="schemaTitle" itemProp="name" content="Asteroides | Desenvolvedor Diego Matos"/>
          <meta key="schemaDescription" itemProp="description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>

          {/* Open Graph Facebook */}
          <meta key="ogTitle" property="og:title" content="Asteroides | Desenvolvedor Diego Matos"/>
          <meta key="ogDescription" property="og:description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>
          <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br/trabalhos/jogo-asteroides"/>

          {/* Twitter */}
          <meta key="twitterTitle" name="twitter:title" content="Asteroides | Desenvolvedor Diego Matos"/>
          <meta key="twitterDescription" name="twitter:description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>
          <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br/trabalhos/jogo-asteroides"/>
    </Head>
  )
}
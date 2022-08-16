import Head from "next/head";

export default function FlappyBirdSEO() {
  return (
        <Head>
          {/* SEO Geral */}
          <title key="title">FlappyBird | Desenvolvedor Diego Matos</title>
          <meta key="description" name="description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um clone do FlappyBird com integração ao banco de dados MongoDB."/>
          <link key="canonical" rel="canonical" href="https://www.devdiegomatos.com.br/trabalhos/flappybird"/>

          {/* Google+ / Schema.org */}
          <meta key="schemaTitle" itemProp="name" content="FlappyBird | Desenvolvedor Diego Matos"/>
          <meta key="schemaDescription" itemProp="description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um clone do FlappyBird com integração ao banco de dados MongoDB."/>

          {/* Open Graph Facebook */}
          <meta key="ogTitle" property="og:title" content="FlappyBird | Desenvolvedor Diego Matos"/>
          <meta key="ogDescription" property="og:description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um clone do FlappyBird com integração ao banco de dados MongoDB."/>
          <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br/trabalhos/flappybird"/>

          {/* Twitter */}
          <meta key="twitterTitle" name="twitter:title" content="FlappyBird | Desenvolvedor Diego Matos"/>
          <meta key="twitterDescription" name="twitter:description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um clone do FlappyBird com integração ao banco de dados MongoDB."/>
          <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br/trabalhos/flappybird"/>
    </Head>
  )
}
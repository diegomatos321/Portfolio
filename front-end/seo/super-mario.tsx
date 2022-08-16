import Head from "next/head";

export default function SuperMarioSEO() {
  return (
    <Head>
      {/* SEO Geral */}
      <title key="title">Super Mario | Desenvolvedor Diego Matos</title>
      <meta key="description" name="description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario com o framework Phaser."/>
      <link key="canonical" rel="canonical" href="https://www.devdiegomatos.com.br/trabalhos/super-mario"/>

      {/* Google+ / Schema.org */}
      <meta key="schemaTitle" itemProp="name" content="Super Mario | Desenvolvedor Diego Matos"/>
      <meta key="schemaDescription" itemProp="description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario Bros com o framework Phaser."/>

      {/* Open Graph Facebook */}
      <meta key="ogTitle" property="og:title" content="Super Mario | Desenvolvedor Diego Matos"/>
      <meta key="ogDescription" property="og:description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario Bros com o framework Phaser."/>
      <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br/trabalhos/super-mario"/>

      {/* Twitter */}
      <meta key="twitterTitle" name="twitter:title" content="Super Mario | Desenvolvedor Diego Matos"/>
      <meta key="twitterDescription" name="twitter:description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario Bros com o framework Phaser."/>
      <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br/trabalhos/super-mario"/>
    </Head>
  )
}
import Head from "next/head";

export default function JogoDaNaveSEO() {
  return (
    <Head>
      {/* SEO Geral */}
      <title key="title">Jogo da Nave | Desenvolvedor Diego Matos</title>
      <meta key="description" name="description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>
      <link rel="canonical" href="https://www.devdiegomatos.com.br/trabalhos/jogo-da-nave"/>

      {/* Google+ / Schema.org */}
      <meta key="schemaTitle" itemProp="name" content="Jogo da Nave | Desenvolvedor Diego Matos"/>
      <meta key="schemaDescription" itemProp="description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>

      {/* Open Graph Facebook */}
      <meta key="ogTitle" property="og:title" content="Jogo da Nave | Desenvolvedor Diego Matos"/>
      <meta key="ogDescription" property="og:description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>
      <meta key="ogUrl" property="og:url" content="https://www.devdiegomatos.com.br/trabalhos/jogo-da-nave"/>

      {/* Twitter */}
      <meta key="twitterTitle" name="twitter:title" content="Jogo da Nave | Desenvolvedor Diego Matos"/>
      <meta key="twitterDescription" name="twitter:description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>
      <meta key="twitterUrl" name="twitter:url" content="https://www.devdiegomatos.com.br/trabalhos/jogo-da-nave"/>
    </Head>
  )
}
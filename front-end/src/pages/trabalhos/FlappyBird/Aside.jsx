import React from "react";

export default function aside() {
  return (
    <aside className="aside">
      <div className="tutorial">
        <h2 className="sub-title">Tutorial</h2>
        <hr />
        <p>Esse jogo é um clone do FlappyBird, para jogá-lo é bem simples:</p>
        <ol className="items">
          <li>
            Quando você cadastrar seu <i>nickname</i>, basta{" "}
            <strong>clicar na tela</strong> para começar o jogo!
          </li>
          <li>
            <strong>Clique na tela</strong> para seu pássaro{" "}
            <strong>voar</strong>!
          </li>
          <li>
            <strong>Evite</strong> os Canos e não caia no chao!
          </li>
          <li>Bom Jogo!</li>
        </ol>
      </div>
      <div className="finalidade">
        <h2 className="sub-title">Finalidade do Trabalho</h2>
        <hr />
        <p>
          Esse jogo teve como objetivo ensinar <strong>JavaScript</strong>{" "}
          moderno aos alunos, de uma forma divertida e entuitiva, com{" "}
          <strong>Front-End</strong> e <strong>Back-End</strong>:
        </p>
        <ol className="items">
          <li>
            Uso de <strong>Git</strong> e <strong>GitHub</strong> para versionar
            nossos projetos.
          </li>
          <li>
            Noções Básicas de <strong>SEO</strong>.
          </li>
          <li>
            Do básico ao avançado com: classes, Objetos, Loops, Arrays,
            Strings...
          </li>
          <li>
            Programação orientada à objetos
          </li>

          <li>Melhores formatos de imagems e audios para a web.</li>
          <li>
            Como realizar o loading prévio das imagems por meio das
            funcionalidades do JavaScript.
          </li>
          <li>
            Uso do princípio{" "}
            <a
              href="https://pt.wikipedia.org/wiki/SOLID"
              rel="noopener noreferrer"
              target="_blank"
            >
              SOLID
            </a>
            .
          </li>
          <li>
            Como melhorar a performance de nosso jogo através de uma{" "}
            <a
              href="https://en.wikipedia.org/wiki/Object_pool_pattern"
              rel="noopener noreferrer"
              target="_blank"
            >
              Object Pool
            </a>
            .
          </li>
          <li>
            Como desenvolver um jogo <strong>multi plataforma</strong> e{" "}
            <strong>responsivo</strong>.
          </li>
          <li>
            <strong>Noções de desenvolvimento</strong>, permitindo o aluno ser
            mais indepedente.
          </li>
          <li>
            Requições para uma API
          </li>
          <li>Validação de dados.</li>
          <li>
            Uso de JavaScript no <strong>Back-End</strong>:{" "}
            <strong>NodeJS</strong>, <strong>MongoDB</strong> e{" "}
            <strong>Express</strong>.
          </li>
        </ol>
      </div>
      <div className="warning">
        <p>
          Esse jogo está sincronizado com um Banco de Dados, logo sua pontuação
          será salva e nunca perdida, por isso é necessário que você digite um{" "}
          <i>nickname</i> de até <strong>10 digitos</strong>, esse{" "}
          <i>nickname</i> será seu nome público. Caso você saia e queira jogar
          novamente, é so digitar seu <i>nickname</i> de novo e pronto !
        </p>
      </div>
      <div className="mobile">
        <p>
          Jogo multi plataforma, experimente também jogar pelo celular{" "}
          <i className="fas fa-mobile-alt"></i>
        </p>
      </div>
    </aside>
  );
}

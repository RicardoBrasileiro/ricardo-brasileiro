<template>
  <div class="presentation">
    <div class="description">
      <p>
        Olá, seja bem-vindo ao meu portfólio, aqui você vai encontrar mais
        informações sobre mim. Você pode ir na aba de “Conhecimentos”, onde
        descrevo as linguagens e frameworks que utilizo em desenvolvimento de
        aplicações, já na área de "Projetos" você vai encontrar alguns projetos
        onde apliquei meus conhecimentos. Então fique à vontade para explorar
        mais :)
      </p>
      <p>
        Agora uma apresentação mais detalhada, meu nome é José Ricardo e sou
        aluno do curso superior em Análise e Desenvolvimento de Sistemas no
        Instituto Federal da Paraíba. Gosto de trabalhar com tecnologias web
        sejam front ou back-end, também trabalho com linguagens desktop e Bancos
        de Dados Relacionais e NoSQL.
      </p>
      <p>
        Além de ver alguns dos meus projetos mais populares, você também pode
        ver outros repositórios meus, além de postagens que faço no LinkedIn e
        no Twitter, basta clicar:
      </p>
    </div>
    <div class="social-medias">
      <a href="https://github.com/RicardoBrasileiro"
        ><i class="fab fa-github"></i>GitHub</a
      >
      <a href="https://www.linkedin.com/in/ricarbrg/"
        ><i class="fab fa-linkedin"></i>LinkedIn</a
      >
      <a href="https://twitter.com/ricarbrg/">
        <i class="fab fa-twitter"></i>Twitter
      </a>
      <a href="https://www.instagram.com/ricarbrg/"
        ><i class="fab fa-instagram"></i>Instagram</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
};
</script>

<style scoped>
.presentation {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.description {
  margin-bottom: 2rem;
}

.presentation .description p {
  color: var(--text-color);
  text-align: justify;
  margin: 1rem 0;
}

.presentation .description p:nth-child(1) {
  margin-top: 0;
}

.social-medias {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.social-medias a {
  color: var(--theme-color);
  background: none;
  border: 2px solid var(--theme-color);
  min-width: 10rem;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-medias i {
  color: var(--theme-color);
  font-size: 1.1rem;
  margin-right: 0.5rem;
}

@media only screen and (max-width: 700px) {
  .presentation {
    width: 100%;
  }

  .description {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }

  .contact {
    margin-bottom: 2rem;
  }
}
</style>
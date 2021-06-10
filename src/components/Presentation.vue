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
        Agora uma apresentação mais detalhada, meu nome é José Ricardo, tenho 19
        anos e sou aluno do curso superior em Análise e Desenvolvimento de
        Sistemas no Instituto Federal da Paraíba. Gosto de trabalhar com
        tecnologias web sejam front ou back-end, também trabalho com linguagens
        desktop e Bancos de Dados Relacionais e NoSQL.
      </p>
      <p>
        Além de ver alguns dos meus projetos mais populares, você também pode
        ver outros repositórios meus, além de postagens que faço no LinkedIn e
        no Twitter, basta clicar:
      </p>
    </div>
    <div class="social-medias">
      <a href="https://github.com/RicardoBrasileiro"
        ><i class="fab fa-github"></i
      ></a>
      <a href="https://www.linkedin.com/in/jos%C3%A9-ricardo-031b99209"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a href="https://twitter.com/ricarbrg"><i class="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/jricardo_brasileiro/"
        ><i class="fab fa-instagram"></i
      ></a>
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
  color: #808080;
  text-align: justify;
  margin: 1rem 0;
}

.presentation .description p:nth-child(1) {
  margin-top: 0;
}

.social-medias {
  display: flex;
  justify-content: space-evenly;
}

.social-medias i {
  color: var(--primary-color);
  font-size: 2rem;
}

.contact {
  display: flex;
  justify-content: center;
  margin: 1rem 0 0 0;
  padding: 1rem;
  color: #ffffff;
  background: var(--primary-color);
  border-radius: 10px;
  border-top: 0px solid transparent;
  border-bottom: 5px solid rgba(0, 0, 0, 0.25);
  transition: all 0.1s linear;
}

.contact:hover {
  border-bottom-width: 0;
  border-top-width: 5px;
}

@media only screen and (max-width: 700px) {
  .presentation {
    width: 100%;
  }

  .contact {
    margin-bottom: 2rem;
  }
}
</style>
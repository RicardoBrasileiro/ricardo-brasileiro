<template>
  <div class="page about">
    <div class="presentation">
      <div class="about-me">
        <h1 class="section-title">Quem sou eu?</h1>
        <p class="description">
          Meu nome é Ricardo. Sou formado no curso de Análise e Desenvolvimento
          de Sistemas pelo Instituto Federal da Paraíba (IFPB) e sempre fui
          fascinado pela área de tecnologia, e agora, graduado na área,
          desenvolvi uma paixão ainda maior pelo ramo. Gosto de desenvolver
          aplicações web, principalmente quando se trata de implementar
          interfaces, me divirto bastante. No tempo livre gosto de ouvir música
          e jogar, além de praticar meus conhecimentos em programação.
        </p>
        <button class="contact-me">
          <p>Fale comigo</p>
          <span class="material-icons-rounded">></span>
        </button>
      </div>
      <div class="me">
        <img class="my-photo" src="../../assets/images/profile.jpg" alt="" />
        <div>
          <h1 class="my-name">Ricardo Brasileiro</h1>
          <h3 class="my-title">Desenvolvedor Full-stack</h3>
        </div>
      </div>
    </div>
    <div class="social-medias">
      <SocialMediaIconButton
        url="#"
        backgroundColor="#0077B5"
        :iconPath="linkedinIcon"
      />
      <SocialMediaIconButton
        url="#"
        backgroundColor="#000000"
        :iconPath="githubIcon"
      />
      <SocialMediaIconButton
        url="#"
        backgroundColor="#FF3E4A"
        :iconPath="instagramIcon"
      />
      <SocialMediaIconButton
        url="#"
        backgroundColor="#1D9BF0"
        :iconPath="twitterIcon"
      />
    </div>
  </div>
</template>

<script src="./script.ts"></script>

<style src="./styles.css"></style>

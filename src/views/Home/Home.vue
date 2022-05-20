<script setup>
import Cabecalho from "../../components/Cabecalho/Cabecalho.vue";
import ServiceCard from "../../components/ServiceCard/ServiceCard.vue";
import Rodape from '../../components/Rodape/Rodape.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Cabecalho />

  <main>
    <section class="home-section">
      <div>
        <h1 class="title">S P A C E A N D O</h1>
        <h3 class="home-description">
          A Spaceando é um espaço onde você tem acesso à diversas informações e
          curiosidades sobre o nosso planeta e o que há ao redor dele. Tudo de
          maneira fácil e prática.
        </h3>
      </div>
    </section>

    <section class="section-servicos">
        <h3 class="servicos-title">COMECE POR AQUI</h3>
        <div class="card-list">
           <img src="../../../images/planeta.png" alt="planet" loading="lazy" width="60" class="planet">
          <RouterLink to="/foto-do-dia" class="link">
              <ServiceCard
                card-name="FOTO DO DIA"
                card-banner="../../images/galaxia.png"
              />
          </RouterLink>

          <ServiceCard
            card-name="ASTERÓIDES"
            card-banner="../../images/asteroide.png"
          />

          <ServiceCard
            card-name="DIÁRIO DA TERRA"
            card-banner="../../images/planeta-terra.png"
          />

          <ServiceCard
            card-name="ROVERS EM MARTE"
            card-banner="../../images/mars-rover.png"
          />
        </div>
    </section>

    <section class="section-about">
        <h3 class="about-title">SOBRE</h3>

        <div class="description">
            <p>
                Esse pequeno projeto reúne alguns dos serviços disponibilizados pelas APIs gratuítas da NASA e
                são viabilizados para o público em geral. Assim, deixando essas informações e curiosidades mais
                acessíveis aos usuários que queiram saber mais sobre o planeta Terra e a astronomia em geral.
            </p>
        </div>
    </section>
  </main>

  <Rodape/>
</template>

<style lang="sass">
@import './home.sass'
</style>

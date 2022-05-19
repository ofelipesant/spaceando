<script setup>
import Cabecalho from "../components/Cabecalho/Cabecalho.vue";
import ServiceCard from "../components/ServiceCard/ServiceCard.vue";
import Rodape from '../components/Rodape/Rodape.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Cabecalho />

  <main>
    <section class="home-section">
      <div>
        <h1 class="title">SPACEANDO</h1>
        <h3>
          A Spaceando é um espaço onde você tem acesso à diversas informações e
          curiosidades sobre o nosso planeta e o que há ao redor dele. Tudo de
          maneira fácil é prática.
        </h3>
      </div>
    </section>

    <section class="servicos">
        <h3>Confira os serviços disponíveis</h3>
        <div class="card-list">
          <RouterLink to="/foto-do-dia">
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
  </main>

  <Rodape/>
</template>

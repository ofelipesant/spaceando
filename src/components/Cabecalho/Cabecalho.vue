<script>
import { RouterLink } from "vue-router";

</script>


<template>
    <header class="cabecalho">
        <img src="../../../images/spaceando-logo.png" alt="logo" width="85" class="logo">

        <div class="menus">
            <RouterLink to="/foto-do-dia" class="link">
                <nav class="menu-link">
                    Foto do dia
                </nav>
            </RouterLink>
            <nav class="menu-link">
                Asteróides
            </nav>
            <nav class="menu-link">
                Diário da Terra
            </nav>
            <nav class="menu-link">
                Marte
            </nav>
        </div>
    </header>
</template>

<style lang="sass">
@import './cabecalho.sass'
</style>
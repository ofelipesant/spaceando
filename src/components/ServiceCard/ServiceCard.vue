<script setup>
    const props = defineProps({
        cardName: {
            type: String,
            default: '' 
        },

        cardBanner: {
            type: String,
            default: ''
        }
    })
</script>


<template>
    <div class="service-card">
        <h3 class="card-title">{{ cardName }}</h3>
        <img :src=cardBanner alt="card-banner" class="card-banner" width="100">
    </div>
</template>
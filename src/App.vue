<template>
  <TopHeader />
  <div class="main-view">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const TopHeader = defineAsyncComponent(() => import('@/components/header/TopHeader.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
</script>

<style scoped lang="scss">
.main-view {
  padding-top: 115px; //cheat header
}
</style>

<style lang="scss">
#app {
  position: relative;
}
</style>

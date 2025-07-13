<template>
  <TopHeader />
  <div class="app-main-view">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const TopHeader = defineAsyncComponent(() => import('@/components/header/TopHeader.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>

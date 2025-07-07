<template>
  <TopHeader />
  <router-view />
  <Footer />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const TopHeader = defineAsyncComponent(() => import('@/components/header/TopHeader.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
</script>

<style scoped></style>

<style>
#app {
  position: relative;
}
</style>

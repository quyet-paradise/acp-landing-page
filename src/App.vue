<template>
  <TopHeader />
  <div class="app-main-view">
    <router-view />
  </div>
  <Footer />

  <ChatBox />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const TopHeader = defineAsyncComponent(() => import('@/components/header/TopHeader.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
const ChatBox = defineAsyncComponent(() => import('@/components/chatbox/ChatBox.vue'))
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>

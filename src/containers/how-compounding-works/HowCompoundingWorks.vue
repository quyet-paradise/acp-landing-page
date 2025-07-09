<template>
    <div class="hcw">
        <div class="global-breadcrumbs">
            <div class="text">HOME</div>
            <div class="bo_right"></div>
            <div class="text">HOW COMPOUNDING WORKS</div>
        </div>

        <HcwIntro />
        <HcwBanner />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HcwIntro = defineAsyncComponent(() => import('./components/HcwIntro.vue'))
const HcwBanner = defineAsyncComponent(() => import('./components/HcwBanner.vue'))
</script>

<style lang="scss" scoped>
.hcw {
    width: 100%;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>
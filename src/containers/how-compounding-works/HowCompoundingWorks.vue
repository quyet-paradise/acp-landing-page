<template>
    <div class="hcw">
        <div class="global-breadcrumbs">
            <div class="text">HOME</div>
            <div class="bo_right"></div>
            <div class="text">HOW COMPOUNDING WORKS</div>
        </div>

        <HcwIntro />
        <HcwBanner />
        <HcwFormulations />
        <HcwProcess />
        <HcwServices />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HcwIntro = defineAsyncComponent(() => import('./components/HcwIntro.vue'))
const HcwBanner = defineAsyncComponent(() => import('./components/HcwBanner.vue'))
const HcwFormulations = defineAsyncComponent(() => import('./components/HcwFormulations.vue'))
const HcwProcess = defineAsyncComponent(() => import('./components/HcwProcess.vue'))
const HcwServices = defineAsyncComponent(() => import('./components/HcwServices.vue'))
</script>

<style lang="scss" scoped>
.hcw {
    width: 100%;
    padding: 32px 0 120px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>
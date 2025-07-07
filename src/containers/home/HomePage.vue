<template>
    <div class="homepage">
        <main ref="homeBannerRef">
            <HomeBanner />
        </main>

        <main ref="homeOurServicesRef">
            <HomeOurServices />
        </main>

        <main ref="homeOurVisionRef">
            <HomeOurVision />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HomeBanner = defineAsyncComponent(() => import('./components/HomeBanner.vue'))
const HomeOurServices = defineAsyncComponent(() => import('./components/HomeOurServices.vue'))
const HomeOurVision = defineAsyncComponent(() => import('./components/HomeOurVision.vue'))
</script>

<style lang="scss" scoped>
.homepage {
    padding-top: 115px; //cheat header
}
</style>
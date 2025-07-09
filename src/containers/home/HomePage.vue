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

        <main ref="homeFormulationsRef">
            <HomeFormulations />
        </main>

        <main ref="homeIntroduceRef">
            <HomeIntroduce />
        </main>

        <main ref="homeOurFacilityRef">
            <HomeOurFacility />
        </main>

        <main ref="homeKnowledgeCenterRef">
            <HomeKnowledgeCenter />
        </main>

        <main ref="homeTestimonialsRef">
            <HomeTestimonials />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const HomeBanner = defineAsyncComponent(() => import('./components/HomeBanner.vue'))
const HomeOurServices = defineAsyncComponent(() => import('./components/HomeOurServices.vue'))
const HomeOurVision = defineAsyncComponent(() => import('./components/HomeOurVision.vue'))
const HomeFormulations = defineAsyncComponent(() => import('./components/HomeFomulations.vue'))
const HomeIntroduce = defineAsyncComponent(() => import('./components/HomeIntroduce.vue'))
const HomeOurFacility = defineAsyncComponent(() => import('./components/HomeOurFacility.vue'))
const HomeKnowledgeCenter = defineAsyncComponent(() => import('./components/HomeKnowledgeCenter.vue'))
const HomeTestimonials = defineAsyncComponent(() => import('./components/HomeTestimonials.vue'))
</script>

<style lang="scss" scoped></style>
<template>
    <div class="kca">
        <div class="global-breadcrumbs">
            <div class="text">HOME</div>
            <div class="bo_right"></div>
            <div class="text">KNOWLEDGE CENTER</div>
        </div>

        <KcaIntro />
        <KcaContent />
        <KcaRelated />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const KcaIntro = defineAsyncComponent(() => import('./article/KcaIntro.vue'))
const KcaContent = defineAsyncComponent(() => import('./article/KcaContent.vue'))
const KcaRelated = defineAsyncComponent(() => import('./article/KcaRelated.vue'))
</script>

<style lang="scss" scoped>
.kca {
    width: 100%;
    padding: 32px 0 64px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}
</style>
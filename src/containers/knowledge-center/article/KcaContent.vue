<template>
    <div class="kca-content">
        <div class="kca-content--header">
            <div class="kca-h4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>

            <div class="kca-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>

        <div class="kca-content--banner">
            <div class="kca-content--banner--text">LEARN MORE ABOUT PEDIATRICS</div>
            <div class="kca-content--banner--mask"></div>
        </div>

        <div class="kca-content--row">
            <div class="kca-content--row--text">
                <div class="kca-h4">Lorem Ipsum is simply </div>
                <div class="kca-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>

            <img class="kca-content--row--image" src="/images/knowledge-center/kca/content/content-1.png" alt="content">
        </div>

        <div class="kca-content--row">
            <img class="kca-content--row--image" src="/images/knowledge-center/kca/content/content-2.png" alt="content">

            <div class="kca-content--row--text">
                <div class="kca-h4">Lorem Ipsum is simply </div>
                <div class="kca-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
        </div>

        <div class="kca-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>

        <div class="global-btn-brown" @click="goToPage(ROUTE_NAME.CONTACT_US)">GET STARTED WITH ARTISAN</div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'

const goToPage = (routeName: string) => {
    router.push({ name: routeName })
} 
</script>

<style lang="scss" scoped>
.kca-content {
    max-width: var(--dls-max-width-1);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;

    &--header {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &--banner {
        width: 100%;
        padding: 32px 0;
        background-image: url('/images/knowledge-center/kca/content/banner.png');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 20px;
        position: relative;
        overflow: hidden;

        &--text {
            font-weight: 700;
            font-size: 20px;
            line-height: 33px;
            text-align: center;
            letter-spacing: 1.2px;
            color: var(--dls-color-white);
            z-index: var(--dls-z-index-2);
            position: relative;
        }

        &--mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: var(--dls-z-index-1);
            background: rgba(0, 0, 0, 0.6);
        }
    }

    &--row {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 32px;

        &--text {
            flex: 1 0 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        &--image {
            width: 430px;
            height: auto;
        }
    }

    .kca-h4 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: var(--dls-color-2a2a2a);
    }

    .kca-p {
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.32px;
        color: var(--dls-color-545454);
    }
}
</style>
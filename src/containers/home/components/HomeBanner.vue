<template>
    <div class="banner">
        <img class="banner--logo" src="@/assets/images/banner-logo.svg" alt="logo">

        <div class="banner--text">
            <div>Personalized Medicine</div>
            <div>|</div>
            <div>Artfully Formulated</div>
        </div>

        <div class="banner--btn" @click="goToPage(ROUTE_NAME.CONTACT_US)">GET STARTED WITH ARTISAN</div>

        <div class="banner--mask"></div>

        <video id="bannerVideo" autoplay :controls="false" loop muted src="/videos/banner.mp4">
            Your browser does not support the video tag.
        </video>
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
.banner {
    width: 100%;
    padding: 48px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
    position: relative;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
    
    #bannerVideo {
        position: absolute;
        top: -180px;
        left: 0;
        width: 100%;
        height: auto;
        z-index: var(--dls-z-index-1);
    }

    &--mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: var(--dls-z-index-2);
    }

    &--logo {
        height: 218px;
        width: auto;
        position: relative;
        z-index: var(--dls-z-index-3);
    }

    &--text {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        color: var(--dls-color-white);
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 2px;
        position: relative;
        z-index: var(--dls-z-index-3);

    }

    &--btn {
        padding: 24px 48px;
        border-radius: 9999px;
        font-family: 'Cinzel';
        color: var(--dls-color-white);
        background: var(--dls-color-9f593f);
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 2px;
        cursor: pointer;
        line-height: 100%;
        position: relative;
        z-index: var(--dls-z-index-3);

        &:hover {
            opacity: .8;
        }
    }

    @media (max-width: 1316px) {
        gap: 48px;

        #bannerVideo {
            top: -100px;
        }
    }

    @media (max-width: 1100px) {
        #bannerVideo {
            top: 0;
        }
    }
}
</style>
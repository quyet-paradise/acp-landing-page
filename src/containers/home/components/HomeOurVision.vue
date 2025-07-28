<template>
    <div class="our-vision">
        <div class="our-vision--container">
            <img class="logo" src="@/assets/images/our-vision-logo.svg" alt="logo">

            <div class="title">OUR VISION</div>

            <div class="subtitle">Is a world where every individual receives treatment tailored to their unique body, <br /> lifestyle, and goals—delivered with care, integrity, and scientific precision.</div>

            <div class="btn" @click="goToPage(ROUTE_NAME.CONTACT_US)">GET STARTED WITH ARTISAN</div>
        </div>
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
.our-vision {
    width: 100%;
    background: var(--dls-color-323648);
    padding: 48px 0;

    &--container {
        max-width: var(--dls-max-width-1);
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 32px;

        .logo {
            height: 67px;
            width: auto;
        }

        .title {
            font-family: 'Cinzel';
            font-weight: 400;
            font-size: 38px;
            text-align: center;
            color: var(--dls-color-white);
            line-height: 100%;
        }

        .subtitle {
            font-size: 22px;
            line-height: 30px;
            font-weight: 300;
            letter-spacing: 1px;
            text-align: center;
            color: var(--dls-color-white);
        }

        .btn {
            padding: 24px 48px;
            border-radius: 9999px;
            font-family: 'Cinzel';
            color: var(--dls-color-white);
            background: var(--dls-color-9f593f);
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 2px;
            cursor: pointer;
            line-height: 100%;

            &:hover {
                opacity: .8;
            }
        }
    }
}
</style>
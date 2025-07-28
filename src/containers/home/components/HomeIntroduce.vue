<template>
    <div class="introduce">
        <div class="introduce--list-img">
            <Vue3Marquee :pause-on-hover="true" :duration="20" :gradient="true" :gradient-color="[255, 255, 255]" gradient-length="10%" :clone="true">
                <div class="item" v-for="(img, index) in imgs" :key="index">
                    <img :src="img" alt="img">
                </div>
            </Vue3Marquee>
        </div>

        <div class="introduce--ins-btn">
            <img src="@/assets/images/footer-ins-icon.svg" alt="icon">
            <div>ARTISAN COMPOUNDING</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'

const imgs: any = [
    '/images/introduce/introduce-1.png',
    '/images/introduce/introduce-2.png',
    '/images/introduce/introduce-3.png',
    '/images/introduce/introduce-4.png',
    '/images/introduce/introduce-5.png',
    '/images/introduce/introduce-1.png',
    '/images/introduce/introduce-2.png',
    '/images/introduce/introduce-3.png',
    '/images/introduce/introduce-4.png',
    '/images/introduce/introduce-5.png'
]
</script>

<style lang="scss" scoped>
.introduce {
    width: 100%;
    background: var(--dls-color-f4eee9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 32px 0;

    &--title {
        font-size: 20px;
        line-height: 33px;
        font-weight: 500;
        letter-spacing: 1px;
        color: var(--dls-color-2a2a2a);
    }

    &--list-img {
        width: 100%;

        .item {
            padding: 0 8px;
        }
    }

    &--ins-btn {
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
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        img {
            width: 18px;
            height: auto;
        }

        &:hover {
            opacity: .8;
        }
    }
}
</style>
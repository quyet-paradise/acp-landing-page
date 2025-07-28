<template>
    <div class="wcr">
        <div class="wcr--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">HOW TO WRITE A COMPOUNDED RX</div>
            </div>

            <div class="wcr--container--title">HOW TO WRITE A COMPOUNDED RX</div>

            <div class="wcr--container--content">
                <img class="image" src="/images/wcr/prescription.gif" alt="prescription">

                <div class="global-btn-brown" @click="goToPage(ROUTE_NAME.CONTACT_US)">CONTACT US FOR MORE INFO</div>
            </div>
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
.wcr {
    width: 100%;
    padding: 32px 0 64px 0;

    &--container {
        max-width: var(--dls-max-width-5);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;

        &--title {
            font-family: 'Cinzel';
            font-weight: 500;
            font-size: 30px;
            line-height: 100%;
            text-align: center;
        }

        &--content {
            display: flex;
            flex-direction: column;
            gap: 16px;
            justify-content: center;
            align-items: center;
            width: 100%;

            .image {
                width: 750px;
                height: auto;
            }
        }
    }
}
</style>
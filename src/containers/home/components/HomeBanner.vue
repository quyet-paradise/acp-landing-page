<template>
    <div class="banner">
        <img class="banner--logo" src="@/assets/images/banner-logo.svg" alt="logo">

        <div class="banner--text">
            <div>Personalized Medicine</div>
            <div>|</div>
            <div>Artfully Formulated</div>
        </div>

        <div class="banner--btn">GET STARTED WITH ARTISAN</div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    background-image: url('/images/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 48px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    &--logo {
        height: 218px;
        width: auto;
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
    }

    &--btn {
        padding: 32px 64px;
        border-radius: 9999px;
        font-family: 'Cinzel';
        color: var(--dls-color-white);
        background: var(--dls-color-9f593f);
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 2px;
        cursor: pointer;
        line-height: 100%;

        &:hover {
            opacity: .8;
        }
    }
}
</style>
<template>
    <div class="hcw-intro">
        <div class="hcw-intro--title">HOW COMPOUNDING WORKS</div>

        <div class="hcw-intro--subtitle">Personalized Medicine, Made Just for You</div>

        <div class="hcw-intro--detail">Compounding is the art and science of preparing customized medications to fit your unique needs. Unlike mass-produced <br /> drugs, compounded medications are made from scratch by a licensed pharmacist—using precise ingredients and dosages <br /> tailored to your body, condition, and preferences.</div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hcw-intro {
    max-width: var(--dls-max-width-1);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    &--title {
        font-family: 'Cinzel';
        font-weight: 500;
        font-size: 30px;
        line-height: 100%;
        text-align: center;
        color: var(--dls-color-2a2a2a);
    }

    &--subtitle {
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.48px;
        color: var(--dls-color-685c51);
        text-align: center;
    }

    &--detail {
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.32px;
        color: var(--dls-color-2a2a2a);
        text-align: center;
        padding-top: 8px;
    }
}
</style>

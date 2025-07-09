<template>
    <div class="hcw-banner">
        <div class="hcw-banner--content">
            <img class="hcw-banner--content--logo" src="@/assets/images/hcw/hcw-logo.svg" alt="logo">

            <div class="hcw-banner--content--question">WHEN IS COMPOUNDING HELPFUL?</div>

            <div class="hcw-banner--content--list">
                <div class="item" v-for="(item, index) in items" :key="index">
                    <img class="item--tick" src="@/assets/images/hcw/tick-icon.svg" alt="tick">

                    <div class="item--text">{{ item }}</div>
                </div>
            </div>
        </div>

        <div class="hcw-banner--mask"></div>
    </div>
</template>

<script lang="ts" setup>
const items = [
    'You’re allergic to an ingredient in a commercial medication',
    'You need a combination of medications in one dose',
    'You need a different strength or dosage form',
    'The medication you need is either currently in shortage or has been discontinued',
    'You prefer a cream, liquid, or lozenge instead of a pill',
    'Your child or pet needs a flavored option that’s easier to take'
]
</script>

<style lang="scss" scoped>
.hcw-banner {
    position: relative;
    width: 100%;
    background-image: url('/images/hcw/banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 32px 0 48px 0;

    &--mask {
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: var(--dls-z-index-1);
    }

    &--content {
        position: relative;
        z-index: var(--dls-z-index-2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        max-width: var(--dls-max-width-6);
        margin: 0 auto;

        &--logo {
            width: 58px;
            height: auto;
        }

        &--question {
            font-family: 'Cinzel';
            font-weight: 400;
            font-size: 30px;
            line-height: 100%;
            text-align: center;
            color: var(--dls-color-white);
        }

        &--list {
            padding-top: 16px;
            display: flex;
            flex-wrap: wrap;
            gap: 32px;

            .item {
                flex: 1 0 calc(50% - 16px);
                display: flex;
                gap: 16px;
                align-items: center;
                
                &--tick {
                    width: 24px;
                    height: 24px;
                }

                &--text {
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 23px;
                    letter-spacing: 0.32px;
                    color: var(--dls-color-faf4ef);
                }
            }
        }
    }
}
</style>
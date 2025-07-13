<template>
    <div class="kca-intro">
        <div class="kca-intro--title">What Is Compounding? A Simple Guide to <br /> Personalized Medicine</div>

        <div class="kca-intro--time">March 23, 2025</div>

        <img class="kca-intro--image" src="/images/knowledge-center/articles/article-1.png" alt="artcle">
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.kca-intro {
    max-width: var(--dls-max-width-7);
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;

    &--title {
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        color: var(--dls-color-2a2a2a);
    }

    &--time {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: var(--dls-color-9f593f);
    }

    &--image {
        width: 100%;
        height: auto;
    }
}
</style>
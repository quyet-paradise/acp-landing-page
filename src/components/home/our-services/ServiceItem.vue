<template>
    <div class="service-item"
        :style="{ 'background-image': `url(${props?.bgImage})`}">
        <div class="service-item--title" v-html="props?.text"></div>
        <div class="service-item--subtitle">{{ props?.sub }}</div>
        <div class="service-item--mask"></div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    bgImage: {
        type: String,
        default: '',
        required: true
    },
    text: {
        type: String,
        default: '',
        required: true
    },
    sub: {
        type: String,
        default: '',
        required: true
    }
})
</script>

<style lang="scss" scoped>
.service-item {
    flex: 1 0 calc(50% - 8px);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: black;
    height: 200px;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all ease .3s;

    &--title {
        font-size: 24px;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: 1px;
        color: var(--dls-color-white);
        text-align: center;
        position: relative;
        z-index: var(--dls-z-index-2);
    }

    &--subtitle {
        font-weight: 300;
        line-height: 120%;
        letter-spacing: 1px;
        color: var(--dls-color-white);
        font-size: 15px;
        text-align: center;

        display: none;
        position: relative;
        z-index: var(--dls-z-index-2);
    }

    &--mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: var(--dls-z-index-1);
        background: rgba(0, 0, 0, .4);
    }

    &:hover {
        .service-item--subtitle {
            display: block;
        }

        .service-item--mask {
            background: rgba(23, 46, 65, 0.8);
        }
    }
}
</style>
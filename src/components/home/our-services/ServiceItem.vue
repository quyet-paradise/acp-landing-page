<template>
    <div class="service-item"
        :style="{ 'background': `${props?.bgColor}` }">
        <div class="service-item--title" v-html="props?.text"></div>
        <div class="service-item--subtitle">{{ props?.sub }}</div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    bgColor: {
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
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
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

    &:hover {
        .service-item--subtitle {
            display: block;
        }
    }
}
</style>
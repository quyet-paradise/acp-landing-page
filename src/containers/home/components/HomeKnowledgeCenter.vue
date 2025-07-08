<template>
    <div class="knowledge-center">
        <div class="knowledge-center--title">KNOWLEDGE CENTER</div>

        <div class="knowledge-center--list">
            <div class="knowledge-center--list--item"
                v-for="item in knowledges"
                :key="item?.id">
                <img class="image" :src="item?.img" alt="img">
                <div class="title">{{ item?.text }}</div>
                <div class="time">{{ item?.time }}</div>
            </div>
        </div>

        <div class="knowledge-center--btn">READ MORE</div>
    </div>
</template>

<script lang="ts" setup>
const knowledges: any = [
    {
        id: 1,
        img: '/images/knowledge-center/knowledge-1.png',
        text: 'How to properly use, store, and transport a nasal spray bottle.',
        time: 'Jun 26, 2024'
    },
    {
        id: 2,
        img: '/images/knowledge-center/knowledge-2.png',
        text: 'Naturopathic First-Line Approach to Stress: Magnesium, B6, and Green Tea',
        time: 'Jun 26, 2024'
    },
    {
        id: 3,
        img: '/images/knowledge-center/knowledge-3.png',
        text: 'Understanding the Facts About Infertility',
        time: 'Jun 26, 2024'
    },
    {
        id: 4,
        img: '/images/knowledge-center/knowledge-4.png',
        text: 'Compounding Pharmacy Solutions Deliver Peace of Mind to Physicians',
        time: 'Jun 26, 2024'
    },
    {
        id: 5,
        img: '/images/knowledge-center/knowledge-5.png',
        text: 'How to properly use, store, and transport a nasal spray bottle.',
        time: 'Jun 26, 2024'
    }
]
</script>

<style lang="scss" scoped>
.knowledge-center {
    background: var(--dls-color-faf4ef);
    width: 100%;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;

    &--title {
        font-family: 'Cinzel';
        font-weight: 400;
        font-size: 38px;
        line-height: 100%;
        text-align: center;
        color: var(--dls-color-2a2a2a);
    }

    &--list {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        gap: 16px;
        width: 100%;
        padding-left: 32px;

        &--item {
            display: flex;
            flex-direction: column;
            gap: 16px;

            .image {
                width: 334px;
                height: auto;
                cursor: pointer;
            }

            .title {
                font-weight: 500;
                font-size: 17px;
                line-height: 24px;
                color: var(--dls-color-2a2a2a);
                min-height: 48px;
                cursor: pointer;
            }

            .time {
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: var(--dls-color-7d7d7d);
            }
        }
    }

    &--btn {
        padding: 20px 48px;
        border-radius: 9999px;
        border: 1px solid var(--dls-color-9f593f);
        font-family: 'Cinzel';
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
}
</style>
<template>
    <div class="kca-related">
        <div class="kca-related--title">YOU MAY ALSO LIKE THESE POSTS</div>

        <div class="kca-related--list">
            <div class="kca-related--list--item" v-for="item in relatedArticles" :key="item?.id">
                <div class="image" :style="{ 'background-image': `url(${item?.image})` }"></div>
                <div class="title">{{ item?.title }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const relatedArticles: any = [
    {
        id: 1,
        image: '/images/knowledge-center/kca/related/related-1.png',
        title: 'Inside Artisan: Our Approach to Precision and Care in Every Formula',
    },
    {
        id: 2,
        image: '/images/knowledge-center/kca/related/related-2.png',
        title: 'Why Choose a Compounding Pharmacy Over a Traditional One?',
    },
    {
        id: 3,
        image: '/images/knowledge-center/kca/related/related-3.png',
        title: '5 Common Conditions That Benefit from Compounded Medications',
    },
    {
        id: 4,
        image: '/images/knowledge-center/kca/related/related-4.png',
        title: 'What Is Compounding? A Simple Guide to Personalized Medicine',
    }
]
</script>

<style lang="scss" scoped>
.kca-related {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;

    &--title {
        font-weight: 700;
        font-size: 20px;
        line-height: 33px;
        letter-spacing: 1.2px;
        color: var(--dls-color-545454);
        text-align: center;
    }

    &--list {
        display: flex;
        gap: 32px;
        justify-content: center;

        &--item {
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 350px;

            .image {
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 410px;
                border-radius: 8px;
            }

            .title {
                font-weight: 700;
                font-size: 24px;
                line-height: 32px;
                color: var(--dls-color-2a2a2a);
            }
        }
    }
}
</style>
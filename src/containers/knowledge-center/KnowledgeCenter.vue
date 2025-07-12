<template>
    <div class="kc">
        <div class="kc--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">KNOWLEDGE CENTER</div>
            </div>

            <div class="kc--container--title">KNOWLEDGE CENTER</div>

            <div class="kc--container--content">
                <div class="left-content">
                    <div class="article" v-for="item in articles" :key="item?.id">
                        <img class="article--image" :src="item?.image" alt="img">
                        <div class="article--time">{{ item?.time }}</div>
                        <div class="article--title">{{ item?.title }}</div>
                        <div class="article--desc">{{ item?.desc }}</div>
                        <div class="article--readmore-btn">
                            <div class="article--readmore-btn--text">Read more</div>
                            <div class="bo_right"></div>
                        </div>
                    </div>
                </div>
                <div class="right-content">
                    <div class="articles-list">
                        <div class="articles-list--item" v-for="item in articles" :key="item?.id">
                            <div class="articles-list--item--time">{{ item?.time }}</div>
                            <div class="articles-list--item--title">{{ item?.title }}</div>
                        </div>
                    </div>

                    <div><hr /></div>
                    

                    <div class="global-btn-brown">BOOK A CONSULTATION</div>

                    <div><hr /></div>

                    <div class="explore">
                        <div class="explore--title">Explore</div>

                        <div class="explore--list">
                            <div class="explore--list--item" v-for="(item, index) in explorePages" :key="index">
                                <div class="text" v-html="item"></div>
                                <div class="bo_right"></div>
                            </div>
                        </div>
                    </div>

                    <div><hr /></div>

                    <div class="tips">
                        <div class="tips--title">Useful tips</div>
                        
                        <div class="tips--list">
                            <div class="tips--list--item" v-for="item in tips" :key="item?.id">
                                <img class="image" :src="item?.image" alt="img">

                                <div class="title">{{ item?.title }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const articles: any = [
    {
        id: 1,
        image: '/images/knowledge-center/articles/article-1.png',
        time: 'March 23, 2025',
        title: 'What Is Compounding? A Simple Guide to Personalized Medicine',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
    },
    {
        id: 2,
        image: '/images/knowledge-center/articles/article-2.png',
        time: 'March 23, 2025',
        title: '5 Common Conditions That Benefit from Compounded Medications',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
    },
    {
        id: 3,
        image: '/images/knowledge-center/articles/article-3.png',
        time: 'March 23, 2025',
        title: 'Why Choose a Compounding Pharmacy Over a Traditional One?',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
    },
    {
        id: 4,
        image: '/images/knowledge-center/articles/article-4.png',
        time: 'March 23, 2025',
        title: 'Inside Artisan: Our Approach to Precision and Care in Every Formula',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
    }
]

const explorePages: any = [
    'Bioidentical Hormone Replacement <br /> Therapy (BHRT)',
    'Weight Loss Compounding',
    'Sexual Health for men & women',
    'Low Dose Naltrexone (LDN)',
    'Hair Loss Solutions',
    'Dermatological Preparations',
    'Pediatrics',
    'Compounding'
]

const tips: any = [
    {
        id: 1,
        image: '/images/knowledge-center/tips/tips-1.png',
        title: 'Inside Artisan: Our Approach to Precision and Care in Every Formula'
    },
    {
        id: 2,
        image: '/images/knowledge-center/tips/tips-2.png',
        title: 'Inside Artisan: Our Approach to Precision and Care in Every Formula'
    },
]
</script>

<style lang="scss" scoped>
.kc {
    width: 100%;
    padding: 32px 0;

    &--container {
        max-width: var(--dls-max-width-7);
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        &--title {
            font-family: 'Cinzel';
            font-weight: 500;
            font-size: 30px;
            line-height: 100%;
            text-align: center;
            color: var(--dls-color-2a2a2a);
        }

        &--content {
            display: flex;
            flex-wrap: nowrap;
            gap: 32px;

            .left-content {
                flex: 1 0 0;
                display: flex;
                flex-direction: column;
                gap: 32px;

                .article {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    &--image {
                        width: 100%;
                        height: auto;
                    }

                    &--time {
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 22px;
                        color: var(--dls-color-9f593f);
                    }

                    &--title {
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 32px;
                        color: var(--dls-color-2a2a2a);
                    }

                    &--desc {
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                        color: var(--dls-color-2a2a2a);
                    }

                    &--readmore-btn {
                        display: flex;
                        gap: 8px;
                        cursor: pointer;
                        align-items: center;

                        &--text {
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 22px;
                            color: var(--dls-color-9f593f);
                        }

                        .bo_right {
                            font-size: 10px;
                            color: var(--dls-color-9f593f);
                        }
                    }
                }
            }

            .right-content {
                width: 370px;
                display: flex;
                flex-direction: column;
                gap: 48px;

                .articles-list {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;

                    &--item {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;

                        &--time {
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 22px;
                            color: var(--dls-color-9f593f);
                        }

                        &--title {
                            font-weight: 700;
                            font-size: 24px;
                            line-height: 32px;
                            color: var(--dls-color-2a2a2a);
                        }
                    }
                }

                .global-btn-brown {
                    font-weight: 500;
                }

                .explore {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;

                    &--title {
                        font-weight: 700;
                        font-size: 34px;
                        line-height: 100%;
                        color: var(--dls-color-2a2a2a);
                    }

                    &--list {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;

                        &--item {
                            display: flex;
                            justify-content: space-between;
                            cursor: pointer;

                            .text {
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 20px;
                                color: var(--dls-color-2a2a2a);
                            }

                            .bo_right {
                                font-size: 14px;
                                color: var(--dls-color-2a2a2a);
                            }
                        }
                    }
                }

                .tips {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;

                    &--title {
                        font-weight: 700;
                        font-size: 34px;
                        line-height: 100%;
                        color: var(--dls-color-2a2a2a);
                    }

                    &--list {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;

                        &--item {
                            display: flex;
                            flex-direction: column;
                            gap: 16px;

                            .image {
                                width: 100%;
                                height: auto;
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
            }
        }
    }
}
</style>
<template>
    <div class="testimonials">
        <div class="testimonials--container">
            <div class="testimonials--container--title">
                <div class="bo_left" @click="prev()"></div>
                <div class="text">TESTIMONIALS</div>
                <div class="bo_right" @click="next()"></div>
            </div>

            <div class="w-full">
                <el-carousel type="card" height="240px" arrow="never" :autoplay="false" trigger="click" ref="carouselRef">
                    <el-carousel-item v-for="item in rates" :key="item?.id" :name="item?.id">
                        <div class="flex gap-32px bg-[var(--dls-color-faf4ef)] p-32px rounded-20px">
                            <img class="w-80px h-80px" :src="item?.image" alt="img">
                            <div class="flex flex-col gap-32px">
                                <div class="text-16px font-400 leading-26px text-[var(--dls-color-202020)]">{{ item?.text }}</div>

                                <div class="flex flex-col gap-8px">
                                    <div class="text-16px font-600 text-[var(--dls-color-202020)]">{{ item?.name }}</div>
                                    <div class="text-14px font-400 text-[var(--dls-color-808080)]">{{ item?.job }}</div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="testimonials--container--pcca">
                <div class="text">PROUD MEMBERS OF</div>
                <img src="/images/testimonials/pcca-icon.png" alt="pcca">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const carouselRef = ref()
const activeItem = ref<number>(1)

const rates: any = [
    {
        id: '1',
        image: '/images/testimonials/person-1.png',
        text: 'Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.',
        name: 'KYLE MERWIN',
        job: 'CO-owner'
    },
    {
        id: '2',
        image: '/images/testimonials/person-2.png',
        text: 'Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.',
        name: 'KYLE MERWIN',
        job: 'CO-owner'
    },{
        id: '3',
        image: '/images/testimonials/person-2.png',
        text: 'Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.',
        name: 'KYLE MERWIN',
        job: 'CO-owner'
    }
]

const setActiveItem = (index: number) => {
    carouselRef.value.setActiveItem(index.toString())
}

const prev = () => {
    if (activeItem.value === 1) {
        activeItem.value = 3
    } else {
        activeItem.value--
    }

    setActiveItem(activeItem.value)
}

const next = () => {
    if (activeItem.value === 3) {
        activeItem.value = 1
    } else {
        activeItem.value++
    }

    setActiveItem(activeItem.value)
}
</script>

<style lang="scss" scoped>
.testimonials {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0;

    &--container {
        max-width: var(--dls-max-width-4);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        &--title {
            display: flex;
            justify-content: center;
            gap: 32px;
            align-items: center;

            .bo_left,
            .bo_right {
                font-size: 20px;
                color: var(--dls-color-9f593f);
                cursor: pointer;
            }

            .text {
                font-family: 'Cinzel';
                font-size: 38px;
                line-height: 100%;
                font-weight: 400;
            }
        }

        &--pcca {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;

            .text {
                font-family: 'Cinzel';
                font-size: 38px;
                line-height: 100%;
                font-weight: 400;
            }
        }
    }
}
</style>
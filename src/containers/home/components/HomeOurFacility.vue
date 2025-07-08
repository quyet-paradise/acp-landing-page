<template>
    <div class="our-facility">
        <div class="our-facility--title">
            <div class="bo_left" @click="scrollLeft"></div>
            <div class="text">OUR FACILITY</div>
            <div class="bo_right" @click="scrollRight"></div>
        </div>

        <div class="our-facility--images" id="scrollable">
            <div class="img-col-1">
                <img src="/images/our-facility/our-facility-1.png" alt="our-facility">
            </div>

            <div class="img-col-2">
                <div class="img-col-2--row double-item">
                    <img src="/images/our-facility/our-facility-2.png" alt="our-facility">
                    <img src="/images/our-facility/our-facility-3.png" alt="our-facility">
                </div>
                <div class="img-col-2--row">
                    <img src="/images/our-facility/our-facility-4.png" alt="our-facility">
                </div>
            </div>

            <div class="img-col-3">
                <img src="/images/our-facility/our-facility-5.png" alt="our-facility">
            </div>
        </div>

        <div class="our-facility--btn">
            <div class="btn">LET'S GET STARTED!</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const scrollLeft = () => {
    const scrollContainer: any = document.getElementById('scrollable');

    scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
}

const scrollRight = () => {
    const scrollContainer: any = document.getElementById('scrollable');

    scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
}
</script>

<style lang="scss" scoped>
.our-facility {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0;
    display: flex;
    flex-direction: column;
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

    &--images {
        display: flex;
        gap: 24px;
        overflow-x: auto;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            display: none; /* Hide scrollbar */
        }

        .img-col-2 {
            display: flex;
            flex-direction: column;
            gap: 16px;

            &--row {
                &.double-item {
                    display: flex;
                    gap: 24px;
                }
            }

        }
    }

    &--btn {
        display: flex;
        justify-content: center;

        .btn {
            padding: 24px 48px;
            border-radius: 9999px;
            font-family: 'Cinzel';
            color: var(--dls-color-white);
            background: var(--dls-color-9f593f);
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 2px;
            cursor: pointer;
            line-height: 100%;
            width: fit-content;

            &:hover {
                opacity: .8;
            }
        }
    }
}
</style>
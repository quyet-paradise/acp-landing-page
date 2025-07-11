<template>
    <div class="our-facility">
        <div class="global-breadcrumbs">
            <div class="text">HOME</div>
            <div class="bo_right"></div>
            <div class="text">OUR FACILITY</div>
        </div>

        <div class="our-facility--text">
            <div class="our-facility--text--title">OUR FACILITY</div>

            <div class="our-facility--text--subtitle">At our pharmacy, your safety and health are our top priorities.</div>

            <div class="our-facility--text--desc">That’s why we’ve built a compounding lab that not only meets—but exceeds—the highest industry standards, including <br /> USP <795> and USP <800>. From careful handling of ingredients to a clean, controlled environment, every step we take is <br /> designed to ensure your medication is made with precision, purity, and care. Whether it’s a custom hormone therapy, <br /> pediatric formulation, veterinary medications or specialized treatment, you can trust that your medication is prepared in a <br /> lab where quality and safety come first—every single time</div>
        </div>

        <div class="w-full relative">
            <div class="bo_left" @click="scrollLeft"></div>
            <div class="bo_right" @click="scrollRight"></div>

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
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px 0 64px 0;

    &--text {
        max-width: var(--dls-max-width-5);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        align-items: center;

        &--title {
            font-family: 'Cinzel';
            font-weight: 500;
            font-size: 30px;
            line-height: 100%;
            color: var(--dls-color-2a2a2a);
        }

        &--subtitle {
            font-weight: 500;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: 0.48px;
            color: var(--dls-color-685c51);
        }

        &--desc {
            font-weight: 400;
            font-size: 16px;
            line-height: 23px;
            letter-spacing: 0.32px;
            text-align: center;
            color: var(--dls-color-2a2a2a);
        }
    }

    &--images {
        display: flex;
        gap: 24px;
        overflow-x: auto;
        scroll-behavior: smooth;
        position: relative;

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

    .w-full.relative {
        .bo_left, .bo_right {
            position: absolute;
            z-index: var(--dls-z-index-1);
            cursor: pointer;
            padding: 8px;
            border-radius: 9999px;
            background: var(--dls-color-white);

            &:hover {
                opacity: .8;
            }
        }

        .bo_left {
            top: 50%;
            left: 16px;
        }

        .bo_right {
            top: 50%;
            right: 16px;
        }
    }
}
</style>
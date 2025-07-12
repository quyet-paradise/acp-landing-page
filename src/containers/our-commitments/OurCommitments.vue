<template>
    <div class="oc">
        <div class="oc--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">OUR COMMITMENTS</div>
            </div>

            <div class="oc--container--intro">
                <div class="title">OUR COMMITMENTS</div>

                <div class="content">
                    <div class="content--img-1"></div>

                    <div class="content--text">
                        <div class="content--text--title">OUR MISSION</div>

                        <div class="content--text--subtitle">At Artisan, we aim to redefine personalized medicine by <br /> making custom-compounded therapies accessible, effective, <br /> and empowering. Our vision is a world where every individual <br /> receives treatment tailored to their unique body, lifestyle, and <br /> goals - delivered with care, integrity, and scientific precision</div>
                    </div>

                    <div class="content--text">
                        <div class="content--text--title">OUR COMMITMENT</div>

                        <div class="content--text--subtitle">We are committed to using only the FINEST ingredients, <br /> leveraging the expertise of our highly skilled pharmacists, and <br />collaborating with knowledgeable doctors to create <br /> customized solutions tailored to each individual's needs.</div>
                    </div>

                    <div class="content--img-2"></div>
                </div>
            </div>

            <div class="oc--container--our-team">
                <div class="title">MEET OUR TEAM</div>

                <div class="list">
                    <div class="list--item" v-for="item in ourTeams" :key="item?.id">
                        <img class="list--item--avatar" :src="item?.image" alt="avatar">

                        <div class="list--item--name">{{ item?.name }}</div>

                        <div class="list--item--job" v-html="item?.job"></div>
                    </div>
                </div>
            </div>

            <div class="global-btn-brown">BOOK A CONSULTATION</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const ourTeams: any = [
    {
        id: 1,
        image: '/images/our-commitments/team/our-team-1.png',
        name: 'VAN K. NGUYEN, PHARMD, RPH',
        job: 'Founder & Pharmacist-in-Charge <br /> USC School of Pharmacy Alumni'
    },
    {
        id: 2,
        image: '/images/our-commitments/team/our-team-2.png',
        name: 'DR. EMILY CARTER',
        job: 'Medical Director, Hormone Therapy Specialist'
    },
    {
        id: 3,
        image: '/images/our-commitments/team/our-team-3.png',
        name: 'LIAM TURNER',
        job: 'Patient Care Coordinator'
    },
    {
        id: 4,
        image: '/images/our-commitments/team/our-team-4.png',
        name: 'NOAH BENNETT, PA-C',
        job: 'Wellness & Anti-Aging Consultant'
    },
    {
        id: 5,
        image: '/images/our-commitments/team/our-team-5.png',
        name: 'DR. EMILY CARTER',
        job: 'Medical Director, Hormone Therapy Specialist'
    },
    {
        id: 6,
        image: '/images/our-commitments/team/our-team-6.png',
        name: 'LIAM TURNER',
        job: 'Patient Care Coordinator'
    }
]
</script>

<style lang="scss" scoped>
.oc {
    width: 100%;

    &--container {
        max-width: var(--dls-max-width-1);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        padding: 32px 0 64px 0;

        &--intro {
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 100%;
            justify-content: center;
            align-items: center;

            .title {
                font-family: 'Cinzel';
                font-weight: 500;
                font-size: 30px;
                line-height: 100%;
                text-align: center;
                color: var(--dls-color-2a2a2a);
            }

            .content {
                display: flex;
                flex-wrap: wrap;
                width: 100%;

                &--img-1 {
                    flex: 1 0 50%;
                    background-image: url('/images/our-commitments/intro/intro-1.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                &--img-2 {
                    flex: 1 0 50%;
                    background-image: url('/images/our-commitments/intro/intro-2.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                &--text {
                    flex: 1 0 50%;
                    padding: 48px 32px;
                    background: var(--dls-color-f4eee9);
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    min-height: 260px;

                    &--title {
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 33px;
                        letter-spacing: 1.2px;
                        color: var(--dls-color-2a2a2a);
                    }

                    &--subtitle {
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 22px;
                        color: var(--dls-color-2a2a2a);
                        opacity: .6;
                    }
                }
            }
        }

        &--our-team {
            display: flex;
            flex-direction: column;
            gap: 32px;

            .title {
                font-family: 'Cinzel';
                font-weight: 500;
                font-size: 30px;
                line-height: 100%;
                text-align: center;
            }

            .list {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                row-gap: 24px;

                &--item {
                    flex: 1 0 calc((100% / 3) - (16px / 3 * 2));
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    &--avatar {
                        width: 100%;
                        height: auto;
                    }

                    &--name {
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 33px;
                        letter-spacing: 1.2px;
                        color: var(--dls-color-2a2a2a);
                    }

                    &--job {
                        font-weight: 300;
                        font-size: 14px;
                        font-style: italic;
                        line-height: 24px;
                        color: var(--dls-color-2a2a2a);
                        margin-top: -8px;
                    }
                }
            }
        }
    }
}
</style>
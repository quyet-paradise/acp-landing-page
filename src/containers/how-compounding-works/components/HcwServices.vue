<template>
    <div class="hcw-services">
        <div class="hcw-services--container">
            <div class="hcw-services--container--title">OUR SERVICES</div>

            <div class="hcw-services--container--list">
                <ServiceItem
                    v-for="service in servicesList"
                    :key="service?.id"
                    :bg-image="service?.bgImage"
                    :text="service?.text"
                    :sub="service?.sub"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const servicesList: any = [
    {
        id: 1,
        bgImage: '/images/services/service-1.png',
        text: 'BIOIDENTICAL HORMONE <br /> REPLACEMENT THERAPY <br /> (BHRT)',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        bgImage: '/images/services/service-2.png',
        text: 'WEIGHT LOSS <br /> COMPOUNDING',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        bgImage: '/images/services/service-3.png',
        text: 'SEXUAL HEALTH FOR <br /> MEN & WOMEN',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 4,
        bgImage: '/images/services/service-4.png',
        text: 'LOW DOSE NALTREXONE (LDN)',
        sub: 'LDN refers to daily dosages of naltrexone that are approximately 10% or less of the typical opioid addiction treatment dosage, commonly up to 5mg....'
    },
    {
        id: 5,
        bgImage: '/images/services/service-5.png',
        text: 'HAIR LOSS SOLUTIONS',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 6,
        bgImage: '/images/services/service-6.png',
        text: 'DERMATOLOGICAL <br /> PREPARATIONS',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 7,
        bgImage: '/images/services/service-7.png',
        text: 'PEDIATRICS',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 8,
        bgImage: '/images/services/service-8.png',
        text: 'VETERINARY <br /> COMPOUNDING',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const ServiceItem = defineAsyncComponent(() => import('@/components/home/our-services/ServiceItem.vue'))
</script>

<style lang="scss" scoped>
.hcw-services {
    width: 100%;

    &--container {
        max-width: var(--dls-max-width-2);
        margin: 0 auto;
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
            color: var(--dls-color-black);
        }

        &--list {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }
    }
}
</style>
<template>
    <div class="hcw-services">
        <div class="hcw-services--container">
            <div class="hcw-services--container--title">OUR SERVICES</div>

            <div class="hcw-services--container--list">
                <ServiceItem
                    v-for="service in servicesList"
                    :key="service?.id"
                    :bg-color="service?.bgColor"
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
        bgColor: '#B59782',
        text: 'BIOIDENTICAL HORMONE <br /> REPLACEMENT THERAPY <br /> (BHRT)',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        bgColor: '#B59782',
        text: 'WEIGHT LOSS <br /> COMPOUNDING',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        bgColor: '#D2BAA3',
        text: 'SEXUAL HEALTH FOR <br /> MEN & WOMEN',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 4,
        bgColor: '#D2BAA3',
        text: 'LOW DOSE NALTREXONE (LDN)',
        sub: 'LDN refers to daily dosages of naltrexone that are approximately 10% or less of the typical opioid addiction treatment dosage, commonly up to 5mg....'
    },
    {
        id: 5,
        bgColor: '#B59782',
        text: 'HAIR LOSS SOLUTIONS',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 6,
        bgColor: '#B59782',
        text: 'DERMATOLOGICAL <br /> PREPARATIONS',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 7,
        bgColor: '#D2BAA3',
        text: 'PEDIATRICS',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 8,
        bgColor: '#D2BAA3',
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
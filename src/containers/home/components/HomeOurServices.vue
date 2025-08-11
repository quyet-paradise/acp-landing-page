<template>
    <div class="our-services">
        <div class="our-services--container">
            <div class="commit">
                <div class="commit--title">FINEST INGREDIENTS FOR YOU</div>
                <div class="commit--subtitle">We are committed to using only the FINEST ingredients, leveraging the expertise of our highly <br /> skilled pharmacists, and collaborating with knowledgeable doctors to create customized <br /> solutions tailored to each individual's needs.</div>
            </div>

            <div class="services">
                <div class="services--title">OUR SERVICES</div>
                <div class="services--list">
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
        text: 'HAIR GROWTH',
        sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 6,
        bgColor: '#B59782',
        text: 'DERMATOLOGY',
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
.our-services {
    width: 100%;
    background: var(--dls-color-white);
    padding: 64px 0;

    &--container {
        max-width: var(--dls-max-width-2);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 48px;

        .commit {
            display: flex;
            flex-direction: column;
            gap: 32px;

            &--title {
                font-family: 'Cinzel';
                font-weight: 400;
                font-size: 38px;
                text-align: center;
                color: var(--dls-color-2a2a2a);
                line-height: 100%;
            }

            &--subtitle {
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                text-align: center;
                color: var(--dls-color-2a2a2a);
                letter-spacing: 0.5px;
            }
        }

        .services {
            display: flex;
            flex-direction: column;
            gap: 32px;

            &--title {
                font-family: 'Cinzel';
                font-weight: 400;
                font-size: 38px;
                text-align: center;
                color: var(--dls-color-2a2a2a);
                line-height: 100%;
            }

            &--list {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
            }
        }
    }
}
</style>
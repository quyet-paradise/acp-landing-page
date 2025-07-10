<template>
    <div class="hcw-process">
        <div class="hcw-process--container">
            <div class="hcw-process--container--title">OUR PROCESS</div>

            <div class="hcw-process--container--list">
                <div class="item" v-for="item in processes" :key="item?.id">
                    <div class="item--number">{{ item?.id }}</div>

                    <img class="item--icon" :src="item?.icon" alt="icon">
                    <div class="item--text">
                        <div class="item--text--title">{{ item?.title }}</div>
                        <div class="item--text--desc" v-html="item?.desc"></div>
                    </div>
                </div>
            </div>

            <div class="global-btn-brown">FILL MY PRESCRIPTIONS</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import process1 from '@/assets/images/hcw/process/process-1.svg' 
import process2 from '@/assets/images/hcw/process/process-2.svg' 
import process3 from '@/assets/images/hcw/process/process-3.svg' 
import process4 from '@/assets/images/hcw/process/process-4.svg' 

const processes: any = [
    {
        id: '1',
        icon: process1,
        title: 'Prescription Received',
        desc: 'From your provider via e-prescribe, <br /> fax, or phone call. After receiving <br /> your prescription, we will contact <br /> you and begin the process.'
    },
    {
        id: '2',
        icon: process2,
        title: 'Make your payment',
        desc: 'We will send you a secure link via <br /> SMS to complete checkout <br /> process and make payment.'
    },
    {
        id: '3',
        icon: process3,
        title: 'Medication Prepared',
        desc: 'After we receive your payment, <br /> please allow 3–7 business days for <br /> your order to be prepared for <br /> shipment or pickup.'
    },
    {
        id: '4',
        icon: process4,
        title: 'Excited for delivery day',
        desc: 'We will send you a text once your <br /> order has shipped (for Delivery) or is <br /> ready for pickup (if you selected <br /> Pickup)'
    }
]
</script>

<style lang="scss" scoped>
.hcw-process {
    width: 100%;

    &--container {
        max-width: var(--dls-max-width-5);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 32px;
        justify-content: center;
        align-items: center;

        &--title {
            font-family: 'Cinzel';
            font-weight: 400;
            font-size: 30px;
            line-height: 100%;
            text-align: center;
            color: var(--dls-color-black);
        }

        &--list {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
            width: 100%;

            .item {
                flex: 1 0 calc(50% - 16px);
                background: var(--dls-color-faf4ef);
                padding: 16px 32px 32px 32px;
                border-radius: 20px;
                position: relative;
                display: flex;
                gap: 16px;
                align-items: center;

                &--number {
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                    color: rgba(159, 89, 63, 0.13);
                    font-weight: 700;
                    font-size: 96px;
                    line-height: 100%;
                    pointer-events: none;
                }

                &--icon {
                    width: 54px;
                    height: auto;
                }

                &--text {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    &--title {
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 27px;
                        color: var(--dls-color-9f593f);
                    }

                    &--desc {
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 20px;
                        color: var(--dls-color-2a2a2a);
                    }
                }
            }
        }
    }
}
</style>
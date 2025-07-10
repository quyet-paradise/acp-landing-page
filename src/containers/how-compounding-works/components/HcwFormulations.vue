<template>
    <div class="hcw-formulations">
        <div class="hcw-formulations--container">
            <div class="hcw-formulations--container--title">COMPOUNDED FORMULATIONS WE OFFER</div>

            <div class="hcw-formulations--container--list">
                <div class="item"
                    v-for="fomular in formulars"
                    :key="fomular?.id">
                    <img class="item--icon" :src="fomular?.icon" alt="icon">
                    <div class="item--text">{{ fomular?.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import formular1 from '@/assets/images/formulations/fomulation-icon-1.svg'
import formular2 from '@/assets/images/formulations/fomulation-icon-2.svg'
import formular3 from '@/assets/images/formulations/fomulation-icon-3.svg'
import formular4 from '@/assets/images/formulations/fomulation-icon-4.svg'

const formulars: any = [
    {
        id: 1,
        icon: formular1,
        text: 'CREAMS & LOTIONS'
    },
    {
        id: 2,
        icon: formular2,
        text: 'TROCHES'
    },
    {
        id: 3,
        icon: formular3,
        text: 'CAPSULES'
    },
    {
        id: 4,
        icon: formular4,
        text: 'SUPPOSITORIES'
    }
]
</script>

<style lang="scss" scoped>
.hcw-formulations {
    width: 100%;

    &--container {
        max-width: var(--dls-max-width-5);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

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
            justify-content: center;
            align-items: flex-start;
            gap: 16px;
            width: 100%;

            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 16px;
                flex: 1 0 0;

                &--icon {
                    width: 100px;
                    height: 100px;
                }

                &--text {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 33px;
                    letter-spacing: 1px;
                    text-align: center;
                    color: var(--dls-color-2a2a2a);
                }
            }
        }
    }
}
</style>
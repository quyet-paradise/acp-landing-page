<template>
    <div class="fomulations">
        <div class="fomulations--container">
            <div class="fomulations--container--title">COMPOUNDED <br /> FORMULATIONS WE OFFER</div>

            <div class="fomulations--container--fomulars">
                <div class="item"
                    v-for="fomular in formulars"
                    :key="fomular?.id">
                    <img class="item--icon" :src="fomular?.icon" alt="icon">
                    <div class="item--text">{{ fomular?.text }}</div>
                </div>
            </div>

            <div class="fomulations--container--benefits">
                <div class="patient-img"></div>
                <div class="patient-benefits">
                    <div class="patient-benefits--title">HOW WE HELP OUR PATIENTS</div>
                    <div class="patient-benefits--list">
                        <div class="patient-benefits--list--item"
                            v-for="item in patientBenefits"
                            :key="item?.id">
                            <img class="icon" :src="item?.icon" alt="icon">
                            <div class="text">{{ item?.text }}</div>
                        </div>
                    </div>
                </div>

                <div class="pre-benefits">
                    <div class="pre-benefits--title">HOW WE HELP OUR PRESCRIBERS</div>

                    <div class="pre-benefits--list">
                        <div class="pre-benefits--list--item"
                            v-for="item in preBenefits"
                            :key="item?.id">
                            <img class="icon" :src="item?.icon" alt="icon">
                            <div class="text">{{ item?.text }}</div>
                        </div>
                    </div>
                </div>

                <div class="pre-img"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import formular1 from '@/assets/images/formulations/fomulation-icon-1.svg'
import formular2 from '@/assets/images/formulations/fomulation-icon-2.svg'
import formular3 from '@/assets/images/formulations/fomulation-icon-3.svg'
import formular4 from '@/assets/images/formulations/fomulation-icon-4.svg'

import benefitPatient1 from '@/assets/images/formulations/patient-icon-1.svg'
import benefitPatient2 from '@/assets/images/formulations/patient-icon-2.svg'
import benefitPatient3 from '@/assets/images/formulations/patient-icon-3.svg'
import benefitPatient4 from '@/assets/images/formulations/patient-icon-4.svg'

import benefitPre1 from '@/assets/images/formulations/pre-icon-1.svg'
import benefitPre2 from '@/assets/images/formulations/pre-icon-2.svg'
import benefitPre3 from '@/assets/images/formulations/pre-icon-3.svg'

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

const patientBenefits: any = [
    {
        id: 1,
        icon: benefitPatient1,
        text: 'High-quality Custom Compounded Medications'
    },
    {
        id: 2,
        icon: benefitPatient2,
        text: 'Fast and Free Delivery'
    },
    {
        id: 3,
        icon: benefitPatient3,
        text: "We're for Everything You Need"
    },
    {
        id: 4,
        icon: benefitPatient4,
        text: 'Easy, Text-based Communication'
    }
]

const preBenefits: any = [
    {
        id: 1,
        icon: benefitPre1,
        text: 'Compound medications in various forms to improve patient compliance.'
    },
    {
        id: 2,
        icon: benefitPre2,
        text: 'Collaborate closely with healthcare providers to optimize medication effectiveness and patient outcomes.'
    },
    {
        id: 3,
        icon: benefitPre3,
        text: 'Offer consultations on formulations, dosage forms, strengths, and ingredients. and more'
    }
]
</script>

<style lang="scss" scoped>
.fomulations {
    width: 100%;
    background: var(--dls-color-white);
    padding: 48px 0;

    &--container {
        max-width: var(--dls-max-width-3);
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        &--title {
            font-family: 'Cinzel';
            font-weight: 400;
            font-size: 38px;
            line-height: 120%;
            text-align: center;
            color: var(--dls-color-2a2a2a);
        }

        &--fomulars {
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

        &--benefits {
            display: flex;
            flex-wrap: wrap;
            gap: 0;
            width: 100%;

            .patient-img {
                flex: 1 0 50%;
                background-image: url('/images/formulations/patient-img.png');
                background-repeat: no-repeat;
                background-size: cover;
            }

            .pre-img {
                flex: 1 0 50%;
                background-image: url('/images/formulations/pre-img.png');
                background-repeat: no-repeat;
                background-size: cover;
            }

            .patient-benefits {
                flex: 1 0 50%;
                padding: 32px;
                background: var(--dls-color-f4eee9);
                display: flex;
                flex-direction: column;
                gap: 16px;

                &--title {
                    color: var(--dls-color-2a2a2a);
                    font-size: 20px;
                    line-height: 33px;
                    letter-spacing: 1px;
                    font-weight: 400;
                }

                &--list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    &--item {
                        display: flex;
                        gap: 12px;
                        align-items: center;

                        .icon {
                            width: 20px;
                            height: auto;
                        }

                        .text {
                            color: var(--dls-color-2a2a2a);
                            font-size: 15px;
                            line-height: 35px;
                            font-weight: 400;
                            opacity: .6;
                        }
                    }
                }
            }

            .pre-benefits {
                flex: 1 0 50%;
                padding: 32px;
                background: var(--dls-color-f4eee9);
                display: flex;
                flex-direction: column;
                gap: 16px;

                &--title {
                    color: var(--dls-color-2a2a2a);
                    font-size: 20px;
                    line-height: 33px;
                    letter-spacing: 1px;
                    font-weight: 400;
                }

                &--list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    &--item {
                        display: flex;
                        gap: 12px;
                        align-items: center;

                        .icon {
                            width: 24px;
                            height: auto;
                        }

                        .text {
                            color: var(--dls-color-2a2a2a);
                            font-size: 15px;
                            line-height: 22px;
                            font-weight: 400;
                            opacity: .6;
                        }
                    }
                }
            }
        }
    }
}
</style>
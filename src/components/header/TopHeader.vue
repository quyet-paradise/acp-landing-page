<template>
    <div class="header">
        <div class="header__top--wrapper">
            <div class="header__top">
                <div class="header__top--schedule-btn" @click="goToPage(ROUTE_NAME.BOOK_A_CONSULTATION)">Schedule a Consultation</div>

                <div class="header__top--functions">
                    <div class="portal">
                        <div class="portal--link" @click="goToPage(ROUTE_NAME.PATIENT_PORTAL_SIGNIN)">Patient Portal</div>
                        <div>|</div>
                        <div class="portal--link">Provider Portal</div>
                    </div>

                    <div class="shop-btn">
                        <el-icon :size="16"><Handbag /></el-icon>
                        <span class="mt-2px">Shop</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="header__bottom--wrapper">
            <div class="header__bottom">
                <img class="header__bottom--logo" src="@/assets/images/header-logo.svg" alt="logo" @click="goToPage(ROUTE_NAME.HOME)">

                <div class="header__bottom--menu">
                    <div class="item" @click="goToPage(ROUTE_NAME.HOME)">HOME</div>

                    <el-popover
                        :show-arrow="false"
                        placement="bottom"
                        :width="350"
                        popper-class="box-item-menu-header">

                        <div class="item--popover">
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.OUR_COMMITMENTS)">OUR TEAM</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.OUR_FACILITY)">OUR FACILITY</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.PPA)">PROFESSIONAL PARTNERSHIP / ACCREDITATION</div>
                        </div>

                        <template #reference>
                            <div class="item">ABOUT US</div>
                        </template>
                    </el-popover>

                    <el-popover
                        :show-arrow="false"
                        placement="bottom"
                        :width="400"
                        popper-class="box-item-menu-header">

                        <div class="item--popover">
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.BHRT_SERVICE)">BIOIDENTICAL HORMONE REPLACEMENT THERAPY (BHRT)</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.WEIGHT_LOSS_SERVICE)">WEIGHT LOSS COMPOUNDING</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.SEXUAL_HEALTH_SERVICE)">SEXUAL HEALTH FOR MEN & WOMEN</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.LDN_SERVICE)">LOW DOSE NALTREXONE (LDN)</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.HAIR_LOSS_SERVICE)">HAIR GROWTH</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.DERMATO_LOGICAL_SERVICE)">DERMATOLOGY</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.PEDIATRICS_SERVICE)">PEDIATRICS</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.VETERINARY_SERVICE)">VETERINARY COMPOUNDING</div>
                        </div>

                        <template #reference>
                            <div class="item">SERVICES</div>
                        </template>
                    </el-popover>
                    <el-popover
                        :show-arrow="false"
                        placement="bottom"
                        :width="288"
                        popper-class="box-item-menu-header">

                        <div class="item--popover">
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.HOW_COMPOUNDING_WORKS)">WHAT IS COMPOUNDING</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.OUR_COMMITMENTS)">WHY CHOOSE US</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.FAQ)">FAQ</div>

                            <div class="my-2px w-full"></div>

                            <div class="item--popover--btn-brown" @click="goToPage(ROUTE_NAME.BOOK_A_CONSULTATION)">Book a Consultation</div>

                            <div class="item--popover--btn-white" @click="goToPage(ROUTE_NAME.NEW_PATIENT)">New patient intake</div>
                            <div class="item--popover--btn-white" @click="goToPage(ROUTE_NAME.TRANSFER_RX)">Refill Rx/Transfer Rx</div>
                        </div>

                        <template #reference>
                            <div class="item">PATIENTS</div>
                        </template>
                    </el-popover>
                        
                    <el-popover
                        :show-arrow="false"
                        placement="bottom"
                        :width="288"
                        popper-class="box-item-menu-header">

                        <div class="item--popover">
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.OUR_COMMITMENTS)">WHY CHOOSE US</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.HOW_TO_PRESCRIBE)">HOW TO SEND PRESCRIPTIONS</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.WRITE_COMPOUNDED_RX)">HOW TO WRITE A COMPOUNDED RX</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.UNAVAILABLE_MEDICATIONS)">UNAVAILABLE MEDICATIONS</div>
                            <div class="item--popover--text" @click="goToPage(ROUTE_NAME.FAQ)">FAQ</div>

                            <div class="my-2px w-full"></div>

                            <div class="item--popover--btn-brown">Write a prescription</div>
                        </div>

                        <template #reference>
                            <div class="item">PROVIDERS</div>
                        </template>
                    </el-popover>

                    <div class="item" @click="goToPage(ROUTE_NAME.KNOWLEDGE_CENTER)">KNOWLEDGE CENTER</div>
                    <div class="item" @click="goToPage(ROUTE_NAME.FAQ)">FAQ</div>
                    <div class="item" @click="goToPage(ROUTE_NAME.CONTACT_US)">CONTACT US</div>
                </div>
            </div>                              
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'

const goToPage = (routeName: string) => {
    router.push({ name: routeName })
} 
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--dls-header-z-index);

    &__top--wrapper {
        background: var(--dls-color-b59782);
        width: 100%;
        padding: 8px 0;

        .header__top {
            max-width: var(--dls-max-width-1);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &--schedule-btn {
                border-radius: 9999px;
                border: 1px solid var(--dls-color-white);
                padding: 12px 16px;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                color: var(--dls-color-white);
                cursor: pointer;

                font-weight: 300;

                &:hover {
                    opacity: .8;
                }
            }

            &--functions {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 16px;

                .portal {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    color: var(--dls-color-white);
                    font-weight: 400;

                    &--link {
                        cursor: pointer;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

                .shop-btn {
                    border-radius: 9999px;
                    border: 1px solid var(--dls-color-white);
                    padding: 12px 16px;
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    color: var(--dls-color-white);
                    cursor: pointer;
                    font-weight: 300;
                    display: flex;
                    gap: 6px;
                    align-items: center;
                    line-height: 100%;

                    &:hover {
                        opacity: .8;
                    }
                }
            }
        }
    }

    &__bottom--wrapper {
        background: var(--dls-color-f4f4f4);
        width: 100%;
        padding: 8px 0;

        .header__bottom {
            max-width: var(--dls-max-width-1);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &--logo {
                width: 175px;
                height: auto;
                cursor: pointer;
            }

            &--menu {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex: 1 0 0;
                gap: 25px;

                .item {
                    font-size: 13px;
                    color: var(--dls-color-2a2a2a);
                    font-weight: 400;
                    cursor: pointer;

                    &:hover {
                        font-weight: 700;
                        color: var(--dls-color-b59782);
                    }
                }

                
            }
        }
    }
}
</style>

<style lang="scss">
.box-item-menu-header {
    background: var(--dls-color-f4f4f4) !important;
    padding: 16px 20px !important;

    .item--popover {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;

        &--text {
            font-size: 13px;
            color: var(--dls-color-2a2a2a);
            font-weight: 400;
            cursor: pointer;
            width: 100%;

            &:hover {
                font-weight: 700;
                color: var(--dls-color-b59782);
            }
        }

        &--btn-brown {
            width: 100%;
            background: var(--dls-color-9f593f);
            color: var(--dls-color-white);
            padding: 12px 16px;
            border-radius: 9999px;
            text-align: center;
            cursor: pointer;
            font-size: 16px;
            font-weight: 400;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                opacity: .8;
            }
        }

        &--btn-white {
            width: 100%;
            color: var(--dls-color-9f593f);
            border: 1px solid var(--dls-color-9f593f);
            padding: 12px 16px;
            border-radius: 9999px;
            text-align: center;
            cursor: pointer;
            font-size: 13px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                opacity: .8;
            }
        }
    }
}
</style>
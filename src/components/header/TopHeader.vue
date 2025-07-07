<template>
    <div class="header">
        <div class="header__top--wrapper">
            <div class="header__top">
                <div class="header__top--schedule-btn">Schedule a Consultation</div>

                <div class="header__top--functions">
                    <div class="portal">
                        <div class="portal--link">Patient Portal</div>
                        <div>|</div>
                        <div class="portal--link">Provider Portal</div>
                    </div>

                    <div class="shop-btn">Shop</div>
                </div>
            </div>
        </div>

        <div class="header__bottom--wrapper">
            <div class="header__bottom">
                <img class="header__bottom--logo" src="@/assets/images/header-logo.svg" alt="logo">

                <div class="header__bottom--menu">
                    <div class="item">HOME</div>
                    <div class="item">SERVICES</div>
                    <el-popover
                        :show-arrow="false"
                        placement="bottom"
                        :width="288"
                        popper-class="box-item-menu-header">

                        <div class="item--popover">
                            <div class="item--popover--text">WHAT IS COMPOUNDING</div>
                            <div class="item--popover--text">WHY CHOOSE US</div>
                            <div class="item--popover--text">DELIVERY OPTIONS</div>
                            <div class="item--popover--text">FAQ</div>

                            <div class="my-2px w-full"></div>

                            <div class="item--popover--btn-brown">Book a Consultation</div>

                            <div class="item--popover--btn-white">New patient intake</div>
                            <div class="item--popover--btn-white">Refill Rx/Transfer Rx</div>
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
                            <div class="item--popover--text">WHY CHOOSE US</div>
                            <div class="item--popover--text">HOW TO SEND PRESCRIPTIONS</div>
                            <div class="item--popover--text">HIPAA-SECURE PROVIDER SCRIPT FORM</div>
                            <div class="item--popover--text">FAQ FOR PROVIDERS</div>

                            <div class="my-2px w-full"></div>

                            <div class="item--popover--btn-brown">Write a prescription</div>
                        </div>

                        <template #reference>
                            <div class="item">PROVIDERS</div>
                        </template>
                    </el-popover>

                    <el-popover
                        :show-arrow="false"
                        placement="bottom"
                        :width="288"
                        popper-class="box-item-menu-header">

                        <div class="item--popover">
                            <div class="item--popover--text">OUR TEAM</div>
                            <div class="item--popover--text">OUR FACILITY</div>
                        </div>

                        <template #reference>
                            <div class="item">ABOUT US</div>
                        </template>
                    </el-popover>

                    <div class="item">KNOWLEDGE CENTER</div>
                    <div class="item">FAQ</div>
                    <div class="item">CONTACT US</div>
                </div>
            </div>                              
        </div>
    </div>
</template>

<script lang="ts" setup></script>

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
                    padding: 12px 24px;
                    color: var(--dls-color-white);
                    background: var(--dls-color-9f593f);
                    border-radius: 9999px;
                    cursor: pointer;

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
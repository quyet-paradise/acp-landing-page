<template>
    <div class="services">
        <div class="services--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="services--container--intro">
                <div class="title">BIOIDENTICAL HORMONE REPLACEMENT <br /> THERAPY (BHRT)</div>

                <img class="image" src="/images/services/services-banner.png" alt="banner">

                <div class="text">Restore balance, energy, and well-being with personalized BHRT for men and women. Our compounded <br /> hormones are designed to match your body’s natural chemistry, addressing symptoms of menopause, <br /> andropause, and hormonal imbalances.
                </div>

                <div class="text">We work closely with you and your provider to customize your treatment, offering a variety of dosage forms—<br />creams, troches, capsules, and more—for optimal absorption and convenience.
                </div>
            </div>

            <div class="services--container--conditions">
                <img class="logo" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">CONDITIONS TREATED</div>

                <div class="tabs">
                    <el-tabs v-model="activeName" class="condition-tabs" @tab-click="handleClick">
                        <el-tab-pane label="Menopause & perimenopause" name="first">
                            <ul>
                                <li>Problem: story of patients suffering from this Condition</li>
                                <li>Personalized Treatment: how Artisan compounds detailed treatment (for ex: Testoterone) and help patients overcome the problem.</li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="Andropause" name="second">
                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </el-tab-pane>
                        <el-tab-pane label="Thyroid imbalance" name="third">
                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </el-tab-pane>
                        <el-tab-pane label="Adrenal fatigue" name="fourth">
                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </el-tab-pane>
                        <el-tab-pane label="PMS and PCOS" name="five">
                            <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>

            <div class="global-btn-brown">CONTACT US FOR MORE INFO</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.services {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0;

    &--container {
        max-width: var(--dls-max-width-1);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        &--intro {
            display: flex;
            flex-direction: column;
            gap: 16px;
            justify-content: center;
            align-items: center;

            .title {
                font-size: 30px;
                line-height: 120%;
                font-weight: 500;
                font-family: 'Cinzel';
                text-align: center;
                color: var(--dls-color-2a2a2a);
            }

            .image {
                width: 100%;
                height: auto;
            }

            .text {
                font-size: 16px;
                line-height: 23px;
                letter-spacing: 0.5px;
                text-align: center;
                font-weight: 400;
                color: var(--dls-color-2a2a2a);
            }
        }

        &--conditions {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;

            .logo {
                width: 40px;
                height: auto;
            }

            .title {
                color: var(--dls-color-black);
                font-weight: 400;
                font-family: 'Cinzel';
                font-size: 38px;
                line-height: 100%;
                text-align: center;
            }

            .tabs {
                width: 100%;
                padding: 8px 32px 16px 32px;
                background: var(--dls-color-faf4ef);
                border-radius: 10px;
            }
        }
    }
}
</style>

<style lang="scss">
.condition-tabs {
    .el-tabs__nav {
        justify-content: space-between;
        width: 100%;

        .el-tabs__item {
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: var(--dls-color-black);

            &.is-active {
                font-weight: 700;
                color: var(--dls-color-9f593f);
            }
        }
    }

    .el-tabs__active-bar {
        background-color: var(--dls-color-9f593f);
    }

    .el-tabs__content {
        ul {
            li {
                font-size: 18px;
                line-height: 27px;
                font-weight: 400;
                color: var(--dls-color-202020);
                padding-bottom: 8px;
                letter-spacing: 0.5px;
            }
        }

        .content {
            font-size: 18px;
            line-height: 27px;
            font-weight: 400;
            color: var(--dls-color-202020);
            letter-spacing: 0.5px;
        }
    }
}
</style>
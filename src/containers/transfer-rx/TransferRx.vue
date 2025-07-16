<template>
    <div class="transfer-rx">
        <div class="transfer-rx--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">TRANSFER RX</div>
            </div>

            <div class="global-form-title">REFILL RX/TRANSFER RX</div>

            <el-tabs v-model="activeName" class="transfer-rx-tabs" @tab-click="handleClick">
                <el-tab-pane label="REFILL MY PRESCRIPTIONS" name="refill">
                    <Refill />
                </el-tab-pane>
                <el-tab-pane label="TRANSFER MY PRESCRIPTIONS" name="transfer">
                    <Transfer />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'

const Refill = defineAsyncComponent(() => import('./components/Refill.vue'))
const Transfer = defineAsyncComponent(() => import('./components/Transfer.vue'))

const activeName = ref('refill')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.transfer-rx {
    width: 100%;
    padding: 32px 0 64px 0;

    &--container {
        max-width: var(--dls-form-2-max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
    }
}
</style>

<style lang="scss">
.transfer-rx-tabs {
    width: 100%;
    align-items: center;
    gap: 8px;

    .el-tabs__header {
        width: 710px;

        .el-tabs__nav {
            justify-content: space-between;
            width: 100%;

            .el-tabs__active-bar {
                background-color: var(--dls-color-9f593f);
            }

            .el-tabs__item {
                color: var(--dls-color-7d7d7d);
                font-weight: 700;
                font-size: 20px;
                line-height: 33px;
                letter-spacing: 1.2px;
                width: 355px;

                &.is-active {
                    color: var(--dls-color-2a2a2a);
                }
            }
        }
    }

    .el-tabs__content {
        width: 100%;
    }
}
</style>
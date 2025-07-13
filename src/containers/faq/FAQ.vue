<template>
    <div class="faq">
        <div class="global-breadcrumbs">
            <div class="text">HOME</div>
            <div class="bo_right"></div>
            <div class="text">FAQ</div>
        </div>

        <div class="faq--title">FAQ</div>

        <div class="faq--collapse">
            <el-collapse v-model="activeNames" class="faq-collapse-obj">
                <el-collapse-item v-for="item in faqs" :key="item?.id" :title="item?.question" :name="item?.id">
                    <template #icon="{ isActive }">
                        <span class="icon-ele">
                            <div v-if="isActive" class="bo_minus"></div>
                            <div v-else class="bo_add"></div>
                        </span>
                    </template>
                    <div>{{ item?.answer }}</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'


const faqs: any = [
    {
        id: '1',
        question: 'Why Artisan?',
        answer: 'At Artisan Compounding Pharmacy, we believe your health deserves more than a one-size-fits-all solution. That’s why we craft customized medications using only the finest pharmaceutical-grade ingredients—because we never compromise quality for cost. Our experienced pharmacists work hand-in-hand with patients and providers to support a wide range of needs, including hormone therapy, dermatology, pediatrics, wellness, and more. With free local delivery on all orders and a commitment to safety, precision, and care, Artisan is where science meets service—bringing you a higher standard of compounding.'
    },
    {
        id: '2',
        question: 'How long does it take Artisan to fill a prescription?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: '3',
        question: 'Can Artisan ship my prescription to me?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: '4',
        question: 'Are Artisan compounded medications covered by insurance?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: '5',
        question: 'What is your return policy?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: '6',
        question: 'Return Shipping',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: '7',
        question: 'Do I need a prescription for a personalized medication?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const activeNames = ref(['1'])
</script>


<style lang="scss" scoped>
.faq {
    max-width: var(--dls-max-width-6);
    margin: 0 auto;
    padding: 32px 0 64px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    &--title {
        font-family: 'Cinzel';
        font-weight: 500;
        font-size: 30px;
        line-height: 100%;
        text-align: center;
    }

    &--collapse {
        padding: 32px;
        background: var(--dls-color-f4eee9);
        border-radius: 20px;
        width: 100%;
    }

    .bo_minus, .bo_add {
        font-size: 24px;
        color: var(--dls-color-2a2a2a);
    }
}
</style>

<style lang="scss">
.el-collapse-item {
    padding: 4px 0;
}

.el-collapse-item__header {
    background: var(--dls-color-f4eee9);
    border-bottom: 1px solid #c8c8c8;
}

.el-collapse-item__wrap {
    background: var(--dls-color-f4eee9);
    border-bottom: 1px solid #c8c8c8;
}

.el-collapse-item__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: var(--dls-color-2a2a2a);
    margin-bottom: 8px;
}

.el-collapse-item__content {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.32px;
    color: var(--dls-color-2a2a2a);
}

</style>
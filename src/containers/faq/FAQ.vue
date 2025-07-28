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
                    <div v-html="item?.answer"></div>
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
        question: 'Do all pharmacies compound medication? What sets Artisan Compounding Pharmacy apart?',
        answer: 'No, most pharmacies do not compound medications. Compounding requires specialized training, equipment, and strict quality standards. At Artisan Compounding Pharmacy, we specialize in personalized, high-quality compounded medications. Our pharmacists are trained by the Professional Compounding Centers of America (PCCA) – a globally recognized leader in compounding education and innovation. We use only pharmaceutical-grade ingredients in a USP <795> and USP <800> compliant lab.'
    },
    {
        id: '3',
        question: 'What do you mean by pharmaceutical-grade ingredients?',
        answer: 'Pharmaceutical-grade ingredients are the highest quality raw materials that meet strict standards for purity, strength, and consistency set by the United States Pharmacopeia (USP) or other trusted authorities. <br /> We source our ingredients only from trusted suppliers to ensure that every compounded medication is safe, effective and tailored to your exact needs.'
    },
    {
        id: '4',
        question: 'Do I need a prescription for compounded medications?',
        answer: 'Yes, all compounded medications require a prescription from a doctor’s office.'
    },
    {
        id: '5',
        question: 'What if my doctor is unfamiliar or uncomfortable with prescribing compounds?',
        answer: 'We’re happy to work directly with your doctor, whether by providing a prescription form with suggested formulations or recommending a custom formulation tailored to your needs. We can also connect you with local physicians experienced in compounding care.'
    },
    {
        id: '6',
        question: 'Are compounded medications covered by insurance?',
        answer: 'Unfortunately, many insurance companies do not cover compounded medications, leaving you responsible for the cost. To make your treatment more affordable, we offer discounted pricing on extended supplies: <br /> *Up to 10% discount for a 2-month supply <br /> *Up to 15% discount for a 3-month supply <br /> Due to medication stability, not all compounded medications are eligible for extended fills. Contact us for details or a personalized quote. We’re happy to help!'
    },
    {
        id: '7',
        question: 'How long does it take for my prescription to be ready?',
        answer: 'Our goal is a 2-4 business days turnaround for every prescription upon receiving your order. Since compounded medications are custom-made and cannot be reused, we’re required to confirm and get the payment before compounding new prescription to avoid waste. <br /> You’ll receive a text or phone call as soon as your prescription is ready.'
    },
    {
        id: '8',
        question: 'What can cause a delay?',
        answer: 'In some cases, if your prescription requires a hard-to-find ingredient, there may be a 1-2 business days delay while we order it. We’ll notify you right away if your medication will be delayed.'
    },
    {
        id: '9',
        question: 'Do you offer pickup, delivery or shipping options?',
        answer: 'Yes! You’re welcome to pick up your medications in person at our Tustin location, or we can ship them directly via FedEx to your home for your convenience. We also offer local delivery. Just ask us what option works best for you!'
    },
    {
        id: '10',
        question: 'Do you offer a Military discount?',
        answer: 'We are grateful for the service and sacrifice of our military members. To show our appreciation, we offer a 10% discount to all retired and active military personnel with valid government-issued ID. The discount applies to the military member only.'
    },
    {
        id: '11',
        question: 'What is the return policy?',
        answer: '**Compounded medications cannot be returned to the pharmacy under any circumstance after dispensing** <br /> For over-the-counter (OTC) products/supplements purchased in store, customers may return any unopened OTC merchandise within 14 days of purchase with the original receipt. A refund will be issued in the original form of payment. <br /> For OTC products/supplements purchased online, customers can send unopened merchandise and original receipt back to us within 14 days of delivery for a refund less the shipping fee. <br /> Customers must carefully package the product(s) as you are responsible for damage during shipment. Customers are responsible for the cost of return shipping <br /> Ship your return to: <br /> Artisan Compounding Pharmacy <br /> 17400 Irvine Blvd, Suite H <br /> Tustin, CA 92780'
    },
    {
        id: '12',
        question: 'Items arrived damaged or defective?',
        answer: 'We carefully package every order to ensure it arrives in excellent condition. However, if your order is damaged during shipping, please contact us at --@artisan-rx.com and we’ll be happy to assist you.'
    },
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
    height: auto;
    gap: 8px;
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
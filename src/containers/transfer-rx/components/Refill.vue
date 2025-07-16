<template>
    <el-form class="refill"
        ref="refillFormRef"
        :model="refillForm"
        :rules="rules">
        <div class="flex flex-col gap-16px">
            <div class="flex flex-col">
                <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">REFILL MY PRESCRIPTIONS</div>
                <div class="font-400 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)]">Please use the form below to submit refill orders for prescriptions previously filled at Artisan Compounding Pharmacy.</div>
            </div>

            <div class="flex flex-wrap items-start gap-x-32px gap-y-0">
                <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Your full name</div>
                    <el-input v-model="refillForm.fullname" type="text" placeholder="Enter your full name" />
                </el-form-item>
                <el-form-item prop="email" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Your email address</div>
                    <el-input v-model="refillForm.email" type="email" placeholder="Enter your email" />
                </el-form-item>
                <el-form-item prop="dob" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Date of birth *</div>
                    <el-date-picker v-model="refillForm.dob" type="date" placeholder="Enter your date of birth" format="MM/DD/YYYY" />
                    <div class="global-input-hint">MM/DD/YYYY</div>
                </el-form-item>
                <el-form-item prop="phone" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Cell phone *</div>
                    <el-input v-model="refillForm.phone" type="text" placeholder="+1 (000) 000-0000" />
                </el-form-item>
            </div>
        </div>

        <div class="flex flex-col gap-16px">
            <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">ADD MEDICATION</div>

            <div v-for="(medication, index) in refillForm.medications" :key="index" class="flex flex-wrap items-start gap-x-16px gap-y-0">
                <el-form-item
                    :prop="'medications.' + index + '.name'"
                    :rules="{
                        required: true,
                        message: 'Please input name',
                        trigger: 'blur'
                    }"
                    class="basis-[calc(50%-8px)]">
                    <div class="global-input-label">Full name of medication *</div>
                    <el-input v-model="medication.name" type="text" placeholder="Medication name" />
                    <div class="global-input-hint mt-8px">First 3 letters of drug name, <br /> e.g. BIE, EST, TES, PRO, T3, T4, or rx number, or an <br/> identifier, e.g. patch, capsule, vaginal cream, etc.</div>
                </el-form-item>

                <el-form-item
                    :prop="'medications.' + index + '.quantity'"
                    :rules="{
                        required: true,
                        message: 'Please select quantity',
                        trigger: 'blur'
                    }"
                    class="basis-[calc(50%-8px)]">
                    <div class="global-input-label">Quantity (restrictions apply) *</div>
                    <el-select v-model="medication.quantity" placeholder="Select" class="w-full">
                        <el-option :key="1" label="Lorem1" value="Lorem1" />
                        <el-option :key="2" label="Lorem2" value="Lorem2" />
                        <el-option :key="3" label="Lorem3" value="Lorem3" />
                    </el-select>
                </el-form-item>

                <el-form-item
                    :prop="'medications.' + index + '.note'"
                    class="basis-[calc(50%-8px)]">
                    <div class="global-input-label">Notes for this rx</div>
                    <el-input v-model="medication.note" type="text" placeholder="Enter note" />
                </el-form-item>
            </div>
            
            <div class="flex gap-16px">
                <div class="flex items-center justify-center bg-[var(--dls-color-9f593f)] color-[var(--dls-color-white)] py-12px w-190px text-center rounded-10px cursor-pointer font-700 text-14px leading-13px tracking-0.84px" @click="addMedication">ADD ANOTHER</div>
                <div class="flex items-center justify-center gap-4px border-1 border-[var(--dls-color-7d7d7d)] color-[var(--dls-color-7d7d7d)] w-220px text-center py-12px cursor-pointer rounded-10px font-700 text-14px leading-13px tracking-0.84px" @click="removeMedication">
                    <div class="bo_trash text-14px"></div>
                    <span>REMOVE MEDICATION</span>
                </div>
            </div>

            <div><hr /></div>
        </div>

        <div class="flex flex-col gap-16px">
            <el-form-item
                prop="question_1">
                <div class="global-input-label">Do you need your order shipped/couriered or will you pick up your order? *</div>
                <el-select v-model="refillForm.question_1" placeholder="Select" class="w-[calc(50%-8px)]">
                    <el-option :key="1" label="I will pickup my medications" value="Lorem1" />
                    <el-option :key="2" label="Lorem2" value="Lorem2" />
                    <el-option :key="3" label="Lorem3" value="Lorem3" />
                </el-select>
            </el-form-item>

            <el-form-item
                prop="question_2">
                <div class="global-input-label">When do you need your order by? Please allow 5 business days if possible. *</div>
                <el-date-picker v-model="refillForm.dob" type="date" placeholder="Enter your date of birth" format="MM/DD/YYYY" style="width: calc(50% - 8px) !important;" />
                <div class="global-input-hint w-full">MM/DD/YYYY</div>
            </el-form-item>

            <div class="global-input-hint -mt-16px">The estimated due date is NOT a guarantee. Problems with payment, prescription refills, insurance processing, drug supply, compounding, or other issues may delay your order.</div>

            <el-form-item
                prop="credit_card">
                <div class="global-input-label w-full">Credit card: *</div>
                <el-select v-model="refillForm.credit_card" placeholder="Select" class="w-[calc(50%-8px)]">
                    <el-option :key="1" label="Charge the card from my previous order" value="Lorem1" />
                    <el-option :key="2" label="Lorem2" value="Lorem2" />
                    <el-option :key="3" label="Lorem3" value="Lorem3" />
                </el-select>
            </el-form-item>

            <el-form-item
                prop="note">
                <div class="global-input-label">Additional Order Notes, Promo Codes, or Urgent Requests</div>
                <el-input v-model="refillForm.note" type="textarea" :rows="4" placeholder="Add note" class="w-[calc(50%-8px)]" />
            </el-form-item>

            <div class="flex gap-16px">
                <div class="flex items-center justify-center w-240px py-16px border-1 border-[var(--dls-color-2a2a2a)] color-[var(--dls-color-2a2a2a)] rounded-full font-[Cinzel] font-600 text-17px leading-none tracking-1.19px cursor-pointer hover:opacity-75">REVIEW</div>
                <div class="flex items-center justify-center w-240px py-16px bg-[var(--dls-color-9f593f)] color-[var(--dls-color-white)] rounded-full font-[Cinzel] font-600 text-17px leading-none tracking-1.19px cursor-pointer hover:opacity-75" @click.prevent="submitForm(refillFormRef)">SUBMIT</div>
            </div>
        </div>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface MedicationItem {
    name: string,
    quantity: string,
    note: string
}

interface RefillForm {
    fullname: string,
    email: string,
    dob: string,
    phone: string,
    medications: MedicationItem[],
    question_1: string,
    question_2: string,
    credit_card: string,
    note: string
}

const refillFormRef = ref<FormInstance>()
const refillForm = reactive<RefillForm>({
    fullname: '',
    email: '',
    dob: '',
    phone: '',
    medications: [
        {
            name: '',
            quantity: '',
            note: ''
        }
    ],
    question_1: '',
    question_2: '',
    credit_card: '',
    note: ''
})

const rules = reactive<FormRules<RefillForm>>({
    dob: [
        {
            type: 'date',
            required: true,
            message: 'Please input date of birth',
            trigger: 'change'
        }
    ],
    phone: [
        {
            required: true,
            message: 'Please input phone',
            trigger: 'change'
        }
    ],
    question_1: [
        {
            required: true,
            message: 'Please pick your choice',
            trigger: 'blur'
        }
    ],
    question_2: [
        {
            required: true,
            message: 'Please pick a date',
            trigger: 'blur'
        }
    ],
    credit_card: [
        {
            required: true,
            message: 'Please input credit card',
            trigger: 'blur'
        }
    ]
})

const addMedication = () => {
    refillForm.medications.push({
        name: '',
        quantity: '',
        note: ''
    })
}

const removeMedication = () => {
    refillForm.medications = [
        {
            name: '',
            quantity: '',
            note: ''
        }
    ]
}

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>

<style lang="scss" scoped>
.refill {
    width: 100%;
    background: var(--dls-color-faf4ef);
    padding: 32px 48px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>
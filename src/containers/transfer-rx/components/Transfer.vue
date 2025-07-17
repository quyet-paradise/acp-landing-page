<template>
    <el-form 
        class="transfer"
        ref="transferFormRef"
        :model="transferForm"
        :rules="rules">

        <div class="flex flex-col gap-16px">
            <div class="flex flex-col">
                <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">TRANSFER MY RXS</div>
                <div class="font-400 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)]">Please use the form below to submit requests for your current prescriptions to be transferred from your current pharmacy to Artisan Compounding Pharmacy. <br /> Please complete the following form to submit a Transfer of your prescription.</div>
            </div>

            <div class="flex flex-wrap items-start gap-x-32px gap-y-0">
                <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Your full name</div>
                    <el-input v-model="transferForm.fullname" type="text" placeholder="Enter your full name" />
                </el-form-item>
                <el-form-item prop="email" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Your email address</div>
                    <el-input v-model="transferForm.email" type="email" placeholder="email@mail.com" />
                </el-form-item>
                <el-form-item prop="dob" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Date of birth *</div>
                    <el-date-picker v-model="transferForm.dob" type="date" placeholder="Enter your date of birth" format="MM/DD/YYYY" />
                    <div class="global-input-hint">MM/dd/yyyy</div>
                </el-form-item>
                <el-form-item prop="phone" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Cell phone *</div>
                    <el-input v-model="transferForm.phone" type="text" placeholder="+1 (000) 000-0000" />
                </el-form-item>
            </div>
        </div>

        <div class="flex flex-col gap-16px">
            <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">PRESCRIPTION INFORMATION</div>

            <div class="flex flex-wrap items-start gap-32px">
                <el-form-item prop="pharmacy_name" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Name of current compounding pharmacy *</div>
                    <el-input v-model="transferForm.pharmacy_name" type="text" placeholder="Enter the name" />
                </el-form-item>
                <el-form-item prop="pharmacy_phone" class="basis-[calc(50%-16px)]">
                    <div class="global-input-label">Phone number of current compounding pharmacy *</div>
                    <el-input v-model="transferForm.pharmacy_phone" type="text" placeholder="Enter the phone" />
                </el-form-item>
            </div>
        </div>

        <div class="flex flex-col gap-16px">
            <el-form-item prop="reason" class="w-full">
                <div class="global-input-label">So that we may serve you better, what are the reasons for transferring your rxs to Artisan Compounding Pharmacy?</div>

                <el-checkbox-group v-model="transferForm.reason" class="flex flex-col gap-16px w-full mt-8px">
                    <el-checkbox v-for="reason in reasonsList" :key="reason" :label="reason" :value="reason" />
                    <el-checkbox label="Other" :value="`Other (${otherReason})`"/>
                </el-checkbox-group>

                <el-input v-model="otherReason" class="w-50% mt-8px ml-16px" v-if="transferForm?.reason?.some((item: any) => item.startsWith('Other'))" type="text" placeholder="Enter the reason"></el-input>
            </el-form-item>

            <div class="global-input-label">Please be aware that we are a specialty compounding pharmacy, and not all transfer requests will be eligible to be transferred to our pharmacy. We do not fill the following medications: narcotics such as oxycodone, hydrocodone, ADHD/ADD medications such as Vyvanse or Concerta, injectable weight loss drugs such as semaglutide or tirzepatide injections, or commercial medications that can be filled at your local retail pharmacy such as CVS or Walgreens. We welcome your inquiry, and will respond if we can service your medication or not.</div>
        </div>

        <div class="flex flex-col gap-16px">
            <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">ADD MEDICATION</div>

            <el-form-item prop="is_transfer_all" class="w-full">
                <el-checkbox 
                    label="Transfer all of my medications" 
                    :checked="transferForm.is_transfer_all" 
                    :value="transferForm.is_transfer_all"
                />
            </el-form-item>

            <div v-for="(medication, index) in transferForm.medications" :key="index" class="flex flex-wrap items-start gap-x-16px gap-y-0">
                <el-form-item
                    :prop="'medications.' + index + '.rx_number'"
                    :rules="{
                        required: true,
                        message: 'Please input name',
                        trigger: 'blur'
                    }"
                    class="basis-[calc(50%-8px)]">
                    <div class="global-input-label">Rx number *</div>
                    <el-input v-model="medication.rx_number" type="text" placeholder="Enter Rx number" />
                </el-form-item>

                <el-form-item
                    :prop="'medications.' + index + '.name'"
                    :rules="{
                        required: true,
                        message: 'Please input name',
                        trigger: 'blur'
                    }"
                    class="basis-[calc(50%-8px)]">
                    <div class="global-input-label">Medication Name *</div>
                    <el-input v-model="medication.name" type="text" placeholder="Medication name" />
                </el-form-item>

                <el-form-item
                    :prop="'medications.' + index + '.is_add_rx'"
                    class="basis-[100%]">
                    <el-checkbox 
                        label="Add this rx to the automatic refill program" 
                        :checked="medication.is_add_rx" 
                        :value="medication.is_add_rx"
                    />
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

        <div class="flex gap-16px">
            <div class="flex items-center justify-center w-240px py-16px border-1 border-[var(--dls-color-2a2a2a)] color-[var(--dls-color-2a2a2a)] rounded-full font-[Cinzel] font-600 text-17px leading-none tracking-1.19px cursor-pointer hover:opacity-75">REVIEW</div>
            <div class="flex items-center justify-center w-240px py-16px bg-[var(--dls-color-9f593f)] color-[var(--dls-color-white)] rounded-full font-[Cinzel] font-600 text-17px leading-none tracking-1.19px cursor-pointer hover:opacity-75" @click.prevent="submitForm(transferFormRef)">SUBMIT</div>
        </div>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface MedicationItem {
    rx_number: string,
    name: string,
    note: string
    is_add_rx: boolean
}

interface TransferForm {
    fullname: string,
    email: string,
    dob: string,
    phone: string,
    pharmacy_name: string,
    pharmacy_phone: string,
    reason: string[],
    is_transfer_all: boolean,
    medications: MedicationItem[]
}

const transferFormRef = ref<FormInstance>()
const transferForm = reactive<TransferForm>({
    fullname: '',
    email: '',
    dob: '',
    phone: '',
    pharmacy_name: '',
    pharmacy_phone: '',
    reason: [],
    is_transfer_all: true,
    medications: [
        {
            rx_number: '',
            name: '',
            note: '',
            is_add_rx: false
        }
    ]
})

const rules = reactive<FormRules<TransferForm>>({
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
    pharmacy_name: [
        {
            required: true,
            message: 'Please pharmacy name',
            trigger: 'change'
        }
    ],
    pharmacy_phone: [
        {
            required: true,
            message: 'Please pharmacy phone',
            trigger: 'change'
        }
    ]
})

const otherReason = ref<string>('')
const reasonsList = [
    'Price',
    'Longer lead times',
    'Unsatisfactory Service',
    'Medication is not available'
]

const addMedication = () => {
    transferForm.medications.push({
        name: '',
        rx_number: '',
        note: '',
        is_add_rx: false
    })
}

const removeMedication = () => {
    transferForm.medications = [
        {
            name: '',
            rx_number: '',
            note: '',
            is_add_rx: false
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
.transfer {
    width: 100%;
    background: var(--dls-color-faf4ef);
    padding: 32px 48px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>

<style lang="scss">
.el-checkbox__label {
    font-weight: 400;
    font-size: 16px;
    color: var(--dls-color-2a2a2a);
    letter-spacing: 0.32px;
}

.el-checkbox__input.is-checked+.el-checkbox__label {
    color: var(--dls-color-2a2a2a);
}

</style>
<template>
    <div class="my-profile">
        <div class="my-profile--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">MY PROFILE</div>
            </div>

            <div class="global-form-title">MY PROFILE</div>

            <div class="flex flex-col gap-16px w-full items-center">
                <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-9f593f)]">REFILL TRACKING</div>
                <el-steps :active="1" align-center finish-status="success" class="w-full">
                    <el-step title="ORDER PLACED" />
                    <el-step title="ORDER PREPARED" />
                    <el-step title="SHIPPING" />
                    <el-step title="RECEIVED" />
                </el-steps>
            </div>

            <el-form
                class="my-profile--container--form"
                ref="myProfileFormRef"
                :model="myProfileForm">

                <div class="flex flex-col gap-16px w-full">
                    <div class="flex flex-col gap-8px w-full">
                        <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">PATIENT INFORMATION</div>

                        <div class="flex flex-wrap items-start gap-x-32px gap-y-0">
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Name</div>
                                <el-input v-model="myProfileForm.patient_info.name" type="text" placeholder="Emily Rose Thompson" />
                            </el-form-item>

                            <div class="basis-[100%] flex items-start gap-x-32px gap-y-0">
                                <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                    <div class="global-input-label">Shipping Address</div>
                                    <el-input v-model="myProfileForm.patient_info.shipping_address" type="text" placeholder="123 Willow Street, Apt 4B, Denver, CO 80205" />
                                </el-form-item>

                                <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                    <div class="global-input-label">Billing Address:</div>
                                    <el-select v-model="myProfileForm.patient_info.billing_address" placeholder="Select" class="w-full">
                                        <el-option :key="1" label="Same as shipping" value="Same as shipping" />
                                        <el-option :key="2" label="Others" value="Others" />
                                    </el-select>
                                </el-form-item>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-8px w-full">
                        <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">PERSONAL INFO</div>

                        <div class="flex flex-wrap items-start gap-x-32px gap-y-0">
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Date of birth</div>
                                <el-date-picker v-model="myProfileForm.personal_info.dob" type="date" placeholder="Enter your date of birth" format="MM/DD/YYYY" />
                            </el-form-item>
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Gender</div>
                                <el-select v-model="myProfileForm.personal_info.gender" placeholder="Select" class="w-full">
                                    <el-option :key="1" label="Male" value="Male" />
                                    <el-option :key="2" label="Female" value="Female" />
                                </el-select>
                            </el-form-item>
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Your email address</div>
                                <el-input v-model="myProfileForm.personal_info.email" type="email" placeholder="email@mail.com" />
                            </el-form-item>
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Cell phone</div>
                                <el-input v-model="myProfileForm.personal_info.phone" type="text" placeholder="+1 (243) 357-0181" />
                            </el-form-item>
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Weight</div>
                                <el-input v-model="myProfileForm.personal_info.weight" type="text" placeholder="145 lbs" />
                            </el-form-item>
                        </div>
                    </div>

                    <div class="flex flex-col gap-8px w-full">
                        <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">MEDICAL INFO</div>

                        <div class="flex flex-wrap items-start gap-x-32px gap-y-0">
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Allergies</div>
                                <el-input v-model="myProfileForm.medical_info.allergies" type="text" placeholder="Penicillin" />
                            </el-form-item>
                            <el-form-item prop="fullname" class="basis-[calc(50%-16px)]">
                                <div class="global-input-label">Date of birth</div>
                                <el-input v-model="myProfileForm.medical_info.medical_conditions" type="text" placeholder="Hypothyroidism, mild anxiety" />
                            </el-form-item>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-240px py-16px bg-[var(--dls-color-9f593f)] color-[var(--dls-color-white)] rounded-full font-[Cinzel] font-600 text-17px leading-none tracking-1.19px cursor-pointer hover:opacity-75" @click.prevent="submitForm(myProfileFormRef)">SAVE</div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance } from 'element-plus'

interface MyProfileForm {
    patient_info: {
        name: string,
        shipping_address: string,
        billing_address: string
    },
    personal_info: {
        dob: string,
        gender: string,
        email: string,
        phone: string,
        weight: string,
    },
    medical_info: {
        allergies: string,
        medical_conditions: string
    }
}

const myProfileFormRef = ref<FormInstance>()
const myProfileForm = reactive<MyProfileForm>({
    patient_info: {
        name: '',
        shipping_address: '',
        billing_address: ''
    },
    personal_info: {
        dob: '',
        gender: '',
        email: '',
        phone: '',
        weight: '',
    },
    medical_info: {
        allergies: '',
        medical_conditions: ''
    }
})

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
.my-profile {
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

        &--form {
            width: 100%;
            background: var(--dls-color-faf4ef);
            padding: 32px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 32px;
            align-items: center;
        }
    }
}
</style>
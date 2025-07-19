<template>
    <div class="new-patient">
        <div class="new-patient--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">NEW PATIENT</div>
            </div>

            <div class="global-form-title">NEW PATIENT</div>

            <el-steps :active="0" align-center class="w-full">
                <el-step title="Page 1" />
                <el-step title="Page 2" />
                <el-step title="Page 3" />
                <el-step title="Page 4" />
            </el-steps>

            <el-form
                class="new-patient--container--form"
                ref="newPatientFormRef"
                :model="newPatientForm">

                <div class="flex flex-col gap-16px">
                    <div class="font-400 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)]">Please use the form below to provide or update your patient information with Artisan Compounding Pharmacy.</div>

                    <div class="flex flex-wrap items-end gap-x-32px gap-y-0">
                        <el-form-item prop="name.first_name" class="basis-[calc(50%-16px)]" :rules="{
                            required: true,
                            message: 'Please input first name',
                            trigger: 'blur'
                        }">
                            <div class="global-input-label">Patient Name *</div>
                            <el-input v-model="newPatientForm.name.first_name" type="text" placeholder="First Name" />
                        </el-form-item>
                        <el-form-item prop="name.last_name" class="basis-[calc(50%-16px)]" :rules="{
                            required: true,
                            message: 'Please input last name',
                            trigger: 'blur'
                        }">
                            <el-input v-model="newPatientForm.name.last_name" type="text" placeholder="Last Name" />
                        </el-form-item>

                        <el-form-item prop="dob" class="basis-[calc(50%-16px)]" :rules="{
                            type: 'date',
                            required: true,
                            message: 'Please pick date',
                            trigger: 'blur'
                        }">
                            <div class="global-input-label">Date of birth *</div>
                            <el-date-picker v-model="newPatientForm.dob" type="date" placeholder="Enter your date of birth" format="MM/DD/YYYY" />
                        </el-form-item>

                        <el-form-item prop="species" class="basis-[calc(50%-16px)]" :rules="{
                            required: true,
                            message: 'Please input species',
                            trigger: 'blur'
                        }">
                            <div class="global-input-label">Species *</div>
                            <el-input v-model="newPatientForm.species" type="text" placeholder="Species" />
                        </el-form-item>

                        <el-form-item prop="gender" class="basis-[calc(50%-16px)]" :rules="{
                            required: true,
                            message: 'Please select',
                            trigger: 'blur'
                        }">
                            <div class="global-input-label">Gender *</div>
                            <el-select v-model="newPatientForm.gender" placeholder="Select" class="w-full">
                                <el-option :key="1" label="Male" value="Male" />
                                <el-option :key="2" label="Female" value="Female" />
                            </el-select>
                        </el-form-item>

                        <div class="w-full flex flex-col">
                            <div class="global-input-label">Address *</div>
                            <el-form-item prop="address.street" class="w-full" :rules="{
                                required: true,
                                message: 'Please input',
                                trigger: 'blur'
                            }">
                                <el-input v-model="newPatientForm.address.street" type="text" placeholder="Street Address" />
                            </el-form-item>

                            <el-form-item prop="address.line" class="w-full" :rules="{
                                required: true,
                                message: 'Please input',
                                trigger: 'blur'
                            }">
                                <el-input v-model="newPatientForm.address.line" type="text" placeholder="Address Line 2" />
                            </el-form-item>

                            <div class="flex gap-32px items-end">
                                <el-form-item prop="address.city" class="basis-[calc(50%-16px)]" :rules="{
                                    required: true,
                                    message: 'Please input',
                                    trigger: 'blur'
                                }">
                                    <el-input v-model="newPatientForm.address.city" type="text" placeholder="City" />
                                </el-form-item>

                                <el-form-item prop="address.postal" class="basis-[calc(50%-16px)]" :rules="{
                                    required: true,
                                    message: 'Please input',
                                    trigger: 'blur'
                                }">
                                    <el-input v-model="newPatientForm.address.postal" type="text" placeholder="Postal" />
                                </el-form-item>
                            </div>

                            <div class="flex gap-32px items-end">
                                <el-form-item prop="address.state" class="basis-[calc(50%-16px)]" :rules="{
                                    required: true,
                                    message: 'Please input',
                                    trigger: 'blur'
                                }">
                                    <el-input v-model="newPatientForm.address.state" type="text" placeholder="State" />
                                </el-form-item>

                                <el-form-item prop="address.state" class="basis-[calc(50%-16px)]" :rules="{
                                    required: true,
                                    message: 'Please input',
                                    trigger: 'blur'
                                }">
                                    <el-select v-model="newPatientForm.gender" placeholder="Select" class="w-full">
                                        <el-option :key="1" label="United States" value="US" />
                                        <el-option :key="2" label="United Kingdom" value="UK" />
                                    </el-select>
                                </el-form-item>
                            </div>
                        </div>

                        <el-form-item prop="phone" class="basis-[calc(50%-16px)]" :rules="{
                            required: true,
                            message: 'Please input cell phone',
                            trigger: 'blur'
                        }">
                            <div class="global-input-label">Cell phone: *</div>
                            <el-input v-model="newPatientForm.phone" type="text" placeholder="+1 (000) 000-0000" />
                        </el-form-item>

                        <el-form-item prop="email" class="basis-[calc(50%-16px)]">
                            <div class="global-input-label">Your email address</div>
                            <el-input v-model="newPatientForm.email" type="email" placeholder="email@mail.com" />
                        </el-form-item>

                        <div class="font-700 text-20px leading-33px tracking-1.2px color-[var(--dls-color-2a2a2a)]">PATIENT PREFERENCES</div>

                        <el-form-item prop="preferences" class="w-full">
                            <el-checkbox-group v-model="newPatientForm.preferences" class="flex flex-col gap-16px w-full mt-8px">
                                <el-checkbox v-for="p in preferencesList" :key="p" :label="p" :value="p" />
                            </el-checkbox-group>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance } from 'element-plus'

interface NewPatientForm {
    name: {
        first_name: string,
        last_name: string
    },
    dob: string,
    species: string,
    gender: string,
    address: {
        street: string,
        line: string,
        city: string,
        postal: string,
        state: string,
        country: string
    },
    phone: string,
    email: string,
    preferences: string[]
}

const newPatientFormRef = ref<FormInstance>()
const newPatientForm = reactive<NewPatientForm>({
    name: {
        first_name: '',
        last_name: ''
    },
    dob: '',
    species: '',
    gender: '',
    address: {
        street: '',
        line: '',
        city: '',
        postal: '',
        state: '',
        country: ''
    },
    phone: '',
    email: '',
    preferences: []
})

const preferencesList: string[] = [
    'I would like to receive text notifications regarding my order.', 
    'I would like to receive email notifications regarding my order.', 
    'I would like to have a child-resistant safety cap on my medications if applicable.'
]
</script>

<style lang="scss" scoped>
.new-patient {
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
            padding: 32px 48px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
    }
}
</style>
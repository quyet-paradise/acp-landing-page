<template>
    <div class="bac">
        <div class="bac--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">BOOK A CONSULTATION</div>
            </div>

            <div class="global-form-title">SCHEDULE A CONSULTATION</div>

            <div class="font-400 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)] text-center">Request A Complimentary 15-Minute Consultation With Our Experienced Clinical Compounding Pharmacist.</div>

            <el-form
                class="bac--container--form"
                ref="bacFormRef"
                :model="bacForm"
                :rules="rules">

                <div class="flex flex-col gap-16px">
                    <div class="flex flex-wrap items-start gap-x-32px gap-y-0">
                        <el-form-item prop="name" class="basis-[calc(50%-16px)]">
                            <div class="global-input-label">Name *</div>
                            <el-input v-model="bacForm.name" type="text" placeholder="First Name" />
                        </el-form-item>
                        <el-form-item prop="email" class="basis-[calc(50%-16px)]">
                            <div class="global-input-label">Your email address *</div>
                            <el-input v-model="bacForm.email" type="email" placeholder="email@mail.com" />
                        </el-form-item>
                        <el-form-item prop="phone" class="basis-[calc(50%-16px)]">
                            <div class="global-input-label">Phone: *</div>
                            <el-input v-model="bacForm.phone" type="text" placeholder="+1 (000) 000-0000" />
                        </el-form-item>
                        <el-form-item prop="name" class="basis-[calc(50%-16px)]">
                            <div class="global-input-label">Type of Request *</div>
                            <el-select v-model="bacForm.type" placeholder="Select" class="w-full">
                                <el-option :key="1" label="Medications" value="Medications" />
                                <el-option :key="2" label="Others" value="Others" />
                            </el-select>
                        </el-form-item>
                    </div>

                    <el-form-item prop="note">
                        <div class="global-input-label">Questions/Comments *</div>
                        <el-input v-model="bacForm.note" type="textarea" :rows="4" placeholder="Enter your message" class="w-full" />
                    </el-form-item>
                </div>

                <div class="flex items-center justify-center w-240px py-16px bg-[var(--dls-color-9f593f)] color-[var(--dls-color-white)] rounded-full font-[Cinzel] font-600 text-17px leading-none tracking-1.19px cursor-pointer hover:opacity-75" @click.prevent="submitForm(bacFormRef)">SUBMIT</div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface BacForm {
    name: string,
    email: string,
    phone: string,
    type: string,
    note: string
}

const bacFormRef = ref<FormInstance>()
const bacForm = reactive<BacForm>({
    name: '',
    email: '',
    phone: '',
    type: '',
    note: ''
})

const rules = reactive<FormRules<BacForm>>({
    name: [
        {
            required: true,
            message: 'Please input name',
            trigger: 'blur'
        }
    ],
    email: [
        {
            required: true,
            message: 'Please input email',
            trigger: 'blur'
        },
        {
            type: 'email',
            message: 'Please input correct email',
            trigger: 'blur'
        }
    ],
    phone: [
        {
            required: true,
            message: 'Please input phone',
            trigger: 'blur'
        }
    ],
    type: [
        {
            required: true,
            message: 'Please select',
            trigger: 'blur'
        }
    ],
    note: [
        {
            required: true,
            message: 'Please input',
            trigger: 'blur'
        }
    ]
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
.bac {
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
            align-items: center;
        }
    }
}
</style>
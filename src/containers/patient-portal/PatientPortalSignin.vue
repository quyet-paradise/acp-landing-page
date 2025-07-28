<template>
    <div class="pt-signin">
        <div class="pt-signin--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">PATIENT PORTAL</div>
            </div>

            <div class="global-form-title">PATIENT PORTAL</div>

            <el-form 
                class="pt-signin--container--form"
                ref="signinFormRef"
                :model="signupForm"
                :rules="rules">

                <el-form-item prop="email" class="w-full">
                    <div class="global-input-label">Enter Your Email*</div>
                    <el-input v-model="signupForm.email" type="email" placeholder="Enter your email" />
                </el-form-item>

                <el-form-item prop="password" class="w-full">
                    <div class="global-input-label">Create Your Password*</div>
                    <el-input v-model="signupForm.password" type="password" :show-password="true" placeholder="Enter your password" />
                </el-form-item>

                <el-form-item prop="rememberMe" class="w-full">
                    <div class="flex gap-4px">
                        <el-checkbox v-model="signupForm.rememberMe" label="" />
                        <div class="font-400 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)]">Keep me logged in on this computer</div>
                    </div>
                </el-form-item>

                <div class="global-btn-brown" @click="submitForm(signinFormRef)">SIGN IN</div>


                <div class="w-full text-center font-400 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)] mt-16px">New? <span class="font-700 color-[var(--dls-color-9f593f)] cursor-pointer" @click="goToPage(ROUTE_NAME.PATIENT_PORTAL_SIGNUP)">Sign up</span></div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'

import type { FormInstance, FormRules } from 'element-plus'

interface SignInForm {
    email: string,
    password: string,
    rememberMe: boolean
}

const signinFormRef = ref<FormInstance>()
const signupForm = reactive<SignInForm>({
    email: '',
    password: '',
    rememberMe: true
})

const rules = reactive<FormRules<SignInForm>>({
    email: [
        {
            required: true,
            message: 'Please input email',
            trigger: 'blur'
        },
        {
            type: 'email',
            message: 'Please fill the correct email format',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: 'Please input password',
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

const goToPage = (routeName: string) => {
    router.push({ name: routeName })
} 
</script>

<style lang="scss" scoped>
.pt-signin {
    width: 100%;
    padding: 32px 0 64px 0;

    &--container {
        max-width: var(--dls-form-1-max-width);
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;

        &--form {
            background: var(--dls-color-f4eee9);
            padding: 48px 64px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            justify-content: center;
            align-items: center;
        }
    }

    .global-btn-brown {
        width: 240px;
        text-align: center;
    }
}
</style>
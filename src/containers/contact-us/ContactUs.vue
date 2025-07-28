<template>
    <div class="contact-us">
        <div class="contact-us--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">CONTACT US</div>
            </div>

            <div class="global-form-title">CONTACT US</div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13269.967377050523!2d-117.828559!3d33.747954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbd83453d7c5%3A0xafcaa97c67a4f405!2s17400%20Irvine%20Blvd%2C%20Tustin%2C%20CA%2092780%2C%20USA!5e0!3m2!1sen!2s!4v1753608179574!5m2!1sen!2s" width="100%" height="270" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <el-form
                class="contact-us--container--form"
                ref="contactUsFormRef"
                :model="contactUsForm"
                :rules="rules">

                <div class="flex gap-64px w-full">
                    <div class="w-350px flex flex-col gap-16px">
                        <div class="flex flex-col gap-32px">
                            <div class="flex gap-16px" v-for="item in contactInfo" :key="item?.id">
                                <img class="w-54px h-54px" :src="item?.icon" alt="icon">

                                <div class="flex flex-col">
                                    <div class="font-500 text-16px leading-26px color-[var(--dls-color-7d7d7d)]">{{ item?.title }}</div>
                                    <div class="font-500 text-21px leading-26px color-[var(--dls-color-2a2a2a)]">{{ item?.info }}</div>
                                </div>
                            </div>

                            <div><hr /></div>

                            <div class="font-700 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)]">Monday – Friday 9:30 AM – 5:00 PM <br /> Saturday: 10:00 AM - 02:00 PM <br /> Sunday: CLOSED</div>
                            <div class="font-400 text-16px leading-23px tracking-0.32px color-[var(--dls-color-2a2a2a)]">Artisan Compounding Pharmacy is closed on all major holidays, including New Year’s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas. <br /> We also close early on Christmas Eve and <br /> New Year’s Eve.</div>
                        </div>
                    </div>
                    <div class="basis-[100%] flex flex-col gap-8px">
                        <el-form-item prop="name" class="w-full">
                            <div class="global-input-label">Name *</div>
                            <el-input v-model="contactUsForm.name" type="text" placeholder="First Name" />
                        </el-form-item>
                        <el-form-item prop="name" class="w-full">
                            <div class="global-input-label">Phone: *</div>
                            <el-input v-model="contactUsForm.phone" type="text" placeholder="+1 (000) 000-0000" />
                        </el-form-item>
                        <el-form-item prop="name" class="w-full">
                            <div class="global-input-label">Your email address *</div>
                            <el-input v-model="contactUsForm.email" type="email" placeholder="email@mail.com" />
                        </el-form-item>
                        <el-form-item prop="name" class="w-full">
                            <div class="global-input-label">Type of Request *</div>
                            <el-select v-model="contactUsForm.type" placeholder="Select" class="w-full">
                                <el-option :key="1" label="Medications" value="Medications" />
                                <el-option :key="2" label="Others" value="Others" />
                            </el-select>
                        </el-form-item>

                        <el-form-item prop="note">
                            <div class="global-input-label">Questions/Comments *</div>
                            <el-input v-model="contactUsForm.note" type="textarea" :rows="4" placeholder="Enter your message" class="w-full" />
                        </el-form-item>

                        <div class="flex items-center justify-center w-240px py-16px bg-[var(--dls-color-9f593f)] color-[var(--dls-color-white)] rounded-full font-[Cinzel] font-600 text-17px leading-none tracking-1.19px cursor-pointer hover:opacity-75" @click.prevent="submitForm(contactUsFormRef)">SUBMIT</div>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

import callIcon from '@/assets/images/contact-us/call-icon.svg'
import emailIcon from '@/assets/images/contact-us/email-icon.svg'
import faxIcon from '@/assets/images/contact-us/fax-icon.svg'
import localtionIcon from '@/assets/images/contact-us/location-icon.svg'

interface ContactUsForm {
    name: string,
    phone: string,
    email: string,
    type: string,
    note: string
}

const contactUsFormRef = ref<FormInstance>()
const contactUsForm = reactive<ContactUsForm>({
    name: '',
    email: '',
    phone: '',
    type: '',
    note: ''
})

const rules = reactive<FormRules<ContactUsForm>>({
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

const contactInfo: any = [
    {
        id: 1,
        icon: localtionIcon,
        title: 'Address',
        info: '17400 Irvine Blvd, Suite H Tustin, CA 92780'
    },
    {
        id: 2,
        icon: callIcon,
        title: 'Call or Text',
        info: '(212) 967-0892'
    },
    {
        id: 3,
        icon: faxIcon,
        title: 'Fax',
        info: '(212) 967-0892'
    },
    {
        id: 4,
        icon: emailIcon,
        title: 'Email',
        info: 'hello@artisanpharmacy.com'
    }
]

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
.contact-us {
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
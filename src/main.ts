import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/scss/global-fonts.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'

import Vue3Lottie from 'vue3-lottie'
import router from '@/router'

import "@/styles/index.scss"

const app = createApp(App);

app.use(router)
app.use(Vue3Lottie, { name: 'Vue3Lottie' })
app.use(ElementPlus)

app.mount('#app')

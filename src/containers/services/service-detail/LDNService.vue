<template>
    <div class="ldn-service">
        <div class="ldn-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">LOW-DOSE NALTREXONE (LDN)</div>

            <div class="paragraph">Low-Dose Naltrexone (LDN) may help treat various conditions, particularly those involving chronic pain and autoimmune issues. </div>

            <div class="heading">Chronic Pain</div>
            <ul>
                <li>Fibromyalgia</li>
                <li>Complex Regional Pain Syndrome (CRPS)</li>
                <li>Diabetic Neuropathy</li>
                <li>Neuropathic Pain</li>
                <li>Other forms of chronic pain</li>
            </ul>

            <div class="heading">Autoimmune and inflammatory conditions</div>
            <ul>
                <li>Crohn's Disease</li>
                <li>Multiple Sclerosis (MS)</li>
                <li>Hashimoto's Thyroiditis</li>
                <li>Rheumatoid Arthritis</li>
                <li>Lupus</li>
                <li>Endometriosis</li>
                <li>Psoriasis</li>
                <li>Lichen Planopilaris (LPP)</li>
                <li>Dermatomyositis</li>
                <li>Scleroderma</li>
            </ul>

            <div class="heading">Other conditions</div>
            <ul>
                <li>Long COVID</li>
                <li>Chronic Fatigue Syndrome (CFS/ME)</li>
                <li>Depression</li>
                <li>Irritable Bowel Syndrome (IBS)</li>
                <li>Postural Orthostatic Tachycardia Syndrome (POTS)</li>
                <li>Mast Cell Activation Syndrome (MCAS)</li>
                <li>Some cancers (as an adjuvant therapy)</li>
            </ul>

            <div class="heading">How LDN works</div>
            <div class="paragraph">LDN modulates the immune system and reduces inflammation. It affects opioid receptors and glial cells, which are involved in pain and inflammation pathways. LDN also influences endorphin production, according to <a href="https://drbrighten.com/low-dose-naltrexone/" target="_blank">drbrighten.com</a>. </div>

            <div class="heading">Important considerations</div>
            <ul>
                <li>LDN is considered a relatively safe medication, with generally mild side effects, such as sleep disturbances, nausea, and vivid dreams.</li>
                <li>The effectiveness of LDN can vary.</li>
                <li>Research on LDN for some conditions, particularly long-term effects, is still limited.</li>
            </ul>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">CONTACT US FOR MORE INFO</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss" scoped>
.ldn-service {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
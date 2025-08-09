<template>
    <div class="ldn-service">
        <div class="ldn-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">LOW-DOSE NALTREXONE (LDN)</div>

            <div class="paragraph text-center">Naltrexone was first approved in 50 mg tablets to block opioids. Low Dose Naltrexone uses just 0.5 –6 mg, about one tenth the original amount, to gently influence your own endorphins and calm an over active immune system. Think of it as a micro reset button for chronic inflammation, pain and fatigue—without blocking normal pleasure or requiring clinic visits.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">WHY DO PEOPLE TRY LDN?</div>
            </div>

            <ul>
                <li><b>Autoimmune relief</b> – Hashimoto’s, rheumatoid arthritis, psoriasis, Crohn’s, ulcerative colitis</li>
                <li><b>Lasting pain control</b> – fibromyalgia, nerve pain, endometriosis, migraines</li>
                <li><b>Energy & mood lift</b> – chronic fatigue, brain fog, long COVID recovery</li>
                <li><b>Skin & gut repair</b> – eczema, hidradenitis, IBS, SIBO</li>
            </ul>

            <div class="note">(LDN is prescribed “off label.” The FDA has not evaluated LDN for the above uses. Results vary; your prescriber can tell you if it’s right for you.)</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">WHICH FORMULATION IS FOR YOU?</div>
            </div>
            
            <table>
                <tbody>
                    <tr>
                        <th>Form</th>
                        <th>Why Patients Love It</th>
                        <th>Best For</th>
                    </tr>

                    <tr>
                        <td>Plant based Capsules</td>
                        <td>Simple, travel proof, dye free</td>
                        <td>Most adults</td>
                    </tr>

                    <tr>
                        <td>Rapid Dissolve Tablets</td>
                        <td>Melts on the tongue, no water needed</td>
                        <td>Kids & anyone who hates pills</td>
                    </tr>

                    <tr>
                        <td>Sublingual Peppermint Drops</td>
                        <td>Fast absorption, micro titration</td>
                        <td>Sensitive stomachs, flexible dosing</td>
                    </tr>

                    <tr>
                        <td>Transdermal Cream</td>
                        <td>Rub on wrist</td>
                        <td>Severe GI issues, pediatrics</td>
                    </tr>

                    <tr>
                        <td>Slow Release Capsules</td>
                        <td>Gentle all day effect</td>
                        <td>Light sleepers</td>
                    </tr>
                </tbody>
            </table>

            <div class="note">All forms can be compounded lactose free, and gluten free.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">YOUR 4 STEP LDN JOURNEY</div>
            </div>

            <ol>
                <li>Ask your provider for an LDN prescription (we can supply them with dosing templates).</li>
                <li>Send it to us via e script, or fax.</li>
                <li>Choose your form & flavor in a quick call with our pharmacist.</li>
                <li>Receive your tailor made LDN at your door.</li>
            </ol>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">SMALL DOSE. BIG POSSIBILITIES. LET’S UNLOCK THEM TOGETHER</div>
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
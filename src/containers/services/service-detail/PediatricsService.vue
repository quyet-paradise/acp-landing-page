<template>
    <div class="pediatrics-service">
        <div class="pediatrics-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">BECAUSE KIDS DESERVE MEDICINES AS UNIQUE AS THEY ARE</div>

            <div class="paragraph text-center">Swallowing a bitter pill or refusing to pill isn’t the only hurdle parents face. Dyes that trigger sensitivities, and chalky tablets cut into crumbs can all stand between a child and the care they need. At Artisan Compounding Pharmacy, we turn those hurdles into easy victories by custom-crafting pediatric medications that taste better, dose accurately, and fit every child’s routine.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">HOW PEDIATRIC COMPOUNDING CHANGES THE GAME</div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Challenge</th>
                        <th>Our Made-for-Kids Solution</th>
                        <th>Why Parents Love It</th>
                    </tr>

                    <tr>
                        <td>Tiny, weight-based doses</td>
                        <td>Micro-suspensions or mini capsules measured to the milligram</td>
                        <td>No risky tablet-splitting; precise every time</td>
                    </tr>

                    <tr>
                        <td>Sensory & taste aversions</td>
                        <td>Over 30 natural flavors: bubble-gum, marshmallow, or mango. Sweetened without sugar if needed</td>
                        <td>Fewer tears and negotiations at dose time</td>
                    </tr>

                    <tr>
                        <td>Swallowing difficulties or feeding tubes</td>
                        <td>Alcohol-free liquid concentrates, effervescent powders.</td>
                        <td>Glide easily through tubes and fragile tummies</td>
                    </tr>

                    <tr>
                        <td>Chronic conditions needing long-term therapy</td>
                        <td>Sustained-release suspensions, transdermal gels, or rapid-dissolve films</td>
                        <td>Less frequent dosing, better school day adherence</td>
                    </tr>

                    <tr>
                        <td>Multiple allergies / intolerances</td>
                        <td>Dye-, gluten-, soy-, dairy-, and peanut-free based on request</td>
                        <td>Peace of mind for parents & clinicians</td>
                    </tr>

                    <tr>
                        <td>Nausea or vomiting</td>
                        <td>Suppositories or topical anti-nausea gels</td>
                        <td>Bypass the stomach entirely</td>
                    </tr>
                </tbody>
            </table>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">COMMON CHILDHOOD CONDITIONS WE CUSTOMIZE</div>
            </div>
            <ul>
                <li><b>Gastroesophageal Reflux (GERD):</b> Low pH buffered omeprazole or lansoprazole suspensions stay stable for 60 days and deliver relief without gritty beads.</li>
                <li><b>Attention-Deficit/Hyperactivity Disorder (ADHD):</b> Custom-strength methylphenidate or dexamphetamine flavored suspensions allow incremental titration in as little as 1 mg steps - perfect for finding the sweet spot between focus and side effects.</li>
                <li><b>Seizure Disorders:</b> Concentrated levetiracetam, clonazepam, or topiramate liquids in sugar-free, alcohol-free vehicles make round-the-clock dosing easier for caregivers.</li>
                <li><b>Infant Pain & Fever:</b> Acetaminophen or ibuprofen suppositories offer rapid relief when a child can’t keep anything down.</li>
                <li><b>Eczema & Diaper Rash:</b> Steroid-sparing tacrolimus 0.03 % ointment or cholestyramine plus zinc oxide barrier creams calm inflammation while rebuilding skin integrity.</li>
                <li><b>Cystic Fibrosis & Nutritional Support:</b> High-calorie, flavored vitamin A-D-E-K drops or enzymatic powder packs mix seamlessly into formula or juice.</li>
                <li><b>Oral Thrush & Mouth Sores:</b> Honey-based nystatin lollipops or magic mouthwash swish-and-spit gels turn treatment into a treat.</li>
            </ul>

            <div class="paragraph">All medications require a valid prescription; we collaborate directly with your pediatrician or specialist.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">KID-APPROVED DOSAGE FORMS</div>
            </div>
            <ul>
                <li>Flavored Oral Suspensions & Syrups</li>
                <li>Gummy Troches or Chewies</li>
                <li>Rapid-Dissolve Films & Sublingual Tablets</li>
                <li>Transdermal Gels</li>
                <li>Effervescent Powders & Drink Sticks</li>
                <li>Suppositories & Mini caps</li>
                <li>Medicated Lollipops & Lozenges</li>
            </ul>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">SAFETY YOU CAN TRUST</div>
            </div>
            <ul>
                <li>Compounded under USP <795>/<800> with USP-grade ingredients</li>
                <li>Batch-tested for potency, uniformity, and microbial purity</li>
                <li>Child-resistant, tamper-evident packaging (eco-friendly options available)</li>
                <li>HIPAA-secure refill portal with automated reminders.</li>
            </ul>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">READY TO TURN “YUCK!” INTO “YUM!”. CONTACT US!</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss" scoped>
.pediatrics-service {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
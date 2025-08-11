<template>
    <div class="sh-service">
        <div class="sh-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">SEXUAL HEALTH FOR MEN & WOMEN</div>

            <div class="paragraph text-center">At Artisan Compounding Pharmacy we believe intimacy is more than a moment. It’s a pillar of overall wellness. When hormones, circulation, or stress get in the way, standardized pills often miss the mark. Our pharmacists work with your prescriber to compound custom dosed, clinically backed medications in easy to use forms that fit real life so you can stop worrying about performance and start enjoying connection.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">FOR HIM</div>
            </div>

            <div class="paragraph text-center">Common concerns: reduced libido, erectile dysfunction, prostate problems, reduced muscle mass.</div>

            <div class="paragraph text-center">What we can compound</div>

            <table>
                <tbody>
                    <tr>
                        <th>Goal</th>
                        <th>Example Ingredients*</th>
                        <th>Why Patients Like It</th>
                        <th>Popular Forms</th>
                    </tr>

                    <tr>
                        <td>Stronger, longer erections</td>
                        <td>Sildenafil or Tadalafil (custom strength)</td>
                        <td>Fast onset, predictable results</td>
                        <td><b>Flavored troches</b>, rapid dissolve tablets, capsules</td>
                    </tr>

                    <tr>
                        <td>Enhanced desire & energy</td>
                        <td>Testosterone transdermal, DHEA</td>
                        <td>Restores healthy hormone levels</td>
                        <td><b>Topical gel</b> (no needles), sublingual drops</td>
                    </tr>

                    <tr>
                        <td>Quick “on demand” boost</td>
                        <td>Bremelanotide (PT 141)</td>
                        <td>Works via brain pathways of desire</td>
                        <td><b>Nasal spray</b> - discreet, travels well</td>
                    </tr>

                    <tr>
                        <td>Relaxed pelvic muscles</td>
                        <td>Tadalafil transdermal</td>
                        <td>Helps blood flow locally</td>
                        <td><b>Penile cream</b> - no systemic side effects</td>
                    </tr>
                </tbody>
            </table>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">FOR HER</div>
            </div>

            <div class="paragraph text-center">Common concerns: low desire, difficulty reaching climax, dryness or discomfort.</div>
            
            <div class="paragraph text-center">What we can compound</div>

            <table>
                <tbody>
                    <tr>
                        <th>Goal</th>
                        <th>Example Ingredients*</th>
                        <th>Why Patients Like It</th>
                        <th>Popular Forms</th>
                    </tr>

                    <tr>
                        <td>Rekindled desire</td>
                        <td>Testosterone & Oxytocin</td>
                        <td>Boosts libido and bonding</td>
                        <td><b>Topical cream</b> or lozenge</td>
                    </tr>

                    <tr>
                        <td>Faster, fuller arousal</td>
                        <td>Sildenafil</td>
                        <td>Increases genital blood flow</td>
                        <td><b>Rapid dissolve troche</b> works in ~30 min</td>
                    </tr>

                    <tr>
                        <td>Comfortable intimacy</td>
                        <td>Estriol/Estradiol/DHEA combo</td>
                        <td>Rebuilds vaginal tissue & moisture</td>
                        <td><b>Suppository</b> or <b>silky gel applicator</b></td>
                    </tr>

                    <tr>
                        <td>Whole day mood lift</td>
                        <td>Flibanserin</td>
                        <td>Daily tablet shown to improve desire in pre menopausal women</td>
                        <td><b>Color coded capsules</b></td>
                    </tr>
                </tbody>
            </table>

            <div class="note">*All compounded medications are prepared solely for you under a valid prescription. Individual results vary. Consult your healthcare provider to determine if these therapies are appropriate for you.</div>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">READY TO REIGNITE YOUR SPARK? CONTACT US</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss" scoped>
.sh-service {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
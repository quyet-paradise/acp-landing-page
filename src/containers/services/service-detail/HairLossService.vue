<template>
    <div class="hair-loss-service">
        <div class="hair-loss-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">HAIR GROWTH</div>

            <div class="paragraph text-center">Hair loss can stem from genetics, shifting hormones, autoimmune conditions, nutritional gaps, or everyday stress. Whether you’re noticing a widening part, receding hairline, or overall thinning, one size rarely fits all—especially when over-the-counter products plateau or injections feel daunting. That’s where customized, needle-free compounding steps in.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">WHY COMPOUNDING MAKES A DIFFERENCE</div>
            </div>
            <div class="paragraph text-center">Commercial hair-loss drugs come in a handful of strengths and formats. In our compounding lab we tailor active ingredients, concentrations, bases, and packaging to your scalp condition, tolerance, and lifestyle. We comply with USP <795>/<800> and source USP-grade APIs to deliver precise, consistent therapy, minus unwanted preservatives, dyes, or fragrances.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">PROVEN ACTIVE INGREDIENTS WE CAN CUSTOMIZE</div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Active</th>
                        <th>How It Helps</th>
                        <th>Typical Custom Strengths & Notes</th>
                    </tr>

                    <tr>
                        <td>Minoxidil (topical or low-dose oral)</td>
                        <td>Improves follicular blood flow and extends the anagen (growth) phase</td>
                        <td>Solutions/foams, oral capsules for men & women</td>
                    </tr>

                    <tr>
                        <td>Finasteride</td>
                        <td>Blocks conversion of testosterone to DHT, the hormone that miniaturizes follicles</td>
                        <td>Sublingual troches, topical lotions (topical delivers scalp levels with lower systemic exposure, but remains off-label per FDA alert)</td>
                    </tr>

                    <tr>
                        <td>Dutasteride</td>
                        <td>Dual 5-α-reductase inhibitor—effective when finasteride stalls</td>
                        <td>Oral capsules or topical gel</td>
                    </tr>

                    <tr>
                        <td>Spironolactone</td>
                        <td>Anti-androgen preferred in female-pattern hair loss</td>
                        <td>Topical foam or oral</td>
                    </tr>

                    <tr>
                        <td>Adjuncts</td>
                        <td>Ketoconazole (anti-inflammatory), caffeine, biotin, tretinoin, latanoprost, melatonin</td>
                        <td>Added to shampoos or night serums to maximize follicle environment</td>
                    </tr>
                </tbody>
            </table>
            <div class="note">All prescriptions require physician authorization; we provide formulation guidance to your dermatologist or PCP</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">FORMULATIONS</div>
            </div>
            <ul>
                <li><b>Scalp Solutions & Foams:</b> dry fast, non-greasy, dropper or metered-foam pumps</li>
                <li><b>Lotion/Cream Bases:</b> alcohol-free, ideal for sensitive or post-transplant scalps</li>
                <li><b>Sublingual Troches or Rapid-Dissolve Tablet:</b> micro-dosed finasteride/spironolactone without first-pass metabolism</li>
                <li><b>Oral Capsules:</b> low dose minoxidil or dutasteride in vegetarian or gelatin shells</li>
                <li><b>Medicated Shampoo/Conditioner:</b> ketoconazole 2 % + caffeine 1 % + saw-palmetto extract, in salon-grade sulfate-free base</li>
            </ul>
            <div class="paragraph">Have a sensitivity to propylene glycol? Need a rosemary-scented base? We’ll reformulate.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">WHAT TO EXPECT</div>
            </div>
            <ul>
                <li><b>Month 1–2:</b> possible transient shedding as dormant follicles reset.</li>
                <li><b>Month 3–6:</b> visible thickening at part line, reduced daily shed count.</li>
                <li><b>Month 6–12:</b> peak density gains; maintenance phase begins.</li>
            </ul>
            <div class="paragraph">Consistency matters—missing doses can reverse months of progress.</div>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">READY TO RECLAIM YOUR HAIR? CONTACT US</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss" scoped>
.hair-loss-service {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
<template>
    <div class="dermato-logical">
        <div class="dermato-logical--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">DERMATOLOGICAL PREPARATIONS</div>

            <div class="paragraph">When OTC skin creams fall short or over-irritate, Artisan Compounding Pharmacy steps in with tailor-made therapies. Working under USP <795>/<800>, we fine-tune active ingredients, strengths, bases, and packaging so each prescription matches your diagnosis, skin type, and tolerance. The result: faster relief, fewer side-effects, and simpler routines. All dispensed in elegant, soft-luxury apothecary packaging that patients love.</div>

            <div><hr /></div>

            <div class="heading">Common Skin Conditions & Custom Solutions</div>
            <table>
                <tbody>
                    <tr>
                        <th>Condition</th>
                        <th>Popular Dosage Forms</th>
                    </tr>

                    <tr>
                        <td>Acne & Oily Skin</td>
                        <td>Fast-dry gels, alcohol-free creams, leave-on foams</td>
                    </tr>

                    <tr>
                        <td>Rosacea & Facial Redness</td>
                        <td>Non-comedogenic creams, metered-pump lotions</td>
                    </tr>

                    <tr>
                        <td>Melasma & Hyperpigmentation</td>
                        <td>Silky serums, anhydrous sticks (no hydroquinone odor)</td>
                    </tr>

                    <tr>
                        <td>Eczema / Atopic Dermatitis</td>
                        <td>Ointments, steroid-sparing creams, liposomal lotions</td>
                    </tr>

                    <tr>
                        <td>Psoriasis & Chronic Plaques</td>
                        <td>High-adherence ointments, foaming sprays for scalp</td>
                    </tr>

                    <tr>
                        <td>Scars & Post-Procedure Healing</td>
                        <td>Quick-set gels, roll-on sticks, occlusive sheets</td>
                    </tr>

                    <tr>
                        <td>Fungal Skin & Nail Infections</td>
                        <td>Pen-brush lacquers, water-resistant creams, spray powders</td>
                    </tr>

                    <tr>
                        <td>Photo-aging & Fine Lines</td>
                        <td>Time-release night creams, collagen-boosting serums</td>
                    </tr>
                </tbody>
            </table>
            <div><hr /></div>

            <div class="heading">Delivery Formats—Matched to Lifestyle & Lesion Type</div>
            <ul>
                <li><b>Airless Pumps & Metered Foams:</b> deal for large areas & scalp</li>
                <li><b>Fast-Dry Gels & Serums:</b> vanish under makeup; no residue</li>
                <li><b>Rich Creams & Ointments:</b> maximal occlusion for fissured or thick plaques</li>
                <li><b>Lacquers & Sticks:</b> target nails, peri-oral spots, or travel-friendly touch-ups</li>
                <li><b>Medicated Washes/Shampoos: </b> precise contact-time for seborrheic dermatitis or body acne</li>
            </ul>
            <div class="paragraph">All bases are dye-free, fragrance-optional, and can be tailored for vegan, nut-free, or propylene-glycol–free requirements.</div>
            <div><hr /></div>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">YOUR SKIN DESERVES BESPOKE SCIENCE. CONTACT US</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss" scoped>
.dermato-logical {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
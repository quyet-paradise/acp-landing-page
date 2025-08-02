<template>
    <div class="veterinary-service">
        <div class="veterinary-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">VETERINARY COMPOUNDING</div>

            <div class="paragraph">Every pet is unique so their medicine should be, too. When your cat spits out tablets, your dog rejects bitter liquids, or your rabbit needs a micro-dose no manufacturer sells, Artisan Compounding Pharmacy turns frustration into relief with pharmacy-grade veterinary compounding. We transform proven drugs into pet-friendly flavors, strengths, and delivery forms so dosing is easier, safer, and far less stressful for everyone.</div>

            <div><hr /></div>

            <div class="heading">Common Conditions We Treat & How We Make Therapy Simple</div>
            <table>
                <tbody>
                    <tr>
                        <th>Problem</th>
                        <th>Species We See Most</th>
                        <th>Custom-Blended Treatment</th>
                        <th>Pet-Friendly Form</th>
                        <th>Why It Works</th>
                    </tr>

                    <tr>
                        <td>Hyperthyroidism</td>
                        <td>Cats</td>
                        <td>Methimazole</td>
                        <td>Transdermal ear gel</td>
                        <td>No pills—owners swipe the gel inside the ear flap; steady absorption, fewer GI upsets.</td>
                    </tr>

                    <tr>
                        <td>Chronic pain / arthritis</td>
                        <td>Dogs, older cats, rabbits</td>
                        <td>Gabapentin, Tramadol, Meloxicam.</td>
                        <td>Beef-or-chicken soft chews, bacon suspension, micro-capsules</td>
                        <td>Palatable chews disguise medicine; suspensions let you dial in weight-based doses exactly.</td>
                    </tr>

                    <tr>
                        <td>Antibiotic therapy</td>
                        <td>Cats, dogs, exotics</td>
                        <td>Amoxicillin-clavulanate, Doxycycline, Metronidazole</td>
                        <td>Tuna or banana-flavored suspensions, tiny flavored tablets</td>
                        <td>Flavors mask bitterness; custom strengths prevent under-dosing small breeds & baby animals.</td>
                    </tr>

                    <tr>
                        <td>Nausea / loss of appetite</td>
                        <td>Cats, dogs</td>
                        <td>Mirtazapine, Ondansetron, Cerenia®</td>
                        <td>Rapid-dissolve fish-flavored mini-tabs, transdermal gels</td>
                        <td>Melt-away tabs mean no force-feeding; gels bypass upset stomachs.</td>
                    </tr>

                    <tr>
                        <td>Behavior & anxiety</td>
                        <td>Dogs, cats, rabbits</td>
                        <td>Fluoxetine, Trazodone, Buspirone</td>
                        <td>Peanut-butter chews, odorless transdermal ear creams</td>
                        <td>Treat-like chews turn medicine into a reward; creams help pill-averse pets.</td>
                    </tr>

                    <tr>
                        <td>GI stasis / motility issues</td>
                        <td>Rabbits, guinea pigs</td>
                        <td>Cisapride, Metoclopramide</td>
                        <td>Sugar-free berry liquids, concentrated oral </td>
                        <td>Alcohol-free bases protect delicate gut flora; precise dosing to 0.01 mL.</td>
                    </tr>

                    <tr>
                        <td>End-of-life comfort</td>
                        <td>All</td>
                        <td>Customized opioid blends, anti-nausea & appetite support, topical anesthetic sprays</td>
                        <td>Chicken gravy suspension, transdermal combos, gentle spray bottles</td>
                        <td>Keeps seniors comfortable without traumatic pill routines.</td>
                    </tr>
                </tbody>
            </table>
            <div class="note">* All prescriptions must come from a licensed veterinarian.</div>
            <div><hr /></div>

            <div class="heading">Delivery Forms Pets (and Owners) Love</div>
            <ul>
                <li><b>Flavored Oral Suspensions:</b> over 20 natural flavors (think tuna-bisque, peanut-crunch, banana cream) in sugar- or xylitol-free bases.</li>
                <li><b>Soft Chew Treats:</b> pliable, low-crumb bites that hide even strong odors.</li>
                <li><b>Tiny Capsules & Mini-Tablets:</b> for toy breeds & exotics.</li>
                <li><b>Transdermal Ear Gels:</b> quick dry Penetrating Liposomal Ointment (PLO) for cats that hate pills.</li>
                <li><b>Rapid-Dissolve Films:</b> place on the tongue; perfect during car rides or vet visits.</li>
                <li><b>Topical Sprays & Creams:</b> localized pain relief without systemic side effects.</li>
                <li><b>Suppositories:</b> last-resort option when oral or topical routes fail (post-surgery GI cases).</li>
            </ul>
            <div class="paragraph">All packaged in child-resistant, leak-proof containers with color-coded syringes and easy-dose charts.</div>
            <div><hr /></div>

            <div class="heading">The Paws-itive Care Path</div>
            <ol>
                <li><b>Prescription Arrives</b> – via e-fax, email, or paw-delivered script.</li>
                <li><b>Flavor & Form Consultation</b> – we call you (or your clinic) to pick the perfect delivery method.</li>
                <li><b>Compound & Quality-Check</b> – state-of-the-art equipment ensures uniformity and sterility.</li>
                <li><b>Pack & Dispatch</b> – chilled courier for heat-sensitive meds; overnight shipping available.</li>
                <li><b>Follow-Up</b> – refill reminders, dose adjustments, and side-effect triage</li>
            </ol>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">GIVE YOUR BEST FRIEND THE BEST MEDICINE. CONTACT US!</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss" scoped>
.veterinary-service {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
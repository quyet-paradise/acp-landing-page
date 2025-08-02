<template>
    <div class="weight-loss-service">
        <div class="weight-loss-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">NO MORE NEEDLE - DISCOVER SUBLINGUAL <br /> WEIGHT LOSS COMPOUNDING</div>

            <div class="paragraph">Our custom compounded sublingual formula delivers today’s most effective GLP 1–based weight loss medication* under the tongue. No injections, no sharps, no weekly clinic visits!</div>

            <div class="note">*This compounded medication is prepared exclusively for you pursuant to a valid prescription. </div>

            <div><hr /></div>

            <div class="heading">Why Go Sublingual?</div>
            
            <table>
                <tbody>
                    <tr>
                        <th>Benefit</th>
                        <th>What It Means for You</th>
                    </tr>

                    <tr>
                        <td>Zero needles</td>
                        <td>Eliminate injection anxiety, bruising, and disposal hassles.</td>
                    </tr>

                    <tr>
                        <td>Rapid absorption</td>
                        <td>The rich blood supply under the tongue provides fast, predictable uptake.</td>
                    </tr>

                    <tr>
                        <td>Daily micro dosing</td>
                        <td>Smooth, steady plasma levels may lower GI side effects often seen with once weekly shots.</td>
                    </tr>

                    <tr>
                        <td>Travel ready</td>
                        <td>Compact dropper vial means no refrigeration during the day, no carrying syringes.</td>
                    </tr>
                </tbody>
            </table>

            <div><hr /></div>

            <div class="heading">How It Works</div>

            <div class="paragraph">Our pharmacist compounds a precise micro dose of a GLP 1 receptor agonist plus absorption enhancers into a flavored solution. Place the measured drops under your tongue, hold for 90 seconds, then swallow. The medication signals satiety, slows gastric emptying, and supports healthy insulin function helping you eat less and burn stored fat.</div>

            <div><hr /></div>

            <div class="heading">Who Is a Good Candidate?</div>

            <ul>
                <li>BMI ≥ 27 with weight related concerns, or BMI ≥ 30</li>
                <li>Adults 18–75 ready to pair medication with nutrition & movement</li>
                <li>Not pregnant / breastfeeding, free from med interactions (we screen)</li>
            </ul>

            <div><hr /></div>

            <div class="heading">What to Expect</div>

            <ol>
                <li><b>Custom script:</b> We tailor strength & flavor.</li>
                <li><b>Average loss:</b> 5–10 % body weight over 12 weeks when paired with lifestyle coaching.</li>
            </ol>

            <div class="note">*Individual results vary.</div>

            <div><hr /></div>

            <div class="heading">Safety & Side Effects</div>

            <div class="paragraph">Most users report mild, transient nausea or heartburn during titration. Rare risks include pancreatitis or gallstones. We provide pharmacist support and notify your prescriber of any red flags.</div>

            <div><hr /></div>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">LET’S MAKE HEALTHY HAPPEN—WITHOUT THE NEEDLE</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss"scoped>
.weight-loss-service {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
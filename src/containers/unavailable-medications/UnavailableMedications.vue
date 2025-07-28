<template>
    <div class="um">
        <div class="um--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">UNAVAILABLE MEDICATIONS</div>
            </div>

            <div class="um--container--title">UNAVAILABLE MEDICATIONS</div>

            <div class="um--container--content">
                <div class="paragraph">Medications may become commercially unavailable for several reasons, including:</div>

                <ul>
                    <li>Manufacturing delays or backorders</li>
                    <li>Discontinuation due to low demand or replacement by newer drugs</li>
                    <li>Limited availability of specific strengths, forms, or ingredient combinations</li>
                </ul>

                <div class="note">(Note: We do not compound medications that were discontinued due to safety concerns or FDA withdrawal.)</div>

                <div class="paragraph">When this happens, Artisan Compounding Pharmacy can help. Our pharmacists source the active pharmaceutical ingredient (API) and compound the medication in the appropriate dose, dosage form, and flavor to meet each patient’s needs. We can also prepare formulas without sugar, alcohol, dyes, gluten, preservatives, or other unwanted additives.</div>

                <div class="paragraph">We use only FDA-approved ingredients, follow USP compounding standards, and are licensed and regulated by the California State Board of Pharmacy.</div>

                <div class="paragraph">Many effective medications and therapies are no longer available commercially—but can still be compounded.</div>
                <div class="paragraph">Ask our compounding pharmacist for more information.</div>
                <div class="paragraph">👉 For the latest updates on medication shortages, visit the FDA Drug Shortages webpage.</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.um {
    width: 100%;
    padding: 32px 0 64px 0;

    &--container {
        max-width: var(--dls-max-width-5);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;

        &--title {
            font-family: 'Cinzel';
            font-weight: 500;
            font-size: 30px;
            line-height: 100%;
            text-align: center;
        }

        &--content {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .paragraph {
                font-weight: 400;
                font-size: 16px;
                line-height: 23px;
                letter-spacing: 0.32px;
                color: var(--dls-color-2a2a2a);
            }

            .note {
                font-weight: 400;
                font-size: 16px;
                line-height: 23px;
                letter-spacing: 0.32px;
                color: var(--dls-color-2a2a2a);
                font-style: italic;
            }

            ul {
                li {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 23px;
                    letter-spacing: 0.32px;
                    color: var(--dls-color-2a2a2a);
                }
            }
        }
    }
}
</style>
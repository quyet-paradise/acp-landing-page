<template>
    <div class="ppa">
        <div class="ppa--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">PROFESSIONAL PARTNERSHIP / ACCREDITATION</div>
            </div>

            <div class="ppa--container--title">PROFESSIONAL PARTNERSHIP / ACCREDITATION</div>

            <div class="ppa--container--content">
                <div class="header">Professional Partnership</div>

                <div class="paragraph">We proudly partner with the Professional Compounding Centers of America (PCCA) - a globally recognized leader in compounding education, innovation, and pharmaceutical-grade ingredients. Through this partnership, our pharmacists receive advanced training, and we have access to the latest research-based formulations and high-quality raw materials.</div>

                <div class="paragraph">This commitment to excellence ensures that every compound we create is safe, effective, and customized to your specific needs.</div>

                <div class="header">Accreditation</div>

                <div class="paragraph">At Artisan Compounding Pharmacy, we are committed to the highest standards of pharmacy practice, safety, and personalized care. Our facility and team operate in strict compliance with:</div>

                <ul>
                    <li>USP <795> – Non-sterile compounding standards</li>
                    <li>USP <800> – Safe handling of hazardous medications</li>
                    <li>California State Board of Pharmacy regulations</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.ppa {
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

            .header {
                font-weight: 500;
                font-size: 22px;
                line-height: 31px;
                letter-spacing: 0.44px;
                color: var(--dls-color-2a2a2a);
            }

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
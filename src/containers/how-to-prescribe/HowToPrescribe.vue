<template>
    <div class="htp">
        <div class="htp--container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">HOW TO PRESCRIBE</div>
            </div>

            <div class="htp--container--content">
                <div class="intro">
                    <div class="intro--title">HOW TO PRESCRIBE</div>
                    <div class="intro--subtitle">At Artisan Compounding Pharmacy, we make it simple for healthcare providers to prescribe customized medications <br /> tailored to each patient’s unique needs. Whether you’re prescribing hormone therapy, dermatological compounds, <br /> pediatric formulations, or LDN—we’re here to support you at every step.</div>
                </div>

                <div class="info">
                    <img class="info--logo" src="@/assets/images/services-logo.svg" alt="logo">

                    <div class="info--title">PRESCRIBING WITH US IS EASY</div>
                    <div class="info--subtitle">Three easy ways to prescribe</div>

                    <div class="info--list">
                        <div class="info--list--item">
                            <div class="icon">
                                <img src="@/assets/images/how-to-prescribe/sms-icon.svg" alt="icon">
                            </div>

                            <div class="name">E-PRESCRIBE</div>
                            <div class="detail">We’re listed in the Surescripts <br /> Pharmacy Directory in your <br /> EHR/EMR as “Artisan <br /> Compounding Pharmacy”.</div>
                        </div>
                        <div class="info--list--item">
                            <div class="icon">
                                <img src="@/assets/images/how-to-prescribe/fax-icon.svg" alt="icon">
                            </div>

                            <div class="name">FAX US</div>
                            <div class="detail">(212) 967-0892 <br /> Contact us for a custom <br /> prescription form.</div>
                        </div>
                        <div class="info--list--item">
                            <div class="icon">
                                <img src="@/assets/images/how-to-prescribe/phone-icon.svg" alt="icon">
                            </div>

                            <div class="name">CALL US</div>
                            <div class="detail">(888) 901-4480 <br /> Our Customer Care Team is <br /> ready to help you.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="global-btn-brown">PRESCRIBE</div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.htp {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0;

    &--container {
        max-width: var(--dls-max-width-5);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        align-items: center;
        width: 100%;

        &--content {
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 100%;

            .intro {
                display: flex;
                flex-direction: column;
                gap: 24px;

                &--title {
                    font-family: 'Cinzel';
                    font-weight: 500;
                    font-size: 30px;
                    line-height: 100%;
                    text-align: center;
                    color: var(--dls-color-2a2a2a);
                }

                &--subtitle {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 23px;
                    letter-spacing: 0.32px;
                    text-align: center;
                    color: var(--dls-color-2a2a2a);
                }
            }

            .info {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 16px;
                justify-content: center;
                align-items: center;
                background: var(--dls-color-faf4ef);
                border-radius: 20px;
                padding: 32px 0 48px 0;

                &--logo {
                    width: 66px;
                    height: auto;
                }

                &--title {
                    font-family: 'Cinzel';
                    font-size: 29px;
                    line-height: 100%;
                    font-weight: 600;
                    color: var(--dls-color-9f593f);
                }

                &--subtitle {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 100%;
                    color: var(--dls-color-685c51);
                }

                &--list {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 64px;

                    &--item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;

                        .icon {
                            width: 111px;
                            height: 111px;
                            border-radius: 9999px;
                            border: 2px solid var(--dls-color-9f593f);
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 45px;
                                height: auto;
                            }
                        }

                        .name {
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 33px;
                            letter-spacing: 1.8px;
                            text-align: center;
                        }

                        .detail {
                            font-weight: 400;
                            text-align: center;
                            font-size: 16px;
                            line-height: 22px;
                            letter-spacing: 0.32px;
                            text-align: center;
                            color: var(--dls-color-685c51);
                        }
                    }
                }
            }
        }
    }
} 
</style>
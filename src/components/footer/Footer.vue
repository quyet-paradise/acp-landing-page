<template>
    <div class="footer">
        <div class="footer__top--wrapper">
            <div class="footer__top">
                <div class="footer__top--col">
                    <img class="logo" src="@/assets/images/footer-logo.svg" alt="logo" @click="goToPage(ROUTE_NAME.HOME)">
                    <div class="social">
                        <img class="social--item" src="@/assets/images/footer-ins-icon.svg" alt="ins">
                        <img class="social--item" src="@/assets/images/footer-fb-icon.svg" alt="fb">
                        <img class="social--item" src="@/assets/images/footer-linkedin-icon.svg" alt="linkedin">
                    </div>
                    <div class="text-center text-white text-13px tracking-wide">Disclaimer: A prescription from a <br /> licensed practitioner is required for <br /> compounded medications</div>
                </div>

                <div class="footer__top--col">
                    <div class="nav-link" @click="goToPage(ROUTE_NAME.HOME)">HOME</div>
                    <div class="nav-link" @click="goToPage(ROUTE_NAME.SERVICES)">SERVICES</div>
                    <div class="nav-link">PATIENTS</div>
                    <div class="nav-link">PROVIDERS</div>
                </div>

                <div class="footer__top--col">
                    <div class="nav-link" @click="goToPage(ROUTE_NAME.OUR_COMMITMENTS)">ABOUT US</div>
                    <div class="nav-link" @click="goToPage(ROUTE_NAME.KNOWLEDGE_CENTER)">KNOWLEDGE CENTER</div>
                    <div class="nav-link" @click="goToPage(ROUTE_NAME.FAQ)">FAQ</div>
                    <div class="nav-link" @click="goToPage(ROUTE_NAME.CONTACT_US)">CONTACT US</div>
                </div>

                <div class="footer__top--col contact-col">
                    <div class="contact-item">
                        <div class="contact-item--label">Call or Text</div>
                        <div class="contact-item--content">(888) 901-4480</div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-item--label">Email</div>
                        <div class="contact-item--content">hello@artisanpharmacy.com</div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-item--label">Fax</div>
                        <div class="contact-item--content">(212) 967-0892</div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-item--label">Location</div>
                        <div class="contact-item--content">17400 Irvine Blvd, Suite H Tustin, CA 92780</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__bottom--wrapper">
            <div class="footer__bottom">
                <div>© {{ new Date().getFullYear() }} Mixlab, Inc.</div>
                <div>|</div>
                <div class="footer__bottom--link">Privacy Policy</div>
                <div>|</div>
                <div class="footer__bottom--link">Terms of Service</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'

const goToPage = (routeName: string) => {
    router.push({ name: routeName })
} 
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 100%;

    &__top--wrapper {
        width: 100%;
        background: var(--dls-color-b59782);
        padding: 32px 0;

        .footer__top {
            max-width: var(--dls-max-width-1);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;

            &--col {
                display: flex;
                flex-direction: column;
                gap: 32px;
                justify-content: flex-start;
                align-items: flex-start;

                &.contact-col {
                    gap: 16px;

                    .contact-item {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;

                        &--label {
                            color: var(--dls-color-ded1c7);
                            font-size: 12px;
                        }

                        &--content {
                            color: var(--dls-color-white);
                            font-size: 13px;
                        }
                    }
                }

                .logo {
                    width: 175px;
                    height: auto;
                    cursor: pointer;
                }

                .social {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 32px;

                    &--item {
                        height: 14px;
                        width: auto;
                        cursor: pointer;
                    }
                }

                .nav-link {
                    color: var(--dls-color-white);
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 400;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    &__bottom--wrapper {
        width: 100%;
        background: var(--dls-color-866C5A);
        padding: 16px 0;

        .footer__bottom {
            max-width: var(--dls-max-width-1);
            margin: 0 auto;
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 16px;
            color: var(--dls-color-white);
            font-weight: 400;

            &--link {
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
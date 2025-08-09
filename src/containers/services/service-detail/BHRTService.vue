<template>
    <div class="bhrt-service">
        <div class="bhrt-service--container service-container">
            <div class="global-breadcrumbs">
                <div class="text">HOME</div>
                <div class="bo_right"></div>
                <div class="text">SERVICES</div>
            </div>

            <div class="title">BIOLOGICAL HORMONE REPLACEMENT THERAPY (BHRT)</div>

            <div class="paragraph text-center">Your body runs on chemical messengers called hormones. When those messengers drop too low or get out of balance, you can feel tired, moody, hot, or simply “not yourself.” <br /> BHRT gently tops up those hormones with plant based ingredients (from wild yam or soy) that are identical to what your body already makes. Because they match your natural chemistry, they’re usually easier to absorb and tolerate than older, synthetic options.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">CONDITIONS BHRT CAN TREAT*</div>
            </div>
            
            <ol>
                <li><b>Menopause and Perimenopause:</b> BHRT can alleviate common symptoms like hot flashes, night sweats, vaginal dryness, sleep problems, fatigue, weight gain, mood swings, and memory loss.</li>
                <li><b>Low Libido and Sexual Dysfunction: </b> BHRT can help with decreased libido and sexual dysfunction in both men and women.</li>
                <li><b>Erectile Dysfunction:</b> BHRT can be used to treat erectile dysfunction, a common issue in men as they age. BHRT can also address symptoms like fatigue, reduced libido, and muscle loss associated with andropause.</li>
                <li><b>Mood Disorders:</b> Hormonal fluctuations during menopause and andropause can lead to mood swings, anxiety, and depression, which BHRT can help address.</li>
                <li><b>Loss of Bone Density (Osteoporosis):</b> BHRT can improve postmenopausal osteoporosis, a condition where bones become brittle and prone to fracture.</li>
                <li><b>Muscle Loss and Weakness:</b> BHRT can help prevent the loss of muscle mass and strength that can occur with age and hormonal decline. </li>
                <li><b>Post-Hysterectomy Hormone Loss:</b> BHRT can help women who have undergone a hysterectomy and are experiencing hormone deficiencies. </li>
                <li><b>Insulin Resistance:</b> BHRT can be beneficial for individuals with insulin resistance, a condition where the body doesn't use insulin effectively. </li>
                <li><b>Adrenal and Thyroid Disorders:</b> BHRT can help regulate adrenal and thyroid function, which can be disrupted by hormonal imbalances.</li>
                <li><b>Fibromyalgia:</b> BHRT can help alleviate symptoms of fibromyalgia by addressing underlying hormone deficiencies.</li>
                <li><b>Sleep Disorders:</b> BHRT can help restore a healthy sleep-wake cycle by addressing hormonal imbalances that contribute to sleep disturbances.</li>
                <li><b>Chronic Fatigue:</b> BHRT can help improve energy levels and overall vitality by addressing the root causes of fatigue related to hormonal imbalances.</li>
                <li><b>Premenstrual Syndrome (PMS):</b> PMS symptoms often arise from the hormonal fluctuations during the menstrual cycle. BHRT can help restore hormonal balance and alleviate PMS symptoms, such as anxiety, sleep disturbances, and mood swings. </li>
                <li><b>Polycystic Ovary Syndrome (PCOS):</b> BHRT can help regulate hormone levels, potentially reducing symptoms like acne, excessive hair growth, and irregular periods, potentially improving fertility and reducing the risk of cysts. </li>
                <li><b>Insulin Resistance:</b> BHRT, in combination with other strategies like diet and exercise, can help improve insulin sensitivity, a common issue in PCOS.</li>
            </ol>

            <div class="note">*Benefits vary from person to person. We customize every prescription to your lab results and symptoms.</div>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">HOW OUR BHRT PROGRAM WORKS</div>
            </div>
            <ol>
                <li><b>Consultation:</b> We listen to your symptoms, wellness goals, and medical history.</li>
                <li><b>Doctor + Pharmacist Partnership:</b> Therapy starts with a prescription and is closely monitored with lab work.</li>
                <li><b>Testing:</b> A hormone panel shows what’s out of balance.</li>
                <li><b>Custom Compounding:</b> We made the exact dose and combination you need in your preferred form:</li>
                <ul>
                    <li>Topical cream or gel</li>
                    <li>Sublingual lozenge</li>
                    <li>Oral capsule</li>
                    <li>Slow release pellet (placed by a clinician)</li>
                </ul>
                <li><b>Follow Up & Fine Tuning:</b>  We repeat labs and adjust your formula until you feel your best.</li>
                <li><b>Ongoing Support:</b> Your dedicated pharmacist is here for refills, questions, and lifestyle tips.</li>
            </ol>

            <div class="flex flex-col gap-16px items-center">
                <img class="w-40px h-auto" src="@/assets/images/services-logo.svg" alt="logo">
                <div class="title">QUICK FAQ</div>
            </div>
            <div>
                <div class="paragraph"><b>How soon will I notice a difference?</b></div>
                <div class="paragraph">Most people feel small improvements in 2–4 weeks and full benefits within 3–6 months.</div>
            </div>

            <div>
                <div class="paragraph"><b>Will I gain weight?</b></div>
                <div class="paragraph">Balanced hormones often make weight control easier, not harder. Diet and exercise still matter.</div>
            </div>

            <div>
                <div class="paragraph"><b>Is BHRT just for women?</b></div>
                <div class="paragraph">No, men use testosterone BHRT to boost energy, muscle tone, and mood.</div>
            </div>

            <div>
                <div class="paragraph"><b>How long do I stay on it?</b></div>
                <div class="paragraph">Some choose 1–2 years to get through menopause; others continue longer for bone, brain, or heart support. We review your plan every year.</div>
            </div>

            <div class="w-full flex items-center justify-center">
                <div class="global-btn-brown" @click="router.push({name: ROUTE_NAME.CONTACT_US})">READY TO FEEL LIKE YOURSELF AGAIN? CONTACT US</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import router from '@/router'
</script>

<style lang="scss" scoped>
.bhrt-service {
    width: 100%;
    background: var(--dls-color-white);
    padding: 32px 0 64px 0;
}
</style>
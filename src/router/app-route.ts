import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/home/HomePage.vue')
const Services = () => import('@/containers/services/Services.vue')
const HowToPrescribe = () => import('@/containers/how-to-prescribe/HowToPrescribe.vue')
const HowCompoundingWorks = () => import('@/containers/how-compounding-works/HowCompoundingWorks.vue')
const OurFacility = () => import('@/containers/our-facility/OurFacility.vue')
const OurCommitments = () => import('@/containers/our-commitments/OurCommitments.vue')
const KnowledgeCenter = () => import('@/containers/knowledge-center/KnowledgeCenter.vue')
const KnowledgeCenterArticle = () => import('@/containers/knowledge-center/KnowledgeCenterArticle.vue')
const FAQ = () => import('@/containers/faq/FAQ.vue')
const PatientPortalSignup = () => import('@/containers/patient-portal/PatientPortalSignup.vue')
const PatientPortalSignin = () => import('@/containers/patient-portal/PatientPortalSignin.vue')
const TransferRx = () => import('@/containers/transfer-rx/TransferRx.vue')
const NewPatient = () => import('@/containers/new-patient/NewPatient.vue')
const BookAConsultation = () => import('@/containers/book-a-consultation/BookAConsultation.vue')
const ContactUs = () => import('@/containers/contact-us/ContactUs.vue')
const MyProfile = () => import('@/containers/my-profile/MyProfile.vue')
const WriteCompoundedRx = () => import('@/containers/write-compounded-rx/WriteCompoundedRx.vue')
const UnavailableMedications = () => import('@/containers/unavailable-medications/UnavailableMedications.vue')
const PPA = () => import('@/containers/ppa/PPA.vue')

const BHRTService = () => import('@/containers/services/service-detail/BHRTService.vue')
const WeightLossService = () => import('@/containers/services/service-detail/WeightLossService.vue')
const SexualHealthService = () => import('@/containers/services/service-detail/SexualHealthService.vue')
const LDNService = () => import('@/containers/services/service-detail/LDNService.vue')
const HairLossService = () => import('@/containers/services/service-detail/HairLossService.vue')
const DermatoLogicalService = () => import('@/containers/services/service-detail/DermatoLogicalService.vue')
const PediatricsService = () => import('@/containers/services/service-detail/PediatricsService.vue')
const VeterinaryService = () => import('@/containers/services/service-detail/VeterinaryService.vue')

const routes = [
    { 
        path: PATH.HOME, 
        name: ROUTE_NAME.HOME, 
        component: Home,
        meta: { title: ` ⊹ ${ROUTE_NAME.HOME}` }
    },
    { 
        path: PATH.SERVICES, 
        name: ROUTE_NAME.SERVICES, 
        component: Services,
        meta: { title: ` ⊹ ${ROUTE_NAME.SERVICES}` }
    },
    { 
        path: PATH.HOW_TO_PRESCRIBE, 
        name: ROUTE_NAME.HOW_TO_PRESCRIBE, 
        component: HowToPrescribe,
        meta: { title: ` ⊹ ${ROUTE_NAME.HOW_TO_PRESCRIBE}` }
    },
    { 
        path: PATH.HOW_COMPOUNDING_WORKS, 
        name: ROUTE_NAME.HOW_COMPOUNDING_WORKS, 
        component: HowCompoundingWorks,
        meta: { title: ` ⊹ ${ROUTE_NAME.HOW_COMPOUNDING_WORKS}` }
    },
    { 
        path: PATH.OUR_FACILITY, 
        name: ROUTE_NAME.OUR_FACILITY, 
        component: OurFacility,
        meta: { title: ` ⊹ ${ROUTE_NAME.OUR_FACILITY}` }
    },
    { 
        path: PATH.OUR_COMMITMENTS, 
        name: ROUTE_NAME.OUR_COMMITMENTS, 
        component: OurCommitments,
        meta: { title: ` ⊹ ${ROUTE_NAME.OUR_COMMITMENTS}` }
    },
    { 
        path: PATH.KNOWLEDGE_CENTER, 
        name: ROUTE_NAME.KNOWLEDGE_CENTER, 
        component: KnowledgeCenter,
        meta: { title: ` ⊹ ${ROUTE_NAME.KNOWLEDGE_CENTER}` }
    },
    { 
        path: PATH.KNOWLEDGE_CENTER_ARTICLE, 
        name: ROUTE_NAME.KNOWLEDGE_CENTER_ARTICLE, 
        component: KnowledgeCenterArticle,
        meta: { title: ` ⊹ ${ROUTE_NAME.KNOWLEDGE_CENTER_ARTICLE}` }
    },
    { 
        path: PATH.FAQ, 
        name: ROUTE_NAME.FAQ, 
        component: FAQ,
        meta: { title: ` ⊹ ${ROUTE_NAME.FAQ}` }
    },
    { 
        path: PATH.PATIENT_PORTAL_SIGNUP, 
        name: ROUTE_NAME.PATIENT_PORTAL_SIGNUP, 
        component: PatientPortalSignup,
        meta: { title: ` ⊹ ${ROUTE_NAME.PATIENT_PORTAL_SIGNUP}` }
    },
    { 
        path: PATH.PATIENT_PORTAL_SIGNIN, 
        name: ROUTE_NAME.PATIENT_PORTAL_SIGNIN, 
        component: PatientPortalSignin,
        meta: { title: ` ⊹ ${ROUTE_NAME.PATIENT_PORTAL_SIGNIN}` }
    },
    { 
        path: PATH.TRANSFER_RX, 
        name: ROUTE_NAME.TRANSFER_RX, 
        component: TransferRx,
        meta: { title: ` ⊹ ${ROUTE_NAME.TRANSFER_RX}` }
    },
    { 
        path: PATH.NEW_PATIENT, 
        name: ROUTE_NAME.NEW_PATIENT, 
        component: NewPatient,
        meta: { title: ` ⊹ ${ROUTE_NAME.NEW_PATIENT}` }
    },
    { 
        path: PATH.BOOK_A_CONSULTATION, 
        name: ROUTE_NAME.BOOK_A_CONSULTATION, 
        component: BookAConsultation,
        meta: { title: ` ⊹ ${ROUTE_NAME.BOOK_A_CONSULTATION}` }
    },
    { 
        path: PATH.CONTACT_US, 
        name: ROUTE_NAME.CONTACT_US, 
        component: ContactUs,
        meta: { title: ` ⊹ ${ROUTE_NAME.CONTACT_US}` }
    },
    { 
        path: PATH.MY_PROFILE, 
        name: ROUTE_NAME.MY_PROFILE, 
        component: MyProfile,
        meta: { title: ` ⊹ ${ROUTE_NAME.MY_PROFILE}` }
    },
    { 
        path: PATH.WRITE_COMPOUNDED_RX, 
        name: ROUTE_NAME.WRITE_COMPOUNDED_RX, 
        component: WriteCompoundedRx,
        meta: { title: ` ⊹ ${ROUTE_NAME.WRITE_COMPOUNDED_RX}` }
    },
    { 
        path: PATH.UNAVAILABLE_MEDICATIONS, 
        name: ROUTE_NAME.UNAVAILABLE_MEDICATIONS, 
        component: UnavailableMedications,
        meta: { title: ` ⊹ ${ROUTE_NAME.UNAVAILABLE_MEDICATIONS}` }
    },
    { 
        path: PATH.PPA, 
        name: ROUTE_NAME.PPA, 
        component: PPA,
        meta: { title: ` ⊹ ${ROUTE_NAME.PPA}` }
    },
    { 
        path: PATH.BHRT_SERVICE, 
        name: ROUTE_NAME.BHRT_SERVICE, 
        component: BHRTService,
        meta: { title: ` ⊹ ${ROUTE_NAME.BHRT_SERVICE}` }
    },
    { 
        path: PATH.WEIGHT_LOSS_SERVICE, 
        name: ROUTE_NAME.WEIGHT_LOSS_SERVICE, 
        component: WeightLossService,
        meta: { title: ` ⊹ ${ROUTE_NAME.WEIGHT_LOSS_SERVICE}` }
    },
    { 
        path: PATH.SEXUAL_HEALTH_SERVICE, 
        name: ROUTE_NAME.SEXUAL_HEALTH_SERVICE, 
        component: SexualHealthService,
        meta: { title: ` ⊹ ${ROUTE_NAME.SEXUAL_HEALTH_SERVICE}` }
    },
    { 
        path: PATH.LDN_SERVICE, 
        name: ROUTE_NAME.LDN_SERVICE, 
        component: LDNService,
        meta: { title: ` ⊹ ${ROUTE_NAME.LDN_SERVICE}` }
    },
    { 
        path: PATH.HAIR_LOSS_SERVICE, 
        name: ROUTE_NAME.HAIR_LOSS_SERVICE, 
        component: HairLossService,
        meta: { title: ` ⊹ ${ROUTE_NAME.HAIR_LOSS_SERVICE}` }
    },
    { 
        path: PATH.DERMATO_LOGICAL_SERVICE, 
        name: ROUTE_NAME.DERMATO_LOGICAL_SERVICE, 
        component: DermatoLogicalService,
        meta: { title: ` ⊹ ${ROUTE_NAME.DERMATO_LOGICAL_SERVICE}` }
    },
    { 
        path: PATH.PEDIATRICS_SERVICE, 
        name: ROUTE_NAME.PEDIATRICS_SERVICE, 
        component: PediatricsService,
        meta: { title: ` ⊹ ${ROUTE_NAME.PEDIATRICS_SERVICE}` }
    },
    { 
        path: PATH.VETERINARY_SERVICE, 
        name: ROUTE_NAME.VETERINARY_SERVICE, 
        component: VeterinaryService,
        meta: { title: ` ⊹ ${ROUTE_NAME.VETERINARY_SERVICE}` }
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]

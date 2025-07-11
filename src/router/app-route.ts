import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/home/HomePage.vue')
const Services = () => import('@/containers/services/Services.vue')
const HowToPrescribe = () => import('@/containers/how-to-prescribe/HowToPrescribe.vue')
const HowCompoundingWorks = () => import('@/containers/how-compounding-works/HowCompoundingWorks.vue')
const OurFacility = () => import('@/containers/our-facility/OurFacility.vue')

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
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]

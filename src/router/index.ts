import { createRouter, createWebHistory } from "vue-router"
import appRoute from "./app-route"

const router = createRouter({
    history: createWebHistory(),
    routes: [...appRoute],
    scrollBehavior(to) { // Removed unused parameters
        if (!to.query?.view) {
            return { top: 0, behavior: 'instant' }
        }
    }
});

const DEFAULT_TITLE = "Artisan Compounding Pharmacy"
router.beforeEach((to, _, next) => { // Removed unused 'from' parameter
    document.title = `${DEFAULT_TITLE}${to.meta?.title || ""}`
    next()
});

export default router

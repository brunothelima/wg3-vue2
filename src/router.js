// Vue instance and Vue plugins imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

import WgKitRoutes from '@/pages/WgKit/routes.js'

Vue.use(VueRouter)

/**
 * Checks if the user is logged in and has a set auth jwt
 *
 * @param {Object} to - Destiny url data
 * @param {Object} from - Previews url data
 * @param {Function} next - Location change function
 */
const isAuthorized = (to, from, next) => {
  let fallback = '/login'
  if (!store.getters['auth/isAuthorized'] && to.path != fallback) {
    next(fallback)
    return
  }
  next()
}

/**
 * Export for the admin router.
 * This object contains the default routes avaliable for the admin env
 *  and validates the user authentication on any route changes
 */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  beforeEnter: isAuthorized,
  routes: [
    { path: '/login', component: () => import('@/pages/WgLogin') },
    {
      path: '/wg-kit',
      component: () => import('@/pages/WgKit'),
      children: WgKitRoutes
    }
  ]
})

router.beforeEach(isAuthorized)

export default router

/**
 * Export for the admin router.
 * This object contains the default routes avaliable for the admin env
 *  and validates the user authentication on any route changes
 */

export default {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/wg-kit', component: () => import('@/pages/WgKit') }
  ]
}

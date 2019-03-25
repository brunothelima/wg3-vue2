/**
 * Export for the admin router.
 * This object contains the default routes avaliable for the admin env
 *  and validates the user authentication on any route changes
 */

 import WgKit from '@/pages/WgKit/WgKit';


export default {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/wg-kit', component: WgKit }
  ]
}

// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CommercialConcessionView from '../views/CommercialConcessionView.vue'
import SteamFieldsView from '../views/SteamFieldsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/commercial_concession',
    name: 'commercial_concession',
    component: CommercialConcessionView
  },
  {
    path: '/steam_fields',
    name: 'steam_fields',
    component: SteamFieldsView
  },
  {
    path: '/contact_us',
    name: 'contact_us',
    component: ContactUsView
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router

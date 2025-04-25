import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealsByIngridients from './views/MealsByIngridients.vue'
import MealDetails from './views/MealDetails.vue'
import Ingridients from './views/Ingridients.vue'

const routes = [
  { path: '/meal-search/', name: 'Home', component: HomePage },
  { path: '/meal-search/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/meal-search/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/meal-search/by-ingridient/:ingridient?', name: 'MealsByIngridients', component: MealsByIngridients },
  { path: '/meal-search/meal/:id', name: 'MealDetails', component: MealDetails },
  { path: '/meal-search/ingridients', name: 'Ingridients', component: Ingridients },
  { path: '/meal-search/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

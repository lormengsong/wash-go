import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TransitionView from '../views/TransitionView.vue';
import MachinesView from '../views/MachinesView.vue';
import ProgrammesView from '../views/ProgrammesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { step: 1 }
    },
    {
      path: '/transition',
      name: 'transition',
      component: TransitionView,
      meta: { step: 2 }
    },
    {
      path: '/machines',
      name: 'machines',
      component: MachinesView,
      meta: { step: 2 }
    },
    {
      path: '/programmes',
      name: 'programmes',
      component: ProgrammesView,
      meta: { step: 3 }
    }
  ],
});

export default router;

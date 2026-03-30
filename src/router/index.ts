import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { h } from 'vue';
import { RouterView } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TransitionView from '../views/TransitionView.vue';
import MachinesView from '../views/MachinesView.vue';
import ProgrammesView from '../views/ProgrammesView.vue';
import i18n from '../i18n';

// To support composition API in router before hooks, we can directly manipulate i18n.global
const SUPPORTED_LOCALES = ['kh', 'en', 'ch'];

// Create the unified routes array
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/kh' // Default entry correctly redirects to Khmer language
  },
  {
    path: '/:locale',
    // We render a simple pass-through layout component for the locale scope.
    component: { render: () => h(RouterView) }, 
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { step: 1 }
      },
      {
        path: 'transition',
        name: 'transition',
        component: TransitionView,
        meta: { step: 2 }
      },
      {
        path: 'machines',
        name: 'machines',
        component: MachinesView,
        meta: { step: 2 }
      },
      {
        path: 'programmes',
        name: 'programmes',
        component: ProgrammesView,
        meta: { step: 3 }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigate and sync i18n language dynamically on any route shift (including pure parameter updates)
router.beforeEach((to, _from, next) => {
  const locale = to.params.locale as string;
  
  if (locale) {
    if (!SUPPORTED_LOCALES.includes(locale)) {
      return next('/kh' + to.fullPath);
    }
    
    // Dynamically lock in the requested i18n locale payload
    if (typeof (i18n.global.locale as any).value !== 'undefined') {
      (i18n.global.locale as any).value = locale;
    } else {
      (i18n.global.locale as unknown as string) = locale;
    }
  }
  
  next();
});

export default router;

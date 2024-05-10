import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',//首页
      name: 'home',
      component: HomeView
    },
    {
      path: '/serviceHall',//服务大厅
      name: 'serviceHall',
      component: () => import('@/views/serviceHallView.vue')
    },
    {
      path: '/complianCetopics',//合规专题
      name: 'complianCetopics',
      component: () => import('@/views/complianCetopicsView.vue')
    },
    {
      path: '/policyconSultation',//政策咨讯
      name: 'policyconSultation',
      component: () => import('@/views/policyconSultationView.vue')
    },
    {
      path: '/securityTraining',//安全培训
      name: 'securityTraining',
      component: () => import('@/views/securityTrainingView.vue')
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
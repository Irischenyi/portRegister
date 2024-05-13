import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index/home',
      component: import('@/views/main/MainBody.vue'),
      children: [
        {
          path: 'home', //首页
          name: 'home',
          component: import('@/views/HomeView.vue')
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/home',
      component: import('@/views/main/MainBody.vue'),
      children: [
        {
          path: 'home', //首页
          name: 'home',
          component: import('@/views/HomeView.vue')
        },
        {
          path: 'serviceHall', //服务大厅
          name: 'serviceHall',
          component: () => import('@/views/serviceHallView.vue')
        },
        {
          path: 'complianCetopics', //合规专题
          name: 'complianCetopics',
          component: () => import('@/views/complianCetopicsView.vue')
        },
        {
          path: 'policyconSultation', //政策咨讯
          name: 'policyconSultation',
          component: () => import('@/views/policyconSultationView.vue')
        },
        {
          path: '/securityTraining', //安全培训
          name: 'securityTraining',
          component: () => import('@/views/securityTrainingView.vue')
        },
        {
          path: 'dataProcessing', //数据处理页面
          name: 'dataProcessing',
          component: import('@/views/dataProcessing.vue')
        },

        {
          path: 'securityAssessment', //数据出境安全评估
          name: 'securityAssessment',
          component: import('@/views/securityAssessment.vue')
        },
        {
          path: 'contractFiling', //合同备案
          name: 'contractFiling',
          component: import('@/views/contractFiling.vue')
        }
        
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/login/register.vue')
    },
    {
      path: '/ResetPassword',
      name: 'ResetPassword',
      component: () => import('@/views/login/ResetPassword.vue')
    }
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

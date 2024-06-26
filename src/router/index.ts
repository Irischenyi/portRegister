import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index/home",
    },
    {
      path: "/index",
      name: "index",
      redirect: "/index/home",
      component: () => import("@/views/main/MainBody.vue"),
      children: [
        {
          path: "home", //首页
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "serviceHall", //服务大厅
          name: "serviceHall",
          component: () => import("@/views/serviceHallView.vue"),
        },
        {
          path: "complianCetopics", //合规专题
          name: "complianCetopics",
          component: () => import("@/views/complianCetopicsView.vue"),
        },
        {
          path: "policyconSultation", //政策咨讯
          name: "policyconSultation",
          component: () => import("@/views/policyconSultationView.vue"),
        },
        {
          path: "policyconSultationDetail", //政策咨讯详情页面
          name: "policyconSultationDetail",
          component: () => import("@/views/policyconSultationDetail.vue"),
        },
        {
          path: "securityTraining", //安全培训
          name: "securityTraining",
          component: () => import("@/views/securityTrainingView.vue"),
        },
        {
          path: "dataProcessing", //数据处理页面
          name: "dataProcessing",
          component: () => import("@/views/dataProcessing.vue"),
        },

        {
          path: "securityAssessment", //数据出境安全评估
          name: "securityAssessment",
          component: () => import("@/views/securityAssessment.vue"),
        },
        {
          path: "conFilings", //合同备案
          name: "conFilings",
          component: () => import("@/views/conFilings.vue"),
        },
        {
          path: "securityAssessmentAdd", //数据出境安全评估新增
          name: "securityAssessmentAdd",
          component: () => import("@/views/securityAssessmentAdd.vue"),
        },

        {
          path: "personalInformationAdd", //个人信息新增
          name: "personalInformationAdd",
          component: () => import("@/views/personalInformationAdd.vue"),
        },
        {
          path: "personalInformationDetail", //个人信息详情
          name: "personalInformationDetail",
          component: () => import("@/views/personalInformationDetail.vue"),
        },
        {
          path: "quastionHome", //个人信息新增
          name: "quastionHome",
          component: () => import("@/views/QuastionPage.vue"),
        },
        {
          path: "dataDetail", //详情
          name: "dataDetail",
          component: () => import("@/views/dataDetail.vue"),
        },
      ],
    },
    {
      path: "/personalPlatform",
      name: "personal",
      component: () => import("@/views/personal/Main.vue"),
      children: [
        {
          path: "basic", // 基础信息
          name: "basic",
          component: () => import("@/views/personal/BasicInfo.vue"),
        },
        {
          path: "messagecenter", // 信息中心
          name: "messagecenter",
          component: () => import("@/views/personal/MessageCenter.vue"),
        },
        {
          path: "myflow", // 我的流程
          name: "myflow",
          component: () => import("@/views/personal/MyFlow.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/login/register.vue"),
    },
    {
      path: "/ResetPassword",
      name: "ResetPassword",
      component: () => import("@/views/login/ResetPassword.vue"),
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
  ],
});

export default router;

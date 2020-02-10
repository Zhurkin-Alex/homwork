// import Vue from "vue";
// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// const routes = [];
 
// export default new VueRouter ({ routes, mode: 'history' });









export default [
    {
      path: "/",
      component: () => import("../components/boxabouts.vue"),
      meta: {
        title: "Блок «Обо мне»"
      }
    },
    {
      path: "/works",
      component: () => import("../components/boxworks.vue"),
      meta: {
        title: "Блок «Работы»"
      }
    },
    {
      path: "/reviews",
      component: () => import("../components/boxrewies.vue"),
      meta: {
        title: "Блок «Отзывы»"
      }
    },
    // {
    //   path: "/login",
    //   component: () => import("components/pages/login.vue"),
    //   meta: {
    //     public: true
    //   }
    // }
  ];
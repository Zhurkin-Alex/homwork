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
      path: "/boxreviews",
      component: () => import("../components/boxrewies.vue"),
      meta: {
        title: "Блок «Отзывы»"
      }
    },
    {
      path: "/boxworks",
      component: () => import("../components/boxworks.vue"),
      meta: {
        title: "Блок «Работы»"
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
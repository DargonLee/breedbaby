import Vue from "vue";
import VueRouter from "vue-router";
import Guide from "../components/guide.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Guide",
    component: Guide
  },
  {
    path: "/personinfo",
    name: "PersonInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/personinfo.vue")
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/main",
        name: "Main",
        component: () => import("../views/Main.vue")
      },
      {
        path: "/community",
        name: "Community",
        component: () => import("../views/Community.vue")
      },
      {
        path: "/love",
        name: "Love",
        component: () => import("../views/Love.vue")
      },
      {
        path: "/tool",
        name: "Tool",
        component: () => import("../views/Tool.vue")
      },
      {
        path: "/mine",
        name: "Mine",
        component: () => import("../views/Mine.vue")
      }
    ]
  },
  {
    path: "/searchpage",
    name: "SearchPage",
    component: () => import("../views/SearchPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

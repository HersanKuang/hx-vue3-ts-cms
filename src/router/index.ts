import { createRouter, createWebHistory } from "vue-router"
import Login from "@/views/login/Login.vue"
import localCache from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/Main.vue")
    // children: [] -> 根据userMenus来决定
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/NotFound.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
    // console.log(router.getRoutes())
    // console.log(to)
    if (to.path === "/main") {
      return firstMenu.url
    }
  }
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: () => import("../views/HomeView.vue") },
  { path: "/products", name: "Products", component: () => import("../views/ProductView.vue") },
  {
    path: "/products/:slug",
    name: "ProductDetail",
    component: () => import("../views/ProductDetailView.vue"),
    props: true,
  },
  // Old-style links (as used on zieonenergies.com)
  { path: "/product", redirect: "/products" },
  { path: "/product/:slug", redirect: (to) => `/products/${to.params.slug}` },
  { path: "/solutions", name: "Solutions", component: () => import("../views/SolutionsView.vue") },
  { path: "/technology", name: "Technology", component: () => import("../views/TechnologyView.vue") },
  { path: "/support", name: "Support", component: () => import("../views/SupportView.vue") },
  { path: "/contact", name: "Contact", component: () => import("../views/ContactView.vue") },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("../views/NotFoundView.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    // Leave room for the fixed header when jumping to an in-page anchor
    if (to.hash) return { el: to.hash, top: window.innerWidth >= 1024 ? 124 : 80, behavior: "smooth" };
    return { top: 0 };
  },
});

export default router;

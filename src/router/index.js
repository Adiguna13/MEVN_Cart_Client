import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/product/IndexProduct.vue";
import ProductDetail from "../views/product/DetailProduct.vue";
import Cart from "../views/cart/IndexCart.vue";
import NotFound from "../views/errors/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "productdetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

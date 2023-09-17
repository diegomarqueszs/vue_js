import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../view/login_box"
import Home from "../view/home_view"
import Pag404 from "../view/pag_404"

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/Pag404',
      name: 'Pag404',
      component: Pag404,
    }
]

const router = new VueRouter({
  mode:'history',
  routes,
});

export default router;
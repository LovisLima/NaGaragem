import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Eventos from "../views/Eventos.vue";
import Login from "../views/Login.vue";
import Registro from "../views/Registro.vue";
import HelloWorld from "../views/HelloWorld.vue";
import ProdutosServicos from "../views/ProdutosServicos.vue";
import sobre from "../views/sobre.vue";
import ConfirmaRegistro from "../views/ConfirmaRegistro.vue";
import Hortalica from "../views/Hortalica.vue";
import PagProd from "../views/PaginaProduto1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/eventos",
    name: "Eventos",
    component: Eventos,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/produtosservicos",
    name: "ProdutosServicos",
    component: ProdutosServicos,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: sobre,
  },
  {
    path: "/confirmacao",
    name: "ConfirmaRegistro",
    component: ConfirmaRegistro,
  },
  {
    path: "/produtosservicos/hortalicas",
    name: "Hortalica",
    component: Hortalica,
  },
  {
    path: "/produtosservicos/hortalicas/produto1",
    name: "PagProd",
    component: PagProd,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
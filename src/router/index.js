import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import PosteAnnonce from "../views/PosteAnnonce.vue";
import Recherche from "../components/Recherche.vue"
import Login from "../components/Login.vue"
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/recherche",
        name: "recherche",
        component: Recherche
    },
    {
        path: "/poste",
        name: "postannonce",
        component: PosteAnnonce
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

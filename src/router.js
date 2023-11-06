import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/AboutUs.vue";
import RestaurantShow from "./pages/RestaurantShow.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/restaurants/:slug",
        name: "restaurant.show",
        component: RestaurantShow,
    },
    {
        path: "/chi-siamo",
        name: "chi-siamo",
        component: AboutUs,
    },
    {
        path: "/contatti",
        name: "contatti",
        component: Contacts,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
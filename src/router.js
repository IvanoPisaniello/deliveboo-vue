import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/AboutUs.vue";
import RestaurantShow from "./pages/RestaurantShow.vue";
import Order from "./pages/Order.vue";
import PaymentSuccess from "./pages/PaymentSuccess.vue";
import FilteredRestaurants from "./pages/FilteredRestaurants.vue";


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
    {
        path: "/order",
        name: "order",
        component: Order,
    },
    {
        path: "/paymentSuccess",
        name: "paymentSuccess",
        component: PaymentSuccess,
    },
    {
        path: "/restaurantsFiltered/:type",
        name: "filteredRestaurants",
        component: FilteredRestaurants,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
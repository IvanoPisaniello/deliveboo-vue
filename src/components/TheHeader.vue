<script>

import axios from "axios";
import { store, clearCart, removeItem, decrementCount, updateTotalPrice, updateCartItemCount } from '../store'

export default {
    data() {
        return {
            store,
            navLinks: [
                {
                    title: "Home",
                    route: "home",
                },
                {
                    title: "Contatti",
                    route: "contatti",
                },
                {
                    title: "Chi Siamo",
                    route: "chi-siamo",
                }
            ],


        }
    },
    methods: {
        retrieveCartData() {
            const cartData = localStorage.getItem('cartDish');
            if (cartData) {
                store.cartDish = JSON.parse(cartData);
            }
        },
        clearCart,
        removeItem,
        decrementCount,
        updateTotalPrice,
        updateCartItemCount,



    },

    created() {
        this.retrieveCartData();

        setInterval(() => {
            this.retrieveCartData();
            this.updateTotalPrice();
            this.updateCartItemCount();
        }, 500);


    },

}
</script>
<template>
    <header class="d-flex justify-content-center w-100 position-fixed">
        <div class="container-fluid bg">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>

                    <div class="collapse navbar-collapse" id="navbarsExample02">
                        <ul class="navbar-nav me-auto mb-2 mb-sm-0 align-items-center">
                            <li class="nav-item" v-for="link in navLinks">
                                <router-link class="nav-link text-white" :class="{ 'active': $route.name === link.route }"
                                    :to="{ name: link.route }">{{ link.title }}</router-link>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>


        </div>
        <button class="btn bg-ylw" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling">
            <i class="fa-solid fa-cart-shopping"></i>
            <span v-if="cartItemCount > 0" class="badge bg-danger">{{ cartItemCount }}</span>
        </button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button class="btn btn-success btn-custom rounded-1 me-3" @click="clearCart">Pulisci Carrello</button>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Carrello:</p>
                <ul>
                    <li v-for="(item, index) in store.cartDish" :key="index">
                        {{ item.count }} - {{ item.title }} - {{ item.price }}
                        <button class="btn btn-danger my-2" @click="removeItem(index)">
                            X
                        </button>
                        <button @click="decrementCount(item)" class="btn btn-danger">-</button>
                    </li>
                </ul>
                <p>Totale: {{ store.totalPrice }}€</p>
                <router-link :to="{ name: 'order' }">Completa L'ordine</router-link>
            </div>
        </div>


    </header>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

header {

    z-index: 100;

    .bg {
        background-color: $secondary-color;
    }

    .bg-ylw {
        background-color: $primary-color;
    }

    .btn-custom {
        border-radius: 0;
        background-color: $primary-color;
    }

    i {
        font-size: larger;
    }

}
</style>
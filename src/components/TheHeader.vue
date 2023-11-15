<script>

import axios from "axios";
import { store, clearCart, removeItem, decrementCount, updateTotalPrice, updateCartItemCount, incrementCount } from '../store'

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
        incrementCount,



    },

    created() {
        this.retrieveCartData();

        setInterval(() => {
            this.retrieveCartData();
            this.updateTotalPrice();
            this.updateCartItemCount();
        }, 100);


    },

}
</script>
<template>
    <header class="d-flex justify-content-center w-100 position-fixed">
        <div class="container-fluid bg">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div style="max-width: 80px;">
                        <a class="navbar-brand" href="#"><img class="w-100" src="../../public/logo-png.png" alt=""></a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item " v-for="link in navLinks">
                                <router-link class="nav-link text-white " :class="{ 'active': $route.name === link.route }"
                                    :to="{ name: link.route }">{{ link.title }}</router-link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>


        <!-- Offcanvas Carrello -->
        <!-- icona carrello -->
        <button class="btn bg-ylw position-relative" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <i class="fa-solid fa-cart-shopping"></i>
            <span v-if="cartItemCount > 0" class="cart-badge badge bg-danger rounded-circle">{{
                cartItemCount }}</span>
        </button>


        <!-- pagina laterale -->

        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Riepilogo Ordine</h5>
                <button class="btn btn-custom rounded-1 me-3" @click="clearCart">Pulisci Carrello</button>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Carrello:</p>
                <div v-for="(item, index) in store.cartDish" :key="index"
                    class="d-flex align-items-center justify-content-between ">
                    <div class="py-3">
                        {{ item.count }} - {{ item.title }} - {{ item.price }}€
                    </div>

                    <div class="d-flex gap-3 ">
                        <button @click="decrementCount(item)" class="btn cart-btn">
                            <i class="cart-icon fa-solid fa-minus"></i>
                        </button>
                        <button @click="incrementCount(item)" class="btn cart-btn">
                            <i class="cart-icon fa-solid fa-plus"></i>
                        </button>

                        <button class="btn cart-btn" @click="removeItem(index)">
                            <i class=" cart-icon fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <p class="my-3">Totale: {{ store.totalPrice.toFixed(2) }}€</p>
                <button type="button" class="btn border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                    <router-link :to="{ name: 'order' }">Completa L'ordine</router-link>
                </button>

            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

header {

    overflow: hidden;
    z-index: 100;

    .bg {
        background-color: $secondary-color;
    }

    .bg-ylw {
        background-color: $primary-color;
    }

    .bg-ylw:hover {
        border-radius: 0;
        background-color: white;
        border-color: $primary-color ;

        i {
            color: $primary-color;
        }
    }

    .btn {
        border-radius: 0;

    }

    .btn-custom {
        background-color: $primary-color;
        border-color: $primary-color;
        color: white;

        :hover {
            background-color: $white-color;
            color: $primary-color;
            border: 1px solid;
        }
    }

    i {
        font-size: larger;
    }

    .cart-icon {
        color: red;
    }

    .cart-badge {
        right: 5%;
        top: 8%;
        font-size: .65rem;
        position: absolute;
    }

    .cart-btn {
        border-radius: 6px;

        &:hover {
            background-color: red;

            .cart-icon {
                color: white;
            }
        }
    }
}
</style>
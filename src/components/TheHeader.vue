<script>

import axios from "axios";

export default {
    data() {
        return {
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
            cartDish: [],
        }
    },
    methods: {
        retrieveCartData() {
            const cartData = localStorage.getItem('cartDish');
            if (cartData) {
                this.cartDish = JSON.parse(cartData);
            }
        }
    },
    created() {
        this.retrieveCartData(); // Chiamare la funzione una volta all'inizio

        // Aggiornare i dati ogni secondo
        setInterval(() => {
            this.retrieveCartData();
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
        </button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Carrello:</p>
                <ul>
                    <li v-for="item in cartDish">
                        {{ item.title }} - {{ item.price }}
                    </li>
                </ul>
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

    .btn {
        border-radius: 0;
        background-color: $primary-color;
    }

    i {
        font-size: larger;
    }

}
</style>
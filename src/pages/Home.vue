<script>
import axios from "axios";

import Card from '../components/Card.vue';
import SectionInfo from "../components/SectionInfo.vue";
import HeroSection from "../components/HeroSection.vue"


export default {
    components: {
        Card,
        HeroSection,
        SectionInfo,
    },
    data() {
        return {
            restaurants: [],
            selectedTypes: {
                Pizza: {
                    value: 'false',
                },
                Sushi: {
                    value: 'false',
                },
                Hamburger: {
                    value: 'false',
                },
                Poke: {
                    value: 'false',
                },
                Cinese: {
                    value: 'false',
                },
                Indiano: {
                    value: 'false',
                }
            },
            search: {
                type: '',
            },
        }
    },

    methods: {
        fetchRestaurants() {
            axios.get('http://127.0.0.1:8000/api/restaurants')
                .then((response) => {
                    this.restaurants = response.data.results;
                    //console.log(this.types)
                })
        },
        // filterRestaurants(type) {
        //     this.search.type = type;

        //     axios.get('http://127.0.0.1:8000/api/restaurants', { params: this.search })
        //         .then((response) => {
        //             this.restaurants = response.data.results;
        //             console.log(this.restaurants)
        //         })
        // },
        filterByCheckbox() {
            // Esegui la richiesta axios con i tipi selezionati
            axios.get('http://127.0.0.1:8000/api/restaurants', { params: this.selectedTypes })
                .then((response) => {
                    this.restaurants = response.data.results;
                    this.searchError = response.data.error;
                })
        },
    },
    mounted() {
        this.fetchRestaurants();
    }
}
</script>


<template>
    <HeroSection></HeroSection>
    <!-- SearchBar -->
    <!-- <form @keydown.enter.prevent="filterRestaurants()" class="m-3" style="width: 200px;">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="search.type">
    </form> -->

    <div class="container my-4">
        <div class="border-arrow my-5">
            <div class="d-flex">
                <span class="bg-orange-text-white px-2">
                    RISTORANTI
                </span>
                <div class="arrow"></div>

            </div>
        </div>
        <div class="row">
            <!-- Pizza -->
            <div class="col-sm-6 col-md-4 col-lg-2">
                <label>
                    <input type="checkbox" v-model="selectedTypes.Pizza.value">
                    Pizza
                </label>
            </div>

            <!-- Sushi -->
            <div class=" col-sm-6 col-md-4 col-lg-2">
                <label>
                    <input type="checkbox" v-model="selectedTypes.Sushi.value">
                    Sushi
                </label>
            </div>

            <!-- Hamburger -->
            <div class="col-sm-6 col-md-4 col-lg-2">
                <label>
                    <input type="checkbox" v-model="selectedTypes.Hamburger.value">
                    Hamburger
                </label>
            </div>

            <!-- Poke -->
            <div class="col-sm-6 col-md-4 col-lg-2">
                <label>
                    <input type="checkbox" v-model="selectedTypes.Poke.value">
                    Poke
                </label>
            </div>

            <!-- Cinese -->
            <div class="col-sm-6 col-md-4 col-lg-2">
                <label>
                    <input type="checkbox" v-model="selectedTypes.Cinese.value">
                    Cinese
                </label>
            </div>

            <!-- Indiano -->
            <div class="col-sm-6 col-md-4 col-lg-2">
                <label>
                    <input type="checkbox" v-model="selectedTypes.Indiano.value">
                    Indiano
                </label>
            </div>
            <button @click="filterByCheckbox()" class="btn btn-primary my-3">Cerca</button>
        </div>
    </div>


    <section class=" my-4">
        <div class="container">
            <div class="row">
                <Card v-if="restaurants[0] != 'false'" v-for="restaurant in restaurants" :singleCard="restaurant">
                </Card>

                <!-- Messaggio di errore in caso non si trovassero ristoranti -->
                <div v-else class="p-0 d-flex flex-column align-items-center">
                    <div class="fw-bold fs-4">
                        NESSUN RISULTATO
                    </div>
                    <img class="no-match-img" src="../../public/notFoundImage.jpg" alt="">
                </div>
            </div>
        </div>
    </section>

    <SectionInfo></SectionInfo>
    <section class="py-5">
        <div class="container my-4">
            <div class="border-arrow my-5">
                <div class="d-flex">
                    <span class="bg-orange-text-white px-2">
                        CATEGORIE
                    </span>
                    <div class="arrow"></div>
                </div>
            </div>
            <div class="row g-3">
                <!-- Pizza -->
                <div class="col-sm-6 col-md-4 col-lg-2">
                    <div class="card card-clickable">
                        <router-link :to="{ name: 'filteredRestaurants', params: { type: 'Pizza' } }"
                            class="text-decoration-none">
                            <div class="image-background" style="background-image: url('../../public/pizza.jpeg')">
                                <h5 class="card-title text-center">Pizza</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- Sushi -->
                <div class="col-sm-6 col-md-4 col-lg-2 ">
                    <div class="card card-clickable">
                        <router-link :to="{ name: 'filteredRestaurants', params: { type: 'Sushi' } }"
                            class="text-decoration-none">
                            <div class="image-background" style="background-image: url('../../public/sushi.jpeg')">
                                <h5 class="card-title text-center">Sushi</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- Hamburger -->
                <div class="col-sm-6 col-md-4 col-lg-2 ">
                    <div class="card card-clickable">
                        <router-link :to="{ name: 'filteredRestaurants', params: { type: 'Hamburger' } }"
                            class="text-decoration-none">
                            <div class="image-background" style="background-image: url('../../public/hamburger.jpeg')">
                                <h5 class="card-title text-center">Hamburger</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- Poke -->
                <div class="col-sm-6 col-md-4 col-lg-2 ">
                    <div class="card card-clickable">
                        <router-link :to="{ name: 'filteredRestaurants', params: { type: 'Poke' } }"
                            class="text-decoration-none">
                            <div class="image-background" style="background-image: url('../../public/poke.avif')">
                                <h5 class="card-title text-center">Poke</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- Cinese -->
                <div class="col-sm-6 col-md-4 col-lg-2 ">
                    <div class="card card-clickable">
                        <router-link :to="{ name: 'filteredRestaurants', params: { type: 'Cinese' } }"
                            class="text-decoration-none">
                            <div class="image-background" style="background-image: url('../../public/cinese.jpeg')">
                                <h5 class="card-title text-center">Cinese</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- Indiano -->
                <div class="col-sm-6 col-md-4 col-lg-2 ">
                    <div class="card card-clickable">
                        <router-link :to="{ name: 'filteredRestaurants', params: { type: 'Indiano' } }"
                            class="text-decoration-none">
                            <div class="image-background" style="background-image: url('../../public/indiano.jpeg')">
                                <h5 class="card-title text-center">Indiano</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-3">
        <div class="container">
            <div class="border-arrow my-5">
                <div class="d-flex">
                    <span class="bg-orange-text-white px-2">
                        VEDI TUTTO
                    </span>
                    <div class="arrow"></div>
                </div>
            </div>

            <div class="row my-4 g-2">
                <div class="col-sm-12 col-md-3">
                    <img class="img-style"
                        src="../../public/img-destra.jpg"
                        alt="">
                </div>
                <div class="col-sm-12 col-md-6">
                    <img class="img-style"
                        src="../../public/foto-centrale.jpg"
                        alt="">
                </div>
                <div class="col-sm-12 col-md-3">
                    <img class="img-style"
                        src="../../public/img-sinistra.jpg"
                        alt="">
                </div>
            </div>

            <div class="row g-2">
                <div class="col-sm-12 col-md-6">
                    <img class="img-style"
                        src="../../public/basso-1.jpg" alt="">
                </div>
                <div class="col-sm-12 col-md-6">
                    <img class="img-style"
                        src="../../public/ultima.jpg" alt="">
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

.container {
    .card-clickable {
        position: relative;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        border-radius: 30px;
    }

    .image-background {
        position: relative;
        background-size: cover;
        background-position: center;
        text-align: center;
        color: white;
        height: 100px;
        border-radius: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
    }


    .selected {
        background-color: orange;
    }

    .card-clickable:hover {
        transform: scale(1.05);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }

    .card-clickable:hover .image-background {
        opacity: 0.7;
    }

    .card-clickable:active {
        transform: scale(1.03);
    }

    .no-match-img {
        width: 300px;
        aspect-ratio: 1/1;
    }

    .img-style {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
}
</style>


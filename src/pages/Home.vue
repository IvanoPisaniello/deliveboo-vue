<script>


import axios from "axios";

import Card from '../components/Card.vue';
import HeroSection from "../components/HeroSection.vue";

export default {
    components: {
        Card,
        HeroSection,
    },
    data() {
        return {
            restaurants: [],
            search: {
                type: '',
            }
        }
    },

    methods: {

        fetchRestaurants() {
            axios.get('http://127.0.0.1:8000/api/restaurants').then((response) => {
                this.restaurants = response.data.results;
                //console.log(response.data.results)
            })

        },
        filterRestaurants(type) {
            this.search.type = type;
            axios.get('http://127.0.0.1:8000/api/restaurants', { params: this.search })
                .then((response) => {
                    this.restaurants = response.data.results;
                    //console.log(this.restaurants)
                })
        }

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
        <div class="row">
            <div class="col-2 ">
                <div class="card card-clickable" @click="filterRestaurants('Pizza')">
                    <div class="image-background" style="background-image: url('../../public/pizza.jpeg')">
                        <h5 class="card-title text-center">Pizza</h5>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="card card-clickable" @click="filterRestaurants('Sushi')">
                    <div class="image-background" style="background-image: url('../../public/sushi.jpeg')">
                        <h5 class="card-title text-center">Sushi</h5>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="card card-clickable" @click="filterRestaurants('Hamburger')">
                    <div class="image-background" style="background-image: url('../../public/hamburger.jpeg')">
                        <h5 class="card-title text-center">Hamburger</h5>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="card card-clickable" @click="filterRestaurants('Poke')">
                    <div class="image-background" style="background-image: url('../../public/poke.avif')">
                        <h5 class="card-title text-center">Poke</h5>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="card card-clickable" @click="filterRestaurants('Cinese')">
                    <div class="image-background" style="background-image: url('../../public/cinese.jpeg')">
                        <h5 class="card-title text-center">Cinese</h5>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="card card-clickable" @click="filterRestaurants('Indiano')">
                    <div class="image-background" style="background-image: url('../../public/thali-indiano.jpg')">
                        <h5 class="card-title text-center">Indiano</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container my-4">
        <div class="row">
            <Card v-for="restaurant in restaurants" :singleCard="restaurant"></Card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
</style>

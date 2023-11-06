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
        filterRestaurants() {
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
    <form @keydown.enter.prevent="filterRestaurants()" class="m-3" style="width: 200px;">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="search.type">
    </form>
    
    <div class="container-md my-4">
        <div class="row">
            <Card v-for="restaurant in restaurants"
            :singleCard="restaurant"></Card>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
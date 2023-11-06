<script>
import axios from "axios";
export default {
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
                console.log(response.data.results)
            })

        },
        filterRestaurants() {
            axios.get('http://127.0.0.1:8000/api/restaurants', { params: this.search })
                .then((response) => {
                    this.restaurants = response.data.results;
                    console.log(this.restaurants)
                })
        }
    },
    mounted() {
        this.fetchRestaurants();
    }
}
</script>



<template>
    <!-- SearchBar -->
    <form @keydown.enter.prevent="filterRestaurants()" class="m-3" style="width: 200px;">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="search.type">
    </form>
    
    <div class="card text-start" v-for="restaurant in restaurants">
        <img class="card-img-top" src="holder.js/100px180/" alt="Title">
        <div class="card-body">
            <h4 class="card-title">{{ restaurant.name }}</h4>

            <p class="card-text">Body</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title {
    margin-top: 200px;
}
</style>

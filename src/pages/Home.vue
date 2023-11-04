<script>
import axios from "axios";
export default {
    data() {
        return {
            restaurants: [],
        }
    },

    methods: {

        fetchRestaurants() {
            axios.get('http://127.0.0.1:8000/api/restaurants').then((response) => {
                this.restaurants = response.data.results;
                console.log(response.data.results)
            })

        }
    },
    mounted() {
        this.fetchRestaurants();
    }
}
</script>



<template>
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

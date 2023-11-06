<script>


import axios from "axios";

import Card from '../components/Card.vue';

export default {
    components: {
        Card,
    },
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
    <div class="container-md">
        <div class="row">
            <Card v-for="restaurant in restaurants"
            :singleCard="restaurant"></Card>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
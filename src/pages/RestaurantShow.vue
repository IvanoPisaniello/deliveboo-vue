<script>
import axios from 'axios';

export default {
    data() {
        return {
            restaurant: {},
        }
    },
    methods: {
        fetchSingleRestaurant() {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.slug}`)
                .then((response) => {
                    this.restaurant = response.data;
                    console.log(this.restaurant);
                })
        }
    },
    mounted() {
        this.fetchSingleRestaurant();
    }
}

</script>

<template>
    <div class="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, temporibus perspiciatis! At laboriosam soluta sed, quo pariatur cupiditate, id quasi amet quidem sequi esse repellendus accusamus mollitia! Est, laudantium fugit.</p>
        <h1> {{ restaurant.name }} </h1>
    </div>
</template>

<style lang="scss" scoped>

.container {
    margin-top: 200px;
}
</style>
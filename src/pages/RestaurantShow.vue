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
        },
        getImagePath(image) {
            return `http://127.0.0.1:8000/storage/${image}`;
        }
    },
    mounted() {
        this.fetchSingleRestaurant();
    }
}

</script>

<template>
    <div class="container" id="padding">
        <h1> {{ restaurant.name }} </h1>
        <span class="text-primary-emphasis"> {{ restaurant.address }} </span>
        <div>
            <span v-for="type in restaurant.types" 
            class="text-danger-emphasis d-inline-block fw-semibold me-2">
                {{ type.name }}
            </span>
        </div>
        <h3 class="mt-3">I nostri piatti</h3>
        <div class="row">
            <div v-for="dish in restaurant.dishes" class="col-4">
                <div class="card h-100">
                    <img :src="getImagePath(dish.image)" class="card-img-top" 
                    alt="img_dish" style="height: 190px;object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title"> {{ dish.title }} </h5>
                        <div>
                           <span v-if="dish.discount != 0" 
                        class="badge rounded-pill text-bg-success"> -{{ dish.discount }}%
                        </span> 
                        </div>
                        <p class="card-text">
                            {{ dish.description }}
                        </p>
                        <span class="fst-italic">Ingredienti: </span>
                        <p class="card-text fst-italic">
                            {{ dish.ingredients }}
                        </p>
                        <div class="mt-auto"> {{ dish.price }}€ </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

#padding {
    padding-top: $padding-container;
}
.container {

}
</style>
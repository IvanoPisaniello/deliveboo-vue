<script>
import axios from 'axios';

export default {
    data() {
        return {
            restaurant: {},
            count: 0,
            cartDish: [],

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
        },

        saveCartToLocalStorage() {
            localStorage.setItem('cartDish', JSON.stringify(this.cartDish));
        },

        incrementCount(dish) {
            this.cartDish.push(dish);
            this.count++;
            this.saveCartToLocalStorage();
            this.$forceUpdate();
        },
        decrementCount(dish) {
            if (this.count > 0) {
                this.count--;

                const index = this.cartDish.findIndex(item => item.id === dish.id);
                if (index !== -1) {

                    this.cartDish.splice(index, 1);
                }
                console.log(this.cartDish);
            }
            this.saveCartToLocalStorage();
        },



    },
    updated() {
        // Forza l'aggiornamento dell'offcanvas quando il carrello cambia
        this.$forceUpdate();
    },
    mounted() {
        this.fetchSingleRestaurant();

        const cartDish = localStorage.getItem('cartDish');
        if (cartDish) {
            this.cartDish = JSON.parse(cartDish);
        }
    },


}

</script>

<template>
    <div class="container" id="padding">
        <h1> {{ restaurant.name }} </h1>
        <span class="text-primary-emphasis"> {{ restaurant.address }} </span>
        <div>
            <span v-for="type in restaurant.types" class="text-danger-emphasis d-inline-block fw-semibold me-2">
                {{ type.name }}
            </span>
        </div>
        <h3 class="mt-3">I nostri piatti</h3>
        <div class="row">
            <div v-for="dish in restaurant.dishes" class="col-sm-6 col-md-3 col-lg-4 mb-5">
                <div class="card h-100">
                    <img :src="getImagePath(dish.image)" class="card-img-top" alt="img_dish"
                        style="height: 190px;object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title"> {{ dish.title }} </h5>
                        <div>
                            <span v-if="dish.discount != null && dish.discount > 0"
                                class="badge rounded-pill text-bg-success"> -{{ dish.discount
                                }}%
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
                        <div class="d-flex">
                            <p class="card-text">Valore attuale: {{ count }}</p>
                            <button @click="incrementCount(dish)" class="btn btn-primary">+</button>
                            <button @click="decrementCount(dish)" class="btn btn-danger">-</button>
                        </div>
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
</style>
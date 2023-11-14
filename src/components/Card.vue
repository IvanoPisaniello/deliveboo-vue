<script>

export default {
    props: {
        singleCard: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImagePath(image) {
            return `http://127.0.0.1:8000/storage/${image}`;
        }
    }
}
</script>

<template>
    <div class="col-sm-6 col-md-4 col-lg-2 py-4">
        <div class="card h-100 ">
            <img :src="getImagePath(singleCard.image)" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> {{ singleCard.name }} </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary"> {{ singleCard.address }} </h6>
                <div class="card-text">
                    <div v-for="type in singleCard.types"> {{ type.name }} </div>
                </div>
                <router-link :to="{ name: 'restaurant.show', params: { slug: singleCard.slug } }" class="card-link">Dettagli
                    ristorante</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
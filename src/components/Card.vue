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
        <div class="card h-100 d-flex flex-column" style=" border-radius: 10px;">
            <div class="overflow-hidden rounded-top">
                <img :src="getImagePath(singleCard.image)" class="card-img-top w-100"
                    style="height: 150px; object-fit: cover;" alt="...">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ singleCard.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ singleCard.address }}</h6>
                <div class="card-text">
                    <div v-for="type in singleCard.types">{{ type.name }}</div>
                </div>
                <div class="mt-auto">
                    <router-link :to="{ name: 'restaurant.show', params: { slug: singleCard.slug } }"
                        class="btn btn-orange rounded-4 mt-2">Dettagli
                        ristorante</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.btn-orange {
    color: #fff;
    background-color: #ff9e50;
    border-color: #ff9e50;
}

.btn-orange:hover {
    background-color: #ff6f1c;
    border-color: #ff6f1c;
}
</style>
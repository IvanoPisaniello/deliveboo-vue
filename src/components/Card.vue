<script>

export default {
    props: {
        singleCard: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="col-2">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> {{ singleCard.name }} </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary"> {{ singleCard.address }} </h6>
                <p class="card-text"></p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
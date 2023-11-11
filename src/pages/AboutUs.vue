<script>

export default {

}
</script>


<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="container">
                        <div class="row p-5">

                            <h1 class="title">Non hai tempo per preparare il
                                <span class="color-ylw">cibo</span>?
                            </h1>
                            <p class="mt-4">
                                Scegli uno dei nostri piani, inserisci i tempi di consegna e goditi del
                                delizioso cibo senza uscire di casa!
                            </p>
                            <div class="d-flex gap-4 mt-4">
                                <button type="button" class="btn bg-ylw btn-lg rounded-pill text-white">Ordina ora</button>
                                <button type="button" class="btn btn-outline-dark">Leggi di più</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <img class="img-fluid" src="/fast-food-pictures.jpg" alt="fast-food-wallpaper">
                </div>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;


.container {

    .color-ylw {
        color: $primary-color;
    }

    .bg-ylw {
        background-color: $primary-color;
    }
}
</style>
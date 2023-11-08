<script>

export default {

}
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <h1 class="title">Non hai tempo per preparare il 
                    <span class="text-warning">cibo</span>?
                </h1>
                <p class="mt-4">
                    Scegli uno dei nostri piani, inserisci i tempi di consegna e goditi del 
                    delizioso cibo senza uscire di casa!
                </p>
                <div class="d-flex justify-content-between align-items-center mt-4">
                    <button type="button" class="btn btn-warning btn-lg rounded-pill">Ordina ora</button>
                    <span>oppure</span>
                    <button type="button" class="btn btn-outline-dark">Leggi di più</button>
                </div>
                
            </div>
            <div class="col-8">
                <img class="img-fluid" src="/fast-food-pictures.jpg" alt="fast-food-wallpaper">
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

.title {
    margin-top: 200px;
}

.container {
    max-width: 1140px;
    margin-top: 200px;
}
</style>
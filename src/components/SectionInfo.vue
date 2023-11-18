<script>

</script>


<template>
    <!-- sezione informazioni -->

    <section class="bg-light-gray py-4">
        <div class="container my-4 py-3">
            <div class="row align-items-center">
                <div class="col-sm-12 col-md-6 ">
                    <div class="ms-4">
                        <h2 class="size">Consegniamo
                            <h2 class="text-orange size">tutto cio che vuoi</h2>
                        </h2>

                        <a href="#locali" style="text-decoration: none; color: white;">
                            <button id="scopriLocaliBtn" class="my-4 px-5 py-2 fw-bold btn-black">
                                Scopri tutti i locali
                            </button>
                        </a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 bg-orange-text-white px-4 rounded-5">
                    <div class="d-flex align-items-center gap-3 my-5">
                        <div class="number">
                            <i class="fa-solid fa-1"></i>
                        </div>
                        <div class="text">
                            <h4 class="text-white">Fresh, Seasonal Ingredients</h4>
                            <div>Our menu follows the seasons, featuring the best local produce available</div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3 my-5">
                        <div class="number">
                            <i class="fa-solid fa-2"></i>
                        </div>
                        <div class="text">
                            <h4 class="text-white">Comfort Food, Elevated</h4>
                            <div>We have simple crowd-favorites on the menu - but we do them well. Our flavors stand out,
                                guaranteed.</div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3 my-5">
                        <div class="number">
                            <i class="fa-solid fa-3"></i>
                        </div>
                        <div class="text">
                            <h4 class="text-white">Better Beverages </h4>
                            <div>We're your cafe and barista in one, serving your favorite cuppa by sun-up, and your
                                cocktail-of-choice by sundown.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

.container {


    .text-orange {
        color: $primary-color;
    }

    h2 {
        font-size: 40px;
    }

    .number {
        text-align: center;
        background-color: $secondary-color;
        border-radius: 50%;
        padding: 6px;

        i {
            width: 16px;
            color: white;
        }

    }

}
</style>


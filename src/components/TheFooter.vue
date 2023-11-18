<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <footer class="text-white w-100">
        <div class="row text-center">
                <div class="col-sm-12 col-md-6">
                    <h3 class="my-5">Contatti</h3>
                    <div class="pb-3">
                        <h5 class="text-white mb-4">The Sunday Bite</h5>
                        <div class="card-text mb-4">123 Anywhere St., Any City, State, Country 12345</div>
                        <h5 class="text-white mb-4">Email Address</h5>
                        <div class="card-text mb-4">deliveboo@reallygreatsite.com</div>
                        <h5 class="text-white mb-4">Phone Number</h5>
                        <div class="card-text mb-4">(123) 456 7890</div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h3 class="my-5">Informazioni</h3>
                    <div class="pb-3">
                        <h5 class="text-white mb-4">The Sunday Bite</h5>
                        <div class="card-text mb-4">123 Anywhere St., Any City, State, Country 12345</div>
                        <h5 class="text-white mb-4">Email Address</h5>
                        <div class="card-text mb-4">deliveboo@reallygreatsite.com</div>
                        <h5 class="text-white mb-4">Phone Number</h5>
                        <div class="card-text mb-4">(123) 456 7890</div>
                    </div>
                </div>
            </div>


        <!-- <div class="row row-cols-1 row-cols-sm-3 gy-5">


                Contatti 
                <div class="col text-center text-sm-start">
                    <h2 class="pb-2">Contatti</h2>
                    <p><i class="fa-solid fa-location-dot"></i> <strong>Indirizzo:</strong> Via della casa di Jabbo Pazzo
                    </p>
                    <p><i class="fa-solid fa-city"></i> <strong>Città:</strong> Pisa</p>
                    <p><i class="fa-solid fa-phone"></i> <strong>Telefono:</strong> non sono fatti tuoi</p>
                    <p><i class="fa-solid fa-envelope"></i> <strong>Email:</strong> <a href=""
                            class="text-white">jappopazzo@cheneso.it</a></p>
                </div>



            </div>
            <hr>
            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 mt-5 g-4 text-center">
                <div class="col">
                    <a class="text-white" href="#">Condizioni generali di uso e vendita</a>
                </div>
                <div class="col ">
                    <a class="text-white" href="#">Cookie</a>
                </div>
                <div class="col ">
                    <a class="text-white" href="#">Informativa sulla privacy Cookie</a>
                </div>
                <div class="col">
                    <a class="text-white" href="#">Area legale</a>
                </div>
                <div class="col ">
                    <a class="text-white" href="#">&copy; 2023 Ristorante Gusto Italiano. Tutti i diritti riservati.</a>
                </div>
            </div> -->

    </footer>
</template>

<style lang="scss" scoped >
@use "../src/styles/partials/variable" as *;

footer {
    overflow: hidden;
    margin-top: 3rem;
    background-color: $secondary-color;

    h3 {
        color: $primary-color;
    }


    .card-text {
        color: white;
    }

    h2 {
        font-weight: bold;

    }


    .social-row {
        max-width: 200px;
    }

    .github-links {
        display: inline-block;
        padding: .5rem 0;

    }
}
</style>
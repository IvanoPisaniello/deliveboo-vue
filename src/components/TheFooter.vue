<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <footer class="text-white bg-warning py-5">
        <div class="container py-5">
            <div class="row row-cols-1 row-cols-sm-3 gy-5">


                <!-- Contatti -->
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
            </div>

        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    margin-top: 8rem;



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
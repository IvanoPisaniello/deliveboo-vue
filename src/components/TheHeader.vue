<script>

export default {
    data() {
        return {
            navLinks: [
                {
                    title: "Home",
                    route: "home",
                },
                {
                    title: "Contatti",
                    route: "contatti",
                },
                {
                    title: "Chi Siamo",
                    route: "chi-siamo",
                }
            ],
            search: {
                type: '',
            }
        }
    },
    methods: {
        filterRestaurants() {
            axios.get('http://127.0.0.1:8000/api/restaurants', { params: this.search.type }).then((response) => {
                this.restaurants = response.data.results;
                console.log(response.data.results)
            })

        }
    }
}
</script>
<template>
    <header class="d-flex justify-content-center position-relative">
        <div class="container position-absolute">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarsExample02">
                        <ul class="navbar-nav me-auto mb-2 mb-sm-0 align-items-center">
                            <li class="nav-item" v-for="link in navLinks">
                                <router-link class="nav-link text-white" :class="{ 'active': $route.name === link.route }"
                                    :to="{ name: link.route }">{{ link.title }}</router-link>
                            </li>
                        </ul>

                        <!-- SearchBar -->
                        <form role="search">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"
                                v-model="search.type">
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

header {
    .container {
        z-index: 10;
        top: 20px;
    }

    .navbar {
        background-color: $secondary-color;
    }

}
</style>
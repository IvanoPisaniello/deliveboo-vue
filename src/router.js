import { createRouter, createWebHistory } from "vue-router";

// importazione componenti singole pagine
// import HomePage from "./pages/Home.vue";
// import PostsShowPage from "./pages/posts/Show.vue";
// ... import di altri componenti

// definiamo le rotte
const routes = [
    // {
    //     path: "/", // uri da scrivere nel browser
    //     name: "home", // nome della rotta da usare per creare un link
    //     component: HomePage // componente che ritorna l'html della pagina
    // },
    // // ... altre rotte
    // {
    //     // Show di un singolo post
    //     path: "/posts/:id",
    //     name: "posts.show",
    //     component: PostsShowPage
    // }
]

// creazione istanza di Router
const router = createRouter({
    // Serve ad indicare come gestire l'url al cambio pagina
    history: createWebHistory(),
    // passiamo l'array delle rotte
    routes
});

// esportiamo l'istanta router per poterla usare dentro main.js
export { router };
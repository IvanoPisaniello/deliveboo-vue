<script>

export default {

}
</script>

<template>
    <div class="container">
        <h1 class="title">Contatti</h1>

        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nome</label>
                <input type="text" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Cognome</label>
                <input type="text" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Messaggio</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" class="btn btn-personal">Invia</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

.btn-personal {
    background-color: $primary-color;
    color: $white-color;
}

.btn-personal:hover {
    background-color: $white-color;
    color: $primary-color;
    border: 1px solid;
}
</style>
<script>
export default {
    data() {
        return {
            sendData: {
                name: '',
                surname: '',
                mail: '',
                address: ''
            }
        }
    },
    methods: {
        onFormSubmit() {
            console.log(this.sendData);
        }
    },
}

</script>

<template>
    <div class="container">
        <h1>Completa L'ordine</h1>
        <div class="row">
            <!--<div class="col-6 border">sezione ordine corrente</div>
            <div class="col-6">sezione form</div> 
        dati: nome cognome mail indirizzo somma -->
            <div class="col-10">
                <form action="" @submit.prevent="onFormSubmit">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome:</label>
                        <input type="text" class="form-control" placeholder="Nome" id="name"
                        v-model="sendData.name"> 
                    </div>
                    <div class="mb-3">
                        <label for="surname" class="form-label">Cognome:</label>
                        <input type="text" class="form-control" placeholder="Cognome" id="surname"
                        v-model="sendData.surname">
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="mail" placeholder="name@example.com"
                        v-model="sendData.mail">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Indirizzo:</label>
                        <input type="text" class="form-control" placeholder="Indirizzo" id="address"
                        v-model="sendData.address">
                    </div>
                    <button type="submit" class="btn btn-primary">Invia</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding-top: 100px;
}
</style>
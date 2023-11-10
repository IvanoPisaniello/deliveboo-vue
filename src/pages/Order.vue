<script>

import axios from 'axios';
import { store, updateTotalPrice } from '../store.js';

export default {
    data() {
        return {
            store,
            sendData: {
                name: '',
                surname: '',
                mail: '',
                address: '',
                store
            },
        }
    },
    methods: {
        updateTotalPrice,
        onFormSubmit() {
            axios.post('http://127.0.0.1:8000/api/orders', this.sendData,
                {
                    headers: { 'Content-Type': 'application/json' }
                }).then((response) => {
                    console.log(this.sendData.store);
                    console.log(response);
                })
        }
    },
    mounted() {
        this.updateTotalPrice();
    }
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
                        <input type="text" class="form-control" placeholder="Nome" id="name" v-model="sendData.name">
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
                    <div class="col-2">
                        <ul>
                            <li v-for="(item, index) in store.cartDish" :key="index">
                                {{ item.count }} - {{ item.title }} - {{ item.price }}
                            </li>
                            <li>
                                {{ store.totalPrice }}
                            </li>
                        </ul>
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
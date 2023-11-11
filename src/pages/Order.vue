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
        <h2>Completa L'ordine</h2>
        <div class="row">
            <!--<div class="col-6 border">sezione ordine corrente</div>
            <div class="col-6">sezione form</div> 
        dati: nome cognome mail indirizzo somma -->
            <div class="col-10 ">
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
                    <div class="mb-4 pt-4">
                        <h2>Riepilogo dell'Ordine</h2>
                        <div>
                            <table class="table table-borderless table-sm">
                                <tbody>
                                    <tr v-for="(item, index) in store.cartDish" :key="index">
                                        <td class="py-2 col-md-1">
                                            <div class="number-style">
                                                {{ item.count }}
                                            </div>
                                        </td>
                                        <td class="col-md-3"><b>{{ item.title }}</b></td>
                                        <td>{{ item.price }}€</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex gap-5 align-items-center">
                            <div class="py-4 font-size d-flex align-items-center gap-1">
                                <div><b>Totale:</b></div>
                                <div>{{ store.totalPrice }}.00€</div>
                            </div>
                            <button type="submit" class="btn btn-ylw px-5 fw-bold ">Ordina</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

.container {
    padding-top: 100px;

    li {
        list-style: none;
    }

    .number-style {
        width: 25px;
        background-color: $primary-color;
        display: flex;
        justify-content: center;
        aspect-ratio: 1/1;
        border-radius: 50%;
        color: $white-color;
    }

    .font-size {
        font-size: 25px;
    }

    .btn-ylw {
        background-color: $primary-color;
        color: $white-color;
    }

    .btn-ylw:hover {
        background-color: $white-color;
        color: $primary-color;
        border: 1px solid;
    }
}
</style>
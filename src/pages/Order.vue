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
                email: '',
                address: '',
                store,

            },
            tokenAuthorization: '',
            dropinInstance: '',
            validazione: false,
            nameError: '',
            surnameError: '',
            mailError: '',
            addressError: '',
            //4111111111111111
        }
    },
    methods: {
        updateTotalPrice,
        onFormSubmit() {
            //funzione di validazione
            //se validazione ok allora fai comparire form carta di credito

            this.validateName();
            this.validateSurname();
            this.validateMail();
            this.validateAddress();
            if (this.nameError == '' && this.surnameError == '' && this.mailError == '' && this.addressError == '') {
                this.validazione = true
                axios.post('http://127.0.0.1:8000/api/orders', this.sendData,
                    {
                        headers: { 'Content-Type': 'application/json' }
                    }).then((response) => {
                        console.log('il nuovo ordine è: ', response)

                    })

                this.paymentForm()
            }
        },

        //validazione form
        validateName() {
            if (!this.sendData.name) {
                this.nameError = 'Il campo Nome è obbligatorio.';
            } else {
                this.nameError = '';
            }
        },
        validateSurname() {
            if (!this.sendData.surname) {
                this.surnameError = 'Il campo Cognome è obbligatorio.';
            } else {
                this.surnameError = '';
            }
        },
        validateMail() {
            if (!this.sendData.email) {
                this.mailError = 'Il campo E-mail è obbligatorio.';
            } else {
                this.mailError = '';
            }
        },
        validateAddress() {
            if (!this.sendData.address) {
                this.addressError = 'Il campo Indirizzo è obbligatorio.';
            } else {
                this.addressError = '';
            }

        },

        paymentForm() {
            axios.get('http://127.0.0.1:8000/api/orders/token', {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then((response) => {
                    this.tokenAuthorization = response.data
                    // console.log('il token è: ', response.data)
                    console.log('il token è: ', this.tokenAuthorization)

                    if (this.tokenAuthorization != '') {
                        braintree.dropin.create({
                            authorization: this.tokenAuthorization,
                            container: '#dropin-container'
                        }, (error, instance) => {
                            if (error) {
                                console.log(error);
                            } else {
                                this.dropinInstance = instance;
                            }
                        });
                    }
                })
        },
        submitPayment() {
            console.log(this.sendData.store.totalPrice)
            if (this.dropinInstance) {
                const self = this;

                this.dropinInstance.requestPaymentMethod(function (err, payload) {
                    axios.post('http://127.0.0.1:8000/api/orders/payment', {
                        nonce: payload.nonce,
                        amount: self.sendData.store.totalPrice
                    },)
                        .then(response => {
                            console.log(response.data)
                            self.$router.push({ name: 'paymentSuccess' });
                        })
                        .catch(error => {
                            //console.log('Error');
                            // Puoi gestire l'errore qui
                        });
                });
            }
        }
    },
    mounted() {
        // this.onFormSubmit();
        this.updateTotalPrice();
        console.log(this.sendData.store.totalPrice)
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
                        <div v-if="nameError" class="error-message text-danger">{{ nameError }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="surname" class="form-label">Cognome:</label>
                        <input type="text" class="form-control" placeholder="Cognome" id="surname"
                            v-model="sendData.surname">
                        <div v-if="surnameError" class="error-message text-danger">{{ surnameError }}</div>

                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com"
                            v-model="sendData.email">
                        <div v-if="mailError" class="error-message text-danger">{{ mailError }}</div>

                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Indirizzo:</label>
                        <input type="text" class="form-control" placeholder="Indirizzo" id="address"
                            v-model="sendData.address">
                        <div v-if="addressError" class="error-message text-danger">{{ addressError }}</div>

                    </div>
                    <div class="mb-4 pt-4">
                        <h2>Riepilogo dell'Ordine</h2>
                        <div>
                            <table class="table table-borderless table-sm">
                                <tbody>
                                    <tr v-for="(item, index) in store.cartDish" :key="index" class="d-flex gap-1">
                                        <td class="py-2 col-md-1">
                                            <div class="number-style">
                                                {{ item.count }}
                                            </div>
                                        </td>
                                        <td class="col-md-3 d-flex align-items-center"><b>{{ item.title }}</b></td>
                                        <td class=" d-flex align-items-center">{{ item.price }}€</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex gap-5 align-items-center">
                            <div class="py-4 font-size d-flex align-items-center gap-1">
                                <div><b>Totale:</b></div>
                                <div>{{ store.totalPrice.toFixed(2) }}€</div>
                            </div>
                            <button type="submit" class="btn btn-ylw px-5 fw-bold ">Ordina</button>
                        </div>
                    </div>
                </form>
                <!-- Braintree -->
                <div class="mt-3" v-if="validazione">
                    <h1>Inserisci coordinate di pagamento</h1>
                    <div id="dropin-container"></div>

                    <button type="submit" @click="submitPayment()" class="btn btn-primary">Paga</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;

.container {

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
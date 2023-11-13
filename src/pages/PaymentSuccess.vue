<script>
import { clearCart } from '../store.js';

export default {
  methods: {
    clearCart
  },
  mounted() {
    this.clearCart()
  }
}
</script>
<template>
  <main>
    <div class="container">
      <div class="text-center">
        <h1 class="">Il pagamento è stato effettuato con successo</h1>
        <div class="col">
          <img
            src="https://img.freepik.com/premium-vector/people-paying-successfully-with-phone-online-mobile-payment-banking-service_530733-2928.jpg"
            alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variable" as *;
</style>
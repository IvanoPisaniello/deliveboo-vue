<script>
import axios from "axios";
import Card from '../components/Card.vue';


export default {
  components: {
    Card
  },
  data() {
    return {
      search: {
        type: ''
      },
      restaurants: []
    }
  },
  methods: {
    filterRestaurants() {

      if (this.search.type != '') {
        console.log(this.search.type)
        axios.get('http://127.0.0.1:8000/api/restaurants', { params: this.search })
          .then((response) => {
            this.restaurants = response.data.results;
            console.log(this.restaurants)
          })
      }
    }
  },
  mounted() {
    this.search.type = this.$route.params.type;

    this.filterRestaurants();
  }
}
</script>

<template>
  <div class="container my-4">
    <h1>Ristoranti che fanno {{ this.search.type }}</h1>
    <div class="d-flex gap-3">
      <Card v-if="restaurants[0] != 'false'" v-for="restaurant in restaurants" :singleCard="restaurant"></Card>
    </div>
  </div>
</template>
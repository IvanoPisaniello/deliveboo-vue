<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheFooter,
    TheHeader
}
}

</script>

<template>
  <TheHeader></TheHeader>
  <main>
    <router-view></router-view>
  </main>

  <TheFooter></TheFooter>
</template>

<style scoped lang="scss">
</style>

<script>
import TheFooter from './components/TheFooter.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  components: {
    TheFooter,
    HeroSection,
  }
}

</script>

<template>
  <HeroSection></HeroSection>
  
  <main>
    <router-view></router-view>
  </main>

  <TheFooter></TheFooter>
</template>

<style scoped lang="scss">
</style>

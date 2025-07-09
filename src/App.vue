<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header />
    <Navigation v-if="$route.path !== '/'" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, Navigation, Footer }
};
</script>

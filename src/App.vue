<template>
  <Navbar :name="this.$route.name" />
  <router-view/>
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
<script>
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
export default {
  components: {Footer, Navbar}
}
</script>

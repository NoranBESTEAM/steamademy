<template>
  <!-- import navbar in main.js file -->
  <Navbar />
  <router-view/>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Bahij_TheSansArabic', 'Bahij_TheSansArabic_Bold' , Arial , sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
  // text-align: center;
  // color: #2c3e50;
  line-height: normal;
}

/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */

#app a{
  text-decoration: none;
}

p{
  text-align: justify !important;
}
</style>

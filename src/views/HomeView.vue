<template>
  <!-- Start Header -->
  <Header />
  <!-- End Header -->
  <!-- Start Service -->
  <Service />
  <!-- End Service -->
  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->
</template>

<script>

import Header from '@/components/home/Header.vue';
import Service from '@/components/home/Service.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Service,
  }
}

</script>

<style scoped lang="scss"></style>

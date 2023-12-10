<template>

  <!-- Start Header -->
  <Header />
  <!-- End Header -->

  <!-- Start Service -->
  <Service />
  <!-- End Service -->

  <!-- Start Commercial_Concession_Home -->
  <Commercial_Concession_Home />
  <!-- End Commercial_Concession_Home -->

  <!-- Start Field_Home -->
  <Field_Home />
  <!-- End Field_Home -->

  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->

</template>

<script>

import Header from '@/components/home/Header.vue';
import Service from '@/components/home/Service.vue';
import Commercial_Concession_Home from '@/components/home/Commercial_Concession_Home.vue';
import Field_Home from '@/components/home/Field_Home.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Service,
    Commercial_Concession_Home,
    Field_Home,
  }
}

</script>

<style scoped lang="scss"></style>
